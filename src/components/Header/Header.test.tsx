import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

import Header, { HeaderProps } from './Header';

const props: HeaderProps = {
  logo: <div>Logo</div>,
  leftMenus: <div>LeftMenus</div>,
  rightMenus: <div>RightMenus</div>,
  isMobile: false,
  bgColor: 'primary',
  isLogin: false,
  loginButton: <button>Login</button>,
};

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders with logo', () => {
    render(<Header {...props} />);

    expect(screen.getByText('Logo')).toBeInTheDocument();
  });

  it('renders with right menu when user login', () => {
    render(<Header {...props} isLogin={true} />);

    expect(screen.getByText('RightMenus')).toBeInTheDocument();
  });

  it('renders without menu when user logout', () => {
    render(<Header {...props} isLogin={false} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByText('RightMenus')).not.toBeInTheDocument();
  });

  it('renders without left menu when user logout', () => {
    render(<Header {...props} isLogin={false} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByText('RightMenus')).not.toBeInTheDocument();
  });

  it('renders with left menu when screen size is mobile', () => {
    render(<Header {...props} isMobile={true} />);

    expect(screen.getByText('LeftMenus')).toBeInTheDocument();
  });
});
