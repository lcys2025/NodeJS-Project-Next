import User from '../../models/User.model.js';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { serialize } from 'cookie';

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
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    // Set a simple session cookie (for demo)
    const session = Buffer.from(JSON.stringify({ email: user.email, name: user.name, role: user.role })).toString('base64');
    res.setHeader('Set-Cookie', serialize('session', session, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 }));
    res.status(200).json({ message: 'Login successful', user: { name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
