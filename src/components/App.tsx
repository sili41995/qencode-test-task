import { FC, lazy } from 'react';
import SharedLayout from '@/components/SharedLayout';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
import Loader from '@/components/Loader';

const LoginPage = lazy(() => import('@/pages/LoginPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('@/pages/ForgotPasswordPage'));
const NewPasswordPage = lazy(() => import('@/pages/NewPasswordPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  const isRefreshing = false;

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route index element={<LoginPage />} />
        <Route path={PagePaths.login} element={<LoginPage />} />
        <Route path={PagePaths.signUp} element={<SignUpPage />} />

        <Route
          path={PagePaths.forgotPassword}
          element={<ForgotPasswordPage />}
        />
        <Route
          path={`${PagePaths.newPassword}/:${PagePaths.dynamicToken}/:${PagePaths.dynamicSecret}`}
          element={<NewPasswordPage />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
