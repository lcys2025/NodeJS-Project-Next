import React from 'react';

export default function NavBar() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img src="/pic/logo-fitness.png" alt="Logo" />
      </div>
      <a href="/">Home</a>
      <a href="/about">About Us</a>
      <a href="/services">Our Services</a>
      <a href="/trainers">Our Trainers</a>
      {/* For demo, always show login/register. For real app, use auth state. */}
      <a href="/dashboard">Dashboard</a>
  <a href="/logout">Logout</a>
  <a href="/login">Login</a>
  <a href="/register">Register</a>
      <a href="/contact">Contact Us</a>
    </nav>
  );
}
