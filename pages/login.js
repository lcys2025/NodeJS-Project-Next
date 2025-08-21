import React, { useRef } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const Login = () => {
  const formRef = useRef();

  function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const email = formRef.current.email.value.trim();
    const password = formRef.current.password.value.trim();
    if (!email || !password) {
      alert('請輸入 Email 和密碼！');
      return;
    }
    if (!isValidPassword(password)) {
      alert('密碼需包含至少8個字元、大小寫字母及數字！');
      return;
    }
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        alert(`歡迎回來，${email}！`);
        window.location.href = '/dashboard';
      } else {
        alert('登入失敗: ' + (data.error || '未知錯誤'));
      }
    } catch (err) {
      alert('登入失敗: ' + err.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Login - Gym Fitness</title>
      </Head>
      <NavBar />
      <div className="login-container" style={{width: '100vw', minHeight: '100vh', margin: 0, padding: 0}}>
        <div className="login-box" style={{width: '100vw', borderRadius: 0, margin: 0, boxSizing: 'border-box'}}>
          <h2>會員登入</h2>
          <form id="loginForm" ref={formRef} onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" placeholder="Email" required />
            <input type="password" name="password" id="password" placeholder="Password" required />
            <button type="submit">登入</button>
          </form>
          <div className="forgot">
            <a href="/resetPassword">忘記密碼？</a>
          </div>
        </div>
      </div>
      <style>{`
        body { background-color: #255b70; font-family: Helvetica, sans-serif; color: #fff; }
  .login-container { width: 100vw; min-height: 100vh; margin: 0; padding: 0; }
  .login-box { background-color: #000; padding: 2rem; border-radius: 0; width: 100vw; text-align: center; border: 2px solid #ffd700; margin: 0; box-sizing: border-box; }
        .login-box h2 { color: #ffd700; margin-bottom: 1rem; }
        .login-box form { display: flex; flex-direction: column; align-items: stretch; }
        .login-box input, .login-box button { width: 100%; padding: 0.7rem; margin: 0.5rem 0; border-radius: 5px; border: none; box-sizing: border-box; }
        .login-box button { background-color: #ffd700; color: #000; font-weight: bold; cursor: pointer; }
        .login-box button:hover { background-color: #ffcc00; }
        .forgot a { display: block; margin: 0.5rem 0; color: #ccc; }
      `}</style>
    </div>
  );
};

export default Login;
