import { AuthParams, PagePaths } from '@/constants';
import { MouseEvent } from 'react';

export interface INavLink {
  title: string;
  path: PagePaths;
}

export type NavLinks = Readonly<INavLink[]>;

export interface ICredentials {
  email: string;
  password: string;
}

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

export interface INewPassProps {
  password: string;
  password_confirm: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IAuthState {
  accessToken: null | string;
  refreshToken: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface IState {
  auth: IAuthState;
}

export interface IAccessToken {
  access_id: string;
}

export interface IRefreshToken {
  refresh_token: string;
}

export interface IAuthRes {
  access_token: string;
  refresh_token: string;
}

export interface ILoginProps {
  data: ICredentials;
  signal: AbortSignal;
}

export interface IResetPasswordProps {
  email: string;
  redirect_url: AuthParams.redirectURL;
}

export interface ISetPasswordProps {
  token: string;
  secret: string;
  password: string;
  password_confirm: string;
}
