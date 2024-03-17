import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '@/components/Loader';
import NavigationBar from '@/components/NavigationBar';
import Container from '@/components/Container';
import { navLinks, restrictedNavLinks } from '@/constants';
import { Header, Main } from './SharedLayout.styled';

const SharedLayout: FC = () => (
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

export default SharedLayout;
