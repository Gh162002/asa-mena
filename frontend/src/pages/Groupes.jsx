import { groupesDeTravail } from '../data/content.js';
import './Groupes.css';

export default function Groupes() {
  return (
    <div className="groupes">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">Organisation</span>
          <h1>Groupes de travail</h1>
          <p>Des espaces thématiques et stratégiques pour renforcer la coordination et l'action collective</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="groupes-intro">
            <p>
              Les groupes de travail constituent les espaces thématiques et stratégiques de l'Alliance. 
              Ils permettent de renforcer la coordination entre les membres, favoriser la participation 
              des différents acteurs des systèmes alimentaires, produire des connaissances, porter des 
              actions de plaidoyer et développer des positions communes.
            </p>
            <p>
              Ces groupes fonctionnent comme des espaces de mobilisation, d'échange, de co-construction 
              et d'action collective, en lien avec les priorités de l'Alliance.
            </p>
          </div>

          <div className="groupes-grid">
            {groupesDeTravail.map((g) => (
              <div key={g.id} className="groupe-card">
                <div className="groupe-header" style={{ borderColor: g.couleur }}>
                  <span className="groupe-icon">{g.icon}</span>
                  <div className="groupe-num">Groupe {g.id}</div>
                  <h2>{g.nom}</h2>
                </div>
                <div className="groupe-body">
                  <p>{g.description}</p>
                  <div className="groupe-themes">
                    <strong>Domaines d'action :</strong>
                    <div className="themes-list">
                      {g.themes.map((t, i) => (
                        <span key={i} className="theme-tag" style={{ background: g.couleur + '22', color: g.couleur, border: `1px solid ${g.couleur}44` }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT CA FONCTIONNE */}
      <section className="fonctionnement-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Structure</span>
            <h2>Comment fonctionnent les groupes ?</h2>
          </div>
          <div className="fonct-grid">
            {[
              { icon: "🔗", titre: "Coordination et cohérence", desc: "Les groupes assurent la liaison entre les dynamiques locales et les enjeux régionaux et internationaux." },
              { icon: "🗺️", titre: "Représentation dans les espaces régionaux", desc: "Ils constituent des mécanismes de représentation et d'engagement de l'Alliance dans les plateformes politiques et réseaux thématiques." },
              { icon: "💡", titre: "Production de connaissances", desc: "Chaque groupe produit des analyses, positions communes et ressources au service du plaidoyer." },
              { icon: "🤝", titre: "Participation inclusive", desc: "Ouverts à l'ensemble des membres selon leur domaine d'expertise et d'engagement." },
            ].map((f, i) => (
              <div key={i} className="fonct-item">
                <span className="fonct-icon">{f.icon}</span>
                <h3>{f.titre}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
