import { InputTypes } from '@/constants';
import { BtnClickEvent } from '@/types/types';

export interface IProps {
  settings: object;
  type: InputTypes;
  placeholder: string;
  label?: string;
  minLength?: number;
  maxLength?: number;
  showPassBtn?: boolean;
  onClick?: (e: BtnClickEvent) => void;
}
