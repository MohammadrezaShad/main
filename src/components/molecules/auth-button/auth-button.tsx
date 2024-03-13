'use client';

import {css, cx} from '@styled/css';
import Link from 'next/link';

import {IconUser} from '@/assets';
import {Button} from '@/components';
import {Paths} from '@/utils';

import {ButtonText} from './auth-button.styled';

interface AuthButtonProps {
  text?: string;
  className?: string;
}

export default function AuthButton({text = 'ورود', className}: AuthButtonProps) {
  const defaultClassName = css({
    border: '1px solid token(colors.backgroundSecondary)',
    boxShadow: 'b3',
    '& svg': {
      transform: 'scale(0.7)',
      '& PATH': {
        fill: 'primary',
      },
    },
  });
  const buttonClass = cx(defaultClassName, className);
  return (
    <Link href={Paths.Auth.Login().getPath()} style={{marginRight: 'auto'}}>
      <Button className={buttonClass} color='backgroundSecondary'>
        <ButtonText>{text}</ButtonText>
        <IconUser />
      </Button>
    </Link>
  );
}
