import { useState } from 'react';

const SECONDARY_THEMES = [
  { titre: 'Terre', icon: '🏔️', couleur: '#8b5e3c', bgColor: '#fdf6f1', contenu: ["La terre constitue un pilier fondamental des systèmes alimentaires dans la région MENA, mais elle est aujourd'hui soumise à de fortes pressions : urbanisation rapide, spéculation foncière, dégradation des sols, désertification, et transformations des usages agricoles. À ces dynamiques s'ajoutent des processus d'accaparement foncier et de marginalisation des petits producteurs et des communautés rurales.", "Dans plusieurs contextes, l'accès et le contrôle de la terre deviennent des sources de tensions sociales et territoriales, notamment entre usages agricoles, industriels, touristiques et urbains. Cette thématique défend la reconnaissance des droits fonciers des communautés, des systèmes coutumiers et des formes de gestion collective de la terre, en tant que biens communs essentiels à la souveraineté alimentaire."] },
  { titre: 'Eau', icon: '💧', couleur: '#2d7dd2', bgColor: '#f0f7ff', contenu: ["L'eau constitue l'un des enjeux les plus critiques de la région MENA, reconnue comme l'une des zones les plus exposées au stress hydrique au niveau mondial. La disponibilité limitée de l'eau est aggravée par le changement climatique, la surexploitation des nappes phréatiques, la pollution des ressources hydriques et les modèles de gouvernance sectoriels fragmentés.", "Au-delà de la rareté, l'eau est au cœur de conflits d'usage et de territoires : entre agriculture irriguée et agriculture pluviale, entre zones rurales et urbaines, entre secteurs agricoles, industriels et énergétiques, ainsi qu'entre différents acteurs locaux et nationaux autour du contrôle des ressources hydriques.", "Cette thématique défend l'eau comme bien commun vital, non marchandisable, et promeut une gouvernance équitable, transparente et participative, garantissant les droits des communautés rurales à un accès durable à l'eau pour la production alimentaire et la vie."] },
  { titre: 'Semences', icon: '🌱', couleur: '#5a8f6e', bgColor: '#f0f9f3', contenu: ["Les semences constituent le socle de la souveraineté alimentaire et de la biodiversité agricole. Dans la région MENA, les systèmes semenciers paysans sont confrontés à une érosion progressive liée à la standardisation des variétés, à la dépendance aux semences commerciales et aux cadres réglementaires favorisant les circuits industriels.", "Cette thématique défend le droit des agriculteurs à conserver, échanger, sélectionner et améliorer leurs semences, conformément aux principes reconnus par les cadres internationaux sur les droits des paysans. Elle promeut la diversité génétique, la résilience des systèmes agricoles face aux chocs climatiques et la reconnaissance des savoirs locaux comme base de la sélection et de l'innovation paysanne."] },
  { titre: 'Systèmes alimentaires locaux et savoirs paysans', icon: '🧺', couleur: '#c8923a', bgColor: '#fdf8f0', contenu: ["Les systèmes alimentaires locaux constituent une réponse structurante aux vulnérabilités de la région MENA. Ils reposent sur des circuits courts, des marchés territorialisés, des pratiques agroécologiques et des économies alimentaires profondément ancrées dans les communautés.", "La région MENA se distingue également par un patrimoine alimentaire riche et ancien, marqué par des savoir-faire développés autour de la transformation, de la conservation et de la diversification des aliments, adaptés aux conditions arides et semi-arides. Ces savoirs paysans et culinaires, transmis de génération en génération, contribuent à la résilience des communautés, à la gestion durable des ressources naturelles et à la préservation d'une identité alimentaire riche, diversifiée et profondément territorialisée.", "Cette thématique vise à renforcer ces systèmes comme alternatives aux modèles industriels standardisés et dépendants."] },
];

const CONNECTED_THEMES = [
  { titre: 'Justice climatique', icon: '☀️', couleur: '#e07b39', desc: "La région MENA contribue peu aux émissions mondiales de gaz à effet de serre mais figure parmi les régions les plus affectées par leurs impacts. Cette thématique met l'accent sur la justice climatique, les responsabilités différenciées et les impacts disproportionnés sur les communautés rurales, les femmes et les jeunes." },
  { titre: 'Désertification', icon: '🏜️', couleur: '#c8923a', desc: "La désertification constitue une dynamique structurelle dans plusieurs zones de la région MENA, affectant la fertilité des sols, la productivité agricole et la stabilité des systèmes ruraux. Elle résulte de la combinaison de facteurs climatiques et de pressions humaines sur les terres." },
  { titre: 'Biodiversité', icon: '🌿', couleur: '#4a7c59', desc: "La biodiversité agricole et naturelle est un élément central de la résilience des systèmes alimentaires dans la région MENA. Elle est menacée par l'intensification agricole, la perte d'habitats et l'uniformisation des systèmes de production." },
  { titre: 'Pastoralisme', icon: '🐐', couleur: '#9c6644', desc: "Le pastoralisme constitue un système de production adapté aux zones arides et semi-arides et un mode de vie profondément ancré dans plusieurs territoires de la région MENA. Cette thématique défend les droits des communautés pastorales à la mobilité et à l'accès aux parcours traditionnels." },
  { titre: 'Pêche artisanale', icon: '🐟', couleur: '#1e7fa8', desc: "La pêche artisanale constitue dans la région MENA une source essentielle d'alimentation quotidienne pour de nombreuses communautés côtières. Elle est confrontée à des pressions croissantes liées à la pêche industrielle et à la dégradation des écosystèmes marins." },
  { titre: 'Extractivisme et industries extractives', icon: '⛏️', couleur: '#6b4c3b', desc: "Cette thématique analyse les impacts des modèles extractivistes sur les terres, l'eau et les systèmes alimentaires dans la région MENA. Elle met en évidence les dynamiques d'accaparement des ressources naturelles et les conflits socio-environnementaux." },
  { titre: 'Systèmes numériques, données et technologies émergentes', icon: '📡', couleur: '#3b5fa0', desc: "Cette thématique examine les transformations numériques des systèmes alimentaires et leurs implications. Elle met en lumière les risques de concentration du pouvoir technologique et promeut une souveraineté numérique fondée sur les droits des communautés." },
];

function SecondaryCard({ theme }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb', background: 'white', marginBottom: '1rem', boxShadow: open ? '0 6px 24px rgba(0,0,0,0.09)' : '0 2px 8px rgba(0,0,0,0.04)', transition: 'box-shadow 0.2s' }}>
      <div style={{ height: 5, background: theme.couleur }} />
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', background: 'none', border: 'none', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: 48, height: 48, borderRadius: '12px', background: theme.bgColor || 'var(--vert-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>{theme.icon}</div>
          <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.3rem', color: 'var(--brun)', margin: 0 }}>{theme.titre}</h3>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: open ? theme.couleur : 'var(--gris-clair)', color: open ? 'white' : 'var(--gris)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0, transition: 'background 0.2s, color 0.2s, transform 0.25s', transform: open ? 'rotate(180deg)' : 'none' }}>▾</div>
      </button>
      {open && (
        <div style={{ padding: '0 2rem 2rem', borderTop: '1px solid #f0f0f0' }}>
          <div style={{ paddingTop: '1.5rem' }}>
            {theme.contenu.map((para, j) => (
              <p key={j} style={{ color: 'var(--gris)', lineHeight: 1.9, fontSize: '0.97rem', marginBottom: j < theme.contenu.length - 1 ? '1rem' : 0 }}>{para}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Thematiques() {
  return (
    <div style={{ paddingTop: '80px', background: 'var(--blanc)' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #1a3326 0%, #2d5a3d 55%, #3d6b4f 100%)', padding: '6rem 0 5rem', color: 'white', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-60px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,147,58,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '10%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,143,110,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)', backgroundSize: '30px 30px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'inline-block', background: 'rgba(200,147,58,0.25)', border: '1px solid rgba(200,147,58,0.4)', color: '#f5d08a', padding: '0.35rem 1.1rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Les thématiques</div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2rem,5vw,3.4rem)', marginBottom: '2rem', maxWidth: 720, lineHeight: 1.2 }}>Thématiques de l'Alliance (région MENA)</h1>
          <p style={{ opacity: 0.88, maxWidth: 760, lineHeight: 1.9, fontSize: '1rem', marginBottom: '1.25rem' }}>L'Alliance inscrit son action dans le cadre de la souveraineté alimentaire, entendue comme un droit fondamental des peuples à définir leurs systèmes alimentaires, à contrôler leurs ressources naturelles et à construire des modèles de production, de transformation et de consommation justes et durables.</p>
          <p style={{ opacity: 0.8, maxWidth: 760, lineHeight: 1.9, fontSize: '0.97rem', marginBottom: '1.25rem' }}>Dans la région MENA, cette approche prend une dimension particulière en raison de la combinaison de plusieurs facteurs structurels : une forte dépendance aux importations alimentaires, une raréfaction et une surexploitation des ressources naturelles, notamment de l'eau et des sols, une dégradation accélérée des écosystèmes, ainsi que des contextes socio-politiques marqués par des inégalités d'accès aux ressources.</p>
          <p style={{ opacity: 0.8, maxWidth: 760, lineHeight: 1.9, fontSize: '0.97rem' }}>Dans ce contexte, la souveraineté alimentaire ne peut être dissociée des questions de justice territoriale, de gouvernance des communs, de droits des communautés et de résilience face aux crises climatiques, économiques et géopolitiques.</p>
        </div>
      </section>

      {/* Wave */}
      <div style={{ lineHeight: 0, background: '#1a3326' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--blanc)" />
        </svg>
      </div>

      {/* ── THÉMATIQUE PRINCIPALE ── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.2rem', color: 'var(--brun)', marginBottom: '0.5rem' }}>Thématique principale</h2>
          <div style={{ width: 60, height: 3, background: 'var(--ocre)', borderRadius: 2, marginBottom: '2.5rem' }} />
          <div style={{ background: 'linear-gradient(135deg, var(--vert-pale) 0%, #f7fdf9 50%, var(--ocre-pale) 100%)', borderRadius: '20px', padding: '3.5rem', border: '1px solid rgba(61,107,79,0.15)', boxShadow: '0 4px 32px rgba(61,107,79,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
              <div style={{ width: 64, height: 64, borderRadius: '16px', background: 'white', boxShadow: '0 2px 12px rgba(61,107,79,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0 }}>🌾</div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--vert)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Cadre politique central</div>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.7rem', color: 'var(--brun)', margin: 0 }}>Souveraineté alimentaire</h3>
              </div>
            </div>
            <p style={{ lineHeight: 1.95, color: '#333', fontSize: '1.05rem', marginBottom: '1.25rem' }}>La souveraineté alimentaire constitue le cadre politique central de l'Alliance dans la région MENA. Elle affirme le droit des peuples et des communautés à définir leurs politiques agricoles et alimentaires, à protéger leurs systèmes alimentaires locaux, à préserver leurs semences et leurs savoirs, et à garantir un accès équitable aux ressources naturelles.</p>
            <p style={{ lineHeight: 1.95, color: 'var(--gris)', fontSize: '1rem', margin: 0 }}>Elle s'oppose aux modèles de dépendance structurelle fondés sur la concentration des chaînes alimentaires, la standardisation des systèmes agricoles et la domination des marchés internationaux. Elle promeut des systèmes alimentaires ancrés dans les territoires, fondés sur l'agroécologie, la diversité biologique et culturelle, et la justice sociale.</p>
          </div>
        </div>
      </section>

      {/* ── THÈMES SECONDAIRES ── */}
      <section style={{ padding: '0 0 5rem', background: 'var(--blanc)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.2rem', color: 'var(--brun)', marginBottom: '0.5rem' }}>Thèmes secondaires</h2>
          <div style={{ width: 60, height: 3, background: 'var(--ocre)', borderRadius: 2, marginBottom: '0.75rem' }} />
          <p style={{ color: 'var(--gris)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>Cliquez sur un thème pour lire le contenu détaillé.</p>
          <div>{SECONDARY_THEMES.map(t => <SecondaryCard key={t.titre} theme={t} />)}</div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ lineHeight: 0, background: 'var(--blanc)' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,20 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="var(--gris-clair)" />
        </svg>
      </div>

      {/* ── THÉMATIQUES CONNEXES ── */}
      <section style={{ background: 'var(--gris-clair)', padding: '5rem 0 6rem' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.2rem', color: 'var(--brun)', marginBottom: '0.5rem', textAlign: 'center' }}>Thématiques connexes</h2>
          <div style={{ width: 60, height: 3, background: 'var(--ocre)', borderRadius: 2, margin: '0.6rem auto 3rem' }} />
          <div className="connected-cols" style={{ columns: '300px 3', gap: '1.5rem' }}>
            {CONNECTED_THEMES.map(s => (
              <div key={s.titre} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', marginBottom: '1.5rem', breakInside: 'avoid', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'; }}>
                <div style={{ height: 5, background: s.couleur }} />
                <div style={{ padding: '1.5rem 1.75rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                  <h4 style={{ fontFamily: 'Playfair Display', color: 'var(--brun)', marginBottom: '0.75rem', fontSize: '1.1rem', lineHeight: 1.35 }}>{s.titre}</h4>
                  <p style={{ color: 'var(--gris)', fontSize: '0.88rem', lineHeight: 1.85, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
