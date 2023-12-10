import styled from 'styled-components';
import { CardProps } from './Card';
import { space } from '../../tokens/space-token';
import ColorMap from '../Color/ColorMap';

export interface StyledCardProps {
  isInteractive: CardProps['isInteractive'];
  isPadded: CardProps['isPadded'];
}

export const fixedBoxShadow = `0.4rem 0.5rem 0.5rem ${ColorMap['grey'].extraLight}`;
export const fixedBackgroundColor = ColorMap['white'].main;

export const StyledCard = styled.div<StyledCardProps>`
  padding: ${({ isPadded }) => (isPadded ? space.md : space.none)};
  background-color: ${fixedBackgroundColor};
  box-shadow: ${fixedBoxShadow};
  min-width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: ${({ isInteractive }) =>
      isInteractive
        ? `0.6rem 0.7rem 0.6rem ${ColorMap['grey'].extraLight}`
        : fixedBoxShadow};
    background-color: ${({ isInteractive }) =>
      isInteractive ? ColorMap['grey'].extraLight : fixedBackgroundColor}40;
  }

  &:active {
    box-shadow: ${({ isInteractive }) =>
      isInteractive
        ? `0.3rem 0.4rem 0.4rem ${ColorMap['grey'].extraLight}`
        : fixedBoxShadow};
    background-color: ${({ isInteractive }) =>
      isInteractive ? ColorMap['grey'].extraLight : fixedBackgroundColor}70;
  }
`;
