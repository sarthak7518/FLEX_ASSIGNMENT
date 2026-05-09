import React from 'react';
import { Button } from './Button';
import './Modal.css';

export const Modal = ({ open = false, onClose, title, footer, children, size = 'md' }) => {
  if (!open) return null;
  return (
    <div className="fp-modal" role="dialog" aria-modal="true" aria-label={title}>
      <div className="fp-modal__scrim" onClick={onClose} />
      <div className={`fp-modal__panel fp-modal__panel--${size}`}>
        <header className="fp-modal__head">
          <h3 className="fp-modal__title">{title}</h3>
          <button className="fp-modal__close" onClick={onClose} aria-label="Close">×</button>
        </header>
        <div className="fp-modal__body">{children}</div>
        {footer && <footer className="fp-modal__foot">{footer}</footer>}
      </div>
    </div>
  );
};
Modal.Footer = ({ onCancel, onConfirm, cancelLabel = 'Cancel', confirmLabel = 'Confirm' }) => (
  <>
    <Button variant="ghost" onClick={onCancel}>{cancelLabel}</Button>
    <Button variant="primary" onClick={onConfirm}>{confirmLabel}</Button>
  </>
);
export default Modal;
