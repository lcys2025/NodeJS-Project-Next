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
    const { trainerId, month } = req.query;
    if (!trainerId || !month) {
      return res.status(400).json({ error: 'Missing trainerId or month' });
    }
    // month format: YYYY-MM
    const [year, monthNum] = month.split('-').map(Number);
    const start = new Date(year, monthNum - 1, 1);
    const end = new Date(year, monthNum, 0, 23, 59, 59, 999);
    const bookings = await Booking.find({ trainerId, bookingDate: { $gte: start, $lte: end } });
    const bookedDates = bookings.map(b => b.bookingDate.toISOString().slice(0, 10));
  res.status(200).json({ bookedDates });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
