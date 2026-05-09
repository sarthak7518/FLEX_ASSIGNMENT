import React from 'react';
import './PriceTag.css';

export const PriceTag = ({
  amount = 0, currency = '$', period = '/mo', size = 'md', strikeAmount, accent = false,
}) => (
  <div className={`fp-price fp-price--${size} ${accent ? 'fp-price--accent' : ''}`}>
    <span className="fp-price__currency">{currency}</span>
    <span className="fp-price__amount">{amount}</span>
    {period && <span className="fp-price__period">{period}</span>}
    {strikeAmount != null && (
      <span className="fp-price__strike">{currency}{strikeAmount}</span>
    )}
  </div>
);
export default PriceTag;
