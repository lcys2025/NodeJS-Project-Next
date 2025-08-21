import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const Trainers = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center py-12 px-4">
    <Head>
      <title>Trainers - Gym Fitness</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Stylesheets moved to _document.js */}
    </Head>
    <NavBar />
    <header>
      <h1>Gym Fitness</h1>
      <p>Make yourself stronger than your excuses. 💪</p>
    </header>
    <div className="pt-24 w-full">
      <h2 className="text-5xl font-extrabold mb-8 text-center">Our Trainers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/pic/trainer1.avif" alt="Bee Cho" className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-red-600" />
          <h3 className="text-xl font-semibold mb-2">Bee Cho</h3>
          <p className="text-base">Kick-Boxing Specialist</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/pic/trainer2.avif" alt="John Doe" className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-red-600" />
          <h3 className="text-xl font-semibold mb-2">John Doe</h3>
          <p className="text-base">Weight Training Coach</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/pic/trainer3.avif" alt="Jane Smith" className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-red-600" />
          <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
          <p className="text-base">Stretch Recovery Expert</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg">"Hard Work Beats Everything"</p>
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

export default Trainers;
