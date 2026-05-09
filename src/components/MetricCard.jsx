import React from 'react';
import './MetricCard.css';

export const MetricCard = ({ label, value, change, trend = 'up', helpText, accent = false }) => (
  <div className={`fp-metric ${accent ? 'fp-metric--accent' : ''}`}>
    <div className="fp-metric__label">{label}</div>
    <div className="fp-metric__value">{value}</div>
    {(change != null) && (
      <div className={`fp-metric__delta fp-metric__delta--${trend}`}>
        <span aria-hidden>{trend === 'up' ? '▲' : trend === 'down' ? '▼' : '·'}</span>
        <span>{change}</span>
      </div>
    )}
    {helpText && <div className="fp-metric__help">{helpText}</div>}
  </div>
);
export default MetricCard;
