import React from 'react';
import bannerImage from '../assets/Shape4.png';
import { FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Nav from './Nav';

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-black py-8 relative">
      <Nav />
      <img src={bannerImage} alt="Footer Banner" className="banner-image absolute inset-0 w-full h-full" />
      <div className="footer-content container mx-auto absolute inset-0 flex flex-col justify-center items-center">
        <div className="contact-info mb-4 text-center font-serif">
          {/* Applied font-serif class for Helvetica Neue font */}
          <p>Email: sfarmer1@student.fullsail.edu</p>
          <p>Phone: 999-999-9999</p>
          <p>Copyright@2024</p>
        </div>
        <div className="social-icons flex justify-center">
          <FaFacebookSquare className="icon mr-4" />
          <FaLinkedin className="icon mr-4" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;