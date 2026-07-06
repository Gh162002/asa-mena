import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/groupes', label: 'Groupes de travail' },
  { to: '/thematiques', label: 'Thématiques' },
  { to: '/activites', label: 'Activités' },
  { to: '/pays-membres', label: 'Pays membres' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(250,248,243,0.97)' : 'transparent',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      transition: 'all 0.3s',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            overflow: 'hidden', flexShrink: 0,
            border: '2px solid var(--vert)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          }}>
            <img src="/images/logo1.png" alt="Alliance pour la Souveraineté Alimentaire MENA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '0.92rem', color: scrolled ? 'var(--brun)' : 'white', lineHeight: 1.3 }}>Alliance pour la Souveraineté</div>
            <div style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '0.92rem', color: scrolled ? 'var(--brun)' : 'white', lineHeight: 1.3 }}>Alimentaire <span style={{ color: scrolled ? 'var(--vert)' : '#f0c97a' }}>MENA</span></div>
          </div>
        </Link>

        {/* Desktop */}
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              padding: '0.45rem 1rem',
              fontSize: '0.83rem',
              fontWeight: location.pathname === l.to ? 600 : 400,
              color: location.pathname === l.to ? 'white' : 'var(--texte)',
              background: location.pathname === l.to ? 'var(--vert)' : 'transparent',
              borderRadius: '999px',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { if (location.pathname !== l.to) { e.currentTarget.style.background = 'rgba(61,107,79,0.1)'; e.currentTarget.style.color = 'var(--vert)'; }}}
            onMouseLeave={e => { if (location.pathname !== l.to) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--texte)'; }}}
            >{l.label}</Link>
          ))}
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}
          className="hamburger">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'var(--blanc)', borderTop: '1px solid #e5e7eb', padding: '1rem 2rem' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{ display: 'block', padding: '0.75rem 0', borderBottom: '1px solid #f3f4f6', color: location.pathname === l.to ? 'var(--vert)' : 'var(--texte)', fontWeight: location.pathname === l.to ? 600 : 400 }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
