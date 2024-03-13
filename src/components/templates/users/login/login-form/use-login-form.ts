import {ChangeEvent, FormEvent} from 'react';
import {useObservable} from '@legendapp/state/react';
import {useMutation} from '@tanstack/react-query';

import {LoginState} from '@/constants';
import {useLoginDataContext, useLoginStateContext} from '@/contexts';
import {
  findUserByPhoneAndIsVerified,
  FindUserByPhoneInput,
  SignupWithPhoneInput,
  signupWithPhoneMutation,
} from '@/graphql';
import {isEmail, isMobileNumber, isStringNumeric} from '@/utils';

export const useLoginForm = () => {
  const {$loginState} = useLoginStateContext();
  const {$loginData} = useLoginDataContext();
  const isUserMutation = useMutation({
    mutationFn: (args: FindUserByPhoneInput) => findUserByPhoneAndIsVerified(args),
  });
  const signUpMutation = useMutation({
    mutationFn: (args: SignupWithPhoneInput) => signupWithPhoneMutation(args),
  });
  const $isFormSubmitted = useObservable(false);

  const isPhoneNumber = () =>
    !$loginData.phoneOrEmail.get() || isStringNumeric($loginData.phoneOrEmail.get());
  const hasError = (value: string) => (isPhoneNumber() ? !isMobileNumber(value) : !isEmail(value));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    $isFormSubmitted.set(true);
    if ($hasError.get() || isPending) return;
    try {
      const data = await isUserMutation.mutateAsync({
        [isPhoneNumber() ? 'phone' : 'email']: $loginData.phoneOrEmail.get(),
      });
      if (data.user.findUserByPhoneAndIsVerified.success) {
        $loginState.set(LoginState.Password);
        return;
      }
      $loginData.isNewUser.set(true);
      await signUpMutation.mutateAsync({phone: $loginData.phoneOrEmail.get()});
      $loginState.set(LoginState.Otp);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    $loginData.phoneOrEmail.set(value);
    $hasError.set(hasError(value));
  };

  const $hasError = useObservable(hasError($loginData.phoneOrEmail.get()));
  const isPending = isUserMutation.isPending || signUpMutation.isPending;
  const hasSignupEmailError =
    !isPhoneNumber() &&
    !!isUserMutation.data &&
    $isFormSubmitted.get() &&
    !isUserMutation.data?.user.findUserByPhoneAndIsVerified.success;
  const hasFormError = $isFormSubmitted.get() && $hasError.get();
  const phoneOrEmail = $loginData.phoneOrEmail.get();

  return {
    hasSignupEmailError,
    hasFormError,
    isPending,
    phoneOrEmail,
    handleSubmit,
    handleChange,
    isPhoneNumber,
  };
};
