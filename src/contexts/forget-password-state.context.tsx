import {createContext, useContext} from 'react';
import {Observable} from '@legendapp/state';

import {ForgetPasswordState} from '@/constants';

export type ForgetPasswordStateContextType = {
  $forgetPasswordState: Observable<ForgetPasswordState>;
  handleChangeForgetPasswordState?: (forgetpasswordstate: ForgetPasswordState) => void;
};

const ForgetPasswordStateContext = createContext<ForgetPasswordStateContextType | null>(null);

function useForgetPasswordStateContext() {
  const forgetpasswordstateContext = useContext(ForgetPasswordStateContext);
  if (!forgetpasswordstateContext) {
    throw new Error('ForgetPasswordStateContext must be used within a <Provider />');
  }

  return forgetpasswordstateContext;
}

export {useForgetPasswordStateContext, ForgetPasswordStateContext};
