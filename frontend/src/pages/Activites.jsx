import { activitesTypes } from '../data/content';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Activites() {
  const [activites, setActivites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/activites')
      .then(r => setActivites(r.data))
      .catch(() => setActivites([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ background: 'linear-gradient(135deg, var(--brun), #3d2512)', padding: '4rem 0', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', padding: '0.35rem 1rem', borderRadius: '20px', fontSize: '0.8rem', marginBottom: '1rem' }}>Sur le terrain</div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem,4vw,3rem)' }}>Activités de l'Alliance</h1>
          <p style={{ opacity: 0.85, marginTop: '1rem', maxWidth: 600, lineHeight: 1.8 }}>
            Les activités de l'Alliance s'inscrivent dans une approche intégrée combinant action communautaire, production de connaissances, renforcement des capacités et plaidoyer multi-niveaux.
          </p>
        </div>
      </section>

      {/* Types d'activités */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <h2 className="section-title">Nos types d'activités</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
            {activitesTypes.map(a => (
              <div key={a.titre} style={{ background: 'var(--vert-pale)', borderRadius: '8px', padding: '1.75rem', borderLeft: '4px solid var(--vert)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{a.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display', color: 'var(--brun)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>{a.titre}</h3>
                <p style={{ color: 'var(--gris)', fontSize: '0.9rem', lineHeight: 1.8 }}>{a.description}</p>
              </div>
            ))}
          </div>

          {/* Activités récentes */}
          <h2 className="section-title">Activités récentes</h2>
          <div className="divider" />
          <p className="section-subtitle">Quelques exemples d'activités menées par l'Alliance et ses groupes de travail dans la région MENA.</p>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--gris)' }}>Chargement...</div>
          ) : (
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {activites.map(a => (
                <div key={a.id} style={{ background: 'white', borderRadius: '10px', padding: '2rem', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'start' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <span style={{ background: 'var(--ocre-pale)', color: 'var(--brun)', padding: '0.2rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 500 }}>{a.categorie}</span>
                      <span style={{ color: 'var(--gris)', fontSize: '0.8rem' }}>📍 {a.lieu}</span>
                    </div>
                    <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.3rem', color: 'var(--brun)', marginBottom: '0.75rem' }}>{a.titre}</h3>
                    <p style={{ color: 'var(--gris)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>{a.description}</p>
                    {a.resultats && (
                      <div style={{ background: 'var(--vert-pale)', padding: '0.75rem 1rem', borderRadius: '6px', fontSize: '0.85rem', color: 'var(--vert)' }}>
                        ✅ <strong>Résultats :</strong> {a.resultats}
                      </div>
                    )}
                    <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--gris)' }}>
                      🏷️ {a.thematiques} &nbsp;|&nbsp; 👥 {a.groupesImpliques}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', minWidth: 100 }}>
                    <div style={{ background: 'var(--vert)', color: 'white', borderRadius: '8px', padding: '0.5rem 0.75rem', fontSize: '0.85rem', fontWeight: 600 }}>
                      {new Date(a.date).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
