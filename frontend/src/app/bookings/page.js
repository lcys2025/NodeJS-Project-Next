import Link from 'next/link';

export default function Bookings({ bookings }) {
  return (
    <div className="bookings-container">
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Trainer</th>
              <th>Session Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.bookingDate}</td>
                <td>{booking.trainerId.name}</td>
                <td>{booking.sessionType}</td>
                <td>{booking.status}</td>
                <td>
                  {booking.status === 'pending' && (
                    <button className="cancel-btn" data-id={booking._id}>
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="actions">
        <button id="newBookingBtn">Book New Session</button>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch bookings data from the server or database
  const bookings = []; // Replace with actual data fetching logic

  return {
    props: {
      bookings,
    },
  };
}
