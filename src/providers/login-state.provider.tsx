'use client';

import React from 'react';
import {useObservable} from '@legendapp/state/react';

import {LoginState} from '@/constants';
import {LoginStateContext} from '@/contexts';

type LoginStateProviderProps = {
  children: React.ReactNode;
};

export default function LoginStateProvider({children}: LoginStateProviderProps) {
  const $loginState = useObservable(LoginState.Form);

  const handleChangeLoginState = React.useMemo(
    () => (inputLoginState: LoginState) => {
      $loginState.set(inputLoginState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <LoginStateContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        $loginState,
        handleChangeLoginState,
      }}
    >
      {children}
    </LoginStateContext.Provider>
  );
}
