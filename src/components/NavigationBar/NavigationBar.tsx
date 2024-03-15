import { FC } from 'react';
import { Container, Nav } from './NavigationBar.styled';
import { IProps } from './NavigationBar.types';
import NavLinks from '@/components/NavLinks';

const NavigationBar: FC<IProps> = ({ navLinks, restrictedNavLinks }) => {
  const isLoggedIn = false;

  return (
    <Container>
      <Nav>
        <NavLinks navLinks={navLinks} />
      </Nav>
      {isLoggedIn ? (
        <div>logout btn</div>
      ) : (
        <NavLinks navLinks={restrictedNavLinks} />
      )}
    </Container>
  );
};

export default NavigationBar;
