import styled, { css } from 'styled-components';
import { ColorMap } from '../Color';
import { BadgeProps } from './Badge';

export interface ContainerProps {
  $bgColor: BadgeProps['bgColor'];
  $title: BadgeProps['title'];
}

export const Container = styled.div<ContainerProps>`
  display: inline-block;
  border-radius: ${({ $title }) => ($title ? '1.5rem' : '50%')};
  padding: ${({ $title }) => ($title ? '0.35rem 1.2rem' : '0.5rem')};
  background-color: ${({ $bgColor }) =>
    $bgColor ? ColorMap[$bgColor].main : 'black'};
  position: relative;

  ${({ $title }) =>
    !$title &&
    css`
      position: absolute;
      top: -0.7rem;
      right: -0.7rem;
      width: 1.5rem;
      height: 1.5rem;
    `};
`;
