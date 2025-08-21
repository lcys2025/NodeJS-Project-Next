export default function Contact() {
  return (
    <>
      <header>
        <h1>Gym Fitness</h1>
        <p>Make yourself stronger than your excuses. 💪</p>
      </header>

      <section>
        <div className="contact-container">
          <div className="contact-box">
            <h2>Contact Us</h2>
            <form id="contactForm" action="/contact/" method="post">
              <input type="text" id="name" name="name" placeholder="Name" required />
              <input type="email" id="email" name="email" placeholder="Email" required />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit">Submit</button>
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
