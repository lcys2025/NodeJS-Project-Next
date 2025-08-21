import User from '../../models/User.model.js';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!process.env.MONGODB_URI) {
    return res.status(500).json({ error: 'MONGODB_URI not defined' });
  }
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
    }
    const { name, email, password, plan, role } = req.body;
    if (!name || !email || !password || !plan) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'Email already registered' });
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed, plan, role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully', user: { name, email, plan, role } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
