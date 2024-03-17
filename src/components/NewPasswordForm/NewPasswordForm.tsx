import { AuthParams, InputTypes, Messages, PagePaths } from '@/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FC, useEffect, useState } from 'react';
import { Form, InputsContainer } from './NewPasswordForm.styled';
import { BtnClickEvent, INewPassProps } from '@/types/types';
import { makeBlur, toasts } from '@/utils';
import SubmitFormBtn from '../SubmitFormBtn';
import Input from '../Input';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectIsLoading } from '@/redux/auth/selectors';
import { setPassword } from '@/redux/auth/operations';
import { useParams } from 'react-router-dom';

const NewPasswordForm: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfPass, setShowConfPass] = useState<boolean>(false);
  const params = useParams();
  const secret = params[PagePaths.dynamicSecret] ?? '';
  const token = params[PagePaths.dynamicToken] ?? '';
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
    reset,
  } = useForm<INewPassProps>();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const passInputType = showPassword ? InputTypes.text : InputTypes.password;
  const confPassInputType = showConfPass
    ? InputTypes.text
    : InputTypes.password;
  const confPassValueLength = watch('password')?.length ?? 0;

  useEffect(() => {
    console.log(token);
    console.log(secret);
  });

  useEffect(() => {
    errors.password &&
      toasts.errorToast(
        errors.password.type === 'required'
          ? Messages.passReqErr
          : Messages.passMinLengthErr
      );
  }, [isSubmitting, errors]);

  const onSubmit: SubmitHandler<INewPassProps> = (data) => {
    dispatch(setPassword({ ...data, secret, token }))
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.setPasswordSuccess);
        reset();
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
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
          minLength={Number(AuthParams.passMinLength)}
          settings={{
            ...register('password', {
              required: true,
              minLength: Number(AuthParams.passMinLength),
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
            ...register('password_confirm', {
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
