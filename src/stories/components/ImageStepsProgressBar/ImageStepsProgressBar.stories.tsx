import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

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
      width: '30px',
      height: '30px',
      marginTop: '30px',
      marginRight: '15px',
      borderRadius: '50%',
      backgroundColor: 'pink',
    }}
  />
);

const currentImg = (
  <div
    style={{
      width: '70px',
      height: '70px',
      marginRight: '10px',
      borderRadius: '50%',
      backgroundColor: 'black',
    }}
  />
);

const nextImg = (
  <div
    style={{
      width: '30px',
      height: '30px',
      marginRight: '30px',
      borderRadius: '50%',
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
