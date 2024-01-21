import styled, { css } from 'styled-components';
import { ColorMap } from '../Color';
import { FlexCenter } from '../../styles/Common/Common.styles';

export interface ContainerProps {}

export const Container = styled(FlexCenter)`
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: transparent;
  border: none;
  width: 2.5rem;
  height: 2.5rem;

  &:hover,
  &:focus {
    color: ${ColorMap['grey'].main};
  }
`;
