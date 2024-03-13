import {createContext, useContext} from 'react';
import {ObservableObject} from '@legendapp/state';

export type LoginDataContextType = {
  $loginData: ObservableObject<{
    password: string;
    otp: string;
    phoneOrEmail: string;
    isNewUser: boolean;
    isNewUserVerified: boolean;
  }>;
};

const LoginDataContext = createContext<LoginDataContextType | null>(null);

function useLoginDataContext() {
  const loginContext = useContext(LoginDataContext);
  if (!loginContext) {
    throw new Error('loginDataContext must be used within a <Provider />');
  }

  return loginContext;
}

export {useLoginDataContext, LoginDataContext};
