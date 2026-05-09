import React from 'react';
import './Avatar.css';

export const Avatar = ({ src, name = 'User', size = 'md', shape = 'circle', status }) => {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span className={`fp-avatar fp-avatar--${size} fp-avatar--${shape}`}>
      {src
        ? <img src={src} alt={name} className="fp-avatar__img" />
        : <span className="fp-avatar__txt">{initials}</span>}
      {status && <span className={`fp-avatar__status fp-avatar__status--${status}`} />}
    </span>
  );
};
export default Avatar;
