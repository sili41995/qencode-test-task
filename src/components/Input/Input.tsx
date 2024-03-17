import { FC } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { InputTypes } from '@/constants';
import { IProps } from './Input.types';
import {
  InputWrap,
  Label,
  ShowPassBtn,
  StyledInput,
  Title,
} from './Input.styled';

const Input: FC<IProps> = ({
  label,
  settings,
  showPassBtn,
  type,
  onClick,
  ...otherProps
}) => {
  const input = <StyledInput type={type} {...otherProps} {...settings} />;
  const isPasswordType = type === InputTypes.password;
  const showPassBtnIcon = isPasswordType ? (
    <LuEye size={20} />
  ) : (
    <LuEyeOff size={20} />
  );

  const inputWithBtn = showPassBtn ? (
    <InputWrap>
      {input}
      <ShowPassBtn type='button' onClick={onClick}>
        {showPassBtnIcon}
      </ShowPassBtn>
    </InputWrap>
  ) : (
    input
  );

  return label ? (
    <Label>
      <Title>{label}</Title>
      {inputWithBtn}
    </Label>
  ) : (
    inputWithBtn
  );
};

export default Input;
