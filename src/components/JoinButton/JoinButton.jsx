import React, { useState, useEffect, useRef } from 'react';
import './JoinButton.css';

export default function JoinButton({ children, ...props }) {
  const [animating, setAnimating] = useState(false);
  const btnRef = useRef(null);

  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty('--ripple-x', `${e.clientX - rect.left - 50}px`);
    btn.style.setProperty('--ripple-y', `${e.clientY - rect.top - 50}px`);
  };

  const handleClick = (e) => {
    handleRipple(e);
    if (animating) return; // prevent re-trigger while animating
    setAnimating(true);
    if (props.onClick) props.onClick(e);
  };

  useEffect(() => {
    if (!animating) return;
    const btn = btnRef.current;
    const handleAnimationEnd = () => {
      setAnimating(false);
    };
    btn.addEventListener('animationend', handleAnimationEnd);
    return () => {
      btn.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [animating]);

  return (
    <button
      {...props}
      ref={btnRef}
      className={`btn-ripple ${animating ? 'btn-animate' : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
