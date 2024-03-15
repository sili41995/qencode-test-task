import { FC } from 'react';
import { StyledContainer } from './Container.styled';
import { IProps } from './Container.types';

const Container: FC<IProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
