/* eslint-disable no-nested-ternary */
import {observer} from '@legendapp/state/react';
import {css} from '@styled/css';

import {IconChevronRight} from '@/assets';
import {Button, PasswordField, Spinner} from '@/components';
import {ForgetPasswordState} from '@/constants';

import {Block, ErrorText, Form, GoBack, InputWrap, SubTitle, Title} from './forget-password.styled';
import {useForgetPassword} from './use-forget-password';

export default observer(function ForgetPassword() {
  const {
    $forgetPasswordState,
    $isFormSubmitted,
    $hasError,
    $hasRepeatError,
    isPending,
    handleSubmit,
    handlePasswordChange,
    handleRepeatPasswordChange,
  } = useForgetPassword();

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <GoBack onClick={() => $forgetPasswordState.set(ForgetPasswordState.Form)}>
        <IconChevronRight />
        بازگشت
      </GoBack>
      <Title>بازیابی رمز عبور</Title>
      <SubTitle>رمز عبور جدید را وارد کنید</SubTitle>

      <Block>
        <InputWrap className={css({mb: 6})}>
          <PasswordField
            placeholder='رمز عبور خود را بنویسید...'
            title='رمز عبور جدید'
            onChange={handlePasswordChange}
            autoFocus
          />
          {$hasError.get() && $isFormSubmitted.get() ? (
            <ErrorText>حداقل 6 کاراکتر، دارای حروف و عدد</ErrorText>
          ) : null}
        </InputWrap>
        <InputWrap>
          <PasswordField
            placeholder='رمز عبور خود را بنویسید...'
            title='تکرار رمز عبور جدید'
            onChange={handleRepeatPasswordChange}
          />
          {$hasRepeatError.get() && $isFormSubmitted.get() ? (
            <ErrorText>رمز عبور جدید با تکرار آن یکسان نیست</ErrorText>
          ) : null}
        </InputWrap>
      </Block>

      <Button className={css({w: '100%', mt: 10})}>
        {isPending ? (
          <div className={css({ml: 1})}>
            <Spinner />
          </div>
        ) : null}
        تغییر رمز عبور
      </Button>
    </Form>
  );
});
