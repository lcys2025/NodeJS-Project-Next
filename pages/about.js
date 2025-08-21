import React from 'react';
import NavBar from './_NavBar';

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center py-12 px-4">
    <NavBar />
    <div className="pt-24 w-full">
      <h1 className="text-5xl font-extrabold mb-8 text-center">About Mars Gym Town</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
        <img src="/pic/gym-intro.jpg" alt="Gym Town Facility" className="w-full md:w-96 h-72 object-cover rounded-xl shadow-lg mb-6 md:mb-0" />
        <div className="max-w-xl text-left">
          <p className="text-lg mb-4">Discover Gym Town Fitness, a luxurious Mars-themed paradise of fitness located in the heart of Central. Feel like you're on a new planet, Mars, fueled by explosive power, at our 8,000 sq. ft. facility designed for fitness enthusiasts.</p>
          <p className="text-lg mb-4">Our professional coaches have expertise in weight training, kickboxing, and stretching exercises, and we offer an elite fitness space with high-quality Italian fitness equipment for both beginners and professional bodybuilders.</p>
          <p className="text-lg">Unleash your full potential both physically and mentally at Gym Town Fitness!</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        <img src="/pic/fitness1.jpg" alt="Mars Gym" className="rounded-xl shadow-lg object-cover w-full h-72" />
        <img src="/pic/fitness2.jpg" alt="Mars Gym" className="rounded-xl shadow-lg object-cover w-full h-72" />
      </div>
    </div>
  </div>
);

export default About;
