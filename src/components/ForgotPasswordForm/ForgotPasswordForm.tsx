import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { resetPassword } from '@/redux/auth/operations';
import { selectIsLoading } from '@/redux/auth/selectors';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import ResetFormBtn from '@/components/ResetFormBtn';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import Input from '@/components/Input';
import { AuthParams, InputTypes, Messages, regExp } from '@/constants';
import { makeBlur, toasts } from '@/utils';
import { BtnClickEvent, IForgotPassword } from '@/types/types';
import { ButtonsList, Form, ListItem } from './ForgotPasswordForm.styled';

const ForgotPasswordForm: FC = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<IForgotPassword>();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    errors.email &&
      toasts.errorToast(
        errors.email.type === 'required'
          ? Messages.emailReqErr
          : Messages.emailRegExpErr
      );
  }, [isSubmitting, errors]);

  const onSubmit: SubmitHandler<IForgotPassword> = ({ email }) => {
    dispatch(resetPassword({ email, redirect_url: AuthParams.redirectURL }))
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.resetPassSuccess);
        reset();
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  const onResetFormBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <ButtonsList>
        <ListItem>
          <SubmitFormBtn title='Send' disabled={isLoading} />
        </ListItem>
        <ListItem>
          <ResetFormBtn title='Cancel' onClick={onResetFormBtnClick} />
        </ListItem>
      </ButtonsList>
    </Form>
  );
};

export default ForgotPasswordForm;
