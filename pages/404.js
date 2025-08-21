import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const NotFound = () => (
  <div>
    <Head>
      <title>404 - Page Not Found | Gym Fitness</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Stylesheets moved to _document.js */}
    </Head>
    <NavBar />
    <header>
      <h1>Gym Fitness</h1>
      <p>Make yourself stronger than your excuses. 💪</p>
    </header>
    <section style={{ textAlign: 'center', padding: '40px' }}>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/" style={{ color: '#0070f3' }}>Go back to Home</a>
    </section>
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

export default NotFound;
