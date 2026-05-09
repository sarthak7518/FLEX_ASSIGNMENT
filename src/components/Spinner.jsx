import React from 'react';
import './Spinner.css';

export const Spinner = ({ size = 'md', tone = 'ink', label }) => (
  <div className="fp-spin-wrap">
    <span className={`fp-spin fp-spin--${size} fp-spin--${tone}`} role="status" aria-label={label || 'Loading'} />
    {label && <span className="fp-spin__label">{label}</span>}
  </div>
);
export default Spinner;
