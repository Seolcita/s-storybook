import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen, waitFor } from '@testing-library/react';

import Toast from './Toast';
import { ColorMap } from '../Color';

describe('Toast', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders with success message and correct color', () => {
    render(<Toast message='Success message' variant='success' />);

    expect(screen.getByText('Success message')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveStyle(
      `background-color: ${ColorMap['success'].dark}`
    );
  });

  it('renders with warning message and correct color', () => {
    render(<Toast message='Warning message' variant='warning' />);

    expect(screen.getByText('Warning message')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveStyle(
      `background-color: ${ColorMap['warning'].dark}`
    );
  });

  it('renders with error message and correct color', () => {
    render(<Toast message='Error message' variant='error' />);

    expect(screen.getByText('Error message')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveStyle(
      `background-color: ${ColorMap['error'].dark}`
    );
  });

  it('renders with Info message and correct color', () => {
    render(<Toast message='Info message' variant='info' />);

    expect(screen.getByText('Info message')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveStyle(
      `background-color: ${ColorMap['primary'].dark}`
    );
  });

  it('closes when the close button is clicked', async () => {
    render(<Toast message='Error message' variant='error' />);

    userEvent.click(screen.getByRole('button'));
    await waitFor(() =>
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    );
  });
});
