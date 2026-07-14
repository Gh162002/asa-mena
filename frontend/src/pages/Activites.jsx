import { activitesTypes, activitesData } from '../data/content';
import { Link, useParams, useNavigate } from 'react-router-dom';

const CATEGORIE_COULEUR = {
  'Publication':  { bg: '#e8f0ff', color: '#3a5bb5' },
  'Formation':    { bg: '#e8f7ef', color: '#2d7d52' },
  'Plaidoyer':    { bg: '#fff4e0', color: '#b8691a' },
  'Recherche':    { bg: '#f3e8ff', color: '#7b3fa0' },
  'Mobilisation': { bg: '#fde8e8', color: '#b83232' },
  'Campagne':     { bg: '#e8fdf5', color: '#1a8a6e' },
};
const defaultCouleur = { bg: '#f0f0f0', color: '#555' };

function badgeStyle(cat) {
  const c = CATEGORIE_COULEUR[cat] || defaultCouleur;
  return {
    display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
    padding: '3px 12px', borderRadius: '20px',
    background: c.bg, color: c.color,
    border: `1px solid ${c.color}44`, letterSpacing: '0.04em',
  };
}

/* ─── Liste des activités ─────────────────────────────────────────────────── */
export default function Activites() {
  // Données statiques triées par date décroissante
  const activites = [...activitesData].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div style={{ paddingTop: '80px' }}>

      {/* En-tête */}
      <section style={{ background: 'linear-gradient(135deg, var(--brun), #3d2512)', padding: '4rem 0', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', padding: '0.35rem 1rem', borderRadius: '20px', fontSize: '0.8rem', marginBottom: '1rem' }}>
            Sur le terrain
          </div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem,4vw,3rem)', marginBottom: '1rem' }}>
            Activités de l'Alliance
          </h1>
          <p style={{ opacity: 0.85, maxWidth: 640, lineHeight: 1.85 }}>
            Les activités de l'Alliance s'inscrivent dans une approche intégrée combinant action communautaire,
            production de connaissances, renforcement des capacités et plaidoyer multi-niveaux.
          </p>
        </div>
      </section>

      {/* Types d'activités */}
      <section style={{ padding: '4.5rem 0', background: 'var(--creme)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.7rem', color: 'var(--brun)', marginBottom: '0.5rem', textAlign: 'center' }}>
            Nos types d'activités
          </h2>
          <div style={{ width: 60, height: 3, background: 'var(--ocre)', margin: '0 auto 2.5rem' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {activitesTypes.map(a => (
              <div key={a.titre} style={{ background: 'white', borderRadius: '10px', padding: '1.75rem', borderLeft: '4px solid var(--vert)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{a.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display', color: 'var(--brun)', marginBottom: '0.75rem', fontSize: '1.05rem' }}>{a.titre}</h3>
                <p style={{ color: 'var(--gris)', fontSize: '0.87rem', lineHeight: 1.8 }}>{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activités récentes */}
      <section style={{ padding: '4.5rem 0 5rem', background: '#faf8f3' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.7rem', color: 'var(--brun)', marginBottom: '0.5rem', textAlign: 'center' }}>
            Activités récentes
          </h2>
          <div style={{ width: 60, height: 3, background: 'var(--ocre)', margin: '0 auto 0.75rem' }} />
          <p style={{ textAlign: 'center', color: 'var(--texte-clair)', marginBottom: '2.5rem', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Cliquez sur une activité pour lire le détail complet.
          </p>

          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {activites.map(a => {
              const c = CATEGORIE_COULEUR[a.categorie] || defaultCouleur;
              return (
                <Link key={a.id} to={`/activites/${a.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: 'white', borderRadius: '12px', padding: '1.75rem 2rem',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                    display: 'grid', gridTemplateColumns: '1fr auto',
                    gap: '1.5rem', alignItems: 'start',
                    border: '1px solid #e8e8e8',
                    borderLeft: `4px solid ${c.color}`,
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.11)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'; }}
                  >
                    <div>
                      <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        <span style={badgeStyle(a.categorie)}>{a.categorie}</span>
                        <span style={{ color: 'var(--gris)', fontSize: '0.8rem' }}>📍 {a.lieu}</span>
                        {a.langue && (
                          <span style={{ fontSize: '0.72rem', color: 'var(--texte-clair)', background: '#f0f0f0', padding: '2px 8px', borderRadius: '10px' }}>
                            🌐 {a.langue.split(',').map(l => ({ ar: 'AR', fr: 'FR', en: 'EN' })[l] || l).join(' · ')}
                          </span>
                        )}
                      </div>
                      <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.2rem', color: 'var(--brun)', marginBottom: '0.6rem', lineHeight: 1.35 }}>
                        {a.titre}
                      </h3>
                      <p style={{ color: 'var(--gris)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                        {a.description}
                      </p>
                      {a.resultats && (
                        <div style={{ background: '#e8f7ef', padding: '0.6rem 1rem', borderRadius: '6px', fontSize: '0.83rem', color: '#2d7d52' }}>
                          ✅ <strong>Résultats :</strong> {a.resultats}
                        </div>
                      )}
                      <div style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--gris)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {a.thematiques && <span>🏷️ {a.thematiques}</span>}
                        {a.groupesImpliques && <span>👥 {a.groupesImpliques}</span>}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', minWidth: 90, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                      <div style={{ background: c.color, color: 'white', borderRadius: '8px', padding: '0.45rem 0.75rem', fontSize: '0.82rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                        {new Date(a.date).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}
                      </div>
                      {a.contenuComplet && (
                        <span style={{ fontSize: '0.75rem', color: c.color, fontWeight: 600 }}>Lire →</span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Page détail ─────────────────────────────────────────────────────────── */
export function ActiviteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const activite = activitesData.find(a => String(a.id) === String(id));
  const c = CATEGORIE_COULEUR[activite?.categorie] || defaultCouleur;

  if (!activite) return (
    <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
      <p style={{ color: 'var(--texte-clair)', fontSize: '1.1rem' }}>Activité introuvable.</p>
      <button onClick={() => navigate('/activites')} style={{ marginTop: '1rem', padding: '0.6rem 1.5rem', background: 'var(--vert)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>← Retour</button>
    </div>
  );

  function renderContenu(text) {
    if (!text) return null;
    return text.split('\n\n').map((bloc, i) => {
      if (bloc.startsWith('**') && bloc.endsWith('**')) {
        return <h3 key={i} style={{ fontFamily: 'Playfair Display', fontSize: '1.15rem', color: 'var(--brun)', margin: '1.75rem 0 0.5rem' }}>{bloc.replace(/\*\*/g, '')}</h3>;
      }
      // Gras inline
      const parts = bloc.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} style={{ fontSize: '1rem', lineHeight: 1.95, color: 'var(--texte)', marginBottom: '0.25rem' }}>
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p)}
        </p>
      );
    });
  }

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>

      {/* Bannière */}
      <section style={{ background: `linear-gradient(135deg, ${c.color}ee, ${c.color}99)`, padding: '3.5rem 0', color: 'white' }}>
        <div className="container">
          <div style={{ marginBottom: '1rem', fontSize: '0.85rem', opacity: 0.85 }}>
            <Link to="/activites" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Activités</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span style={{ opacity: 0.7 }}>{activite.titre}</span>
          </div>
          <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, padding: '3px 12px', borderRadius: '20px', background: 'rgba(255,255,255,0.25)', color: 'white', border: '1px solid rgba(255,255,255,0.5)', marginBottom: '0.75rem' }}>
            {activite.categorie}
          </span>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.5rem,3.5vw,2.4rem)', lineHeight: 1.25, marginTop: '0.5rem' }}>
            {activite.titre}
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '1.25rem', fontSize: '0.85rem', opacity: 0.92 }}>
            <span>📅 {new Date(activite.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>📍 {activite.lieu}</span>
            {activite.langue && <span>🌐 {activite.langue.split(',').map(l => ({ ar: 'Arabe', fr: 'Français', en: 'Anglais' })[l] || l).join(' · ')}</span>}
            {activite.groupesImpliques && <span>👥 {activite.groupesImpliques}</span>}
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ padding: '4rem 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 820 }}>

          {/* Contexte */}
          {activite.contexte && (
            <div style={{ background: 'white', borderRadius: '12px', padding: '2rem 2.5rem', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', borderLeft: `5px solid ${c.color}`, marginBottom: '1.75rem' }}>
              <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.2rem', color: 'var(--brun)', marginBottom: '0.75rem' }}>Contexte</h2>
              <p style={{ fontSize: '0.97rem', lineHeight: 1.85, color: 'var(--texte-clair)' }}>{activite.contexte}</p>
            </div>
          )}

          {/* Description */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '2rem 2.5rem', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', marginBottom: '1.75rem' }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.2rem', color: 'var(--brun)', marginBottom: '0.75rem' }}>Description</h2>
            <p style={{ fontSize: '0.97rem', lineHeight: 1.85, color: 'var(--texte)' }}>{activite.description}</p>
          </div>

          {/* Texte complet */}
          {activite.contenuComplet && (
            <div style={{ background: 'white', borderRadius: '12px', padding: '2rem 2.5rem', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', marginBottom: '1.75rem', borderTop: `3px solid ${c.color}` }}>
              <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.2rem', color: 'var(--brun)', marginBottom: '1.25rem' }}>
                📄 Texte complet
              </h2>
              <div style={{ borderLeft: `3px solid ${c.color}22`, paddingLeft: '1.5rem' }}>
                {renderContenu(activite.contenuComplet)}
              </div>
              {activite.langue && (
                <div style={{ marginTop: '1.5rem', padding: '0.75rem 1rem', background: '#f8f8f8', borderRadius: '8px', fontSize: '0.82rem', color: 'var(--texte-clair)' }}>
                  🌐 Ce document est disponible en : <strong>{activite.langue.split(',').map(l => ({ ar: 'Arabe', fr: 'Français', en: 'Anglais' })[l] || l).join(', ')}</strong>
                </div>
              )}
            </div>
          )}

          {/* Résultats */}
          {activite.resultats && (
            <div style={{ background: '#e8f7ef', borderRadius: '12px', padding: '1.5rem 2rem', marginBottom: '1.75rem', border: '1px solid #b8e0c8' }}>
              <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem', color: '#2d7d52', marginBottom: '0.6rem' }}>✅ Résultats</h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#2d5a3d' }}>{activite.resultats}</p>
            </div>
          )}

          {/* Thématiques */}
          {activite.thematiques && (
            <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem 2rem', marginBottom: '1.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem', color: 'var(--brun)', marginBottom: '0.75rem' }}>🏷️ Thématiques</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {activite.thematiques.split(',').map((t, i) => (
                  <span key={i} style={{ fontSize: '0.83rem', fontWeight: 600, padding: '4px 14px', borderRadius: '20px', background: `${c.color}18`, color: c.color, border: `1px solid ${c.color}33` }}>
                    {t.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Retour */}
          <Link to="/activites" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '0.65rem 1.5rem', background: c.color, color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            ← Retour aux activités
          </Link>
        </div>
      </section>
    </div>
  );
}
