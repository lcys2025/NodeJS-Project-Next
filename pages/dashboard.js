
import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
// ...existing code...

// Mock user and data for demonstration
const mockUser = {
  name: 'Alex Chan',
  role: 'gymer', // Change to 'trainer' to test trainer view
  plan: 'gold',
};
const mockData = {
  paymentAmount: 1200,
  paymentStatus: 'Paid',
  remainingTrainerDays: 5,
  bookings: [
    {
      trainerId: { name: 'Sam Wong' },
      bookingDate: new Date(),
      sessionType: 'Cardio',
      status: 'confirmed',
    },
    {
      trainerId: { name: 'Jane Lee' },
      bookingDate: new Date(Date.now() + 86400000),
      sessionType: 'Strength',
      status: 'pending',
    },
  ],
  trainers: [
    { name: 'Sam Wong', _id: '1' },
    { name: 'Jane Lee', _id: '2' },
  ],
  calendar: {
    month: 'August',
    year: 2025,
    prevMonth: 7,
    prevYear: 2025,
    nextMonth: 9,
    nextYear: 2025,
    days: Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      booked: i % 5 === 0,
      booking: i % 5 === 0 ? {
        userId: { name: 'Alex Chan' },
        sessionType: 'Cardio',
        status: 'confirmed',
        _id: 'b' + i,
      } : null,
    })),
  },
};

const Dashboard = () => {
  const user = mockUser;
  const data = mockData;

  return (
    <div>
      <Head>
  <title>Dashboard - Gym Fitness</title>
      </Head>
      <NavBar />
      <div className="dashboard-container">
        <h1>Welcome, {user.name}!</h1>
        <p><strong>Plan:</strong> {user.plan.charAt(0).toUpperCase() + user.plan.slice(1)} - ${data.paymentAmount} ({data.paymentStatus}) <span style={{ float: 'right' }}><strong>Remaining Trainer Days:</strong> {data.remainingTrainerDays}</span></p>
      </div>

      {user.role === 'gymer' && (
        <>
          <div className="dashboard-section">
            <h2>Upcoming Sessions</h2>
            {data.bookings && data.bookings.length > 0 ? (
              <div className="bookings-grid">
                {data.bookings.map((booking, idx) => (
                  <div className="booking-card" key={idx}>
                    <h3>{booking.trainerId.name}</h3>
                    <p><strong>Date:</strong> {booking.bookingDate.toDateString()}</p>
                    <p><strong>Type:</strong> {booking.sessionType}</p>
                    <p><strong>Status:</strong> <span className={`status-${booking.status}`}>{booking.status}</span></p>
                  </div>
                ))}
              </div>
            ) : (
              <p>You have no upcoming sessions. Book one now!</p>
            )}
          </div>

          <div className="dashboard-section">
            <h2>Quick Actions</h2>
            <div className="actions">
              <a href="/booking" className="btn primary">Book New Session</a>
              <a href="/bookings" className="btn secondary">View All Bookings</a>
            </div>
          </div>

          <div className="dashboard-section">
            <h2>Available Trainers</h2>
            {data.trainers && data.trainers.length > 0 ? (
              <div className="trainers-grid">
                {data.trainers.map((trainer, idx) => (
                  <div className="trainer-card" key={trainer._id}>
                    <h3>{trainer.name}</h3>
                    <a href={`/booking?trainer=${trainer._id}&trainerName=${encodeURIComponent(trainer.name)}`} className="btn small">Book Now</a>
                  </div>
                ))}
              </div>
            ) : (
              <p>No trainers available at this time.</p>
            )}
          </div>
        </>
      )}

      {user.role === 'trainer' && (
        <>
          <div className="dashboard-section">
            <div className="calendar-navigation" style={{ marginBottom: '1em', display: 'flex', alignItems: 'center' }}>
              <button className="btn small">Previous</button>
              <span style={{ margin: '0 1em', flex: 1, textAlign: 'center' }}>
                <strong>Your Schedule for {data.calendar.month} {data.calendar.year}</strong>
              </span>
              <button className="btn small">Next</button>
            </div>
            <div className="calendar">
              {data.calendar.days.map((day, idx) => (
                <div className={`calendar-day ${day.booked ? 'booked' : 'available'}`} key={idx}>
                  <div className="day-number">{day.day}</div>
                  {day.booked && (
                    <div className="booking-info">
                      <div>{day.booking.userId.name}</div>
                      <div>{day.booking.sessionType}</div>
                      <div className={`status-${day.booking.status}`}>{day.booking.status}</div>
                      <form className="status-form">
                        <select name="status">
                          <option value="pending" selected={day.booking.status === 'pending'}>Pending</option>
                          <option value="confirmed" selected={day.booking.status === 'confirmed'}>Confirmed</option>
                          <option value="completed" selected={day.booking.status === 'completed'}>Completed</option>
                          <option value="cancelled" selected={day.booking.status === 'cancelled'}>Cancelled</option>
                          <option value="no-show" selected={day.booking.status === 'no-show'}>No Show</option>
                        </select>
                      </form>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-section">
            <h2>Upcoming Sessions</h2>
            {data.bookings && data.bookings.length > 0 ? (
              <table className="bookings-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Member</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.bookings.map((booking, idx) => (
                    <tr key={idx}>
                      <td>{booking.bookingDate.toDateString()}</td>
                      <td>{booking.trainerId.name}</td>
                      <td>{booking.sessionType}</td>
                      <td className={`status-${booking.status}`}>{booking.status}</td>
                      <td>
                        <form className="status-form">
                          <select name="status">
                            <option value="pending" selected={booking.status === 'pending'}>Pending</option>
                            <option value="confirmed" selected={booking.status === 'confirmed'}>Confirmed</option>
                            <option value="completed" selected={booking.status === 'completed'}>Completed</option>
                            <option value="cancelled" selected={booking.status === 'cancelled'}>Cancelled</option>
                            <option value="no-show" selected={booking.status === 'no-show'}>No Show</option>
                          </select>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No upcoming sessions scheduled.</p>
            )}
          </div>

          <div className="dashboard-section">
            <h2>Remaining Trainer Days</h2>
            <p>You have <strong>{data.remainingTrainerDays}</strong> trainer days left.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
