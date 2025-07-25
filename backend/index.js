const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose'); // 1. UNCOMMENT this line to use Mongoose

const influencerRoutes = require('./routes/influencers');
const postRoutes = require('./routes/posts');
const trackingRoutes = require('./routes/tracking');
const payoutRoutes = require('./routes/payouts');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// 2. UNCOMMENT the block below to connect to MongoDB
/*
mongoose.connect('mongodb://localhost:27017/healthkart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));
*/

app.use('/api/influencers', influencerRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/tracking', trackingRoutes);
app.use('/api/payouts', payoutRoutes);

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
