const FontFamily = ['Poppins', 'Roboto', 'Arial', 'sans-serif'].join(',');

const fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  heavy: 900,
};

export type TypographyBasicProperties = {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
};

// heading
const headingXXL: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '7.2rem',
  lineHeight: '9rem',
};

const headingXL: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '6rem',
  lineHeight: '9rem',
};

const headingL: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '4.8rem',
  lineHeight: '6rem',
};

const headingM: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '3.6rem',
  lineHeight: '4.4rem',
};

const headingS: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '3rem',
  lineHeight: '3.8rem',
};

const headingXS: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '2rem',
  lineHeight: '3rem',
};

// text
const textXL: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '2rem',
  lineHeight: '3rem',
};

const textL: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '1.8rem',
  lineHeight: '2.8rem',
};

const textM: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '1.6rem',
  lineHeight: '2.4rem',
};

const textS: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '1.4rem',
  lineHeight: '2rem',
};

const textXS: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '1.2rem',
  lineHeight: '1.8rem',
};

export default {
  fontWeight,
  headingXXL,
  headingXL,
  headingL,
  headingM,
  headingS,
  headingXS,
  textXL,
  textL,
  textM,
  textS,
  textXS,
};
