/* eslint-disable no-nested-ternary */
import {ChangeEvent, FormEvent} from 'react';
import {useObservable} from '@legendapp/state/react';
import {useMutation} from '@tanstack/react-query';
import {useRouter} from 'next/navigation';

import {useForgetPasswordDataContext, useForgetPasswordStateContext} from '@/contexts';
import {
  passRecoveryWithPhoneMutation,
  SendVerificationCodeInput,
  sendVerificationCodeMutation,
  SetPasswordInput,
  SigninInput,
  signinQuery,
} from '@/graphql';
import {setTokens} from '@/helpers';
import {isValidPassword, Paths} from '@/utils';

export const useForgetPassword = () => {
  const {$forgetPasswordData} = useForgetPasswordDataContext();
  const {$forgetPasswordState} = useForgetPasswordStateContext();
  const $isFormSubmitted = useObservable(false);
  const $hasError = useObservable(true);
  const $hasRepeatError = useObservable(true);
  const $repeatPassword = useObservable('');
  const router = useRouter();
  const hasEmail = $forgetPasswordData.hasEmail.get();

  const recoveryPassMutation = useMutation({
    mutationFn: (args: SetPasswordInput) => passRecoveryWithPhoneMutation(args),
  });
  const singinMutation = useMutation({
    mutationFn: (args: SigninInput) => signinQuery(args),
  });
  const sendCodeMutation = useMutation({
    mutationFn: (args: SendVerificationCodeInput) => sendVerificationCodeMutation(args),
  });
  const isPending = singinMutation.isPending || sendCodeMutation.isPending;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    $isFormSubmitted.set(true);
    if ($hasError.get() || $hasRepeatError.get() || isPending) return;
    try {
      await recoveryPassMutation.mutateAsync({
        [hasEmail ? 'email' : 'phone']: $forgetPasswordData.phoneOrEmail.get(),
        password: $forgetPasswordData.password.get(),
        verificationCode: $forgetPasswordData.otp.get(),
      });
      const signinData = await singinMutation.mutateAsync({
        [hasEmail ? 'email' : 'phone']: $forgetPasswordData.phoneOrEmail.get(),
        password: $forgetPasswordData.password.get(),
      });
      const {accessToken, refreshToken} = signinData.auth.signinWithOtp || {};
      setTokens({accessToken: accessToken as string, refreshToken: refreshToken as string});
      setTimeout(() => {
        router.push(Paths.Home.getPath());
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    $forgetPasswordData.password.set(e.target.value);
    $hasError.set(!isValidPassword(e.target.value));
  };

  const handleRepeatPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    $repeatPassword.set(e.target.value);
    $hasRepeatError.set(
      !(
        $forgetPasswordData.password.get() && $forgetPasswordData.password.get() === e.target.value
      ),
    );
  };

  return {
    $forgetPasswordData,
    $forgetPasswordState,
    $isFormSubmitted,
    $hasError,
    $hasRepeatError,
    $repeatPassword,
    router,
    hasEmail,
    recoveryPassMutation,
    singinMutation,
    sendCodeMutation,
    isPending,
    handleSubmit,
    handlePasswordChange,
    handleRepeatPasswordChange,
  };
};
