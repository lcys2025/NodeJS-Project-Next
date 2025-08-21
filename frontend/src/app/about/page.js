import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <header>
        <h1>Gym Fitness</h1>
        <p>Make yourself stronger than your excuses. 💪</p>
      </header>

      <section>
        <h2>About Us</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
            <p>
              At Gym Fitness, we believe in empowering every individual to reach their peak physical potential.
              Inspired by the community-driven spirit of fitness hubs like Gym Town, our state-of-the-art facility
              offers a range of training programs, expert guidance, and a supportive atmosphere to help you achieve
              your health and fitness goals.
            </p>
            <Image src="/pic/about_us.avif" alt="About Us" width={500} height={300} />
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@GymFitness.com</p>
            <p>Phone: +852 1234 5678</p>
            <p>Address: 88 Fitness Road, Causeway Bay, Hong Kong</p>
          </div>

          <div className="footer-section">
            <h4>Quick navigation</h4>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Our Services</Link>
              <Link href="/trainers">Our Trainers</Link>
              <Link href="/auth/login">Membership</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Follow us</h4>
            <a href="#">Facebook</a>
            <br />
            <a href="#">Instagram</a>
            <br />
            <a href="#">YouTube</a>
          </div>
        </div>
        <p className="footer-credit">&copy; 2025 Gym Fitness | All rights reserved</p>
      </footer>
    </>
  );
}
