import Image from 'next/image';

export default function Services() {
  return (
    <>
      <header>
        <h1>Gym Fitness</h1>
        <p>Make yourself stronger than your excuses. 💪</p>
      </header>

      <section>
        <h2>Our Services</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
            <Image src="/pic/kick_boxing.avif" alt="Service 1" width={300} height={300} />
            <h3>Kick-Boxing</h3>
            <p>Good for your heart</p>
          </div>
          <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
            <Image src="/pic/weight_training.avif" alt="Service 2" width={300} height={300} />
            <h3>Weight Training</h3>
            <p>Muscle building</p>
          </div>
          <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
            <Image src="/pic/stretch_recovery.avif" alt="Service 3" width={300} height={300} />
            <h3>Stretch Recovery</h3>
            <p>Excellent for elderly people</p>
          </div>
        </div>
      </section>

      <button onClick={() => window.scrollTo(0, 0)} className="top-button">
        Back to top ↑
      </button>
    </>
  );
}
