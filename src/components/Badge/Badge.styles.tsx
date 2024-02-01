import styled, { css } from 'styled-components';
import { ColorMap } from '../Color';
import { BadgeProps } from './Badge';

export interface ContainerProps {
  $bgColor: BadgeProps['bgColor'];
  $count: BadgeProps['count'];
}

export const Container = styled.div`
  position: relative;
`;

export const StyledBadge = styled.div<ContainerProps>`
  display: inline-block;
  border-radius: ${({ $count }) => ($count ? '1.5rem' : '50%')};
  padding: ${({ $count }) => ($count ? '0.5rem 1rem' : '0.5rem')};
  background-color: ${({ $bgColor }) =>
    $bgColor ? ColorMap[$bgColor].main : ColorMap['primary'].main};
  position: absolute;
  top: -1rem;
  right: -1rem;
  z-index: 10;

  ${({ $count }) =>
    !$count &&
    css`
      top: 0rem;
      right: 0rem;
      width: 1.5rem;
      height: 1.5rem;
    `};
`;
