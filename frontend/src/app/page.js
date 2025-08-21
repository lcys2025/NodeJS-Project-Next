import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <h1>Gym Fitness</h1>
        <p>Make yourself stronger than your excuses. 💪</p>
      </header>

      <section className="hero-images">
        <Image src="/pic/fitness1.jpg" alt="gym1" width={500} height={300} />
        <Image src="/pic/fitness2.jpg" alt="gym2" width={500} height={300} />
        <Image src="/pic/fitness3.jpg" alt="gym3" width={500} height={300} />
      </section>

      <section className="fitness-info">
        <h2>Fitness Knowledge Sharing</h2>
        <div className="info-block">
          <Image src="/pic/info1.jpg" alt="gym-info1" width={300} height={200} />
          <p>
            Exercising for 30 minutes daily can enhance cardiorespiratory function
            and muscle endurance.
          </p>
        </div>
        <div className="info-block">
          <Image src="/pic/info2.jpg" alt="gym-info2" width={300} height={200} />
          <p>
            High-Intensity Interval Training (HIIT) is effective for burning fat
            and boosting metabolic rate.
          </p>
        </div>
      </section>

      <section className="plans">
        <h2>Fitness Program</h2>
        <ul>
          <li>
            <strong>Basic Plan：</strong> Courses for beginners, with three sessions
            per week
          </li>
          <li>
            <strong>Advanced Plan：</strong> Five sessions per week, including
            nutrition guidance
          </li>
          <li>
            <strong>VIP Plan：</strong> One-on-one coach, private training space
          </li>
        </ul>
      </section>

      <section className="about-gym">
        <h2>Gym Fitness</h2>
        <p>
          We provide the most advanced equipment, a professional coaching team,
          and a comfortable training environment to help you achieve your health
          goals.
        </p>
        <Image
          src="/pic/gym-intro.jpg"
          alt="gym-picture"
          width={500}
          height={300}
        />
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
        <p className="footer-credit">
          &copy; 2025 Gym Fitness | All rights reserved
        </p>
      </footer>
    </>
  );
}
