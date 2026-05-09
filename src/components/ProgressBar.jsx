import React from 'react';
import './ProgressBar.css';

export const ProgressBar = ({ value = 50, max = 100, label, tone = 'ink', showValue = true, indeterminate = false }) => {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="fp-progress">
      {(label || showValue) && (
        <div className="fp-progress__head">
          <span>{label}</span>
          {showValue && !indeterminate && <span className="fp-progress__val">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className="fp-progress__track">
        <div
          className={`fp-progress__fill fp-progress__fill--${tone} ${indeterminate ? 'is-indeterminate' : ''}`}
          style={indeterminate ? undefined : { width: `${pct}%` }}
        />
      </div>
    </div>
  );
};
export default ProgressBar;
