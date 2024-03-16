import { FC } from 'react';
import { IProps } from './SubmitFormBtn.types';
import { Button } from './SubmitFormBtn.styled';

const SubmitFormBtn: FC<IProps> = ({ title, ...otherProps }) => (
  <Button type='submit' {...otherProps}>
    {title}
  </Button>
);

export default SubmitFormBtn;
