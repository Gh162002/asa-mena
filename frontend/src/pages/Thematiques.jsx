export default function Thematiques() {
  return (
    <div style={{ paddingTop: '80px' }}>

      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #1e3d2a, var(--vert))', padding: '4rem 0', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', padding: '0.35rem 1rem', borderRadius: '20px', fontSize: '0.8rem', marginBottom: '1rem' }}>
            Rubrique : Les thématiques
          </div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem,4vw,3rem)', marginBottom: '1.5rem' }}>
            Thématiques de l'Alliance (région MENA)
          </h1>
          <p style={{ opacity: 0.9, maxWidth: 750, lineHeight: 1.9, fontSize: '1rem', marginBottom: '1rem' }}>
            L'Alliance inscrit son action dans le cadre de la souveraineté alimentaire, entendue comme un droit fondamental des peuples à définir leurs systèmes alimentaires, à contrôler leurs ressources naturelles et à construire des modèles de production, de transformation et de consommation justes et durables.
          </p>
          <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1rem' }}>
            Dans la région MENA, cette approche prend une dimension particulière en raison de la combinaison de plusieurs facteurs structurels : une forte dépendance aux importations alimentaires, une raréfaction et une surexploitation des ressources naturelles, notamment de l'eau et des sols, une dégradation accélérée des écosystèmes, ainsi que des contextes socio-politiques marqués par des inégalités d'accès aux ressources et, dans certains cas, par des tensions ou conflits liés à leur gouvernance.
          </p>
          <p style={{ opacity: 0.85, maxWidth: 750, lineHeight: 1.9, fontSize: '0.95rem' }}>
            Dans ce contexte, la souveraineté alimentaire ne peut être dissociée des questions de justice territoriale, de gouvernance des communs, de droits des communautés et de résilience face aux crises climatiques, économiques et géopolitiques.
          </p>
        </div>
      </section>

      {/* Thématique principale */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <h2 className="section-title">Thématique principale : Souveraineté alimentaire</h2>
          <div className="divider" />
          <div style={{ background: 'linear-gradient(135deg, var(--vert-pale), var(--ocre-pale))', borderRadius: '12px', padding: '3rem', border: '1px solid #d4e8d8' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌾</div>
            <p style={{ lineHeight: 1.9, color: '#333', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
              La souveraineté alimentaire constitue le cadre politique central de l'Alliance dans la région MENA. Elle affirme le droit des peuples et des communautés à définir leurs politiques agricoles et alimentaires, à protéger leurs systèmes alimentaires locaux, à préserver leurs semences et leurs savoirs, et à garantir un accès équitable aux ressources naturelles.
            </p>
            <p style={{ lineHeight: 1.9, color: 'var(--gris)', fontSize: '1rem' }}>
              Elle s'oppose aux modèles de dépendance structurelle fondés sur la concentration des chaînes alimentaires, la standardisation des systèmes agricoles et la domination des marchés internationaux. Elle promeut des systèmes alimentaires ancrés dans les territoires, fondés sur l'agroécologie, la diversité biologique et culturelle, et la justice sociale.
            </p>
          </div>
        </div>
      </section>

      {/* Thèmes secondaires */}
      <section style={{ padding: '0 0 5rem', background: 'var(--blanc)' }}>
        <div className="container">
          <h2 className="section-title">Thèmes secondaires</h2>
          <div className="divider" />

          {[
            {
              titre: 'Terre',
              icon: '🏔️',
              couleur: '#8b5e3c',
              contenu: [
                "La terre constitue un pilier fondamental des systèmes alimentaires dans la région MENA, mais elle est aujourd'hui soumise à de fortes pressions : urbanisation rapide, spéculation foncière, dégradation des sols, désertification, et transformations des usages agricoles. À ces dynamiques s'ajoutent des processus d'accaparement foncier et de marginalisation des petits producteurs et des communautés rurales.",
                "Dans plusieurs contextes, l'accès et le contrôle de la terre deviennent des sources de tensions sociales et territoriales, notamment entre usages agricoles, industriels, touristiques et urbains. Cette thématique défend la reconnaissance des droits fonciers des communautés, des systèmes coutumiers et des formes de gestion collective de la terre, en tant que biens communs essentiels à la souveraineté alimentaire."
              ]
            },
            {
              titre: 'Eau',
              icon: '💧',
              couleur: '#2d7dd2',
              contenu: [
                "L'eau constitue l'un des enjeux les plus critiques de la région MENA, reconnue comme l'une des zones les plus exposées au stress hydrique au niveau mondial. La disponibilité limitée de l'eau est aggravée par le changement climatique, la surexploitation des nappes phréatiques, la pollution des ressources hydriques et les modèles de gouvernance sectoriels fragmentés.",
                "Au-delà de la rareté, l'eau est au cœur de conflits d'usage et de territoires : entre agriculture irriguée et agriculture pluviale, entre zones rurales et urbaines, entre secteurs agricoles, industriels et énergétiques, ainsi qu'entre différents acteurs locaux et nationaux autour du contrôle des ressources hydriques. Ces tensions peuvent se traduire par des inégalités structurelles d'accès à l'eau et par une pression accrue sur les communautés rurales et agricoles.",
                "Cette thématique défend l'eau comme bien commun vital, non marchandisable, et promeut une gouvernance équitable, transparente et participative, garantissant les droits des communautés rurales à un accès durable à l'eau pour la production alimentaire et la vie."
              ]
            },
            {
              titre: 'Semences',
              icon: '🌱',
              couleur: '#5a8f6e',
              contenu: [
                "Les semences constituent le socle de la souveraineté alimentaire et de la biodiversité agricole. Dans la région MENA, les systèmes semenciers paysans sont confrontés à une érosion progressive liée à la standardisation des variétés, à la dépendance aux semences commerciales et aux cadres réglementaires favorisant les circuits industriels.",
                "Cette thématique défend le droit des agriculteurs à conserver, échanger, sélectionner et améliorer leurs semences, conformément aux principes reconnus par les cadres internationaux sur les droits des paysans. Elle promeut la diversité génétique, la résilience des systèmes agricoles face aux chocs climatiques et la reconnaissance des savoirs locaux comme base de la sélection et de l'innovation paysanne."
              ]
            },
            {
              titre: 'Systèmes alimentaires locaux et savoirs paysans',
              icon: '🧺',
              couleur: '#c8923a',
              contenu: [
                "Les systèmes alimentaires locaux constituent une réponse structurante aux vulnérabilités de la région MENA. Ils reposent sur des circuits courts, des marchés territorialisés, des pratiques agroécologiques et des économies alimentaires profondément ancrées dans les communautés.",
                "La région MENA se distingue également par un patrimoine alimentaire riche et ancien, marqué par des savoir-faire développés autour de la transformation, de la conservation et de la diversification des aliments, adaptés aux conditions arides et semi-arides. Ces savoirs paysans et culinaires, transmis de génération en génération, contribuent à la résilience des communautés, à la gestion durable des ressources naturelles et à la préservation d'une identité alimentaire riche, diversifiée et profondément territorialisée.",
                "Cette thématique vise à renforcer ces systèmes comme alternatives aux modèles industriels standardisés et dépendants."
              ]
            },
          ].map((theme, i) => (
            <div key={theme.titre} style={{ marginBottom: '2.5rem', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
              <div style={{ height: 6, background: theme.couleur }} />
              <div style={{ padding: '2rem 2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '2rem' }}>{theme.icon}</span>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.4rem', color: 'var(--brun)', margin: 0 }}>{theme.titre}</h3>
                </div>
                {theme.contenu.map((para, j) => (
                  <p key={j} style={{ color: 'var(--gris)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: j < theme.contenu.length - 1 ? '1rem' : 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thématiques connexes */}
      <section style={{ background: 'var(--gris-clair)', padding: '5rem 0' }}>
        <div className="container">
          <h2 className="section-title">Thématiques connexes</h2>
          <div className="divider" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                titre: 'Justice climatique',
                icon: '☀️',
                couleur: '#e07b39',
                desc: "La région MENA contribue peu aux émissions mondiales de gaz à effet de serre mais figure parmi les régions les plus affectées par leurs impacts. Cette thématique met l'accent sur la justice climatique, les responsabilités différenciées et les impacts disproportionnés sur les communautés rurales, les femmes et les jeunes, notamment en matière de perte de moyens de subsistance et de dégradation des ressources naturelles."
              },
              {
                titre: 'Désertification',
                icon: '🏜️',
                couleur: '#c8923a',
                desc: "La désertification constitue une dynamique structurelle dans plusieurs zones de la région MENA, affectant la fertilité des sols, la productivité agricole et la stabilité des systèmes ruraux. Elle résulte de la combinaison de facteurs climatiques et de pressions humaines sur les terres. Cette thématique promeut des réponses basées sur l'agroécologie, la restauration des terres et la gestion durable des écosystèmes arides."
              },
              {
                titre: 'Biodiversité',
                icon: '🌿',
                couleur: '#4a7c59',
                desc: "La biodiversité agricole et naturelle est un élément central de la résilience des systèmes alimentaires dans la région MENA. Elle est menacée par l'intensification agricole, la perte d'habitats et l'uniformisation des systèmes de production. Cette thématique vise la protection des écosystèmes, des espèces cultivées et des ressources génétiques locales."
              },
              {
                titre: 'Pastoralisme',
                icon: '🐐',
                couleur: '#9c6644',
                desc: "Le pastoralisme constitue un système de production adapté aux zones arides et semi-arides et un mode de vie profondément ancré dans plusieurs territoires de la région MENA. Cette thématique défend les droits des communautés pastorales, y compris leur droit à la mobilité et à l'accès non entravé aux parcours traditionnels, et promeut la reconnaissance de leur rôle dans la gestion durable des territoires et la sécurité alimentaire."
              },
              {
                titre: 'Pêche artisanale',
                icon: '🐟',
                couleur: '#1e7fa8',
                desc: "La pêche artisanale constitue dans la région MENA une source essentielle d'alimentation quotidienne pour de nombreuses communautés côtières. Elle est confrontée à des pressions croissantes liées à la pêche industrielle, à la dégradation des écosystèmes marins et à la transformation des zones côtières. Cette thématique défend la reconnaissance de la pêche artisanale comme pilier de la souveraineté alimentaire et les droits des communautés de pêcheurs."
              },
              {
                titre: 'Extractivisme et industries extractives',
                icon: '⛏️',
                couleur: '#6b4c3b',
                desc: "Cette thématique analyse les impacts des modèles extractivistes sur les terres, l'eau et les systèmes alimentaires dans la région MENA. Elle met en évidence les dynamiques d'accaparement des ressources naturelles, les conflits socio-environnementaux et les déséquilibres générés par les industries minières, énergétiques et agro-industrielles sur les territoires ruraux."
              },
              {
                titre: 'Systèmes numériques, données et technologies émergentes',
                icon: '📡',
                couleur: '#3b5fa0',
                desc: "Cette thématique examine les transformations numériques des systèmes alimentaires et leurs implications sur les communautés rurales. Dans la continuité des analyses critiques développées par des organisations comme ETC Group, elle met en lumière les risques de concentration du pouvoir technologique, de capture des données agricoles et de dépendance accrue des communautés aux infrastructures numériques. Elle promeut une souveraineté numérique fondée sur les droits des communautés, la transparence et la gouvernance éthique des technologies."
              },
            ].map(s => (
              <div key={s.titre} style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}>
                <div style={{ height: 5, background: s.couleur }} />
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.6rem' }}>{s.icon}</div>
                  <h4 style={{ fontFamily: 'Playfair Display', color: 'var(--brun)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>{s.titre}</h4>
                  <p style={{ color: 'var(--gris)', fontSize: '0.88rem', lineHeight: 1.8 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
