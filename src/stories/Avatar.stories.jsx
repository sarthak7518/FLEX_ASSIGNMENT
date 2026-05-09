import { Avatar } from '../components/Avatar';

export default {
  title: 'Foundations/Avatars/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    shape: { control: 'select', options: ['circle', 'square'] },
    status: { control: 'select', options: [undefined, 'online', 'away', 'busy', 'offline'] },
    name: { control: 'text' },
    src: { control: 'text' },
  },
};

export const Playground = { args: { name: 'Asha Patel', size: 'md' } };
export const Initials = {
  render: () => (
    <div className="fp-row">
      <Avatar name="Asha Patel" size="sm" />
      <Avatar name="Marcus Lee" size="md" />
      <Avatar name="Yuki Tanaka" size="lg" />
      <Avatar name="Sara Lopez" size="xl" />
    </div>
  ),
};
export const WithImage = {
  args: { src: 'https://i.pravatar.cc/120?u=flexprice', name: 'Asha Patel', size: 'lg' },
};
export const StatusDots = {
  render: () => (
    <div className="fp-row">
      <Avatar name="Online" status="online" />
      <Avatar name="Away" status="away" />
      <Avatar name="Busy" status="busy" />
      <Avatar name="Offline" status="offline" />
    </div>
  ),
};
export const Square = { args: { name: 'Acme Inc', shape: 'square', size: 'lg' } };
