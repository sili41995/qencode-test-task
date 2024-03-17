import AuthForm from '@/components/AuthForm';
import AuthSection from '@/components/AuthSection';
import LogInForm from '@/components/LogInForm';
import RedirectLink from '@/components/RedirectLink';
import { PagePaths } from '@/constants';
import { FC } from 'react';

const LoginPage: FC = () => (
  <AuthSection>
    <AuthForm
      title='Log in to your account'
      showAltAuth={true}
      form={<LogInForm />}
      redirectLink={
        <RedirectLink
          title='Is your company new to Qencode?'
          pathLink={PagePaths.signUp}
          pathTitle='Sign up'
        />
      }
    />
  </AuthSection>
);

export default LoginPage;
