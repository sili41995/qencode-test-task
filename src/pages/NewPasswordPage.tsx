import AuthForm from '@/components/AuthForm';
import AuthSection from '@/components/AuthSection';
import NewPasswordForm from '@/components/NewPasswordForm';
import { FC } from 'react';

const NewPasswordPage: FC = () => (
  <AuthSection>
    <AuthForm
      title='Create new Password?'
      showAltAuth={true}
      form={<NewPasswordForm />}
    />
  </AuthSection>
);

export default NewPasswordPage;
