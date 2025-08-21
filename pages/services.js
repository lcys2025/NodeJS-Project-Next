import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const Services = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col">
    <Head>
      <title>Services - Gym Fitness</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Stylesheets moved to _document.js */}
    </Head>
    <NavBar />
    <header className="py-12 px-4 text-center">
      <h1 className="text-5xl font-extrabold mb-4">Gym Fitness</h1>
      <p className="text-xl mb-8">Make yourself stronger than your excuses. 💪</p>
    </header>
    <section className="py-12 px-4">
      <h2 className="text-4xl font-extrabold mb-8 text-center">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center" style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
          <img src="/pic/kick_boxing.avif" alt="Kick-Boxing" className="w-40 h-28 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Kick-Boxing</h3>
          <p className="text-base">Good for your heart</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center" style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
          <img src="/pic/weight_training.avif" alt="Weight Training" className="w-40 h-28 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Weight Training</h3>
          <p className="text-base">Muscle building</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center" style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
          <img src="/pic/stretch_recovery.avif" alt="Stretch Recovery" className="w-40 h-28 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Stretch Recovery</h3>
          <p className="text-base">Excellent for elderly people</p>
        </div>
      </div>
    </section>
    <button onClick={() => window.scrollTo(0, 0)} className="top-button">Back to top ↑</button>
    <footer className="py-12 px-4">
      <div className="footer-container flex flex-col md:flex-row justify-between">
        <div className="footer-section mb-8 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-base">Email: info@GymFitness.com</p>
          <p className="text-base">Phone: +852 1234 5678</p>
          <p className="text-base">Address: 88 Fitness Road, Causeway Bay, Hong Kong</p>
        </div>
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-2">Quick navigation</h4>
          <nav className="flex flex-col gap-2">
            <a href="/" className="text-base">Home</a>
            <a href="/about" className="text-base">About Us</a>
            <a href="/services" className="text-base">Our Services</a>
            <a href="/trainers" className="text-base">Our Trainers</a>
            <a href="/login" className="text-base">Login</a>
            <a href="/register" className="text-base">Register</a>
            <a href="/contact" className="text-base">Contact Us</a>
          </nav>
        </div>
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-2">Follow us</h4>
          <a href="#" className="text-base">Facebook</a><br />
          <a href="#" className="text-base">Instagram</a><br />
          <a href="#" className="text-base">YouTube</a>
        </div>
      </div>
      <p className="footer-credit text-center text-base mt-4">&copy; 2025 Gym Fitness | All rights reserved</p>
    </footer>
  </div>
);

export default Services;
