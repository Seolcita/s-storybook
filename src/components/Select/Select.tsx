import React, { KeyboardEvent, useEffect, useRef } from 'react';
import { type ReactElement, useState } from 'react';
import {
  Caret,
  DropdownContainer,
  SelectContainer,
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
  height?: number;
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
  height,
  fullWidth = false,
  color = 'primary',
}: SelectProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>();
  const [selectedOption, setSelectedOption] = useState<string | number>();

  const selectRef = useRef<HTMLDivElement>(null);
  const selectColor = ColorMap[color];

  const selectOption = (option: Option): void => {
    if (option.value !== value?.value) onChange(option);
  };

  const setHighlight = (index: number) => {
    setHighlightedIndex(index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectRef]);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    option?: Option,
    index?: number
  ) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        break;
      case 'ArrowUp':
        event.preventDefault();
        break;
      case 'Enter':
        option && selectOption(option);
        option && setSelectedOption(option.value);
        setIsOpen(false);
        index && setHighlight(index);
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  return (
    <SelectContainer width={width} height={height} $fullWidth={fullWidth}>
      <StyledSelect
        $isOpen={isOpen}
        $selectColor={selectColor}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        onKeyDown={(event) => handleKeyDown(event)}
        ref={selectRef}
        aria-expanded={isOpen}
        aria-label='Select an option'
        role='listbox'
      >
        <Box display='flex' flexDirection='row' width={'100%'} zIndex={10}>
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
          <Caret $isOpen={isOpen}>
            <FontAwesomeIcon
              icon={faCaretDown}
              size='lg'
              style={{ color: selectColor.main }}
            />
          </Caret>
        </Box>
        <DropdownContainer
          $isOpen={isOpen}
          $selectColor={selectColor}
          width={width}
          $fullWidth={fullWidth}
        >
          <ul>
            {options.map((option, index) => (
              <SelectOption
                key={option.value}
                $isOpen={isOpen}
                onClick={(event) => {
                  event.stopPropagation();
                  selectOption(option);
                  setIsOpen(false);
                  setHighlight(index);
                  setSelectedOption(option.value);
                }}
                $highlighted={index === highlightedIndex}
                $selectColor={selectColor}
                tabIndex={0}
                onKeyDown={(event) => handleKeyDown(event, option, index)}
                role='option'
                area-label={option.value}
                aria-selected={selectedOption === option.value}
              >
                <Typography variant='textS' color={color}>
                  {option.label}
                </Typography>
              </SelectOption>
            ))}
          </ul>
        </DropdownContainer>
      </StyledSelect>
    </SelectContainer>
  );
};

export { Select };
export default Select;
