import { FC } from 'react';
import Container from '@/components/Container';
import { IProps } from './MainSection.types';
import { StyledSection } from './MainSection.styled';

const MainSection: FC<IProps> = ({ children }) => (
  <StyledSection>
    <Container>{children}</Container>
  </StyledSection>
);

export default MainSection;
