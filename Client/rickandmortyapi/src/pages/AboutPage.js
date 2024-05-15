import React from 'react';
import CenteredImage from '../components/CenteredImage';
import About from '../assets/AboutRicknMorty.png';
import AboutCard from '../components/AboutCard';
import backgroundImg from '../assets/background.jpg';

const AboutPage = () => {
  return (
    <div className='about-container'>
      <h1 className="welcome-text text-center text-teal-500 font-bold text-3xl mt-10">About Site:</h1>
      <CenteredImage imageUrl={backgroundImg} className="opacity-50" /> 
      <div className="card-container mt-20">
        <AboutCard 
          title="About"
          content="Wanna find information of your favorite Rick and Morty character, or maybe settle a debate with a friend of what episode they appeared in? Look no further, as  this website utilizes the Rick and Morty API to look up characters from the Rick and Morty Universe. Notice we have missed a few characters? Feel free to submit your own and upon admin approval/review for accuracy we will publish the new character data."
          title2="API Reference:"
          content2={"This website is to test out the Rick and Morty API: "}
          content3="Created by Samuel Farmer Web Developer Copyright@ 2024"
          imageUrl={About}
        />
      </div>
    </div>
  );
};

AboutPage.title = 'About'; 
export default AboutPage;

