import { Input } from '../components/Input';

export default {
  title: 'Foundations/Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] },
    fullWidth: { control: 'boolean' },
  },
};

export const Playground = {
  args: { label: 'Workspace name', placeholder: 'acme-inc', hint: 'Lowercase, no spaces.' },
};
export const Email = { args: { label: 'Email', type: 'email', placeholder: 'you@company.com' } };
export const WithPrefix = { args: { label: 'Subdomain', prefix: 'https://', suffix: '.flexprice.io', placeholder: 'acme' } };
export const Currency = { args: { label: 'Monthly cap', prefix: '$', suffix: 'USD', placeholder: '0.00', type: 'number' } };
export const ErrorState = {
  args: { label: 'Card number', placeholder: '4242 4242 4242 4242', error: 'This card was declined.' },
};
export const Disabled = { args: { label: 'API key', value: 'sk_live_•••••', disabled: true, suffix: 'Read-only' } };
