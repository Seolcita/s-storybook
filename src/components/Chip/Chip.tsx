import React from 'react';
import { ReactElement } from 'react';

import { Colors } from '../Color';
import Typography from '../Typography';
import { Container } from './Chip.styles';

export interface ChipProps {
  title: string;
  color?: Colors;
  bgColor?: Colors;
}

const Chip = ({
  title,
  bgColor = 'primary',
  color = 'white',
}: ChipProps): ReactElement => {
  return (
    <Container $bgColor={bgColor} $title={title} data-testid='chip'>
      <Typography variant='textXS' color={color} fontWeight='bold'>
        {title}
      </Typography>
    </Container>
  );
};

export default Chip;
export { Chip };
