import React from 'react';
import './Input.css';

export const Input = ({
  label, hint, error, prefix, suffix, type = 'text', fullWidth = false,
  id, ...rest
}) => {
  const inputId = id || `fp-input-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div className={`fp-input ${fullWidth ? 'fp-input--full' : ''} ${error ? 'fp-input--error' : ''}`}>
      {label && <label className="fp-input__label" htmlFor={inputId}>{label}</label>}
      <div className="fp-input__wrap">
        {prefix && <span className="fp-input__affix">{prefix}</span>}
        <input id={inputId} type={type} className="fp-input__field" {...rest} />
        {suffix && <span className="fp-input__affix fp-input__affix--right">{suffix}</span>}
      </div>
      {error ? <div className="fp-input__error">{error}</div>
        : hint ? <div className="fp-input__hint">{hint}</div> : null}
    </div>
  );
};
export default Input;
