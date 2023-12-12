import { Space, space } from '../tokens/space-token';

export type Spacing = keyof Space;
export type setSpaceInput = Spacing[] | Spacing;

export const setSpacing = (spacing: setSpaceInput): string => {
  let spacingInput: Spacing[];

  if (Array.isArray(spacing)) {
    spacingInput = spacing;
  } else {
    spacingInput = [spacing];
  }

  const formattedSpacing = spacingInput
    .map((spaceKey) => space[spaceKey])
    .join(' ');

  console.log(formattedSpacing);
  return formattedSpacing;
};
