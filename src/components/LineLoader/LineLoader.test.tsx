import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

import LineLoader from './LineLoader';

describe('LineLoader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders without crashing and displays correct number of spans', () => {
    render(<LineLoader />);

    const spans = screen.getAllByLabelText('loading-bars');
    expect(spans).toHaveLength(6);
  });

  it('renders without correct small size of line loader', () => {
    render(<LineLoader size={'sm'} />);

    const spans = screen.getAllByLabelText('loading-bars')[0];

    expect(spans).toHaveStyle('width: 0.5rem');
    expect(spans).toHaveStyle('height: 6rem');
  });

  it('renders without correct large size of line loader', () => {
    render(<LineLoader size={'lg'} />);

    const spans = screen.getAllByLabelText('loading-bars')[0];

    expect(spans).toHaveStyle('width: 1rem');
    expect(spans).toHaveStyle('height: 12rem');
  });

  it('renders without correct color and animationDelay for first line loader bar', () => {
    render(<LineLoader />);

    const spans = screen.getAllByLabelText('loading-bars')[0];

    expect(spans).toHaveStyle('background-color: #2eeca8');
    expect(spans).toHaveStyle('animation-delay: 0.2s');
  });

  it('renders without correct color and animationDelay for second line loader bar', () => {
    render(<LineLoader />);

    const spans = screen.getAllByLabelText('loading-bars')[1];

    expect(spans).toHaveStyle('background-color: #eade3d');
    expect(spans).toHaveStyle('animation-delay: 0.3s');
  });

  it('renders without correct color and animationDelay for third line loader bar', () => {
    render(<LineLoader />);

    const spans = screen.getAllByLabelText('loading-bars')[2];

    expect(spans).toHaveStyle('background-color: #55acee');
    expect(spans).toHaveStyle('animation-delay: 0.4s');
  });

  it('renders without correct color and animationDelay for fourth line loader bar', () => {
    render(<LineLoader />);

    const spans = screen.getAllByLabelText('loading-bars')[3];

    expect(spans).toHaveStyle('background-color: #ec902e');
    expect(spans).toHaveStyle('animation-delay: 0.5s');
  });

  it('renders without correct color and animationDelay for fifth line loader bar', () => {
    render(<LineLoader />);

    const spans = screen.getAllByLabelText('loading-bars')[4];

    expect(spans).toHaveStyle('background-color: #09b7bf');
    expect(spans).toHaveStyle('animation-delay: 0.6s');
  });

  it('renders without correct color and animationDelay for sixth line loader bar', () => {
    render(<LineLoader />);

    const spans = screen.getAllByLabelText('loading-bars')[5];

    expect(spans).toHaveStyle('background-color: #ea3d8c');
    expect(spans).toHaveStyle('animation-delay: 0.7s');
  });
});
