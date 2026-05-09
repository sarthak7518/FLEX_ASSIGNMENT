import React from 'react';
import './Badge.css';

export const Badge = ({ tone = 'neutral', size = 'md', dot = false, children, ...rest }) => (
  <span className={`fp-badge fp-badge--${tone} fp-badge--${size}`} {...rest}>
    {dot && <span className="fp-badge__dot" />}
    {children}
  </span>
);
export default Badge;
