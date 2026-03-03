export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'generalite-immunite' | 'organes-lymphoides' | 'cellules-immunitaires' | 'anticorps' | 'complement' | 'inflammation' | 'hypersensibilite';
}

export const immuneData: Question[] = [
  // General Immunity
  {
    id: "i001",
    question: "Quels sont les deux types principaux de réponse immunitaire?",
    options: ["Spécifique et non-spécifique", "Innée et adaptative", "Interne et externe", "Cellulaire et humorale"],
    correctAnswer: "Innée et adaptative",
    explanation: "L'immunité innée est non-spécifique et immédiate; l'immunité adaptative est spécifique et lente.",
    category: "generalite-immunite",
    difficulty: "easy"
  },
  {
    id: "i002",
    question: "Quel est le rôle principal du système lymphatique?",
    options: ["Transport de nutriments", "Défense immunitaire et drainage lymphatique", "Production de sang", "Digestion"],
    correctAnswer: "Défense immunitaire et drainage lymphatique",
    explanation: "Le système lymphatique filtre les pathogènes et produit des cellules immunitaires.",
    category: "generalite-immunite",
    difficulty: "easy"
  },
  {
    id: "i003",
    question: "Quel est le premier type de barrière du système immunitaire?",
    options: ["Barrière chimique", "Barrière physique", "Réaction inflammatoire", "Réponse immune"],
    correctAnswer: "Barrière physique",
    explanation: "La peau et les muqueuses forment la première ligne de défense physique.",
    category: "generalite-immunite",
    difficulty: "easy"
  },

  // Lymphoid Organs
  {
    id: "i004",
    question: "Quel organe lymphoïde produit les cellules T?",
    options: ["La moelle osseuse", "Le thymus", "La rate", "Les ganglions lymphatiques"],
    correctAnswer: "Le thymus",
    explanation: "Le thymus produit et mûrit les lymphocytes T.",
    category: "organes-lymphoides",
    difficulty: "easy"
  },
  {
    id: "i005",
    question: "Où sont produits les lymphocytes B?",
    options: ["Le thymus", "La moelle osseuse", "La rate", "Le foie"],
    correctAnswer: "La moelle osseuse",
    explanation: "Les lymphocytes B sont produits et mûrissent dans la moelle osseuse.",
    category: "organes-lymphoides",
    difficulty: "easy"
  },
  {
    id: "i006",
    question: "Quel est le rôle principal de la rate?",
    options: ["Production de lymphocytes uniquement", "Filtration du sang et réponse immune", "Production de globules rouges", "Stockage d'acides gras"],
    correctAnswer: "Filtration du sang et réponse immune",
    explanation: "La rate filtre le sang et contient des cellules immunitaires pour combattre les pathogènes.",
    category: "organes-lymphoides",
    difficulty: "medium"
  },
  {
    id: "i007",
    question: "Quel est le rôle des ganglions lymphatiques?",
    options: ["Production de globules rouges", "Filtration de la lymphe et réponse immune", "Transport du sang", "Digestion"],
    correctAnswer: "Filtration de la lymphe et réponse immune",
    explanation: "Les ganglions lymphatiques filtrent la lymphe et contiennent des cellules immunitaires.",
    category: "organes-lymphoides",
    difficulty: "easy"
  },

  // Immune Cells
  {
    id: "i008",
    question: "Quel type de cellule immunitaire phagocyte directement les pathogènes?",
    options: ["Lymphocyte T", "Lymphocyte B", "Macrophage", "Cellule dendritique"],
    correctAnswer: "Macrophage",
    explanation: "Les macrophages phagocytent et tuent les pathogènes et les débris cellulaires.",
    category: "cellules-immunitaires",
    difficulty: "easy"
  },
  {
    id: "i009",
    question: "Quel est le rôle principal des lymphocytes T CD8+?",
    options: ["Production d'anticorps", "Soutien des autres cellules", "Lyse des cellules infectées", "Phagocytose"],
    correctAnswer: "Lyse des cellules infectées",
    explanation: "Les lymphocytes T CD8+ (cytotoxiques) tuent les cellules infectées ou cancéreuses.",
    category: "cellules-immunitaires",
    difficulty: "medium"
  },
  {
    id: "i010",
    question: "Quel est le rôle principal des lymphocytes T CD4+?",
    options: ["Lyse directe", "Coordination de la réponse immune", "Production d'anticorps", "Phagocytose"],
    correctAnswer: "Coordination de la réponse immune",
    explanation: "Les lymphocytes T CD4+ (helper) coordonnent et soutiennent la réponse immune.",
    category: "cellules-immunitaires",
    difficulty: "medium"
  },
  {
    id: "i011",
    question: "Quelle est la fonction principale des cellules dendritiques?",
    options: ["Phagocytose et présentation d'antigènes", "Lyse cellulaire", "Production de mucus", "Transport"],
    correctAnswer: "Phagocytose et présentation d'antigènes",
    explanation: "Les cellules dendritiques phagocytent les pathogènes et présentent les antigènes aux lymphocytes T.",
    category: "cellules-immunitaires",
    difficulty: "medium"
  },
  {
    id: "i012",
    question: "Quel type de cellule produit les anticorps?",
    options: ["Lymphocyte T", "Lymphocyte B activé (plasmocyte)", "Macrophage", "Neutrophile"],
    correctAnswer: "Lymphocyte B activé (plasmocyte)",
    explanation: "Les plasmocytes (lymphocytes B différenciés) produisent et sécrètent les anticorps.",
    category: "cellules-immunitaires",
    difficulty: "easy"
  },
  {
    id: "i013",
    question: "Quel est le nombre de granulocytes neutrophiles dans le sang?",
    options: ["10-20%", "40-60%", "70-80%", "90-100%"],
    correctAnswer: "40-60%",
    explanation: "Les neutrophiles représentent 40-60% des globules blancs circulants.",
    category: "cellules-immunitaires",
    difficulty: "medium"
  },

  // Antibodies
  {
    id: "i014",
    question: "Quel est l'anticorps le plus abondant dans le sang?",
    options: ["IgM", "IgG", "IgA", "IgE"],
    correctAnswer: "IgG",
    explanation: "IgG est le plus abondant (75%) et fournit l'immunité secondaire à long terme.",
    category: "anticorps",
    difficulty: "easy"
  },
  {
    id: "i015",
    question: "Quel est le premier anticorps produit lors d'une infection primaire?",
    options: ["IgG", "IgM", "IgA", "IgD"],
    correctAnswer: "IgM",
    explanation: "IgM est le premier anticorps produit en réponse à une nouvelle infection.",
    category: "anticorps",
    difficulty: "easy"
  },
  {
    id: "i016",
    question: "Quel anticorps est trouvé principalement dans les sécrétions (salive, lait)?",
    options: ["IgG", "IgM", "IgA", "IgE"],
    correctAnswer: "IgA",
    explanation: "IgA protège les muqueuses et est abondant dans les sécrétions corporelles.",
    category: "anticorps",
    difficulty: "medium"
  },
  {
    id: "i017",
    question: "Quel anticorps est principalement impliqué dans les réactions allergiques?",
    options: ["IgG", "IgM", "IgA", "IgE"],
    correctAnswer: "IgE",
    explanation: "IgE est responsable des réactions d'hypersensibilité de type I (allergies).",
    category: "anticorps",
    difficulty: "easy"
  },

  // Complement System
  {
    id: "i018",
    question: "Quel est le rôle principal du système du complément?",
    options: ["Lyse des cellules bactériennes", "Opsonisation et inflammation", "Lyse des cellules bactériennes et opsonisation", "Production d'anticorps"],
    correctAnswer: "Lyse des cellules bactériennes et opsonisation",
    explanation: "Le complément lyse les pathogènes et facilite leur phagocytose (opsonisation).",
    category: "complement",
    difficulty: "medium"
  },
  {
    id: "i019",
    question: "Quels sont les trois types de pathways du complément?",
    options: ["Rapide, lent, moyen", "Classique, alternatif, lectine", "Inné, adaptatif, intermédiaire", "Primaire, secondaire, tertiaire"],
    correctAnswer: "Classique, alternatif, lectine",
    explanation: "Le complément a trois voies: classique (anticorps), alternative (directe) et lectine.",
    category: "complement",
    difficulty: "hard"
  },

  // Inflammation
  {
    id: "i020",
    question: "Quels sont les signes cardinaux de l'inflammation?",
    options: ["Rougeur et chaleur uniquement", "Rougeur, chaleur, gonflement, douleur et perte de fonction", "Fièvre et frissons", "Perte d'appétit"],
    correctAnswer: "Rougeur, chaleur, gonflement, douleur et perte de fonction",
    explanation: "Les cinq signes d'inflammation sont: calor (chaleur), rubor (rougeur), tumor (gonflement), dolor (douleur) et functio laesa (perte de fonction).",
    category: "inflammation",
    difficulty: "easy"
  },
  {
    id: "i021",
    question: "Quel est le principal médiateur de l'inflammation vasculaire?",
    options: ["L'histamine", "Le bradykinine", "Le complément", "Le TNF-alpha"],
    correctAnswer: "L'histamine",
    explanation: "L'histamine augmente la perméabilité vasculaire et provoque la vasodilatation.",
    category: "inflammation",
    difficulty: "medium"
  },
  {
    id: "i022",
    question: "Quel est le rôle des cellules mastocytes?",
    options: ["Phagocytose", "Production d'anticorps", "Libération de médiateurs inflammatoires", "Lyse de pathogènes"],
    correctAnswer: "Libération de médiateurs inflammatoires",
    explanation: "Les mastocytes libèrent l'histamine et d'autres médiateurs lors de la dégranulation.",
    category: "inflammation",
    difficulty: "medium"
  },

  // Hypersensitivity and Autoimmunity
  {
    id: "i023",
    question: "Quel type d'hypersensibilité est une réaction allergique immédiate?",
    options: ["Type I", "Type II", "Type III", "Type IV"],
    correctAnswer: "Type I",
    explanation: "L'hypersensibilité Type I est une réaction immédiate médiée par IgE.",
    category: "hypersensibilite",
    difficulty: "easy"
  },
  {
    id: "i024",
    question: "Qu'est-ce qu'une maladie auto-immune?",
    options: ["Infection bactérienne", "Réaction du système immunitaire contre ses propres cellules", "Carence immunitaire", "Allergie"],
    correctAnswer: "Réaction du système immunitaire contre ses propres cellules",
    explanation: "Les maladies auto-immunes surviennent quand le système immunitaire attaque le corps lui-même.",
    category: "hypersensibilite",
    difficulty: "easy"
  },
  {
    id: "i025",
    question: "Qu'est-ce que le VIH attaque principalement?",
    options: ["Les lymphocytes T CD8+", "Les lymphocytes T CD4+ (helpers)", "Les macrophages", "Les cellules B"],
    correctAnswer: "Les lymphocytes T CD4+ (helpers)",
    explanation: "Le VIH détruit les lymphocytes T CD4+, compromettant la réponse immune.",
    category: "hypersensibilite",
    difficulty: "easy"
  }
];

export const immuneCategoryLabels: Record<string, string> = {
  'generalite-immunite': 'Généralités Immunité',
  'organes-lymphoides': 'Organes Lymphoïdes',
  'cellules-immunitaires': 'Cellules Immunitaires',
  'anticorps': 'Anticorps',
  'complement': 'Système Complément',
  'inflammation': 'Inflammation',
  'hypersensibilite': 'Hypersensibilité'
};

export const immuneCategoryColors: Record<string, string> = {
  'generalite-immunite': 'bg-fuchsia-100 text-fuchsia-800',
  'organes-lymphoides': 'bg-purple-100 text-purple-800',
  'cellules-immunitaires': 'bg-violet-100 text-violet-800',
  'anticorps': 'bg-pink-100 text-pink-800',
  'complement': 'bg-rose-100 text-rose-800',
  'inflammation': 'bg-red-100 text-red-800',
  'hypersensibilite': 'bg-orange-100 text-orange-800'
};
