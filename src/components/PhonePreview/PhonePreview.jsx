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
              <img
                src='/social circle Logo.png'
                alt='Logo'
                className='logo-img'
              />

              <h6 className='logo'>Social Circle</h6>
            </div>
            <div className='event-cards'>
              {[...eventCards, ...eventCards].map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </div>
            <BottomNav items={navIcons} className='navIcons' />
          </div>
        </div>
      </div>
    </section>
  );
}
