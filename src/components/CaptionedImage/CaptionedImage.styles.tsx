import styled from 'styled-components';

import { CaptionedImageProps } from './CaptionedImage';

export interface ContainerProps {
  $flexDirection: CaptionedImageProps['flexDirection'];
  $justifyContent: CaptionedImageProps['justifyContent'];
  $alignItems: CaptionedImageProps['alignItems'];
  $borderRadius: CaptionedImageProps['borderRadius'];
  $bgColor: CaptionedImageProps['bgColor'];
  $hasHoverEffect: CaptionedImageProps['hasHoverEffect'];
  width?: CaptionedImageProps['width'];
  height?: CaptionedImageProps['height'];
}

export interface ImageContainerProps {
  $imageMarginRight?: number;
  $imgMarginBottom?: number;
  $flexDirection?: CaptionedImageProps['flexDirection'];
}

export const Container = styled.div<ContainerProps>`
  ${({ width }) => width && `width: ${width}rem;`}
  ${({ height }) => height && `height: ${height}rem;`}
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: ${({ $justifyContent }) =>
    $justifyContent ? $justifyContent : 'center'};
  align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : 'center')};
  padding: 1rem;
  border-radius: ${({ $borderRadius }) =>
    $borderRadius ? `${$borderRadius}rem` : '0.5rem'};
  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : 'transparent')};

  &:hover {
    box-shadow: ${({ $hasHoverEffect }) =>
      $hasHoverEffect ? '0 10px 10px -10px rgba(0, 0, 0, 0.4)' : 'none'};
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  margin: ${({ $imageMarginRight }) => `0 ${$imageMarginRight}rem 0 0`};
  ${({ $flexDirection, $imgMarginBottom }) =>
    $flexDirection === 'column' && `margin: 0 0 ${$imgMarginBottom}rem 0`};
`;
