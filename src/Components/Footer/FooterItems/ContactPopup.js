// src/components/ContactPopup.js
import React  from 'react';
import './ContactPopup.css';

const ContactPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="contact-popup-overlay">
      <div className="contact-popup">
        <button className="contact-popup-close" onClick={onClose}>
          &times;
        </button>
        <h2>Contact Us</h2>
        <form className="contact-popup-form" action="https://formspree.io/f/xwpebznk"
  method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
