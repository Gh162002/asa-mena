import { Link } from 'react-router-dom';
import { paysMembres, principes, typesActivites } from '../data/content.js';
import './Home.css';

function WaveDivider({ flip = false, fill = '#FAF8F3' }) {
  return (
    <div className="wave-divider" style={{ transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z" fill={fill} />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="container hero-content">
          <div className="hero-badge">
            <span>🌾</span> Alliance régionale · 13 pays · Région MENA
          </div>
          <h1>
            Pour la <em>Souveraineté</em><br />
            Alimentaire des Peuples
          </h1>
          <p className="hero-lead">
            Un cadre collectif qui rassemble des organisations de la société civile, des mouvements paysans
            et des initiatives locales pour transformer durablement les systèmes alimentaires de la région MENA.
          </p>
          <div className="hero-cta">
            <Link to="/a-propos" className="btn btn-primary">Découvrir l'Alliance</Link>
            <Link to="/groupes" className="btn btn-outline-white">Groupes de travail</Link>
          </div>
        </div>
        <WaveDivider fill="#FAF8F3" />
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {[
              { val: "13", label: "Pays membres" },
              { val: "7", label: "Groupes de travail" },
              { val: "10+", label: "Thématiques" },
              { val: "∞", label: "Solidarité collective" },
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <span className="stat-val">{s.val}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRESENTATION ===== */}
      <section className="section-padding">
        <div className="container presentation-grid">
          <div className="presentation-text">
            <span className="eyebrow-tag">Qui sommes-nous</span>
            <h2>Une convergence des luttes pour la souveraineté alimentaire</h2>
            <p>
              L'Alliance pour la Souveraineté Alimentaire est un espace de coordination, de solidarité 
              et d'action collective. Elle rassemble des organisations de la société civile, des mouvements 
              paysans, des chercheur·e·s et des individus engagés en faveur d'une transformation profonde 
              des systèmes alimentaires.
            </p>
            <p>
              Dans un contexte de crises multiples — climatiques, économiques, sociales et écologiques — 
              l'Alliance reconnaît que les modèles dominants fragilisent les communautés rurales, 
              accentuent les inégalités de genre et menacent la biodiversité.
            </p>
            <Link to="/a-propos" className="btn btn-primary" style={{marginTop: '8px'}}>
              Notre vision et mission →
            </Link>
          </div>
          <div className="principes-list">
            <h3>Nos principes fondamentaux</h3>
            {principes.map((p, i) => (
              <div key={i} className="principe-item">
                <span className="principe-icon">{p.icon}</span>
                <span>{p.texte}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAYS MEMBRES ===== */}
      <section className="pays-section">
        <WaveDivider flip fill="#2D5A3D" />
        <div className="pays-inner">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow" style={{color: 'var(--ocre)'}}>Membres</span>
              <h2 style={{color: 'white'}}>13 pays unis pour la souveraineté alimentaire</h2>
            </div>
            <div className="pays-grid">
              {paysMembres.map((p) => (
                <div key={p.code} className="pays-card">
                  <span className="pays-flag">{p.emoji}</span>
                  <span className="pays-nom">{p.nom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <WaveDivider fill="#FAF8F3" />
      </section>

      {/* ===== ACTIVITES ===== */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Ce que nous faisons</span>
            <h2>Nos domaines d'action</h2>
            <p>L'Alliance combine action communautaire, production de connaissances, renforcement des capacités et plaidoyer multi-niveaux.</p>
          </div>
          <div className="activites-grid">
            {typesActivites.map((a) => (
              <div key={a.num} className="activite-card">
                <span className="activite-icon">{a.icon}</span>
                <div className="activite-num">{a.num}</div>
                <h3>{a.titre}</h3>
                <p>{a.description}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <Link to="/activites" className="btn btn-primary">Voir toutes nos activités</Link>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Rejoignez l'Alliance</h2>
            <p>Vous êtes une organisation, un mouvement paysan, un chercheur ou un individu engagé ?<br />L'Alliance est un espace ouvert et inclusif.</p>
            <Link to="/contact" className="btn btn-ocre">Nous contacter</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
