import { CSSModule } from '../index';
import { ButtonColor } from './Color'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  outline?: boolean;
  active?: boolean;
  block?: boolean;
  color?: ButtonColor;
  disabled?: boolean;
  tag?: React.ReactType;
  innerRef?: string | ((instance: HTMLButtonElement) => any);

  onClick?: React.MouseEventHandler<any>;
  size?: any;
  id?: string;
  style?: React.CSSProperties;

  cssModule?: CSSModule;
}

declare const Button: React.StatelessComponent<ButtonProps>;
export default Button;
