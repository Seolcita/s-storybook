import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen } from '@testing-library/react';

import { ColorMap } from '../Color';
import Select, { SelectProps } from './Select';

describe('Select', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];

  const props: SelectProps = {
    options,
    value: options[0],
    onChange: jest.fn(),
    width: 200,
    height: 40,
    fullWidth: false,
    color: 'primary',
  };

  it('renders with "Select an option" text in select box when value is not selected', () => {
    render(<Select {...props} />);

    // Check that the selected value is displayed in the select box
    expect(screen.getByLabelText('Select an option')).toBeInTheDocument();
  });

  it('renders with two select options', () => {
    render(<Select {...props} />);

    // Click the dropdown
    userEvent.click(screen.getByLabelText('Select an option'));

    expect(screen.getByLabelText('1')).toBeInTheDocument();
    expect(screen.getByLabelText('2')).toBeInTheDocument();
  });

  it('renders selected value in select box when an option is clicked', () => {
    render(<Select {...props} />);

    const selectBox = screen.getByLabelText('Select an option');

    // Click the dropdown
    userEvent.click(selectBox);

    // Select an option from the dropdown
    userEvent.click(screen.getByLabelText('1'));

    // Check that the selected value is displayed in the select box
    expect(selectBox).toHaveTextContent('Option 1');
  });

  it('renders with correct select border color', () => {
    render(<Select {...props} />);

    expect(screen.getByLabelText('Select an option')).toHaveStyle(
      `border:0.2rem solid ${ColorMap.primary.main}`
    );
  });
});
