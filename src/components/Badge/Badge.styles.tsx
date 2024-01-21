import styled, { css } from 'styled-components';
import { ColorMap } from '../Color';
import { BadgeProps } from './Badge';
import { FlexCenter } from '../../styles/Common/Common.styles';

export interface ContainerProps {
  $bgColor: BadgeProps['bgColor'];
  $title: BadgeProps['title'];
}

export const Container = styled(FlexCenter)<ContainerProps>`
  width: ${({ $title }) => ($title ? '100%' : '1.5rem')};
  height: ${({ $title }) => ($title ? '100%' : '1.5rem')};
  border-radius: ${({ $title }) => ($title ? '1.5rem' : '50%')};
  padding: ${({ $title }) => ($title ? '0.5rem 1.7rem' : '0.5rem')};
  background-color: ${({ $bgColor }) =>
    $bgColor ? ColorMap[$bgColor].main : 'black'};

  ${({ $title }) =>
    !$title &&
    css`
      position: absolute;
      top: 1rem;
      right: 1rem;
    `};
`;
