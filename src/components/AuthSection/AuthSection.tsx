import { FC } from 'react';
import { IProps } from './AuthSection.types';
import Container from '@/components/Container';
import { StyledSection } from './AuthSection.styled';

const AuthSection: FC<IProps> = ({ children }) => {
  return (
    <StyledSection>
      <Container>{children}</Container>
    </StyledSection>
  );
};

export default AuthSection;
