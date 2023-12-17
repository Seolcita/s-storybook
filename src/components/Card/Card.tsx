import React from 'react';
import { ReactElement, ReactNode } from 'react';
import { StyledCard } from './Card.styles';
import { setSpaceInput, setSpacing } from '../../helper/setSpacing';

export interface CardProps {
  isInteractive?: boolean;
  isPadded?: boolean;
  tabIndex: number;
  ariaLabel: string;
  width?: number;
  height?: number;
  margin?: setSpaceInput;
  children?: ReactNode;
}

const Card = ({
  isInteractive = true,
  isPadded,
  tabIndex,
  ariaLabel,
  width,
  height,
  margin,
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
      $margin={formattedMargin}
      aria-label={ariaLabel}
    >
      {children}
    </StyledCard>
  );
};

export { Card };
export default Card;
