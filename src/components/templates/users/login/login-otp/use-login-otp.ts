import {FormEvent} from 'react';
import {useObservable} from '@legendapp/state/react';
import {useMutation} from '@tanstack/react-query';
import {useRouter} from 'next/navigation';

import {LoginState} from '@/constants';
import {useLoginDataContext, useLoginStateContext} from '@/contexts';
import {
  SendVerificationCodeInput,
  sendVerificationCodeMutation,
  SigninWitOtpInput,
  signinWitOtpQuery,
  ValidateVerificationCodeInput,
  validateVerificationCodeQuery,
} from '@/graphql';
import {setTokens} from '@/helpers';
import {useCountdown} from '@/hooks';
import {isStringNumeric, Paths} from '@/utils';

export const useLoginOtp = () => {
  const TIMER_COUNT = 180;
  const NUMBER_INPUTS = 4;
  const {$loginState} = useLoginStateContext();
  const {$loginData} = useLoginDataContext();
  const $isFormSubmitted = useObservable(false);
  const $hasError = useObservable(true);
  const router = useRouter();
  const isPhoneNumber = () =>
    !$loginData.phoneOrEmail.get() || isStringNumeric($loginData.phoneOrEmail.get());
  const validateCodeMutation = useMutation({
    mutationFn: (args: ValidateVerificationCodeInput) => validateVerificationCodeQuery(args),
  });
  const sendCodeMutation = useMutation({
    mutationFn: (args: SendVerificationCodeInput) => sendVerificationCodeMutation(args),
  });
  const signinMutation = useMutation({
    mutationFn: (args: SigninWitOtpInput) => signinWitOtpQuery(args),
  });

  const {time, startTimer, resetTimer} = useCountdown(TIMER_COUNT, {autoStart: true});

  const handleReSendVerficationCode = async () => {
    await sendCodeMutation.mutateAsync({
      [isPhoneNumber() ? 'phone' : 'email']: $loginData.phoneOrEmail.get(),
    });
    resetTimer();
    startTimer();
  };

  const handleChange = async (value: string) => {
    $loginData.otp.set(value);
    $hasError.set(!(value.length === NUMBER_INPUTS));
    value.length === NUMBER_INPUTS && (await handleSendForm());
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSendForm();
  };
  const isPending = validateCodeMutation.isPending || signinMutation.isPending;

  const handleSendForm = async () => {
    $isFormSubmitted.set(true);
    if ($hasError.get() || isPending) return;
    try {
      const data = await validateCodeMutation.mutateAsync({
        [isPhoneNumber() ? 'phone' : 'email']: $loginData.phoneOrEmail.get(),
        code: $loginData.otp.get(),
      });
      if ($loginData.isNewUser.get() && !$loginData.isNewUserVerified.get()) {
        $loginData.isNewUserVerified.set(true);
        $loginState.set(LoginState.Password);
        return;
      }

      const signinData = await signinMutation.mutateAsync({
        [isPhoneNumber() ? 'phone' : 'email']: $loginData.phoneOrEmail.get(),
        code: $loginData.otp.get(),
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

  return {
    TIMER_COUNT,
    NUMBER_INPUTS,
    isPending,
    time,
    $isFormSubmitted,
    $loginData,
    $hasError,
    validateCodeMutation,
    $loginState,
    isPhoneNumber,
    startTimer,
    resetTimer,
    handleSubmit,
    handleChange,
    handleReSendVerficationCode,
  };
};
