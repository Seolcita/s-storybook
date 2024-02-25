import React from 'react';
import { ReactElement } from 'react';

import { StyledSpan } from './Span.styles';
import { FontWeight, FontWeightMap } from '../Typography';

export interface SpanProps {
  text: string;
  color?: string;
  bgColor?: string;
  fontWeight?: FontWeight;
  isItalic?: boolean;
  fontSize?: number;
}

const Span = ({
  text,
  color = '#000',
  bgColor = 'transparent',
  fontWeight = 'normal',
  isItalic = false,
  fontSize = 1.8,
}: SpanProps): ReactElement => {
  return (
    <StyledSpan
      color={color}
      $bgColor={bgColor}
      $fontWeight={FontWeightMap[fontWeight]}
      $fontSize={fontSize}
      $isItalic={isItalic}
    >
      {text}
    </StyledSpan>
  );
};

export default Span;
export { Span };
