import OtpInput from 'react-otp-input';
import {Memo, observer} from '@legendapp/state/react';
import {css} from '@styled/css';

import {IconChevronRight} from '@/assets';
import {Button, Spinner} from '@/components';
import {ForgetPasswordState} from '@/constants';
import {getFormatedTime} from '@/utils';

import {ErrorText, Form, GoBack, Note, Retry, Text} from './forget-otp.styled';
import {useForgetOtp} from './use-forget-otp';

export default observer(function LoginOtp() {
  const {
    NUMBER_INPUTS,
    $forgetPasswordState,
    $forgetPasswordData,
    $isFormSubmitted,
    $hasError,
    hasEmail,
    validateCodeMutation,
    time,
    isPending,
    startTimer,
    handleReSendVerficationCode,
    handleChange,
    handleSubmit,
  } = useForgetOtp();

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <GoBack onClick={() => $forgetPasswordState.set(ForgetPasswordState.Form)}>
        <IconChevronRight />
        بازگشت
      </GoBack>
      <Note onClick={() => startTimer()}>کد یکبار مصرف</Note>
      <Text>
        کد فرستاده شده به {!hasEmail ? 'شماره' : 'ایمیل'}
        <span className={css({color: 'primary', textStyle: 'body', px: 1})}>
          {$forgetPasswordData.phoneOrEmail.get()}
        </span>
        را وارد کنید
      </Text>
      <OtpInput
        value={$forgetPasswordData.otp.get()}
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
