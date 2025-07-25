const mongoose = require('mongoose');
const influencerSchema = new mongoose.Schema({
  ID: String,
  name: String,
  category: String,
  gender: String,
  followerCount: Number,
  platform: String,
});
module.exports = mongoose.model('Influencer', influencerSchema);
