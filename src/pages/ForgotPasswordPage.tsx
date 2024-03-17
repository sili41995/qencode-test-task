import AuthForm from '@/components/AuthForm';
import AuthSection from '@/components/AuthSection';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';
import { FC } from 'react';

const ForgotPasswordPage: FC = () => (
  <AuthSection>
    <AuthForm
      title='Forgot Password?'
      showAltAuth={true}
      form={<ForgotPasswordForm />}
    />
  </AuthSection>
);

export default ForgotPasswordPage;
