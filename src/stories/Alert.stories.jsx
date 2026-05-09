import { Alert } from '../components/Alert';

export default {
  title: 'Foundations/Alerts/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['info', 'success', 'warn', 'danger'] },
    title: { control: 'text' },
    children: { control: 'text' },
  },
};

export const Playground = {
  args: { tone: 'info', title: 'Heads up', children: 'Your invoice for May is ready to review.' },
};
export const Success = {
  args: { tone: 'success', title: 'Payment received', children: 'We charged $79.00 to •••• 4242.' },
};
export const Warning = {
  args: { tone: 'warn', title: 'Trial ending soon', children: 'Your trial expires in 3 days. Add a payment method to continue.' },
};
export const Danger = {
  args: { tone: 'danger', title: 'Card declined', children: 'We could not process your subscription renewal.' },
};
export const Dismissible = {
  args: { tone: 'info', title: 'New feature', children: 'Usage-based metering now supports custom dimensions.', onDismiss: () => {} },
};
