import React from 'react';
import './EventCard.css';

export default function EventCard({ title, subtitle, icon }) {
  return (
    <div className='event-card'>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <div className='card-icon'>{icon}</div>
    </div>
  );
}
