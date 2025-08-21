
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const today = new Date();
today.setHours(0, 0, 0, 0);

function formatDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

const Booking = () => {
  const router = useRouter();
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [sessionType, setSessionType] = useState('personal');
  const [notes, setNotes] = useState('');
  const [calendarDays, setCalendarDays] = useState([]);
  const [bookedDates, setBookedDates] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('/api/trainers')
      .then(res => res.json())
      .then(data => {
        setTrainers(data.trainers || []);
        // If ?trainer= is present in query, preset selectedTrainer
        const trainerId = router.query.trainer;
        if (trainerId && data.trainers.some(t => t._id === trainerId)) {
          setSelectedTrainer(trainerId);
        }
      });
  }, [router.query.trainer]);

  useEffect(() => {
    if (selectedTrainer) {
      // Fetch booked dates for selected trainer and month
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const monthStr = `${year}-${month}`;
      fetch(`/api/bookingAvailability?trainerId=${selectedTrainer}&month=${monthStr}`)
        .then(res => res.json())
        .then(data => setBookedDates(data.bookedDates || []));
    } else {
      setBookedDates([]);
    }
  }, [selectedTrainer, currentDate]);

  useEffect(() => {
    // Generate calendar days for current month
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(year, month, i);
      days.push(dayDate);
    }
    setCalendarDays(days);
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
  };
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  const handleDateClick = (date) => {
    if (date < today) return;
    if (bookedDates.includes(formatDate(date))) return;
    setSelectedDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTrainer) {
      setStatus('Please select a trainer');
      return;
    }
    if (!selectedDate) {
      setStatus('Please select a date');
      return;
    }
    setStatus('Booking...');
    try {
      // Get userId from session cookie via dashboard API
      const userRes = await fetch('/api/dashboard');
      const userData = await userRes.json();
      if (!userData.user || !userData.user._id) {
        setStatus('User not found. Please login again.');
        return;
      }
      const bookingPayload = {
        userId: userData.user._id,
        trainerId: selectedTrainer,
        bookingDate: formatDate(selectedDate),
        sessionType,
        notes
      };
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingPayload)
      });
      const result = await res.json();
      if (res.status === 201 && result.success) {
        setStatus('Booking created successfully!');
        setTimeout(() => {
          window.location.href = '/dashboard?booking=success';
        }, 1200);
      } else {
        setStatus(result.error || 'Booking failed');
      }
    } catch (err) {
      setStatus('Booking failed: ' + err.message);
    }
  };

  return (
    <div>
      <Head>
        <title>Booking - Gym Fitness</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavBar />
      <div className="booking-container" style={{ maxWidth: 600, margin: '2rem auto', background: '#222', borderRadius: 12, padding: '2rem', color: '#fff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Book a Training Session</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="trainerSelect">Trainer</label>
            <select id="trainerSelect" value={selectedTrainer} onChange={e => setSelectedTrainer(e.target.value)} required>
              <option value="">Select a trainer</option>
              {trainers.map(trainer => (
                <option key={trainer._id} value={trainer._id}>{trainer.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Selected Date</label>
            <div className="selected-date-display">{selectedDate ? formatDate(selectedDate) : 'No date selected'}</div>
          </div>

          <div className="form-group full-width">
            <label>Select Date</label>
            <div className="month-navigation">
              <button type="button" onClick={handlePrevMonth}>← Previous</button>
              <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
              <button type="button" onClick={handleNextMonth}>Next →</button>
            </div>
            <div className="calendar">
              {/* Weekday headers and calendar grid in one parent */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                {/* Weekday headers: always first row */}
                {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(day => (
                  <div key={day} style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '0.5rem' }}>{day}</div>
                ))}
                {/* Add empty cells for days before the first day of month */}
                {(() => {
                  const firstDayOfWeek = calendarDays[0].getDay(); // 0=Sun, 1=Mon...
                  // We want Monday as first column, so shift Sunday (0) to last
                  const offset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
                  return Array(offset).fill(null).map((_, i) => <div key={'empty-'+i} />);
                })()}
                {calendarDays.map((day, idx) => {
                  const dateStr = formatDate(day);
                  const isPast = day < today;
                  const isBooked = bookedDates.includes(dateStr);
                  const isSelected = selectedDate && formatDate(selectedDate) === dateStr;
                  return (
                    <div
                      key={idx}
                      className={`calendar-day${isPast ? ' past' : isBooked ? ' booked' : ' available'}${isSelected ? ' selected' : ''}`}
                      title={`Date: ${dateStr}\n${isPast ? 'Past date' : isBooked ? 'Already booked' : 'Available'}${isSelected ? '\nSelected' : ''}`}
                      style={{
                        cursor: isPast || isBooked ? 'not-allowed' : 'pointer',
                        border: isSelected ? '2px solid #0070f3' : undefined,
                        background: isBooked ? '#b91c1c' : undefined,
                        color: isBooked ? '#fff' : undefined,
                        textAlign: 'center',
                        minHeight: '2.5em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onClick={() => {
                        if (isPast || isBooked) return;
                        handleDateClick(day);
                      }}
                    >
                      {day.getDate()}
                      {isBooked && <span style={{ color: '#fff', fontWeight: 'bold' }}> ✗</span>}
                      {isSelected && <span style={{ color: '#0070f3', fontWeight: 'bold' }}> ✓</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="sessionType">Session Type</label>
            <select id="sessionType" value={sessionType} onChange={e => setSessionType(e.target.value)} required>
              <option value="personal">Personal Training</option>
              <option value="group">Group Session</option>
              <option value="couple">Couple Training</option>
              <option value="rehabilitation">Rehabilitation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="notes">Additional Notes</label>
            <textarea id="notes" rows={3} value={notes} onChange={e => setNotes(e.target.value)} />
          </div>

          <button type="submit" style={{ marginTop: '1rem', padding: '0.8rem 2rem', fontWeight: 'bold', background: '#ffd700', color: '#000', borderRadius: 6 }}>Book Session</button>
          <div style={{ marginTop: '1rem', color: '#ffd700' }}>{status}</div>
        </form>
      </div>
      <button onClick={() => window.scrollTo(0, 0)} className="top-button">Back to top ↑</button>
      {/* ...existing code for footer... */}
    </div>
  );
};

export default Booking;
