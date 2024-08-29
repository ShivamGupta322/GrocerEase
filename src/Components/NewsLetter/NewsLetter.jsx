import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS service parameters
    const serviceId = 'service_hy6aoaq';
    const templateId = 'template_od5htsl';
    const userId = '3Wcpi02d8QNc7PJlJ';

    try {
      // Send the email using EmailJS
      const response = await emailjs.send(serviceId, templateId, { email }, userId);

      if (response.status === 200) {
        setMessage('Thank you for subscribing! A confirmation email has been sent to your inbox.');
        setEmail('');

        // Clear the message after 3 seconds
        setTimeout(() => {
          setMessage('');
        }, 3000);
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
