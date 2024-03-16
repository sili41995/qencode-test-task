import { FC } from 'react';
import { IProps } from './Input.types';
import { InputWrap, ShowPassBtn, StyledInput } from './Input.styled';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { InputTypes } from '@/constants';

const Input: FC<IProps> = ({
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

  return showPassBtn ? (
    <InputWrap>
      {input}
      <ShowPassBtn type='button' onClick={onClick}>
        {showPassBtnIcon}
      </ShowPassBtn>
    </InputWrap>
  ) : (
    input
  );
};

export default Input;
