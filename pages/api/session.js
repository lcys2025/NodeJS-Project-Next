// pages/api/session.js
// Simple session API for Next.js

import User from '../../models/User.model.js';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
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
    // Optionally fetch full user from DB
    const user = await User.findOne({ email: userInfo.email });
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    res.status(200).json({ user: { name: user.name, email: user.email, role: user.role, plan: user.plan } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
