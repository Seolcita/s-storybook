import React from 'react';
import { ReactElement, ReactNode } from 'react';
import { StyledTile } from './Tile.styles';
import { setSpaceInput, setSpacing } from '../../helper/setSpacing';

export interface TileProps {
  isInteractive?: boolean;
  isPadded?: boolean;
  tabIndex?: number;
  ariaLabel: string;
  fullWidth?: boolean;
  width?: number;
  height?: number;
  minWidth?: number;
  maxWidth?: number;
  margin?: setSpaceInput;
  hasBoxShadow?: boolean;
  borderRadius?: number;
  children?: ReactNode;
}

const Tile = ({
  isInteractive = false,
  isPadded = true,
  tabIndex = 0,
  ariaLabel,
  width,
  height,
  margin,
  hasBoxShadow = true,
  borderRadius = 0.5,
  minWidth,
  maxWidth,
  fullWidth,
  children,
}: TileProps): ReactElement => {
  const formattedMargin = margin ? setSpacing(margin) : setSpacing('none');
  return (
    <StyledTile
      $isInteractive={isInteractive}
      $isPadded={isPadded}
      tabIndex={tabIndex}
      width={width}
      height={height}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $fullWidth={fullWidth}
      $margin={formattedMargin}
      $hasBoxShadow={hasBoxShadow}
      $borderRadius={borderRadius}
      aria-label={ariaLabel}
    >
      {children}
    </StyledTile>
  );
};

export { Tile };
export default Tile;
