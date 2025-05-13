import React from 'react';
import './EventCard.css';

export default function EventCard({
  rating,
  user,
  title,
  description,
  profilePicture,
  attendance,
  timeOfEvent,
}) {
  return (
    <div className='event-card'>
      <div className='host'>
        <img src={profilePicture} alt='Host' />
        <div className='host-details'>
          <div className='host-name'>{user}</div>
          <div className='rating'>{rating} ⭐️ (15)</div>
        </div>
      </div>
      <div className='phone-event-title'>{title}</div>
      <div className='phone-description'>{description}</div>
      <div className='meta'>
        {attendance} going • {timeOfEvent}
      </div>
      <button className='join-btn'>Join</button>
    </div>
  );
}
