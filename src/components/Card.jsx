import React from 'react';
import './Card.css';

export const Card = ({ title, eyebrow, footer, elevated = false, accent = false, children, ...rest }) => (
  <div className={`fp-card ${elevated ? 'fp-card--elevated' : ''} ${accent ? 'fp-card--accent' : ''}`} {...rest}>
    {(title || eyebrow) && (
      <header className="fp-card__head">
        {eyebrow && <div className="fp-card__eyebrow">{eyebrow}</div>}
        {title && <h3 className="fp-card__title">{title}</h3>}
      </header>
    )}
    <div className="fp-card__body">{children}</div>
    {footer && <footer className="fp-card__foot">{footer}</footer>}
  </div>
);
export default Card;
