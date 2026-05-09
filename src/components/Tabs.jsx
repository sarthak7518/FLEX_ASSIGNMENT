import React, { useState } from 'react';
import './Tabs.css';

export const Tabs = ({ tabs = [], defaultIndex = 0, variant = 'underline' }) => {
  const [active, setActive] = useState(defaultIndex);
  return (
    <div className={`fp-tabs fp-tabs--${variant}`}>
      <div className="fp-tabs__list" role="tablist">
        {tabs.map((t, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            className={`fp-tabs__btn ${active === i ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="fp-tabs__panel" role="tabpanel">
        {tabs[active]?.content}
      </div>
    </div>
  );
};
export default Tabs;
