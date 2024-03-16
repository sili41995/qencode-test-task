import { FC } from 'react';
import { IProps } from './ResetFormBtn.types';
import { Button } from './ResetFormBtn.styled';

const ResetFormBtn: FC<IProps> = ({ title, ...otherProps }) => (
  <Button type='reset' {...otherProps}>
    {title}
  </Button>
);

export default ResetFormBtn;
