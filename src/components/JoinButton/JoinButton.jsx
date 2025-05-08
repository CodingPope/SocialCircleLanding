import React from 'react';
import './JoinButton.css';

export default function JoinButton({ children, ...props }) {
  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty('--ripple-x', `${e.clientX - rect.left - 50}px`);
    btn.style.setProperty('--ripple-y', `${e.clientY - rect.top - 50}px`);
  };

  return (
    <button
      {...props}
      className='btn-ripple'
      onClick={(e) => {
        handleRipple(e);
        if (props.onClick) props.onClick(e);
      }}
    >
      {children}
    </button>
  );
}
