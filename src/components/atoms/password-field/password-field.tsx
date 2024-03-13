'use client';

import React from 'react';
import {useObservable} from '@legendapp/state/react';
import {cx} from '@styled/css';

import {IconEyeShow, IconEypeHide} from '@/assets';

import {Container, Icon, Input, Label} from './password-field.styled';

type DefaultTextFieldProps = React.InputHTMLAttributes<HTMLInputElement>;
export type TextFieldProps = DefaultTextFieldProps & {
  className?: string;
  title?: string;
  classes?: {
    container?: string;
    label?: string;
  };
};

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props: TextFieldProps, ref) => {
    const {className, classes, disabled, title, type, ...otherProps} = props;
    const inputClassName = cx('peer', className);
    const containerClassName = cx(classes?.container);
    const $isPasswordShow = useObservable(false);
    const isPasswordShow = $isPasswordShow.use();

    return (
      <Container className={containerClassName} disabled={disabled}>
        {title ? <Label>{title}</Label> : null}
        <Input
          className={inputClassName}
          ref={ref}
          disabled={disabled}
          type={isPasswordShow ? 'text' : 'password'}
          {...otherProps}
        />
        <Icon onClick={() => $isPasswordShow.set(!$isPasswordShow.get())}>
          {isPasswordShow ? <IconEyeShow /> : <IconEypeHide />}
        </Icon>
      </Container>
    );
  },
);

export default TextField;
TextField.displayName = 'TextField';
