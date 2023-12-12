import styled from 'styled-components';
import { CardProps } from './Card';
import { space } from '../../tokens/space-token';
import ColorMap from '../Color/ColorMap';

interface StyledCardProps {
  isInteractive: CardProps['isInteractive'];
  isPadded: CardProps['isPadded'];
  width?: CardProps['width'];
  height?: CardProps['height'];
  margin?: string;
}

const fixedBoxShadow = `0.3rem 0.35rem 0.5rem ${ColorMap['grey'].light}`;
const fixedBackgroundColor = ColorMap['white'].main;

export const StyledCard = styled.div<StyledCardProps>`
  position: relative;
  padding: ${({ isPadded }) => (isPadded ? space.lg : space.none)};
  background-color: ${fixedBackgroundColor};
  box-shadow: ${fixedBoxShadow};
  min-width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  width: ${({ width }) => `${width}rem` ?? '100%'};
  height: ${({ height }) => `${height}rem` ?? '100%'};
  margin: ${({ margin }) => margin};

  &:hover {
    box-shadow: ${({ isInteractive }) =>
      isInteractive
        ? `0.4rem 0.5rem 0.65rem ${ColorMap['grey'].light}`
        : fixedBoxShadow};
  }

  &:active {
    box-shadow: ${({ isInteractive }) =>
      isInteractive
        ? `0.3rem 0.4rem 0.4rem ${ColorMap['grey'].light}`
        : fixedBoxShadow};
    background-color: ${({ isInteractive }) =>
      isInteractive ? `${ColorMap['grey'].extraLight}` : fixedBackgroundColor};
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: ${({ isInteractive }) =>
      isInteractive
        ? `${ColorMap['grey'].extraLight}80`
        : fixedBackgroundColor};
    z-index: -1;
    border-radius: 0.5rem;
  }

  &:hover:before {
    z-index: 3;
    width: ${({ isInteractive }) => (isInteractive ? '100%' : '0%')};
    height: ${({ isInteractive }) => (isInteractive ? '100%' : '0%')};
  }
`;
