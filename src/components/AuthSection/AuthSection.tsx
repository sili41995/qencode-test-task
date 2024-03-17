import { FC } from 'react';
import { IProps } from './AuthSection.types';
import { StyledSection } from './AuthSection.styled';

const AuthSection: FC<IProps> = ({ children }) => (
  <StyledSection>{children}</StyledSection>
);

export default AuthSection;
