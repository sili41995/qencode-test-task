import AuthForm from '@/components/AuthForm';
import AuthSection from '@/components/AuthSection';
import LogInForm from '@/components/LogInForm';
import { FC } from 'react';

const LoginPage: FC = () => {
  const title = (
    <>
      Log in to your
      <br />
      account
    </>
  );

  return (
    <AuthSection>
      <AuthForm title={title} showAltAuth={true} form={<LogInForm />} />
    </AuthSection>
  );
};

export default LoginPage;
