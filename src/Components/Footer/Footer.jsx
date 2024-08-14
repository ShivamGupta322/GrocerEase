// src/Components/Footer/Footer.jsx
import React, { useState } from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import ContactPopup from './FooterItems/ContactPopup';

const Footer = () => {
  // Define state for controlling popup visibility
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Function to open the contact popup
  const handleContactClick = () => {
    setPopupOpen(true);
  };

  // Function to close the contact popup
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  // Handle clicks for other footer links
  const handleCompanyClick = () => {
    alert("Company clicked");
    // Add functionality for Company link
  };

  const handleProductsClick = () => {
    alert("Products clicked");
    // Add functionality for Products link
  };

  const handleAboutClick = () => {
    alert("About clicked");
    // Add functionality for About link
  };

    return (
        <div className="footer">
          <div className='footer-logo'>
            <img src={footer_logo} alt="logo" />
            <p>GROCEREASE</p>
          </div>
          <ul className="footer-links">
            <li onClick={handleCompanyClick}>Company</li>
            <li onClick={handleProductsClick}>Products</li>
            <li onClick={handleAboutClick}>About</li>
            <li onClick={handleContactClick}>Contact</li>
          </ul>
          <div className="footer-social-icon">
            <div className="footer-icons-containers">
              <img src={instagram_icon} alt="Instagram" />
            </div>
            <div className="footer-icons-containers">
              <img src={pintester_icon} alt="Pintester" />
            </div>
            <div className="footer-icons-containers">
              <img src={whatsapp_icon} alt="WhatsApp" />
            </div>
          </div>
          <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 All Right Reserved.</p>
          </div>
          <ContactPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
      );
    };
    
    export default Footer;