import React from 'react';
import LatestUpdateCard from '../components/LatestUpdateCard'; 
import CenteredImage from '../components/CenteredImage'; 
import portalImg from '../assets/Portal.png'; 
import backgroundImg from '../assets/background.jpg'; 

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow relative">
        <CenteredImage imageUrl={backgroundImg} className="w-full h-full grayscale" />
        <h1 className="text-green-500 font-bold text-4xl text-center mt-8 absolute inset-x-0 top-0">Welcome to the Rick and Morty API!</h1>        
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="portal-container flex flex-col items-center mb-64">
            <img src={portalImg} alt="Portal" className="portal-image w-128 h-auto py-8" />
            <LatestUpdateCard 
              title="Latest Update"
              content="The Emmy-winning series will return for its eighth season sometime in 2025, ending the showâ€™s recent streak of having new episodes annually (the showâ€™s seventh season had its finale in December). The reason for the push: Last yearâ€™s five-month Writers Guild strike delayed production on the new episodes. Starting today, the showâ€™s seventh season is now on Max, which means all that Rick and Morty episodes are now on the streamer."
              className="z-10 bg-white p-4 rounded-xl shadow-lg opacity-85"
              style={{ marginTop: '1rem' }}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

HomePage.title = 'Home'; 
export default HomePage;