import {createContext, useContext} from 'react';
import {Observable} from '@legendapp/state';

import {LoginState} from '@/constants';

export type LoginStateContextType = {
  $loginState: Observable<LoginState>;
  handleChangeLoginState?: (loginstate: LoginState) => void;
};

const LoginStateContext = createContext<LoginStateContextType | null>(null);

function useLoginStateContext() {
  const loginstateContext = useContext(LoginStateContext);
  if (!loginstateContext) {
    throw new Error('LoginStateContext must be used within a <Provider />');
  }

  return loginstateContext;
}

export {useLoginStateContext, LoginStateContext};
