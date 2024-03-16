import { PagePaths } from '@/constants';
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
