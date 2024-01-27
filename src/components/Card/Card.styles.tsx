import styled from 'styled-components';
import { space } from '../../tokens/space-token';
import ColorMap from '../Color/ColorMap';
import { CardProps } from './Card';

interface StyledCardProps {
  $isInteractive: CardProps['isInteractive'];
  $isPadded: CardProps['isPadded'];
  width?: CardProps['width'];
  height?: CardProps['height'];
  $minWidth?: CardProps['minWidth'];
  $maxWidth?: CardProps['maxWidth'];
  $margin?: string;
  $hasBoxShadow: CardProps['hasBoxShadow'];
  $borderRadius?: CardProps['borderRadius'];
}

const fixedBoxShadow = `0.3rem 0.35rem 0.5rem ${ColorMap['grey'].light}`;
const fixedBackgroundColor = ColorMap['white'].main;

export const StyledCard = styled.section<StyledCardProps>`
  position: relative;
  padding: ${({ $isPadded }) => ($isPadded ? space.lg : space.none)};
  background-color: ${fixedBackgroundColor};
  box-shadow: ${({ $hasBoxShadow }) =>
    $hasBoxShadow ? fixedBoxShadow : 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ $borderRadius }) => $borderRadius}rem;
  overflow: hidden;
  margin: ${({ $margin }) => $margin};
  width: ${({ width }) => (width ? `${width}rem` : '100%')};
  cursor: ${({ $isInteractive }) => ($isInteractive ? 'pointer' : 'default')};
  ${({ height }) => height && `height: ${height}rem;`}
  ${({ $minWidth }) => $minWidth && `min-width: ${$minWidth}rem;`}
  ${({ $maxWidth }) => $maxWidth && `max-width: ${$maxWidth}rem;`}

  &:hover {
    box-shadow: ${({ $isInteractive, $hasBoxShadow }) =>
      $hasBoxShadow
        ? $isInteractive
          ? `0.4rem 0.5rem 0.65rem ${ColorMap['grey'].light}`
          : fixedBoxShadow
        : 'none'};
  }

  &:active {
    box-shadow: ${({ $isInteractive, $hasBoxShadow }) =>
      $hasBoxShadow
        ? $isInteractive
          ? `0.3rem 0.4rem 0.4rem ${ColorMap['grey'].light}`
          : fixedBoxShadow
        : 'none'};
  }
`;
