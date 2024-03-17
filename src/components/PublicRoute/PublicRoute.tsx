import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { useAppSelector } from '@/hooks/redux';
import { IProps } from './PublicRoute.types';
import { PagePaths } from '@/constants';

export const PublicRoute = ({ element, restricted = false }: IProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const location = useLocation();
  const shouldRedirect = isLoggedIn && restricted;
  const goBackPath = location.state?.from ?? PagePaths.main;

  return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;
