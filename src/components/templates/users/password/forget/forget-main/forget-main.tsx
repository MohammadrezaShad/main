import {observer} from '@legendapp/state/react';
import {css} from '@styled/css';

import {IconChevronLeft} from '@/assets';
import {ForgetPasswordState} from '@/constants';
import {useForgetPasswordDataContext, useForgetPasswordStateContext} from '@/contexts';

import {Section, SubTitle, Title} from './forget-main.styled';

export default observer(function ForgeMain() {
  const {handleChangeForgetPasswordState} = useForgetPasswordStateContext();
  const {$forgetPasswordData} = useForgetPasswordDataContext();

  const handleGoToForgetPasswordWithEmail = () => {
    $forgetPasswordData.hasEmail.set(true);
    handleChangeForgetPasswordState?.(ForgetPasswordState.Form);
  };
  const handleGoToForgetPasswordWithPhone = () => {
    $forgetPasswordData.hasEmail.set(false);
    handleChangeForgetPasswordState?.(ForgetPasswordState.Form);
  };

  return (
    <>
      <Title>بازیابی رمز عبور</Title>
      <SubTitle>
        رمز عبور خود را فراموش کرده اید، کدام یک از اطلاعات زیر را به خاطر می آورید؟
      </SubTitle>
      <Section onClick={handleGoToForgetPasswordWithPhone}>
        بازیابی رمز عبور از طریق شماره موبایل
        <IconChevronLeft />
      </Section>
      <Section onClick={handleGoToForgetPasswordWithEmail} className={css({mt: 4})}>
        بازیابی رمز عبور از طریق ایمیل
        <IconChevronLeft />
      </Section>
    </>
  );
});
