import styled from 'styled-components';
import { SpanProps } from './Span';

export interface StyledSpanProps {
  color?: SpanProps['color'];
  $bgColor: SpanProps['bgColor'];
  $fontWeight?: number;
  $fontSize?: SpanProps['fontSize'];
  $isItalic?: SpanProps['isItalic'];
}

export const StyledSpan = styled.span<StyledSpanProps>`
  ${({ color }) => color && `color: ${color}`};
  ${({ $bgColor }) => $bgColor && `background-color: ${$bgColor}`};
  ${({ $fontWeight }) => $fontWeight && `font-weight: ${$fontWeight}`};
  ${({ $fontSize }) => $fontSize && `font-size: ${$fontSize}rem`};
  font-style: ${({ $isItalic }) => ($isItalic ? 'italic' : 'normal')};
`;
