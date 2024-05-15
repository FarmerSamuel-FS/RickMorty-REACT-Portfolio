// characterController.js
const SubmittedCharacter = require('../models/SubmittedCharacter');


// Controller function to submit a character
exports.submitCharacter = async (req, res) => {
  try {
    const { name, status, species, type, gender, origin, location, image, episode } = req.body;
    
    // Create a new SubmittedCharacter document
    const newCharacter = new SubmittedCharacter({
      name,
      status,
      species,
      type,
      gender,
      origin,
      location,
      image,
      episode,
    });

 
    await newCharacter.save();
    
    res.json({ message: 'Character submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
