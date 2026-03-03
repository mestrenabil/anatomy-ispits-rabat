export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'anatomie-reins' | 'anatomie-voies-urinaires' | 'physiologie-filtration' | 'regulation-homeostase' | 'pathologie-rein' | 'pathologie-voies-urinaires';
}

export const urinaryData: Question[] = [
  // Anatomy - Kidneys
  {
    id: "u001",
    question: "Quel est le nombre normal de reins chez l'humain adulte?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation: "L'humain adulte normal possède 2 reins, un de chaque côté de la colonne vertébrale.",
    category: "anatomie-reins",
    difficulty: "easy"
  },
  {
    id: "u002",
    question: "Quel est l'ordre correct du passage de l'urine dans le système urinaire?",
    options: ["Rein → Urètre → Uretère → Vessie", "Rein → Uretère → Vessie → Urètre", "Rein → Vessie → Uretère → Urètre", "Uretère → Rein → Vessie → Urètre"],
    correctAnswer: "Rein → Uretère → Vessie → Urètre",
    explanation: "L'urine est produite dans les reins, drainée par les uretères vers la vessie, puis évacuée via l'urètre.",
    category: "anatomie-reins",
    difficulty: "easy"
  },
  {
    id: "u003",
    question: "Quelle structure renale filtre le sang?",
    options: ["Le pyélon", "Le néphron", "Le calice majeur", "La capsule rénale"],
    correctAnswer: "Le néphron",
    explanation: "Le néphron est l'unité fonctionnelle du rein où la filtration du sang se produit.",
    category: "anatomie-reins",
    difficulty: "medium"
  },
  {
    id: "u004",
    question: "Quel est le nombre approximatif de néphrons dans chaque rein?",
    options: ["50 000 à 100 000", "200 000 à 300 000", "500 000 à 1 million", "5 à 10 millions"],
    correctAnswer: "500 000 à 1 million",
    explanation: "Chaque rein contient environ 500 000 à 1 million de néphrons, responsables de la filtration.",
    category: "anatomie-reins",
    difficulty: "medium"
  },
  {
    id: "u005",
    question: "Quel est le composant principal du néphron responsable de la filtration?",
    options: ["Le tube contourné distal", "Le glomérule", "La branche descendante de l'anse de Henlé", "Le tube contourné proximal"],
    correctAnswer: "Le glomérule",
    explanation: "Le glomérule est un réseau de capillaires où la filtration glomérulaire se produit.",
    category: "anatomie-reins",
    difficulty: "medium"
  },
  {
    id: "u006",
    question: "Quelle artère irrigue le rein?",
    options: ["L'artère rénale", "L'artère splénique", "L'artère mésentérique", "L'artère hépatique"],
    correctAnswer: "L'artère rénale",
    explanation: "L'artère rénale se branche directement de l'aorte abdominale pour irriguer le rein.",
    category: "anatomie-reins",
    difficulty: "easy"
  },
  {
    id: "u007",
    question: "Quelle structure renale concentre l'urine?",
    options: ["Le cortex rénal", "La médulla rénale", "La capsule rénale", "Le pyélon"],
    correctAnswer: "La médulla rénale",
    explanation: "La médulla rénale contient les anses de Henlé qui concentrent l'urine.",
    category: "anatomie-reins",
    difficulty: "medium"
  },
  {
    id: "u008",
    question: "Où sont situés les reins chez l'humain?",
    options: ["Dans la cavité abdominale antérieure", "Rétropéritonéalement", "Dans le bassin", "Dans la cavité thoracique"],
    correctAnswer: "Rétropéritonéalement",
    explanation: "Les reins sont situés rétropéritonéalement, c'est-à-dire derrière le péritoine pariétal.",
    category: "anatomie-reins",
    difficulty: "medium"
  },
  {
    id: "u009",
    question: "Quel est le poids approximatif d'un rein adulte?",
    options: ["50-100g", "150-200g", "300-400g", "500-600g"],
    correctAnswer: "150-200g",
    explanation: "Un rein adulte normal pèse environ 150-200 grammes.",
    category: "anatomie-reins",
    difficulty: "easy"
  },
  {
    id: "u010",
    question: "Quelle structure recueille l'urine produite par le néphron?",
    options: ["L'uretère", "Le calice rénal", "La capsule de Bowman", "Le pyélon"],
    correctAnswer: "Le calice rénal",
    explanation: "Les calices rénaux recueillent l'urine et la dirigent vers le pyélon.",
    category: "anatomie-reins",
    difficulty: "medium"
  },

  // Anatomy - Bladder and Urethra
  {
    id: "u011",
    question: "Quelle est la capacité normale de la vessie urinaire chez l'adulte?",
    options: ["100-300 mL", "300-500 mL", "500-800 mL", "800-1000 mL"],
    correctAnswer: "500-800 mL",
    explanation: "La capacité normale de la vessie est environ 500-800 mL.",
    category: "anatomie-voies-urinaires",
    difficulty: "easy"
  },
  {
    id: "u012",
    question: "Quel est le type de muscle responsable de la contraction vésicale?",
    options: ["Muscle lisse", "Muscle cardiaque", "Muscle strié", "Muscle involontaire spécial"],
    correctAnswer: "Muscle lisse",
    explanation: "Le détrusor est un muscle lisse qui se contracte pour l'évacuation de l'urine.",
    category: "anatomie-voies-urinaires",
    difficulty: "medium"
  },
  {
    id: "u013",
    question: "Combien de sphincters contrôlent l'uréthre?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation: "Il y a 2 sphincters: interne (involontaire) et externe (volontaire).",
    category: "anatomie-voies-urinaires",
    difficulty: "medium"
  },
  {
    id: "u014",
    question: "Quelle est la longueur approximative de l'urètre masculin?",
    options: ["2-3 cm", "8-10 cm", "15-20 cm", "25-30 cm"],
    correctAnswer: "8-10 cm",
    explanation: "L'urètre masculin mesure environ 8-10 cm de longueur.",
    category: "anatomie-voies-urinaires",
    difficulty: "medium"
  },
  {
    id: "u015",
    question: "Quelle est la longueur approximative de l'urètre féminin?",
    options: ["2-3 cm", "5-6 cm", "10-12 cm", "15-20 cm"],
    correctAnswer: "5-6 cm",
    explanation: "L'urètre féminin mesure environ 5-6 cm de longueur.",
    category: "anatomie-voies-urinaires",
    difficulty: "easy"
  },

  // Filtration and Reabsorption
  {
    id: "u016",
    question: "Quel est l'ordre des étapes de formation de l'urine?",
    options: ["Filtration → Sécrétion → Réabsorption", "Filtration → Réabsorption → Sécrétion", "Réabsorption → Filtration → Sécrétion", "Sécrétion → Filtration → Réabsorption"],
    correctAnswer: "Filtration → Réabsorption → Sécrétion",
    explanation: "La formation de l'urine suit l'ordre: filtration au glomérule, réabsorption et sécrétion tubulaires.",
    category: "physiologie-filtration",
    difficulty: "medium"
  },
  {
    id: "u017",
    question: "Quelle est la pression de filtration glomérulaire (PFG) approximativement?",
    options: ["10 mmHg", "25 mmHg", "45 mmHg", "65 mmHg"],
    correctAnswer: "25 mmHg",
    explanation: "La PFG est d'environ 25 mmHg, résultant de la pression hydrostatique moins la pression oncotique.",
    category: "physiologie-filtration",
    difficulty: "hard"
  },
  {
    id: "u018",
    question: "Quel pourcentage de l'eau filtrée est réabsorbé normalement?",
    options: ["25-35%", "45-55%", "70-85%", "95-99%"],
    correctAnswer: "95-99%",
    explanation: "Environ 95-99% de l'eau filtrée est réabsorbée, principalement dans le tube proximal et l'anse de Henlé.",
    category: "physiologie-filtration",
    difficulty: "medium"
  },
  {
    id: "u019",
    question: "Quel est le débit de filtration glomérulaire (DFG) normal chez l'adulte?",
    options: ["25-50 mL/min", "50-100 mL/min", "100-125 mL/min", "150-200 mL/min"],
    correctAnswer: "100-125 mL/min",
    explanation: "Le DFG normal est d'environ 100-125 mL/min chez l'adulte sain.",
    category: "physiologie-filtration",
    difficulty: "medium"
  },
  {
    id: "u020",
    question: "Où se produit la réabsorption de glucose dans le néphron?",
    options: ["Au glomérule", "Dans le tube contourné proximal", "Dans l'anse de Henlé", "Dans le tube contourné distal"],
    correctAnswer: "Dans le tube contourné proximal",
    explanation: "Tout le glucose filtré est réabsorbé dans le tube contourné proximal par transport actif.",
    category: "physiologie-filtration",
    difficulty: "medium"
  },
  {
    id: "u021",
    question: "Quel électrolyte est principalement réabsorbé dans l'anse de Henlé?",
    options: ["Le potassium", "Le sodium", "Le calcium", "Le magnésium"],
    correctAnswer: "Le sodium",
    explanation: "L'anse de Henlé réabsorbe principalement le sodium et le chlore, créant un gradient osmotique.",
    category: "physiologie-filtration",
    difficulty: "medium"
  },
  {
    id: "u022",
    question: "Quel est le rôle principal de la branche ascendante de l'anse de Henlé?",
    options: ["Réabsorption d'eau", "Réabsorption de sodium et chlore", "Sécrétion de potassium", "Réabsorption de glucose"],
    correctAnswer: "Réabsorption de sodium et chlore",
    explanation: "La branche ascendante est imperméable à l'eau mais réabsorbe activement sodium et chlore.",
    category: "physiologie-filtration",
    difficulty: "medium"
  },
  {
    id: "u023",
    question: "Où l'hormone antidiurétique (ADH) agit-elle principalement?",
    options: ["Au glomérule", "Dans le tube contourné proximal", "Dans le tube contourné distal et le canal collecteur", "Dans l'anse de Henlé"],
    correctAnswer: "Dans le tube contourné distal et le canal collecteur",
    explanation: "L'ADH augmente la perméabilité à l'eau dans le tube distal et le canal collecteur.",
    category: "physiologie-filtration",
    difficulty: "medium"
  },
  {
    id: "u024",
    question: "Quel est l'effet de l'aldostérone sur la réabsorption rénale?",
    options: ["Augmente la réabsorption de sodium", "Diminue la réabsorption de potassium", "Augmente l'excrétion de potassium", "Tous les éléments ci-dessus"],
    correctAnswer: "Tous les éléments ci-dessus",
    explanation: "L'aldostérone augmente la réabsorption de sodium et diminue l'excrétion de potassium.",
    category: "physiologie-filtration",
    difficulty: "medium"
  },

  // Regulation and Homeostasis
  {
    id: "u025",
    question: "Quel rôle joue le rein dans la régulation du pH sanguin?",
    options: ["Réabsorption de bicarbonate", "Excrétion d'ions hydrogène", "Les deux réponses ci-dessus", "Aucune de ces réponses"],
    correctAnswer: "Les deux réponses ci-dessus",
    explanation: "Les reins régulent le pH en réabsorbant le bicarbonate et en excrétant les ions hydrogène.",
    category: "regulation-homeostase",
    difficulty: "medium"
  },
  {
    id: "u026",
    question: "Quel système renin-angiotensine-aldostérone régule?",
    options: ["La pression artérielle uniquement", "L'équilibre hydro-électrolytique uniquement", "La pression artérielle et l'équilibre hydro-électrolytique", "La température corporelle"],
    correctAnswer: "La pression artérielle et l'équilibre hydro-électrolytique",
    explanation: "Le système RAA régule la pression artérielle et l'équilibre sodique et volumique.",
    category: "regulation-homeostase",
    difficulty: "medium"
  },
  {
    id: "u027",
    question: "Quel est l'agent principal qui stimule la libération de rénine?",
    options: ["L'augmentation de la pression artérielle", "La diminution de la pression artérielle", "L'augmentation de la concentration de potassium", "L'augmentation du glucose sanguin"],
    correctAnswer: "La diminution de la pression artérielle",
    explanation: "La rénine est libérée en réponse à une baisse de la pression de perfusion rénale.",
    category: "regulation-homeostase",
    difficulty: "medium"
  },
  {
    id: "u028",
    question: "Quelle hormone stimule la production de globules rouges?",
    options: ["L'érythropoïétine", "L'hormone antidiurétique", "L'aldostérone", "Le calcitriol"],
    correctAnswer: "L'érythropoïétine",
    explanation: "L'érythropoïétine est produite par les reins et stimule la production de globules rouges.",
    category: "regulation-homeostase",
    difficulty: "easy"
  },
  {
    id: "u029",
    question: "Quel est le rôle principal du calcitriol?",
    options: ["Augmenter l'absorption du calcium", "Augmenter l'excrétion du calcium", "Diminuer l'absorption du phosphate", "Diminuer la concentration de phosphate sanguin"],
    correctAnswer: "Augmenter l'absorption du calcium",
    explanation: "Le calcitriol augmente l'absorption intestinale du calcium et du phosphate.",
    category: "regulation-homeostase",
    difficulty: "medium"
  },
  {
    id: "u030",
    question: "Quel est le principal électrolyte régulé par le rein?",
    options: ["Le potassium", "Le sodium", "Le chlore", "Tous sont importants"],
    correctAnswer: "Tous sont importants",
    explanation: "Les reins régulent tous les électrolytes majeurs: sodium, potassium et chlore.",
    category: "regulation-homeostase",
    difficulty: "easy"
  },

  // Pathology
  {
    id: "u031",
    question: "Qu'est-ce que l'insuffisance rénale chronique?",
    options: ["Perte soudaine de fonction rénale", "Perte progressive et permanente de fonction rénale", "Perte temporaire de fonction rénale", "Inflammation du rein"],
    correctAnswer: "Perte progressive et permanente de fonction rénale",
    explanation: "L'insuffisance rénale chronique est une perte progressive de la fonction rénale au fil du temps.",
    category: "pathologie-rein",
    difficulty: "easy"
  },
  {
    id: "u032",
    question: "Quels sont les principaux symptômes de l'insuffisance rénale?",
    options: ["Oligurie et hypertension", "Polyurie et hypotension", "Dysurie et fièvre", "Pollakiurie uniquement"],
    correctAnswer: "Oligurie et hypertension",
    explanation: "L'insuffisance rénale cause souvent une diminution de la diurèse et une augmentation de la pression artérielle.",
    category: "pathologie-rein",
    difficulty: "medium"
  },
  {
    id: "u033",
    question: "Qu'est-ce que la néphrite?",
    options: ["Infection bactérienne du rein", "Inflammation du rein", "Calcul dans le rein", "Insuffisance rénale"],
    correctAnswer: "Inflammation du rein",
    explanation: "La néphrite est une inflammation du rein, souvent auto-immune ou post-infectieuse.",
    category: "pathologie-rein",
    difficulty: "easy"
  },
  {
    id: "u034",
    question: "Quel est le composant anormal d'une urine à protéinurie?",
    options: ["Glucose", "Protéines", "Bilirubine", "Cétones"],
    correctAnswer: "Protéines",
    explanation: "La protéinurie est la présence anormale de protéines dans l'urine, signe de maladie rénale.",
    category: "pathologie-rein",
    difficulty: "easy"
  },
  {
    id: "u035",
    question: "Qu'est-ce qu'une infection urinaire (IVU)?",
    options: ["Infection bactérienne du système urinaire", "Calcul urinaire", "Insuffisance rénale", "Inflammation de la prostate"],
    correctAnswer: "Infection bactérienne du système urinaire",
    explanation: "Les IVU sont des infections bactériennes qui peuvent affecter la vessie, l'urètre ou les reins.",
    category: "pathologie-voies-urinaires",
    difficulty: "easy"
  },
  {
    id: "u036",
    question: "Qu'est-ce qu'un calcul rénal (lithiase)?",
    options: ["Une infection du rein", "Un dépôt solide dans le rein", "Une tumeur rénale", "Une insuffisance rénale"],
    correctAnswer: "Un dépôt solide dans le rein",
    explanation: "Les calculs rénaux sont des dépôts solides de minéraux et de sels qui se forment dans les reins.",
    category: "pathologie-voies-urinaires",
    difficulty: "easy"
  }
];

export const urinaryCategoryLabels: Record<string, string> = {
  'anatomie-reins': 'Anatomie - Reins',
  'anatomie-voies-urinaires': 'Anatomie - Voies Urinaires',
  'physiologie-filtration': 'Physiologie - Filtration',
  'regulation-homeostase': 'Régulation - Homéostasie',
  'pathologie-rein': 'Pathologie - Rein',
  'pathologie-voies-urinaires': 'Pathologie - Voies Urinaires'
};

export const urinaryCategoryColors: Record<string, string> = {
  'anatomie-reins': 'bg-amber-100 text-amber-800',
  'anatomie-voies-urinaires': 'bg-yellow-100 text-yellow-800',
  'physiologie-filtration': 'bg-orange-100 text-orange-800',
  'regulation-homeostase': 'bg-rose-100 text-rose-800',
  'pathologie-rein': 'bg-red-100 text-red-800',
  'pathologie-voies-urinaires': 'bg-pink-100 text-pink-800'
};
