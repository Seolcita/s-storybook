import type { Meta, StoryObj } from '@storybook/react';
import Typography from '../../../components/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Atomic/Typography',
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

// heading
export const HeadingXXL: Story = {
  args: {
    variant: 'headingXXL',
    fontWeight: 'normal',
    children: 'HeadingXXL',
    margin: 'lg',
  },
};

export const HeadingXL: Story = {
  args: {
    variant: 'headingXL',
    fontWeight: 'normal',
    children: 'HeadingXL',
  },
};

export const HeadingL: Story = {
  args: {
    variant: 'headingL',
    fontWeight: 'normal',
    children: 'HeadingL',
  },
};

export const HeadingM: Story = {
  args: {
    variant: 'headingM',
    fontWeight: 'normal',
    children: 'HeadingM',
  },
};

export const HeadingS: Story = {
  args: {
    variant: 'headingS',
    fontWeight: 'normal',
    children: 'HeadingS',
  },
};

export const HeadingXS: Story = {
  args: {
    variant: 'headingXS',
    fontWeight: 'normal',
    children: 'HeadingXS',
  },
};

// text
export const TextXL: Story = {
  args: {
    variant: 'textXL',
    fontWeight: 'normal',
    children: 'Text XL',
  },
};

export const TextL: Story = {
  args: {
    variant: 'textL',
    fontWeight: 'normal',
    children: 'Text L',
  },
};

export const TextM: Story = {
  args: {
    variant: 'textM',
    fontWeight: 'normal',
    children: 'Text M',
  },
};

export const TextS: Story = {
  args: {
    variant: 'textS',
    fontWeight: 'normal',
    children: 'Text S',
  },
};

export const TextXS: Story = {
  args: {
    variant: 'textXS',
    fontWeight: 'normal',
    children: 'Text XS',
  },
};

// font weight
export const FontWeightThin: Story = {
  args: {
    variant: 'headingS',
    fontWeight: 'thin',
    children: 'Thin',
  },
};

export const FontWeightExtraLight: Story = {
  args: {
    variant: 'headingS',
    fontWeight: 'extraLight',
    children: 'ExtraLight',
  },
};

export const FontWeightLight: Story = {
  args: {
    variant: 'headingS',
    fontWeight: 'light',
    children: 'Light',
  },
};

export const FontWeightNormal: Story = {
  args: {
    variant: 'headingS',
    fontWeight: 'normal',
    children: 'Normal',
  },
};

export const FontWeightMedium: Story = {
  args: {
    variant: 'headingS',
    fontWeight: 'medium',
    children: 'Medium',
  },
};

export const FontWeightSemiBold: Story = {
  args: {
    variant: 'headingS',
    fontWeight: 'semiBold',
    children: 'SemiBold',
  },
};

export const FontWeightBold: Story = {
  args: {
    variant: 'headingS',
    fontWeight: 'bold',
    children: 'Bold',
  },
};

export const FontWeightExtraBold: Story = {
  args: {
    variant: 'headingS',
    fontWeight: 'extraBold',
    children: 'ExtraBold',
  },
};

export const FontWeightHeavy: Story = {
  args: {
    variant: 'headingS',
    fontWeight: 'heavy',
    children: 'Heavy',
  },
};
