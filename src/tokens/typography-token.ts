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
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
};

// heading
const headingXXL: TypographyBasicProperties = {
  fontSize: '7.2rem',
  lineHeight: '9rem',
  letterSpacing: '-0.03rem',
};

const headingXL: TypographyBasicProperties = {
  fontSize: '6rem',
  lineHeight: '9rem',
  letterSpacing: '-0.02rem',
};

const headingL: TypographyBasicProperties = {
  fontSize: '4.8rem',
  lineHeight: '6rem',
  letterSpacing: '0',
};

const headingM: TypographyBasicProperties = {
  fontSize: '3.6rem',
  lineHeight: '4.4rem',
  letterSpacing: '0.05rem',
};

const headingS: TypographyBasicProperties = {
  fontSize: '3rem',
  lineHeight: '3.8rem',
  letterSpacing: '0.05rem',
};

const headingXS: TypographyBasicProperties = {
  fontSize: '2rem',
  lineHeight: '3rem',
  letterSpacing: '0.05rem',
};

// text
const textXL: TypographyBasicProperties = {
  fontSize: '2rem',
  lineHeight: '3rem',
  letterSpacing: '0.01em',
};

const textL: TypographyBasicProperties = {
  fontSize: '1.8rem',
  lineHeight: '2.8rem',
  letterSpacing: '0.015em',
};

const textM: TypographyBasicProperties = {
  fontSize: '1.6rem',
  lineHeight: '2.4rem',
  letterSpacing: '0.02em',
};

const textS: TypographyBasicProperties = {
  fontSize: '1.4rem',
  lineHeight: '2rem',
  letterSpacing: '0.03em',
};

const textXS: TypographyBasicProperties = {
  fontSize: '1.2rem',
  lineHeight: '1.8rem',
  letterSpacing: '0.04em',
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
