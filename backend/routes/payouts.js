const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', '..', 'sample_data', 'payouts.json');
let payoutsData = [];

try {
  payoutsData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
} catch (err) {
  console.error('Error reading payouts data:', err);
}

// GET all payouts
router.get('/', (req, res) => {
  res.json(payoutsData);
});

module.exports = router;
