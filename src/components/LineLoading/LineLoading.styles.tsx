import styled from 'styled-components';
import { FlexCenter } from '../../styles/Common/Common.styles';
import { LineLoadingProps, LineLoadingSize } from './LineLoading';

type SpanProps = {
  $size: LineLoadingProps['size'];
  $bgColor: string;
  $animationDelay: number;
};

export const Container = styled(FlexCenter)``;

export const Span = styled.span<SpanProps>`
  color: transparent;
  width: ${({ $size }) => ($size === 'sm' ? '0.5rem' : '1rem')};
  height: ${({ $size }) => ($size === 'sm' ? '6rem' : '12rem')};
  margin: ${({ $size }) => ($size === 'sm' ? '0 0.1rem' : '0 0.2rem')};
  border-radius: 1rem;
  background-color: ${({ $bgColor }) => $bgColor};
  animation: loading 1s ease-in-out infinite;
  animation-delay: ${({ $animationDelay }) => $animationDelay}s;

  @keyframes loading {
    0% {
      transform: scaleY(0.1);
    }

    35% {
      transform: scaleY(1);
    }

    60%,
    100% {
      transform: scaleY(0.1);
    }
  }
`;
