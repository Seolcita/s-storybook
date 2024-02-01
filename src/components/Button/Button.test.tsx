import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen } from '@testing-library/react';

import { ColorMap } from '../Color';
import Button, { ButtonProps } from './Button';

const props: ButtonProps = {
  variant: 'primary',
  bgColor: 'primary',
  textColor: 'white',
  size: 'm',
  fullWidth: false,
  disabled: false,
  children: 'Test Button',
  onClick: jest.fn(),
  margin: 'none',
  hasShadow: false,
  borderRadius: 0.5,
  ariaLabel: 'test button',
  type: 'submit',
};

describe('Button', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the button with the correct text', () => {
    render(<Button {...props}>{props.children}</Button>);

    const buttonElement = screen.getByRole('button', { name: /test button/i });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Test Button');
  });

  it('renders the button with the correct text color', () => {
    render(
      <Button {...props} textColor='white'>
        Test Button
      </Button>
    );

    const buttonElement = screen.getByRole('button', { name: /test button/i });

    expect(buttonElement).toHaveStyle(`color: ${ColorMap.white.main}`);
  });

  it('should button disabled with correct disabled button background color', () => {
    render(
      <Button {...props} disabled={true}>
        Test Button
      </Button>
    );

    const buttonElement = screen.getByRole('button', { name: /test button/i });

    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveStyle(
      `background-color: ${ColorMap['grey'].extraLight}`
    );
  });

  it('render correct button background color when button is hovered', () => {
    render(
      <Button {...props} bgColor='black'>
        Test Button
      </Button>
    );

    const buttonElement = screen.getByRole('button', { name: /test button/i });

    userEvent.hover(buttonElement);

    expect(buttonElement).toHaveStyle(
      `background-color: ${ColorMap['grey'].main}`
    );
  });
});
