import {createContext, useContext} from 'react';
import {ObservableObject} from '@legendapp/state';

export type ForgetPasswordDataContextType = {
  $forgetPasswordData: ObservableObject<{
    password: string;
    otp: string;
    phoneOrEmail: string;
    hasEmail: boolean;
  }>;
};

const ForgetPasswordDataContext = createContext<ForgetPasswordDataContextType | null>(null);

function useForgetPasswordDataContext() {
  const forgetPasswordContext = useContext(ForgetPasswordDataContext);
  if (!forgetPasswordContext) {
    throw new Error('forgetPasswordDataContext must be used within a <Provider />');
  }

  return forgetPasswordContext;
}

export {useForgetPasswordDataContext, ForgetPasswordDataContext};
