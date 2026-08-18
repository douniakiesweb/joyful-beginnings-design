export const SITE = {
  name: "Minots Minettes",
  baseline: "Garde d'enfants à domicile premium à Marseille",
  phone: "04 91 67 20 46",
  phoneHref: "tel:+33491672046",
  whatsapp: "https://wa.me/33491672046",
  email: "contact@minots-minettes.fr",
  siret: "501 291 751 00045",
  forme: "SASU",
  tarif: "33 €/h",
  tarifNet: "16,50 €/h après crédit d'impôt",
  villes: "Marseille (1er au 16e), Aubagne, Allauch et alentours",
};

export const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/prestations", label: "Prestations" },
  { to: "/aides-et-tarifs", label: "Aides & tarifs" },
  { to: "/zone-intervention", label: "Zone d'intervention" },
  { to: "/temoignages", label: "Témoignages" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog" },
  { to: "/recrutement", label: "Recrutement" },
  { to: "/contact", label: "Contact" },
] as const;

export const PRESTATIONS = [
  {
    slug: "sortie-ecole-creche",
    titre: "Sortie d'école ou de crèche",
    resume:
      "Nous récupérons votre enfant à la sortie, gérons le goûter, les devoirs et le bain jusqu'à votre retour.",
    detail:
      "Une intervenante identifiée, présentée à l'équipe pédagogique, qui connaît le trajet, les habitudes et le rythme de votre enfant. Goûter équilibré, temps calme, aide aux leçons, jeux et transmission écrite chaque soir.",
  },
  {
    slug: "garde-du-matin",
    titre: "Garde le matin avant l'école",
    resume: "Lever en douceur, petit-déjeuner, habillage et dépose à l'école ou à la crèche.",
    detail:
      "Idéal pour les parents qui commencent tôt. L'intervenante arrive avant votre départ, respecte les rituels du matin et sécurise le trajet jusqu'à l'établissement.",
  },
  {
    slug: "mercredi",
    titre: "Le mercredi",
    resume: "Une journée rythmée : ateliers, sorties, accompagnement aux activités extrascolaires.",
    detail:
      "Programme d'éveil adapté à l'âge : cuisine, lecture, parc, médiathèque, musée. Accompagnement au conservatoire, au sport ou à la danse inclus.",
  },
  {
    slug: "vacances-scolaires",
    titre: "Vacances scolaires",
    resume: "Des journées complètes encadrées, avec un programme d'activités préparé à l'avance.",
    detail:
      "Toutes les zones de vacances couvertes, y compris les ponts et jours fériés. Planning d'activités transmis aux parents en amont.",
  },
  {
    slug: "soirees-week-ends",
    titre: "Soirées et week-ends",
    resume: "Sortir l'esprit tranquille : un baby-sitting professionnel, ponctuel ou régulier.",
    detail:
      "Intervenante formée aux gestes de premiers secours, joignable à tout moment, avec compte rendu à votre retour.",
  },
  {
    slug: "horaires-atypiques",
    titre: "Horaires atypiques",
    resume: "Très tôt, très tard, la nuit : nous accompagnons les métiers aux rythmes décalés.",
    detail:
      "Soignants, commerçants, hôtellerie, transport : nous construisons un planning sur mesure, y compris les nuits complètes et les gardes fractionnées.",
  },
  {
    slug: "garde-urgence-48h",
    titre: "Garde d'urgence sous 48 h",
    resume: "Un imprévu ? Nous mobilisons une intervenante qualifiée en moins de 48 heures.",
    detail:
      "Crèche fermée, nounou absente, hospitalisation, déplacement professionnel : notre vivier local nous permet de réagir vite, sans sacrifier la qualité du profil.",
  },
  {
    slug: "garde-partagee",
    titre: "Garde partagée entre deux familles",
    resume: "Le même niveau d'exigence, un coût divisé entre deux foyers voisins.",
    detail:
      "Nous vous aidons à trouver la famille partenaire, à cadrer le planning et les règles de vie, et à sécuriser le contrat.",
  },
  {
    slug: "accompagnement-activites",
    titre: "Accompagnement aux activités",
    resume: "Trajets sécurisés vers le sport, la musique, l'orthophoniste ou les copains.",
    detail:
      "Prise en charge de porte à porte, ponctualité vérifiée, information des parents en temps réel.",
  },
  {
    slug: "evenements-familiaux",
    titre: "Événements familiaux",
    resume: "Mariage, baptême, anniversaire : un espace enfants encadré pendant votre réception.",
    detail:
      "Une ou plusieurs intervenantes selon le nombre d'enfants, avec matériel d'animation, coin calme et surveillance continue.",
  },
];

export const FAQ = [
  {
    q: "Comment sélectionnez-vous vos intervenantes ?",
    r: "Chaque candidate est reçue en agence par Linda. Nous vérifions les diplômes petite enfance, l'expérience, les références auprès des anciens employeurs, l'extrait de casier judiciaire et le savoir-être. Nous recrutons ensuite en fonction du besoin exclusif de votre famille : nous ne plaçons jamais un profil « par défaut ».",
  },
  {
    q: "Aurons-nous toujours la même personne ?",
    r: "Oui. La continuité est au cœur de notre méthode : une intervenante référente est attribuée à votre famille pour toute la durée du contrat. En cas d'absence, un remplacement est garanti par une intervenante déjà briefée sur vos habitudes.",
  },
  {
    q: "Combien coûte réellement la garde après aides ?",
    r: "Notre tarif est de 33 €/h, soit environ 16,50 €/h après le crédit d'impôt de 50 % accordé aux services à la personne. Selon votre situation, le complément mode de garde (CMG) de la CAF peut réduire encore ce montant. Un devis personnalisé vous est remis gratuitement.",
  },
  {
    q: "Qui s'occupe des démarches administratives ?",
    r: "Nous. Contrat, déclaration, bulletins de paie, attestation fiscale annuelle, avance immédiate de crédit d'impôt : vous n'avez aucune paperasse d'employeur à gérer. Minots Minettes est déclarée auprès de la DDETS et dispose de l'agrément préfectoral.",
  },
  {
    q: "Faites-vous une rencontre avant la première garde ?",
    r: "Systématiquement. Nous venons à votre domicile pour comprendre vos habitudes, présenter l'intervenante à vos enfants et poser un cadre clair. La première garde ne commence jamais par une inconnue.",
  },
  {
    q: "À partir de quel âge gardez-vous les enfants ?",
    r: "Dès la naissance et jusqu'à l'adolescence : moins de 3 ans, 3 à 6 ans, 6 à 12 ans et plus de 12 ans. Les intervenantes en charge des bébés sont spécifiquement qualifiées en petite enfance.",
  },
  {
    q: "Êtes-vous assurés ?",
    r: "Oui, Minots Minettes est couverte par une assurance responsabilité civile professionnelle, et chaque intervenante est salariée de l'agence.",
  },
  {
    q: "Dans quels secteurs intervenez-vous ?",
    r: "Tous les arrondissements de Marseille, du 1er au 16e, ainsi qu'Aubagne, Allauch et les communes limitrophes.",
  },
];

export const TEMOIGNAGES = [
  {
    nom: "Sarah B.",
    lieu: "Marseille 8e",
    texte:
      "Nous cherchions une solution pour la sortie d'école avec deux enfants et des horaires impossibles. Linda a trouvé la personne idéale en trois jours. Un an plus tard, c'est la même intervenante, et mes enfants l'attendent avec impatience.",
  },
  {
    nom: "Julien et Marie",
    lieu: "Aubagne",
    texte:
      "Ce qui nous a rassurés : la rencontre à domicile avant la première garde. Tout était clair, cadré, humain. Aucune paperasse à gérer de notre côté.",
  },
  {
    nom: "Nadia K.",
    lieu: "Marseille 5e",
    texte:
      "Infirmière de nuit, je pensais qu'aucune agence ne suivrait mes horaires. Minots Minettes a construit un planning sur mesure, y compris les nuits. C'est un vrai soulagement.",
  },
  {
    nom: "Camille R.",
    lieu: "Marseille 12e",
    texte:
      "Garde d'urgence obtenue en 24 heures quand notre crèche a fermé. Professionnalisme total, et une intervenante adorable avec notre fils de 2 ans.",
  },
  {
    nom: "Famille Ferrand",
    lieu: "Allauch",
    texte:
      "Nous sommes passés en garde partagée avec nos voisins grâce à eux. Même qualité, budget divisé, enfants ravis.",
  },
  {
    nom: "Sofiane M.",
    lieu: "Marseille 2e",
    texte:
      "15 ans d'expérience, ça se sent. On sent une agence de terrain, jamais un centre d'appels.",
  },
];

export const ARTICLES = [
  {
    slug: "reussir-adaptation-nouvelle-nounou",
    titre: "Réussir l'adaptation avec une nouvelle intervenante",
    chapeau:
      "Les 7 premiers jours déterminent la qualité du lien. Voici la méthode que nous appliquons chez chaque famille.",
    date: "2026-08-04",
    lecture: "6 min",
    contenu: [
      "La première rencontre se fait toujours en votre présence, dans un moment calme de la journée. L'enfant a besoin de vous voir accorder votre confiance à cette personne : c'est ce signal, bien plus que les mots, qui le rassure.",
      "Les trois premiers jours, nous recommandons de conserver strictement les rituels existants : même ordre pour le goûter, le bain, l'histoire du soir. La nouveauté doit porter sur la personne, pas sur le cadre.",
      "À partir du quatrième jour, l'intervenante introduit progressivement ses propres propositions de jeu. C'est le moment où l'enfant passe de la tolérance à l'attachement.",
      "Enfin, la transmission écrite quotidienne — humeur, repas, sommeil, anecdotes — permet aux parents de rester pleinement présents malgré la distance. C'est un outil d'adaptation autant qu'un outil d'information.",
    ],
  },
  {
    slug: "credit-impot-cmg-garde-enfants",
    titre: "Crédit d'impôt et CMG : ce que vous payez réellement",
    chapeau:
      "33 €/h affichés, environ 16,50 €/h réellement supportés. Décryptage clair des aides accordées aux familles.",
    date: "2026-07-21",
    lecture: "5 min",
    contenu: [
      "La garde d'enfants à domicile relève des services à la personne : 50 % des sommes versées ouvrent droit à un crédit d'impôt, dans la limite des plafonds légaux annuels.",
      "Depuis la généralisation de l'avance immédiate, ce crédit peut être déduit au moment du paiement plutôt qu'attendu l'année suivante. Votre trésorerie mensuelle n'est plus impactée.",
      "Le complément de libre choix du mode de garde (CMG) de la CAF peut s'ajouter pour les enfants de moins de 6 ans, avec un montant modulé selon vos revenus et l'âge de l'enfant.",
      "Nous établissons pour chaque famille une simulation nominative avant signature : vous savez exactement ce que la garde vous coûtera chaque mois, sans mauvaise surprise.",
    ],
  },
  {
    slug: "horaires-atypiques-organiser-garde",
    titre: "Horaires atypiques : organiser la garde quand on travaille en décalé",
    chapeau:
      "Soignants, commerçants, hôtellerie : comment construire un planning qui tient dans la durée.",
    date: "2026-07-02",
    lecture: "7 min",
    contenu: [
      "Le premier réflexe est de raisonner en cycles et non en semaines : un planning tournant sur quatre semaines est beaucoup plus lisible pour l'intervenante comme pour l'enfant.",
      "La nuit, la priorité est la stabilité du sommeil. L'intervenante arrive avant le coucher pour assurer le rituel, ce qui évite le réveil anxieux au milieu de la nuit.",
      "Nous conseillons aussi de prévoir un « profil miroir » : une seconde intervenante déjà venue au domicile, capable de prendre le relais en cas d'imprévu.",
      "Enfin, verrouillez le planning au moins deux semaines à l'avance. C'est la condition pour fidéliser une intervenante sur des horaires exigeants.",
    ],
  },
  {
    slug: "activites-eveil-3-6-ans-maison",
    titre: "10 activités d'éveil à faire à la maison entre 3 et 6 ans",
    chapeau:
      "Des idées simples, sans matériel coûteux, que nos intervenantes utilisent au quotidien à Marseille.",
    date: "2026-06-12",
    lecture: "4 min",
    contenu: [
      "Transvasement, pâte à sel, parcours moteur dans le couloir, chasse aux couleurs, cuisine à quatre mains : l'éveil ne demande pas d'équipement, il demande de l'attention.",
      "Le principe est toujours le même : proposer, ne pas imposer, laisser l'enfant terminer son geste. La répétition est un besoin, pas un ennui.",
      "Nous privilégions aussi les sorties de proximité — parc Borély, plages du Prado, médiathèques de quartier — qui ancrent l'enfant dans sa ville.",
      "Une activité réussie se mesure au calme qui suit, pas à la photo qu'on en garde.",
    ],
  },
];
