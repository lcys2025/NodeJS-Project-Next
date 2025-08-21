import React from 'react';
import NavBar from './_NavBar';

const ResetPassword = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center py-12 px-4">
    <NavBar />
    <div className="pt-24 w-full">
      <h1 className="text-5xl font-extrabold mb-8 text-center">Reset Password</h1>
      <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg max-w-md w-full">
        <form className="flex flex-col gap-6">
          <input type="email" placeholder="Email *" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow transition">Send Reset Link</button>
        </form>
      </div>
      <div className="mt-12 text-center text-gray-300">
        <p>Enter your email to receive a password reset link.</p>
      </div>
    </div>
  </div>
);

export default ResetPassword;
