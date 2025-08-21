import Booking from '../../models/Booking.model.js';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (!process.env.MONGODB_URI) {
    return res.status(500).json({ error: 'MONGODB_URI not defined' });
  }
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
    }
    if (req.method === 'POST') {
      // Create a new booking
      const { userId, trainerId, bookingDate, sessionType, notes } = req.body;
      if (!userId || !trainerId || !bookingDate || !sessionType) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      const booking = new Booking({ userId, trainerId, bookingDate, sessionType, notes, status: 'pending' });
      await booking.save();
      return res.status(201).json({ success: true, booking });
    } else if (req.method === 'GET') {
      // List all bookings (for admin/debug)
      const bookings = await Booking.find().populate('userId trainerId', 'name email');
      return res.status(200).json({ bookings });
    } else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
