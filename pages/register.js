import React, { useRef } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const Register = () => {
  const formRef = useRef();

  function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const email = formRef.current.email.value.trim();
    const password = formRef.current.password.value.trim();
    const confirmPassword = formRef.current.confirmPassword.value.trim();
    if (!email || !password || !confirmPassword) {
      alert('請輸入 Email 和密碼！');
      return;
    }
    if (!isValidPassword(password)) {
      alert('密碼需包含至少8個字元、大小寫字母及數字！');
      return;
    }
    if (password !== confirmPassword) {
      alert('兩次輸入的密碼不一致！');
      return;
    }
    // Add plan and role (default values)
    const plan = 'basic';
    const role = 'gymer';
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: email.split('@')[0], email, password, plan, role })
      });
      const data = await res.json();
      if (res.ok) {
        alert('註冊成功，歡迎加入！');
        window.location.href = '/login';
      } else {
        alert('註冊失敗: ' + (data.error || '未知錯誤'));
      }
    } catch (err) {
      alert('註冊失敗: ' + err.message);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white flex flex-col items-center py-12 px-4">
      <Head>
        <title>Register - Gym Fitness</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Stylesheets moved to _document.js */}
      </Head>
      <NavBar />
      <header>
        <h1>Gym Fitness</h1>
        <p>Make yourself stronger than your excuses. 💪</p>
      </header>
      <div className="pt-24 w-full">
        <h1 className="text-5xl font-extrabold mb-8 text-center">Membership Registration</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl mb-12">
          <img src="/pic/fitness3.jpg" alt="Membership" className="rounded-xl shadow-lg object-cover w-full h-64" />
          <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg flex flex-col gap-6">
            <form id="registerForm" ref={formRef} onSubmit={handleSubmit}>
              <input type="email" name="email" id="email" placeholder="Email" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
              <input type="password" name="password" id="password" placeholder="Password" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
              <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="rounded px-4 py-3 bg-gray-900 text-white border border-red-600" required />
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow transition">Register</button>
            </form>
            <p className="mt-6 text-gray-300">Already have an account? <a href="/login" className="text-red-400 hover:text-red-600 font-semibold">Login</a></p>
          </div>
        </div>
        <button onClick={() => window.scrollTo(0, 0)} className="top-button">Back to top ↑</button>
      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@GymFitness.com</p>
            <p>Phone: +852 1234 5678</p>
            <p>Address: 88 Fitness Road, Causeway Bay, Hong Kong</p>
          </div>
          <div className="footer-section">
            <h4>Quick navigation</h4>
            <nav>
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/services">Our Services</a>
              <a href="/trainers">Our Trainers</a>
              <a href="/login">Login</a>
              <a href="/register">Register</a>
              {/* Add logout link if needed, e.g., <a href="/logout">Logout</a> */}
              <a href="/contact">Contact Us</a>
            </nav>
          </div>
          <div className="footer-section">
            <h4>Follow us</h4>
            <a href="#">Facebook</a><br />
            <a href="#">Instagram</a><br />
            <a href="#">YouTube</a>
          </div>
        </div>
        <p className="footer-credit">&copy; 2025 Gym Fitness | All rights reserved</p>
      </footer>
    </div>
  );
};

export default Register;
