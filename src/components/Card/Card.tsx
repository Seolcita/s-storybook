import React from 'react';
import { ReactElement, ReactNode } from 'react';
import { StyledCard } from './Card.styles';

export interface CardProps {
  isInteractive?: boolean;
  isPadded?: boolean;
  tabIndex: number;
  ariaLabel: string;
  children?: ReactNode;
}

const Card = ({
  isInteractive = false,
  isPadded,
  tabIndex,
  ariaLabel,
  children,
}: CardProps): ReactElement => {
  return (
    <StyledCard
      isInteractive={isInteractive}
      isPadded={isPadded}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    >
      {children}
    </StyledCard>
  );
};

export { Card };
export default Card;
