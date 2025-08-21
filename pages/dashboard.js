
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
// ...existing code...

// ...existing code...



const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => {
        if (res.status === 401) {
          window.location.href = '/login';
          return null;
        }
        return res.json().then(json => ({ status: res.status, json }));
      })
      .then(result => {
        if (!result) return; // Already redirected to login
        const { status, json } = result;
        if (status !== 200) {
          setError(json?.error || 'Unknown error');
        } else if (json && json.user) {
          setUser(json.user);
          setData(json);
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red', padding: '2rem' }}>Error: {error}</div>;
  if (!user || !data) return null;

  return (
    <div>
      <Head>
        <title>Dashboard - Gym Fitness</title>
      </Head>
      <NavBar />
      <div className="dashboard-container">
        <h1>Welcome, {user.name}!</h1>
        <p><strong>Plan:</strong> {user.plan.charAt(0).toUpperCase() + user.plan.slice(1)} <span style={{ float: 'right' }}><strong>Remaining Trainer Days:</strong> {user.remainingTrainerDays}</span></p>
      </div>

      {user.role === 'gymer' && (
        <>
          <div className="dashboard-section">
            <h2>Upcoming Sessions</h2>
            {data.bookings && data.bookings.length > 0 ? (
              <div className="bookings-grid">
                {data.bookings.map((booking, idx) => (
                  <div className="booking-card" key={idx}>
                    <h3>{booking.trainerId.name}</h3>
                    <p><strong>Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
                    <p><strong>Type:</strong> {booking.sessionType}</p>
                    <p><strong>Status:</strong> <span className={`status-${booking.status}`}>{booking.status}</span></p>
                  </div>
                ))}
              </div>
            ) : (
              <p>You have no upcoming sessions. Book one now!</p>
            )}
          </div>

          <div className="dashboard-section">
            <h2>Quick Actions</h2>
            <div className="actions">
              <a href="/booking" className="btn primary">Book New Session</a>
              <a href="/bookings" className="btn secondary" style={{ marginLeft: '1rem' }}>View All Bookings</a>
              {(() => {
                // Calculate number of bookings in current week
                // Group bookings by week number for the current user
                function getSundayWeek(date) {
                  // Week starts on Sunday
                  const d = new Date(date);
                  const sunday = new Date(d);
                  sunday.setDate(d.getDate() - d.getDay());
                  sunday.setHours(0,0,0,0);
                  // Use year and Sunday date as key
                  return `${sunday.getFullYear()}-${String(sunday.getMonth()+1).padStart(2,'0')}-${String(sunday.getDate()).padStart(2,'0')}`;
                }
                const weekCounts = {};
                (data.bookings || []).forEach(b => {
                  const d = new Date(b.bookingDate);
                  const week = getSundayWeek(d);
                  weekCounts[week] = (weekCounts[week] || 0) + 1;
                });
                const eligible = Object.values(weekCounts).some(count => count >= 3);
                // Debug output
                console.log('All bookings:', data.bookings.map(b => b.bookingDate));
                console.log('Bookings grouped by week:', weekCounts);
                console.log('Total bookings:', data.bookings.length);
                if (eligible) {
                  return <><a href="/booking?trial=true" className="btn accent" style={{ marginLeft: '1rem' }}>Book a Free Trial</a><span style={{marginLeft:'1rem',color:'#0f0'}}>Reward unlocked ({data.bookings.length} bookings, week counts: {JSON.stringify(weekCounts)})</span></>;
                } else {
                  return <><span className="btn accent disabled" style={{ marginLeft: '1rem', opacity: 0.5, pointerEvents: 'none' }} title="Book 3+ sessions in any week to unlock free trial">Book a Free Trial</span><span style={{marginLeft:'1rem',color:'#f00'}}>Not eligible ({data.bookings.length} bookings, week counts: {JSON.stringify(weekCounts)})</span></>;
                }
                // ...existing code...
              })()}
            </div>
          </div>

          <div className="dashboard-section">
            <h2>Available Trainers</h2>
            {data.trainers && data.trainers.length > 0 ? (
              <div className="trainers-grid">
                {data.trainers.map((trainer, idx) => (
                  <div className="trainer-card" key={trainer._id}>
                    <h3>{trainer.name}</h3>
                    <a href={`/booking?trainer=${trainer._id}&trainerName=${encodeURIComponent(trainer.name)}`} className="btn small">Book Now</a>
                  </div>
                ))}
              </div>
            ) : (
              <p>No trainers available at this time.</p>
            )}
          </div>
        </>
      )}

      {user.role === 'trainer' && (
        <>
          {/* Calendar picker UI can be implemented here using data.calendar */}
          <div className="dashboard-section">
            <h2>Upcoming Sessions</h2>
            {data.bookings && data.bookings.length > 0 ? (
              <table className="bookings-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Member</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.bookings.map((booking, idx) => (
                    <tr key={idx}>
                      <td>{new Date(booking.bookingDate).toLocaleDateString()}</td>
                      <td>{booking.userId ? booking.userId.name : ''}</td>
                      <td>{booking.sessionType}</td>
                      <td className={`status-${booking.status}`}>{booking.status}</td>
                      <td>
                        <form className="status-form" onSubmit={e => e.preventDefault()}>
                          <select
                            name="status"
                            defaultValue={booking.status}
                            onChange={async e => {
                              const newStatus = e.target.value;
                              try {
                                const res = await fetch(`/api/bookingStatus`, {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({ bookingId: booking._id, status: newStatus })
                                });
                                if (res.ok) {
                                  setData(prev => {
                                    const updatedBookings = prev.bookings.map(b =>
                                      b._id === booking._id ? { ...b, status: newStatus } : b
                                    );
                                    return { ...prev, bookings: updatedBookings };
                                  });
                                }
                              } catch (err) {
                                alert('Failed to update status: ' + err.message);
                              }
                            }}
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                            <option value="no-show">No Show</option>
                          </select>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No upcoming sessions scheduled.</p>
            )}
          </div>

          <div className="dashboard-section">
            <h2>Remaining Trainer Days</h2>
            <p>You have <strong>{user.remainingTrainerDays}</strong> trainer days left.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
