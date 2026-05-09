import { Tooltip } from '../components/Tooltip';
import { Button } from '../components/Button';

export default {
  title: 'Foundations/Tooltips/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    side: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
};

export const Playground = {
  args: { label: 'Annual billing saves 20%', side: 'top' },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="ghost">Hover me</Button>
    </Tooltip>
  ),
};

export const AllSides = {
  render: () => (
    <div className="fp-row" style={{ padding: 60, gap: 60 }}>
      <Tooltip label="Top" side="top"><Button variant="ghost">Top</Button></Tooltip>
      <Tooltip label="Bottom" side="bottom"><Button variant="ghost">Bottom</Button></Tooltip>
      <Tooltip label="Left" side="left"><Button variant="ghost">Left</Button></Tooltip>
      <Tooltip label="Right" side="right"><Button variant="ghost">Right</Button></Tooltip>
    </div>
  ),
};
