const mongoose = require('mongoose');
const payoutSchema = new mongoose.Schema({
  influencer_id: String,
  basis: String,     // e.g., 'post' or 'order'
  rate: Number,
  orders: Number,
  total_payout: Number,
});
module.exports = mongoose.model('Payout', payoutSchema);
