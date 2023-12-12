import styled from 'styled-components';
import { CardProps } from './Card';
import { space } from '../../tokens/space-token';
import ColorMap from '../Color/ColorMap';

export interface StyledCardProps {
  isInteractive: CardProps['isInteractive'];
  isPadded: CardProps['isPadded'];
}

const fixedBoxShadow = `0.3rem 0.35rem 0.5rem ${ColorMap['grey'].light}`;
const fixedBackgroundColor = ColorMap['white'].main;

export const StyledCard = styled.div<StyledCardProps>`
  padding: ${({ isPadded }) => (isPadded ? space.md : space.none)};
  background-color: ${fixedBackgroundColor};
  box-shadow: ${fixedBoxShadow};
  min-width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 250ms ease;
  border-radius: 0.5rem;

  &:hover {
    box-shadow: ${({ isInteractive }) =>
      isInteractive
        ? `0.4rem 0.5rem 0.65rem ${ColorMap['grey'].light}`
        : fixedBoxShadow};
    background-color: ${({ isInteractive }) =>
      isInteractive
        ? `${ColorMap['grey'].extraLight}1A`
        : fixedBackgroundColor};
  }

  &:active {
    box-shadow: ${({ isInteractive }) =>
      isInteractive
        ? `0.3rem 0.4rem 0.4rem ${ColorMap['grey'].light}`
        : fixedBoxShadow};
    background-color: ${({ isInteractive }) =>
      isInteractive
        ? `${ColorMap['grey'].extraLight}80`
        : fixedBackgroundColor};
  }
`;
