import { useState, useEffect, useRef } from 'react';
import { paysMembers } from '../data/content';
import { Link } from 'react-router-dom';

const paysTries = [...paysMembers].sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));

function useCounter(target, duration = 1800, startTrigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startTrigger) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [startTrigger, target, duration]);
  return count;
}

function FlagCard({ pays }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '1.25rem 0.75rem', borderRadius: '16px', background: hovered ? 'white' : 'transparent', boxShadow: hovered ? '0 8px 32px rgba(61,107,79,0.15)' : 'none', transform: hovered ? 'translateY(-4px)' : 'none', transition: 'all 0.22s ease', cursor: 'default' }}>
      {imgError ? (
        <span style={{ fontSize: '3.5rem', lineHeight: 1 }}>{pays.emoji}</span>
      ) : (
        <img src={`https://flagcdn.com/w160/${pays.code}.png`} alt={pays.nom} onError={() => setImgError(true)} style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: '10px', boxShadow: hovered ? '0 6px 20px rgba(0,0,0,0.2)' : '0 2px 10px rgba(0,0,0,0.12)', border: '2px solid white', transition: 'box-shadow 0.22s' }} />
      )}
      <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--brun)', textAlign: 'center', lineHeight: 1.3 }}>{pays.nom}</span>
    </div>
  );
}

export default function PaysMembres() {
  const [triggered, setTriggered] = useState(false);
  const heroRef = useRef(null);
  const count = useCounter(13, 1600, triggered);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ paddingTop: '80px', background: 'var(--blanc)' }}>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ position: 'relative', background: 'linear-gradient(135deg, #1a3326 0%, #2d5a3d 55%, #3d6b4f 100%)', padding: '6rem 0 5rem', color: 'white', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,147,58,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,143,110,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(200,147,58,0.25)', border: '1px solid rgba(200,147,58,0.4)', color: '#f5d08a', padding: '0.35rem 1.1rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2rem' }}>Notre réseau</div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(4rem,12vw,7rem)', lineHeight: 1, color: 'white', fontWeight: 700 }}>{count}</span>
            <span style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'rgba(255,255,255,0.7)' }}>pays</span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', marginBottom: '1rem', opacity: 0.95 }}>membres de l'Alliance</h1>
          <p style={{ opacity: 0.78, maxWidth: 520, lineHeight: 1.85, fontSize: '1rem', margin: '0 auto' }}>13 pays de la région MENA, unis pour la souveraineté alimentaire.</p>
        </div>
      </section>

      {/* Wave */}
      <div style={{ lineHeight: 0, background: '#1a3326' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--blanc)" />
        </svg>
      </div>

      {/* ── PAYS GRID ── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: 'var(--brun)', textAlign: 'center', marginBottom: '0.5rem' }}>Les pays membres</h2>
          <div style={{ width: 60, height: 3, background: 'var(--ocre)', borderRadius: 2, margin: '0.6rem auto 3rem' }} />
          <div className="flags-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1.75rem', maxWidth: 1000, margin: '0 auto' }}>
            {paysTries.map(p => <FlagCard key={p.nom} pays={p} />)}
          </div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ lineHeight: 0, background: 'var(--blanc)' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,20 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="var(--vert-pale)" />
        </svg>
      </div>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--vert-pale)', padding: '5rem 0 6rem' }}>
        <div className="container" style={{ maxWidth: 640, textAlign: 'center' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '3rem 3.5rem', boxShadow: '0 4px 32px rgba(61,107,79,0.12)', border: '1px solid rgba(61,107,79,0.1)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌍</div>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem', color: 'var(--brun)', marginBottom: '1rem' }}>Rejoindre l'Alliance</h2>
            <p style={{ color: 'var(--gris)', lineHeight: 1.85, marginBottom: '2rem', fontSize: '0.97rem' }}>L'Alliance est ouverte à toute organisation engagée pour la souveraineté alimentaire dans la région MENA. Travaillons ensemble, en arabe, en français et en anglais.</p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem', borderRadius: '8px' }}>Prendre contact</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
