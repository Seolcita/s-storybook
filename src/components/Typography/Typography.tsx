import React, { type ReactElement } from 'react';

import typographyTokens, {
  TypographyBasicProperties,
} from '../../tokens/typography-token';
import ColorMap, { Colors } from '../Color/ColorMap';

export type TypographyVariant =
  | 'headingXXL'
  | 'headingXL'
  | 'headingL'
  | 'headingM'
  | 'headingS'
  | 'headingXS'
  | 'textXL'
  | 'textL'
  | 'textM'
  | 'textS'
  | 'textXS';

export type FontWeight =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'heavy';

export interface TypographyProps {
  children: React.ReactNode;
  variant: TypographyVariant;
  fontWeight?: FontWeight;
  color?: Colors;
}

export interface TypographyStyleProperties extends TypographyBasicProperties {
  fontWeight: number;
  color?: string;
  margin: string | number;
  padding: string | number;
}

export type Tag = {
  variant: TypographyVariant;
  children: React.ReactNode;
  customStyle: TypographyStyleProperties;
};

export const TypographyVariantMap: Record<
  TypographyVariant,
  TypographyBasicProperties
> = {
  headingXXL: typographyTokens.headingXXL,
  headingXL: typographyTokens.headingXL,
  headingL: typographyTokens.headingL,
  headingM: typographyTokens.headingM,
  headingS: typographyTokens.headingS,
  headingXS: typographyTokens.headingXS,
  textXL: typographyTokens.textXL,
  textL: typographyTokens.textL,
  textM: typographyTokens.textM,
  textS: typographyTokens.textS,
  textXS: typographyTokens.textXS,
};

const FontWeightMap: Record<FontWeight, number> = {
  thin: typographyTokens.fontWeight.thin,
  extraLight: typographyTokens.fontWeight.extraLight,
  light: typographyTokens.fontWeight.light,
  normal: typographyTokens.fontWeight.normal,
  medium: typographyTokens.fontWeight.medium,
  semiBold: typographyTokens.fontWeight.semiBold,
  bold: typographyTokens.fontWeight.bold,
  extraBold: typographyTokens.fontWeight.extraBold,
  heavy: typographyTokens.fontWeight.heavy,
};

export const getTag = ({
  variant,
  children,
  customStyle,
}: Tag): ReactElement => {
  if (variant === 'headingXXL') {
    return <h1 style={customStyle}>{children}</h1>;
  } else if (variant === 'headingXL') {
    return <h2 style={customStyle}>{children}</h2>;
  } else if (variant === 'headingL') {
    return <h3 style={customStyle}>{children}</h3>;
  } else if (variant === 'headingM') {
    return <h4 style={customStyle}>{children}</h4>;
  } else if (variant === 'headingS') {
    return <h5 style={customStyle}>{children}</h5>;
  } else if (variant === 'headingXS') {
    return <h6 style={customStyle}>{children}</h6>;
  } else if (variant.startsWith('text')) {
    return <p style={customStyle}>{children}</p>;
  } else {
    return <p>{children}</p>;
  }
};

const Typography = ({
  children,
  variant,
  fontWeight = 'normal',
  color = 'black',
}: TypographyProps): ReactElement => {
  const weight = FontWeightMap[fontWeight];
  const typography = TypographyVariantMap[variant];
  const customStyle = {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    lineHeight: typography.lineHeight,
    fontWeight: weight,
    color: ColorMap[color].main,
    margin: 0,
    padding: 0,
  };
  const tag = getTag({ variant, children, customStyle });

  return tag;
};

export { Typography };
export default Typography;
