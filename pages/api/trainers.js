import User from '../../models/User.model.js';
import Booking from '../../models/Booking.model.js';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!process.env.MONGODB_URI) {
    return res.status(500).json({ error: 'MONGODB_URI not defined' });
  }
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
    }
    // Get all trainers for booking page
    const trainers = await User.find({ role: 'trainer' }).select('name _id');
    res.status(200).json({ trainers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
