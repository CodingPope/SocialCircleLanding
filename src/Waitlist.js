import React from 'react';
import './WaitlistLandingPageNew.css';

export default function WaitlistLandingPage() {
  return (
    <div className='container'>
      <header className='header'>
        <h1 className='logo'>Social Circle</h1>
        <div>
          <nav className='nav'>
            <a href='#features'>Features</a>
            <a href='#about'>About</a>
          </nav>
        </div>
      </header>

      <main className='main'>
        <div className='hero-text'>
          <h2>Expand your social circle</h2>
          <p>
            An app for meeting new people through shared interests, activities,
            and events.
          </p>
          <form className='waitlist-form'>
            <input type='email' placeholder='Enter your email' required />
            <button type='submit'>Join the waitlist</button>
          </form>
        </div>

        <div className='hero-image'>
          <div className='mock-phone'>
            <h3>Social Circle</h3>
            <div className='event-card'>
              <p>Board Game Night</p>
              <div className='avatars'>
                <div className='avatar'></div>
                <div className='avatar'></div>
                <div className='avatar'></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className='features'>
        <h2>Connect with peers</h2>
        <div className='features-grid'>
          <div className='feature'>
            <div className='icon'>👥</div>
            <h3>Connect with peers</h3>
            <p>Match and chat with like-minded individuals in your area.</p>
          </div>
          <div className='feature'>
            <div className='icon'>📅</div>
            <h3>Discover local events</h3>
            <p>
              Find social gatherings and activities tailored to your interests.
            </p>
          </div>
          <div className='feature'>
            <div className='icon'>📍</div>
            <h3>Meet up in person</h3>
            <p>
              Schedule private group meetups and make real-world connections.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
