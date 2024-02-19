import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Tile from '../../../components/Tile';
import Placeholder from '../../../utils/placeholder';
import { Box } from '@mui/material';

const meta: Meta<typeof Tile> = {
  title: 'Components/Atomic/Tile',
  component: Tile,
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

type Story = StoryObj<typeof Tile>;

const placeholder = <Placeholder isFullWidth color='warning' />;

export const Padded: Story = {
  args: {
    isInteractive: false,
    isPadded: true,
    tabIndex: 0,
    ariaLabel: 'ARIA-Label',
    width: 35,
    margin: 'xl',
    children: placeholder,
  },
};

export const NonPadded: Story = {
  args: {
    isInteractive: false,
    isPadded: false,
    tabIndex: 0,
    width: 35,
    ariaLabel: 'ARIA-Label',
    children: placeholder,
  },
};

export const Interactive: Story = {
  args: {
    isInteractive: true,
    isPadded: true,
    tabIndex: 0,
    width: 35,
    ariaLabel: 'ARIA-Label',
    children: placeholder,
  },
};

export const NonInteractive: Story = {
  args: {
    isInteractive: false,
    isPadded: true,
    tabIndex: 0,
    width: 35,
    ariaLabel: 'ARIA-Label',
    children: placeholder,
  },
};

export const NoBoxShadow: Story = {
  args: {
    isInteractive: false,
    isPadded: true,
    tabIndex: 0,
    width: 35,
    ariaLabel: 'ARIA-Label',
    hasBoxShadow: false,
    children: placeholder,
  },
};

export const FullWidth: Story = {
  ...storyDecorator(63),
  args: {
    isInteractive: false,
    isPadded: true,
    tabIndex: 0,
    ariaLabel: 'ARIA-Label',
    hasBoxShadow: false,
    children: placeholder,
    fullWidth: true,
  },
};
