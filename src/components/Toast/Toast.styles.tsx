import styled from 'styled-components';
import { ToastContents } from './Toast';
import { ColorMap } from '../Color';

export interface ContainerProps {
  $variant: ToastContents;
  $isOpen: boolean;
}

export interface IconBoxProps {
  $variant: ToastContents;
}

export interface CloseButtonProps {
  $variant: ToastContents;
}

export const Container = styled.div.attrs({
  'aria-live': 'assertive',
  'aria-atomic': 'true',
})<ContainerProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  align-items: center;
  min-width: 30rem;
  min-height: 5rem;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  background-color: ${({ $variant }) => $variant.color.dark};
`;

export const TextBox = styled.div`
  display: flex;
  margin: 0 1rem;
  flex-grow: 1;
`;

export const IconBox = styled.div<IconBoxProps>`
  display: flex;
  width: 3rem;
  height: 3rem;
  height: 100%;
`;

export const CloseButton = styled.button<CloseButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${ColorMap['white'].main};
  transition: all 0.3s ease-in-out;
  border-radius: 5rem;

  &:hover {
    background-color: ${ColorMap['white'].main};
    color: ${({ $variant }) => $variant.color.dark};
  }

  &:active {
    background-color: ${ColorMap['grey'].extraLight};
  }
`;
