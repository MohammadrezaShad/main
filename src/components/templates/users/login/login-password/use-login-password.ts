/* eslint-disable no-nested-ternary */
import {ChangeEvent, FormEvent} from 'react';
import {useObservable} from '@legendapp/state/react';
import {useMutation} from '@tanstack/react-query';
import {useRouter} from 'next/navigation';

import {LoginState} from '@/constants';
import {useLoginDataContext, useLoginStateContext} from '@/contexts';
import {
  SendVerificationCodeInput,
  sendVerificationCodeMutation,
  SetPasswordInput,
  setPasswordMutation,
  SigninInput,
  signinQuery,
} from '@/graphql';
import {setTokens} from '@/helpers';
import {evaluatePasswordStrength, isStringNumeric, isValidPassword, Paths} from '@/utils';

export const useLoginPassword = () => {
  const {$loginState} = useLoginStateContext();
  const {$loginData} = useLoginDataContext();
  const $isFormSubmitted = useObservable(false);
  const $hasError = useObservable(true);
  const router = useRouter();
  const isPhoneNumber = () =>
    !$loginData.phoneOrEmail.get() || isStringNumeric($loginData.phoneOrEmail.get());

  const setPassMutation = useMutation({
    mutationFn: (args: SetPasswordInput) => setPasswordMutation(args),
  });
  const singinMutation = useMutation({
    mutationFn: (args: SigninInput) => signinQuery(args),
  });
  const sendCodeMutation = useMutation({
    mutationFn: (args: SendVerificationCodeInput) => sendVerificationCodeMutation(args),
  });
  const isPending = setPassMutation.isPending || singinMutation.isPending;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    $isFormSubmitted.set(true);
    if ($hasError.get() || isPending) return;
    try {
      if ($loginData.isNewUser.get()) {
        const data = await setPassMutation.mutateAsync({
          phone: $loginData.phoneOrEmail.get(),
          password: $loginData.password.get(),
          verificationCode: $loginData.otp.get(),
        });
      }
      const signinData = await singinMutation.mutateAsync({
        [isPhoneNumber() ? 'phone' : 'email']: $loginData.phoneOrEmail.get(),
        password: $loginData.password.get(),
      });
      const {accessToken, refreshToken} = signinData.auth.signin || {};
      setTokens({accessToken: accessToken as string, refreshToken: refreshToken as string});
      setTimeout(() => {
        router.push(Paths.Home.getPath());
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    $loginData.password.set(e.target.value);
    $hasError.set(!isValidPassword(e.target.value));
  };

  const handleGoToOtp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    await sendCodeMutation.mutateAsync({
      [isPhoneNumber() ? 'phone' : 'email']: $loginData.phoneOrEmail.get(),
    });
    $loginState.set(LoginState.Otp);
  };

  const passwordStrength = evaluatePasswordStrength($loginData.password.get());
  const passwordStrengthText =
    passwordStrength === 'Weak' ? 'ضعیف' : passwordStrength === 'Medium' ? 'متوسط' : 'قوی';

  return {
    passwordStrengthText,
    handleSubmit,
    handleChange,
    handleGoToOtp,
    $loginState,
    $loginData,
    $hasError,
    isPhoneNumber,
    setPassMutation,
    singinMutation,
    sendCodeMutation,
    isPending,
    passwordStrength,
    $isFormSubmitted,
  };
};
