import {ChangeEvent, FormEvent} from 'react';
import {useObservable} from '@legendapp/state/react';
import {useMutation} from '@tanstack/react-query';

import {ForgetPasswordState} from '@/constants';
import {useForgetPasswordDataContext, useForgetPasswordStateContext} from '@/contexts';
import {
  findUserByPhoneAndIsVerified,
  FindUserByPhoneInput,
  SendVerificationCodeInput,
  sendVerificationCodeMutation,
} from '@/graphql';
import {isEmail, isMobileNumber} from '@/utils';

export const useForgetForm = () => {
  const isUserMutation = useMutation({
    mutationFn: (args: FindUserByPhoneInput) => findUserByPhoneAndIsVerified(args),
  });
  const sendCodeMutation = useMutation({
    mutationFn: (args: SendVerificationCodeInput) => sendVerificationCodeMutation(args),
  });
  const $isFormSubmitted = useObservable(false);
  const {$forgetPasswordState} = useForgetPasswordStateContext();
  const {$forgetPasswordData} = useForgetPasswordDataContext();
  const hasEmail = $forgetPasswordData.hasEmail.get();
  const $hasError = useObservable(
    hasEmail
      ? !isEmail($forgetPasswordData.phoneOrEmail.get())
      : !isMobileNumber($forgetPasswordData.phoneOrEmail.get()),
  );
  const isPending = isUserMutation.isPending || sendCodeMutation.isPending;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    $isFormSubmitted.set(true);
    if ($hasError.get() || isPending) return;
    try {
      const data = await isUserMutation.mutateAsync({
        [hasEmail ? 'email' : 'phone']: $forgetPasswordData.phoneOrEmail.get(),
      });
      if (data.user.findUserByPhoneAndIsVerified.success) {
        await sendCodeMutation.mutateAsync({
          [hasEmail ? 'email' : 'phone']: $forgetPasswordData.phoneOrEmail.get(),
        });
        $forgetPasswordState.set(ForgetPasswordState.Otp);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    $forgetPasswordData.phoneOrEmail.set(e.target.value);
    $hasError.set(hasEmail ? !isEmail(e.target.value) : !isMobileNumber(e.target.value));
  };

  return {
    isUserMutation,
    sendCodeMutation,
    $isFormSubmitted,
    $forgetPasswordState,
    $forgetPasswordData,
    hasEmail,
    $hasError,
    isPending,
    handleSubmit,
    handleChange,
  };
};
