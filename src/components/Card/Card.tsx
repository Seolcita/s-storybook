import React from 'react';
import { ReactElement, ReactNode } from 'react';
import { StyledCard } from './Card.styles';
import { setSpaceInput, setSpacing } from '../../helper/setSpacing';

export interface CardProps {
  isInteractive?: boolean;
  isPadded?: boolean;
  tabIndex?: number;
  ariaLabel: string;
  width?: number;
  height?: number;
  minWidth?: number;
  maxWidth?: number;
  margin?: setSpaceInput;
  hasBoxShadow?: boolean;
  borderRadius?: number;
  children?: ReactNode;
}

const Card = ({
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
  children,
}: CardProps): ReactElement => {
  const formattedMargin = margin ? setSpacing(margin) : setSpacing('none');
  return (
    <StyledCard
      $isInteractive={isInteractive}
      $isPadded={isPadded}
      tabIndex={tabIndex}
      width={width}
      height={height}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $margin={formattedMargin}
      $hasBoxShadow={hasBoxShadow}
      $borderRadius={borderRadius}
      aria-label={ariaLabel}
    >
      {children}
    </StyledCard>
  );
};

export { Card };
export default Card;
