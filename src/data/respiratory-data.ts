export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'anatomie-voies-respiratoires' | 'physiologie-echanges' | 'mecanique-respiratoire' | 'regulation-respiration' | 'pathologie-pulmonaire';
}

export const respiratoryData: Question[] = [
  // Anatomy - Upper Airways (10 questions)
  {
    id: "resp-001",
    question: "Quelle structure constitue l'entrée supérieure du système respiratoire?",
    options: ["Larynx", "Nez et cavité nasale", "Trachée", "Pharynx"],
    correctAnswer: "Nez et cavité nasale",
    explanation: "Le nez et la cavité nasale constituent l'entrée supérieure du système respiratoire. Ils réchauffent, humidifient et filtrent l'air inspiré.",
    category: "anatomie"
  },
  {
    id: "resp-002",
    question: "Le pharynx est divisé en combien de régions?",
    options: ["2 régions", "3 régions", "4 régions", "5 régions"],
    correctAnswer: "3 régions",
    explanation: "Le pharynx est divisé en 3 régions: nasopharynx, oropharynx et laryngopharynx. Chaque région a des fonctions spécifiques.",
    category: "anatomie"
  },
  {
    id: "resp-003",
    question: "Quel cartilage laryngé est le plus grand?",
    options: ["Cartilage thyroïde", "Cartilage cricoïde", "Cartilage aryténoïde", "Cartilage épiglottique"],
    correctAnswer: "Cartilage thyroïde",
    explanation: "Le cartilage thyroïde est le plus grand cartilage laryngé. Il forme la proéminence laryngée visible dans le cou.",
    category: "anatomie"
  },
  {
    id: "resp-004",
    question: "Quel est le rôle principal de l'épiglotte?",
    options: ["Produire la voix", "Filtrer l'air", "Protéger les voies respiratoires pendant la déglutition", "Dilater la trachée"],
    correctAnswer: "Protéger les voies respiratoires pendant la déglutition",
    explanation: "L'épiglotte bascule vers l'arrière pendant la déglutition pour couvrir l'entrée du larynx et prévenir l'aspiration alimentaire.",
    category: "anatomie"
  },
  {
    id: "resp-005",
    question: "À quel niveau vertébral la trachée commence-t-elle?",
    options: ["C4", "C6", "T1", "T3"],
    correctAnswer: "C6",
    explanation: "La trachée commence au niveau C6 (6ème vertèbre cervicale) à partir du larynx et se divise au niveau de T5.",
    category: "anatomie"
  },
  {
    id: "resp-006",
    question: "Combien de cartilages complètent la trachée?",
    options: ["16-20", "20-30", "30-40", "40-50"],
    correctAnswer: "16-20",
    explanation: "La trachée contient 16 à 20 cartilages en forme de C qui la maintiennent ouverte et la rendent flexible.",
    category: "anatomie"
  },
  {
    id: "resp-007",
    question: "À quel niveau la trachée se divise-t-elle en bronches principales?",
    options: ["T3", "T4", "T5", "T6"],
    correctAnswer: "T5",
    explanation: "La trachée se divise au niveau de T5 (5ème vertèbre thoracique) en bronche principale gauche et bronche principale droite.",
    category: "anatomie"
  },
  {
    id: "resp-008",
    question: "Quelle différence existe-t-il entre la bronche principale droite et gauche?",
    options: ["Longueur et angle d'inclinaison différents", "Même diamètre", "Même nombre de segments", "Pas de différence importante"],
    correctAnswer: "Longueur et angle d'inclinaison différents",
    explanation: "La bronche principale droite est plus courte, plus large et plus verticale que la gauche, ce qui explique pourquoi les aspirations préférentiellement la bronche droite.",
    category: "anatomie"
  },
  {
    id: "resp-009",
    question: "Combien de lobes pulmonaires le poumon droit possède-t-il?",
    options: ["2 lobes", "3 lobes", "4 lobes", "5 lobes"],
    correctAnswer: "3 lobes",
    explanation: "Le poumon droit possède 3 lobes: supérieur, moyen et inférieur. Le poumon gauche n'en a que 2.",
    category: "anatomie"
  },
  {
    id: "resp-010",
    question: "Quelle structure délimite le médiastin dans le thorax?",
    options: ["La plèvre", "Les côtes", "Les lobes pulmonaires", "Le diaphragme"],
    correctAnswer: "La plèvre",
    explanation: "La plèvre viscérale qui enveloppe les poumons délimite le médiastin, la région centrale contenant le cœur et autres structures.",
    category: "anatomie"
  },

  // Anatomy - Lower Airways and Lungs (10 questions)
  {
    id: "resp-011",
    question: "Quelle est l'unité fonctionnelle du poumon où a lieu l'échange gazeux?",
    options: ["Bronchiole", "Alvéole", "Segment pulmonaire", "Acinus"],
    correctAnswer: "Alvéole",
    explanation: "L'alvéole est l'unité fonctionnelle où s'effectuent les échanges gazeux entre l'air et le sang via la membrane alvéolo-capillaire.",
    category: "anatomie"
  },
  {
    id: "resp-012",
    question: "Combien d'alvéoles environ sont présentes dans les poumons?",
    options: ["100 millions", "300 millions", "500 millions", "700 millions"],
    correctAnswer: "300 millions",
    explanation: "Les poumons contiennent environ 300 millions d'alvéoles, donnant une surface d'échange très vaste (environ 70 m²).",
    category: "anatomie"
  },
  {
    id: "resp-013",
    question: "Quel type de cellules produit le surfactant pulmonaire?",
    options: ["Cellules de Clara", "Pneumocytes de type I", "Pneumocytes de type II", "Macrophages alvéolaires"],
    correctAnswer: "Pneumocytes de type II",
    explanation: "Les pneumocytes de type II sécrètent le surfactant pulmonaire, une substance qui réduit la tension superficielle alvéolaire.",
    category: "anatomie"
  },
  {
    id: "resp-014",
    question: "Quelle membrane sépare les alvéoles du sang?",
    options: ["Membrane plasmique", "Membrane alvéolo-capillaire", "Membrane bronchique", "Pleura"],
    correctAnswer: "Membrane alvéolo-capillaire",
    explanation: "La membrane alvéolo-capillaire comprend l'épithélium alvéolaire, la membrane basale et l'endothélium capillaire pour un échange gazeux efficace.",
    category: "anatomie"
  },
  {
    id: "resp-015",
    question: "Quels sont les deux types de pneumocytes dans l'épithélium alvéolaire?",
    options: ["Type I et II", "Type A et B", "Type alpha et bêta", "Type simplifié et complexe"],
    correctAnswer: "Type I et II",
    explanation: "Type I couvre 95% de la surface alvéolaire et facilite l'échange gazeux; Type II produit le surfactant et peut se différencier en Type I.",
    category: "anatomie"
  },
  {
    id: "resp-016",
    question: "Le surfactant pulmonaire est principalement composé de:",
    options: ["Protéines", "Lipides et protéines", "Glucides", "Minéraux"],
    correctAnswer: "Lipides et protéines",
    explanation: "Le surfactant est composé à 90% de lipides (notamment de phospholipides) et 10% de protéines (apoprotéines).",
    category: "anatomie"
  },
  {
    id: "resp-017",
    question: "Quel est le rôle principal du surfactant?",
    options: ["Filtrer les particules", "Réduire la tension superficielle des alvéoles", "Augmenter l'adhésion cellulaire", "Transporter l'oxygène"],
    correctAnswer: "Réduire la tension superficielle des alvéoles",
    explanation: "Le surfactant réduit la tension superficielle, facilitant l'expansion des alvéoles et réduisant l'énergie nécessaire pour la respiration.",
    category: "anatomie"
  },
  {
    id: "resp-018",
    question: "Les bronchioles se caractérisent par:",
    options: ["L'absence d'alvéoles", "La présence de quelques alvéoles", "Une paroi complètement alvéolisée", "L'absence de cartilage"],
    correctAnswer: "La présence de quelques alvéoles",
    explanation: "Les bronchioles sont des bronches terminales avec quelques alvéoles. Elles marquent la transition entre les voies conductrices et les voies respiratoires.",
    category: "anatomie"
  },
  {
    id: "resp-019",
    question: "Quels macrophages jouent un rôle dans la défense pulmonaire?",
    options: ["Macrophages alvéolaires", "Macrophages sériques", "Macrophages tissulaires", "Macrophages ganglionnaires"],
    correctAnswer: "Macrophages alvéolaires",
    explanation: "Les macrophages alvéolaires éliminent les particules et agents pathogènes dans les alvéoles, formant une première ligne de défense pulmonaire.",
    category: "anatomie"
  },
  {
    id: "resp-020",
    question: "La plèvre est composée de:",
    options: ["Une seule couche", "Deux feuillets: viscéral et pariétal", "Trois feuillets distincts", "Quatre feuillets"],
    correctAnswer: "Deux feuillets: viscéral et pariétal",
    explanation: "La plèvre viscérale adhère aux poumons; la plèvre pariétal tapisse la paroi thoracique. L'espace pleural contient un peu de liquide.",
    category: "anatomie"
  },

  // Physiology - Gas Exchange (10 questions)
  {
    id: "resp-021",
    question: "Quel est le mécanisme principal d'échange gazeux aux alvéoles?",
    options: ["Transport actif", "Diffusion simple", "Filtration", "Osmose"],
    correctAnswer: "Diffusion simple",
    explanation: "L'oxygène et le dioxyde de carbone traversent la membrane alvéolo-capillaire par diffusion simple, selon leur gradient de concentration.",
    category: "physiologie"
  },
  {
    id: "resp-022",
    question: "Quel est le rôle principal du dioxyde de carbone dans la respiration?",
    options: ["Fournir l'énergie aux cellules", "Réguler le pH sanguin", "Transporter l'oxygène", "Détruire les pathogènes"],
    correctAnswer: "Réguler le pH sanguin",
    explanation: "Le CO2 maintient le pH sanguin en formant l'acide carbonique. La ventilation est régulée par la PaCO2.",
    category: "physiologie"
  },
  {
    id: "resp-023",
    question: "Quelle est la pression partielle normale d'O2 dans l'air inspiré au niveau de la mer?",
    options: ["159 mmHg", "110 mmHg", "95 mmHg", "40 mmHg"],
    correctAnswer: "159 mmHg",
    explanation: "La pression partielle d'O2 (PO2) dans l'air inspiré est environ 159 mmHg (21% de 760 mmHg).",
    category: "physiologie"
  },
  {
    id: "resp-024",
    question: "Quelle est la PO2 alvéolaire approximativement?",
    options: ["100 mmHg", "160 mmHg", "50 mmHg", "20 mmHg"],
    correctAnswer: "100 mmHg",
    explanation: "La PO2 alvéolaire est environ 100 mmHg, plus basse que l'air inspiré à cause du CO2 produit et de l'humidité.",
    category: "physiologie"
  },
  {
    id: "resp-025",
    question: "Quelle est la PO2 artérielle normale chez l'adulte?",
    options: ["40-50 mmHg", "80-100 mmHg", "120-140 mmHg", "150-160 mmHg"],
    correctAnswer: "80-100 mmHg",
    explanation: "La PaO2 artérielle normale est 80-100 mmHg. Elle est plus basse que l'alvéolaire à cause du shunt physiologique.",
    category: "physiologie"
  },
  {
    id: "resp-026",
    question: "Quelle est la PCO2 artérielle normale?",
    options: ["20-25 mmHg", "35-45 mmHg", "50-60 mmHg", "65-75 mmHg"],
    correctAnswer: "35-45 mmHg",
    explanation: "La PaCO2 artérielle normale est 35-45 mmHg. La ventilation ajuste la PaCO2 pour maintenir l'équilibre acido-basique.",
    category: "physiologie"
  },
  {
    id: "resp-027",
    question: "Comment l'oxygène est-il principalement transporté dans le sang?",
    options: ["Dissous dans le plasma", "Lié à l'hémoglobine", "Lié à la myoglobine", "Sous forme de bicarbonate"],
    correctAnswer: "Lié à l'hémoglobine",
    explanation: "98% de l'O2 est transporté lié à l'hémoglobine des globules rouges. Seulement 2% est dissous dans le plasma.",
    category: "physiologie"
  },
  {
    id: "resp-028",
    question: "Comment le dioxyde de carbone est-il principalement transporté?",
    options: ["Lié à l'hémoglobine uniquement", "Sous forme de bicarbonate (HCO3-)", "Dissous dans le plasma", "Lié à la myoglobine"],
    correctAnswer: "Sous forme de bicarbonate (HCO3-)",
    explanation: "70% du CO2 est transporté sous forme de bicarbonate (HCO3-), 23% lié à l'hémoglobine (carbamiohémoglobine), 7% dissous.",
    category: "physiologie"
  },
  {
    id: "resp-029",
    question: "Quel enzyme catalyse la conversion du CO2 en HCO3- dans les globules rouges?",
    options: ["Lipase", "Anhydrase carbonique", "Protéase", "Phosphatase"],
    correctAnswer: "Anhydrase carbonique",
    explanation: "L'anhydrase carbonique catalyse rapidement la réaction: CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3-",
    category: "physiologie"
  },
  {
    id: "resp-030",
    question: "Qu'est-ce que l'effet Bohr?",
    options: ["Augmentation de la capacité pulmonaire", "Diminution de l'affinité de l'Hb pour O2 avec ↓pH et ↑PCO2", "Augmentation de la saturation en O2", "Diminution du CO2 sanguin"],
    correctAnswer: "Diminution de l'affinité de l'Hb pour O2 avec ↓pH et ↑PCO2",
    explanation: "L'effet Bohr décrit comment le pH bas et la PCO2 élevée diminuent l'affinité de l'hémoglobine pour l'O2, facilitant la libération d'O2 aux tissus actifs.",
    category: "physiologie"
  },

  // Physiology - Breathing Mechanics (10 questions)
  {
    id: "resp-031",
    question: "Quel muscle est le principal muscle inspiratoire?",
    options: ["Muscles intercostaux externes", "Diaphragme", "Muscles scalènes", "Sterno-hyoïdien"],
    correctAnswer: "Diaphragme",
    explanation: "Le diaphragme est responsable de 60-80% de la ventilation normale au repos. Sa contraction augmente le volume thoracique.",
    category: "mecanique"
  },
  {
    id: "resp-032",
    question: "Quels muscles jouent un rôle important dans l'expiration forcée?",
    options: ["Diaphragme et scalènes", "Muscles intercostaux internes et abdominaux", "Muscles intercostaux externes seuls", "Sterno-cléido-mastoïdien"],
    correctAnswer: "Muscles intercostaux internes et abdominaux",
    explanation: "L'expiration passive est élastique, mais l'expiration forcée nécessite la contraction des muscles intercostaux internes et des muscles abdominaux.",
    category: "mecanique"
  },
  {
    id: "resp-033",
    question: "Quel est le volume courant (VT) normal au repos chez l'adulte?",
    options: ["250 mL", "500 mL", "1000 mL", "1500 mL"],
    correctAnswer: "500 mL",
    explanation: "Le volume courant normal chez l'adulte au repos est 500 mL (0,5 L). Il correspond à l'air inspiré/expiré à chaque respiration normale.",
    category: "mecanique"
  },
  {
    id: "resp-034",
    question: "Quel est le volume de l'espace mort anatomique?",
    options: ["50 mL", "150 mL", "300 mL", "500 mL"],
    correctAnswer: "150 mL",
    explanation: "L'espace mort anatomique (voies conductrices sans échange gazeux) est environ 150 mL, soit 30% du volume courant.",
    category: "mecanique"
  },
  {
    id: "resp-035",
    question: "Qu'est-ce que la ventilation alvéolaire?",
    options: ["VT - Espace mort", "VT seul", "VC + VR", "VT / Espace mort"],
    correctAnswer: "VT - Espace mort",
    explanation: "La ventilation alvéolaire = Volume courant - Espace mort. Elle représente le volume d'air participant réellement aux échanges gazeux.",
    category: "mecanique"
  },
  {
    id: "resp-036",
    question: "Quel est la capacité vitale (CV) normale chez l'adulte?",
    options: ["2-3 litres", "3-5 litres", "6-8 litres", "9-10 litres"],
    correctAnswer: "3-5 litres",
    explanation: "La capacité vitale est le volume maximal d'air expirabilité après une inspiration maximale: CV = VR + VE + CV (3-5 L).",
    category: "mecanique"
  },
  {
    id: "resp-037",
    question: "Quel est le volume r��siduel (VR)?",
    options: ["Volume d'air expiré normalement", "Volume qui reste après expiration maximale", "Volume inspiré maximalement", "Espace mort"],
    correctAnswer: "Volume qui reste après expiration maximale",
    explanation: "Le volume résiduel (≈1.5 L) est l'air qui reste dans les poumons après une expiration maximale, maintenant les alvéoles ouvertes.",
    category: "mecanique"
  },
  {
    id: "resp-038",
    question: "Qu'est-ce que la compliance pulmonaire?",
    options: ["La résistance à l'écoulement d'air", "La capacité du poumon à se dilater pour un changement de pression", "La vitesse d'échange gazeux", "La capacité du poumon à se contracter"],
    correctAnswer: "La capacité du poumon à se dilater pour un changement de pression",
    explanation: "La compliance (ou distensibilité) = ΔVolume/ΔPression. Elle est réduite par la fibrose pulmonaire ou augmentée dans l'emphysème.",
    category: "mecanique"
  },
  {
    id: "resp-039",
    question: "Quel facteur diminue la compliance pulmonaire?",
    options: ["Surfactant augmenté", "Fibrose pulmonaire", "Relâchement musculaire", "Respiration profonde"],
    correctAnswer: "Fibrose pulmonaire",
    explanation: "La fibrose rend les poumons rigides, diminuant leur capacité à se dilater. Le surfactant améliore la compliance en réduisant la tension superficielle.",
    category: "mecanique"
  },
  {
    id: "resp-040",
    question: "Qu'est-ce que la résistance des voies respiratoires?",
    options: ["Perte d'énergie dans les poumons", "Opposition au flux d'air due au diamètre et à la viscosité", "Rigidité du parenchyme pulmonaire", "Élasticité du thorax"],
    correctAnswer: "Opposition au flux d'air due au diamètre et à la viscosité",
    explanation: "La résistance = ΔPression/Flux. Elle est inversement proportionnelle à la 4ème puissance du diamètre des voies aériennes (loi de Poiseuille).",
    category: "mecanique"
  },

  // Physiology - Regulation (10 questions)
  {
    id: "resp-041",
    question: "Quel est le principal stimulus de la ventilation?",
    options: ["Hypoxémie (PaO2 basse)", "Hypercapnie (PaCO2 élevée)", "Acidose", "Baisse de la température"],
    correctAnswer: "Hypercapnie (PaCO2 élevée)",
    explanation: "L'augmentation du CO2 (et donc du pH bas) est le stimulus le plus puissant. La ventilation augmente fortement avec la PaCO2.",
    category: "regulation"
  },
  {
    id: "resp-042",
    question: "À quel niveau de PaO2 la ventilation augmente-t-elle significativement?",
    options: ["PaO2 < 100 mmHg", "PaO2 < 80 mmHg", "PaO2 < 60 mmHg", "PaO2 < 40 mmHg"],
    correctAnswer: "PaO2 < 60 mmHg",
    explanation: "La hypoxémie (PaO2 < 60 mmHg) stimule fortement la ventilation via les chémorécepteurs périphériques.",
    category: "regulation"
  },
  {
    id: "resp-043",
    question: "Où sont situés les principaux chémorécepteurs centraux?",
    options: ["Carotide", "Aorte", "Moelle allongée", "Pont"],
    correctAnswer: "Moelle allongée",
    explanation: "Les chémorécepteurs centraux dans la moelle allongée répondent surtout au pH du liquide céphalo-rachidien (réflétant la PaCO2).",
    category: "regulation"
  },
  {
    id: "resp-044",
    question: "Quels sont les centres respiratoires principaux du tronc cérébral?",
    options: ["Hypothalamus et thalamus", "Centre dorsal et ventral dans la moelle allongée", "Cortex moteur", "Cervelet"],
    correctAnswer: "Centre dorsal et ventral dans la moelle allongée",
    explanation: "Le centre dorsal (respiration rhythm) et ventral (expiration) dans la moelle contrôlent la fréquence respiratoire basale.",
    category: "regulation"
  },
  {
    id: "resp-045",
    question: "Quel est le rôle du pont dans la respiration?",
    options: ["Augmente la frequency respiratoire", "Affine le contrôle respiratoire de la moelle", "Réduit la ventilation", "Bloque les réflexes"],
    correctAnswer: "Affine le contrôle respiratoire de la moelle",
    explanation: "Le pont (pneumotaxic et apneustic center) affine le rythme établi par la moelle allongée.",
    category: "regulation"
  },
  {
    id: "resp-046",
    question: "Quel est le réflexe d'inflation pulmonaire de Hering-Breuer?",
    options: ["Arrête l'inspiration en cas de sur-insufflation", "Augmente l'inspiration", "Réduit le volume courant", "Bloque l'expiration"],
    correctAnswer: "Arrête l'inspiration en cas de sur-insufflation",
    explanation: "Ce réflexe vagal prévient la sur-insufflation en stoppant l'inspiration quand le poumon est trop dilaté.",
    category: "regulation"
  },
  {
    id: "resp-047",
    question: "Comment l'anxiété affecte-t-elle la ventilation?",
    options: ["Baisse la ventilation", "Augmente la ventilation et la fréquence respiratoire (hyperventilation)", "N'a pas d'effet", "Bloque la respiration"],
    correctAnswer: "Augmente la ventilation et la fréquence respiratoire (hyperventilation)",
    explanation: "L'anxiété provoque une hyperventilation, réduisant la PaCO2 et causant une alcalose respiratoire.",
    category: "regulation"
  },
  {
    id: "resp-048",
    question: "Quel est l'effet de la température sur la ventilation?",
    options: ["Pas d'effet", "La fièvre diminue la ventilation", "La fièvre augmente la ventilation", "Seul le froid affecte la ventilation"],
    correctAnswer: "La fièvre augmente la ventilation",
    explanation: "L'augmentation de température (fièvre) augmente la ventilation pour maintenir les échanges métaboliques augmentés.",
    category: "regulation"
  },
  {
    id: "resp-049",
    question: "Quel est le rôle du réflexe de toux?",
    options: ["Augmenter l'oxygénation", "Éliminer les sécrétions et objets des voies respiratoires", "Réduire la ventilation", "Augmenter le CO2"],
    correctAnswer: "Éliminer les sécrétions et objets des voies respiratoires",
    explanation: "La toux est un réflexe protecteur qui expulse les sécrétions, mucus, et particules des voies respiratoires par un flux d'air rapide.",
    category: "regulation"
  },
  {
    id: "resp-050",
    question: "Quels nerfs crâniens transmettent le réflexe de déglutition-apnée?",
    options: ["VII et VIII", "IX et X", "XI et XII", "III et IV"],
    correctAnswer: "IX et X",
    explanation: "Les nerfs glosso-pharyngien (IX) et vague (X) contrôlent l'apnée de déglutition (arrêt temporaire de la respiration pendant la déglutition).",
    category: "regulation"
  },

  // Pathology (20 questions)
  {
    id: "resp-051",
    question: "Qu'est-ce que l'apnée du sommeil obstructive (OSA)?",
    options: ["Arrêt central de la respiration", "Obstruction répétée des voies aériennes supérieures pendant le sommeil", "Apnée centrale pendant le jour", "Respiration superficielle"],
    correctAnswer: "Obstruction répétée des voies aériennes supérieures pendant le sommeil",
    explanation: "L'OSA se caractérise par des obstructions répétées (hypopnées/apnées) causant des réveils et une désaturation en O2.",
    category: "pathologie"
  },
  {
    id: "resp-052",
    question: "Quel est le mécanisme principal de l'asthme?",
    options: ["Infection bactérienne", "Inflammation et bronchoconstriction réversibles", "Fibrose pulmonaire irréversible", "Carcinome"],
    correctAnswer: "Inflammation et bronchoconstriction réversibles",
    explanation: "L'asthme implique l'inflammation des voies aériennes et une bronchoconstriction réversible causée par divers déclencheurs.",
    category: "pathologie"
  },
  {
    id: "resp-053",
    question: "Qu'est-ce que la MPOC (BPCO)?",
    options: ["Asthme allergique", "Maladie pulmonaire obstructive chronique (emphysème + bronchite chronique)", "Infection pulmonaire aigüe", "Tumeur pulmonaire"],
    correctAnswer: "Maladie pulmonaire obstructive chronique (emphysème + bronchite chronique)",
    explanation: "La MPOC est une maladie chronique caractérisée par une obstruction irréversible des voies aériennes, généralement due au tabagisme.",
    category: "pathologie"
  },
  {
    id: "resp-054",
    question: "Qu'est-ce que l'emphysème?",
    options: ["Inflammation des bronchioles", "Destruction des alvéoles et perte d'élasticité pulmonaire", "Infection virale", "Accumulation de fluide"],
    correctAnswer: "Destruction des alvéoles et perte d'élasticité pulmonaire",
    explanation: "L'emphysème implique la destruction du tissu alvéolaire, réduisant la surface d'échange et causant une obstruction des voies aériennes.",
    category: "pathologie"
  },
  {
    id: "resp-055",
    question: "Qu'est-ce que la pneumonie?",
    options: ["Inflammation des bronches", "Infection du parenchyme pulmonaire causant une accumulation de liquide", "Fibrillation des poumons", "Paralysie du diaphragme"],
    correctAnswer: "Infection du parenchyme pulmonaire causant une accumulation de liquide",
    explanation: "La pneumonie est une infection qui remplit les alvéoles de liquide/pus, réduisant l'échange gazeux et causant l'hypoxémie.",
    category: "pathologie"
  },
  {
    id: "resp-056",
    question: "Quel est le mécanisme de la fibrose pulmonaire idiopathique?",
    options: ["Infection virale", "Inflammation et remplacement du tissu par du collagène", "Asthme non traité", "Pneumothorax"],
    correctAnswer: "Inflammation et remplacement du tissu par du collagène",
    explanation: "La fibrose pulmonaire idiopathique cause une inflammation et un remplacement progressif du parenchyme par du tissu cicatriciel fibreux.",
    category: "pathologie"
  },
  {
    id: "resp-057",
    question: "Qu'est-ce que le pneumothorax?",
    options: ["Infection pulmonaire", "Accumulation de liquide dans le thorax", "Effondrement du poumon due à l'air dans l'espace pleural", "Épaississement de la plèvre"],
    correctAnswer: "Effondrement du poumon due à l'air dans l'espace pleural",
    explanation: "Le pneumothorax se produit quand l'air entre dans l'espace pleural, provoquant l'effondrement du poumon par perte de pression négative.",
    category: "pathologie"
  },
  {
    id: "resp-058",
    question: "Qu'est-ce que l'épanchement pleural?",
    options: ["Air dans la plèvre", "Accumulation excessive de liquide dans l'espace pleural", "Infection de la plèvre", "Caillot sanguin"],
    correctAnswer: "Accumulation excessive de liquide dans l'espace pleural",
    explanation: "L'épanchement pleural résulte d'une accumulation anormale de liquide due à une inflammation, infection, malignité, ou déséquilibre hémodynamique.",
    category: "pathologie"
  },
  {
    id: "resp-059",
    question: "Quel est le rôle de la protéine surfactante SP-D dans l'immunité innée?",
    options: ["Augmente l'inflammation", "Opsonise les agents pathogènes et améliore la clairance", "Réduit la compliance", "Augmente la bronchoconstriction"],
    correctAnswer: "Opsonise les agents pathogènes et améliore la clairance",
    explanation: "SP-D est une lectine collectine qui reconnaît et opsonise les agents pathogènes, favorisant leur élimination par les macrophages.",
    category: "pathologie"
  },
  {
    id: "resp-060",
    question: "Qu'est-ce que l'SDRA (syndrome de détresse respiratoire de l'adulte)?",
    options: ["Asthme sévère", "Inflammation pulmonaire aiguë avec hypoxémie sévère et infiltrats bilatéraux", "Pneumonie bactérienne", "Emphysème décompensé"],
    correctAnswer: "Inflammation pulmonaire aiguë avec hypoxémie sévère et infiltrats bilatéraux",
    explanation: "L'SDRA est une condition d'urgence caractérisée par une inflammation pulmonaire massive, une augmentation de la perméabilité capillaire, et une hypoxémie réfractaire.",
    category: "pathologie"
  },

  // Additional High-Yield Questions (20 questions)
  {
    id: "resp-061",
    question: "Quel gaz est le plus soluble dans le sang?",
    options: ["Oxygène", "Azote", "Dioxyde de carbone", "Hélium"],
    correctAnswer: "Dioxyde de carbone",
    explanation: "Le CO2 est 20 fois plus soluble que l'O2 dans le plasma sanguin, ce qui explique pourquoi il peut être transporté dissous.",
    category: "physiologie"
  },
  {
    id: "resp-062",
    question: "Quel est le pH normal du sang?",
    options: ["7.0-7.1", "7.35-7.45", "7.5-7.6", "7.8-7.9"],
    correctAnswer: "7.35-7.45",
    explanation: "Le pH sanguin normal est 7.35-7.45, finement régulé par les tampons et la ventilation (CO2) et les reins (HCO3-).",
    category: "regulation"
  },
  {
    id: "resp-063",
    question: "Quel est le contenu normal d'hémoglobine chez l'adulte?",
    options: ["10-12 g/dL", "12-16 g/dL (femme), 13.5-17.5 g/dL (homme)", "18-20 g/dL", "20-24 g/dL"],
    correctAnswer: "12-16 g/dL (femme), 13.5-17.5 g/dL (homme)",
    explanation: "L'hémoglobine normale varie entre 12-16 g/dL chez la femme et 13.5-17.5 g/dL chez l'homme, crucial pour le transport d'O2.",
    category: "physiologie"
  },
  {
    id: "resp-064",
    question: "Qu'est-ce que la courbe de dissociation de l'hémoglobine?",
    options: ["La relation entre O2 et CO2", "La relation entre la PO2 et la saturation en O2 de l'Hb", "La relation entre la fréquence et le volume", "La relation entre la température et la tension"],
    correctAnswer: "La relation entre la PO2 et la saturation en O2 de l'Hb",
    explanation: "La courbe sigmoïde montre comment l'Hb se sature en O2 selon la PO2. Elle se décale selon le pH, la température et la 2,3-DPG.",
    category: "physiologie"
  },
  {
    id: "resp-065",
    question: "Quel enzyme facilite la fixation du CO2 à l'hémoglobine?",
    options: ["Anhydrase carbonique", "Carbamyl-transferase", "Aucune (liaison directe)", "Oxydase"],
    correctAnswer: "Aucune (liaison directe)",
    explanation: "Le CO2 se lie directement aux groupes aminés de l'hémoglobine (carbamiohémoglobine) sans enzyme, différent de la liaison à HCO3-.",
    category: "physiologie"
  },
  {
    id: "resp-066",
    question: "Quel est le ratio ventilation/perfusion (V/Q) normal?",
    options: ["0.5", "0.8-0.9", "1.0", "1.5"],
    correctAnswer: "0.8-0.9",
    explanation: "Le ratio V/Q normal est 0.8-0.9 (légèrement inférieur à 1). Un ratio V/Q bas cause l'hypoxémie, haut cause le shunt pulmonaire.",
    category: "physiologie"
  },
  {
    id: "resp-067",
    question: "Qu'est-ce que le shunt intrapulmonaire?",
    options: ["Dérivation veineuse artérielle", "Sang qui passe par des zones non ventilées (V/Q = 0)", "Augmentation de la ventilation", "Réduction de la perfusion"],
    correctAnswer: "Sang qui passe par des zones non ventilées (V/Q = 0)",
    explanation: "Le shunt intrapulmonaire est du sang veineux qui ne participe pas aux échanges gazeux (V/Q = 0), réduisant la PaO2.",
    category: "physiologie"
  },
  {
    id: "resp-068",
    question: "Quel est le volume de réserve inspiratoire (VRI) normal?",
    options: ["500 mL", "1500-3000 mL", "2000-3500 mL", "4000-5000 mL"],
    correctAnswer: "2000-3500 mL",
    explanation: "Le VRI est le volume d'air qui peut être inspiré après une inspiration normale: 2000-3500 mL, selon la taille et le sexe.",
    category: "mecanique"
  },
  {
    id: "resp-069",
    question: "Quel est le volume de réserve expiratoire (VRE) normal?",
    options: ["500 mL", "1000-1500 mL", "1500-2500 mL", "3000-4000 mL"],
    correctAnswer: "1500-2500 mL",
    explanation: "Le VRE est le volume d'air qui peut être expiré après une expiration normale: 1500-2500 mL.",
    category: "mecanique"
  },
  {
    id: "resp-070",
    question: "Quel est la fréquence respiratoire normale au repos?",
    options: ["8-10 cycles/min", "12-20 cycles/min", "25-30 cycles/min", "35-40 cycles/min"],
    correctAnswer: "12-20 cycles/min",
    explanation: "La fréquence respiratoire normale chez l'adulte au repos est 12-20 cycles par minute. Une fréquence > 20 est la tachypnée.",
    category: "regulation"
  }
];

export const respiratoryCategoryLabels: Record<string, string> = {
  anatomie: "Anatomie des voies respiratoires",
  physiologie: "Physiologie et échanges gazeux",
  mecanique: "Mécanique respiratoire",
  regulation: "Régulation de la respiration",
  pathologie: "Pathologie pulmonaire"
};

export const respiratoryCategoryColors: Record<string, string> = {
  anatomie: "bg-blue-100 text-blue-800 border-blue-300",
  physiologie: "bg-cyan-100 text-cyan-800 border-cyan-300",
  mecanique: "bg-teal-100 text-teal-800 border-teal-300",
  regulation: "bg-green-100 text-green-800 border-green-300",
  pathologie: "bg-red-100 text-red-800 border-red-300"
};
