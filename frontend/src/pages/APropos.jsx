export default function APropos() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, var(--vert), #1e3d2a)', padding: '4rem 0', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', padding: '0.35rem 1rem', borderRadius: '20px', fontSize: '0.8rem', marginBottom: '1rem' }}>À propos</div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem,4vw,3rem)', maxWidth: 600 }}>Présentation de l'Alliance pour la Souveraineté Alimentaire – MENA</h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#2a2a2a', marginBottom: '2rem' }}>
            L'Alliance pour la Souveraineté Alimentaire est un <strong>cadre collectif ouvert et inclusif</strong> qui rassemble des organisations de la société civile, des mouvements paysans, des initiatives locales, des chercheur·e·s ainsi que des individus engagés en faveur d'une transformation profonde des systèmes alimentaires.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--gris)', marginBottom: '2rem' }}>
            Elle s'inscrit dans une dynamique de convergence des luttes locales, nationales et internationales visant à garantir le droit des peuples à définir leurs propres politiques agricoles et alimentaires.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--gris)', marginBottom: '2rem' }}>
            Dans un contexte de crises multiples et interconnectées — climatiques, économiques, sociales et écologiques —, l'Alliance se positionne comme un <strong>espace de coordination, de solidarité et d'action collective</strong>. Elle reconnaît que les modèles dominants des systèmes alimentaires, souvent extractifs et inégalitaires, fragilisent les communautés rurales, accentuent les inégalités de genre et menacent la biodiversité ainsi que les ressources naturelles.
          </p>
          <div style={{ background: 'var(--vert-pale)', borderLeft: '4px solid var(--vert)', padding: '1.5rem 2rem', borderRadius: '0 8px 8px 0', margin: '2.5rem 0' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--brun)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              "L'Alliance vise à fédérer les initiatives existantes et à renforcer leur impact en favorisant le partage d'expériences, l'échange de savoirs et la co-construction de solutions adaptées aux réalités locales."
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Principes */}
      <section style={{ background: 'var(--gris-clair)', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2 className="section-title">Vision, Mission et Principes</h2>
          <div className="divider" />

          <div style={{ display: 'grid', gap: '2.5rem', marginTop: '2rem' }}>
            {[
              {
                label: '🔭 Vision',
                texte: "L'Alliance envisage des systèmes alimentaires justes, résilients et durables, fondés sur la souveraineté des peuples. Elle promeut un monde dans lequel les communautés ont un contrôle réel sur leurs systèmes alimentaires, leurs ressources et leurs politiques agricoles, dans le respect de la nature et des principes de justice sociale."
              },
              {
                label: '🎯 Mission',
                texte: "La mission de l'Alliance est de renforcer l'action collective et la coordination entre les acteurs de terrain et les organisations de la société civile afin de promouvoir la souveraineté alimentaire aux niveaux local, régional et international. Elle vise à soutenir l'autonomisation des communautés, à renforcer les réseaux de solidarité et à influencer les politiques publiques en faveur de systèmes alimentaires équitables et durables."
              },
            ].map(item => (
              <div key={item.label} style={{ background: 'white', borderRadius: '8px', padding: '2rem 2.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: 'var(--brun)', marginBottom: '1rem' }}>{item.label}</h3>
                <p style={{ color: '#444', lineHeight: 1.9 }}>{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs stratégiques */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2 className="section-title">Objectifs stratégiques</h2>
          <div className="divider" />
          <p style={{ color: 'var(--gris)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            L'Alliance poursuit plusieurs objectifs stratégiques interconnectés pour transformer les systèmes alimentaires dans la région MENA et au-delà.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              "Renforcer la coordination entre acteurs de la souveraineté alimentaire à différents niveaux",
              "Améliorer la visibilité et l'impact des initiatives de terrain",
              "Promouvoir l'agroécologie et des systèmes alimentaires durables",
              "Défendre un accès équitable à la terre, à l'eau et aux semences",
              "Soutenir les petits producteurs·trices, pêcheurs et pastoralistes",
              "Promouvoir l'égalité de genre et l'inclusion des jeunes",
              "Renforcer la justice climatique et la gestion durable des ressources naturelles",
              "Développer des mécanismes de plaidoyer pour influencer les politiques publiques",
            ].map((obj, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', background: 'var(--ocre-pale)', borderRadius: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--ocre)', fontWeight: 700, fontSize: '1.1rem', minWidth: 28 }}>{String(i+1).padStart(2,'0')}</span>
                <span style={{ color: '#333', fontSize: '0.9rem', lineHeight: 1.7 }}>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plaidoyer */}
      <section style={{ background: 'var(--vert-pale)', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2 className="section-title">Plaidoyer et engagement politique</h2>
          <div className="divider" />
          <p style={{ color: '#444', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            Dans le cadre de son rôle stratégique, l'Alliance soutient activement les actions de plaidoyer aux niveaux local, national et international. Elle cherche à influencer les politiques publiques et à promouvoir des cadres réglementaires favorables à la souveraineté alimentaire, à la justice sociale et à la durabilité écologique.
          </p>
          <p style={{ color: '#444', lineHeight: 1.9 }}>
            L'Alliance est engagée en faveur de l'inclusion et de la diversité, en assurant la participation effective de tous les acteurs concernés — paysan·nes, petits pêcheurs, travailleurs agricoles, pastoralistes, <strong>femmes rurales et jeunes</strong> — souvent marginalisés dans les espaces de gouvernance alimentaire mondiale.
          </p>
        </div>
      </section>
    </div>
  );
}
