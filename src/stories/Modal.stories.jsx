import { useState } from 'react';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';

export default {
  title: 'Layout/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export const Playground = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 80, minHeight: 400 }}>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm plan upgrade"
          size="md"
          footer={<Modal.Footer onCancel={() => setOpen(false)} onConfirm={() => setOpen(false)} confirmLabel="Upgrade to Pro" />}
        >
          You're about to upgrade to <b>Pro</b> at <b>$79/mo</b>. We'll prorate the
          remainder of this billing period and charge the difference today.
        </Modal>
      </div>
    );
  },
};

export const Small = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div style={{ padding: 80, minHeight: 400 }}>
        <Button onClick={() => setOpen(true)}>Re-open</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Cancel subscription?" size="sm"
          footer={<Modal.Footer cancelLabel="Keep" confirmLabel="Cancel" onCancel={() => setOpen(false)} onConfirm={() => setOpen(false)} />}>
          Your access will remain active until the end of the current billing cycle.
        </Modal>
      </div>
    );
  },
};
