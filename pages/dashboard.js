import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const Dashboard = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center py-12 px-4">
    <Head>
      <title>Dashboard - Gym Fitness</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Stylesheets moved to _document.js */}
    </Head>
    <NavBar />
    <header>
      <h1>Gym Fitness</h1>
      <p>Make yourself stronger than your excuses. 💪</p>
    </header>
    <div className="pt-24 w-full">
      <h1 className="text-5xl font-extrabold mb-8 text-center">Member Dashboard</h1>
      <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-6">Welcome to Your Fitness Dashboard</h2>
        <ul className="space-y-4 text-lg">
          <li>View and manage your bookings</li>
          <li>Track your progress and achievements</li>
          <li>Access exclusive member resources</li>
          <li>Update your profile and membership details</li>
        </ul>
        <div className="mt-8 text-center">
          <a href="/bookings" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow transition">Book a Session</a>
        </div>
      </div>
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
          <a href="#">Facebook</a><br />
          <a href="#">Instagram</a><br />
          <a href="#">YouTube</a>
        </div>
      </div>
      <p className="footer-credit">&copy; 2025 Gym Fitness | All rights reserved</p>
    </footer>
  </div>
);

export default Dashboard;
