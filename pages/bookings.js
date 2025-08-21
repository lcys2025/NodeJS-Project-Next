import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const Bookings = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center py-12 px-4">
    <Head>
      <title>Bookings - Gym Fitness</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Stylesheets moved to _document.js */}
    </Head>
    <NavBar />
    <header>
      <h1>Gym Fitness</h1>
      <p>Make yourself stronger than your excuses. 💪</p>
    </header>
    <div className="pt-24 w-full">
      <h2 className="text-5xl font-extrabold mb-8 text-center">Book a Free Trial</h2>
      <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg max-w-xl w-full">
        <form className="flex flex-col gap-6">
          <input type="text" placeholder="First Name *" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
          <input type="text" placeholder="Last Name *" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
          <input type="tel" placeholder="Phone *" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
          <input type="email" placeholder="Email *" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
          <select className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required>
            <option value="">Select Purpose Here</option>
            <option value="membership">Membership</option>
            <option value="trial">Free Trial</option>
            <option value="general">General Inquiry</option>
          </select>
          <textarea placeholder="Message" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" rows={3}></textarea>
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow transition">Submit</button>
        </form>
      </div>
      <div className="mt-12 text-center text-gray-300">
        <p>Gym Town Fitness<br />88 Fitness Road, Causeway Bay, Hong Kong<br />Email: info@GymFitness.com<br />Phone: +852 1234 5678</p>
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

export default Bookings;
