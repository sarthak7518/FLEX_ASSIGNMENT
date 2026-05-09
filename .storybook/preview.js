import '../src/styles/theme.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'flex-light',
      values: [
        { name: 'flex-light', value: '#f7f7f5' },
        { name: 'flex-dark', value: '#0b0c0f' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Foundations',
          ['Buttons', 'Inputs', 'Badges', 'Avatars', 'Toggles', 'Spinners', 'ProgressBars', 'Alerts'],
          'Pricing',
          ['PriceTag', 'PlanCard', 'FeatureList', 'MetricCard'],
          'Layout',
          ['Card', 'Tabs', 'Modal', 'Pagination'],
          '*',
        ],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
