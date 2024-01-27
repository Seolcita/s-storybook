import React from 'react';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Box } from '@mui/material';
import Select, { SelectOption } from '../../../components/Select';

export default {
  title: 'Components/Atomic/Select',
  component: Select,
};

const selectOptions = [
  { label: 'Cold', value: 'Cold' },
  { label: 'Normal', value: 'Normal' },
  { label: 'Hot', value: 'Hot' },
];

const Template: any = (args: any) => {
  const [value, setValue] = useState<SelectOption | undefined>();

  return (
    <Box width={600} display='flex' justifyContent='center' alignItems='center'>
      <Select
        {...args}
        value={value}
        options={selectOptions}
        onChange={(opt: SelectOption) => setValue(opt)}
      />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  width: 25,
  fullWidth: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  color: 'primary',
  fullWidth: true,
};
