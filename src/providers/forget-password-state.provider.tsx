'use client';

import React from 'react';
import {useObservable} from '@legendapp/state/react';

import {ForgetPasswordState} from '@/constants';
import {ForgetPasswordStateContext} from '@/contexts';

type ForgetPasswordStateProviderProps = {
  children: React.ReactNode;
};

export default function ForgetPasswordStateProvider({children}: ForgetPasswordStateProviderProps) {
  const $forgetPasswordState = useObservable(ForgetPasswordState.Main);

  const handleChangeForgetPasswordState = React.useMemo(
    () => (inputForgetPasswordState: ForgetPasswordState) => {
      $forgetPasswordState.set(inputForgetPasswordState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <ForgetPasswordStateContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        $forgetPasswordState,
        handleChangeForgetPasswordState,
      }}
    >
      {children}
    </ForgetPasswordStateContext.Provider>
  );
}
