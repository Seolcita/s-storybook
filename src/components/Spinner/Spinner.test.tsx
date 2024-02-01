import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

import { ColorMap } from '../Color';
import Spinner from './Spinner';
import spinnerTokens from '../../tokens/spinner-token';

describe('Spinner', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders with correct attributes', () => {
    render(<Spinner />);

    const spinner = screen.getByRole('status');
    expect(spinner).toHaveAttribute('aria-label', 'loading');
    expect(spinner).toHaveAttribute('aria-busy', 'true');
  });

  it('renders with correct color', () => {
    render(<Spinner color='black' />);

    const spinner = screen.getByTestId('spinner-ring');
    const color = ColorMap.black.main;

    expect(spinner).toHaveStyle(`border-left: 0.25rem solid ${color}`);
  });

  it('renders with correct size', () => {
    render(<Spinner size='lg' />);

    const spinner = screen.getByRole('status');

    expect(spinner).toHaveStyle(`height:${spinnerTokens.spinnerL.height}`);
    expect(spinner).toHaveStyle(`width: ${spinnerTokens.spinnerL.width}`);
  });
});
