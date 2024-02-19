import styled from 'styled-components';
import { space } from '../../tokens/space-token';
import ColorMap from '../Color/ColorMap';
import { TileProps } from './Tile';

interface StyledCardProps {
  $isInteractive: TileProps['isInteractive'];
  $isPadded: TileProps['isPadded'];
  width?: TileProps['width'];
  height?: TileProps['height'];
  $fullWidth?: TileProps['fullWidth'];
  $minWidth?: TileProps['minWidth'];
  $maxWidth?: TileProps['maxWidth'];
  $margin?: string;
  $hasBoxShadow: TileProps['hasBoxShadow'];
  $borderRadius?: TileProps['borderRadius'];
}

const fixedBoxShadow = `0.3rem 0.35rem 0.5rem ${ColorMap['grey'].light}`;
const fixedBackgroundColor = ColorMap['white'].main;

export const StyledTile = styled.section<StyledCardProps>`
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
  cursor: ${({ $isInteractive }) => ($isInteractive ? 'pointer' : 'default')};
  ${({ $fullWidth }) => $fullWidth && `width: 100%;`}
  ${({ width }) => width && `width: ${width}rem;`}
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
