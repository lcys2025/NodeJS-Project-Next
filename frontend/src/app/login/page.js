export default function Login() {
  return (
    <>
      <header>
        <h1>Gym Fitness</h1>
        <p>Make yourself stronger than your excuses. 💪</p>
      </header>

      <section>
        <div className="login-container">
          <div className="login-box">
            <h2>Log in to your fitness account</h2>
            <form id="loginForm">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
              <p className="forgot">
                <a href="/auth/resetPassword">Forgot password?</a>
              </p>
              <button type="submit" id="login-button">
                Submit
              </button>
              <p className="signup">
                Not a member yet? <a href="/auth/register">Register now</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <button onClick={() => window.scrollTo(0, 0)} className="top-button">
        Back to top ↑
      </button>
    </>
  );
}
