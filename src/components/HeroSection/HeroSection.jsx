import React, { useState } from 'react';
import JoinButton from '../JoinButton/JoinButton';
import './HeroSection.css';

const BREVO_API_KEY = process.env.REACT_APP_BREVO_API_KEY;
const BREVO_LIST_ID = Number(process.env.REACT_APP_BREVO_LIST_ID);

console.log('Brevo API Key:', BREVO_API_KEY);

export default function HeroSection({ eventCards, navIcons }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [position, setPosition] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);
    setPosition(null);

    try {
      const bodyData = {
        email: email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: false,
      };

      if (phone.trim() !== '') {
        // Ensure phone number is in E.164 format, prepend +1 if missing
        let formattedPhone = phone.trim();
        if (!formattedPhone.startsWith('+')) {
          formattedPhone = '+1' + formattedPhone;
        }
        bodyData.attributes = {
          SMS: formattedPhone,
        };
      }

      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify(bodyData),
      });

      if (response.ok) {
        const countResponse = await fetch(
          `https://api.brevo.com/v3/contacts/lists/${BREVO_LIST_ID}/contacts?limit=1`,
          {
            method: 'GET',
            headers: {
              'api-key': BREVO_API_KEY,
            },
          }
        );

        if (countResponse.ok) {
          const countData = await countResponse.json();
          const totalContacts = countData.count || 0;
          setPosition(totalContacts);
        } else {
          setPosition(null);
        }

        setStatus('success');
        setEmail('');
        setPhone('');
      } else {
        const errorData = await response.json();
        console.error('Brevo API error:', errorData);
        setErrorMessage(errorData.message || 'Unknown error');
        setStatus('error');
        setPosition(null);
      }
    } catch (error) {
      console.error('Network error:', error);
      setErrorMessage(error.message || 'Network error');
      setStatus('error');
      setPosition(null);
    }
  };

  return (
    <section className='hero-section'>
      <div className='hero-card'>
        <div className='hero-text'>
          {status === 'success' ? (
            <>
              {position !== null ? (
                <div class='card-container'>
                  <div class='headline'>
                    You’re on the list at{' '}
                    <span class='position'>#{position}</span>
                  </div>
                  <div class='subtext'>Thank you for joining the waitlist.</div>
                  <div class='subtext'>
                    You’ll be the first to know when Social Circle launches. 🥳
                  </div>
                  <div class='subtext'>
                    Keep an eye on your inbox for updates.
                  </div>
                </div>
              ) : (
                <div class='card-container'>
                  <div class='headline'>
                    You’re on the list at{' '}
                    <span class='position'>#{position}</span>
                  </div>
                  <div class='subtext'>Thank you for joining the waitlist.</div>
                  <div class='subtext'>
                    You’ll be the first to know when Social Circle launches. 🥳
                  </div>
                  <div class='subtext'>
                    Keep an eye on your inbox for updates.
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <h2>Find Your People. Anywhere.</h2>
              <p>
                Join meetups around your interests — from hikes to game nights,
                and everything in between.
              </p>
              <form className='waitlist-form' onSubmit={handleSubmit}>
                <input
                  type='tel'
                  placeholder='Phone number (optional)'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern='[+]?[\d\s\-()]{7,}'
                  title='Please enter a valid phone number'
                />
                <input
                  type='email'
                  placeholder='Email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <JoinButton type='submit'>Join the waitlist</JoinButton>
              </form>
              {status === 'loading' && <p>Submitting...</p>}
              {status === 'error' && (
                <p>There was an error: {errorMessage}. Please try again.</p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
