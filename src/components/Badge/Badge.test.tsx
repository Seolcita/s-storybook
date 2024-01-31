import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

import { ColorMap } from '../Color';
import Badge, { BadgeProps } from './Badge';

const props: BadgeProps = {
  title: 'Badge Title',
  bgColor: 'primary',
  color: 'white',
};

describe('Badge', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders with correct title', () => {
    render(<Badge {...props} />);

    const badge = screen.getByLabelText('badge');

    expect(badge).toBeInTheDocument();
  });

  it('renders with correct background color', () => {
    render(<Badge {...props} />);

    const badge = screen.getByLabelText('badge');

    expect(badge).toHaveStyle(`background-color: ${ColorMap.primary.main}`);
  });

  it('renders with correct title color', () => {
    render(<Badge {...props} />);

    const badgeTitle = screen.getByText('Badge Title');

    expect(badgeTitle).toHaveStyle(`color: ${ColorMap.white.main}`);
  });

  it('renders with correct size when title is not exist', () => {
    render(<Badge />);

    const badge = screen.getByLabelText('badge');

    expect(badge).toHaveStyle('width: 1.5rem');
    expect(badge).toHaveStyle('height: 1.5rem');
  });
});
