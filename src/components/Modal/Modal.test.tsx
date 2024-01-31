import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Modal, { ModalProps } from './Modal';

const props: ModalProps = {
  isOpen: true,
  onClose: jest.fn(),
  width: 500,
  ariaLabel: 'test modal',
  backdropColor: 'rgba(0, 0, 0, 0.5)',
  children: <div>Test Modal</div>,
};

describe('Modal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders Modal when isOpen is true', () => {
    const onClose = jest.fn();

    render(
      <Modal {...props}>
        <div>Test Content</div>
      </Modal>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should not render Modal when isOpen is false', () => {
    const onClose = jest.fn();

    render(
      <Modal {...props} isOpen={false}>
        <div>Test Content</div>
      </Modal>
    );

    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    render(
      <Modal {...props}>
        <div>Test Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(props.onClose).toHaveBeenCalled();
  });
});
