export type ButtonSizeProperties = {
  padding: string;
  fontSize: string;
  fontWeight: number;
};

// Button sizes
const buttonXS: ButtonSizeProperties = {
  padding: '0.8rem 2.2rem',
  fontSize: '1.4rem',
  fontWeight: 600,
};

const buttonS: ButtonSizeProperties = {
  padding: '1rem 2.4rem',
  fontSize: '1.4rem',
  fontWeight: 600,
};

const buttonM: ButtonSizeProperties = {
  padding: '1rem 2.6rem',
  fontSize: '1.6rem',
  fontWeight: 600,
};

const buttonL: ButtonSizeProperties = {
  padding: '1.2rem 3rem',
  fontSize: '1.6rem',
  fontWeight: 600,
};

const buttonXL: ButtonSizeProperties = {
  padding: '1.6rem 4rem',
  fontSize: '1.8rem',
  fontWeight: 600,
};

export default { buttonXS, buttonS, buttonM, buttonL, buttonXL };
