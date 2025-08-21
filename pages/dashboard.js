import React from 'react';
import NavBar from './_NavBar';

const Dashboard = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center py-12 px-4">
    <NavBar />
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
  </div>
);

export default Dashboard;
