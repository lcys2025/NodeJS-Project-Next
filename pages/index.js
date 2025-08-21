import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gym Fitness</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Stylesheets moved to _document.js */}
      </Head>
      <NavBar />
      <header>
        <h1>Gym Fitness</h1>
        <p>Make yourself stronger than your excuses. 💪</p>
      </header>
      <section className="hero-images" style={{display:'flex',gap:'20px',justifyContent:'center',padding:'0',margin:'0'}}>
        <img src="/pic/fitness1.jpg" alt="gym1" style={{width:'33.33%',height:'300px',objectFit:'cover',display:'block',margin:'0',borderRadius:'8px'}} />
        <img src="/pic/fitness2.jpg" alt="gym2" style={{width:'33.33%',height:'300px',objectFit:'cover',display:'block',margin:'0',borderRadius:'8px'}} />
        <img src="/pic/fitness3.jpg" alt="gym3" style={{width:'33.33%',height:'300px',objectFit:'cover',display:'block',margin:'0',borderRadius:'8px'}} />
      </section>
      <section className="fitness-info" style={{padding:'0',margin:'0'}}>
        <h2>Fitness Knowledge Sharing</h2>
        <div className="info-block" style={{display:'block',width:'100%',maxWidth:'100%',margin:'0 auto 30px auto',textAlign:'center',padding:'0'}}>
          <img src="/pic/info1.jpg" alt="gym-info1" style={{width:'100%',height:'auto',objectFit:'cover',display:'block',margin:'0',borderRadius:'8px'}} />
          <p style={{marginTop:'10px'}}>Exercising for 30 minutes daily can enhance cardiorespiratory function and muscle endurance.</p>
        </div>
        <div className="info-block" style={{display:'block',width:'100%',maxWidth:'100%',margin:'0 auto 30px auto',textAlign:'center',padding:'0'}}>
          <img src="/pic/info2.jpg" alt="gym-info2" style={{width:'100%',height:'auto',objectFit:'cover',display:'block',margin:'0',borderRadius:'8px'}} />
          <p style={{marginTop:'10px'}}>High-Intensity Interval Training (HIIT) is effective for burning fat and boosting metabolic rate.</p>
        </div>
      </section>
      <section className="plans">
        <h2>Fitness Program</h2>
        <ul>
          <li><strong>Basic Plan：</strong> Courses for beginners, with three sessions per week</li>
          <li><strong>Advanced Plan：</strong> Five sessions per week, including nutrition guidance</li>
          <li><strong>VIP Plan：</strong> One-on-one coach, private training space</li>
        </ul>
      </section>
      <section className="about-gym">
        <h2>Gym Fitness</h2>
        <p>We provide the most advanced equipment, a professional coaching team, and a comfortable training environment to help you achieve your health goals.</p>
        <img src="/pic/gym-intro.jpg" alt="gym-picture" />
      </section>
      <button onClick={() => window.scrollTo(0, 0)} className="top-button">Back to top ↑</button>
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
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/services">Our Services</a>
              <a href="/trainers">Our Trainers</a>
              <a href="/login">Login</a>
              <a href="/register">Register</a>
              <a href="/contact">Contact Us</a>
            </nav>
          </div>
          <div className="footer-section">
            <h4>Follow us</h4>
            <a href="#">Facebook</a><br />
            <a href="#">Instagram</a><br />
            <a href="#">YouTube</a>
          </div>
        </div>
        <p className="footer-credit">&copy; 2025 Gym Fitness | All rights reserved</p>
      </footer>
      {/* If you want to use the original JS logic, you can import or inline it here */}
      {/* <script src="/index/script.js"></script> */}
    </div>
  );
}
