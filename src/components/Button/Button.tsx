import React, { ButtonHTMLAttributes } from 'react';
import { type ReactElement } from 'react';

import buttonTokens, { ButtonSizeProperties } from '../../tokens/button-token';
import { setSpaceInput, setSpacing } from '../../helper/setSpacing';
import ColorMap, { Colors } from '../Color/ColorMap';
import { StyledButton } from './Button.styles';

export type ButtonVariant = 'primary' | 'outlined';
export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export const ButtonSizeMap: Record<ButtonSize, ButtonSizeProperties> = {
  xs: buttonTokens.buttonXS,
  s: buttonTokens.buttonS,
  m: buttonTokens.buttonM,
  l: buttonTokens.buttonL,
  xl: buttonTokens.buttonXL,
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  bgColor?: Colors;
  textColor: Colors;
  size: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  margin?: setSpaceInput;
  hasShadow?: boolean;
  borderRadius?: string;
  ariaLabel: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  variant = 'primary',
  bgColor = 'primary',
  textColor = 'white',
  size = 'm',
  fullWidth = false,
  disabled = false,
  margin,
  hasShadow = true,
  borderRadius = '0.5rem',
  ariaLabel,
  onClick,
  type = 'submit',
  children,
}: ButtonProps): ReactElement => {
  const formattedMargin = margin ? setSpacing(margin) : setSpacing('none');

  return (
    <StyledButton
      $variant={variant}
      $bgColor={ColorMap[bgColor]}
      $textColor={ColorMap[textColor]}
      $size={ButtonSizeMap[size]}
      $fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      $margin={formattedMargin}
      aria-label={ariaLabel}
      $hasShadow={hasShadow}
      $borderRadius={borderRadius}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export { Button };
export default Button;
