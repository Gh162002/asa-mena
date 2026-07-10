import { groupesTravail } from '../data/content';
import { Link, useParams, useNavigate } from 'react-router-dom';

/* ─── Page liste des groupes ─────────────────────────────────────────────── */
export default function GroupesTravail() {
  return (
    <div style={{ paddingTop: '80px' }}>

      {/* En-tête */}
      <section style={{
        background: 'linear-gradient(135deg, var(--vert), #1e3d2a)',
        padding: '4rem 0',
        color: 'white',
      }}>
        <div className="container">
          <div style={{
            display: 'inline-block', background: 'rgba(255,255,255,0.15)',
            padding: '0.35rem 1rem', borderRadius: '20px',
            fontSize: '0.8rem', marginBottom: '1rem',
          }}>Organisation</div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem,4vw,3rem)', marginBottom: '1.25rem' }}>
            Groupes de travail
          </h1>
          <p style={{ opacity: 0.88, maxWidth: 720, lineHeight: 1.85, fontSize: '1rem' }}>
            Les groupes de travail constituent les espaces thématiques et stratégiques de l'Alliance. Ils permettent de renforcer la coordination entre les membres, favoriser la participation des différents acteurs des systèmes alimentaires, produire des connaissances, porter des actions de plaidoyer et développer des positions communes autour des enjeux liés à la souveraineté alimentaire.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: '3.5rem 0 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 820, textAlign: 'center' }}>
          <p style={{ color: 'var(--texte-clair)', lineHeight: 1.9, fontSize: '0.97rem', marginBottom: '0.75rem' }}>
            Ces groupes de travail fonctionnent comme des espaces de mobilisation, d'échange, de co-construction et d'action collective, en lien avec les priorités de l'Alliance en matière de terre, eau, semences, agroécologie, droits des communautés, gouvernance des ressources naturelles et justice sociale et environnementale.
          </p>
          <p style={{ color: 'var(--texte-clair)', lineHeight: 1.9, fontSize: '0.97rem' }}>
            Ils constituent également des mécanismes de représentation et d'engagement de l'Alliance dans les espaces régionaux et internationaux, à travers la participation à des groupes de travail, plateformes, processus politiques et réseaux thématiques correspondants, afin de renforcer les échanges, les alliances stratégiques et l'influence collective sur les politiques publiques et les systèmes alimentaires.
          </p>
        </div>
      </section>

      {/* Grille des groupes */}
      <section style={{ padding: '3.5rem 0 5rem', background: 'var(--creme)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '1.5rem',
          }}>
            {groupesTravail.map(g => (
              <Link
                key={g.id}
                to={`/groupes/${g.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                  border: `1px solid #e5e7eb`,
                  borderTop: `4px solid ${g.couleur}`,
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.13)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)';
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{g.icon}</div>
                  <div style={{
                    fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: g.couleur, marginBottom: '0.35rem',
                  }}>
                    Groupe {g.id}
                  </div>
                  <h3 style={{
                    fontFamily: 'Playfair Display', fontSize: '1.1rem',
                    color: 'var(--brun)', marginBottom: '0.85rem', lineHeight: 1.35,
                  }}>{g.nom}</h3>
                  <p style={{
                    fontSize: '0.875rem', lineHeight: 1.75,
                    color: 'var(--texte-clair)', flexGrow: 1,
                  }}>{g.description}</p>

                  {/* Tags thèmes */}
                  <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {g.themes.slice(0, 3).map((t, i) => (
                      <span key={i} style={{
                        fontSize: '0.72rem', fontWeight: 600,
                        padding: '3px 10px', borderRadius: '20px',
                        background: g.couleur + '18',
                        color: g.couleur,
                        border: `1px solid ${g.couleur}33`,
                      }}>{t}</span>
                    ))}
                  </div>

                  <div style={{
                    marginTop: '1.25rem', fontSize: '0.82rem',
                    fontWeight: 600, color: g.couleur,
                    display: 'flex', alignItems: 'center', gap: '4px',
                  }}>
                    Voir le détail <span style={{ fontSize: '1rem' }}>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bas de page */}
      <section style={{ background: '#f0ebe0', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: 780, textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'Playfair Display', fontSize: '1.7rem',
            color: 'var(--brun)', marginBottom: '1rem',
          }}>Des espaces de co-construction collective</h2>
          <p style={{ color: 'var(--texte-clair)', lineHeight: 1.9 }}>
            Chaque groupe de travail est ouvert à l'ensemble des membres selon leur domaine d'expertise et d'engagement. Ensemble, ils constituent la colonne vertébrale opérationnelle et stratégique de l'Alliance pour la Souveraineté Alimentaire MENA.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ─── Page détail d'un groupe ────────────────────────────────────────────── */
export function GroupeDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const groupe = groupesTravail.find(g => g.slug === slug);

  if (!groupe) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--texte-clair)' }}>Groupe introuvable.</p>
        <button onClick={() => navigate('/groupes')} style={{
          marginTop: '1rem', padding: '0.6rem 1.5rem',
          background: 'var(--vert)', color: 'white', border: 'none',
          borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem',
        }}>← Retour aux groupes</button>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>

      {/* Bannière */}
      <section style={{
        background: `linear-gradient(135deg, ${groupe.couleur}dd, ${groupe.couleur}99)`,
        padding: '3.5rem 0',
        color: 'white',
      }}>
        <div className="container">
          {/* Fil d'Ariane */}
          <div style={{ marginBottom: '1.25rem', fontSize: '0.85rem', opacity: 0.85 }}>
            <Link to="/groupes" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>
              Groupes de travail
            </Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span>{groupe.nom}</span>
          </div>

          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>{groupe.icon}</div>
          <div style={{
            display: 'inline-block', background: 'rgba(255,255,255,0.2)',
            padding: '0.3rem 0.9rem', borderRadius: '20px',
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', marginBottom: '0.75rem',
          }}>Groupe {groupe.id}</div>
          <h1 style={{
            fontFamily: 'Playfair Display',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
            lineHeight: 1.2,
          }}>{groupe.nom}</h1>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ padding: '4rem 0', background: 'var(--creme)' }}>
        <div className="container" style={{ maxWidth: 860 }}>

          {/* Description complète */}
          <div style={{
            background: 'white', borderRadius: '12px',
            padding: '2.5rem', boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            borderLeft: `5px solid ${groupe.couleur}`,
            marginBottom: '2rem',
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display', fontSize: '1.3rem',
              color: 'var(--brun)', marginBottom: '1rem',
            }}>Présentation</h2>
            <p style={{
              fontSize: '1rem', lineHeight: 1.9,
              color: 'var(--texte)', whiteSpace: 'pre-line',
            }}>{groupe.descriptionComplete}</p>
          </div>

          {/* Domaines d'action */}
          <div style={{
            background: 'white', borderRadius: '12px',
            padding: '2.5rem', boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
            marginBottom: '2rem',
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display', fontSize: '1.3rem',
              color: 'var(--brun)', marginBottom: '1.25rem',
            }}>Domaines d'action</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {groupe.themes.map((t, i) => (
                <span key={i} style={{
                  fontSize: '0.85rem', fontWeight: 600,
                  padding: '6px 16px', borderRadius: '24px',
                  background: groupe.couleur + '18',
                  color: groupe.couleur,
                  border: `1px solid ${groupe.couleur}44`,
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Section images — s'affiche uniquement si des images sont ajoutées */}
          {groupe.images && groupe.images.length > 0 && (
            <div style={{
              background: 'white', borderRadius: '12px',
              padding: '2.5rem', boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              marginBottom: '2rem',
            }}>
              <h2 style={{
                fontFamily: 'Playfair Display', fontSize: '1.3rem',
                color: 'var(--brun)', marginBottom: '1.25rem',
              }}>Galerie photos</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '12px',
              }}>
                {groupe.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${groupe.nom} - photo ${i + 1}`}
                    style={{
                      width: '100%', aspectRatio: '4/3',
                      objectFit: 'cover', borderRadius: '8px',
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Bouton retour */}
          <div style={{ marginTop: '1rem' }}>
            <Link to="/groupes" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '0.65rem 1.5rem',
              background: groupe.couleur, color: 'white',
              borderRadius: '8px', textDecoration: 'none',
              fontSize: '0.9rem', fontWeight: 600,
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              ← Retour aux groupes
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation entre groupes */}
      <section style={{ background: '#f0ebe0', padding: '2.5rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h3 style={{
            fontFamily: 'Playfair Display', fontSize: '1.1rem',
            color: 'var(--brun)', marginBottom: '1.25rem', textAlign: 'center',
          }}>Autres groupes de travail</h3>
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            gap: '10px', justifyContent: 'center',
          }}>
            {groupesTravail
              .filter(g => g.slug !== slug)
              .map(g => (
                <Link key={g.id} to={`/groupes/${g.slug}`} style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '0.5rem 1rem', borderRadius: '24px',
                  background: 'white', textDecoration: 'none',
                  fontSize: '0.82rem', fontWeight: 600,
                  color: g.couleur,
                  border: `1px solid ${g.couleur}44`,
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = g.couleur;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = g.couleur;
                  }}
                >
                  <span>{g.icon}</span> {g.nom}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
