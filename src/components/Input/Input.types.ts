import { InputTypes } from '@/constants';
import { BtnClickEvent } from '@/types/types';

export interface IProps {
  settings: object;
  type: InputTypes;
  placeholder: string;
  minLength?: number;
  showPassBtn?: boolean;
  onClick?: (e: BtnClickEvent) => void;
}
