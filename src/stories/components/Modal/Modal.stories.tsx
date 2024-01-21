import React, { useState } from 'react';
import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import Modal from '../../../components/Modal';
import Typography from '../../../components/Typography/Typography';

const meta: Meta<typeof Modal> = {
  title: 'Components/Composite/Badge',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

const PlaceHolder = (
  <Box
    width={'100%'}
    height={'20rem'}
    bgcolor={'lightgrey'}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
  >
    <h1 style={{ color: 'black' }}>Modal Contents</h1>
  </Box>
);

const Template: any = (args: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Box width={'30rem'}>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        children={PlaceHolder}
      />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  children: PlaceHolder,
};
