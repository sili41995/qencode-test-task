import { AuthParams, InputTypes, Messages } from '@/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FC, useEffect, useState } from 'react';
import { Form, InputsContainer } from './NewPasswordForm.styled';
import { BtnClickEvent, INewPassProps } from '@/types/types';
import { makeBlur, toasts } from '@/utils';
import SubmitFormBtn from '../SubmitFormBtn';
import Input from '../Input';

const NewPasswordForm: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfPass, setShowConfPass] = useState<boolean>(false);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
  } = useForm<INewPassProps>();
  const isLoading = false;
  const passInputType = showPassword ? InputTypes.text : InputTypes.password;
  const confPassInputType = showConfPass
    ? InputTypes.text
    : InputTypes.password;
  const confPassValueLength = watch('password')?.length ?? 0;

  useEffect(() => {
    errors.password &&
      toasts.errorToast(
        errors.password.type === 'required'
          ? Messages.passReqErr
          : Messages.passMinLengthErr
      );
  }, [isSubmitting, errors]);

  const onSubmit: SubmitHandler<INewPassProps> = (data) => {
    console.log(data);
  };

  const onShowPassBtnClick = (e: BtnClickEvent) => {
    setShowPassword((prevState) => !prevState);
    makeBlur(e.currentTarget);
  };

  const onShowConfPassBtnClick = (e: BtnClickEvent) => {
    setShowConfPass((prevState) => !prevState);
    makeBlur(e.currentTarget);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputsContainer>
        <Input
          onClick={onShowPassBtnClick}
          showPassBtn={true}
          label='Password'
          type={passInputType}
          placeholder='Password'
          minLength={AuthParams.passMinLength}
          settings={{
            ...register('password', {
              required: true,
              minLength: AuthParams.passMinLength,
            }),
          }}
        />
        <Input
          onClick={onShowConfPassBtnClick}
          showPassBtn={true}
          label='Confirm Password'
          type={confPassInputType}
          placeholder='Confirm Password'
          minLength={confPassValueLength}
          maxLength={confPassValueLength}
          settings={{
            ...register('confirmPassword', {
              required: true,
            }),
          }}
        />
      </InputsContainer>
      <SubmitFormBtn title='Reset Password' disabled={isLoading} />
    </Form>
  );
};

export default NewPasswordForm;
