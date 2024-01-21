import React, { ReactNode } from 'react';
import { ReactElement } from 'react';
import { CloseButton, Container } from './Modal.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  children,
}: ModalProps): ReactElement | null => {
  if (!isOpen) {
    return null;
  }

  return (
    <Card ariaLabel='Modal' hasBoxShadow={false} isPadded>
      <Container>
        <CloseButton onClick={onClose}>
          <FontAwesomeIcon icon={faCircleXmark} size='lg' />
        </CloseButton>
        {children}
      </Container>
    </Card>
  );
};

export default Modal;
export { Modal };
