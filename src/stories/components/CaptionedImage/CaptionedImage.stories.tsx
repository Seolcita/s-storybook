import type { Meta, StoryObj } from '@storybook/react';

import CaptionedImage from '../../../components/CaptionedImage';
import Placeholder from '../../../utils/placeholder';
import React from 'react';

const meta: Meta<typeof CaptionedImage> = {
  title: 'Components/Composite/CaptionedImage',
  component: CaptionedImage,
};

export default meta;

type Story = StoryObj<typeof CaptionedImage>;

const Image = <Placeholder borderRadius={0.5} width={3.5} height={3.5} />;

export const Default: Story = {
  args: { text: 'Caption', children: Image },
};

export const HasHoverEffect: Story = {
  args: { text: 'Caption', children: Image, hasHoverEffect: true },
};

export const BackgroundColor: Story = {
  args: { text: 'Caption', children: Image, bgColor: '#ffed63' },
};

export const FlexDirection: Story = {
  args: {
    text: 'Caption',
    children: Image,
    flexDirection: 'column',
    fontSize: 1.2,
  },
};
