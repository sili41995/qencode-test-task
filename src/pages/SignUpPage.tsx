import AuthForm from '@/components/AuthForm';
import AuthSection from '@/components/AuthSection';
import RedirectLink from '@/components/RedirectLink';
import SignUpForm from '@/components/SignUpForm';
import { PagePaths } from '@/constants';
import { FC } from 'react';

const LoginPage: FC = () => {
  return (
    <AuthSection>
      <AuthForm
        title='Sign Up'
        showAltAuth={true}
        form={<SignUpForm />}
        redirectLink={
          <RedirectLink
            title='If you have an account'
            pathLink={PagePaths.login}
            pathTitle='Log in'
          />
        }
      />
    </AuthSection>
  );
};

export default LoginPage;
