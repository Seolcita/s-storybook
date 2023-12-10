import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Card from '../../../components/Card';
import Placeholder from '../../../utils/placeholder';

const meta: Meta<typeof Card> = {
  title: 'Components/Atomic/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

const placeholder = <Placeholder isFullWidth />;

export const Padded: Story = {
  args: {
    isInteractive: false,
    isPadded: true,
    children: placeholder,
  },
};

export const NonPadded: Story = {
  args: {
    isInteractive: false,
    isPadded: false,
    children: placeholder,
  },
};

export const Interactive: Story = {
  args: {
    isInteractive: true,
    isPadded: true,
    children: placeholder,
  },
};

export const NonInteractive: Story = {
  args: {
    isInteractive: false,
    isPadded: true,
    children: placeholder,
  },
};
