import React from 'react';

const CenteredImage = ({ imageUrl, className }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <img src={imageUrl} alt="" className="centered-image grayscale" />
    </div>
  );
};

export default CenteredImage;