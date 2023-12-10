import React from 'react';
import { type ReactElement, useState } from 'react';
import {
  Caret,
  DropdownContainer,
  SelectInputContainer,
  SelectOption,
  StyledSelect,
} from './Select.styles';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Typography from '../Typography';
import ColorMap from '../Color/ColorMap';

export type SelectColors = 'primary' | 'success' | 'warning' | 'error' | 'grey';

export type Option = {
  label: string;
  value: string | number;
};

export type SelectProps = {
  options: Option[];
  width?: number;
  fullWidth?: boolean;
  color?: SelectColors;
  value: Option | undefined;
  onChange: (value: Option) => void;
};

const Select = ({
  options,
  value,
  onChange,
  width,
  fullWidth = false,
  color = 'primary',
}: SelectProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>();

  const selectColor = ColorMap[color];

  const selectOption = (option: Option): void => {
    if (option.value !== value?.value) onChange(option);
  };

  const setHighlight = (index: number) => {
    setHighlightedIndex(index);
  };

  return (
    <StyledSelect
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      width={width}
      fullWidth={fullWidth}
      isOpen={isOpen}
    >
      <SelectInputContainer isOpen={isOpen} selectColor={selectColor}>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          flexGrow={1}
        >
          {value ? (
            <Typography variant='textS' fontWeight='semiBold' color={color}>
              {value.label}
            </Typography>
          ) : (
            <Typography variant='textS' fontWeight='semiBold' color={color}>
              Select Option
            </Typography>
          )}
        </Box>
        <Caret isOpen={isOpen}>
          <FontAwesomeIcon
            icon={faCaretDown}
            size='lg'
            style={{ color: selectColor.main }}
          />
        </Caret>
      </SelectInputContainer>

      <DropdownContainer isOpen={isOpen} selectColor={selectColor}>
        <ul>
          {options.map((option, index) => (
            <SelectOption
              key={option.value}
              isOpen={isOpen}
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
                setHighlight(index);
              }}
              highlighted={index === highlightedIndex}
              selectColor={selectColor}
            >
              <Typography variant='textS' color={color}>
                {option.label}
              </Typography>
            </SelectOption>
          ))}
        </ul>
      </DropdownContainer>
    </StyledSelect>
  );
};

export { Select };
export default Select;
