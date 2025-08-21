export default function ResetPassword() {
  return (
    <div className="reset-container">
      <div className="reset-box">
        <h2>Reset Password</h2>
        <form id="resetForm">
          <input type="email" id="email" placeholder="Email" required />
          <input
            type="password"
            id="newPassword"
            placeholder="New Password"
            required
          />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
          />
          <button type="submit" id="submitButton">
            Submit
          </button>
          <button id="backButton">Back</button>
        </form>
      </div>
    </div>
  );
}
