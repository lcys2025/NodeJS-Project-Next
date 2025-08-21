import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/booking')
      .then(res => res.json())
      .then(data => {
        setBookings(data.bookings || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center py-12 px-4">
        <Head>
          <title>Bookings - Gym Fitness</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <NavBar />
        <header>
          <h1>All Booked Sessions</h1>
          <p>View all your booked sessions below.</p>
        </header>
        <div className="pt-12 w-full max-w-3xl mx-auto">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div style={{ color: 'red' }}>Error: {error}</div>
          ) : bookings.length === 0 ? (
            <div>No bookings found.</div>
          ) : (
            <table className="w-full text-left border-collapse mt-6">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Trainer</th>
                  <th>User</th>
                  <th>Session Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, idx) => (
                  <tr key={idx}>
                    <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                    <td>{booking.trainerId ? booking.trainerId.name : ''}</td>
                    <td>{booking.userId ? booking.userId.name : ''}</td>
                    <td>{booking.sessionType}</td>
                    <td>{booking.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <button onClick={() => window.scrollTo(0, 0)} className="top-button">Back to top ↑</button>
        <footer>
          <div className="footer-container">
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>Email: info@GymFitness.com</p>
              <p>Phone: +852 1234 5678</p>
              <p>Address: 88 Fitness Road, Causeway Bay, Hong Kong</p>
            </div>
            <div className="footer-section">
              <h4>Quick navigation</h4>
              <nav>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/services">Our Services</a>
                <a href="/trainers">Our Trainers</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/contact">Contact Us</a>
              </nav>
            </div>
            <div className="footer-section">
              <h4>Follow us</h4>
              <div>
                <a href="#">Facebook</a><br />
                <a href="#">Instagram</a><br />
                <a href="#">YouTube</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
// ...existing code...
export default Bookings;
