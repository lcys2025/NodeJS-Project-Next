export default function Register() {
  return (
    <>
      <header>
        <h1>Gym Fitness</h1>
        <p>Make yourself stronger than your excuses. 💪</p>
      </header>

      <section>
        <h2>Join The Fitness Membership</h2>
        <form className="member-form" id="registerForm">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
          />

          <label htmlFor="plan">Different Plan Options:</label>
          <select id="plan" name="plan">
            <option value="basic">Basic Plan - $100/month with 5 trainer days</option>
            <option value="premium">Premium Plan - $150/month with 10 trainer days</option>
            <option value="vip">VIP Plan - $200/month with 20 trainer days</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </section>

      <button onClick={() => window.scrollTo(0, 0)} className="top-button">
        Back to top ↑
      </button>
    </>
  );
}
