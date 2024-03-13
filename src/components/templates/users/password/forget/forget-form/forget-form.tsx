import {observer} from '@legendapp/state/react';
import {css} from '@styled/css';

import {IconChevronRight} from '@/assets';
import {Button, Spinner, TextField} from '@/components';
import {ForgetPasswordState} from '@/constants';

import {ErrorText, Form, GoBack, SubTitle, Title} from './forget-form.styled';
import {useForgetForm} from './use-forget-form';

export default observer(function LoginForm() {
  const {
    isUserMutation,
    $isFormSubmitted,
    $forgetPasswordData,
    $forgetPasswordState,
    hasEmail,
    $hasError,
    isPending,
    handleSubmit,
    handleChange,
  } = useForgetForm();

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <GoBack onClick={() => $forgetPasswordState.set(ForgetPasswordState.Main)}>
        <IconChevronRight />
        بازگشت
      </GoBack>
      <Title>بازیابی رمز عبور از طریق {!hasEmail ? 'شماره موبایل' : 'ایمیل'} </Title>
      <SubTitle>
        برای احراز هویت و دریافت رمز یکبارمصرف {!hasEmail ? 'شماره' : 'ایمیل'} خود را وارد کنید.
      </SubTitle>
      <TextField
        defaultValue={$forgetPasswordData.phoneOrEmail.get()}
        onChange={handleChange}
        placeholder={!hasEmail ? 'شماره موبایل خود را بنویسید' : 'ایمیل خود را بنویسید'}
        title={!hasEmail ? 'شماره موبایل' : 'ایمیل'}
        autoFocus
      />
      {(!isUserMutation.data?.user.findUserByPhoneAndIsVerified.success &&
        isUserMutation.isSuccess) ||
      ($isFormSubmitted.get() && $hasError.get()) ? (
        <ErrorText>{!hasEmail ? 'شماره' : 'ایمیل'} وارد شده صحیح نمی باشد</ErrorText>
      ) : null}
      <Button className={css({w: '100%', mt: 11})}>
        {isPending ? (
          <div className={css({ml: 1})}>
            <Spinner />
          </div>
        ) : null}
        ارسال کد یکبارمصرف
      </Button>
    </Form>
  );
});
