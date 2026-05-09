import { PriceTag } from '../components/PriceTag';

export default {
  title: 'Pricing/PriceTag',
  component: PriceTag,
  tags: ['autodocs'],
  argTypes: {
    amount: { control: 'number' },
    currency: { control: 'text' },
    period: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    accent: { control: 'boolean' },
    strikeAmount: { control: 'number' },
  },
};

export const Playground = { args: { amount: 49, currency: '$', period: '/mo', size: 'md' } };
export const Annual = { args: { amount: 470, period: '/yr', size: 'md', strikeAmount: 588 } };
export const Highlighted = { args: { amount: 99, period: '/mo', accent: true, size: 'lg' } };
export const Sizes = {
  render: () => (
    <div className="fp-row" style={{ alignItems: 'flex-end', gap: 32 }}>
      <PriceTag amount={9} size="sm" />
      <PriceTag amount={49} size="md" />
      <PriceTag amount={199} size="lg" accent />
    </div>
  ),
};
export const Currencies = {
  render: () => (
    <div className="fp-row" style={{ gap: 32 }}>
      <PriceTag amount={49} currency="$" />
      <PriceTag amount={45} currency="€" />
      <PriceTag amount={3999} currency="₹" />
    </div>
  ),
};
