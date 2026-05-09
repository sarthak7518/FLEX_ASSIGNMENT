import { Tabs } from '../components/Tabs';

export default {
  title: 'Layout/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['underline', 'pill'] },
  },
};

const sample = [
  { label: 'Overview', content: 'Account-wide MRR, ARR and churn over the last 30 days.' },
  { label: 'Invoices', content: '4 paid · 1 pending · 0 overdue. Next invoice on May 28.' },
  { label: 'Usage', content: '64% of monthly event quota consumed across 3 workspaces.' },
];

export const Underline = { args: { tabs: sample, variant: 'underline' } };
export const Pill = { args: { tabs: sample, variant: 'pill' } };
