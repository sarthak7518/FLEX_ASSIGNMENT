import React from 'react';
import { PriceTag } from './PriceTag';
import { Badge } from './Badge';
import { Button } from './Button';
import { FeatureList } from './FeatureList';
import './PlanCard.css';

export const PlanCard = ({
  name = 'Starter',
  description = 'For small teams getting started.',
  amount = 19,
  period = '/mo',
  features = [],
  ctaLabel = 'Choose plan',
  highlighted = false,
  badge = null,
  onSelect,
}) => (
  <div className={`fp-plan ${highlighted ? 'fp-plan--hi' : ''}`}>
    {badge && <div className="fp-plan__badge"><Badge tone={highlighted ? 'accent' : 'neutral'} size="sm">{badge}</Badge></div>}
    <div className="fp-plan__name">{name}</div>
    <div className="fp-plan__desc">{description}</div>
    <div className="fp-plan__price">
      <PriceTag amount={amount} period={period} size="md" accent={highlighted} />
    </div>
    <FeatureList items={features} />
    <Button
      variant={highlighted ? 'accent' : 'ghost'}
      fullWidth
      onClick={onSelect}
    >
      {ctaLabel}
    </Button>
  </div>
);
export default PlanCard;
