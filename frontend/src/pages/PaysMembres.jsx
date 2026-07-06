import { paysMembers } from '../data/content';
import { Link } from 'react-router-dom';

const paysTries = [...paysMembers].sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));

export default function PaysMembres() {
  return (
    <div style={{ paddingTop: '80px', background: '#f9f7f4' }}>

      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #2d5a3d, #1e3d2a)', padding: '4rem 0', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.78rem', marginBottom: '1rem' }}>
            Notre réseau
          </div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: '0.75rem' }}>
            Pays membres
          </h1>
          <p style={{ opacity: 0.8, maxWidth: 560, lineHeight: 1.8, fontSize: '0.95rem' }}>
            13 pays de la région MENA, unis pour la souveraineté alimentaire.
          </p>
        </div>
      </section>

      {/* Drapeaux */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          {/* Ligne 1 — 7 pays */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {paysTries.slice(0, 7).map(p => (
              <div key={p.nom} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <img
                  src={`https://flagcdn.com/w160/${p.code}.png`}
                  alt={p.nom}
                  style={{
                    width: 120,
                    height: 80,
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    border: '2px solid #fff',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.22)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)'; }}
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                />
                <span style={{ display: 'none', fontSize: '3rem' }}>{p.emoji}</span>
                <span style={{ fontWeight: 600, fontSize: '0.85rem', color: '#2d2016', textAlign: 'center' }}>{p.nom}</span>
              </div>
            ))}
          </div>

          {/* Ligne 2 — 6 pays */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {paysTries.slice(7, 13).map(p => (
              <div key={p.nom} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <img
                  src={`https://flagcdn.com/w160/${p.code}.png`}
                  alt={p.nom}
                  style={{
                    width: 120,
                    height: 80,
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    border: '2px solid #fff',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.22)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)'; }}
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                />
                <span style={{ display: 'none', fontSize: '3rem' }}>{p.emoji}</span>
                <span style={{ fontWeight: 600, fontSize: '0.85rem', color: '#2d2016', textAlign: 'center' }}>{p.nom}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 5rem' }}>
        <div className="container" style={{ maxWidth: 580, textAlign: 'center' }}>
          <div style={{ padding: '2.5rem', background: 'white', borderRadius: '16px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid #ede9e3' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🌍</div>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: '#3d2e1e', marginBottom: '0.75rem' }}>
              Rejoindre l'Alliance
            </h2>
            <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              L'Alliance est ouverte à toute organisation engagée pour la souveraineté alimentaire dans la région MENA.
              <br />Arabe · Français · Anglais.
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '0.95rem', padding: '0.75rem 2rem' }}>
              Prendre contact
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
