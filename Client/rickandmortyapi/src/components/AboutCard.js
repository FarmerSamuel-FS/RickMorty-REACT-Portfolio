import React from 'react';

const AboutCard = ({ title, title2, content, content2, content3, imageUrl }) => {
  return (
    <div className="about-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-40">
      <div className="about-card bg-gray-300 bg-opacity-75 p-6 rounded-lg shadow-lg text-center">
        <h2 className="font-bold text-xl mb-4">{title}</h2>
        <hr className="my-4" />
        <p className="mb-4">{content}</p>
        <hr className="my-4" />
        <h2 className="font-bold text-xl mb-4">{title2}</h2>
        <p className="mb-4">
          {content2} 
          <a href="https://rickandmortyapi.com" target="_blank" rel="noopener noreferrer" className="text-black">https://rickandmortyapi.com</a>
        </p>
        <hr className="my-4" />
        <img src={imageUrl} alt="About Rick and Morty" className="w-full max-w-xs mx-auto mt-4 mb-4" />
        <p className="mb-4">{content3}</p>
      </div>
    </div>
  );
};

export default AboutCard;