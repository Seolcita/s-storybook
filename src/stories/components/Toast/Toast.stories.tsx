import type { Meta, StoryObj } from '@storybook/react';
import Toast from '../../../components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Atomic/Toast',
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Error: Story = {
  args: { variant: 'error', message: 'This is error message' },
};

export const Info: Story = {
  args: { variant: 'info', message: 'This is info message' },
};

export const Success: Story = {
  args: { variant: 'success', message: 'This is success message' },
};

export const Warning: Story = {
  args: { variant: 'warning', message: 'This is warning message' },
};
