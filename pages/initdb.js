import React, { useState } from 'react';

export default function InitDBPage() {
  const [status, setStatus] = useState('');
  const handleInit = async () => {
    setStatus('Initializing...');
    try {
      const res = await fetch('/api/initdb', { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        setStatus('Success: ' + data.message);
      } else {
        setStatus('Error: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      setStatus('Error: ' + err.message);
    }
  };
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Database Initialization</h1>
      <button onClick={handleInit} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>Initialize DB</button>
      <p>{status}</p>
    </div>
  );
}
