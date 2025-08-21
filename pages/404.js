import React from 'react';
import NavBar from './_NavBar';

const ErrorPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center justify-center py-12 px-4">
    <NavBar />
    <div className="pt-24 w-full">
      <h1 className="text-6xl font-extrabold mb-8 text-center">404</h1>
      <h2 className="text-3xl font-bold mb-4 text-center">Page Not Found</h2>
      <p className="text-lg mb-8 text-center">Sorry, the page you are looking for does not exist.<br />Return to <a href="/" className="text-red-400 hover:text-red-600 font-semibold">Home</a></p>
    </div>
  </div>
);

export default ErrorPage;
