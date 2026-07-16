import { useState } from 'react';
import { groupesTravail } from '../data/content';
import { Link, useParams, useNavigate } from 'react-router-dom';

/* ═══════════════════════════════════════════════════════════════
   PAGE LISTE — /groupes
═══════════════════════════════════════════════════════════════ */
export default function GroupesTravail() {
  return (
    <div style={{ paddingTop: '80px', background: '#faf8f3' }}>

      {/* ── Hero minimaliste ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1a3328 0%, #2d5a3d 60%, #3d6b4f 100%)',
        padding: '6rem 0 5rem',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Pattern décoratif */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 75% 30%, rgba(200,147,58,0.12) 0%, transparent 55%), radial-gradient(circle at 15% 80%, rgba(255,255,255,0.05) 0%, transparent 40%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(200,147,58,0.2)', border: '1px solid rgba(200,147,58,0.4)', color: '#f0c97a', padding: '6px 18px', borderRadius: 30, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            🌿 Organisation
          </div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1.25rem', maxWidth: 700, margin: '0 auto 1.25rem' }}>
            Groupes de travail
          </h1>
          <p style={{ opacity: 0.78, maxWidth: 600, margin: '0 auto', lineHeight: 1.9, fontSize: '1rem' }}>
            Des espaces thématiques de mobilisation, d'échange et d'action collective pour la souveraineté alimentaire dans la région MENA.
          </p>
          {/* Compteur */}
          <div className="hero-stats" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '3rem' }}>
            {[['7', 'Groupes actifs'], ['13', 'Pays membres'], ['5+', 'Thématiques']].map(([v, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display', fontSize: '2.2rem', fontWeight: 700, color: '#f0c97a', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: 4, letterSpacing: '0.05em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 C480,60 960,0 1440,20 L1440,60 L0,60 Z" fill="#faf8f3" />
          </svg>
        </div>
      </section>

      {/* ── Grille des groupes ── */}
      <section style={{ padding: '5rem 0 6rem' }}>
        <div className="container">
          <div className="groupes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {groupesTravail.map((g, idx) => (
              <GroupeCard key={g.id} g={g} idx={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function GroupeCard({ g, idx }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link to={`/groupes/${g.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: 'white',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.14)' : '0 4px 20px rgba(0,0,0,0.07)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          display: 'flex', flexDirection: 'column', height: '100%',
        }}
      >
        {/* Bande couleur + image */}
        <div style={{ height: 180, position: 'relative', overflow: 'hidden', background: `linear-gradient(135deg, ${g.couleur}ee, ${g.couleur}77)` }}>
          {g.images?.[0] && (
            <img src={g.images[0]} alt={g.nom} style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.5s ease',
            }} />
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)' }} />
          {/* Badge numéro */}
          <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(6px)', color: g.couleur, padding: '3px 12px', borderRadius: 20, fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.1em' }}>
            #{g.id.toString().padStart(2, '0')}
          </div>
          {/* Icône */}
          <div style={{ position: 'absolute', bottom: 14, left: 16, fontSize: '2rem', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))' }}>{g.icon}</div>
        </div>

        {/* Contenu */}
        <div style={{ padding: '1.5rem 1.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.08rem', color: '#1a1a1a', lineHeight: 1.35, marginBottom: '0.7rem' }}>
            {g.nom}
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.75, flexGrow: 1 }}>
            {g.description}
          </p>

          {/* Tags */}
          <div style={{ marginTop: '1.1rem', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {g.themes.slice(0, 3).map((t, i) => (
              <span key={i} style={{ fontSize: '0.68rem', fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: g.couleur + '14', color: g.couleur, letterSpacing: '0.03em' }}>{t}</span>
            ))}
          </div>

          {/* Footer carte */}
          <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#9ca3af' }}>
              <span>📸</span> {g.images?.length || 0} photo{(g.images?.length || 0) !== 1 ? 's' : ''}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', fontWeight: 700, color: g.couleur, background: g.couleur + '12', padding: '5px 12px', borderRadius: 20, transition: 'background 0.2s', ...(hovered ? { background: g.couleur + '22' } : {}) }}>
              Voir <span style={{ fontSize: '1rem' }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE DÉTAIL — /groupes/:slug
═══════════════════════════════════════════════════════════════ */
export function GroupeDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const groupe = groupesTravail.find(g => g.slug === slug);
  const [lightbox, setLightbox] = useState(null);

  if (!groupe) return (
    <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
      <p style={{ color: '#6b7280', fontSize: '1.1rem', marginBottom: '1rem' }}>Groupe introuvable.</p>
      <button onClick={() => navigate('/groupes')} style={{ padding: '0.65rem 1.75rem', background: '#3d6b4f', color: 'white', border: 'none', borderRadius: 10, cursor: 'pointer', fontWeight: 600 }}>← Retour</button>
    </div>
  );

  return (
    <div style={{ paddingTop: '80px', background: '#faf8f3' }}>

      {/* ── Hero compact avec couleur groupe ── */}
      <section style={{
        background: `linear-gradient(140deg, ${groupe.couleur} 0%, ${groupe.couleur}cc 50%, #1a3328 100%)`,
        padding: '4.5rem 0 6rem', color: 'white', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(0,0,0,0.1) 0%, transparent 40%)`, pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Link to="/groupes" style={{ color: 'white', textDecoration: 'none', opacity: 0.85 }}>Groupes de travail</Link>
            <span>›</span>
            <span style={{ opacity: 0.7 }}>{groupe.nom}</span>
          </div>

          <div className="groupe-detail-header" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', alignItems: 'center', maxWidth: 800 }}>
            {/* Icône grande */}
            <div className="groupe-icon-large" style={{
              width: 90, height: 90, borderRadius: '24px',
              background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.8rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}>{groupe.icon}</div>

            <div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', padding: '4px 14px', borderRadius: 20, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                Groupe {groupe.id}
              </div>
              <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', lineHeight: 1.2, margin: 0 }}>
                {groupe.nom}
              </h1>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0,20 C480,60 960,0 1440,20 L1440,60 L0,60 Z" fill="#faf8f3" />
          </svg>
        </div>
      </section>

      {/* ── Contenu principal ── */}
      <section style={{ padding: '3rem 0 5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', alignItems: 'start' }} className="detail-grid">

            {/* ─ Colonne principale ─ */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Présentation */}
              <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', borderTop: `4px solid ${groupe.couleur}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: groupe.couleur + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>📋</div>
                  <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.3rem', color: '#1a1a1a', margin: 0 }}>Présentation</h2>
                </div>
                <p style={{ fontSize: '1rem', lineHeight: 2, color: '#374151' }}>{groupe.descriptionComplete}</p>
              </div>

              {/* Domaines d'action */}
              <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: groupe.couleur + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>🎯</div>
                  <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.3rem', color: '#1a1a1a', margin: 0 }}>Domaines d'action</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
                  {groupe.themes.map((t, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.85rem 1.1rem', borderRadius: 12, background: groupe.couleur + '0e', border: `1px solid ${groupe.couleur}22` }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: groupe.couleur, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: groupe.couleur }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Galerie */}
              {groupe.images?.length > 0 && (
                <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: groupe.couleur + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>📸</div>
                    <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.3rem', color: '#1a1a1a', margin: 0 }}>Galerie photos</h2>
                    <span style={{ marginLeft: 'auto', fontSize: '0.78rem', color: '#9ca3af', fontStyle: 'italic' }}>Cliquez pour agrandir</span>
                  </div>
                  <div className="galerie-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: groupe.images.length === 1 ? '1fr' : groupe.images.length === 2 ? '1fr 1fr' : 'repeat(3, 1fr)',
                    gap: 10,
                  }}>
                    {groupe.images.map((img, i) => (
                      <GalerieItem key={i} img={img} nom={groupe.nom} i={i} total={groupe.images.length} couleur={groupe.couleur} onClick={() => setLightbox(i)} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ─ Sidebar ─ */}
            <div className="sticky-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'sticky', top: 100 }}>

              {/* Card groupe */}
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}>
                <div style={{ background: `linear-gradient(135deg, ${groupe.couleur}, ${groupe.couleur}99)`, padding: '2rem', color: 'white' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{groupe.icon}</div>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1rem', lineHeight: 1.4, marginBottom: '1.25rem' }}>{groupe.nom}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.8rem', opacity: 0.88, display: 'flex', gap: 8 }}><span>📸</span>{groupe.images?.length || 0} photos</div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.88, display: 'flex', gap: 8 }}><span>🏷️</span>{groupe.themes.length} domaines d'action</div>
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.25rem' }}>
                  <Link to="/groupes" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    padding: '0.75rem', borderRadius: 10, width: '100%',
                    background: groupe.couleur + '12', color: groupe.couleur,
                    border: `1.5px solid ${groupe.couleur}33`,
                    fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none',
                  }}>← Tous les groupes</Link>
                </div>
              </div>

              {/* Autres groupes */}
              <div style={{ background: 'white', borderRadius: '20px', padding: '1.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '0.95rem', color: '#1a1a1a', marginBottom: '1rem' }}>Autres groupes</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {groupesTravail.filter(g => g.slug !== slug).map(g => (
                    <AutreGroupeLink key={g.id} g={g} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.93)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.12)', color: 'white', border: 'none', borderRadius: '50%', width: 44, height: 44, fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.12)', color: 'white', border: 'none', borderRadius: '50%', width: 52, height: 52, fontSize: '1.6rem', cursor: 'pointer' }}>‹</button>}
          <img src={groupe.images[lightbox]} alt="" onClick={e => e.stopPropagation()} style={{ maxWidth: '88vw', maxHeight: '88vh', objectFit: 'contain', borderRadius: 12, boxShadow: '0 0 80px rgba(0,0,0,0.6)' }} />
          {lightbox < groupe.images.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.12)', color: 'white', border: 'none', borderRadius: '50%', width: 52, height: 52, fontSize: '1.6rem', cursor: 'pointer' }}>›</button>}
          <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{lightbox + 1} / {groupe.images.length}</div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .detail-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .galerie-grid { grid-template-columns: 1fr !important; }
          .galerie-grid > div { grid-column: span 1 !important; aspect-ratio: 4/3 !important; }
          .groupe-detail-header { grid-template-columns: 1fr !important; }
          .groupe-icon-large { width: 64px !important; height: 64px !important; font-size: 2rem !important; }
        }
      `}</style>
    </div>
  );
}

/* ── Sous-composants ── */
function GalerieItem({ img, nom, i, total, couleur, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 12, overflow: 'hidden', cursor: 'zoom-in',
        aspectRatio: i === 0 && total >= 3 ? '16/9' : '4/3',
        gridColumn: i === 0 && total >= 3 ? 'span 2' : 'span 1',
        position: 'relative',
        boxShadow: hov ? '0 8px 28px rgba(0,0,0,0.2)' : '0 2px 10px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.25s',
      }}
    >
      <img src={img} alt={`${nom} ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hov ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.4s ease' }} />
      <div style={{ position: 'absolute', inset: 0, background: hov ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0)', transition: 'background 0.25s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'white', fontSize: '1.8rem', opacity: hov ? 1 : 0, transition: 'opacity 0.2s', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))' }}>🔍</span>
      </div>
    </div>
  );
}

function AutreGroupeLink({ g }) {
  const [hov, setHov] = useState(false);
  return (
    <Link to={`/groupes/${g.slug}`} style={{ textDecoration: 'none' }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.6rem 0.75rem', borderRadius: 10, background: hov ? g.couleur + '12' : 'transparent', transition: 'background 0.2s' }}>
        <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{g.icon}</span>
        <span style={{ fontSize: '0.8rem', fontWeight: 500, color: hov ? g.couleur : '#374151', lineHeight: 1.35, transition: 'color 0.2s' }}>{g.nom}</span>
      </div>
    </Link>
  );
}
