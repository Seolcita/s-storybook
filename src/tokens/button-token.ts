export type ButtonSizeProperties = {
  padding: string;
  heigh: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
};

// Button sizes
const buttonXS: ButtonSizeProperties = {
  padding: '0.8rem 2.2rem',
  fontSize: '1.4rem',
  heigh: '3.6rem',
  fontWeight: 600,
  lineHeight: '2rem',
};

const buttonS: ButtonSizeProperties = {
  padding: '1rem 2.4rem',
  heigh: '4rem',
  fontSize: '1.4rem',
  fontWeight: 600,
  lineHeight: '2rem',
};

const buttonM: ButtonSizeProperties = {
  padding: '1rem 2.6rem',
  heigh: '4.4rem',
  fontSize: '1.6rem',
  fontWeight: 600,
  lineHeight: '2.4rem',
};

const buttonL: ButtonSizeProperties = {
  padding: '1.2rem 3rem',
  heigh: '4.8rem',
  fontSize: '1.6rem',
  fontWeight: 600,
  lineHeight: '2.4rem',
};

const buttonXL: ButtonSizeProperties = {
  padding: '1.6rem 4rem',
  heigh: '6rem',
  fontSize: '1.8rem',
  fontWeight: 600,
  lineHeight: '2.8rem',
};

export default { buttonXS, buttonS, buttonM, buttonL, buttonXL };
