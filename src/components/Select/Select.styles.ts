import styled from 'styled-components';
import ColorMap, { ColorVariant } from '../Color/ColorMap';
import { SelectProps } from '.';

export interface SelectContainerProps {
  width: SelectProps['width'];
  height: SelectProps['height'];
  $fullWidth: SelectProps['fullWidth'];
}

export interface StyledSelectProps {
  $isOpen: boolean;
  $selectColor: ColorVariant;
}

export interface CaretProps {
  $isOpen: boolean;
}

export interface DropdownContainerProps {
  $isOpen: boolean;
  $selectColor: ColorVariant;
  width: SelectProps['width'];
  $fullWidth: SelectProps['fullWidth'];
}

export interface SelectOptionProps {
  $isOpen: boolean;
  $highlighted: boolean;
  $selectColor: ColorVariant;
}

export const SelectContainer = styled.div<SelectContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width, $fullWidth }) => ($fullWidth ? '100%' : `${width}rem`)};
  height: ${({ height }) => (height ? `${height}rem` : '40rem')};
  overflow: 'hidden';
`;

export const StyledSelect = styled.div<StyledSelectProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 20rem;
  width: 100%;
  height: 4rem;
  padding: 1rem 2rem;
  border: ${({ $isOpen, $selectColor }) =>
    $isOpen
      ? `0.2rem solid ${$selectColor.main}`
      : `0.2rem solid ${$selectColor.extraLight}`};
  border-radius: 0.4rem;
  color: ${({ $selectColor }) => $selectColor.dark};
  background-color: ${() => ColorMap['white'].main};

  &:hover {
    border: ${({ $selectColor }) => `0.2rem solid ${$selectColor.main}`};
  }
`;

export const Caret = styled.button<CaretProps>`
  border: none;
  background-color: ${() => ColorMap['white'].main};
  transform: ${({ $isOpen }) => $isOpen && `rotate(-180deg)`};
  transition-duration: 1s;
  margin-left: 1rem;
`;

const getDropdownWidth = ({
  width,
  $fullWidth,
}: {
  width?: number;
  $fullWidth?: boolean;
}): string => {
  const minWidth = 20;

  if (width) {
    if (width < minWidth) {
      return `${minWidth - 0.5}rem`;
    } else {
      return `${width - 0.5}rem`;
    }
  } else if ($fullWidth) {
    return '107%';
  } else {
    return '125%';
  }
};

export const DropdownContainer = styled.div<DropdownContainerProps>`
  display: flex;
  justify-content: center;
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  width: ${({ width, $fullWidth }) => getDropdownWidth({ width, $fullWidth })};
  margin-top: 0.7rem;

  & > ul {
    width: 100%;
    padding: 1rem;
    overflow: hidden;
    border-radius: 0.4rem;
    box-shadow: ${({ $selectColor }) =>
      `0.2rem 0.2rem 0.6rem ${$selectColor.main}80`};
    background-color: ${() => ColorMap['white'].main};
  }
`;

export const SelectOption = styled.div<SelectOptionProps>`
  width: 100%;
  padding: 0.5rem 1rem;
  z-index: 1;
  color: ${() => ColorMap['primary'].dark};
  background-color: ${({ $highlighted, $selectColor }) =>
    $highlighted ? $selectColor.background : ColorMap['white'].main};

  &:hover {
    background-color: ${({ $selectColor }) => $selectColor.background};
  }

  &:active {
    background-color: ${({ $selectColor }) => $selectColor.extraLight};
  }
`;
