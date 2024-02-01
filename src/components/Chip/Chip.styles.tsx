import styled, { css } from 'styled-components';
import { ColorMap, Colors } from '../Color';

export interface ContainerProps {
  $bgColor: Colors;
  $title: string;
}

export const Container = styled.div<ContainerProps>`
  display: inline-block;
  border-radius: 5rem;
  padding: 0.5rem 1.75rem;
  background-color: ${({ $bgColor }) => ColorMap[$bgColor].main};
  position: relative;
`;
