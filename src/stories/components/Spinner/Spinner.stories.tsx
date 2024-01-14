import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '../../../components/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Atomic/loader/Spinner',
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const ExtraSmall: Story = {
  args: { size: 'xs', color: 'black' },
};

export const Small: Story = {
  args: { size: 'sm', color: 'black' },
};

export const Medium: Story = {
  args: { size: 'md', color: 'black' },
};

export const Large: Story = {
  args: { size: 'lg', color: 'black' },
};

export const ExtraLarge: Story = {
  args: { size: 'xl', color: 'black' },
};
