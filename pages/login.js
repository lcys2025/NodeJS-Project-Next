import React from 'react';
import NavBar from './_NavBar';

const Membership = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center py-12 px-4">
    <NavBar />
    <div className="pt-24 w-full">
      <h1 className="text-5xl font-extrabold mb-8 text-center">Membership Login</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl mb-12">
        <img src="/pic/fitness0.jpg" alt="Membership" className="rounded-xl shadow-lg object-cover w-full h-64" />
        <form className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg flex flex-col gap-6">
          <input type="email" placeholder="Email" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
          <input type="password" placeholder="Password" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow transition">Login</button>
        </form>
      </div>
      <p className="mt-6 text-gray-300">Don't have an account? <a href="/register" className="text-red-400 hover:text-red-600 font-semibold">Register</a></p>
    </div>
  </div>
);

export default Membership;
