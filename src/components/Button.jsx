import React from 'react';
import './Button.css';

export const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  ...rest
}) => {
  const cls = [
    'fp-btn',
    `fp-btn--${variant}`,
    `fp-btn--${size}`,
    fullWidth ? 'fp-btn--full' : '',
    loading ? 'fp-btn--loading' : '',
  ].filter(Boolean).join(' ');

  return (
    <button className={cls} disabled={disabled || loading} {...rest}>
      {loading && <span className="fp-btn__spinner" aria-hidden />}
      {!loading && iconLeft && <span className="fp-btn__icon">{iconLeft}</span>}
      <span className="fp-btn__label">{children}</span>
      {!loading && iconRight && <span className="fp-btn__icon">{iconRight}</span>}
    </button>
  );
};

export default Button;
