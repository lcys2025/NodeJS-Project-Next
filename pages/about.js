import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center py-12 px-4">
    <div>
      <Head>
        <title>Gym Fitness</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Stylesheets moved to _document.js */}
      </Head>
      <NavBar />
      <header>
        <h1>Gym Fitness</h1>
        <p>Make yourself stronger than your excuses. 💪</p>
      </header>
      <section>
        <h2 style={{textAlign:'center'}}>About Us</h2>
        <div style={{display:'flex',gap:'20px',flexWrap:'wrap'}}>
          <div style={{flex:1,minWidth:'250px',textAlign:'center'}}>
            <p>Gym Fitness, we believe in empowering every individual to reach their peak physical potential. Inspired by the community-driven spirit of fitness hubs like Gym Town, our state-of-the-art facility offers a range of training programs, expert guidance, and a supportive atmosphere to help you achieve your health and fitness goals.</p>
            <img src="/pic/about_us.avif" alt="About Us" />
          </div>
        </div>
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
  </div>
);

export default About;
