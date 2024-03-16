import { FC } from 'react';
import { IProps } from './AuthForm.types';
import { Container, Title } from './AuthForm.styled';
import Logo from '@/icons/logo.svg?react';
import AltAuth from '../AltAuth';

const AuthForm: FC<IProps> = ({ title, showAltAuth, form }) => {
  return (
    <Container>
      <Logo />
      <Title>{title}</Title>
      {showAltAuth && <AltAuth />}
      {form}
    </Container>
  );
};

export default AuthForm;
