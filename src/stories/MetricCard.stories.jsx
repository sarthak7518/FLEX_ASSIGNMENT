import { MetricCard } from '../components/MetricCard';

export default {
  title: 'Pricing/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    change: { control: 'text' },
    trend: { control: 'select', options: ['up', 'down', 'flat'] },
    helpText: { control: 'text' },
    accent: { control: 'boolean' },
  },
};

export const Playground = {
  args: { label: 'MRR', value: '$24,580', change: '+12.4% MoM', trend: 'up', helpText: 'vs prior 30 days' },
};
export const Negative = {
  args: { label: 'Churn rate', value: '3.1%', change: '-0.6%', trend: 'down', helpText: 'lower is better' },
};
export const Accent = {
  args: { label: 'Active subscriptions', value: '1,284', change: '+48 this week', trend: 'up', accent: true },
};
export const Grid = {
  render: () => (
    <div className="fp-row" style={{ gap: 16, alignItems: 'stretch' }}>
      <MetricCard label="MRR" value="$24,580" change="+12.4%" trend="up" />
      <MetricCard label="ARR" value="$294K" change="+8.1%" trend="up" />
      <MetricCard label="Churn" value="3.1%" change="-0.6%" trend="down" />
      <MetricCard label="Net subs" value="1,284" change="+48" trend="up" accent />
    </div>
  ),
};
