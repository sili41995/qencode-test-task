import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '@/components/Loader';
import { Header, Main } from './SharedLayout.styled';
import { navLinks, restrictedNavLinks } from '@/constants';
import NavigationBar from '@/components/NavigationBar';
import Container from '@/components/Container';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <NavigationBar
            navLinks={navLinks}
            restrictedNavLinks={restrictedNavLinks}
          />
        </Container>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
export default SharedLayout;
