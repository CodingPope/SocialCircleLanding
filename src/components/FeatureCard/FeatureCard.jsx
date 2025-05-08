import React from 'react';
import './FeatureCard.css';

export default function FeatureCard({ Icon, title, copy }) {
  return (
    <div className='feature-card'>
      <Icon className='feature-icon' />
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  );
}
