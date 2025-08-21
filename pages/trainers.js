import React from 'react';
import NavBar from './_NavBar';

const Trainers = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center py-12 px-4">
    <NavBar />
    <div className="pt-24 w-full">
      <h1 className="text-5xl font-extrabold mb-8 text-center">Our Trainers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/pic/trainer1.avif" alt="Bee Cho" className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-red-600" />
          <h2 className="text-xl font-semibold mb-2">Bee Cho</h2>
          <p className="text-base">Kick-Boxing Specialist</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/pic/trainer2.avif" alt="John Doe" className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-red-600" />
          <h2 className="text-xl font-semibold mb-2">John Doe</h2>
          <p className="text-base">Weight Training Coach</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <img src="/pic/trainer3.avif" alt="Jane Smith" className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-red-600" />
          <h2 className="text-xl font-semibold mb-2">Jane Smith</h2>
          <p className="text-base">Stretch Recovery Expert</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg">"Hard Work Beats Everything"</p>
      </div>
    </div>
  </div>
);

export default Trainers;
