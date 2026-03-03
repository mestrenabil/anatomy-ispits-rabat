export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'generalite' | 'hypophyse-hypothalamus' | 'thyroide' | 'surrenales' | 'pancreas';
}

export const endocrineData: Question[] = [
  // General Endocrine
  {
    id: "e001",
    question: "Quel est le rôle principal du système endocrinien?",
    options: ["Circulation sanguine", "Régulation hormonale et homéostasie", "Contraction musculaire", "Transmission nerveuse"],
    correctAnswer: "Régulation hormonale et homéostasie",
    explanation: "Le système endocrinien régule le corps via des hormones pour maintenir l'homéostasie.",
    category: "generalite",
    difficulty: "easy"
  },
  {
    id: "e002",
    question: "Quelle glande est maître du système endocrinien?",
    options: ["La thyroïde", "L'hypothalamus", "L'hypophyse", "Les surrénales"],
    correctAnswer: "L'hypophyse",
    explanation: "L'hypophyse est la glande maître qui contrôle la plupart des autres glandes endocrines.",
    category: "generalite",
    difficulty: "easy"
  },
  {
    id: "e003",
    question: "Quel est le mécanisme de rétroaction négative en endocrinologie?",
    options: ["Amplification continue de la sécrétion", "Réduction de la sécrétion quand le niveau augmente", "Augmentation de la sécrétion quand le niveau baisse", "Absence de régulation"],
    correctAnswer: "Réduction de la sécrétion quand le niveau augmente",
    explanation: "La rétroaction négative arrête la production hormonale quand les niveaux sont suffisants.",
    category: "generalite",
    difficulty: "medium"
  },

  // Pituitary and Hypothalamus
  {
    id: "e004",
    question: "Quelle est la principale hormone du lobe antérieur de l'hypophyse?",
    options: ["L'ADH", "L'oxytocine", "La somatotropine (hormone de croissance)", "La vasopressine"],
    correctAnswer: "La somatotropine (hormone de croissance)",
    explanation: "L'hormone de croissance est une hormone majeure du lobe antérieur qui régule la croissance.",
    category: "hypophyse-hypothalamus",
    difficulty: "easy"
  },
  {
    id: "e005",
    question: "Où sont produites l'ADH et l'oxytocine?",
    options: ["Lobe antérieur de l'hypophyse", "Lobe postérieur de l'hypophyse", "Hypothalamus", "Thyroïde"],
    correctAnswer: "Hypothalamus",
    explanation: "L'hypothalamus produit l'ADH et l'oxytocine, stockées et libérées par le lobe postérieur.",
    category: "hypophyse-hypothalamus",
    difficulty: "medium"
  },
  {
    id: "e006",
    question: "Quel est le rôle principal de l'hormone antidiurétique (ADH)?",
    options: ["Augmenter la diurèse", "Augmenter la réabsorption d'eau rénale", "Stimuler la synthèse rénale", "Réduire la pression artérielle"],
    correctAnswer: "Augmenter la réabsorption d'eau rénale",
    explanation: "L'ADH augmente la perméabilité rénale à l'eau, concentrant l'urine.",
    category: "hypophyse-hypothalamus",
    difficulty: "easy"
  },
  {
    id: "e007",
    question: "Quel est le rôle principal de l'oxytocine?",
    options: ["Croissance et métabolisme", "Reproduction et lactation", "Réabsorption d'eau", "Métabolisme du calcium"],
    correctAnswer: "Reproduction et lactation",
    explanation: "L'oxytocine stimule les contractions utérines et la libération du lait.",
    category: "hypophyse-hypothalamus",
    difficulty: "easy"
  },

  // Thyroid
  {
    id: "e008",
    question: "Quel est le rôle principal des hormones thyroïdiennes?",
    options: ["Croissance osseuse uniquement", "Métabolisme et thermogénèse", "Contrôle nerveux", "Défense immunitaire"],
    correctAnswer: "Métabolisme et thermogénèse",
    explanation: "Les hormones T3 et T4 régulent le taux métabolique et la production de chaleur.",
    category: "thyroide",
    difficulty: "easy"
  },
  {
    id: "e009",
    question: "Quel minéral est essentiel pour la synthèse des hormones thyroïdiennes?",
    options: ["Le zinc", "L'iode", "Le sélénium", "Le fer"],
    correctAnswer: "L'iode",
    explanation: "L'iode est un constituant essentiel de T3 et T4.",
    category: "thyroide",
    difficulty: "easy"
  },
  {
    id: "e010",
    question: "Quelle hormone thyroïdienne est la plus active?",
    options: ["T3 (triiodothyronine)", "T4 (thyroxine)", "Calcitonine", "TSH"],
    correctAnswer: "T3 (triiodothyronine)",
    explanation: "T3 est plus puissante que T4, bien que T4 soit plus abondante.",
    category: "thyroide",
    difficulty: "medium"
  },
  {
    id: "e011",
    question: "Quel est le rôle principal de la calcitonine?",
    options: ["Augmenter le calcium sanguin", "Diminuer le calcium sanguin", "Augmenter le phosphate", "Réduire le potassium"],
    correctAnswer: "Diminuer le calcium sanguin",
    explanation: "La calcitonine réduit les niveaux de calcium en inhibant la résorption osseuse.",
    category: "thyroide",
    difficulty: "medium"
  },

  // Parathyroid
  {
    id: "e012",
    question: "Quel est le rôle principal de la parathormone (PTH)?",
    options: ["Diminuer le calcium sanguin", "Augmenter le calcium sanguin", "Réduire le phosphate sanguin", "Réguler la thyroïde"],
    correctAnswer: "Augmenter le calcium sanguin",
    explanation: "La PTH augmente le calcium sanguin en stimulant la résorption osseuse et la réabsorption rénale.",
    category: "parathyroide",
    difficulty: "easy"
  },
  {
    id: "e013",
    question: "Quel stimulus provoque la libération de PTH?",
    options: ["Hypercalcémie", "Hypocalcémie", "Hyperphosphatémie", "Augmentation de la vitamine D"],
    correctAnswer: "Hypocalcémie",
    explanation: "Les faibles niveaux de calcium stimulent la libération de PTH.",
    category: "parathyroide",
    difficulty: "medium"
  },

  // Adrenal Glands
  {
    id: "e014",
    question: "Quelles sont les deux parties principales de la glande surrénale?",
    options: ["Cortex et pulpe", "Médulla et capsule", "Cortex et médulla", "Zone externe et interne"],
    correctAnswer: "Cortex et médulla",
    explanation: "Le cortex surrénalien (externe) et la médulla surrénalienne (interne) sont les deux principales régions.",
    category: "surrenales",
    difficulty: "easy"
  },
  {
    id: "e015",
    question: "Quel est le principal glucocorticoïde produit par le cortex surrénalien?",
    options: ["L'aldostérone", "Le cortisol", "La DHEA", "L'androgenèse"],
    correctAnswer: "Le cortisol",
    explanation: "Le cortisol est le principal glucocorticoïde qui régule le métabolisme du glucose et les réponses au stress.",
    category: "surrenales",
    difficulty: "easy"
  },
  {
    id: "e016",
    question: "Quel est le rôle principal du cortisol?",
    options: ["Glycémie élevée et réaction au stress", "Baisse de la glycémie", "Augmentation du potassium sanguin", "Réduction de la sodium"],
    correctAnswer: "Glycémie élevée et réaction au stress",
    explanation: "Le cortisol augmente la glucose et prépare le corps au stress.",
    category: "surrenales",
    difficulty: "medium"
  },
  {
    id: "e017",
    question: "Quelle hormone est libérée par la médulla surrénalienne en réponse au stress?",
    options: ["Cortisol", "Adrénaline et noradrénaline", "Aldostérone", "Testostérone"],
    correctAnswer: "Adrénaline et noradrénaline",
    explanation: "La médulla libère l'adrénaline et la noradrénaline pour la réaction 'combat ou fuite'.",
    category: "surrenales",
    difficulty: "easy"
  },
  {
    id: "e018",
    question: "Quel est le rôle principal de l'aldostérone?",
    options: ["Croissance osseuse", "Équilibre sodium-potassium", "Métabolisme du calcium", "Production d'énergie"],
    correctAnswer: "Équilibre sodium-potassium",
    explanation: "L'aldostérone régule l'équilibre hydro-électrolytique en augmentant la réabsorption sodique rénale.",
    category: "surrenales",
    difficulty: "medium"
  },

  // Pancreas
  {
    id: "e019",
    question: "Quelle hormone du pancréas abaisse la glycémie?",
    options: ["Le glucagon", "L'insuline", "La somatostatine", "L'amyline"],
    correctAnswer: "L'insuline",
    explanation: "L'insuline réduit la glycémie en favorisant l'absorption cellulaire du glucose.",
    category: "pancreas",
    difficulty: "easy"
  },
  {
    id: "e020",
    question: "Quel est le rôle principal du glucagon?",
    options: ["Réduire la glycémie", "Augmenter la glycémie", "Stimuler l'absorption du glucose", "Bloquer la lipogenèse"],
    correctAnswer: "Augmenter la glycémie",
    explanation: "Le glucagon augmente la glycémie en stimulant la glycogénolyse et la gluconéogenèse.",
    category: "pancreas",
    difficulty: "easy"
  },
  {
    id: "e021",
    question: "Quels types de cellules sécrètent l'insuline et le glucagon?",
    options: ["Cellules acineuses", "Cellules bêta et cellules alpha", "Cellules delta", "Cellules gamma"],
    correctAnswer: "Cellules bêta et cellules alpha",
    explanation: "Les cellules bêta sécrètent l'insuline et les cellules alpha sécrètent le glucagon.",
    category: "pancreas",
    difficulty: "medium"
  },

  // Reproductive Hormones
  {
    id: "e022",
    question: "Quelle hormone contrôle le cycle menstruel féminin?",
    options: ["La testostérone", "L'œstrogène et la progestérone", "L'insuline", "Le cortisol"],
    correctAnswer: "L'œstrogène et la progestérone",
    explanation: "L'œstrogène et la progestérone régulent le cycle reproductif féminin.",
    category: "hormones-reproductives",
    difficulty: "easy"
  },
  {
    id: "e023",
    question: "Quelle est la principale hormone sexuelle masculine?",
    options: ["L'œstrogène", "La progestérone", "La testostérone", "L'inhibine"],
    correctAnswer: "La testostérone",
    explanation: "La testostérone est la principale hormone androgène responsable des caractères sexuels secondaires masculins.",
    category: "hormones-reproductives",
    difficulty: "easy"
  },
  {
    id: "e024",
    question: "Quelle hormone stimule la maturation folliculaire ovarienne?",
    options: ["LH", "FSH", "Prolactine", "HCG"],
    correctAnswer: "FSH",
    explanation: "La hormone folliculo-stimulante stimule la croissance et la maturation des follicules ovariens.",
    category: "hormones-reproductives",
    difficulty: "medium"
  },

  // Pathophysiology
  {
    id: "e025",
    question: "Qu'est-ce que le diabète de type 1?",
    options: ["Résistance à l'insuline", "Destruction auto-immune des cellules bêta pancréatiques", "Surproduction d'insuline", "Carence en glucagon"],
    correctAnswer: "Destruction auto-immune des cellules bêta pancréatiques",
    explanation: "Le diabète de type 1 résulte de la destruction auto-immune des cellules productrices d'insuline.",
    category: "pathophysiologie",
    difficulty: "easy"
  },
  {
    id: "e026",
    question: "Quelle condition résulte d'une sécrétion excessive de cortisol?",
    options: ["Syndrome d'Addison", "Syndrome de Cushing", "Hyperthyroïdie", "Hypothyroïdie"],
    correctAnswer: "Syndrome de Cushing",
    explanation: "Le syndrome de Cushing résulte d'une exposition chronique à des niveaux excessifs de glucocorticoïdes.",
    category: "pathophysiologie",
    difficulty: "medium"
  },
  {
    id: "e027",
    question: "Qu'est-ce que l'hypothyroïdie?",
    options: ["Production excessive de thyroïde", "Production insuffisante de thyroïde", "Inflammation thyroïdienne", "Cancer thyroïdien"],
    correctAnswer: "Production insuffisante de thyroïde",
    explanation: "L'hypothyroïdie est une sécrétion insuffisante d'hormones thyroïdiennes.",
    category: "pathophysiologie",
    difficulty: "easy"
  }
];

export const endocrineCategoryLabels: Record<string, string> = {
  'generalite': 'Généralités',
  'hypophyse-hypothalamus': 'Hypophyse-Hypothalamus',
  'thyroide': 'Thyroïde',
  'parathyroide': 'Parathyroïde',
  'surrenales': 'Surrénales',
  'pancreas': 'Pancréas',
  'hormones-reproductives': 'Hormones Reproductives',
  'pathophysiologie': 'Pathophysiologie'
};

export const endocrineCategoryColors: Record<string, string> = {
  'generalite': 'bg-teal-100 text-teal-800',
  'hypophyse-hypothalamus': 'bg-cyan-100 text-cyan-800',
  'thyroide': 'bg-sky-100 text-sky-800',
  'parathyroide': 'bg-blue-100 text-blue-800',
  'surrenales': 'bg-emerald-100 text-emerald-800',
  'pancreas': 'bg-green-100 text-green-800',
  'hormones-reproductives': 'bg-lime-100 text-lime-800',
  'pathophysiologie': 'bg-red-100 text-red-800'
};
