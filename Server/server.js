const express = require('express');
const axios = require('axios');
const app = express();

// Define base URL for the Rick and Morty API
const BASE_URL = 'https://rickandmortyapi.com/api';

// Route to fetch characters from the Rick and Morty API
app.get('/api/characters', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/character`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to fetch episodes from the Rick and Morty API
app.get('/api/episodes', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/episode`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to fetch locations from the Rick and Morty API
app.get('/api/locations', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/location`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
