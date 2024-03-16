import { BtnClickEvent } from '@/types/types';

export interface IProps {
  title: string;
  onClick: (e: BtnClickEvent) => void;
}
