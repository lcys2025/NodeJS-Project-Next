import React from 'react';
import NavBar from './_NavBar';

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center py-12 px-4">
    <NavBar />
    <div className="pt-24 w-full">
      <h1 className="text-5xl font-extrabold mb-8 text-center">Contact Us</h1>
      <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg max-w-xl w-full">
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
      <div className="mt-12 text-center text-gray-300">
        <p>Gym Town Fitness<br />88 Fitness Road, Causeway Bay, Hong Kong<br />Email: info@GymFitness.com<br />Phone: +852 1234 5678</p>
      </div>
    </div>
  </div>
);

export default Contact;
