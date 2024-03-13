import {FormEvent} from 'react';
import {useObservable} from '@legendapp/state/react';
import {useMutation} from '@tanstack/react-query';

import {ForgetPasswordState} from '@/constants';
import {useForgetPasswordDataContext, useForgetPasswordStateContext} from '@/contexts';
import {
  SendVerificationCodeInput,
  sendVerificationCodeMutation,
  ValidateVerificationCodeInput,
  validateVerificationCodeQuery,
} from '@/graphql';
import {useCountdown} from '@/hooks';

export const useForgetOtp = () => {
  const TIMER_COUNT = 180;
  const NUMBER_INPUTS = 4;
  const {$forgetPasswordState} = useForgetPasswordStateContext();
  const {$forgetPasswordData} = useForgetPasswordDataContext();
  const $isFormSubmitted = useObservable(false);
  const $hasError = useObservable(true);
  const hasEmail = $forgetPasswordData.hasEmail.get();

  const validateCodeMutation = useMutation({
    mutationFn: (args: ValidateVerificationCodeInput) => validateVerificationCodeQuery(args),
  });
  const sendCodeMutation = useMutation({
    mutationFn: (args: SendVerificationCodeInput) => sendVerificationCodeMutation(args),
  });
  const isPending = validateCodeMutation.isPending || sendCodeMutation.isPending;

  const {time, startTimer, resetTimer} = useCountdown(TIMER_COUNT, {autoStart: true});

  const handleReSendVerficationCode = async () => {
    await sendCodeMutation.mutateAsync({
      [hasEmail ? 'email' : 'phone']: $forgetPasswordData.phoneOrEmail.get(),
    });
    resetTimer();
    startTimer();
  };

  const handleChange = async (value: string) => {
    $forgetPasswordData.otp.set(value);
    $hasError.set(!(value.length === NUMBER_INPUTS));
    value.length === NUMBER_INPUTS && (await handleSendForm());
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSendForm();
  };

  const handleSendForm = async () => {
    $isFormSubmitted.set(true);
    if ($hasError.get() || isPending) return;
    try {
      const data = await validateCodeMutation.mutateAsync({
        [hasEmail ? 'email' : 'phone']: $forgetPasswordData.phoneOrEmail.get(),
        code: $forgetPasswordData.otp.get(),
      });
      $forgetPasswordState.set(ForgetPasswordState.Password);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    TIMER_COUNT,
    NUMBER_INPUTS,
    $forgetPasswordState,
    $forgetPasswordData,
    $isFormSubmitted,
    $hasError,
    hasEmail,
    validateCodeMutation,
    sendCodeMutation,
    time,
    isPending,
    startTimer,
    handleReSendVerficationCode,
    handleChange,
    handleSubmit,
  };
};
