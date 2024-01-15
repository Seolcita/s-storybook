import styled from 'styled-components';
import { ColorVariant } from '../Color';
import { SpinnerSizeProperties } from '../../tokens/spinner-token';
import { FlexCenter } from '../../styles/Common/Common.styles';

type ContainerProps = {
  $size: SpinnerSizeProperties;
};

type RingProps = {
  $color: ColorVariant;
};

export const Container = styled(FlexCenter)<ContainerProps>`
  display: relative;
  height: ${({ $size }) => $size.height};
  width: ${({ $size }) => $size.width};
`;

export const Ring = styled.div<RingProps>`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  border-left: ${({ $color }) => `0.25rem solid ${$color.main}`};
  border-top: ${({ $color }) => `0.25rem solid ${$color.main}`};
  animation: rotating 1s linear infinite;

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
