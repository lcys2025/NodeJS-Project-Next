import User from '../../models/User.model.js';
import Booking from '../../models/Booking.model.js';
import mongoose from 'mongoose';


async function deleteUser(userId) {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
    }
    User.findByIdAndDelete(userId)
      .then(deletedUser => {
        if (deletedUser) {
          console.log('User deleted successfully:', deletedUser);
        } else {
          console.log('User not found');
        }
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  } catch (error) {
    console.error('Error deleting user:', error);
  }
  //finally {
  //  mongoose.disconnect(); // Disconnect after operation (or manage connection pool)
  //}
}

async function updateUser(userId, newRemainingTrainerDays, newAmount) {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
    }
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId }, // Query to find the document
      {
        $set: {
          remainingTrainerDays: newRemainingTrainerDays,
          'payment.amount': newAmount,
        }
      }, // Update object using $set to modify specific fields
      { new: true } // Option to return the updated document
    );
    if (updatedUser) {
      console.log('User updated successfully:', updatedUser);
    } else {
      console.log('User not found.');
    }
  } catch (error) {
    console.error('Error updating user:', error);
  }
  //finally {
  //  mongoose.disconnect(); // Disconnect after operation (or manage connection pool)
  //}
}

async function countBookingsInThisMonth(userId, year, month) {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
    }

    const startDate = new Date(year, month - 1, 1); // Month is 0-indexed in JavaScript Date
    const endDate = new Date(year, month, 0, 23, 59, 59, 999); // Last day of the month
    console.log(startDate);
    console.log(endDate);

    const result = await Booking.aggregate([
      {
        $match: {
          userId: userId,
          bookingDate: {
            $gte: startDate,
            $lte: endDate
          }
        }
      },
      {
        $group: {
          _id: null, // Group by day of month
          count: { $sum: 1 } // Count bookings for each day
        }
      },
    ]);
    return result;
  } catch (error) {
    console.error('Error counting bookings by day:', error);
    return [];
  }
  //finally {
  //  mongoose.disconnect(); // Disconnect after operation (or manage connection pool)
  //}
}


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
    // Calculate remainingTrainerDays based on plan minus completed bookings
    // workaround as react oesnot support default function in mongoose schema
    let remainingTrainerDays = user.remainingTrainerDays;
    let amount = user.payment.amount;
    let reward = 0;
    let extraDay = 0;
    if (user.role === 'gymer') {
      const currentDate = new Date();
      const planDefaultsRemainingTrainerDays = { basic: 5, premium: 15, vip: 30 };
      const totalDays = planDefaultsRemainingTrainerDays[user.plan] || 0;
      const countBookingsInThisMonthArray = await countBookingsInThisMonth(user._id, currentDate.getFullYear(), currentDate.getMonth() + 1);
      const totalBookingsThisMonth = countBookingsInThisMonthArray.length !== 0 ? countBookingsInThisMonthArray[0].count : 0;
      reward = totalBookingsThisMonth == 3 ? 'available' : (totalBookingsThisMonth >= 4 ? 'Used' : 'not available');
      extraDay = totalBookingsThisMonth >= 3 ? 1 : 0;
      remainingTrainerDays = Math.max(totalDays - totalBookingsThisMonth + extraDay, 0);
      console.log(totalDays);
      console.log(remainingTrainerDays);
      console.log(totalBookingsThisMonth);
      console.log(currentDate.getFullYear());
      console.log(currentDate.getMonth() + 1);
      const planDefaultsAmount = { basic: 100, premium: 150, vip: 200 };
      amount = planDefaultsAmount[user.plan] || 0;
    }
    await updateUser(user._id, remainingTrainerDays, amount);

    res.status(200).json({
      user: { _id: user._id, name: user.name, email: user.email, role: user.role, plan: user.plan, remainingTrainerDays: user.remainingTrainerDays, payment: user.payment, remainingTrainerDays, amount, reward },
      bookings,
      trainers,
      calendar: null // Placeholder for calendar picker data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
