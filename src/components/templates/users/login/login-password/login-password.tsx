/* eslint-disable no-nested-ternary */
import {observer} from '@legendapp/state/react';
import {css} from '@styled/css';

import {IconChevronRight} from '@/assets';
import {Button, PasswordField, Spinner} from '@/components';
import {LoginState} from '@/constants';
import {Paths} from '@/utils';

import {
  Block,
  Evaluate,
  EvaluateProgress,
  EvaluateText,
  ForgetText,
  Form,
  GoBack,
  InputWrap,
  Note,
  SubText,
} from './login-password.styled';
import {useLoginPassword} from './use-login-password';

export default observer(function LoginPassword() {
  const {
    passwordStrengthText,
    handleSubmit,
    handleChange,
    handleGoToOtp,
    $loginState,
    $loginData,
    $hasError,
    singinMutation,
    isPending,
    passwordStrength,
    $isFormSubmitted,
  } = useLoginPassword();

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <GoBack onClick={() => $loginState.set(LoginState.Form)}>
        <IconChevronRight />
        بازگشت
      </GoBack>
      {$loginData.isNewUser.get() ? (
        <Note>
          حساب کاربری با شماره موبایل
          <span className={css({color: 'primary', textStyle: 'body', px: 1})}>
            {$loginData.phoneOrEmail.get()}
          </span>
          وجود ندارد. برای حساب جدید، رمز عبور را وارد کنید.
        </Note>
      ) : (
        <Note>لطفا رمز عبور خود را وارد کنید</Note>
      )}
      <Block>
        {!$loginData.isNewUser.get() ? (
          <ForgetText href={Paths.Auth.Password.Forget().getPath()}>
            رمز عبور را فراموش کرده اید؟
          </ForgetText>
        ) : null}
        <InputWrap>
          {$loginData.isNewUser.get() && $loginData.password.get() ? (
            <Evaluate>
              <EvaluateText strength={passwordStrength}>{passwordStrengthText}</EvaluateText>
              <EvaluateProgress strength={passwordStrength} />
            </Evaluate>
          ) : null}
          <PasswordField
            placeholder='رمز عبور خود را بنویسید...'
            title='رمز عبور'
            onChange={handleChange}
            autoFocus
          />
        </InputWrap>
      </Block>
      <SubText hasError={!!($isFormSubmitted.get() && (singinMutation.isError || $hasError.get()))}>
        {singinMutation.error?.message || 'حداقل 6 کاراکتر، دارای حروف و عدد'}
      </SubText>
      <Button className={css({w: '100%', mt: 8, mb: 4})}>
        {isPending ? (
          <div className={css({ml: 1})}>
            <Spinner />
          </div>
        ) : null}
        تایید
      </Button>
      <Button
        onClick={handleGoToOtp}
        visual='outlined'
        color='textVariant'
        className={css({w: '100%'})}
        type='button'
      >
        ورود با کد یکبارمصرف
      </Button>
    </Form>
  );
});
