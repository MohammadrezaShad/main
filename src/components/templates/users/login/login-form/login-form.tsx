import {observer} from '@legendapp/state/react';
import {css} from '@styled/css';

import {Button, Spinner, TextField} from '@/components';

import {Copyright, EmailText, ErrorText, Form, Note} from './login-form.styled';
import {useLoginForm} from './use-login-form';

export default observer(function LoginForm() {
  const {
    handleChange,
    handleSubmit,
    isPhoneNumber,
    hasFormError,
    hasSignupEmailError,
    isPending,
    phoneOrEmail,
  } = useLoginForm();

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Note>لطفا شماره موبایل خود را وارد کنید</Note>
      <TextField
        defaultValue={phoneOrEmail}
        onChange={handleChange}
        placeholder='شماره موبایل  خود را بنویسید...'
        title='شماره موبایل'
        autoFocus
      />
      {hasFormError ? (
        <ErrorText>{isPhoneNumber() ? 'شماره' : 'ایمیل'} وارد شده صحیح نمی باشد</ErrorText>
      ) : null}

      {hasSignupEmailError && !hasFormError ? (
        <ErrorText> کاربری با این ایمیل وجود ندارد </ErrorText>
      ) : null}

      <Button className={css({w: '100%', mt: 8, mb: 4})}>
        {isPending ? (
          <div className={css({ml: 1})}>
            <Spinner />
          </div>
        ) : null}
        ورود | ثبت نام
      </Button>
      <Copyright>
        <span className={css({color: 'info'})}>قوانین</span> اگیبی را مطالعه کرده ام و قبول دارم
      </Copyright>
      <EmailText>ورود به حساب کاربری از طریق ایمیل هم امکانپذیر می باشد</EmailText>
    </Form>
  );
});
