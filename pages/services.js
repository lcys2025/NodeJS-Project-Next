import React from 'react';
import NavBar from './_NavBar';

const Services = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center py-12 px-4">
    <NavBar />
    <div className="pt-24 w-full">
      <h1 className="text-5xl font-extrabold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/pic/kick_boxing.avif" alt="Kick-Boxing" className="w-40 h-28 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold mb-2">Kick-Boxing</h2>
          <p className="text-base">High-energy workouts to improve endurance and coordination.</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/pic/weight_training.avif" alt="Weight Training" className="w-40 h-28 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold mb-2">Weight Training</h2>
          <p className="text-base">Build strength and muscle mass with expert guidance.</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/pic/stretch_recovery.avif" alt="Stretch Recovery" className="w-40 h-28 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold mb-2">Stretch Recovery</h2>
          <p className="text-base">Improve flexibility and reduce muscle soreness.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
