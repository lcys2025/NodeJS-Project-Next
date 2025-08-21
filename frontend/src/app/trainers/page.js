import Image from 'next/image';

export default function Trainers() {
  return (
    <>
      <header>
        <h1>Gym Fitness</h1>
        <p>Make yourself stronger than your excuses. 💪</p>
      </header>

      <section>
        <h2>Our Trainers</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
            <Image src="/pic/trainer1.avif" alt="Trainer 1" width={300} height={300} />
            <h3>Bee Cho</h3>
            <p>Expert in Weight Training with over 10 years of experience.</p>
          </div>
          <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
            <Image src="/pic/trainer2.avif" alt="Trainer 2" width={300} height={300} />
            <h3>Yami Li</h3>
            <p>Kick-boxing champion and certified instructor.</p>
          </div>
          <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
            <Image src="/pic/trainer3.avif" alt="Trainer 3" width={300} height={300} />
            <h3>Elvis Lam</h3>
            <p>Stretch recovery specialist and yoga coach.</p>
          </div>
        </div>
      </section>

      <button onClick={() => window.scrollTo(0, 0)} className="top-button">
        Back to top ↑
      </button>
    </>
  );
}
