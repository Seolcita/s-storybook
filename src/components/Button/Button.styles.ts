import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
import ColorMap, { ColorVariant } from '../Color/ColorMap';
import { ButtonSizeProperties } from '../../tokens/button-token';

export interface StyledButtonProps {
  variant: ButtonProps['variant'];
  bgColor: ColorVariant;
  textColor: ColorVariant;
  size: ButtonSizeProperties;
  fullWidth: ButtonProps['fullWidth'];
  disabled: ButtonProps['disabled'];
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant, bgColor }) =>
    variant === 'primary' ? bgColor.main : 'transparent'};

  border: ${({ variant, textColor }) =>
    variant === 'primary' ? 'none' : `0.25rem solid ${textColor.main}`};
  border-radius: 0.5rem;
  color: ${({ textColor }) => textColor.main};
  box-shadow: ${({ variant, bgColor, textColor }) =>
    variant === 'primary'
      ? `0.3rem 0.4rem 0.4rem ${bgColor.main}80`
      : `0.3rem 0.4rem 0.4rem ${textColor.main}80`};
  margin: ${({ size }) => size.margin};
  padding: ${({ size }) => size.padding};
  font-size: ${({ size }) => size.fontSize};
  height: ${({ size }) => size.heigh};
  font-weight: ${({ size }) => size.fontWeight};
  line-height: ${({ size }) => size.lineHeight};
  letter-spacing: 0.03rem;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  &:hover {
    background-color: ${({ variant, bgColor }) =>
      variant === 'primary' ? bgColor.dark : 'transparent'};
    box-shadow: ${({ variant, bgColor, textColor }) =>
      variant === 'primary'
        ? `0.6rem 0.6rem 0.8rem ${bgColor.main}80`
        : `0.6rem 0.6rem 0.8rem ${textColor.main}80`};
  }

  &:active {
    box-shadow: ${({ variant, bgColor, textColor }) =>
      variant === 'primary'
        ? `0.2rem 0.3rem 0.3rem ${bgColor.main}E6`
        : `0.2rem 0.3rem 0.3rem ${textColor.main}E6`};
    transform: scale(0.98);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background-color: ${ColorMap['grey'].extraLight};
      box-shadow: none;
      color: ${ColorMap['grey'].light};
      &:hover,
      &:active {
        background-color: ${ColorMap['grey'].extraLight};
        box-shadow: none;
        transform: none;
      }
    `}

  ${({ disabled, variant }) =>
    disabled &&
    variant === 'outlined' &&
    css`
      background-color: transparent;
      border-color: ${ColorMap['grey'].extraLight};
      color: lightgrey;
      &:hover,
      &:active {
        background-color: transparent;
      }
    `}
`;
