import React from 'react';
import { type ReactElement } from 'react';

import { colors } from '../../tokens/color-token';
import ColorPalette from './ColorPalette';
import Typography from '../Typography';

export enum ColorGroups {
  WHITE = 'WHITE',
  BLACK = 'BLACK',
  GREY = 'GREY',
  PRIMARY = 'PRIMARY',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  SUCCESS = 'SUCCESS',
}

export interface ConvertToColorPaletteInput {
  filter: ColorGroups;
}

export type ColorArray = {
  [key: string]: string;
};

type ColorVariants =
  | 'white'
  | 'black'
  | 'greyBackground'
  | 'greyExtraLight'
  | 'greyLight'
  | 'grey'
  | 'greyDark'
  | 'primaryBackground'
  | 'primaryExtraLight'
  | 'primaryLight'
  | 'primary'
  | 'primaryDark'
  | 'errorBackground'
  | 'errorExtraLight'
  | 'errorLight'
  | 'error'
  | 'errorDark'
  | 'warningBackground'
  | 'warningExtraLight'
  | 'warningLight'
  | 'warning'
  | 'warningDark'
  | 'successBackground'
  | 'successExtraLight'
  | 'successLight'
  | 'success'
  | 'successDark';

export const ColorVariantMap: Record<ColorVariants, string> = {
  white: colors.white.hex,
  black: colors.black.hex,
  greyBackground: colors.greyBackground.hex,
  greyExtraLight: colors.greyExtraLight.hex,
  greyLight: colors.greyLight.hex,
  grey: colors.greyMedium.hex,
  greyDark: colors.greyDark.hex,
  primaryBackground: colors.blueBackground.hex,
  primaryExtraLight: colors.blueExtraLight.hex,
  primaryLight: colors.blueLight.hex,
  primary: colors.blueMedium.hex,
  primaryDark: colors.blueDark.hex,
  errorBackground: colors.redBackground.hex,
  errorExtraLight: colors.redExtraLight.hex,
  errorLight: colors.redLight.hex,
  error: colors.redMedium.hex,
  errorDark: colors.redDark.hex,
  warningBackground: colors.yellowBackground.hex,
  warningExtraLight: colors.yellowExtraLight.hex,
  warningLight: colors.yellowLight.hex,
  warning: colors.yellowMedium.hex,
  warningDark: colors.yellowDark.hex,
  successBackground: colors.greenBackground.hex,
  successExtraLight: colors.greenExtraLight.hex,
  successLight: colors.greenLight.hex,
  success: colors.greenMedium.hex,
  successDark: colors.greenDark.hex,
};

// Array of ColorVariantMap's keys - color variant names
const colorKeys = Object.keys(ColorVariantMap);

// Array of ColorVariantMap's values - color values
const colorValues = Object.values(ColorVariantMap);

// Converting into specific color object array with filter key word, colorKeys array and colorValues array
export const convertToColorPalette = ({
  filter,
}: ConvertToColorPaletteInput): ColorArray[] => {
  const colorArray: ColorArray[] = [];
  colorKeys.forEach((color, index) => {
    if (color.startsWith(filter.toLowerCase())) {
      const obj: ColorArray = {};
      obj[color] = colorValues[index];
      colorArray.push(obj);
    }
  });
  return colorArray;
};

export const greyPalette = convertToColorPalette({
  filter: ColorGroups.GREY,
});

export const primaryPalette = convertToColorPalette({
  filter: ColorGroups.PRIMARY,
});

export const errorPalette = convertToColorPalette({
  filter: ColorGroups.ERROR,
});

export const warningPalette = convertToColorPalette({
  filter: ColorGroups.WARNING,
});

export const successPalette = convertToColorPalette({
  filter: ColorGroups.SUCCESS,
});

export const whitePalette = convertToColorPalette({
  filter: ColorGroups.WHITE,
});

export const blackPalette = convertToColorPalette({
  filter: ColorGroups.BLACK,
});

const ColorCollections = (): ReactElement => {
  return (
    <>
      <Typography variant='headingXS' fontWeight='bold' color='primary'>
        # Primary
      </Typography>
      <ColorPalette colorList={primaryPalette} />

      <Typography variant='headingXS' fontWeight='bold' color='error'>
        # Error
      </Typography>
      <ColorPalette colorList={errorPalette} />

      <Typography variant='headingXS' fontWeight='bold' color='warning'>
        # Warning
      </Typography>
      <ColorPalette colorList={warningPalette} />

      <Typography variant='headingXS' fontWeight='bold' color='success'>
        # Success
      </Typography>
      <ColorPalette colorList={successPalette} />

      <Typography variant='headingXS' fontWeight='bold' color='grey'>
        # Grey
      </Typography>
      <ColorPalette colorList={greyPalette} />

      <Typography variant='headingXS' fontWeight='bold'>
        # White
      </Typography>
      <ColorPalette colorList={whitePalette} />

      <Typography variant='headingXS' fontWeight='bold'>
        # Black
      </Typography>
      <ColorPalette colorList={blackPalette} />
    </>
  );
};

export { ColorCollections };
export default ColorCollections;
