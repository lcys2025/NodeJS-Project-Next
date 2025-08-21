import React from 'react';

const NavBar = () => (
  <nav className="bg-black bg-opacity-80 py-4 px-6 flex flex-wrap justify-center items-center gap-6 fixed w-full top-0 left-0 z-50 shadow-lg">
    <a href="/" className="text-white text-lg font-bold hover:text-red-400 transition">Home</a>
    <a href="/about" className="text-white text-lg font-bold hover:text-red-400 transition">About</a>
    <a href="/services" className="text-white text-lg font-bold hover:text-red-400 transition">Services</a>
    <a href="/trainers" className="text-white text-lg font-bold hover:text-red-400 transition">Trainers</a>
    <a href="/bookings" className="text-white text-lg font-bold hover:text-red-400 transition">Bookings</a>
    <a href="/dashboard" className="text-white text-lg font-bold hover:text-red-400 transition">Dashboard</a>
    <a href="/login" className="text-white text-lg font-bold hover:text-red-400 transition">Login</a>
    <a href="/register" className="text-white text-lg font-bold hover:text-red-400 transition">Register</a>
    <a href="/contact" className="text-white text-lg font-bold hover:text-red-400 transition">Contact</a>
  </nav>
);

export default NavBar;
