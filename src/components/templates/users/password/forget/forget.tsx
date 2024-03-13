'use client';

import dynamic from 'next/dynamic';

import {ForgetPasswordState} from '@/constants';
import {useForgetPasswordStateContext} from '@/contexts';

import ForgetMain from './forget-main';

const ForgetPassword = dynamic(() => import('./forget-password'));
const ForgetOtp = dynamic(() => import('./forget-otp'));
const ForgetForm = dynamic(() => import('./forget-form'));

export default function Forget() {
  const {$forgetPasswordState} = useForgetPasswordStateContext();
  const forgetState = $forgetPasswordState.use();

  if (forgetState === ForgetPasswordState.Password) return <ForgetPassword />;
  if (forgetState === ForgetPasswordState.Otp) return <ForgetOtp />;
  if (forgetState === ForgetPasswordState.Form) return <ForgetForm />;

  return <ForgetMain />;
}
