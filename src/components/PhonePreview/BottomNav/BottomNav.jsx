import React from 'react';
import './BottomNav.css';

export default function BottomNav({ items }) {
  return (
    <div className='bottom-nav'>
      {items.map(({ id, label, icon }) => (
        <div key={id} className='nav-icon'>
          {icon}
          <small>{label}</small>
        </div>
      ))}
    </div>
  );
}
