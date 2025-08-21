
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const today = new Date();
today.setHours(0, 0, 0, 0);

function formatDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

const Booking = () => {
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
      .then(data => setTrainers(data.trainers || []));
  }, []);

  useEffect(() => {
    if (selectedTrainer) {
      // TODO: Replace with real API for trainer availability
      setBookedDates([]); // No booked dates for demo
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
    // TODO: Replace with real booking API
    setStatus('Booking created successfully!');
    setTimeout(() => {
      window.location.href = '/dashboard?booking=success';
    }, 1200);
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
              {/* Calendar grid */}
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
                    style={{ cursor: isPast || isBooked ? 'not-allowed' : 'pointer', border: isSelected ? '2px solid #0070f3' : undefined }}
                    onClick={() => {
                      console.log('Clicked:', dateStr, 'isPast:', isPast, 'isBooked:', isBooked);
                      handleDateClick(day);
                    }}
                  >
                    {day.getDate()}
                    {isSelected && <span style={{ color: '#0070f3', fontWeight: 'bold' }}> ✓</span>}
                  </div>
                );
              })}
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
