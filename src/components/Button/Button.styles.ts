import styled, { css } from 'styled-components';
import ColorMap, { ColorVariant } from '../Color/ColorMap';
import { ButtonSizeProperties } from '../../tokens';
import { ButtonProps } from '.';

export interface StyledButtonProps {
  $variant: ButtonProps['variant'];
  $bgColor: ColorVariant;
  $textColor: ColorVariant;
  $size: ButtonSizeProperties;
  $fullWidth: ButtonProps['fullWidth'];
  disabled: ButtonProps['disabled'];
  $margin: string;
  $hasShadow: ButtonProps['hasShadow'];
  $borderRadius: ButtonProps['borderRadius'];
}
const getButtonHoverColor = ({
  $variant,
  $bgColor,
}: {
  $variant: ButtonProps['variant'];
  $bgColor: ColorVariant;
}) => {
  if ($variant === 'primary') {
    if ($bgColor === ColorMap['white']) {
      return ColorMap['grey'].extraLight;
    } else if ($bgColor === ColorMap['black']) {
      return ColorMap['grey'].main;
    } else {
      return $bgColor.dark;
    }
  } else {
    return ColorMap['grey'].extraLight;
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ $variant, $bgColor }) =>
    $variant === 'primary' ? $bgColor.main : 'transparent'};

  border: ${({ $variant, $textColor }) =>
    $variant === 'primary' ? 'none' : `0.25rem solid ${$textColor.main}`};
  border-radius: ${({ $borderRadius }) =>
    $borderRadius ? `${$borderRadius}rem` : '0.5rem'};
  color: ${({ $textColor }) => $textColor.main};
  box-shadow: ${({ $variant, $bgColor, $textColor, $hasShadow }) =>
    $hasShadow
      ? $variant === 'primary'
        ? `0.3rem 0.4rem 0.5rem ${$bgColor.main}80`
        : `0.3rem 0.4rem 0.5rem ${$textColor.main}80`
      : 'none'};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $size }) => $size.padding};
  font-size: ${({ $size }) => $size.fontSize};
  font-weight: ${({ $size }) => $size.fontWeight};
  letter-spacing: 0.03rem;
  overflow: hidden;
  transition: background-color 250ms ease;
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};

  &:hover {
    background-color: ${({ $variant, $bgColor }) =>
      getButtonHoverColor({ $variant, $bgColor })};
    box-shadow: ${({ $variant, $bgColor, $textColor, $hasShadow }) =>
      $hasShadow
        ? $variant === 'primary'
          ? `0.4rem 0.6rem 0.6rem ${$bgColor.main}80`
          : `0.4rem 0.6rem 0.6rem ${$textColor.main}80`
        : 'none'};
  }

  &:active {
    box-shadow: ${({ $variant, $bgColor, $textColor, $hasShadow }) =>
      $hasShadow
        ? $variant === 'primary'
          ? `0.2rem 0.3rem 0.3rem ${$bgColor.main}E6`
          : `0.2rem 0.3rem 0.3rem ${$textColor.main}E6`
        : 'none'};
    transform: scale(0.98);
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: ${({ $variant }) =>
      $variant === 'primary'
        ? `${ColorMap['grey'].light}59`
        : `${ColorMap['grey'].light}4D`};
    z-index: ${({ $variant }) => ($variant === 'primary' ? 1 : -1)};
    border-radius: 1rem;
    transition: all 0.5s;
    transform: scale(0);
    transform-origin: center;
  }

  &:focus:before {
    bottom: -20%;
    height: 140%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.75);
    }

    70% {
      transform: scale(0.8);
    }

    100% {
      transform: scale(0.75);
    }
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

  ${({ disabled, $variant }) =>
    disabled &&
    $variant === 'outlined' &&
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
