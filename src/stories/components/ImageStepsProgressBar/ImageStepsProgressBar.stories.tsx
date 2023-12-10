import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

// import dogImage from '../../../../src/assets/dog.png';
// import poopImage from '../../../../src/assets/poop.png';
// import boneImage from '../../../../src/assets/cookie.jpeg';
import ImageStepsProgressBar from '../../../components/ImageStepsProgressBar';

const meta: Meta<typeof ImageStepsProgressBar> = {
  title: 'Components/Atomic/ImageStepsProgressBar',
  component: ImageStepsProgressBar,
  argTypes: {
    currentStep: {
      control: {
        type: 'number',
        min: 1,
        max: 6,
        step: 1,
      },
    },
  },
};

export default meta;

const prevImg = (
  <div
    style={{
      width: '40px',
      height: '30px',
      marginTop: '30px',
      marginRight: '15px',
      backgroundColor: 'pink',
    }}
  />
);

const currentImg = (
  <div
    style={{
      width: '90px',
      height: '70px',
      marginRight: '10px',
      backgroundColor: 'black',
    }}
  />
);

const nextImg = (
  <div
    style={{
      width: '50px',
      marginRight: '30px',
      rotate: '-40deg',
      backgroundColor: 'skyblue',
    }}
  />
);

type Story = StoryObj<typeof ImageStepsProgressBar>;

export const Primary: Story = {
  args: {
    totalSteps: 6,
    currentStep: 1,
    prevImg,
    currentImg,
    nextImg,
  },
};
