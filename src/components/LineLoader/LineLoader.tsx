import React from 'react';
import { ReactElement } from 'react';
import { Span } from './LineLoader.styles';
import { FlexCenter } from '../../styles/Common/Common.styles';

export type LineLoaderSize = 'sm' | 'lg';

export interface LineLoaderProps {
  size?: LineLoaderSize;
}

export interface Content {
  color: string;
  animationDelay: number;
}

const contents: Content[] = [
  { color: '#2eeca8', animationDelay: 0.2 },
  { color: '#eade3d', animationDelay: 0.3 },
  { color: '#55acee', animationDelay: 0.4 },
  { color: '#ec902e', animationDelay: 0.5 },
  { color: '#09b7bf', animationDelay: 0.6 },
  { color: '#ea3d8c', animationDelay: 0.7 },
];

const LineLoader = ({ size = 'lg' }: LineLoaderProps): ReactElement => {
  return (
    <FlexCenter aria-label='loading' role='alert' aria-busy='true'>
      {contents.map((item: Content) => {
        console.log(item);
        return (
          <Span
            key={item.color}
            $size={size}
            $bgColor={item.color}
            $animationDelay={item.animationDelay}
          >
            .
          </Span>
        );
      })}
    </FlexCenter>
  );
};

export default LineLoader;
export { LineLoader };
