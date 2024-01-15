import type { Meta, StoryObj } from '@storybook/react';
import LineLoader from '../../../components/LineLoader';

const meta: Meta<typeof LineLoader> = {
  title: 'Components/Atomic/LineLoader',
  component: LineLoader,
};

export default meta;

type Story = StoryObj<typeof LineLoader>;

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};
