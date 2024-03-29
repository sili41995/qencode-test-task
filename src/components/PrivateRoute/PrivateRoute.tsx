import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '@/redux/auth/selectors';
import { useAppSelector } from '@/hooks/redux';
import { PagePaths } from '@/constants';
import { IProps } from './PrivateRoute.types';

const PrivateRoute: FC<IProps> = ({ element }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const location = useLocation();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <Navigate to={PagePaths.login} state={{ from: location }} />
  ) : (
    element
  );
};

export default PrivateRoute;
