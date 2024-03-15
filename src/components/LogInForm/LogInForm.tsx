import { PagePaths } from '@/constants';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from './LogInForm.styled';

const LogInForm: FC = () => {
  return (
    <Form>
      <Input type='text' />
      <Input type='text' />
      <Link to={PagePaths.forgotPassword}>Forgot your password?</Link>
      <Button type='submit'>Log in to Qencode</Button>
    </Form>
  );
};

export default LogInForm;
