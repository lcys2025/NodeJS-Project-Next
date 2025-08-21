import React, { useRef } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const ResetPassword = () => {
  const formRef = useRef();

  function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const email = formRef.current.email.value.trim();
    const newPassword = formRef.current.newPassword.value.trim();
    const confirmPassword = formRef.current.confirmPassword.value.trim();
    if (!isValidPassword(newPassword)) {
      alert('密碼需包含大、小寫英文字母、數字，並至少八個字元！');
      formRef.current.newPassword.value = '';
      formRef.current.confirmPassword.value = '';
      formRef.current.newPassword.focus();
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('兩次輸入的密碼不一致！');
      formRef.current.newPassword.value = '';
      formRef.current.confirmPassword.value = '';
      return;
    }
    alert('密碼重設成功！你將返回登入頁面。');
    setTimeout(() => {
      window.location.href = '/login';
    }, 1500);
  }

  function returnToLogin() {
    window.location.href = '/login';
  }

  return (
    <div>
      <Head>
        <title>Reset Password - Gym Fitness</title>
      </Head>
      <NavBar />
      <div className="reset-container">
        <div className="reset-box">
          <h2>重設密碼</h2>
          <form id="resetForm" ref={formRef} onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" placeholder="Email" required />
            <input type="password" name="newPassword" id="newPassword" placeholder="New Password" required />
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required />
            <button type="submit">重設密碼</button>
          </form>
          <button id="backButton" onClick={returnToLogin}>返回登入</button>
        </div>
      </div>
      <style>{`
        body { background-color: #255b70; font-family: Helvetica, sans-serif; color: #fff; }
        .reset-container { display: flex; justify-content: center; align-items: center; height: 100vh; }
        .reset-box { background-color: #000; padding: 2rem; border-radius: 10px; width: 320px; text-align: center; border: 2px solid #ffd700; }
        .reset-box h2 { color: #ffd700; margin-bottom: 1rem; }
        .reset-box form { display: flex; flex-direction: column; align-items: stretch; }
        .reset-box input, .reset-box button { width: 100%; padding: 0.7rem; margin: 0.5rem 0; border-radius: 5px; border: none; box-sizing: border-box; }
        .reset-box button { background-color: #ffd700; color: #000; font-weight: bold; cursor: pointer; }
        .reset-box button:hover { background-color: #ffcc00; }
        #backButton { background-color: #6c757d; color: #fff; }
      `}</style>
    </div>
  );
};

export default ResetPassword;
