import styled from 'styled-components';

import { FlexCenter } from '../../styles/Common/Common.styles';
import { ModalProps } from './Modal';
import { ColorMap } from '../Color';

export interface WrapperProps {
  $backdropColor: ModalProps['backdropColor'];
}
export interface StyledModalProps {
  width?: ModalProps['width'];
  $ariaLabel: ModalProps['ariaLabel'];
}

export interface ContentsProps {
  width?: number;
  height?: number;
}

export const Wrapper = styled(FlexCenter)<WrapperProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ $backdropColor }) =>
    $backdropColor ?? ColorMap['grey'].dark};
`;

export const StyledModal = styled.dialog.attrs((props: StyledModalProps) => ({
  role: 'dialog',
  'aria-modal': true,
  'aria-labelledby': props.$ariaLabel,
}))<StyledModalProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 2rem;
  border: none;
`;

export const Contents = styled.div<ContentsProps>`
  position: relative;
  width: ${({ width }) => (width ? `${width}rem` : '100%')};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    color: ${ColorMap['grey'].main};
  }
`;
