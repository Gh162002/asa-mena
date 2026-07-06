import { useState, useEffect } from 'react';
import axios from 'axios';
import './Actualites.css';

const CATEGORIES = ["Toutes", "Formation", "Plaidoyer", "Recherche", "Campagne", "Événement"];

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function Actualites() {
  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categorie, setCategorie] = useState("Toutes");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setLoading(true);
    const url = categorie === "Toutes"
      ? '/api/actualites'
      : `/api/actualites?categorie=${categorie}`;
    axios.get(url)
      .then(r => setActualites(r.data))
      .catch(() => setActualites([]))
      .finally(() => setLoading(false));
  }, [categorie]);

  if (selected) {
    return (
      <div className="actualites">
        <div className="actu-detail">
          <div className="container">
            <button className="btn-back" onClick={() => setSelected(null)}>← Retour aux actualités</button>
            <div className="detail-content">
              <span className={`badge badge-${getCatColor(selected.categorie)}`}>{selected.categorie}</span>
              <h1>{selected.titre}</h1>
              <div className="detail-meta">
                <span>📅 {formatDate(selected.datePublication)}</span>
                {selected.auteur && <span>✍️ {selected.auteur}</span>}
                {selected.pays && <span>📍 {selected.pays}</span>}
              </div>
              <div className="detail-body">
                <p className="detail-lead">{selected.resume}</p>
                <p>{selected.contenu}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="actualites">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">Blog & actualités</span>
          <h1>Actualités</h1>
          <p>Les dernières nouvelles de l'Alliance et de ses membres</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="actu-filters">
            {CATEGORIES.map(c => (
              <button
                key={c}
                className={`filter-btn ${categorie === c ? 'active' : ''}`}
                onClick={() => setCategorie(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loading-state">
              <div className="spinner" />
              <p>Chargement des actualités…</p>
            </div>
          ) : actualites.length === 0 ? (
            <div className="empty-state">
              <span>📰</span>
              <p>Aucune actualité dans cette catégorie pour le moment.</p>
            </div>
          ) : (
            <div className="actu-grid">
              {actualites.map(a => (
                <article key={a.id} className="actu-card" onClick={() => setSelected(a)}>
                  <div className="actu-card-img">
                    <div className="actu-placeholder">
                      {getCatIcon(a.categorie)}
                    </div>
                  </div>
                  <div className="actu-card-body">
                    <span className={`badge badge-${getCatColor(a.categorie)}`}>{a.categorie}</span>
                    <h2>{a.titre}</h2>
                    <p>{a.resume}</p>
                    <div className="actu-meta">
                      <span>📅 {formatDate(a.datePublication)}</span>
                      {a.auteur && <span>✍️ {a.auteur}</span>}
                    </div>
                    <span className="lire-plus">Lire l'article →</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function getCatColor(cat) {
  const map = { Formation: 'vert', Plaidoyer: 'ocre', Recherche: 'brun', Campagne: 'vert', Événement: 'ocre' };
  return map[cat] || 'vert';
}

function getCatIcon(cat) {
  const map = { Formation: '📚', Plaidoyer: '📢', Recherche: '🔬', Campagne: '📣', Événement: '🌾' };
  return map[cat] || '🌿';
}
