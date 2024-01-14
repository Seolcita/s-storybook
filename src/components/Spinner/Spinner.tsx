import React from 'react';
import { ReactElement } from 'react';
import { FlexCenter } from '../../styles/Common/Common.styles';
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
    <Container $size={SpinnerSizeMap[size]}>
      <Ring $color={ColorMap[color]} />
    </Container>
  );
};

export default Spinner;
export { Spinner };
