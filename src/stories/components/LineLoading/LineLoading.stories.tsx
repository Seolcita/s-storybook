import type { Meta, StoryObj } from '@storybook/react';
import LineLoading from '../../../components/LineLoading';

const meta: Meta<typeof LineLoading> = {
  title: 'Components/Atomic/loading/LineLoading',
  component: LineLoading,
};

export default meta;

type Story = StoryObj<typeof LineLoading>;

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};
