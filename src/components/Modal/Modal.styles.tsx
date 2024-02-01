import styled from 'styled-components';

import { FlexCenter } from '../../styles/Common/Common.styles';
import { ModalProps } from './Modal';
import { ColorMap } from '../Color';

export interface WrapperProps {
  $backdropColor: ModalProps['backdropColor'];
}

export interface ContentsProps {
  width?: number;
  height?: number;
}

export const Wrapper = styled(FlexCenter)<WrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ $backdropColor }) =>
    $backdropColor ? $backdropColor : ColorMap['black'].main}B3;
`;

export const StyledModal = styled.dialog`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 2rem;
  border: none;
`;

export const Contents = styled.div<ContentsProps>`
  width: ${({ width }) => (width ? `${width}rem` : '100%')};
`;

export const ButtonContainer = styled(FlexCenter)<ContentsProps>`
  width: 100%;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: flex-end;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  width: 2rem;
  height: 2rem;
  padding: 0;

  &:hover,
  &:focus {
    color: ${ColorMap['grey'].main};
  }
`;
