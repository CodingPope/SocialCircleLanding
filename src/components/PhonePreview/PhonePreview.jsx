import React from 'react';
import EventCard from './EventCard/EventCard';
import BottomNav from './BottomNav/BottomNav';
import './PhonePreview.css';

export default function PhonePreview({ eventCards, navIcons }) {
  return (
    <section className='preview-section'>
      <div className='iphone-frame'>
        <img
          src='/iphone16svg.svg'
          alt='iPhone frame'
          className='iphone-frame-img'
        />
        <div className='mock-phone1'>
          <div className='mock-phone'>
            <div className='event-title'>
              <h6>Social Circle</h6>
              <img src='/bellicon.png' alt='Bell Icon' width='20' height='20' />
            </div>
            <div className='event-cards'>
              {eventCards.map((card) => (
                <EventCard key={card.id} {...card} />
              ))}
            </div>
            <BottomNav items={navIcons} className='navIcons' />
          </div>
        </div>
      </div>
    </section>
  );
}
