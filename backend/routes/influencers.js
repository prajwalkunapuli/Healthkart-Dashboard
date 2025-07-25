const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', '..', 'sample_data', 'influencers.json');
let influencersData = [];

try {
  influencersData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
} catch (err) {
  console.error('Error reading influencers data:', err);
}

router.get('/', (req, res) => {
  res.json(influencersData);
});

module.exports = router;
