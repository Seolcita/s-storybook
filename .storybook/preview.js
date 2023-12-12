import { globalDecorators } from './decorators';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'white',
      values: [
        { name: 'lightBeige', value: '#f2e9e4' },
        { name: 'darkGrey', value: '#212529' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  decorators: globalDecorators,
};

export default preview;
