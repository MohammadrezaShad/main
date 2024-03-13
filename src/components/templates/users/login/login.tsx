'use client';

import dynamic from 'next/dynamic';

import {LoginState} from '@/constants';
import {useLoginStateContext} from '@/contexts';

import LoginForm from './login-form';

const LoginPassword = dynamic(() => import('./login-password'));
const LoginOtp = dynamic(() => import('./login-otp'));

export default function Login() {
  const {$loginState} = useLoginStateContext();
  const loginState = $loginState.use();

  if (loginState === LoginState.Password) return <LoginPassword />;
  if (loginState === LoginState.Otp) return <LoginOtp />;

  return <LoginForm />;
}
