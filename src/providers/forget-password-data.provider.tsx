'use client';

import React from 'react';
import {useObservable} from '@legendapp/state/react';

import {ForgetPasswordDataContext, useLoginDataContext} from '@/contexts';

type ForgetPasswordStateProviderProps = {
  children: React.ReactNode;
};

export default function ForgetPasswordStateProvider({children}: ForgetPasswordStateProviderProps) {
  const {$loginData} = useLoginDataContext();
  const $forgetPasswordData = useObservable({
    password: '',
    otp: '',
    phoneOrEmail: '',
    hasEmail: false,
  });
  // $loginData.phoneOrEmail.onChange(({value}) => $forgetPasswordData.phoneOrEmail.set(value));

  return (
    <ForgetPasswordDataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        $forgetPasswordData,
      }}
    >
      {children}
    </ForgetPasswordDataContext.Provider>
  );
}
