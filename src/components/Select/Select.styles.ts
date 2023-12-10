import styled from 'styled-components';
import ColorMap, { ColorVariant } from '../Color/ColorMap';
import { SelectProps } from '.';

export interface StyledSelectProps {
  isOpen: boolean;
  width: SelectProps['width'];
  fullWidth: SelectProps['fullWidth'];
}

export interface SelectInputContainerProps {
  isOpen: StyledSelectProps['isOpen'];
  selectColor: ColorVariant;
  borderColor?: string;
}

export interface CaretProps {
  isOpen: StyledSelectProps['isOpen'];
}

export interface DropdownContainerProps {
  isOpen: StyledSelectProps['isOpen'];
  selectColor: ColorVariant;
}

export interface SelectOptionProps {
  isOpen: StyledSelectProps['isOpen'];
  highlighted: boolean;
  selectColor: ColorVariant;
}

export const StyledSelect = styled.div<StyledSelectProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : `${width}rem`)};
`;

export const SelectInputContainer = styled.div<SelectInputContainerProps>`
  display: flex;
  align-items: center;
  min-width: 25rem;
  min-height: 4rem;
  padding: 1rem 2rem;
  border: ${({ isOpen, selectColor }) =>
    isOpen
      ? `0.2rem solid ${selectColor.main}`
      : `0.2rem solid ${selectColor.extraLight}`};
  border-radius: 0.4rem;
  width: 100%;
  color: ${({ selectColor }) => selectColor.dark};
  background-color: ${() => ColorMap['white'].main};

  &:hover {
    border: ${({ selectColor }) => `0.2rem solid ${selectColor.main}`};
  }
`;

export const Caret = styled.button<CaretProps>`
  border: none;
  background-color: ${() => ColorMap['white'].main};
  transform: ${({ isOpen }) => isOpen && `rotate(-180deg)`};
  transition-duration: 1s;
  margin-left: 1rem;
`;

export const DropdownContainer = styled.div<DropdownContainerProps>`
  display: flex;
  justify-content: center;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  width: 100%;
  overflow: hidden;

  & > ul {
    width: 98%;
    padding: 1rem;
    overflow: hidden;
    border-radius: 0.4rem;
    box-shadow: ${({ selectColor }) =>
      `0.2rem 0.2rem 0.6rem ${selectColor.main}80`};
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(-5%)' : 'translateY(-130%)'};
    transition: 1s;
    transition-timing-function: ease;
    background-color: ${() => ColorMap['white'].main};
  }
`;

export const SelectOption = styled.li<SelectOptionProps>`
  padding: 0.5rem 1rem;
  color: ${() => ColorMap['primary'].dark};
  background-color: ${({ highlighted, selectColor }) =>
    highlighted ? selectColor.background : ColorMap['white'].main};

  &:hover {
    background-color: ${({ selectColor }) => selectColor.background};
  }

  &:active {
    background-color: ${({ selectColor }) => selectColor.extraLight};
  }
`;
