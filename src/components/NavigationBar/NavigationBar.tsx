import { FC } from 'react';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { useAppSelector } from '@/hooks/redux';
import NavLinks from '@/components/NavLinks';
import { Container, Nav } from './NavigationBar.styled';
import { IProps } from './NavigationBar.types';

const NavigationBar: FC<IProps> = ({ navLinks, restrictedNavLinks }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

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
