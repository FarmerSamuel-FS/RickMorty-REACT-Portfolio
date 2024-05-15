import React from 'react';

const SearchResultCard = ({ character }) => {
  const { name, status, species, gender, location, image } = character;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300 bg-opacity-75 text-black">
      <img src={image} alt={name} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Location: {location.name}</p>
      </div>
    </div>
  );
};

export default SearchResultCard;