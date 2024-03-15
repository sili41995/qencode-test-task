import { FC } from 'react';
import { IProps } from './AuthForm.types';
import { Container } from './AuthForm.styled';
import Logo from '@/icons/logo.svg?react';
import AltAuth from '../AltAuth';

const AuthForm: FC<IProps> = ({ title, showAltAuth, form }) => {
  return (
    <Container>
      <Logo />
      {title}
      {showAltAuth && <AltAuth />}
      {form}
    </Container>
  );
};

export default AuthForm;
