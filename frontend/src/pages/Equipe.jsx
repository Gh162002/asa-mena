import { equipe } from '../data/content.js';
import './Equipe.css';

export default function Equipe() {
  return (
    <div className="equipe">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">Les personnes</span>
          <h1>Notre Équipe</h1>
          <p>Des personnes engagées de toute la région MENA</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="equipe-grid">
            {equipe.map((m, i) => (
              <div key={i} className="membre-card">
                <div className="membre-avatar">
                  {m.nom.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="membre-info">
                  <h3>{m.nom}</h3>
                  <span className="membre-poste">{m.poste}</span>
                  <span className="membre-pays">📍 {m.pays}</span>
                  <p>{m.bio}</p>
                  <span className="membre-groupe">{m.groupe}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="equipe-note">
            <p>
              L'Alliance rassemble de nombreux membres et partenaires à travers la région MENA. 
              Cette équipe évolue en permanence au gré des engagements des organisations membres 
              et des groupes de travail actifs.
            </p>
            <a href="/contact" className="btn btn-primary">Nous rejoindre</a>
          </div>
        </div>
      </section>
    </div>
  );
}
