import React, { ReactElement } from 'react';

import { Container, ImageContainer } from './CaptionedImage.styles';
import Span, { SpanProps } from '../Span';
import {
  AlignItems,
  FlexDirection,
  JustifyContent,
} from '../../types/flexType';

export interface CaptionedImageProps extends SpanProps {
  children: ReactElement;
  width?: number;
  height?: number;
  borderRadius?: number;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  imgMarginRight?: number;
  imgMarginBottom?: number;
  hasHoverEffect?: boolean;
}

const CaptionedImage = ({
  width,
  height,
  flexDirection = 'row',
  justifyContent,
  alignItems,
  children,
  text,
  color,
  bgColor,
  fontWeight,
  fontSize,
  isItalic,
  borderRadius,
  imgMarginRight = 1,
  imgMarginBottom = 1,
  hasHoverEffect,
}: CaptionedImageProps): ReactElement => {
  return (
    <Container
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $borderRadius={borderRadius}
      $bgColor={bgColor}
      $hasHoverEffect={hasHoverEffect}
      width={width}
      height={height}
    >
      <ImageContainer
        $imageMarginRight={imgMarginRight}
        $imgMarginBottom={imgMarginBottom}
        $flexDirection={flexDirection}
      >
        {children}
      </ImageContainer>
      <Span
        text={text}
        color={color}
        bgColor={bgColor}
        fontWeight={fontWeight}
        fontSize={fontSize}
        isItalic={isItalic}
      />
    </Container>
  );
};

export default CaptionedImage;
export { CaptionedImage };
