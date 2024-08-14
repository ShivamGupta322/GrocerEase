// src/Components/Footer/Footer.jsx
import React, { useState } from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import ContactPopup from './FooterItems/ContactPopup';
import AboutPopup from './FooterItems/AboutPopup';

const Footer = () => {
  const [isContactPopupOpen, setContactPopupOpen] = useState(false);
  const [isAboutPopupOpen, setAboutPopupOpen] = useState(false);

  const handleContactClick = () => {
    setContactPopupOpen(true);
  };

  const handleCloseContactPopup = () => {
    setContactPopupOpen(false);
  };

  const handleAboutClick = () => {
    setAboutPopupOpen(true);
  };

  const handleCloseAboutPopup = () => {
    setAboutPopupOpen(false);
  };

  const handleProductsClick = () => {
    const popularSection = document.getElementById('popular-sections');
    if (popularSection) {
      window.scrollTo({
        top: popularSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Footer Section */}
      <div className="footer">
        <div className='footer-logo'>
          <img src={footer_logo} alt="logo" />
          <p>GROCEREASE</p>
        </div>
        <ul className="footer-links">
          <li onClick={handleProductsClick}>Products</li>
          <li onClick={handleAboutClick}>About</li>
          <li onClick={handleContactClick}>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
            <img src={instagram_icon} alt="Instagram" />
          </a>
          <a href="https://www.pintester.com/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
            <img src={pintester_icon} alt="Pintester" />
          </a>
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
            <img src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2024 All Right Reserved.</p>
        </div>
        <ContactPopup isOpen={isContactPopupOpen} onClose={handleCloseContactPopup} />
        <AboutPopup isOpen={isAboutPopupOpen} onClose={handleCloseAboutPopup} />
      </div>
    </>
  );
};

export default Footer;
