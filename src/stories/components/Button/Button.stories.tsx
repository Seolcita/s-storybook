import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../../components/Button';
import { Box } from '@mui/material';

const meta: Meta<typeof Button> = {
  title: 'Components/Atomic/Button',
  component: Button,
  parameters: {
    controls: {
      exclude: ['variant', 'fullWidth'],
    },
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

function storyDecorator(width: number): Story {
  return {
    decorators: [
      (Story) => (
        <Box width={`${width}rem`}>
          <Story />
        </Box>
      ),
    ],
  };
}

type Story = StoryObj<typeof Button>;

// Button variant
export const Primary: Story = {
  args: {
    variant: 'primary',
    textColor: 'white',
    margin: ['xl', 'md'],
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    textColor: 'primary',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

// Disabled
export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const OutlinedDisabled: Story = {
  args: {
    variant: 'outlined',
    disabled: true,
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

// Sizes
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const Small: Story = {
  args: {
    size: 's',
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const Large: Story = {
  args: {
    size: 'l',
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const FullWidth: Story = {
  ...storyDecorator(63),
  args: {
    fullWidth: true,
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

// Primary buttons with color
export const PrimaryButtonColorPrimary: Story = {
  args: {
    bgColor: 'primary',
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const PrimaryButtonColorSuccess: Story = {
  args: {
    bgColor: 'success',
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const PrimaryButtonColorWarning: Story = {
  args: {
    bgColor: 'warning',
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const PrimaryButtonColorError: Story = {
  args: {
    bgColor: 'error',
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const PrimaryButtonColorGrey: Story = {
  args: {
    bgColor: 'grey',
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const PrimaryButtonColorWhite: Story = {
  args: {
    bgColor: 'white',
    textColor: 'black',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const PrimaryButtonColorBlack: Story = {
  args: {
    bgColor: 'black',
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

// Outlined buttons with color
export const OutlinedButtonColorPrimary: Story = {
  args: {
    variant: 'outlined',
    textColor: 'primary',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const OutlinedButtonColorSuccess: Story = {
  args: {
    variant: 'outlined',
    textColor: 'success',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const OutlinedButtonColorWarning: Story = {
  args: {
    variant: 'outlined',
    textColor: 'warning',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const OutlinedButtonColorError: Story = {
  args: {
    variant: 'outlined',
    textColor: 'error',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const OutlinedButtonColorGrey: Story = {
  args: {
    variant: 'outlined',
    textColor: 'grey',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const OutlinedButtonColorBlack: Story = {
  args: {
    variant: 'outlined',
    textColor: 'black',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};

export const OutlinedButtonColorWhite: Story = {
  args: {
    variant: 'outlined',
    textColor: 'white',
    children: 'Button',
    ariaLabel: 'ARIA-Label',
  },
};
