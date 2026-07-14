import { activitesTypes, activitesData } from '../data/content';
import { Link, useParams, useNavigate } from 'react-router-dom';

const CATEGORIE_COULEUR = {
  'Publication':  { bg: '#eaf3ec', color: '#3d6b4f' },   // vert
  'Formation':    { bg: '#eaf3ec', color: '#5a8f6e' },   // vert-clair
  'Plaidoyer':    { bg: '#fdf3e3', color: '#c8933a' },   // ocre
  'Recherche':    { bg: '#f5ede3', color: '#5c3d1e' },   // brun
  'Terrain':      { bg: '#fdf3e3', color: '#a0722a' },   // ocre foncé
  'Mobilisation': { bg: '#f0ebe0', color: '#7a5c2e' },   // ocre sombre
  'Campagne':     { bg: '#eaf3ec', color: '#3d6b4f' },   // vert
};
const defaultCouleur = { bg: '#f3f4f6', color: '#6b7280' };

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
      <section style={{ padding: '4.5rem 0', background: 'var(--blanc)' }}>
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
      <section style={{ padding: '4.5rem 0 5rem', background: 'var(--ocre-pale)' }}>
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
              // Si PDF disponible → clic ouvre la page détail (qui contient le viewer)
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
                      </div>
                      <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.2rem', color: 'var(--brun)', marginBottom: '0.6rem', lineHeight: 1.35 }}>
                        {a.titre}
                      </h3>
                      <p style={{ color: 'var(--gris)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                        {a.description}
                      </p>
                      <div style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--gris)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {a.thematiques && <span>🏷️ {a.thematiques}</span>}
                        {a.groupesImpliques && <span>👥 {a.groupesImpliques}</span>}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', minWidth: 110, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                      <div style={{ background: c.color, color: 'white', borderRadius: '8px', padding: '0.45rem 0.75rem', fontSize: '0.82rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                        {new Date(a.date).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}
                      </div>
                      {a.pdfUrl && (
                        <span style={{
                          fontSize: '0.78rem', color: c.color, fontWeight: 700,
                          background: `${c.color}12`, border: `1px solid ${c.color}44`,
                          padding: '3px 10px', borderRadius: '6px',
                        }}>
                          📄 Lire →
                        </span>
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
            {activite.groupesImpliques && <span>👥 {activite.groupesImpliques}</span>}
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ padding: '4rem 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 820 }}>

          {/* Description */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '2rem 2.5rem', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', marginBottom: '1.75rem' }}>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.2rem', color: 'var(--brun)', marginBottom: '0.75rem' }}>Description</h2>
            <p style={{ fontSize: '0.97rem', lineHeight: 1.85, color: 'var(--texte)' }}>{activite.description}</p>
          </div>

          {/* ── Viewer PDF + téléchargement ── */}
          {activite.pdfUrl && (
            <div style={{ background: 'white', borderRadius: '12px', padding: '2rem 2.5rem', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', marginBottom: '1.75rem', borderTop: `3px solid ${c.color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.2rem', color: 'var(--brun)', margin: 0 }}>
                  📄 Document PDF
                </h2>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href={activite.pdfUrl} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    padding: '0.5rem 1rem', borderRadius: '8px',
                    background: `${c.color}18`, color: c.color,
                    border: `1px solid ${c.color}44`,
                    fontSize: '0.83rem', fontWeight: 600, textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = `${c.color}30`}
                    onMouseLeave={e => e.currentTarget.style.background = `${c.color}18`}
                  >
                    🔍 Voir en plein écran
                  </a>
                  <a href={activite.pdfUrl} download style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    padding: '0.5rem 1rem', borderRadius: '8px',
                    background: c.color, color: 'white',
                    fontSize: '0.83rem', fontWeight: 600, textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    ⬇ Télécharger
                  </a>
                </div>
              </div>

              {/* Iframe PDF viewer */}
              <div style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e0e0e0' }}>
                <iframe
                  src={activite.pdfUrl}
                  title={activite.titre}
                  width="100%"
                  height="600px"
                  style={{ display: 'block', border: 'none' }}
                />
              </div>

              <p style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--texte-clair)', textAlign: 'center' }}>
                Si le document ne s'affiche pas,{' '}
                <a href={activite.pdfUrl} target="_blank" rel="noopener noreferrer" style={{ color: c.color, fontWeight: 600 }}>
                  cliquez ici pour l'ouvrir
                </a>.
              </p>
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
