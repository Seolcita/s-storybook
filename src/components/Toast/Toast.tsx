import React, { ReactNode, useEffect, useState, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTriangleExclamation,
  faCircleCheck,
  faExplosion,
  faXmark,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

import Typography from '../Typography';
import { ColorMap, ColorVariant } from '../Color';
import { CloseButton, Container, IconBox, TextBox } from './Toast.styles';

export type ToastVariant = 'success' | 'warning' | 'error' | 'info';

export interface ToastProps {
  message: string;
  variant: ToastVariant;
}

export interface ToastContents {
  color: ColorVariant;
  icon: ReactNode;
}

const ToastMap: Record<ToastVariant, ToastContents> = {
  success: {
    color: ColorMap['success'],
    icon: (
      <FontAwesomeIcon icon={faCircleCheck} fontSize={'2rem'} color='white' />
    ),
  },
  warning: {
    color: ColorMap['warning'],
    icon: (
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        fontSize={'2rem'}
        color='white'
      />
    ),
  },
  error: {
    color: ColorMap['error'],
    icon: (
      <FontAwesomeIcon icon={faExplosion} fontSize={'2rem'} color='white' />
    ),
  },
  info: {
    color: ColorMap['primary'],
    icon: <FontAwesomeIcon icon={faBell} fontSize={'2rem'} color='white' />,
  },
};

const Toast = ({ message, variant }: ToastProps): ReactElement => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(open);
    if (open && variant !== 'error') {
      const timer = setTimeout(() => setOpen(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleClick = () => setOpen(false);

  const toastVariant = ToastMap[variant];
  return (
    <Container $variant={toastVariant} $isOpen={open} role='alert'>
      <IconBox $variant={toastVariant}>{ToastMap[variant].icon}</IconBox>
      <TextBox>
        <Typography variant='textM' color='white'>
          {message}
        </Typography>
      </TextBox>

      <CloseButton
        $variant={toastVariant}
        onClick={handleClick}
        aria-label='toast close button'
      >
        <FontAwesomeIcon icon={faXmark} fontSize={'1.5rem'} />
      </CloseButton>
    </Container>
  );
};

export default Toast;
export { Toast };
