import React from 'react';
import './FeatureList.css';

export const FeatureList = ({ items = [], dense = false }) => (
  <ul className={`fp-flist ${dense ? 'fp-flist--dense' : ''}`}>
    {items.map((it, i) => {
      const text = typeof it === 'string' ? it : it.text;
      const included = typeof it === 'string' ? true : it.included !== false;
      return (
        <li key={i} className={`fp-flist__row ${!included ? 'fp-flist__row--off' : ''}`}>
          <span className="fp-flist__mark" aria-hidden>{included ? '✓' : '—'}</span>
          <span>{text}</span>
        </li>
      );
    })}
  </ul>
);
export default FeatureList;
