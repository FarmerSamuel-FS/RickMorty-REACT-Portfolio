import React from 'react';

const LatestUpdateCard = ({ title, content }) => {
  return (
    <div className="latest-update-card bg-gray-400 p-4 rounded-lg shadow-md text-center max-w-2xl mx-auto mb-8">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <hr className="my-2" />
      <p className="mb-2">{content}</p>
      <a href="https://www.hollywoodreporter.com/tv/tv-news/rick-morty-season-8-date-anime-footage-1235803545/" className="text-blue-500 hover:underline">Source Article</a>
    </div>
  );
};

export default LatestUpdateCard;