import { AuthParams, InputTypes, Messages, regExp } from '@/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FC, useEffect, useState } from 'react';
import { Form, InputsContainer } from './SignUpForm.styled';
import { BtnClickEvent, ICredentials } from '@/types/types';
import { makeBlur, toasts } from '@/utils';
import SubmitFormBtn from '../SubmitFormBtn';
import Input from '../Input';

const SignUpForm: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ICredentials>();
  const isLoading = false;
  const inputType = showPassword ? InputTypes.text : InputTypes.password;

  useEffect(() => {
    errors.email &&
      toasts.errorToast(
        errors.email.type === 'required'
          ? Messages.emailReqErr
          : Messages.emailRegExpErr
      );
    errors.password &&
      toasts.errorToast(
        errors.password.type === 'required'
          ? Messages.passReqErr
          : Messages.passMinLengthErr
      );
  }, [isSubmitting, errors]);

  const onSubmit: SubmitHandler<ICredentials> = (data) => {
    console.log(data);
  };

  const onShowPassBtnClick = (e: BtnClickEvent) => {
    setShowPassword((prevState) => !prevState);
    makeBlur(e.currentTarget);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputsContainer>
        <Input
          type={InputTypes.email}
          placeholder='Email'
          settings={{
            ...register('email', {
              required: true,
              pattern: regExp.emailRegEx,
            }),
          }}
        />
        <Input
          onClick={onShowPassBtnClick}
          showPassBtn={true}
          type={inputType}
          placeholder='Password'
          minLength={Number(AuthParams.passMinLength)}
          settings={{
            ...register('password', {
              required: true,
              minLength: Number(AuthParams.passMinLength),
            }),
          }}
        />
      </InputsContainer>
      <SubmitFormBtn title='Sign Up to Qencode' disabled={isLoading} />
    </Form>
  );
};

export default SignUpForm;
