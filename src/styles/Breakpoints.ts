interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

const size = {
  sm: 60,
  md: 96,
  lg: 150,
};

export const device: Size = {
  xs: `screen and (width < ${size.sm}rem)`, // phone
  sm: `screen and (width < ${size.md}rem)`, // tablet
  md: `screen and (width < ${size.lg}rem)`, // laptop
  lg: `screen and (${size.lg}rem <= width)`, // desktop
};

export const isMobile = window.innerWidth < size.sm;
export const isTablet =
  size.sm <= window.innerWidth && window.innerWidth < size.md;
export const isTabletOrSmaller = window.innerWidth < size.md;
export const isLaptop =
  size.md <= window.innerWidth && window.innerWidth < size.lg;
export const isLaptopOrSmaller = window.innerWidth < size.lg;
export const isDesktop = window.innerWidth <= size.lg;
