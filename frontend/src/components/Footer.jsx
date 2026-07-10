import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--brun)', color: 'white', marginTop: '5rem' }}>
      <div className="container" style={{ padding: '3rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src="/images/logo1.png" alt="AFS – MENA" style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <div style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '1rem' }}>AFS – MENA</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>Alliance for Food Sovereignty</div>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: 1.7 }}>
            Un cadre collectif ouvert et inclusif qui rassemble des organisations de la société civile et des mouvements paysans pour la souveraineté alimentaire dans la région MENA.
          </p>
        </div>
        <div>
          <h4 style={{ fontFamily: 'Playfair Display', marginBottom: '1rem', color: '#f0c97a' }}>Navigation</h4>
          {[['/', 'Accueil'], ['/a-propos', 'À propos'], ['/groupes', 'Groupes de travail'], ['/thematiques', 'Thématiques'], ['/activites', 'Activités']].map(([to, label]) => (
            <div key={to} style={{ marginBottom: '0.5rem' }}>
              <Link to={to} style={{ opacity: 0.8, fontSize: '0.9rem', transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.target.style.opacity = 1}
                onMouseLeave={e => e.target.style.opacity = 0.8}>
                {label}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <h4 style={{ fontFamily: 'Playfair Display', marginBottom: '1rem', color: '#f0c97a' }}>Contact</h4>
          <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem' }}>📧 fsalliancemena@gmail.com</p>
          <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.5rem' }}>🌍 Région MENA</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.5rem' }}>Nous contacter</Link>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', padding: '1.25rem 2rem', fontSize: '0.8rem', opacity: 0.6 }}>
        © {new Date().getFullYear()} Alliance pour la Souveraineté Alimentaire – MENA. Tous droits réservés.
      </div>
    </footer>
  );
}
