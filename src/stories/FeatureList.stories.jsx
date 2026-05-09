import { FeatureList } from '../components/FeatureList';

export default {
  title: 'Pricing/FeatureList',
  component: FeatureList,
  tags: ['autodocs'],
};

export const Playground = {
  args: {
    items: [
      'Unlimited workspaces',
      'Usage-based metering',
      'Stripe & Razorpay integrations',
      { text: 'SAML SSO', included: false },
      { text: 'Custom contracts', included: false },
    ],
  },
};
export const Dense = {
  args: {
    dense: true,
    items: ['Webhooks', 'API access', 'Audit logs', 'Slack alerts'],
  },
};
