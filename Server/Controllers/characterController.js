// characterController.js

const Character = require('../models/Character');
const SubmittedCharacter = require('../models/SubmittedCharacter');

// Controller function to fetch all characters
exports.getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to fetch a character by ID
exports.getCharacterById = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }
    res.json(character);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to search characters by name
exports.searchCharactersByName = async (req, res) => {
  try {
    const searchTerm = req.query.name;
    const characters = await Character.find({ name: { $regex: new RegExp(searchTerm, 'i') } });
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

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

    // Save the new character submission
    await newCharacter.save();
    
    res.json({ message: 'Character submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
