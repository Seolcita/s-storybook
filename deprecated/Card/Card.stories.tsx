import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Card from '../../src/components/Card';
import Placeholder from '../../src/utils/placeholder';

const meta: Meta<typeof Card> = {
  title: 'Components/Atomic/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

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
