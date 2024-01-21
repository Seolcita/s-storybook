import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import Header from '../../../components/Header';
import Placeholder from '../../../utils/placeholder';

const meta: Meta<typeof Header> = {
  title: 'Components/Atomic/Header',
  component: Header,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

function storyDecorator(width: number): Story {
  return {
    decorators: [
      (Story) => (
        <Box width={`${width}rem`}>
          <Story />
        </Box>
      ),
    ],
  };
}

type Story = StoryObj<typeof Header>;

const logo = (
  <Box
    display='flex'
    flexDirection='row'
    alignItems='center'
    textAlign='center'
    margin='0.5rem'
  >
    <Placeholder label='Logo' borderRadius={0.5} width={10} height={3.5} />
  </Box>
);

const leftMenusPlaceHolder = (
  <Box
    display='flex'
    flexDirection='row'
    alignItems='center'
    marginRight='0.5rem'
  >
    <FontAwesomeIcon icon={faBars} size='xl' style={{ color: '#ffffff' }} />
  </Box>
);

const rightMenusPlaceHolder = (
  <Box display='flex' flexDirection='row' alignItems='center'>
    <Box margin='0.5rem'>
      <Placeholder label='RM' width={4} height={3.5} />
    </Box>
    <Box margin='0.5rem'>
      <Placeholder label='RM' width={4} height={3.5} />
    </Box>
    <Box marginLeft='0.4rem'>
      <Avatar />
    </Box>
  </Box>
);

const loginButtonPlaceholder = (
  <Box display='flex' flexDirection='row' alignItems='center' margin='0.5rem'>
    <Placeholder label='Login' borderRadius={0.5} width={5} height={3.5} />
  </Box>
);

export const Default: Story = {
  args: {
    isLogin: true,
    logo,
    leftMenus: leftMenusPlaceHolder,
    rightMenus: rightMenusPlaceHolder,
    loginButton: loginButtonPlaceholder,
    bgColor: 'primary',
  },
};

export const Mobile: Story = {
  ...storyDecorator(37.5),
  args: {
    isMobile: true,
    isLogin: true,
    logo,
    leftMenus: leftMenusPlaceHolder,
    rightMenus: rightMenusPlaceHolder,
    loginButton: loginButtonPlaceholder,
    bgColor: 'primary',
  },
};

export const LoginStatus: Story = {
  args: {
    isLogin: true,
    logo,
    leftMenus: leftMenusPlaceHolder,
    rightMenus: rightMenusPlaceHolder,
    loginButton: loginButtonPlaceholder,
    bgColor: 'primary',
  },
};

export const LogoutStatus: Story = {
  args: {
    isLogin: false,
    logo,
    leftMenus: leftMenusPlaceHolder,
    rightMenus: rightMenusPlaceHolder,
    loginButton: loginButtonPlaceholder,
    bgColor: 'primary',
  },
};
