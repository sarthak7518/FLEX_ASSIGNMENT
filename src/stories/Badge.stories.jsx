import { Badge } from '../components/Badge';

export default {
  title: 'Foundations/Badges/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'success', 'warn', 'danger', 'accent', 'violet', 'mint', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    dot: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export const Playground = { args: { children: 'Pro plan', tone: 'accent', size: 'md' } };
export const AllTones = {
  render: () => (
    <div className="fp-row">
      <Badge tone="neutral">Neutral</Badge>
      <Badge tone="success" dot>Active</Badge>
      <Badge tone="warn" dot>Trial</Badge>
      <Badge tone="danger" dot>Past due</Badge>
      <Badge tone="accent">Pro</Badge>
      <Badge tone="violet">Enterprise</Badge>
      <Badge tone="mint">New</Badge>
      <Badge tone="outline">v1.2</Badge>
    </div>
  ),
};
export const Sizes = {
  render: () => (
    <div className="fp-row">
      <Badge tone="accent" size="sm">SM</Badge>
      <Badge tone="accent" size="md">MD</Badge>
      <Badge tone="accent" size="lg">LG</Badge>
    </div>
  ),
};
