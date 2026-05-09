import { Button } from '../components/Button';

export default {
  title: 'Foundations/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'accent', 'ghost', 'soft', 'danger', 'link'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const Playground = { args: { children: 'Upgrade plan', variant: 'primary', size: 'md' } };
export const Primary = { args: { children: 'Start free trial', variant: 'primary' } };
export const Accent = { args: { children: 'Subscribe now', variant: 'accent' } };
export const Ghost = { args: { children: 'Learn more', variant: 'ghost' } };
export const Soft = { args: { children: 'Apply coupon', variant: 'soft' } };
export const Danger = { args: { children: 'Cancel subscription', variant: 'danger' } };
export const LinkLike = { args: { children: 'View invoice →', variant: 'link' } };
export const Loading = { args: { children: 'Processing payment', loading: true, variant: 'primary' } };
export const Disabled = { args: { children: 'Subscribe', disabled: true, variant: 'primary' } };
export const Sizes = {
  render: () => (
    <div className="fp-row">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
