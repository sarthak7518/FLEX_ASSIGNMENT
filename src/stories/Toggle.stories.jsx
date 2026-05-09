import { Toggle } from '../components/Toggle';
import { useState } from 'react';

export default {
  title: 'Foundations/Toggles/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md'] },
    disabled: { control: 'boolean' },
  },
};

export const Playground = { args: { checked: true, label: 'Bill annually (save 20%)' } };

export const Interactive = {
  render: () => {
    const [on, setOn] = useState(false);
    return <Toggle checked={on} onChange={setOn} label={on ? 'Notifications: on' : 'Notifications: off'} />;
  },
};
export const Sizes = {
  render: () => (
    <div className="fp-stack">
      <Toggle checked size="sm" label="Small" />
      <Toggle checked size="md" label="Medium" />
    </div>
  ),
};
export const Disabled = { args: { disabled: true, checked: true, label: 'Locked feature' } };
