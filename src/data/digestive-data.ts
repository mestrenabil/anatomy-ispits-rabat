export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'anatomie' | 'digestion-mecanique' | 'digestion-chimique' | 'absorption-excretion';
}

export const digestiveData: Question[] = [
  // I. Anatomie du système digestif (1–15)
  {
    id: 1,
    question: "Le système digestif commence par :",
    options: ["Pharynx", "Œsophage", "Bouche", "Estomac"],
    correctAnswer: 2,
    explanation: "Le système digestif commence à la bouche et se termine à l'anus.",
    category: 'anatomie'
  },
  {
    id: 2,
    question: "Le système digestif se termine par :",
    options: ["Rectum", "Côlon", "Anus", "Iléon"],
    correctAnswer: 2,
    explanation: "L'anus est l'orifice terminal du système digestif par lequel les matières fécales sont excrétées.",
    category: 'anatomie'
  },
  {
    id: 3,
    question: "Le pharynx est :",
    options: ["Organe respiratoire", "Carrefour digestif et respiratoire", "Glande", "Muscle"],
    correctAnswer: 1,
    explanation: "Le pharynx est le carrefour des voies digestive et respiratoire.",
    category: 'anatomie'
  },
  {
    id: 4,
    question: "L'épiglotte sert à :",
    options: ["Digérer", "Empêcher les aliments d'entrer dans les voies respiratoires", "Absorber", "Sécréter"],
    correctAnswer: 1,
    explanation: "L'épiglotte est un clapet qui ferme le larynx pendant la déglutition pour éviter le passage des aliments dans les voies respiratoires.",
    category: 'anatomie'
  },
  {
    id: 5,
    question: "Le péristaltisme est :",
    options: ["Réaction chimique", "Mouvement musculaire descendant", "Sécrétion", "Absorption"],
    correctAnswer: 1,
    explanation: "Le péristaltisme est un mouvement de contraction musculaire ondulant qui propulse les aliments tout le long du tube digestif.",
    category: 'anatomie'
  },
  {
    id: 6,
    question: "L'estomac a une forme :",
    options: ["Ovale", "J", "U", "S"],
    correctAnswer: 1,
    explanation: "L'estomac a une forme en J avec une grande courbure à gauche et une petite courbure à droite.",
    category: 'anatomie'
  },
  {
    id: 7,
    question: "Le cardia empêche :",
    options: ["Absorption", "Remontée des aliments", "Sécrétion", "Mastication"],
    correctAnswer: 1,
    explanation: "Le cardia est le sphincter entre l'œsophage et l'estomac qui empêche le reflux gastrique.",
    category: 'anatomie'
  },
  {
    id: 8,
    question: "Le pylore relie :",
    options: ["Bouche–pharynx", "Estomac–intestin grêle", "Intestin–côlon", "Côlon–anus"],
    correctAnswer: 1,
    explanation: "Le pylore est le sphincter qui relie l'estomac au duodénum (première partie de l'intestin grêle).",
    category: 'anatomie'
  },
  {
    id: 9,
    question: "L'intestin grêle comprend :",
    options: ["2 parties", "3 parties", "4 parties", "5 parties"],
    correctAnswer: 1,
    explanation: "L'intestin grêle comprend 3 parties : le duodénum, le jéjunum et l'iléon.",
    category: 'anatomie'
  },
  {
    id: 10,
    question: "Le gros intestin comprend :",
    options: ["Duodénum", "Côlon", "Iléon", "Pancréas"],
    correctAnswer: 1,
    explanation: "Le gros intestin comprend le caecum, le côlon (ascendant, transverse, descendant, sigmoïde), le rectum et le canal anal.",
    category: 'anatomie'
  },
  {
    id: 11,
    question: "Les organes annexes sont :",
    options: ["Bouche et œsophage", "Foie, pancréas, glandes salivaires, vésicule biliaire", "Estomac seul", "Rectum"],
    correctAnswer: 1,
    explanation: "Les organes annexes du système digestif sont le foie, le pancréas, les glandes salivaires et la vésicule biliaire.",
    category: 'anatomie'
  },
  {
    id: 12,
    question: "La langue participe à :",
    options: ["Respiration", "Mastication", "Absorption", "Sécrétion"],
    correctAnswer: 1,
    explanation: "La langue participe à la mastication en déplaçant les aliments et contribue aussi à la déglutition et à la phonation.",
    category: 'anatomie'
  },
  {
    id: 13,
    question: "Les glandes salivaires sécrètent :",
    options: ["Pepsine", "Lipase", "Amylase", "Trypsine"],
    correctAnswer: 2,
    explanation: "Les glandes salivaires sécrètent l'amylase salivaire (ptyaline) qui commence la digestion des glucides.",
    category: 'anatomie'
  },
  {
    id: 14,
    question: "Le rectum sert à :",
    options: ["Digérer", "Stocker les matières fécales", "Sécréter", "Absorber"],
    correctAnswer: 1,
    explanation: "Le rectum est un réservoir qui stocke les matières fécales avant leur excrétion.",
    category: 'anatomie'
  },
  {
    id: 15,
    question: "L'anus assure :",
    options: ["Digestion", "Excrétion", "Absorption", "Sécrétion"],
    correctAnswer: 1,
    explanation: "L'anus est l'orifice terminal assurant l'excrétion des matières fécales (défécation).",
    category: 'anatomie'
  },
  // II. Digestion mécanique (16–25)
  {
    id: 16,
    question: "La digestion mécanique modifie :",
    options: ["Nature chimique", "Forme uniquement", "Composition", "Nutriments"],
    correctAnswer: 1,
    explanation: "La digestion mécanique modifie uniquement la forme physique des aliments sans changer leur nature chimique.",
    category: 'digestion-mecanique'
  },
  {
    id: 17,
    question: "La mastication est réalisée par :",
    options: ["Foie", "Dents", "Pancréas", "Côlon"],
    correctAnswer: 1,
    explanation: "La mastication est réalisée par les dents qui broient les aliments en petits morceaux.",
    category: 'digestion-mecanique'
  },
  {
    id: 18,
    question: "Le brassage se fait dans :",
    options: ["Estomac", "Bouche", "Rectum", "Côlon"],
    correctAnswer: 0,
    explanation: "Le brassage gastrique dans l'estomac mélange les aliments avec le suc gastrique pour former le chyme.",
    category: 'digestion-mecanique'
  },
  {
    id: 19,
    question: "Le péristaltisme existe dans :",
    options: ["Œsophage", "Intestin grêle", "Gros intestin", "Tous"],
    correctAnswer: 3,
    explanation: "Le péristaltisme existe tout le long du tube digestif : œsophage, estomac, intestin grêle et gros intestin.",
    category: 'digestion-mecanique'
  },
  {
    id: 20,
    question: "La digestion mécanique facilite :",
    options: ["Travail des enzymes", "Respiration", "Circulation", "Excrétion"],
    correctAnswer: 0,
    explanation: "En réduisant la taille des particules alimentaires, la digestion mécanique augmente la surface de contact pour les enzymes.",
    category: 'digestion-mecanique'
  },
  {
    id: 21,
    question: "La déglutition est :",
    options: ["Un réflexe", "Une digestion chimique", "Une absorption", "Une excrétion"],
    correctAnswer: 0,
    explanation: "La déglutition est un réflexe complexe qui permet le passage des aliments de la bouche vers l'œsophage.",
    category: 'digestion-mecanique'
  },
  {
    id: 22,
    question: "Les mouvements de segmentation se produisent dans :",
    options: ["Estomac", "Intestin grêle", "Bouche", "Rectum"],
    correctAnswer: 1,
    explanation: "Les mouvements de segmentation de l'intestin grêle mélangent le chyme avec les sucs digestifs.",
    category: 'digestion-mecanique'
  },
  {
    id: 23,
    question: "La durée de la mastication influence :",
    options: ["La digestion chimique", "La résorption", "L'excrétion", "La respiration"],
    correctAnswer: 0,
    explanation: "Une bonne mastication facilite la digestion chimique en augmentant la surface des aliments et en les imprégnant de salive.",
    category: 'digestion-mecanique'
  },
  {
    id: 24,
    question: "Le chyme est formé dans :",
    options: ["Bouche", "Estomac", "Intestin", "Côlon"],
    correctAnswer: 1,
    explanation: "Le chyme est la substance liquide résultant du brassage des aliments dans l'estomac.",
    category: 'digestion-mecanique'
  },
  {
    id: 25,
    question: "La digestion mécanique dans la bouche comprend :",
    options: ["Sécrétion d'enzymes uniquement", "Mastication et insalivation", "Absorption", "Excrétion"],
    correctAnswer: 1,
    explanation: "Dans la bouche, la digestion mécanique comprend la mastication (dents) et l'insalivation (mélange avec la salive).",
    category: 'digestion-mecanique'
  },
  // III. Digestion chimique (26–40)
  {
    id: 26,
    question: "La digestion chimique modifie :",
    options: ["Forme", "Nature des substances", "Couleur", "Volume"],
    correctAnswer: 1,
    explanation: "La digestion chimique transforme les molécules complexes en molécules simples grâce à l'action des enzymes.",
    category: 'digestion-chimique'
  },
  {
    id: 27,
    question: "L'amylase agit sur :",
    options: ["Protéines", "Glucides", "Lipides", "Vitamines"],
    correctAnswer: 1,
    explanation: "L'amylase (salivaire et pancréatique) hydrolyse l'amidon en maltose et dextrines.",
    category: 'digestion-chimique'
  },
  {
    id: 28,
    question: "La digestion des protéines commence dans :",
    options: ["Bouche", "Estomac", "Côlon", "Rectum"],
    correctAnswer: 1,
    explanation: "La digestion des protéines commence dans l'estomac grâce à la pepsine activée par l'acide chlorhydrique.",
    category: 'digestion-chimique'
  },
  {
    id: 29,
    question: "L'enzyme gastrique principale est :",
    options: ["Lipase", "Amylase", "Pepsine", "Trypsine"],
    correctAnswer: 2,
    explanation: "La pepsine est l'enzyme principale de l'estomac, elle clive les protéines en peptides.",
    category: 'digestion-chimique'
  },
  {
    id: 30,
    question: "La pepsine transforme les protéines en :",
    options: ["Acides gras", "Peptides", "Glucose", "Lipides"],
    correctAnswer: 1,
    explanation: "La pepsine hydrolyse les protéines en peptides de taille variable.",
    category: 'digestion-chimique'
  },
  {
    id: 31,
    question: "La trypsine est sécrétée par :",
    options: ["Estomac", "Foie", "Pancréas", "Intestin"],
    correctAnswer: 2,
    explanation: "La trypsine est une enzyme protéolytique sécrétée par le pancréas sous forme de trypsinogène.",
    category: 'digestion-chimique'
  },
  {
    id: 32,
    question: "La trypsine transforme les peptides en :",
    options: ["Acides aminés", "Lipides", "Glucose", "Eau"],
    correctAnswer: 0,
    explanation: "La trypsine et les autres peptidases pancréatiques hydrolysent les peptides en acides aminés.",
    category: 'digestion-chimique'
  },
  {
    id: 33,
    question: "La digestion des lipides se fait principalement au niveau :",
    options: ["Estomac", "Duodénum", "Bouche", "Côlon"],
    correctAnswer: 1,
    explanation: "La digestion des lipides se fait principalement dans le duodénum grâce à la lipase pancréatique et la bile.",
    category: 'digestion-chimique'
  },
  {
    id: 34,
    question: "La bile est produite par :",
    options: ["Pancréas", "Foie", "Estomac", "Intestin"],
    correctAnswer: 1,
    explanation: "La bile est produite en continu par le foie (500-1000 mL/jour).",
    category: 'digestion-chimique'
  },
  {
    id: 35,
    question: "La bile est stockée dans :",
    options: ["Pancréas", "Vésicule biliaire", "Estomac", "Côlon"],
    correctAnswer: 1,
    explanation: "La vésicule biliaire stocke et concentre la bile entre les repas.",
    category: 'digestion-chimique'
  },
  {
    id: 36,
    question: "La bile sert à :",
    options: ["Digérer les protéines", "Émulsionner les lipides", "Produire du glucose", "Absorber l'eau"],
    correctAnswer: 1,
    explanation: "La bile contient des sels biliaires qui émulsionnent les lipides pour faciliter l'action de la lipase.",
    category: 'digestion-chimique'
  },
  {
    id: 37,
    question: "La lipase transforme les lipides en :",
    options: ["Acides gras + glycérol", "Peptides", "Glucose", "Eau"],
    correctAnswer: 0,
    explanation: "La lipase hydrolyse les triglycérides en acides gras et en glycérol.",
    category: 'digestion-chimique'
  },
  {
    id: 38,
    question: "Les sucs digestifs participent à :",
    options: ["Digestion chimique", "Respiration", "Circulation", "Excrétion"],
    correctAnswer: 0,
    explanation: "Les sucs digestifs contiennent les enzymes nécessaires à la digestion chimique des aliments.",
    category: 'digestion-chimique'
  },
  {
    id: 39,
    question: "La digestion chimique produit des substances :",
    options: ["Complexes", "Simples assimilables", "Insolubles", "Non absorbables"],
    correctAnswer: 1,
    explanation: "La digestion chimique transforme les molécules complexes en nutriments simples absorbables.",
    category: 'digestion-chimique'
  },
  {
    id: 40,
    question: "La digestion des glucides commence dans :",
    options: ["Estomac", "Bouche", "Côlon", "Rectum"],
    correctAnswer: 1,
    explanation: "La digestion des glucides commence dans la bouche grâce à l'amylase salivaire.",
    category: 'digestion-chimique'
  },
  // IV. Absorption et excrétion (41–50)
  {
    id: 41,
    question: "L'absorption se fait principalement dans :",
    options: ["Estomac", "Intestin grêle", "Rectum", "Anus"],
    correctAnswer: 1,
    explanation: "L'intestin grêle est le principal site d'absorption des nutriments grâce à sa grande surface et ses villosités.",
    category: 'absorption-excretion'
  },
  {
    id: 42,
    question: "Les villosités intestinales servent à :",
    options: ["Digérer", "Absorber", "Sécréter", "Excréter"],
    correctAnswer: 1,
    explanation: "Les villosités intestinales augmentent la surface d'absorption de l'intestin grêle.",
    category: 'absorption-excretion'
  },
  {
    id: 43,
    question: "Les villosités augmentent :",
    options: ["Volume", "Surface d'absorption", "Température", "Sécrétion"],
    correctAnswer: 1,
    explanation: "Les villosités multiplient par 30 la surface d'absorption de l'intestin grêle.",
    category: 'absorption-excretion'
  },
  {
    id: 44,
    question: "Les matières non digérées vont vers :",
    options: ["Estomac", "Côlon", "Duodénum", "Bouche"],
    correctAnswer: 1,
    explanation: "Les résidus non digérés passent de l'iléon au caecum puis dans le côlon.",
    category: 'absorption-excretion'
  },
  {
    id: 45,
    question: "Le côlon sert principalement à :",
    options: ["Digestion chimique", "Acheminer les déchets et absorber l'eau", "Sécréter des enzymes", "Produire la bile"],
    correctAnswer: 1,
    explanation: "Le côlon absorbe l'eau et les électrolytes des résidus et les achemine vers le rectum.",
    category: 'absorption-excretion'
  },
  {
    id: 46,
    question: "L'excrétion des matières fécales se fait par :",
    options: ["Estomac", "Rectum", "Anus", "Duodénum"],
    correctAnswer: 2,
    explanation: "L'excrétion se fait par l'anus lors de la défécation, contrôlée par les sphincters anal interne et externe.",
    category: 'absorption-excretion'
  },
  {
    id: 47,
    question: "Les nutriments sont absorbables après :",
    options: ["Digestion mécanique", "Digestion chimique", "Mastication", "Respiration"],
    correctAnswer: 1,
    explanation: "La digestion chimique transforme les aliments en nutriments simples (glucose, acides aminés, acides gras) absorbables.",
    category: 'absorption-excretion'
  },
  {
    id: 48,
    question: "Les acides aminés proviennent de la digestion des :",
    options: ["Lipides", "Protéines", "Glucides", "Vitamines"],
    correctAnswer: 1,
    explanation: "Les protéines sont hydrolysées en acides aminés par les enzymes protéolytiques.",
    category: 'absorption-excretion'
  },
  {
    id: 49,
    question: "Les acides gras proviennent de la digestion des :",
    options: ["Protéines", "Lipides", "Glucides", "Eau"],
    correctAnswer: 1,
    explanation: "Les lipides sont hydrolysés en acides gras et glycérol par la lipase.",
    category: 'absorption-excretion'
  },
  {
    id: 50,
    question: "Les glucides complexes deviennent après digestion :",
    options: ["Peptides", "Glucose et autres sucres simples", "Lipides", "Eau"],
    correctAnswer: 1,
    explanation: "Les glucides complexes (amidon) sont hydrolysés en sucres simples (glucose, maltose) absorbables.",
    category: 'absorption-excretion'
  }
];

export const digestiveCategoryLabels: Record<string, string> = {
  'anatomie': "Anatomie",
  'digestion-mecanique': "Digestion Mécanique",
  'digestion-chimique': "Digestion Chimique",
  'absorption-excretion': "Absorption & Excrétion"
};

export const digestiveCategoryColors: Record<string, string> = {
  'anatomie': "bg-purple-500",
  'digestion-mecanique': "bg-orange-500",
  'digestion-chimique': "bg-cyan-500",
  'absorption-excretion': "bg-pink-500"
};
