// src/Components/Footer/FooterItems/AboutPopup.jsx
import React from 'react';
import './AboutPopup.css';

const AboutPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="about-popup">
      <div className="about-popup-content">
        <h2>About GrocerEase</h2>
        <p>
          GrocerEase is a one-stop solution for all your grocery needs. We aim to make grocery shopping easier and more convenient by providing a seamless online platform. Our mission is to deliver fresh and quality products right to your doorstep with just a few clicks.
        </p>
        <p>
          We offer a wide range of products from fresh produce to household essentials, all sourced from trusted suppliers. At GrocerEase, customer satisfaction is our top priority, and we are constantly striving to improve our services to meet your needs.
        </p>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default AboutPopup;
