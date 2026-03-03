export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'anatomie-structure' | 'physiologie-contraction' | 'types-fibres' | 'metabolisme';
}

export const muscularData: Question[] = [
  // Anatomy - Structure
  {
    id: "m001",
    question: "Quel type de muscle constitue la majorité des muscles du corps?",
    options: ["Muscle lisse", "Muscle cardiaque", "Muscle squelettique", "Muscle viscéral"],
    correctAnswer: "Muscle squelettique",
    explanation: "Le muscle squelettique représente environ 40% du poids corporel et est responsable du mouvement volontaire.",
    category: "anatomie-structure",
    difficulty: "easy"
  },
  {
    id: "m002",
    question: "Quel est l'ordre correct de l'organisation musculaire de la plus grande à la plus petite unité?",
    options: ["Sarcomère → Myofibrille → Fibre musculaire → Muscle", "Muscle → Faisceau → Fibre → Myofibrille", "Faisceau → Muscle → Fibre → Sarcomère", "Muscle → Fibre musculaire → Myofibrille → Sarcomère"],
    correctAnswer: "Muscle → Fibre musculaire → Myofibrille → Sarcomère",
    explanation: "L'organisation musculaire va du muscle entier au plus petit sarcomère (unité contractile).",
    category: "anatomie-structure",
    difficulty: "medium"
  },
  {
    id: "m003",
    question: "Quel est le plus petit raccourcissement mécanique du muscle?",
    options: ["La fibre musculaire", "La myofibrille", "Le sarcomère", "Le sarcoplasme"],
    correctAnswer: "Le sarcomère",
    explanation: "Le sarcomère est l'unité contractile fonctionnelle du muscle entre deux disques Z.",
    category: "anatomie-structure",
    difficulty: "medium"
  },
  {
    id: "m004",
    question: "Quelles sont les deux protéines contractiles principales du muscle?",
    options: ["Actine et myosine", "Tropomyosine et troponine", "Titine et dystrrophine", "Actine et tropomyosine"],
    correctAnswer: "Actine et myosine",
    explanation: "L'actine (mince filament) et la myosine (épais filament) sont les protéines contractiles responsables de la contraction.",
    category: "anatomie-structure",
    difficulty: "easy"
  },
  {
    id: "m005",
    question: "Quelle protéine réglemente l'interaction actine-myosine au repos?",
    options: ["La myosine", "La tropomyosine", "La troponine", "La titine"],
    correctAnswer: "La tropomyosine",
    explanation: "La tropomyosine bloque les sites de liaison de la myosine sur l'actine au repos.",
    category: "anatomie-structure",
    difficulty: "medium"
  },
  {
    id: "m006",
    question: "Quel est le rôle principal de la troponine?",
    options: ["Générer la force contractile", "Réguler l'accès du calcium", "Maintenir l'élasticité musculaire", "Fournir l'énergie"],
    correctAnswer: "Réguler l'accès du calcium",
    explanation: "La troponine lie le calcium et provoque un changement de conformation qui expose les sites de liaison de la myosine.",
    category: "anatomie-structure",
    difficulty: "medium"
  },
  {
    id: "m007",
    question: "Quel organe contient la plupart des réserves énergétiques du muscle?",
    options: ["La mitochondrie", "Le sarcoplasme", "Le réticulum sarcoplasmique", "La membrane plasmique"],
    correctAnswer: "La mitochondrie",
    explanation: "Les mitochondries produisent l'ATP nécessaire à la contraction musculaire.",
    category: "anatomie-structure",
    difficulty: "easy"
  },
  {
    id: "m008",
    question: "Quel disque marque les limites du sarcomère?",
    options: ["Disque A", "Disque H", "Disque Z", "Disque M"],
    correctAnswer: "Disque Z",
    explanation: "Les disques Z (ou lignes Z) marquent les limites du sarcomère.",
    category: "anatomie-structure",
    difficulty: "medium"
  },
  {
    id: "m009",
    question: "Quelle est la fonction principale du réticulum sarcoplasmique?",
    options: ["Produire l'ATP", "Stocker et libérer le calcium", "Synthétiser les protéines", "Générer la force contractile"],
    correctAnswer: "Stocker et libérer le calcium",
    explanation: "Le réticulum sarcoplasmique accumule le calcium au repos et le libère lors de la stimulation.",
    category: "anatomie-structure",
    difficulty: "easy"
  },
  {
    id: "m010",
    question: "Combien de nucléi une fibre musculaire squelettique possède-t-elle généralement?",
    options: ["1", "5", "10-100", "1000+"],
    correctAnswer: "10-100",
    explanation: "Les fibres musculaires squelettiques sont multinucléées avec 10-100 noyaux ou plus.",
    category: "anatomie-structure",
    difficulty: "medium"
  },

  // Physiology - Contraction
  {
    id: "m011",
    question: "Quel est le premier événement du processus de contraction musculaire?",
    options: ["Libération du calcium", "Liaison de l'ATP", "Liaison croisée actine-myosine", "Hyperpolarisation de la membrane"],
    correctAnswer: "Libération du calcium",
    explanation: "La contraction commence par la libération du calcium du réticulum sarcoplasmique.",
    category: "physiologie-contraction",
    difficulty: "medium"
  },
  {
    id: "m012",
    question: "Quel Ion est essentiel pour la contraction musculaire?",
    options: ["Sodium", "Potassium", "Calcium", "Chlore"],
    correctAnswer: "Calcium",
    explanation: "Le calcium se lie à la troponine et déclenche la cascade de contraction.",
    category: "physiologie-contraction",
    difficulty: "easy"
  },
  {
    id: "m013",
    question: "Quel processus décrit le raccourcissement musculaire?",
    options: ["Théorie du filament glissant", "Théorie élastique", "Théorie de la contraction ionique", "Théorie thermoélectrique"],
    correctAnswer: "Théorie du filament glissant",
    explanation: "La théorie du filament glissant décrit comment les filaments fins glissent le long des filaments épais.",
    category: "physiologie-contraction",
    difficulty: "medium"
  },
  {
    id: "m014",
    question: "Quel est l'ordre des événements du cycle de contraction?",
    options: ["Liaison croisée → Coup de puissance → Détachement → Réactivation", "Attachement → Coup de puissance → Détachement → Recherche", "Liaison croisée → Coup de puissance → Recherche → Détachement", "Détachement → Liaison croisée → Coup de puissance → Réactivation"],
    correctAnswer: "Attachement → Coup de puissance → Détachement → Recherche",
    explanation: "Le cycle de contraction comprend: 1) Formation de la liaison croisée, 2) Coup de puissance, 3) Détachement et 4) Recherche pour la prochaine liaison.",
    category: "physiologie-contraction",
    difficulty: "hard"
  },
  {
    id: "m015",
    question: "Combien de ATP est consommé par cycle de contraction d'une molécule de myosine?",
    options: ["0,5", "1", "2", "3"],
    correctAnswer: "1",
    explanation: "Chaque cycle de contraction consomme environ 1 ATP.",
    category: "physiologie-contraction",
    difficulty: "medium"
  },
  {
    id: "m016",
    question: "Quel est le rôle de l'ATP dans le détachement de la myosine de l'actine?",
    options: ["Fournir l'énergie pour le détachement", "Bloquer la liaison croisée", "Relâcher le calcium", "Réactiver la troponine"],
    correctAnswer: "Fournir l'énergie pour le détachement",
    explanation: "L'ATP se lie à la tête de myosine, fournissant l'énergie pour le détachement de l'actine.",
    category: "physiologie-contraction",
    difficulty: "medium"
  },
  {
    id: "m017",
    question: "Quel neurotransmetteur est libéré à la jonction neuromusculaire?",
    options: ["GABA", "Glutamate", "Acétylcholine", "Sérotonine"],
    correctAnswer: "Acétylcholine",
    explanation: "L'acétylcholine est le neurotransmetteur utilisé à la jonction neuromusculaire pour initier la contraction.",
    category: "physiologie-contraction",
    difficulty: "easy"
  },
  {
    id: "m018",
    question: "Qu'est-ce qu'un potentiel d'action musculaire?",
    options: ["La relaxation du muscle", "Un changement d'potentiel électrique de la membrane musculaire", "La réabsorption du calcium", "La synthèse d'ATP"],
    correctAnswer: "Un changement d'potentiel électrique de la membrane musculaire",
    explanation: "Le potentiel d'action musculaire est la dépolarisation de la membrane qui précède la contraction.",
    category: "physiologie-contraction",
    difficulty: "medium"
  },
  {
    id: "m019",
    question: "Quel mécanisme arrête la contraction musculaire?",
    options: ["Synthèse de new ATP", "Absorption du calcium par le réticulum sarcoplasmique", "Augmentation de la troponine", "Dégénération de l'acétylcholine"],
    correctAnswer: "Absorption du calcium par le réticulum sarcoplasmique",
    explanation: "La contraction s'arrête quand le calcium est réabsorbé par le réticulum sarcoplasmique.",
    category: "physiologie-contraction",
    difficulty: "medium"
  },
  {
    id: "m020",
    question: "Quel est l'effet du tétanos musculaire?",
    options: ["Relaxation complète", "Contraction soutenue sans relaxation", "Contraction partielle", "Fatigue rapide"],
    correctAnswer: "Contraction soutenue sans relaxation",
    explanation: "Le tétanos est une contraction musculaire soutenue due à une stimulation répétée rapide.",
    category: "physiologie-contraction",
    difficulty: "medium"
  },

  // Types of Muscle Fibers
  {
    id: "m021",
    question: "Quelle est la principale différence entre les fibres Slow-Twitch et Fast-Twitch?",
    options: ["Vélocité de contraction uniquement", "Contenu en myoglobine", "Vitesse et résistance à la fatigue", "Taille des mitochondries"],
    correctAnswer: "Vitesse et résistance à la fatigue",
    explanation: "Fibres lentes (Type I): contraction lente, résistantes à la fatigue. Fibres rapides (Type II): contraction rapide, fatigables.",
    category: "types-fibres",
    difficulty: "medium"
  },
  {
    id: "m022",
    question: "Quel type de fibre est prédominant chez les coureurs de marathon?",
    options: ["Type I (Slow-twitch)", "Type IIa (Fast-twitch oxydatif)", "Type IIx (Fast-twitch glycolytique)", "Type III"],
    correctAnswer: "Type I (Slow-twitch)",
    explanation: "Les coureurs de marathon développent une prépondérance de fibres Type I résistantes à la fatigue.",
    category: "types-fibres",
    difficulty: "easy"
  },
  {
    id: "m023",
    question: "Quel pigment donne aux muscles lents leur couleur rouge?",
    options: ["Hémoglobine", "Myoglobine", "Biliruubine", "Cytochrome"],
    correctAnswer: "Myoglobine",
    explanation: "La myoglobine, un pigment rouge, stocke l'oxygène dans les fibres lentes.",
    category: "types-fibres",
    difficulty: "easy"
  },
  {
    id: "m024",
    question: "Quel type de fibre préfère le métabolisme anaérobie?",
    options: ["Type I", "Type IIa", "Type IIx (IIb)", "Type III"],
    correctAnswer: "Type IIx (IIb)",
    explanation: "Les fibres Type IIx dépendent du métabolisme anaérobie et se fatiguent rapidement.",
    category: "types-fibres",
    difficulty: "medium"
  },
  {
    id: "m025",
    question: "Quel type de fibre est utilisé pour les mouvements fins et précis?",
    options: ["Type II rapide", "Type I lent", "Type IIx", "Type III"],
    correctAnswer: "Type I lent",
    explanation: "Les fibres Type I sont préférées pour les mouvements fins et les activités d'endurance.",
    category: "types-fibres",
    difficulty: "easy"
  }
];

export const muscularCategoryLabels: Record<string, string> = {
  'anatomie-structure': 'Anatomie - Structure',
  'physiologie-contraction': 'Physiologie - Contraction',
  'types-fibres': 'Types de Fibres'
};

export const muscularCategoryColors: Record<string, string> = {
  'anatomie-structure': 'bg-indigo-100 text-indigo-800',
  'physiologie-contraction': 'bg-purple-100 text-purple-800',
  'types-fibres': 'bg-violet-100 text-violet-800'
};
