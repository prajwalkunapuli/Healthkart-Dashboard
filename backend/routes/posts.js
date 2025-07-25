const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', '..', 'sample_data', 'posts.json');
let postsData = [];

try {
  postsData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
} catch (err) {
  console.error('Error reading posts data:', err);
}

// GET all posts
router.get('/', (req, res) => {
  res.json(postsData);
});

module.exports = router;
