import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import { Box } from '@mui/material';

import Modal from '../../../components/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Atomic/Modal',
  component: Modal,
};

export default meta;

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
    <Box width={'100rem'} height={'40rem'}>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        children={PlaceHolder}
        ariaLabel='Modal'
        width={30}
      />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  children: PlaceHolder,
};
