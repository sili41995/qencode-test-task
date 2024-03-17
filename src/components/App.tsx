import { FC, lazy, useEffect } from 'react';
import SharedLayout from '@/components/SharedLayout';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
import Loader from '@/components/Loader';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectAccessToken, selectRefreshToken } from '@/redux/auth/selectors';
import { accessToken, refreshToken } from '@/redux/auth/operations';
import PrivateRoute from '@/components/PrivateRoute';
import PublicRoute from './PublicRoute';

const AboutPage = lazy(() => import('@/pages/AboutPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('@/pages/ForgotPasswordPage'));
const NewPasswordPage = lazy(() => import('@/pages/NewPasswordPage'));
const MainPage = lazy(() => import('@/pages/MainPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const App: FC = () => {
  const isRefreshing = false;
  const accToken = useAppSelector(selectAccessToken);
  const refToken = useAppSelector(selectRefreshToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!accToken || !refToken) {
      return;
    }

    dispatch(accessToken({ access_id: accToken }))
      .unwrap()
      .catch(() => {
        dispatch(refreshToken({ refresh_token: refToken }));
      });
  }, [accToken, dispatch, refToken]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route
          index
          element={<PublicRoute restricted element={<LoginPage />} />}
        />
        <Route
          path={PagePaths.about}
          element={<PublicRoute element={<AboutPage />} />}
        />
        <Route
          path={PagePaths.login}
          element={<PublicRoute restricted element={<LoginPage />} />}
        />
        <Route
          path={PagePaths.signUp}
          element={<PublicRoute restricted element={<SignUpPage />} />}
        />
        <Route
          path={PagePaths.forgotPassword}
          element={<PublicRoute restricted element={<ForgotPasswordPage />} />}
        />
        <Route
          path={`${PagePaths.newPassword}/:${PagePaths.dynamicToken}/:${PagePaths.dynamicSecret}`}
          element={<PublicRoute restricted element={<NewPasswordPage />} />}
        />
        <Route
          path={PagePaths.main}
          element={<PrivateRoute element={<MainPage />} />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
