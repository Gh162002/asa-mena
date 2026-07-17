export const paysMembers = [
  { nom: "Tunisie",    emoji: "🇹🇳", code: "tn" },
  { nom: "Algérie",   emoji: "🇩🇿", code: "dz" },
  { nom: "Maroc",     emoji: "🇲🇦", code: "ma" },
  { nom: "Égypte",    emoji: "🇪🇬", code: "eg" },
  { nom: "Libye",     emoji: "🇱🇾", code: "ly" },
  { nom: "Mauritanie",emoji: "🇲🇷", code: "mr" },
  { nom: "Sudan",     emoji: "🇸🇩", code: "sd" },
  { nom: "Liban",     emoji: "🇱🇧", code: "lb" },
  { nom: "Yémen",     emoji: "🇾🇪", code: "ye" },
  { nom: "Palestine", emoji: "🇵🇸", code: "ps" },
  { nom: "Jordanie",  emoji: "🇯🇴", code: "jo" },
  { nom: "Irak",      emoji: "🇮🇶", code: "iq" },
  { nom: "Syrie",     emoji: "🇸🇾", code: "sy" },
];

export const groupesTravail = [
  {
    id: 1,
    slug: "jeunes",
    nom: "Groupe Jeunes",
    icon: "🌱",
    couleur: "#3d8c6e",
    description: "Le Groupe Jeunes vise à renforcer la participation et le leadership des jeunes dans les systèmes alimentaires et les processus de gouvernance liés à la souveraineté alimentaire.",
    descriptionComplete: "Le Groupe Jeunes vise à renforcer la participation et le leadership des jeunes dans les systèmes alimentaires et les processus de gouvernance liés à la souveraineté alimentaire. Il favorise l'engagement intergénérationnel, la transmission des savoirs, l'accès à la terre, à l'eau, aux semences et aux opportunités économiques, tout en soutenant les initiatives portées par les jeunes dans les domaines de l'agroécologie, de la mobilisation citoyenne, du plaidoyer et de l'innovation communautaire.",
    themes: ["Agroécologie", "Leadership jeune", "Accès aux ressources", "Plaidoyer", "Innovation communautaire"],
    images: ["/images/groupes/jeunes-1.jpeg", "/images/groupes/jeunes-2.jpeg"],
  },
  {
    id: 2,
    slug: "femmes",
    nom: "Groupe Femmes",
    icon: "👩‍🌾",
    couleur: "#c2607a",
    description: "Le Groupe Femmes œuvre pour renforcer le rôle, la représentation et le pouvoir décisionnel des femmes dans les systèmes alimentaires, la gestion des ressources naturelles et les espaces de gouvernance.",
    descriptionComplete: "Le Groupe Femmes œuvre pour renforcer le rôle, la représentation et le pouvoir décisionnel des femmes dans les systèmes alimentaires, la gestion des ressources naturelles et les espaces de gouvernance. Il travaille sur les droits fonciers, l'accès aux ressources productives, la reconnaissance du travail des femmes rurales, la justice climatique, la souveraineté semencière et la promotion d'approches féministes et inclusives dans les politiques agricoles et alimentaires.",
    themes: ["Droits fonciers", "Ressources productives", "Justice climatique", "Souveraineté semencière", "Égalité de genre"],
    images: ["/images/groupes/femmes-1.jpeg", "/images/groupes/femmes-2.jpeg", "/images/groupes/femmes-3.jpeg", "/images/groupes/femmes-4.jpeg", "/images/groupes/femmes-5.jpeg"],
  },
  {
    id: 3,
    slug: "recherche",
    nom: "Groupe Recherche",
    icon: "🔬",
    couleur: "#5a6eb8",
    description: "Le Groupe Recherche soutient la production, la valorisation et la diffusion de connaissances au service de la souveraineté alimentaire.",
    descriptionComplete: "Le Groupe Recherche soutient la production, la valorisation et la diffusion de connaissances au service de la souveraineté alimentaire. Il favorise la recherche participative, la documentation des savoirs locaux, l'analyse des politiques publiques, la collecte de données communautaires et le développement d'arguments scientifiques pour renforcer le plaidoyer sur les questions liées à la terre, à l'eau, aux semences, à l'agroécologie et aux systèmes alimentaires territorialisés.",
    themes: ["Recherche participative", "Savoirs locaux", "Politiques publiques", "Données communautaires", "Plaidoyer scientifique"],
    images: ["/images/groupes/recherche-1.jpeg", "/images/groupes/recherche-2.jpeg", "/images/groupes/recherche-3.jpeg", "/images/groupes/recherche-4.jpeg"],
  },
  {
    id: 4,
    slug: "syndicalistes",
    nom: "Groupe Syndicalistes et Petits Agriculteurs",
    icon: "🤝",
    couleur: "#b8832a",
    description: "Ce groupe rassemble les organisations paysannes, syndicales et les petits producteurs afin de défendre les droits des agriculteurs et renforcer leur capacité d'organisation et d'influence.",
    descriptionComplete: "Ce groupe rassemble les organisations paysannes, syndicales et les petits producteurs afin de défendre les droits des agriculteurs et renforcer leur capacité d'organisation et d'influence. Il travaille sur les droits des producteurs, l'accès aux ressources naturelles, les politiques agricoles, les conditions de travail, les marchés locaux, les systèmes semenciers paysans et la défense des modèles agricoles durables et équitables.",
    themes: ["Droits des producteurs", "Ressources naturelles", "Marchés locaux", "Semences paysannes", "Conditions de travail"],
    images: ["/images/groupes/syndicalistes-1.jpeg", "/images/groupes/syndicalistes-2.jpeg", "/images/groupes/syndicalistes-3.jpeg", "/images/groupes/syndicalistes-4.jpeg"],
  },
  {
    id: 5,
    slug: "peche",
    nom: "Groupe Pêche",
    icon: "🐟",
    couleur: "#1e7fa8",
    description: "Le Groupe Pêche promeut les droits et les intérêts des pêcheurs artisanaux et des communautés côtières.",
    descriptionComplete: "Le Groupe Pêche promeut les droits et les intérêts des pêcheurs artisanaux et des communautés côtières. Il agit pour la protection des ressources aquatiques, l'accès équitable aux zones de pêche, la préservation des savoirs traditionnels, la justice environnementale et la reconnaissance de la pêche artisanale comme pilier essentiel de la souveraineté alimentaire et des économies locales.",
    themes: ["Pêche artisanale", "Ressources aquatiques", "Savoirs traditionnels", "Justice environnementale", "Communautés côtières"],
    images: ["/images/groupes/peche-1.jpeg"],
  },
  {
    id: 6,
    slug: "data",
    nom: "Groupe Data",
    icon: "💻",
    couleur: "#4a6fa5",
    description: "Le Groupe Data travaille sur la gouvernance, la souveraineté et la justice des données dans les systèmes alimentaires.",
    descriptionComplete: "Le Groupe Data travaille sur la gouvernance, la souveraineté et la justice des données dans les systèmes alimentaires. Il examine les enjeux liés à la numérisation agricole, à la protection des données communautaires, aux droits sur les données, aux plateformes numériques, aux technologies émergentes et aux risques de concentration du contrôle de l'information. Le groupe soutient également la production et l'utilisation éthique des données au service des communautés et du plaidoyer.",
    themes: ["Gouvernance des données", "Numérisation agricole", "Droits numériques", "Technologies émergentes", "Souveraineté numérique"],
    images: ["/images/groupes/data-1.jpeg"],
  },
  {
    id: 7,
    slug: "consommateurs",
    nom: "Groupe Consommateurs, Santé et Systèmes Alimentaires Durables",
    icon: "🥗",
    couleur: "#6aaa64",
    description: "Ce groupe œuvre pour renforcer le rôle des consommateurs et des citoyens dans la transformation des systèmes alimentaires vers des modèles plus sains, équitables et durables.",
    descriptionComplete: "Ce groupe œuvre pour renforcer le rôle des consommateurs et des citoyens dans la transformation des systèmes alimentaires vers des modèles plus sains, équitables et durables. Il travaille sur les enjeux liés à la qualité et à la sécurité alimentaire, à la réduction de l'utilisation des pesticides et des intrants chimiques, à la promotion de pratiques agroécologiques, à la sensibilisation sur les impacts sanitaires et environnementaux des systèmes alimentaires, ainsi qu'au renforcement des liens entre producteurs et consommateurs. Le groupe soutient également le plaidoyer pour des politiques alimentaires favorisant des systèmes de production respectueux de la santé humaine, de l'environnement et des droits des communautés.",
    themes: ["Sécurité alimentaire", "Réduction pesticides", "Agroécologie", "Santé & environnement", "Liens producteurs-consommateurs"],
    images: ["/images/groupes/consommateurs-1.jpeg", "/images/groupes/consommateurs-2.jpeg", "/images/groupes/consommateurs-3.jpeg"],
  },
];

export const thematiques = [
  { titre: "Souveraineté alimentaire", icon: "🌾", couleur: "#3d6b4f", description: "Le cadre politique central de l'Alliance. Elle affirme le droit des peuples à définir leurs politiques agricoles, à protéger leurs systèmes locaux et à garantir un accès équitable aux ressources naturelles." },
  { titre: "Terre", icon: "🏔️", couleur: "#8b5e3c", description: "Défense des droits fonciers des communautés face à l'urbanisation, la spéculation et l'accaparement foncier. La terre comme bien commun essentiel à la souveraineté alimentaire." },
  { titre: "Eau", icon: "💧", couleur: "#2d7dd2", description: "L'eau comme bien commun vital dans la région MENA, l'une des plus exposées au stress hydrique mondial. Gouvernance équitable et participative des ressources hydriques." },
  { titre: "Semences", icon: "🌱", couleur: "#5a8f6e", description: "Défense du droit des agriculteurs à conserver, échanger et améliorer leurs semences. Promotion de la diversité génétique et des savoirs paysans face aux semences commerciales." },
  { titre: "Justice climatique", icon: "☀️", couleur: "#e07b39", description: "La région MENA contribue peu aux émissions mondiales mais est la plus affectée. Focus sur les responsabilités différenciées et les impacts sur les communautés rurales." },
  { titre: "Pêche artisanale", icon: "🐟", couleur: "#1e7fa8", description: "Reconnaissance de la pêche artisanale comme pilier de la souveraineté alimentaire et du patrimoine culturel des communautés côtières de la région MENA." },
  { titre: "Pastoralisme", icon: "🐐", couleur: "#9c6644", description: "Défense des droits des communautés pastorales à la mobilité et à l'accès aux parcours traditionnels dans les zones arides et semi-arides de la région." },
  { titre: "Biodiversité", icon: "🌿", couleur: "#4a7c59", description: "Protection des écosystèmes, des espèces cultivées et des ressources génétiques locales face à l'intensification agricole et la perte d'habitats naturels." },
];

export const activitesData = [
  {
    id: 1,
    titre: "De quelle résilience avons-nous besoin ?",
    date: "2026-06-01",
    lieu: "Région MENA (Tunisie, Maroc, Algérie, Palestine…)",
    categorie: "Publication",
    langue: "ar,fr,en",
    groupesImpliques: "Groupe Jeunes ASA-MENA",
    groupeSlug: "jeunes",
    thematiques: "Souveraineté alimentaire, Justice climatique, Systèmes alimentaires, Résilience",
    pdfUrl: "/activites/resilience-groupe-jeunes.pdf",
    description:
      "Le Groupe Jeunes de l'Alliance pour la Souveraineté Alimentaire MENA a produit une lecture critique des systèmes alimentaires et du concept de résilience. Ce texte analyse la situation en Tunisie, dans la région MENA et en Palestine, et appelle à une transformation profonde plutôt qu'à une simple adaptation aux crises.",
    contexte:
      "Dans un contexte de crises multiples — climatiques, économiques et géopolitiques — le concept de « résilience » est devenu omniprésent dans les conférences internationales. Le Groupe Jeunes de l'Alliance a engagé une réflexion critique sur ce concept, en interrogeant à qui il profite réellement et ce qu'il masque.",
    resultats:
      "Document publié en 3 langues (arabe, français, anglais). Diffusé dans les réseaux de l'Alliance et auprès des organisations membres de la région MENA.",
    contenuComplet:
      `**De quelle résilience avons-nous besoin ?**

**Tunisie, région MENA : au-delà de la survie, la transformation**

« Le blé pousse, l'olivier résiste, la mer nourrit. Pourtant, des femmes, des hommes et des enfants ont faim. Quelle est donc cette résilience qui accepte la faim comme horizon et fait de la survie une victoire ? »

**Mot d'ordre ou illusion politique ?**

Dans les conférences internationales, les rapports des organisations multilatérales, les programmes de développement et les stratégies gouvernementales, la « résilience » s'est imposée comme le vocabulaire incontournable de notre époque. Les systèmes alimentaires doivent être résilients. Les communautés rurales doivent être résilientes. Les territoires doivent apprendre à devenir résilients face aux crises climatiques, économiques ou géopolitiques.

Mais derrière l'apparente évidence du terme se cache une question essentielle : de quelle résilience parle-t-on réellement ?

Car il existe une différence fondamentale entre renforcer la capacité des peuples à faire face aux crises et leur demander de s'adapter indéfiniment à un ordre qui produit ces crises. Trop souvent, la résilience devient le langage poli de la résignation.

Elle demande aux petits producteurs tunisiens de s'adapter à la raréfaction de l'eau sans interroger les politiques qui organisent sa répartition. Elle demande aux pêcheurs artisanaux mauritaniens de faire preuve d'ingéniosité face à l'épuisement des ressources marines sans remettre en cause la pêche industrielle qui les accapare. Elle invite les agriculteurs de la région à s'accommoder de leur dépendance aux intrants importés, aux semences brevetées ou aux marchés mondiaux volatils, comme si ces réalités relevaient d'un destin naturel plutôt que de choix économiques et politiques.

Or la faim n'est jamais seulement une catastrophe naturelle. Elle est souvent le produit de rapports de pouvoir, d'inégalités accumulées et de décisions prises loin des territoires qui en subissent les conséquences.

**La Tunisie : quand la crise devient structure**

La Tunisie illustre avec une particulière acuité cette contradiction. La Tunisie exporte son huile d'olive vers les marchés les plus exigeants du monde alors que certaines régions rurales peinent à garantir une alimentation suffisante et diversifiée à leur propre population.

Cette situation n'est pas simplement le résultat du changement climatique. Elle révèle une question plus profonde : celle de la répartition des ressources, des richesses et du pouvoir.

Le manque d'eau est réel. Mais l'inégale distribution de cette eau l'est tout autant. La pression de la dette est réelle. Mais les choix politiques qu'elle impose le sont aussi.

La vulnérabilité alimentaire ne naît pas uniquement des sécheresses. Elle naît également de décennies de politiques qui ont fragilisé les agricultures paysannes, affaibli les mécanismes publics de régulation et renforcé la dépendance aux marchés internationaux.

Demander aujourd'hui à ces communautés d'être plus résilientes sans transformer les conditions qui produisent leur vulnérabilité revient à leur demander de porter seules le poids d'un système qu'elles n'ont pas construit.

**Une géopolitique de la dépendance alimentaire**

Dans l'ensemble de la région MENA, la dépendance alimentaire est devenue l'une des expressions les plus visibles d'un déséquilibre historique. De Rabat au Caire, d'Alger à Tunis, les pays importent une part considérable de leurs besoins céréaliers. Cette dépendance n'est ni naturelle ni inévitable. Elle est le résultat d'une longue histoire où les structures agricoles ont été progressivement réorientées vers les besoins des marchés extérieurs au détriment des systèmes alimentaires locaux.

La crise provoquée par la guerre en Ukraine a brutalement révélé cette fragilité. Lorsque les chaînes d'approvisionnement mondiales se sont tendues et que les prix des céréales ont flambé, des millions de personnes ont immédiatement ressenti les conséquences de décisions prises à des milliers de kilomètres de leurs champs et de leurs assiettes.

Cette vulnérabilité n'est pas un accident. Elle est le produit d'un système international où certains territoires produisent, d'autres consomment, et où les règles du commerce mondial ne profitent pas à tous de manière égale.

Parler de résilience sans interroger ces rapports de force revient à soigner les symptômes tout en laissant intactes les causes profondes.

**La Palestine : lorsque le simple fait de cultiver devient un acte de liberté**

La Palestine rappelle avec force que la question alimentaire n'est jamais uniquement agricole. À Gaza, en Cisjordanie ou dans la vallée du Jourdain, cultiver la terre, conserver des semences, récolter des olives ou maintenir un savoir agricole ancestral peut devenir un acte de résistance.

Là, le mot résilience change de sens. Il ne signifie plus adaptation à l'ordre existant. Il signifie refus. Refus de l'effacement. Refus du déracinement. Refus de l'abandon.

Cette expérience nous rappelle que le véritable enjeu n'est pas seulement de survivre aux crises, mais de préserver la capacité collective à choisir son avenir.

**Au-delà de la résilience**

Sommes-nous condamnés à être résilients ? La réponse est non.

Les sociétés humaines n'ont jamais été condamnées à s'adapter passivement aux injustices qu'elles subissent. Elles ont aussi la capacité de transformer les structures qui les produisent.

« L'olivier ne demande pas à être résilient. Il demande à ne pas être arraché. Dans cette différence se joue une grande partie du débat actuel sur les systèmes alimentaires. »

Les initiatives agroécologiques, les banques communautaires de semences, les coopératives rurales, les marchés territoriaux et les expériences de gestion collective des ressources constituent des sources d'espoir indispensables. Elles démontrent que d'autres voies sont possibles.

Mais elles ne pourront produire tout leur potentiel que si elles s'inscrivent dans une transformation plus profonde : un accès plus équitable à la terre, une gouvernance démocratique de l'eau, une véritable souveraineté semencière, des politiques publiques capables de protéger les producteurs locaux et le droit des peuples à définir eux-mêmes leur système alimentaire.

**Le grain qui refuse**

Il existe quelque chose de profondément politique dans une graine conservée de génération en génération. Dans le blé transmis par les femmes des campagnes, dans les semences sauvegardées malgré les pressions de l'uniformisation, dans les savoirs agricoles préservés contre l'oubli, se loge une forme discrète mais puissante de résistance.

La véritable résilience n'est pas seulement la capacité à se relever après une crise. C'est la capacité à empêcher que la crise devienne une condition permanente de l'existence. C'est la capacité à nommer les causes de la faim, à défendre les biens communs, à construire collectivement un avenir où l'alimentation cesse d'être une marchandise pour redevenir ce qu'elle n'aurait jamais dû cesser d'être : un droit fondamental.

Les systèmes alimentaires dont nous avons besoin ne naîtront pas uniquement dans les salles de conférence ou dans les documents stratégiques. Ils naîtront dans les champs, les villages, les marchés locaux, les coopératives, les communautés de pêcheurs et partout où des femmes et des hommes décident que nourrir un peuple vaut davantage que nourrir les profits.

C'est peut-être cela, au fond, la seule résilience qui mérite d'être défendue : non pas apprendre à vivre avec les crises, mais construire les conditions qui permettront enfin de les dépasser.

— **Groupe Jeunes de l'Alliance pour la Souveraineté Alimentaire, région MENA**`,
  },
  {
    id: 2,
    titre: "Des premières lignes à l'oubli — Communautés queer, femmes paysannes et souveraineté alimentaire au Liban",
    date: "2026-03-31",
    lieu: "Webinaire CSIPM (en ligne)",
    categorie: "Plaidoyer",
    langue: "en",
    groupesImpliques: "Groupe Femmes ASA-MENA",
    groupeSlug: "femmes",
    thematiques: "Souveraineté alimentaire, Droits des femmes, Justice climatique, Terre, Eau, Semences",
    pdfUrl: "/activites/csipm-intervention-zeinab-dirani-2026.pdf",
    contexte:
      "Dans le contexte de l'escalade militaire de 2026 au Liban, Zeineb Al Dirani de Maskabeh a présenté une intervention au webinaire du CSIPM (Civil Society and Indigenous Peoples' Mechanism) le 31 mars 2026. " +
      "Cette intervention relit la boîte à outils genre et souveraineté alimentaire du CSIPM à partir des réalités territoriales du Liban et de la Palestine — guerre, occupation, écocide et travail de soin.",
    description:
      "Intervention argumentant que les femmes et les communautés queer ne sont pas périphériques à la réponse aux crises : elles font partie des infrastructures qui rendent la survie possible, tandis que les agriculteurs et les terres deviennent des cibles directes de la guerre. " +
      "Présentée par Zeineb Al Dirani (Maskabeh) lors du webinaire de lancement de la boîte à outils genre et droit à l'alimentation du CSIPM.",
    resultats:
      "Intervention présentée devant les membres du CSIPM. " +
      "Mise en lumière des infrastructures de soin portées par les femmes et les communautés queer au Liban. " +
      "Appel à la solidarité concrète vers les cuisines communautaires, les gardiennes de semences, les agriculteurs et les réseaux d'entraide.",
    contenuComplet:
`**Des premières lignes à l'oubli**
**Communautés queer, femmes paysannes et souveraineté alimentaire au Liban**

*Une lecture territoriale de la boîte à outils à travers la guerre, l'occupation, l'écocide et le travail de soin*
Zeineb Al Dirani | Maskabeh | Webinaire CSIPM | 31 mars 2026

Cette intervention argue que les femmes et les communautés queer ne sont pas périphériques à la réponse aux crises : elles font partie des infrastructures qui rendent la survie possible, tandis que les agriculteurs et les terres deviennent des cibles directes de la guerre.

**La boîte à outils CSIPM — Un point de départ**

Ce que la boîte à outils nous apporte : elle affirme que les mouvements de base sont à l'avant-garde de la justice alimentaire et de genre. Elle traite le travail de soin, la protection sociale, la terre, l'eau et les systèmes alimentaires locaux comme des questions politiques plutôt que privées, et lie le droit à l'alimentation à des cadres plus larges des droits humains.

Ce que le Liban nous force à dire : ici, le droit à l'alimentation ne peut pas être séparé de l'invasion, de l'occupation, de l'écocide, du retour bloqué, des routes détruites, et de l'abandon social qui pousse les femmes et les communautés queer vers le soin de première ligne sans reconnaissance ni pouvoir.

Comment l'utiliser ? En le lisant depuis les territoires. Au Liban et en Palestine, le droit à l'alimentation ne peut pas être séparé de la guerre, du déplacement, du vol de terres, des attaques contre les semences et l'eau, et du travail genré qui maintient les communautés en vie.

**Pour nous, la question n'est pas simplement le genre dans les systèmes alimentaires ; c'est l'alimentation, le soin et la survie sous occupation, invasion et abandon social.**

**Ce que l'escalade de 2026 fait aux terres et à l'eau**

Les chiffres du terrain (rapport de terrain, mars 2026) :
— **46 479 ha** de terres cultivées signalées endommagées depuis le 2 mars 2026
— **22 %** des terres cultivées affectées selon le ministère de l'Agriculture
— **44 297 ha** des terres endommagées se trouvent au Sud-Liban et à Nabatieh
— **76,6 %** des 15 025 agriculteurs enquêtés dans les zones affectées ont été déplacés
— **7** sources d'eau critiques endommagées dans la Bekaa en quatre jours

Le Sud-Liban et Nabatieh ne sont pas marginaux dans la géographie alimentaire du Liban. Ils contiennent environ 71 % des terres d'agrumes, environ 36 % des terres d'oliviers et la grande majorité de la production bananière.

Oxfam a rapporté en mars 2026 que les attaques ont endommagé des sources d'eau critiques dans la Bekaa desservant près de 7 000 personnes, et que plus de 45 réseaux d'eau avaient été endommagés lors de l'escalade de 2024, affectant près d'un demi-million de personnes.

**Ces chiffres décrivent plus que des dommages aux biens. Ils décrivent une attaque directe contre la souveraineté alimentaire, la continuité rurale et la possibilité du retour.**

**L'agriculture comme résistance**

Depuis octobre 2023, les bombardements israéliens ont ravagé le Sud et la Bekaa. Au-delà des martyrs et des blessés, le grenier du Liban est délibérément ciblé. Dans le Sud, l'agriculture génère 80 % du PIB. En brûlant 2 200 hectares de terres, l'armée israélienne sabote directement la survie économique d'une région entière.

Plus de 47 000 oliviers anciens ont été détruits, brûlés et volés. L'utilisation de munitions interdites comme le phosphore blanc brûle les cultures et provoque une contamination des sols à long terme. Pour 75 % des agriculteurs du Sud, c'est la perte brutale et totale de leur seule source de revenus.

Le Liban importe 80 % de son approvisionnement alimentaire. Cette dépendance massive nous rend vulnérables au marché mondial. Produire localement est la seule réponse au chantage économique et à l'agression. Sous l'agression, chaque graine devient un acte de défi. Planter est une façon de perturber l'armement de l'alimentation.

**La guerre contre les agriculteurs est aussi légale**

Au Liban, le projet de loi sur les semences débattu en 2025-2026 revient sur un projet antérieur qui remonte à 2022. Il apparaît sous le langage de la réglementation et de la modernisation, mais les critiques y lisent une tentative de subordonner les systèmes alimentaires à la logique des investisseurs, aux intrants importés et au contrôle technocratique.

Les mouvements paysans avertissent qu'il privilégie les droits des obtenteurs et les variétés commerciales enregistrées tout en ne protégeant pas clairement les droits des agriculteurs à sauvegarder, utiliser, échanger et vendre les semences traditionnelles.

**Si la terre, l'eau et les semences sont clôturées ensemble, la souveraineté alimentaire devient impossible.**

**Sur le terrain, la réponse se construit déjà**

Infrastructures de soin portées par les femmes, les communautés queer et les paysans :

Le travail des femmes porte une grande partie de la réponse alimentaire quotidienne. La plupart des initiatives sur le terrain soutenant les personnes déplacées sont dirigées par des femmes et des personnes queer.

Jibal, Dikken el Mazraa, Agrimovement et d'autres initiatives relient l'aide aux agriculteurs, aux semences, aux cuisines et à la production locale. Cela compte parce que l'aide alimentaire qui contourne les agriculteurs peut approfondir l'effondrement au lieu de le réparer.

*Ces pratiques ne sont pas marginales ou secondaires. Ce sont des infrastructures vivantes de survie — et elles méritent une reconnaissance politique, pas l'effacement.*

**Ce qui survit à une guerre, c'est souvent ce que les communautés ont déjà construit pour elles-mêmes avant que la reconnaissance n'arrive.**

**Maskabeh : traiter l'information comme une partie de l'écosystème**

Maskabeh cartographie en coordination avec les groupes sur le terrain : abris, cuisines, cliniques, points de secours locaux. Cela permet de voir les lacunes dans la réponse, qui atteint qui — et qui est encore laissé de côté.

L'information fait partie de la capacité des communautés à trouver de la nourriture, redistribuer les ressources, éviter les doublons, identifier les lacunes et construire une vue d'ensemble réelle de la réponse.

*land • water • mobility • care*

— **Zeineb Al Dirani | Maskabeh | Webinaire CSIPM, 31 mars 2026**`,
  },
  {
    id: 5,
    titre: "Les données comme nouveau mécanisme de renforcement de l'accumulation et du contrôle économique",
    date: "2026-07-01",
    lieu: "Région MENA",
    categorie: "Publication",
    langue: "ar,fr,en",
    groupesImpliques: "Groupe Data ASA-MENA",
    groupeSlug: "data",
    thematiques: "Systèmes numériques, Données, Technologies émergentes, Capitalisme numérique, Souveraineté numérique",
    pdfUrl: "/activites/donnees-mecanisme-fr.pdf",
    pdfs: [
      { langue: "Français", code: "fr", url: "/activites/donnees-mecanisme-fr.pdf", flag: "🇫🇷" },
      { langue: "English", code: "en", url: "/activites/donnees-mecanisme-en.pdf", flag: "🇬🇧" },
      { langue: "العربية", code: "ar", url: "/activites/donnees-mecanisme-ar.pdf", flag: "🇸🇦" },
    ],
    description:
      "Une analyse critique du rôle croissant des données et des technologies numériques dans l'économie mondiale. Ce document examine comment le capitalisme numérique monopoliste concentre le contrôle de l'infrastructure numérique entre les mains d'un petit nombre de firmes transnationales, reproduisant de nouvelles formes de domination économique et de colonialisme numérique.",
    contexte:
      "Dans le cadre des travaux du Groupe Data de l'Alliance, ce document propose une lecture d'économie politique critique des transformations numériques actuelles, en analysant les données comme nouvelle forme de capital et d'accumulation, et en interrogeant les rapports de pouvoir qui structurent l'économie numérique mondiale.",
    resultats:
      "Document publié en 3 langues (arabe, français, anglais). Diffusé dans les réseaux de l'Alliance et auprès des organisations membres de la région MENA.",
    contenuComplet: null,
  },
  {
    id: 3,
    titre: "Étude de cas — Semences paysannes en Tunisie",
    date: "2026-02-10",
    lieu: "Tunisie",
    categorie: "Terrain",
    langue: "fr",
    groupesImpliques: "Groupe Syndicalistes et Petits Agriculteurs, Groupe Recherche",
    groupeSlug: "syndicalistes",
    groupeSlugs: ["syndicalistes", "recherche"],
    thematiques: "Semences, Souveraineté alimentaire, Savoirs paysans",
    pdfUrl: "/activites/etude-cas-semence-tunisie.pdf",
    description:
      "Étude de cas documentant les pratiques de conservation et d'échange de semences paysannes en Tunisie. Ce travail met en lumière les dynamiques locales de souveraineté semencière face aux pressions de la standardisation et des semences commerciales.",
    contexte: null,
    resultats: null,
    contenuComplet: null,
  },
  {
    id: 4,
    titre: "Étude de cas — Xinema",
    date: "2026-03-01",
    lieu: "Région MENA",
    categorie: "Recherche",
    langue: "fr",
    groupesImpliques: "Groupe Femmes ASA-MENA",
    groupeSlug: "femmes",
    thematiques: "Souveraineté alimentaire, Systèmes alimentaires",
    pdfUrl: "/activites/etude-cas-xinema.pdf",
    description:
      "Étude de cas produite dans le cadre des activités de recherche participative de l'Alliance pour la Souveraineté Alimentaire MENA.",
    contexte: null,
    resultats: null,
    contenuComplet: null,
  },
];

export const activitesTypes = [
  { titre: "Renforcement des capacités", icon: "📚", description: "Formation, échange et transmission de savoirs pour les jeunes, femmes, paysans et pêcheurs sur la souveraineté alimentaire, l'agroécologie et les outils de plaidoyer." },
  { titre: "Recherche participative", icon: "🔍", description: "Études et recherches menées en collaboration avec les communautés sur les systèmes alimentaires, les ressources naturelles et les politiques publiques dans la région MENA." },
  { titre: "Mobilisation & coordination", icon: "🤝", description: "Rencontres, ateliers et espaces d'échange entre membres pour renforcer la coordination, la cohésion et la construction de positions communes." },
  { titre: "Plaidoyer politique", icon: "📢", description: "Actions de plaidoyer aux niveaux national, régional et international pour défendre la souveraineté alimentaire et les droits des communautés." },
  { titre: "Participation internationale", icon: "🌍", description: "Conférences, forums et consultations politiques liés aux systèmes alimentaires, à l'agroécologie et à la gouvernance des ressources naturelles au niveau mondial." },
  { titre: "Communication & mobilisation", icon: "📱", description: "Campagnes publiques, interventions médiatiques et production de contenus pour renforcer la visibilité des luttes des communautés de la région MENA." },
];
