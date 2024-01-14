import React from 'react';
import { ReactElement } from 'react';
import { ColorMap, Colors } from '../Color';
import { Container, Ring } from './Spinner.styles';
import spinnerTokens, {
  SpinnerSizeProperties,
} from '../../tokens/spinner-token';

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const SpinnerSizeMap: Record<SpinnerSize, SpinnerSizeProperties> = {
  xs: spinnerTokens.spinnerXS,
  sm: spinnerTokens.spinnerS,
  md: spinnerTokens.spinnerM,
  lg: spinnerTokens.spinnerL,
  xl: spinnerTokens.spinnerXL,
};

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: Colors;
}

const Spinner = ({
  size = 'md',
  color = 'white',
}: SpinnerProps): ReactElement => {
  return (
    <Container
      $size={SpinnerSizeMap[size]}
      aria-label='loading'
      role='alert'
      aria-busy='true'
    >
      <Ring $color={ColorMap[color]} />
    </Container>
  );
};

export default Spinner;
export { Spinner };
