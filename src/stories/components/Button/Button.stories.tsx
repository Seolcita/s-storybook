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
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: { variant: 'outlined', textColor: 'primary', children: 'Button' },
};

// Disabled
export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    textColor: 'white',
    children: 'Button',
  },
};

export const OutlinedDisabled: Story = {
  args: {
    variant: 'outlined',
    disabled: true,
    textColor: 'white',
    children: 'Button',
  },
};

// Sizes
export const ExtraSmall: Story = {
  args: { size: 'xs', textColor: 'white', children: 'Button' },
};

export const Small: Story = {
  args: { size: 's', textColor: 'white', children: 'Button' },
};

export const Medium: Story = {
  args: { size: 'm', textColor: 'white', children: 'Button' },
};

export const Large: Story = {
  args: { size: 'l', textColor: 'white', children: 'Button' },
};

export const ExtraLarge: Story = {
  args: { size: 'xl', textColor: 'white', children: 'Button' },
};

export const FullWidth: Story = {
  ...storyDecorator(63),
  args: { fullWidth: true, textColor: 'white', children: 'Button' },
};

// Primary buttons with color
export const PrimaryButtonColorPrimary: Story = {
  args: { bgColor: 'primary', textColor: 'white', children: 'Button' },
};

export const PrimaryButtonColorSuccess: Story = {
  args: { bgColor: 'success', textColor: 'white', children: 'Button' },
};

export const PrimaryButtonColorWarning: Story = {
  args: { bgColor: 'warning', textColor: 'white', children: 'Button' },
};

export const PrimaryButtonColorError: Story = {
  args: { bgColor: 'error', textColor: 'white', children: 'Button' },
};

export const PrimaryButtonColorGrey: Story = {
  args: { bgColor: 'grey', textColor: 'white', children: 'Button' },
};

export const PrimaryButtonColorWhite: Story = {
  args: { bgColor: 'white', textColor: 'black', children: 'Button' },
};

export const PrimaryButtonColorBlack: Story = {
  args: { bgColor: 'black', textColor: 'white', children: 'Button' },
};

// Outlined buttons with color
export const OutlinedButtonColorPrimary: Story = {
  args: { variant: 'outlined', textColor: 'primary', children: 'Button' },
};

export const OutlinedButtonColorSuccess: Story = {
  args: { variant: 'outlined', textColor: 'success', children: 'Button' },
};

export const OutlinedButtonColorWarning: Story = {
  args: { variant: 'outlined', textColor: 'warning', children: 'Button' },
};

export const OutlinedButtonColorError: Story = {
  args: { variant: 'outlined', textColor: 'error', children: 'Button' },
};

export const OutlinedButtonColorGrey: Story = {
  args: { variant: 'outlined', textColor: 'grey', children: 'Button' },
};

export const OutlinedButtonColorBlack: Story = {
  args: { variant: 'outlined', textColor: 'black', children: 'Button' },
};

export const OutlinedButtonColorWhite: Story = {
  args: { variant: 'outlined', textColor: 'white', children: 'Button' },
};
