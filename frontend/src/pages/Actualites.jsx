import { useState, useEffect } from 'react';
import axios from 'axios';

const API = `${import.meta.env.VITE_API_URL || ''}`;
const CATEGORIES = ['Toutes', 'Formation', 'Plaidoyer', 'Recherche', 'Campagne', 'Événement'];
const CAT_META = {
  Formation:  { color: '#3d6b4f', bg: '#eaf3ec', icon: '📚' },
  Plaidoyer:  { color: '#c8933a', bg: '#fdf3e3', icon: '📢' },
  Recherche:  { color: '#5c3d1e', bg: '#f5ede4', icon: '🔬' },
  Campagne:   { color: '#2d7dd2', bg: '#f0f7ff', icon: '📣' },
  Événement:  { color: '#9c6644', bg: '#fdf5ef', icon: '🌾' },
  _default:   { color: '#3d6b4f', bg: '#eaf3ec', icon: '🌿' },
};
function getCat(cat) { return CAT_META[cat] || CAT_META._default; }
function formatDate(d) { if (!d) return ''; return new Date(d).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }); }

function DetailView({ article, onBack }) {
  const meta = getCat(article.categorie);
  return (
    <div style={{ paddingTop: '80px', background: 'var(--blanc)', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg, #1a3326 0%, #2d5a3d 55%, #3d6b4f 100%)', padding: '4rem 0 3rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <button onClick={onBack} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', borderRadius: '8px', padding: '0.5rem 1.25rem', cursor: 'pointer', fontSize: '0.88rem', fontFamily: 'Inter, sans-serif', fontWeight: 600, marginBottom: '1.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}>
            ← Retour aux actualités
          </button>
          <div style={{ display: 'inline-block', background: meta.color, color: 'white', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1rem' }}>{article.categorie || 'Actualité'}</div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.6rem,4vw,2.8rem)', lineHeight: 1.2, maxWidth: 800, marginBottom: '1.5rem' }}>{article.titre}</h1>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', opacity: 0.82, fontSize: '0.9rem' }}>
            {article.datePublication && <span>📅 {formatDate(article.datePublication)}</span>}
            {article.auteur && <span>✍️ {article.auteur}</span>}
            {article.pays && <span>📍 {article.pays}</span>}
          </div>
        </div>
      </div>
      <div style={{ lineHeight: 0, background: '#1a3326' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--blanc)" />
        </svg>
      </div>
      <div className="container" style={{ maxWidth: 820, padding: '4rem 2rem 6rem' }}>
        {article.resume && <p style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: '1.18rem', color: 'var(--brun)', lineHeight: 1.8, marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '2px solid var(--gris-clair)' }}>{article.resume}</p>}
        {article.contenu && <p style={{ fontSize: '1rem', color: '#3a3a3a', lineHeight: 1.9 }}>{article.contenu}</p>}
      </div>
    </div>
  );
}

function ArticleCard({ article, onClick }) {
  const [hovered, setHovered] = useState(false);
  const meta = getCat(article.categorie);
  return (
    <article onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer', boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.13)' : '0 2px 16px rgba(0,0,0,0.06)', transform: hovered ? 'translateY(-6px)' : 'none', transition: 'all 0.22s ease', border: '1px solid #f0f0f0' }}>
      <div style={{ height: 180, background: `linear-gradient(135deg, ${meta.color}dd, ${meta.color}88)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1.5px, transparent 1.5px)', backgroundSize: '22px 22px' }} />
        <span style={{ fontSize: '3.5rem', position: 'relative' }}>{meta.icon}</span>
      </div>
      <div style={{ padding: '1.5rem 1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', gap: '0.5rem' }}>
          <span style={{ background: meta.bg, color: meta.color, padding: '0.25rem 0.85rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{article.categorie || 'Actualité'}</span>
          {article.datePublication && <span style={{ fontSize: '0.8rem', color: 'var(--gris)' }}>{formatDate(article.datePublication)}</span>}
        </div>
        <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.15rem', color: 'var(--brun)', lineHeight: 1.35, marginBottom: '0.75rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{article.titre}</h2>
        {article.resume && <p style={{ color: 'var(--gris)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{article.resume}</p>}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {article.auteur && <span style={{ fontSize: '0.82rem', color: 'var(--gris)' }}>✍️ {article.auteur}</span>}
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: meta.color, marginLeft: 'auto' }}>Lire l'article →</span>
        </div>
      </div>
    </article>
  );
}

export default function Actualites() {
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categorie, setCategorie] = useState('Toutes');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setLoading(true);
    const url = categorie === 'Toutes' ? `${API}/api/actualites` : `${API}/api/actualites?categorie=${categorie}`;
    axios.get(url).then(r => setActualites(r.data)).catch(() => setActualites([])).finally(() => setLoading(false));
  }, [categorie]);

  if (selected) return <DetailView article={selected} onBack={() => setSelected(null)} />;

  return (
    <div style={{ paddingTop: '80px', background: 'var(--blanc)' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #1a3326 0%, #2d5a3d 55%, #3d6b4f 100%)', padding: '6rem 0 5rem', color: 'white', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,147,58,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,143,110,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(200,147,58,0.25)', border: '1px solid rgba(200,147,58,0.4)', color: '#f5d08a', padding: '0.35rem 1.1rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Blog & actualités</div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2rem,5vw,3.4rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>Actualités</h1>
          <p style={{ opacity: 0.82, maxWidth: 520, lineHeight: 1.85, fontSize: '1rem', margin: '0 auto' }}>Les dernières nouvelles de l'Alliance et de ses membres dans la région MENA.</p>
        </div>
      </section>

      {/* Wave */}
      <div style={{ lineHeight: 0, background: '#1a3326' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--blanc)" />
        </svg>
      </div>

      {/* ── CONTENT ── */}
      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="container">
          {/* Filters */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem', justifyContent: 'center' }}>
            {CATEGORIES.map(c => {
              const active = categorie === c;
              const meta = getCat(c);
              return (
                <button key={c} onClick={() => setCategorie(c)} style={{ padding: '0.55rem 1.4rem', borderRadius: '50px', fontSize: '0.88rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer', border: active ? 'none' : '2px solid #e5e7eb', background: active ? (c === 'Toutes' ? 'var(--vert)' : meta.color) : 'white', color: active ? 'white' : 'var(--gris)', transition: 'all 0.18s', boxShadow: active ? '0 4px 12px rgba(0,0,0,0.15)' : 'none' }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = 'var(--vert)'; e.currentTarget.style.color = 'var(--vert)'; } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = 'var(--gris)'; } }}>
                  {c}
                </button>
              );
            })}
          </div>

          {loading ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '5rem 0', color: 'var(--gris)' }}>
              <div style={{ width: 44, height: 44, border: '3px solid var(--gris-clair)', borderTopColor: 'var(--vert)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              <p>Chargement des actualités…</p>
            </div>
          ) : actualites.length === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '5rem 0', color: 'var(--gris)', textAlign: 'center' }}>
              <span style={{ fontSize: '3.5rem' }}>📰</span>
              <p style={{ maxWidth: 400 }}>Aucune actualité dans cette catégorie pour le moment.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              {actualites.map(a => <ArticleCard key={a.id} article={a} onClick={() => setSelected(a)} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
