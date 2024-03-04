import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

import { CaptionedImage, CaptionedImageProps } from './CaptionedImage';

const props: CaptionedImageProps = {
  text: 'Test Caption',
  justifyContent: 'center',
  imgMarginRight: 20,
  hasHoverEffect: true,
  children: <img src='test-image.jpg' alt='Test Image' />,
};

describe('Span', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders with correct text', () => {
    render(<CaptionedImage {...props}>{props.children}</CaptionedImage>);

    expect(screen.getByText('Test Caption')).toBeInTheDocument();
  });

  it('renders with image', () => {
    render(<CaptionedImage {...props}>{props.children}</CaptionedImage>);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
