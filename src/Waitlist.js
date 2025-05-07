import React from 'react';
import './WaitlistLandingPageNew.css';

const eventCards = [
  { id: 1, title: 'Lorem Ipsum', subtitle: 'Simply dummy text', icon: '🖥️➦' },
  { id: 2, title: 'Lorem Ipsum', subtitle: 'Simply dummy text', icon: '⏱️➕' },
  { id: 3, title: 'Lorem Ipsum', subtitle: 'Simply dummy text', icon: '🎉' },
];

const navIcons = [
  { id: 1, label: 'Home', icon: '🏠' },
  { id: 2, label: 'Alerts', icon: '🔔' },
  { id: 3, label: 'Groups', icon: '👥' },
  { id: 4, label: 'Profile', icon: '👤' },
];
function handleRipple(e) {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  btn.style.setProperty('--ripple-x', `${e.clientX - rect.left - 50}px`);
  btn.style.setProperty('--ripple-y', `${e.clientY - rect.top - 50}px`);
}

export default function WaitlistLandingPage() {
  return (
    <div className='container'>
      {/* HEADER */}
      <header className='header'>
        <h1 className='logo'>Social Circle</h1>
        <nav className='nav'>
          <a href='#features'>Features</a>
          <a href='#about'>About</a>
        </nav>
      </header>

      {/* HERO */}
      <main className='main'>
        <div class='hero-card'>
          <div className='hero-text'>
            <h2>Expand your social circle</h2>
            <p>
              An app for meeting new people through shared interests,
              activities, and events.
            </p>
            <form className='waitlist-form'>
              <input type='email' placeholder='Enter your email' required />
              <button
                type='submit'
                className='btn-ripple'
                onClick={handleRipple}
              >
                Join the waitlist
              </button>
            </form>
          </div>
        </div>

        {/* PHONE MOCKUP */}
        <div className='hero-image'>
          <div className='iphone-frame'>
            <img
              src='/iphone16.png'
              alt='iPhone frame'
              className='iphone-frame-img'
            />
            <div className='mock-phone1'>
              <div className='mock-phone'>
                {/* PHONE HEADER: Title + Bell */}
                <div className='event-title'>
                  <h6>Social Circle</h6>
                  <img
                    src='/bellicon.png'
                    alt='Bell Icon'
                    width='20'
                    height='20'
                  />
                </div>

                {/* EVENT CARDS ROW (absolute, sits above nav) */}
                <div className='event-cards'>
                  {eventCards.map((card) => (
                    <div key={card.id} className='event-card'>
                      <h3>{card.title}</h3>
                      <p>{card.subtitle}</p>
                      <div className='card-icon'>{card.icon}</div>
                    </div>
                  ))}
                </div>

                {/* BOTTOM NAV */}
                <div className='bottom-nav'>
                  {navIcons.map((nav) => (
                    <div key={nav.id} className='nav-icon'>
                      {nav.icon}
                      <small>{nav.label}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FEATURES */}
      <section className='features' id='features'>
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
