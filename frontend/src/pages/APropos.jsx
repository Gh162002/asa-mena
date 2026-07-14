export default function APropos() {
  return (
    <div style={{ paddingTop: '80px', background: 'var(--blanc)' }}>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #1a3326 0%, #2d5a3d 50%, #3d6b4f 100%)',
        padding: '6rem 0 5rem',
        color: 'white',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,147,58,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,143,110,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'inline-block', background: 'rgba(200,147,58,0.25)', border: '1px solid rgba(200,147,58,0.4)', color: '#f5d08a', padding: '0.35rem 1.1rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            À propos
          </div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2rem,5vw,3.6rem)', maxWidth: 680, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Présentation de l'Alliance pour la Souveraineté Alimentaire – MENA
          </h1>
          <p style={{ opacity: 0.82, maxWidth: 600, lineHeight: 1.85, fontSize: '1.05rem' }}>
            Un cadre collectif ouvert qui rassemble des organisations de la société civile, des mouvements paysans, des chercheur·e·s et des individus engagés pour une transformation profonde des systèmes alimentaires.
          </p>
        </div>
      </section>

      {/* Wave */}
      <div style={{ lineHeight: 0, background: '#1a3326' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--blanc)" />
        </svg>
      </div>

      {/* ── INTRO ── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p style={{ fontSize: '1.12rem', lineHeight: 1.95, color: '#2a2a2a', marginBottom: '1.75rem' }}>
            L'Alliance pour la Souveraineté Alimentaire est un <strong>cadre collectif ouvert et inclusif</strong> qui rassemble des organisations de la société civile, des mouvements paysans, des initiatives locales, des chercheur·e·s ainsi que des individus engagés en faveur d'une transformation profonde des systèmes alimentaires.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.95, color: 'var(--gris)', marginBottom: '1.75rem' }}>
            Elle s'inscrit dans une dynamique de convergence des luttes locales, nationales et internationales visant à garantir le droit des peuples à définir leurs propres politiques agricoles et alimentaires.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.95, color: 'var(--gris)', marginBottom: '2.5rem' }}>
            Dans un contexte de crises multiples et interconnectées — climatiques, économiques, sociales et écologiques —, l'Alliance se positionne comme un <strong>espace de coordination, de solidarité et d'action collective</strong>. Elle reconnaît que les modèles dominants des systèmes alimentaires, souvent extractifs et inégalitaires, fragilisent les communautés rurales, accentuent les inégalités de genre et menacent la biodiversité ainsi que les ressources naturelles.
          </p>

          {/* Quote */}
          <div style={{ position: 'relative', background: 'linear-gradient(135deg, var(--vert-pale), #f0f7f2)', borderLeft: '5px solid var(--vert)', borderRadius: '0 16px 16px 0', padding: '2.5rem 3rem' }}>
            <div style={{ position: 'absolute', top: '1.2rem', left: '2.5rem', fontFamily: 'Georgia, serif', fontSize: '5rem', color: 'var(--vert)', opacity: 0.15, lineHeight: 1, userSelect: 'none' }}>"</div>
            <p style={{ fontStyle: 'italic', fontFamily: 'Playfair Display', color: 'var(--brun)', fontSize: '1.18rem', lineHeight: 1.8, position: 'relative', margin: 0 }}>
              L'Alliance vise à fédérer les initiatives existantes et à renforcer leur impact en favorisant le partage d'expériences, l'échange de savoirs et la co-construction de solutions adaptées aux réalités locales.
            </p>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section style={{ background: 'var(--gris-clair)', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 940 }}>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.2rem', color: 'var(--brun)', marginBottom: '0.5rem', textAlign: 'center' }}>Vision, Mission et Principes</h2>
          <div style={{ width: 60, height: 3, background: 'var(--ocre)', borderRadius: 2, margin: '0.6rem auto 3rem' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {[
              { icon: '🔭', label: 'Vision', color: 'var(--vert)', bg: 'linear-gradient(135deg, #e6f3ea, #f0f9f2)', texte: "L'Alliance envisage des systèmes alimentaires justes, résilients et durables, fondés sur la souveraineté des peuples. Elle promeut un monde dans lequel les communautés ont un contrôle réel sur leurs systèmes alimentaires, leurs ressources et leurs politiques agricoles, dans le respect de la nature et des principes de justice sociale." },
              { icon: '🎯', label: 'Mission', color: 'var(--ocre)', bg: 'linear-gradient(135deg, #fdf3e3, #fef8ee)', texte: "La mission de l'Alliance est de renforcer l'action collective et la coordination entre les acteurs de terrain et les organisations de la société civile afin de promouvoir la souveraineté alimentaire aux niveaux local, régional et international. Elle vise à soutenir l'autonomisation des communautés, à renforcer les réseaux de solidarité et à influencer les politiques publiques en faveur de systèmes alimentaires équitables et durables." },
            ].map(item => (
              <div key={item.label} style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'; }}>
                <div style={{ height: 6, background: item.color }} />
                <div style={{ padding: '2rem 2.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '12px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</div>
                    <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: 'var(--brun)', margin: 0 }}>{item.label}</h3>
                  </div>
                  <p style={{ color: '#444', lineHeight: 1.9, fontSize: '0.97rem' }}>{item.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ lineHeight: 0, background: 'var(--gris-clair)' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,20 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="var(--blanc)" />
        </svg>
      </div>

      {/* ── OBJECTIFS ── */}
      <section style={{ padding: '5rem 0 6rem', background: 'var(--blanc)' }}>
        <div className="container" style={{ maxWidth: 1080 }}>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.2rem', color: 'var(--brun)', marginBottom: '0.5rem', textAlign: 'center' }}>Objectifs stratégiques</h2>
          <div style={{ width: 60, height: 3, background: 'var(--ocre)', borderRadius: 2, margin: '0.6rem auto 1.25rem' }} />
          <p style={{ color: 'var(--gris)', lineHeight: 1.8, textAlign: 'center', maxWidth: 580, margin: '0 auto 3rem' }}>L'Alliance poursuit plusieurs objectifs stratégiques interconnectés pour transformer les systèmes alimentaires dans la région MENA et au-delà.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
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
              <div key={i} style={{ display: 'flex', gap: '1rem', padding: '1.5rem', background: 'var(--ocre-pale)', borderRadius: '16px', alignItems: 'flex-start', border: '1px solid rgba(200,147,58,0.15)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(200,147,58,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <span style={{ color: 'var(--ocre)', fontWeight: 800, fontSize: '1.4rem', minWidth: 36, fontFamily: 'Playfair Display', lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ color: '#333', fontSize: '0.92rem', lineHeight: 1.75 }}>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <div style={{ lineHeight: 0, background: 'var(--blanc)' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,30 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill="var(--vert-pale)" />
        </svg>
      </div>

      {/* ── PLAIDOYER ── */}
      <section style={{ background: 'var(--vert-pale)', padding: '5rem 0 6rem' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.2rem', color: 'var(--brun)', marginBottom: '0.5rem' }}>Plaidoyer et engagement politique</h2>
          <div style={{ width: 60, height: 3, background: 'var(--ocre)', borderRadius: 2, marginBottom: '2rem' }} />
          <p style={{ color: '#444', lineHeight: 1.95, marginBottom: '1.5rem', fontSize: '1rem' }}>
            Dans le cadre de son rôle stratégique, l'Alliance soutient activement les actions de plaidoyer aux niveaux local, national et international. Elle cherche à influencer les politiques publiques et à promouvoir des cadres réglementaires favorables à la souveraineté alimentaire, à la justice sociale et à la durabilité écologique.
          </p>
          <p style={{ color: '#444', lineHeight: 1.95, fontSize: '1rem' }}>
            L'Alliance est engagée en faveur de l'inclusion et de la diversité, en assurant la participation effective de tous les acteurs concernés — paysan·nes, petits pêcheurs, travailleurs agricoles, pastoralistes, <strong>femmes rurales et jeunes</strong> — souvent marginalisés dans les espaces de gouvernance alimentaire mondiale.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '3rem' }}>
            {['Niveau local', 'Niveau national', 'Niveau international'].map((lvl, i) => (
              <div key={lvl} style={{ flex: '1 1 160px', background: 'white', borderRadius: '16px', padding: '1.5rem 1.75rem', boxShadow: '0 2px 12px rgba(61,107,79,0.1)', borderTop: '4px solid var(--vert)', textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{['🌿', '🏛️', '🌍'][i]}</div>
                <div style={{ fontFamily: 'Playfair Display', fontWeight: 700, color: 'var(--brun)', fontSize: '1rem' }}>{lvl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
