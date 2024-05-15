import React, { useState, useEffect } from 'react';
import CenteredImage from '../components/CenteredImage';
import backgroundImg from '../assets/background.jpg';

const SubmitPage = () => {
  const [characterData, setCharacterData] = useState({
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    image: null,
    email: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCharacterData({ ...characterData, [name]: value });
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setCharacterData({ ...characterData, image: imageFile });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('submittedCharacterData', JSON.stringify(characterData));
    setCharacterData({
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      location: '',
      image: null,
      email: ''
    });
  };

  useEffect(() => {
    const storedData = localStorage.getItem('submittedCharacterData');
    if (storedData) {
      setCharacterData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="submit-page relative">
      <CenteredImage imageUrl={backgroundImg} className="opacity-50" />
      <div className="submit-form-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 bg-opacity-75 p-8 rounded-lg shadow-lg text-center">
        <h2 className="font-bold text-2xl mb-6">Submit New Character</h2>
        <form onSubmit={handleSubmit} className="submit-form">
          <label className="block mb-2">Name:</label>
          <input type="text" name="name" value={characterData.name} onChange={handleInputChange} required className="input-field w-full mb-4" />
          <label className="block mb-2">Status:</label>
          <input type="text" name="status" value={characterData.status} onChange={handleInputChange} required className="input-field w-full mb-4" />
          <label className="block mb-2">Species:</label>
          <input type="text" name="species" value={characterData.species} onChange={handleInputChange} required className="input-field w-full mb-4" />
          <label className="block mb-2">Gender:</label>
          <input type="text" name="gender" value={characterData.gender} onChange={handleInputChange} required className="input-field w-full mb-4" />
          <label className="block mb-2">Origin:</label>
          <input type="text" name="origin" value={characterData.origin} onChange={handleInputChange} required className="input-field w-full mb-4" />
          <label className="block mb-2">Location:</label>
          <input type="text" name="location" value={characterData.location} onChange={handleInputChange} required className="input-field w-full mb-4" />
          <label className="block mb-2">Upload Photo:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="input-field w-full mb-4" />
          <label className="block mb-2">Email:</label>
          <input type="email" name="email" value={characterData.email} onChange={handleInputChange} required className="input-field w-full mb-6" />
        </form>
        <button type="submit" onClick={handleSubmit} className="btn-primary bg-blue-500 px-8 py-3 rounded-lg text-white text-lg mt-4 border border-blue-500">Submit</button>
      </div>
    </div>
  );
};

SubmitPage.title = 'Submit';

export default SubmitPage;