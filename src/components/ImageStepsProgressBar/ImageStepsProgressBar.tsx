import React, { ReactNode } from 'react';
import { StyledImageStepsProgressBar } from './ImageStepsProgressBar.styles';

export interface ImageStepsProgressBarProps {
  totalSteps: number;
  currentStep: number;
  prevImg: ReactNode;
  currentImg: ReactNode;
  nextImg: ReactNode;
}

const ImageStepsProgressBar = ({
  totalSteps,
  currentStep,
  prevImg,
  currentImg,
  nextImg,
}: ImageStepsProgressBarProps) => {
  const progressValue = Math.ceil((currentStep / totalSteps) * 100);

  const stepsArray: ReactNode[] = [];

  const updateStepImages = () => {
    if (currentStep < 1) {
      currentStep = 1;
    } else if (currentStep > totalSteps) {
      currentStep = totalSteps;
    }

    if (currentStep > 1) {
      for (let i = 1; i < currentStep; i++) {
        stepsArray.push(prevImg);
      }
    }

    stepsArray.push(currentImg);

    for (let i = 0; i < totalSteps - currentStep; i++) {
      stepsArray.push(nextImg);
    }
  };

  updateStepImages();

  return (
    <>
      <StyledImageStepsProgressBar aria-hidden='true'>
        {stepsArray.map((image, idx) => (
          <div key={idx}>{image}</div>
        ))}
      </StyledImageStepsProgressBar>

      {/* Below section is for accessibility purpose only for screen reader. */}
      <div style={{ color: 'transparent' }}>{progressValue}% complete</div>
    </>
  );
};

export { ImageStepsProgressBar };
export default ImageStepsProgressBar;
