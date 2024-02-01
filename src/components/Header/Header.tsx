import React from 'react';
import { type ReactElement } from 'react';

import {
  StyledHeader,
  LeftContainer,
  RightContainer,
  Logo,
} from './Header.styles';
import { Colors } from '../Color/ColorMap';

export interface HeaderProps {
  logo: React.ReactNode;
  leftMenus?: React.ReactNode;
  rightMenus?: React.ReactNode;
  isLogin: boolean;
  isMobile?: boolean;
  bgColor?: Colors;
  loginButton?: React.ReactNode;
}

const Header = ({
  logo,
  leftMenus,
  rightMenus,
  isMobile = false,
  bgColor,
  isLogin,
  loginButton,
}: HeaderProps): ReactElement => {
  return (
    <StyledHeader $bgColor={bgColor}>
      <LeftContainer $isMobile={isMobile}>
        <Logo $isMobile={isMobile}>{logo}</Logo>
        {isMobile && leftMenus}
      </LeftContainer>
      <RightContainer>{isLogin ? rightMenus : loginButton}</RightContainer>
    </StyledHeader>
  );
};

export { Header };
export default Header;
