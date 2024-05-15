import React from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import bannerImage from '../assets/Shape4.png'; 
import logoImage from '../assets/Logo.png'; 
import Nav from './Nav';

const Header = ({ title }) => {
  return ( 
    <motion.Header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header relative">
        <img src={bannerImage} alt="Banner" className="banner-image w-full h-full" />
        <div className="logo-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[-48px]">
          <Link to="/"> 
            <motion.img
              src={logoImage}
              alt="Logo"
              className="logo-image w-96 h-32"
              whileHover={{ scale: 2.0 }} 
            />
          </Link>
        </div>
        <Nav />
      </div>
    </motion.Header>
  );
};

export default Header;