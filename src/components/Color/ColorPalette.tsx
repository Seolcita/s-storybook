import React from 'react';
import { type ReactElement } from 'react';
import { Box } from '@mui/material';

import { ColorArray } from './ColorCollections';
import Typography from '../Typography';

export interface ColorPaletteProps {
  colorList: ColorArray[];
}

const ColorPalette = ({ colorList }: ColorPaletteProps): ReactElement => {
  return (
    <Box display='flex' flexWrap='wrap'>
      {colorList.map((color) => (
        <Box
          width='15rem'
          height='15rem'
          display='flex'
          flexDirection='column'
          justifyContent='start'
          alignItems='center'
          marginBottom='2.5rem'
        >
          <Box
            borderRadius='20%'
            height='5rem'
            width='5rem'
            bgcolor={Object.values(color)}
            marginTop='2.5rem'
          ></Box>
          <Box textAlign='center' marginTop='1rem'>
            <Typography variant='textXS' fontWeight='semiBold'>
              {Object.keys(color)}
            </Typography>
            <Typography variant='textXS'>{Object.values(color)}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export { ColorPalette };
export default ColorPalette;
