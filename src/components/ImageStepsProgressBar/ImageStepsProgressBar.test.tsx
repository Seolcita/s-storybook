import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

import ImageStepsProgressBar, {
  ImageStepsProgressBarProps,
} from './ImageStepsProgressBar';

const props: ImageStepsProgressBarProps = {
  totalSteps: 4,
  currentStep: 1,
  prevImg: <div>Prev Image</div>,
  currentImg: <div>Current Image</div>,
  nextImg: <div>Next Image</div>,
};

describe('ImageStepsProgressBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders with 0 prevImg, 1 currentImg, 3 nextImg and progress indicator value 25% when current step is 1', () => {
    render(<ImageStepsProgressBar {...props} currentStep={1} />);

    expect(screen.queryAllByText('Prev Image')).toHaveLength(0);
    expect(screen.queryAllByText('Current Image')).toHaveLength(1);
    expect(screen.queryAllByText('Next Image')).toHaveLength(3);
    expect(screen.getByText('25% complete')).toBeInTheDocument();
  });

  it('renders with 1 prevImg, 1 currentImg, 2 nextImg and progress indicator value 25% when current step is 2', () => {
    render(<ImageStepsProgressBar {...props} currentStep={2} />);

    expect(screen.queryAllByText('Prev Image')).toHaveLength(1);
    expect(screen.queryAllByText('Current Image')).toHaveLength(1);
    expect(screen.queryAllByText('Next Image')).toHaveLength(2);
    expect(screen.getByText('50% complete')).toBeInTheDocument();
  });

  it('renders with 2 prevImg, 1 currentImg, 1 nextImg and progress indicator value 25% when current step is 3', () => {
    render(<ImageStepsProgressBar {...props} currentStep={3} />);

    expect(screen.queryAllByText('Prev Image')).toHaveLength(2);
    expect(screen.queryAllByText('Current Image')).toHaveLength(1);
    expect(screen.queryAllByText('Next Image')).toHaveLength(1);
    expect(screen.getByText('75% complete')).toBeInTheDocument();
  });

  it('renders with 3 prevImg, 1 currentImg, 0 nextImg and progress indicator value 25% when current step is 4', () => {
    render(<ImageStepsProgressBar {...props} currentStep={4} />);

    expect(screen.queryAllByText('Prev Image')).toHaveLength(3);
    expect(screen.queryAllByText('Current Image')).toHaveLength(1);
    expect(screen.queryAllByText('Next Image')).toHaveLength(0);
    expect(screen.getByText('100% complete')).toBeInTheDocument();
  });
});
