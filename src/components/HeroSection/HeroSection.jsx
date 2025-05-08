import React from 'react';
import JoinButton from '../JoinButton/JoinButton';
import './HeroSection.css';

export default function HeroSection({ eventCards, navIcons }) {
  return (
    <section className='hero-section'>
      <div className='hero-card'>
        <div className='hero-text'>
          <h2>Find Your People. Anywhere.</h2>
          <p>
            Join meetups around your interests — from hikes to game nights, and
            everything in between.
          </p>
          <form className='waitlist-form'>
            <input type='email' placeholder='Enter your email' required />
            <JoinButton type='submit'>Join the waitlist</JoinButton>
          </form>
        </div>
      </div>
    </section>
  );
}
