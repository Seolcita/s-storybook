import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

import { ColorMap } from '../Color';
import Badge, { BadgeProps } from './Badge';
import Placeholder from '../../utils/placeholder';

const props: BadgeProps = {
  count: 50,
  maxCount: 55,
  bgColor: 'primary',
  color: 'white',
  children: <Placeholder />,
};

describe('Badge', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders without count', () => {
    render(<Badge children={props.children} />);

    const badge = screen.getByTestId('badge');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveStyle('width: 2rem');
    expect(badge).toHaveStyle('height: 2rem');
  });

  it('renders with correct background color', () => {
    render(<Badge {...props}>{props.children}</Badge>);

    expect(screen.getByTestId('badge')).toHaveStyle(
      `background-color: ${ColorMap.primary.main}`
    );
  });

  it('renders with correct count color', () => {
    render(<Badge {...props}>{props.children}</Badge>);

    expect(screen.getByText('50')).toHaveStyle(`color: ${ColorMap.white.main}`);
  });

  it('renders with correct count value', () => {
    render(<Badge {...props}>{props.children}</Badge>);

    expect(screen.getByText('50')).toBeInTheDocument();
  });

  it('renders with correct count value when count is higher than maxCount', () => {
    render(
      <Badge {...props} maxCount={45}>
        {props.children}
      </Badge>
    );

    expect(screen.getByText('45')).toBeInTheDocument();
  });
});
