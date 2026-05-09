import React from 'react';
import './Alert.css';

export const Alert = ({ tone = 'info', title, children, onDismiss }) => (
  <div className={`fp-alert fp-alert--${tone}`} role="alert">
    <span className="fp-alert__icon" aria-hidden>
      {tone === 'success' && '✓'}
      {tone === 'warn' && '!'}
      {tone === 'danger' && '×'}
      {tone === 'info' && 'i'}
    </span>
    <div className="fp-alert__body">
      {title && <div className="fp-alert__title">{title}</div>}
      {children && <div className="fp-alert__text">{children}</div>}
    </div>
    {onDismiss && <button className="fp-alert__close" onClick={onDismiss} aria-label="Dismiss">×</button>}
  </div>
);
export default Alert;
