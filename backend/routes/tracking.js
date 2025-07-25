const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
// const TrackingData = require('../models/trackingData'); // 1. UNCOMMENT this to use the Mongoose model

const dataPath = path.join(__dirname, '..', '..', 'sample_data', 'tracking_data.json');
let trackingData = [];

try {
  trackingData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
} catch (err) {
  console.error('Error reading tracking data:', err);
}

// Get all tracking data
router.get('/', async (req, res) => {
  try {
    // --- The data is now cached, just send it ---
    res.json(trackingData);

    // --- To use MongoDB, UNCOMMENT the 2 lines below ---
    // const trackingData = await TrackingData.find();
    // res.json(trackingData);

  } catch (err) {
    res.status(500).json({ error: err.message });
  } 
});

module.exports = router;
