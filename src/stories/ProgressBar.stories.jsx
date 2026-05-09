import { ProgressBar } from '../components/ProgressBar';

export default {
  title: 'Foundations/ProgressBars/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    tone: { control: 'select', options: ['ink', 'accent', 'mint', 'violet'] },
    label: { control: 'text' },
    showValue: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
};

export const Playground = { args: { value: 64, label: 'API requests this month', tone: 'ink' } };
export const QuotaWarning = { args: { value: 92, label: 'Plan usage', tone: 'accent' } };
export const Indeterminate = { args: { label: 'Calculating prorated charges', indeterminate: true } };
export const Tones = {
  render: () => (
    <div className="fp-stack">
      <ProgressBar value={20} tone="ink" label="Ink" />
      <ProgressBar value={45} tone="accent" label="Accent" />
      <ProgressBar value={70} tone="mint" label="Mint" />
      <ProgressBar value={88} tone="violet" label="Violet" />
    </div>
  ),
};
