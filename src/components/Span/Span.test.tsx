import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

import { Span, SpanProps } from './Span';

const props: SpanProps = {
  text: 'Text',
  bgColor: 'transparent',
  color: '#000',
  fontWeight: 'extraBold',
  fontSize: 5,
  isItalic: true,
};

describe('Span', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders with correct text', () => {
    render(<Span {...props} />);

    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('renders with correct background color', () => {
    render(<Span {...props} />);

    expect(screen.getByText('Text')).toHaveStyle(
      `background-color: transparent`
    );
  });

  it('renders with correct text color', () => {
    render(<Span {...props} />);

    expect(screen.getByText('Text')).toHaveStyle(`color: #000`);
  });

  it('renders with correct font weight', () => {
    render(<Span {...props} />);

    expect(screen.getByText('Text')).toHaveStyle(`font-weight: 800`);
  });

  it('renders with correct font size', () => {
    render(<Span {...props} />);

    expect(screen.getByText('Text')).toHaveStyle(`font-size: 5rem`);
  });
});
