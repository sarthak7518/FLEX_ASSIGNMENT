import { PlanCard } from '../components/PlanCard';

export default {
  title: 'Pricing/PlanCard',
  component: PlanCard,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    description: { control: 'text' },
    amount: { control: 'number' },
    period: { control: 'text' },
    ctaLabel: { control: 'text' },
    highlighted: { control: 'boolean' },
    badge: { control: 'text' },
  },
};

const baseFeatures = [
  'Up to 10,000 events / month',
  'Email + Slack alerts',
  '2 team seats',
  { text: 'Priority support', included: false },
];

export const Playground = {
  args: { name: 'Starter', description: 'For small teams getting started.', amount: 19, features: baseFeatures, ctaLabel: 'Choose Starter' },
};
export const Highlighted = {
  args: {
    name: 'Pro', description: 'For scaling teams who need usage metering.', amount: 79,
    features: ['Up to 1M events / mo', 'Slack + Webhook alerts', 'Unlimited seats', 'Custom invoicing', 'Priority support'],
    ctaLabel: 'Start Pro trial', highlighted: true, badge: 'Most popular',
  },
};
export const Trio = {
  render: () => (
    <div className="fp-row" style={{ alignItems: 'stretch', gap: 20 }}>
      <PlanCard name="Hobby" description="Free forever for solo builders." amount={0} period=""
        features={['1k events / mo', 'Community support', '1 seat']} ctaLabel="Get started" />
      <PlanCard name="Pro" description="For scaling teams." amount={79} highlighted badge="Popular"
        features={['1M events / mo', 'Slack alerts', 'Unlimited seats', 'Webhooks']} ctaLabel="Start trial" />
      <PlanCard name="Enterprise" description="Custom contracts and SLAs." amount={499}
        features={['Unlimited events', 'SAML SSO', 'Dedicated CSM', 'Audit log exports']} ctaLabel="Contact sales" />
    </div>
  ),
};
