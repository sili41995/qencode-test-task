import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { selectIsLoading } from '@/redux/auth/selectors';
import { login } from '@/redux/auth/operations';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import Input from '@/components/Input';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import {
  AuthParams,
  InputTypes,
  Messages,
  PagePaths,
  regExp,
} from '@/constants';
import { makeBlur, toasts } from '@/utils';
import { BtnClickEvent, ICredentials } from '@/types/types';
import { Form, InputsContainer } from './LogInForm.styled';

const LogInForm: FC = () => {
  const [credentials, setCredentials] = useState<ICredentials | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ICredentials>();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
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

  useEffect(() => {
    if (credentials) {
      const promise = dispatch(login(credentials));
      promise
        .unwrap()
        .then(() => {
          toasts.successToast(Messages.greetings);
        })
        .catch((error) => {
          toasts.errorToast(error);
        });

      return () => {
        promise.abort();
      };
    }
  }, [credentials, dispatch]);

  const onSubmit: SubmitHandler<ICredentials> = (data) => {
    setCredentials(data);
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
      <Link to={PagePaths.forgotPassword}>Forgot your password?</Link>
      <SubmitFormBtn title='Log in to Qencode' disabled={isLoading} />
    </Form>
  );
};

export default LogInForm;
