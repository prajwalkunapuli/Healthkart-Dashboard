const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  influencer_id: String,
  platform: String,
  date: Date,
  URL: String,
  caption: String,
  reach: Number,
  likes: Number,
  comments: Number,
});
module.exports = mongoose.model('Post', postSchema);
