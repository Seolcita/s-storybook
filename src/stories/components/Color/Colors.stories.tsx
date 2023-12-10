import type { Meta, StoryObj } from '@storybook/react';
import Colors from '../../../components/Color/ColorCollections';

const meta: Meta<typeof Colors> = {
  title: 'Components/Atomic/Colors',
  component: Colors,
};

export default meta;

type Story = StoryObj<typeof Colors>;

export const AllColors: Story = {
  args: {},
};
