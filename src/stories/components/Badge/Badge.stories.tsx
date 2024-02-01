import React from 'react';
import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import Badge from '../../../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Atomic/Badge',
  component: Badge,
};

export default meta;

function storyDecorator(): Story {
  return {
    decorators: [
      (Story) => (
        <Box
          width={'4rem'}
          height={'4rem'}
          bgcolor={'lightgrey'}
          borderRadius={'50%'}
          position={'relative'}
        >
          <Story />
        </Box>
      ),
    ],
  };
}

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  ...storyDecorator(),
  args: { bgColor: 'primary' },
};

export const Text: Story = {
  args: { title: 'Text', color: 'white', bgColor: 'primary' },
};
