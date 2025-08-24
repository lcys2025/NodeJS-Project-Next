import Booking from '../../models/Booking.model.js';
import User from '../../models/User.model.js';
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
      // Find user
      const user = await User.findById(userId);
      console.log(user);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      // Check if the Remaining Trainer Days is already 0 for this user
      if (user.remainingTrainerDays <= 0) {
        return res
          .status(400)
          .json({ error: "You have no remaining trainer days left. Please purchase more." });
      }
      // Check if the date is already booked for this trainer
      const trainerBooking = await Booking.findOne({ trainerId, bookingDate });
      if (trainerBooking) {
        return res.status(409).json({ error: 'Selected trainer is not available on this date.' });
      }
      // Check if the user has already booked this date
      const userBooking = await Booking.findOne({ userId, bookingDate });
      if (userBooking) {
        return res.status(409).json({ error: 'You have already booked a session on this date.' });
      }
      const booking = new Booking({ userId, trainerId, bookingDate, sessionType, notes, status: 'pending' });
      await booking.save();
      // Do NOT decrement remainingTrainerDays here; only decrement on booking confirmation
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
