import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { useAppSelector } from '@/hooks/redux';
import { PagePaths } from '@/constants';
import { IProps } from './PublicRoute.types';

export const PublicRoute: FC<IProps> = ({ element, restricted = false }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const location = useLocation();
  const shouldRedirect = isLoggedIn && restricted;
  const goBackPath = location.state?.from ?? PagePaths.main;

  return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;
