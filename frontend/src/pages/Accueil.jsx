import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const heroImages = [
  '/images/hero/1.jpeg',
  '/images/hero/2.jpeg',
  '/images/hero/3.jpeg',
  '/images/hero/4.jpeg',
  '/images/hero/5.jpeg',
];

const stats = [
  { val: '13', label: 'Pays membres' },
  { val: '7', label: 'Groupes de travail' },
  { val: '12+', label: 'Thématiques' },
  { val: '2026', label: 'Année de fondation' },
];

export default function Accueil() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Background slider images */}
        {heroImages.map((img, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === currentImg ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: 0,
          }} />
        ))}

        {/* Dark overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(30,61,42,0.82) 0%, rgba(45,90,61,0.70) 100%)',
          zIndex: 1,
        }} />

        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: 400, height: 400, borderRadius: '50%', background: 'rgba(200,147,58,0.12)', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none', zIndex: 2 }} />

        <div className="container" style={{ padding: '8rem 2rem 4rem', zIndex: 3 }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ display: 'inline-block', background: 'rgba(200,147,58,0.25)', color: '#f0c97a', padding: '0.4rem 1.2rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 500, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              🌍 Région MENA · 13 pays membres
            </div>
            <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: 'white', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Alliance pour la<br />
              <span style={{ color: '#f0c97a' }}>Souveraineté</span><br />
              Alimentaire
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 580 }}>
              Un cadre collectif ouvert et inclusif qui rassemble des organisations de la société civile, des mouvements paysans et des communautés engagées pour une transformation profonde des systèmes alimentaires.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/a-propos" className="btn-primary" style={{ background: 'var(--ocre)', fontSize: '1rem', padding: '0.85rem 2rem' }}>
                Découvrir l'Alliance
              </Link>
              <Link to="/contact" style={{ color: 'white', border: '2px solid rgba(255,255,255,0.4)', padding: '0.8rem 2rem', borderRadius: '4px', fontWeight: 500, transition: 'border-color 0.2s' }}>
                Nous rejoindre
              </Link>
            </div>

            {/* Dots navigation */}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '2.5rem' }}>
              {heroImages.map((_, i) => (
                <button key={i} onClick={() => setCurrentImg(i)} style={{
                  width: i === currentImg ? 28 : 10,
                  height: 10,
                  borderRadius: 5,
                  background: i === currentImg ? '#f0c97a' : 'rgba(255,255,255,0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#faf8f3" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '4rem 0', background: 'var(--blanc)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {stats.map(s => (
              <div key={s.val}>
                <div style={{ fontSize: '2.8rem', fontFamily: 'Playfair Display', fontWeight: 700, color: 'var(--vert)', lineHeight: 1 }}>{s.val}</div>
                <div style={{ color: 'var(--gris)', marginTop: '0.4rem', fontSize: '0.9rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section style={{ padding: '5rem 0', background: 'var(--vert-pale)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: '🔭', titre: 'Vision',
                texte: "Des systèmes alimentaires justes, résilients et durables, fondés sur la souveraineté des peuples. Un monde où les communautés contrôlent leurs ressources alimentaires, dans le respect de la nature et de la justice sociale."
              },
              {
                icon: '🎯', titre: 'Mission',
                texte: "Renforcer l'action collective et la coordination entre acteurs de terrain et organisations de la société civile afin de promouvoir la souveraineté alimentaire aux niveaux local, régional et international."
              },
              {
                icon: '💡', titre: 'Approche',
                texte: "L'Alliance fonctionne comme un espace de collaboration dynamique : apprentissage mutuel, réflexion collective, mise en réseau et participation inclusive des acteurs de terrain dans toute leur diversité."
              },
            ].map(card => (
              <div key={card.titre} style={{ background: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{card.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.4rem', color: 'var(--brun)', marginBottom: '0.75rem' }}>{card.titre}</h3>
                <p style={{ color: 'var(--gris)', lineHeight: 1.8, fontSize: '0.95rem' }}>{card.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principes fondamentaux */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <h2 className="section-title">Nos principes fondamentaux</h2>
          <div className="divider" />
          <p className="section-subtitle">Au cœur de son action, l'Alliance défend un modèle de système alimentaire juste et durable.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              ['🌍', 'Respect de la terre', 'et des cycles naturels'],
              ['🌿', 'Préservation', 'de la biodiversité'],
              ['👨‍🌾', 'Rôle central', 'des paysan·nes et femmes rurales'],
              ['💧', 'Accès équitable', 'à la terre, l\'eau, les semences'],
              ['⚖️', 'Justice sociale', 'et économique'],
              ['🗳️', 'Participation', 'démocratique des communautés'],
            ].map(([icon, titre, sous]) => (
              <div key={titre} style={{ textAlign: 'center', padding: '1.5rem 1rem', borderRadius: '8px', border: '1px solid #e5e7eb', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
                <div style={{ fontWeight: 600, color: 'var(--brun)', marginBottom: '0.25rem', fontSize: '0.9rem' }}>{titre}</div>
                <div style={{ color: 'var(--gris)', fontSize: '0.85rem' }}>{sous}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Rejoindre */}
      <section style={{ background: 'linear-gradient(135deg, var(--brun), #3d2512)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.2rem', color: 'white', marginBottom: '1rem' }}>Rejoignez l'Alliance</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 500, margin: '0 auto 2rem', lineHeight: 1.8 }}>
            L'Alliance est un espace inclusif ouvert aux organisations de la société civile, mouvements paysans, chercheur·e·s et individus engagés.
          </p>
          <Link to="/contact" className="btn-primary" style={{ background: 'var(--ocre)', fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            Prendre contact
          </Link>
        </div>
      </section>
    </div>
  );
}
