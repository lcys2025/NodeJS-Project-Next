import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const Logout = () => {
  const [auth, setAuth] = React.useState(false);
  React.useEffect(() => {
    fetch('/api/session')
      .then(res => {
        if (res.status === 401) {
          window.location.href = '/login';
          return null;
        }
        setAuth(true);
        fetch('/api/logout', { method: 'POST' })
          .then(() => {
            setTimeout(() => {
              window.location.href = '/';
            }, 1200);
          });
      });
  }, []);

  if (!auth) return null;

  return (
    <div>
      <Head>
        <title>Logging out...</title>
      </Head>
      <NavBar />
      <div className="login-container">
        <div className="login-box">
          <h2>正在登出...</h2>
          <p>請稍候，您將返回首頁。</p>
        </div>
      </div>
      <style>{`
        body { background-color: #255b70; font-family: Helvetica, sans-serif; color: #fff; }
        .login-container { display: flex; justify-content: center; align-items: center; height: 100vh; }
        .login-box { background-color: #000; padding: 2rem; border-radius: 10px; width: 320px; text-align: center; border: 2px solid #ffd700; }
        .login-box h2 { color: #ffd700; margin-bottom: 1rem; }
        .login-box p { color: #fff; }
      `}</style>
    </div>
  );
};

export default Logout;
