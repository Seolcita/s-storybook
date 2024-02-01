import React from 'react';
import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import Badge from '../../../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Atomic/Badge',
  component: Badge,
  argTypes: {
    count: {
      control: {
        type: 'number',
        min: 1,
        step: 1,
      },
    },
    maxCount: {
      control: {
        type: 'number',
        min: 1,
        step: 1,
      },
    },
  },
};

export default meta;

const PlaceHolder = (
  <Box
    width={'5rem'}
    height={'5rem'}
    bgcolor={'lightgrey'}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    borderRadius={'50%'}
  ></Box>
);

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { bgColor: 'primary', children: PlaceHolder },
};

export const Count: Story = {
  args: {
    count: 55,
    color: 'white',
    bgColor: 'primary',
    children: PlaceHolder,
  },
};

export const MaxCount: Story = {
  args: {
    count: 55,
    maxCount: 50,
    color: 'white',
    bgColor: 'primary',
    children: PlaceHolder,
  },
};
