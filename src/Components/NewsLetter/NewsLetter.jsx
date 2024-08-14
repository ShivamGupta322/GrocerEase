import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your backend URL
    const backendUrl = 'http://localhost:4000/subscribe';

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='newsletter'>
      <h1 className='newsletter-title'>Get Exclusive Offers On Your Email</h1>
      <p className='newsletter-description'>Subscribe to our newsletter and stay updated</p>
      <form className='newsletter-form' onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type='submit'>Subscribe</button>
      </form>
      {message && <p className='newsletter-message'>{message}</p>}
    </div>
  );
};

export default NewsLetter;
