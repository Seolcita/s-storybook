import type { Meta, StoryObj } from '@storybook/react';

import Chip from '../../../components/Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Atomic/Chip',
  component: Chip,
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { title: 'Chip Title', bgColor: 'primary', color: 'white' },
};
