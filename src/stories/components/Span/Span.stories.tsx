import type { Meta, StoryObj } from '@storybook/react';

import Span from '../../../components/Span';

const meta: Meta<typeof Span> = {
  title: 'Components/Atomic/Span',
  component: Span,
};

export default meta;

type Story = StoryObj<typeof Span>;

export const Default: Story = {
  args: { text: 'Text' },
};

export const TextColor: Story = {
  args: { text: 'Text', color: 'red' },
};

export const BackgroundColor: Story = {
  args: { text: 'Text', bgColor: '#ffed63' },
};

export const FontSize: Story = {
  args: { text: 'Text', fontSize: 5 },
};

export const FontWeight: Story = {
  args: { text: 'Text', fontWeight: 'extraBold' },
};

export const Italic: Story = {
  args: { text: 'Text', isItalic: true },
};
