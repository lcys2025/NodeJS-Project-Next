import React from 'react';
import NavBar from './_NavBar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col">
      <NavBar />
      <div className="pt-24">
        <header className="py-10 px-4 text-center">
          <img src="/pic/logo-fitness.png" alt="Gym Fitness Logo" className="mx-auto w-28 h-28 mb-6 rounded-full shadow-lg object-cover" />
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">Mars Gym Town Fitness</h1>
          <p className="text-xl mb-6">A luxurious Mars-themed paradise for fitness enthusiasts in Central. Unleash your full potential both physically and mentally!</p>
          <a href="/register" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow transition">Book A Free Trial Now</a>
        </header>

        <main className="flex-1 container mx-auto px-4">
          <section className="my-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center">
                <img src="/pic/kick_boxing.avif" alt="Kick-Boxing" className="w-40 h-28 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Kick-Boxing</h3>
                <p className="text-base">High-energy workouts to improve endurance and coordination.</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center">
                <img src="/pic/weight_training.avif" alt="Weight Training" className="w-40 h-28 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Weight Training</h3>
                <p className="text-base">Build strength and muscle mass with expert guidance.</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 shadow-lg flex flex-col items-center">
                <img src="/pic/stretch_recovery.avif" alt="Stretch Recovery" className="w-40 h-28 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Stretch Recovery</h3>
                <p className="text-base">Improve flexibility and reduce muscle soreness.</p>
              </div>
            </div>
          </section>

          <section className="my-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Trainers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
          </section>

          <section className="my-16 text-center">
            <h2 className="text-3xl font-bold mb-8">About Gym Town</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <img src="/pic/gym-intro.jpg" alt="Gym Town Facility" className="w-full md:w-96 h-72 object-cover rounded-xl shadow-lg mb-6 md:mb-0" />
              <div className="max-w-xl text-left">
                <p className="text-lg mb-4">Discover Gym Town Fitness, a luxurious Mars-themed paradise of fitness located in the heart of Central. Feel like you're on a new planet, Mars, fueled by explosive power, at our 8,000 sq. ft. facility designed for fitness enthusiasts.</p>
                <p className="text-lg mb-4">Our professional coaches have expertise in weight training, kickboxing, and stretching exercises, and we offer an elite fitness space with high-quality Italian fitness equipment for both beginners and professional bodybuilders.</p>
                <p className="text-lg">Unleash your full potential both physically and mentally at Gym Town Fitness!</p>
              </div>
            </div>
          </section>

          <section className="my-16 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg max-w-xl mx-auto">
              <form className="flex flex-col gap-6">
                <input type="text" placeholder="First Name *" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
                <input type="text" placeholder="Last Name *" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
                <input type="tel" placeholder="Phone *" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
                <input type="email" placeholder="Email *" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
                <select className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required>
                  <option value="">Select Purpose Here</option>
                  <option value="membership">Membership</option>
                  <option value="trial">Free Trial</option>
                  <option value="general">General Inquiry</option>
                </select>
                <textarea placeholder="Message" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" rows={3}></textarea>
                <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow transition">Submit</button>
              </form>
            </div>
          </section>
        </main>

        <footer className="bg-black py-8 mt-16 text-center text-gray-400">
          <div className="container mx-auto">
            <p>&copy; 2025 Mars Gym Town Fitness | All rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
