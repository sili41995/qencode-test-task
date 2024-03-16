import { ReactNode } from 'react';

export interface IProps {
  title: string;
  form: ReactNode;
  showAltAuth?: boolean;
  redirectLink?: ReactNode;
}
