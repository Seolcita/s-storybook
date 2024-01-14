// import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '../../../components/Spinner';
// import { Box } from '@mui/material';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Atomic/loader/Spinner',
  component: Spinner,
};

export default meta;

// function storyDecorator(width: number): Story {
//   return {
//     decorators: [
//       (Story) => (
//         <Box width={`${width}rem`} bgcolor={'grey'}>
//           <Story />
//         </Box>
//       ),
//     ],
//   };
// }

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
