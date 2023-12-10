import React from 'react';
import { ReactElement, ReactNode } from 'react';
import { StyledCard } from './Card.styles';

export interface CardProps {
  isInteractive?: boolean;
  isPadded?: boolean;
  children?: ReactNode;
}

const Card = ({
  isInteractive = false,
  isPadded,
  children,
}: CardProps): ReactElement => {
  return (
    <StyledCard isInteractive={isInteractive} isPadded={isPadded}>
      {children}
    </StyledCard>
  );
};

export { Card };
export default Card;
