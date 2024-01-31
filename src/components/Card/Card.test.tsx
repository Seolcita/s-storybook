import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

import Card, { CardProps } from './Card';

const props: CardProps = {
  isInteractive: false,
  isPadded: false,
  tabIndex: 0,
  ariaLabel: 'test card',
  width: 100,
  height: 100,
  minWidth: 100,
  maxWidth: 100,
  margin: 'none',
  hasBoxShadow: false,
  borderRadius: 0.5,
  children: 'Test Card',
};

describe('Card', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    render(<Card {...props}>Test Card</Card>);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  it('renders without padding', () => {
    render(<Card {...props}>Test Card</Card>);
    expect(screen.getByText('Test Card')).toHaveStyle('padding: 0');
  });

  it('renders without box shadow', () => {
    render(
      <Card {...props} hasBoxShadow={false}>
        Test Card
      </Card>
    );
    expect(screen.getByText('Test Card')).toHaveStyle('box-shadow: none');
  });

  it('renders with correct width and height', () => {
    render(
      <Card {...props} width={20} height={30}>
        Test Card
      </Card>
    );
    expect(screen.getByText('Test Card')).toHaveStyle('width: 20rem');
    expect(screen.getByText('Test Card')).toHaveStyle('height: 30rem');
  });

  it('renders with correct border radius', () => {
    render(
      <Card {...props} borderRadius={5}>
        Test Card
      </Card>
    );
    expect(screen.getByText('Test Card')).toHaveStyle('border-radius: 5rem');
  });
});
