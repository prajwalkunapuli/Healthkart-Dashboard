const mongoose = require('mongoose');
const trackingSchema = new mongoose.Schema({
  source: String,
  campaign: String,
  influencer_id: String,
  user_id: String,
  product: String,
  date: Date,
  orders: Number,
  revenue: Number,
}, { collection: 'tracking_data' });
module.exports = mongoose.model('TrackingData', trackingSchema);
