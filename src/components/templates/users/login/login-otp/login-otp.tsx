import OtpInput from 'react-otp-input';
import {Memo, observer} from '@legendapp/state/react';
import {css} from '@styled/css';

import {IconChevronRight} from '@/assets';
import {Button, Spinner} from '@/components';
import {LoginState} from '@/constants';
import {getFormatedTime} from '@/utils';

import {ErrorText, Form, GoBack, Note, Retry, Text} from './login-otp.styled';
import {useLoginOtp} from './use-login-otp';

export default observer(function LoginOtp() {
  const {
    NUMBER_INPUTS,
    isPending,
    time,
    $loginData,
    isPhoneNumber,
    $isFormSubmitted,
    $hasError,
    validateCodeMutation,
    $loginState,
    handleChange,
    handleReSendVerficationCode,
    handleSubmit,
    startTimer,
  } = useLoginOtp();

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <GoBack onClick={() => $loginState.set(LoginState.Form)}>
        <IconChevronRight />
        بازگشت
      </GoBack>
      <Note onClick={() => startTimer()}>کد یکبار مصرف</Note>
      <Text>
        کد فرستاده شده به {isPhoneNumber() ? 'شماره' : 'ایمیل'}
        <span className={css({color: 'primary', textStyle: 'body', px: 1})}>
          {$loginData.phoneOrEmail.get()}
        </span>
        را وارد کنید
      </Text>
      <OtpInput
        value={$loginData.otp.get()}
        onChange={handleChange}
        numInputs={NUMBER_INPUTS}
        renderInput={props => <input {...props} className='otp' inputMode='numeric' />}
        containerStyle={{direction: 'ltr'}}
        shouldAutoFocus
      />
      {($isFormSubmitted.get() && $hasError.get()) || validateCodeMutation.isError ? (
        <ErrorText>کد وارد شده صحیح نمی باشد</ErrorText>
      ) : null}
      <Memo>
        {() => (
          <Retry
            onClick={time.get() ? undefined : handleReSendVerficationCode}
            isActive={!!time.get()}
          >
            ارسال مجدد {time.get() ? `(${getFormatedTime(time.get())})` : null}
          </Retry>
        )}
      </Memo>
      <Button className={css({w: '100%', mt: {base: 8, smDown: 6}})}>
        {isPending ? (
          <div className={css({ml: 1})}>
            <Spinner />
          </div>
        ) : null}
        تایید
      </Button>
    </Form>
  );
});
