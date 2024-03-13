'use client';

import React from 'react';
import {useObservable} from '@legendapp/state/react';

import {LoginDataContext} from '@/contexts';

type LoginDataProviderProps = {
  children: React.ReactNode;
};

export default function LoginDataProvider({children}: LoginDataProviderProps) {
  const $loginData = useObservable({
    password: '',
    otp: '',
    phoneOrEmail: '',
    isNewUser: false,
    isNewUserVerified: false,
  });

  return (
    <LoginDataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        $loginData,
      }}
    >
      {children}
    </LoginDataContext.Provider>
  );
}
