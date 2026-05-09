import { Spinner } from '../components/Spinner';

export default {
  title: 'Foundations/Spinners/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    tone: { control: 'select', options: ['ink', 'accent', 'muted'] },
    label: { control: 'text' },
  },
};

export const Playground = { args: { size: 'md', tone: 'ink' } };
export const WithLabel = { args: { size: 'md', tone: 'accent', label: 'Reconciling invoices…' } };
export const Sizes = {
  render: () => (
    <div className="fp-row">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};
