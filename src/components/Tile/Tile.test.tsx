import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

import Tile, { TileProps } from './Tile';

const props: TileProps = {
  isInteractive: false,
  isPadded: false,
  tabIndex: 0,
  ariaLabel: 'test tile',
  width: 100,
  height: 100,
  minWidth: 100,
  maxWidth: 100,
  margin: 'none',
  hasBoxShadow: false,
  borderRadius: 0.5,
  children: 'Test Tile',
};

describe('Card', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    render(<Tile {...props}>Test Tile</Tile>);
    expect(screen.getByText('Test Tile')).toBeInTheDocument();
  });

  it('renders without padding', () => {
    render(<Tile {...props}>Test Tile</Tile>);
    expect(screen.getByText('Test Tile')).toHaveStyle('padding: 0');
  });

  it('renders without box shadow', () => {
    render(
      <Tile {...props} hasBoxShadow={false}>
        Test Tile
      </Tile>
    );
    expect(screen.getByText('Test Tile')).toHaveStyle('box-shadow: none');
  });

  it('renders with correct width and height', () => {
    render(
      <Tile {...props} width={20} height={30}>
        Test Tile
      </Tile>
    );
    expect(screen.getByText('Test Tile')).toHaveStyle('width: 20rem');
    expect(screen.getByText('Test Tile')).toHaveStyle('height: 30rem');
  });

  it('renders with correct border radius', () => {
    render(
      <Tile {...props} borderRadius={5}>
        Test Tile
      </Tile>
    );
    expect(screen.getByText('Test Tile')).toHaveStyle('border-radius: 5rem');
  });
});
