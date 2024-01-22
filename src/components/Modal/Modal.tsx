import React, { ReactElement, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import {
  ButtonContainer,
  CloseButton,
  Contents,
  StyledModal,
  Wrapper,
} from './Modal.styles';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  width?: number;
  ariaLabel: string;
  backdropColor?: string;
  children: ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  width,
  children,
  ariaLabel,
  backdropColor,
}: ModalProps): ReactElement | null => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper $backdropColor={backdropColor}>
      <StyledModal $ariaLabel={ariaLabel}>
        <Contents width={width}>
          <ButtonContainer>
            <CloseButton onClick={onClose}>
              <FontAwesomeIcon icon={faCircleXmark} size='lg' />
            </CloseButton>
          </ButtonContainer>
          {children}
        </Contents>
      </StyledModal>
    </Wrapper>
  );
};

export default Modal;
export { Modal };
