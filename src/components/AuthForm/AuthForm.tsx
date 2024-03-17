import { FC } from 'react';
import AltAuth from '@/components/AltAuth';
import Logo from '@/icons/logo.svg?react';
import { IProps } from './AuthForm.types';
import { Container, Title } from './AuthForm.styled';

const AuthForm: FC<IProps> = ({ title, showAltAuth, form, redirectLink }) => (
  <Container>
    <Logo />
    <Title>{title}</Title>
    {showAltAuth && <AltAuth />}
    {form}
    {redirectLink}
  </Container>
);

export default AuthForm;
