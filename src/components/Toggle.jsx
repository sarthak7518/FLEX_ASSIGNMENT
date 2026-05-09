import React from 'react';
import './Toggle.css';

export const Toggle = ({ checked = false, onChange, label, size = 'md', disabled = false }) => (
  <label className={`fp-toggle fp-toggle--${size} ${disabled ? 'is-disabled' : ''}`}>
    <input type="checkbox" checked={checked} onChange={(e) => onChange?.(e.target.checked)} disabled={disabled} />
    <span className="fp-toggle__track"><span className="fp-toggle__thumb" /></span>
    {label && <span className="fp-toggle__label">{label}</span>}
  </label>
);
export default Toggle;
