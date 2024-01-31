import React from 'react';
import { ReactElement } from 'react';

import { Colors } from '../Color';
import Typography from '../Typography';
import { Container } from './Badge.styles';

export interface BadgeProps {
  title?: string | number;
  color?: Colors;
  bgColor?: Colors;
}

const Badge = ({
  title,
  bgColor,
  color = 'white',
}: BadgeProps): ReactElement => {
  return (
    <Container $bgColor={bgColor} $title={title} aria-label='badge'>
      <Typography variant='textXS' color={color} fontWeight='bold'>
        {title}
      </Typography>
    </Container>
  );
};

export default Badge;
export { Badge };
