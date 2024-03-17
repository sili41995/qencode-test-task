import { AuthParams, InputTypes, Messages, regExp } from '@/constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FC, useEffect } from 'react';
import { ButtonsList, Form, ListItem } from './ForgotPasswordForm.styled';
import { BtnClickEvent, IForgotPassword } from '@/types/types';
import { makeBlur, toasts } from '@/utils';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import Input from '@/components/Input';
import ResetFormBtn from '@/components/ResetFormBtn';
import { resetPassword } from '@/redux/auth/operations';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectIsLoading } from '@/redux/auth/selectors';

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
