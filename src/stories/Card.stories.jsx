import { Card } from '../components/Card';
import { Button } from '../components/Button';

export default {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    eyebrow: { control: 'text' },
    elevated: { control: 'boolean' },
    accent: { control: 'boolean' },
  },
};

export const Playground = {
  args: { eyebrow: 'Billing', title: 'Next invoice', children: 'Your next invoice of $79.00 will be billed on May 28.' },
};
export const Elevated = {
  args: { eyebrow: 'Usage', title: 'API events', elevated: true, children: 'You have used 64% of your included events this billing period.' },
};
export const AccentNeoBrutal = {
  args: { eyebrow: 'New', title: 'Usage-based pricing', accent: true, children: 'Bill customers by metered events with custom dimensions.' },
};
export const WithFooter = {
  args: {
    eyebrow: 'Action required',
    title: 'Payment method expired',
    children: 'Your card ending in 4242 expired last month. Update it to keep your subscription active.',
    footer: <><Button variant="ghost" size="sm">Remind me later</Button><Button variant="primary" size="sm">Update card</Button></>,
  },
};
