import React from 'react';
import './Tooltip.css';

export const Tooltip = ({ label, side = 'top', children }) => (
  <span className={`fp-tip fp-tip--${side}`}>
    {children}
    <span className="fp-tip__bubble" role="tooltip">{label}</span>
  </span>
);
export default Tooltip;
