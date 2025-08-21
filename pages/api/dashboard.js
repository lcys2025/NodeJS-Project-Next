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
    const session = req.cookies.session;
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    let userInfo;
    try {
      userInfo = JSON.parse(Buffer.from(session, 'base64').toString());
    } catch {
      return res.status(401).json({ error: 'Invalid session' });
    }
    const user = await User.findOne({ email: userInfo.email });
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    // Fetch bookings for gymer or trainer
    let bookings = [];
    if (user.role === 'gymer') {
      bookings = await Booking.find({ userId: user._id }).populate('trainerId', 'name');
    } else if (user.role === 'trainer') {
      bookings = await Booking.find({ trainerId: user._id }).populate('userId', 'name');
    }
    // Fetch trainers list for gymer
    let trainers = [];
    if (user.role === 'gymer') {
      trainers = await User.find({ role: 'trainer' }).select('name _id');
    }
    // TODO: Add calendar data logic here
    res.status(200).json({
      user: { name: user.name, email: user.email, role: user.role, plan: user.plan, remainingTrainerDays: user.remainingTrainerDays },
      bookings,
      trainers,
      calendar: null // Placeholder for calendar picker data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
