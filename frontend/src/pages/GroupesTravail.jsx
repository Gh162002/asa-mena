import { groupesTravail } from '../data/content';
import { useState } from 'react';

export default function GroupesTravail() {
  const [actif, setActif] = useState(null);
  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ background: 'linear-gradient(135deg, var(--vert), #1e3d2a)', padding: '4rem 0', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', padding: '0.35rem 1rem', borderRadius: '20px', fontSize: '0.8rem', marginBottom: '1rem' }}>Organisation</div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem,4vw,3rem)' }}>Groupes de travail</h1>
          <p style={{ opacity: 0.85, marginTop: '1rem', maxWidth: 600, lineHeight: 1.8 }}>
            Les groupes de travail constituent les espaces thématiques et stratégiques de l'Alliance. Ils permettent de renforcer la coordination entre membres et de porter des actions de plaidoyer autour des enjeux liés à la souveraineté alimentaire.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {groupesTravail.map(g => (
              <div key={g.id}
                onClick={() => setActif(actif === g.id ? null : g.id)}
                style={{ background: actif === g.id ? 'var(--vert)' : 'white', color: actif === g.id ? 'white' : 'inherit', borderRadius: '10px', padding: '1.75rem', boxShadow: '0 2px 16px rgba(0,0,0,0.07)', cursor: 'pointer', transition: 'all 0.25s', border: '1px solid', borderColor: actif === g.id ? 'var(--vert)' : '#e5e7eb' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{g.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.2rem', marginBottom: '0.75rem', color: actif === g.id ? 'white' : 'var(--brun)' }}>{g.nom}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: actif === g.id ? 'rgba(255,255,255,0.85)' : 'var(--gris)' }}>{g.description}</p>
                <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 500, color: actif === g.id ? '#f0c97a' : 'var(--vert)' }}>
                  {actif === g.id ? '▲ Réduire' : '▼ En savoir plus'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common text */}
      <section style={{ background: 'var(--ocre-pale)', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem', color: 'var(--brun)', marginBottom: '1rem' }}>Des espaces de co-construction collective</h2>
          <p style={{ color: 'var(--gris)', lineHeight: 1.9 }}>
            Ces groupes fonctionnent comme des espaces de mobilisation, d'échange et d'action collective, en lien avec les priorités de l'Alliance en matière de terre, eau, semences, agroécologie, droits des communautés et justice sociale. Ils constituent également des mécanismes de représentation de l'Alliance dans les espaces régionaux et internationaux.
          </p>
        </div>
      </section>
    </div>
  );
}
