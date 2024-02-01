import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

import { ColorMap } from '../Color';
import Badge, { ChipProps } from './Chip';

const props: ChipProps = {
  title: 'Chip Title',
  bgColor: 'primary',
  color: 'white',
};

describe('Chip', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders with correct title', () => {
    render(<Badge {...props} />);

    expect(screen.getByTestId('chip')).toBeInTheDocument();
  });

  it('renders with correct background color', () => {
    render(<Badge {...props} />);

    expect(screen.getByTestId('chip')).toHaveStyle(
      `background-color: ${ColorMap.primary.main}`
    );
  });

  it('renders with correct title color', () => {
    render(<Badge {...props} />);

    expect(screen.getByText('Chip Title')).toHaveStyle(
      `color: ${ColorMap.white.main}`
    );
  });
});
