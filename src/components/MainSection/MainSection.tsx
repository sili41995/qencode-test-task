import { FC } from 'react';
import { IProps } from './MainSection.types';
import Container from '@/components/Container';
import { StyledSection } from './MainSection.styled';

const MainSection: FC<IProps> = ({ children }) => {
  return (
    <StyledSection>
      <Container>{children}</Container>
    </StyledSection>
  );
};

export default MainSection;
