export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'generalite' | 'hypophyse-hypothalamus' | 'thyroide' | 'parathyroide' | 'surrenales' | 'pancreas' | 'hormones-reproductives' | 'pathophysiologie';
}

export const endocrineData: Question[] = [
  // General Endocrine
  {
    id: 1,
    question: "Quel est le rôle principal du système endocrinien?",
    options: ["Circulation sanguine", "Régulation hormonale et homéostasie", "Contraction musculaire", "Transmission nerveuse"],
    correctAnswer: 1,
    explanation: "Le système endocrinien régule le corps via des hormones pour maintenir l'homéostasie.",
    category: "generalite"
  },
  {
    id: 2,
    question: "Quelle glande est maître du système endocrinien?",
    options: ["La thyroïde", "L'hypothalamus", "L'hypophyse", "Les surrénales"],
    correctAnswer: 2,
    explanation: "L'hypophyse est la glande maître qui contrôle la plupart des autres glandes endocrines.",
    category: "generalite"
  },
  {
    id: 3,
    question: "Quel est le mécanisme de rétroaction négative en endocrinologie?",
    options: ["Amplification continue de la sécrétion", "Réduction de la sécrétion quand le niveau augmente", "Augmentation de la sécrétion quand le niveau baisse", "Absence de régulation"],
    correctAnswer: 1,
    explanation: "La rétroaction négative arrête la production hormonale quand les niveaux sont suffisants.",
    category: "generalite"
  },
  {
    id: 4,
    question: "Les hormones sont des messagers chimiques qui :",
    options: ["Circulent dans le liquide céphalo-rachidien", "Sont libérées dans le sang et agissent sur des cellules cibles", "Sont produites par les nerfs", "Sont stockées dans l'hypothalamus"],
    correctAnswer: 1,
    explanation: "Les hormones circulant dans le sang se lient aux récepteurs des cellules cibles.",
    category: "generalite"
  },
  {
    id: 5,
    question: "Quelle est la définition d'une hormone?",
    options: ["Une enzyme", "Un messager chimique produit par des glandes endocrines", "Un neurotransmetteur", "Un acide aminé"],
    correctAnswer: 1,
    explanation: "Une hormone est un messager chimique sécrété par des glandes endocrines.",
    category: "generalite"
  },
  {
    id: 6,
    question: "Quel type de molécules servent de base à la plupart des hormones?",
    options: ["Lipides et protéines", "Acides aminés et dérivés", "Carbohydrates", "Tous les types de molécules"],
    correctAnswer: 1,
    explanation: "Les hormones sont dérivées d'acides aminés, de lipides ou de stéroïdes.",
    category: "generalite"
  },
  {
    id: 7,
    question: "Quel est le temps de réponse des hormones?",
    options: ["Secondes", "Minutes à heures", "Millisecondes", "Années"],
    correctAnswer: 1,
    explanation: "La plupart des hormones agissent en minutes à heures, contrairement aux neurotransmetteurs.",
    category: "generalite"
  },
  {
    id: 8,
    question: "Quelle structure contrôle l'hypophyse?",
    options: ["Le thalamus", "L'hypothalamus", "La thyroïde", "Le cervelet"],
    correctAnswer: 1,
    explanation: "L'hypothalamus contrôle l'hypophyse via des hormones libérant.",
    category: "generalite"
  },
  {
    id: 9,
    question: "Quel est le rôle de la feedback négative dans le système endocrinien?",
    options: ["Augmenter la production hormonale", "Maintenir l'homéostasie", "Stimuler la libération de nouvelles hormones", "Bloquer la circulation sanguine"],
    correctAnswer: 1,
    explanation: "La feedback négative régule les hormones pour maintenir l'équilibre corporel.",
    category: "generalite"
  },
  {
    id: 10,
    question: "Comment les hormones lipidiques traversent-elles les membranes cellulaires?",
    options: ["Par transport actif", "Par endocytose", "Directement à travers la membrane", "Par diffusion simple"],
    correctAnswer: 2,
    explanation: "Les hormones lipidiques peuvent traverser directement la membrane lipidique.",
    category: "generalite"
  },
  
  // Pituitary and Hypothalamus
  {
    id: 11,
    question: "Quelle est la principale hormone du lobe antérieur de l'hypophyse?",
    options: ["L'ADH", "L'oxytocine", "La somatotropine (hormone de croissance)", "La vasopressine"],
    correctAnswer: 2,
    explanation: "L'hormone de croissance est une hormone majeure du lobe antérieur.",
    category: "hypophyse-hypothalamus"
  },
  {
    id: 12,
    question: "Où sont produites l'ADH et l'oxytocine?",
    options: ["Lobe antérieur de l'hypophyse", "Lobe postérieur de l'hypophyse", "Hypothalamus", "Thyroïde"],
    correctAnswer: 2,
    explanation: "L'hypothalamus produit ces hormones, stockées et libérées par le lobe postérieur.",
    category: "hypophyse-hypothalamus"
  },
  {
    id: 13,
    question: "Quel est le rôle principal de l'hormone antidiurétique (ADH)?",
    options: ["Augmenter la diurèse", "Augmenter la réabsorption d'eau rénale", "Stimuler la synthèse rénale", "Réduire la pression artérielle"],
    correctAnswer: 1,
    explanation: "L'ADH augmente la perméabilité rénale à l'eau, concentrant l'urine.",
    category: "hypophyse-hypothalamus"
  },
  {
    id: 14,
    question: "Quel stimulus provoque la libération d'ADH?",
    options: ["Hyperosmolarité plasmatique", "Hypo-osmolarité plasmatique", "Augmentation du calcium", "Réduction de la glucose"],
    correctAnswer: 0,
    explanation: "Une osmolarité élevée stimule la libération d'ADH.",
    category: "hypophyse-hypothalamus"
  },
  {
    id: 15,
    question: "Quel est le rôle principal de l'oxytocine?",
    options: ["Croissance et métabolisme", "Reproduction et lactation", "Réabsorption d'eau", "Métabolisme du calcium"],
    correctAnswer: 1,
    explanation: "L'oxytocine stimule les contractions utérines et la libération du lait.",
    category: "hypophyse-hypothalamus"
  },
  {
    id: 16,
    question: "Quelles hormones tropiques l'hypophyse antérieure sécrète-t-elle?",
    options: ["FSH, LH, TSH, ACTH", "ADH et oxytocine", "Somatotropine uniquement", "Prolactine et gonadotropines"],
    correctAnswer: 0,
    explanation: "Le lobe antérieur sécrète FSH, LH, TSH et ACTH qui stimulent d'autres glandes.",
    category: "hypophyse-hypothalamus"
  },
  {
    id: 17,
    question: "Quel est le rôle de la prolactine?",
    options: ["Production laitière", "Croissance osseuse", "Métabolisme", "Reproduction"],
    correctAnswer: 0,
    explanation: "La prolactine stimule la production et la sécrétion de lait.",
    category: "hypophyse-hypothalamus"
  },
  {
    id: 18,
    question: "Comment l'hypothalamus contrôle-t-il le lobe antérieur?",
    options: ["Directement par des neurones", "Par des hormones libérant transportées par le système porte hypophysaire", "Par des nerfs sympathiques", "Par contacte direct"],
    correctAnswer: 1,
    explanation: "Des hormones libérant de l'hypothalamus voyagent via le système porte vers l'hypophyse antérieure.",
    category: "hypophyse-hypothalamus"
  },
  {
    id: 19,
    question: "Quelle hormone de l'hypophyse stimule la thyroïde?",
    options: ["TSH", "FSH", "ACTH", "ADH"],
    correctAnswer: 0,
    explanation: "L'hormone thyréotrope (TSH) stimule la thyroïde à produire ses hormones.",
    category: "hypophyse-hypothalamus"
  },
  {
    id: 20,
    question: "Quelle hormone stimule le cortex surrénalien?",
    options: ["TSH", "LH", "ACTH", "FSH"],
    correctAnswer: 2,
    explanation: "L'ACTH stimule la libération de glucocorticoïdes du cortex surrénalien.",
    category: "hypophyse-hypothalamus"
  },

  // Thyroid
  {
    id: 21,
    question: "Quel est le rôle principal des hormones thyroïdiennes?",
    options: ["Croissance osseuse uniquement", "Métabolisme et thermogénèse", "Contrôle nerveux", "Défense immunitaire"],
    correctAnswer: 1,
    explanation: "Les hormones T3 et T4 régulent le taux métabolique et la production de chaleur.",
    category: "thyroide"
  },
  {
    id: 22,
    question: "Quel minéral est essentiel pour la synthèse des hormones thyroïdiennes?",
    options: ["Le zinc", "L'iode", "Le sélénium", "Le fer"],
    correctAnswer: 1,
    explanation: "L'iode est un constituant essentiel de T3 et T4.",
    category: "thyroide"
  },
  {
    id: 23,
    question: "Quelle hormone thyroïdienne est la plus active?",
    options: ["T3 (triiodothyronine)", "T4 (thyroxine)", "Calcitonine", "TSH"],
    correctAnswer: 0,
    explanation: "T3 est plus puissante que T4.",
    category: "thyroide"
  },
  {
    id: 24,
    question: "Quel est le rôle principal de la calcitonine?",
    options: ["Augmenter le calcium sanguin", "Diminuer le calcium sanguin", "Augmenter le phosphate", "Réduire le potassium"],
    correctAnswer: 1,
    explanation: "La calcitonine réduit les niveaux de calcium en inhibant la résorption osseuse.",
    category: "thyroide"
  },
  {
    id: 25,
    question: "D'où provient la calcitonine?",
    options: ["Lobe antérieur de l'hypophyse", "Parathyroïde", "Thyroïde (cellules C)", "Surrénales"],
    correctAnswer: 2,
    explanation: "Les cellules C de la thyroïde produisent la calcitonine.",
    category: "thyroide"
  },
  {
    id: 26,
    question: "Quel est le principal effet de T3/T4 sur le métabolisme?",
    options: ["Réduction de la consommation d'oxygène", "Augmentation de la consommation d'oxygène", "Pas d'effet", "Inhibition de la respiration cellulaire"],
    correctAnswer: 1,
    explanation: "T3 et T4 augmentent le taux métabolique et la consommation d'oxygène.",
    category: "thyroide"
  },
  {
    id: 27,
    question: "Combien de temps est nécessaire pour que les hormones thyroïdiennes agissent?",
    options: ["Secondes", "Minutes", "Heures à jours", "Semaines"],
    correctAnswer: 2,
    explanation: "Les effets des hormones thyroïdiennes prennent plusieurs heures à jours.",
    category: "thyroide"
  },
  {
    id: 28,
    question: "Quel est le rôle de la thyroglobuline?",
    options: ["Enzymes de synthèse", "Protéine qui stocke T3 et T4", "Récepteur hormonal", "Transporteur sanguin"],
    correctAnswer: 1,
    explanation: "La thyroglobuline stocke T3 et T4 dans les follicules thyroïdiens.",
    category: "thyroide"
  },
  {
    id: 29,
    question: "Quel stimulus provoque la sécrétion de TSH?",
    options: ["Niveaux élevés de T3/T4", "Niveaux bas de T3/T4", "Augmentation du calcium", "Augmentation de la glucose"],
    correctAnswer: 1,
    explanation: "Des niveaux bas de T3/T4 stimulent la libération de TSH.",
    category: "thyroide"
  },
  {
    id: 30,
    question: "Quelle protéine transporte principalement T3 et T4 dans le sang?",
    options: ["Albumine", "Globuline liant les hormones thyroïdiennes (TBG)", "Transthyrétine", "Toutes les options ci-dessus"],
    correctAnswer: 3,
    explanation: "TBG, la transthyrétine et l'albumine transportent toutes les hormones thyroïdiennes.",
    category: "thyroide"
  },

  // Parathyroid
  {
    id: 31,
    question: "Quel est le rôle principal de la parathormone (PTH)?",
    options: ["Diminuer le calcium sanguin", "Augmenter le calcium sanguin", "Réduire le phosphate sanguin", "Réguler la thyroïde"],
    correctAnswer: 1,
    explanation: "La PTH augmente le calcium sanguin en stimulant la résorption osseuse.",
    category: "parathyroide"
  },
  {
    id: 32,
    question: "Quel stimulus provoque la libération de PTH?",
    options: ["Hypercalcémie", "Hypocalcémie", "Hyperphosphatémie", "Augmentation de la vitamine D"],
    correctAnswer: 1,
    explanation: "Les faibles niveaux de calcium stimulent la libération de PTH.",
    category: "parathyroide"
  },
  {
    id: 33,
    question: "Combien de parathyroïdes possède-t-on normalement?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 3,
    explanation: "On possède généralement 4 petites glandes parathyroïdes.",
    category: "parathyroide"
  },
  {
    id: 34,
    question: "Quel est le mécanisme d'action principal de la PTH?",
    options: ["Augmenter l'absorption intestinale de calcium", "Stimuler la résorption osseuse", "Augmenter la réabsorption rénale de calcium", "Tous les mécanismes ci-dessus"],
    correctAnswer: 3,
    explanation: "La PTH agit par tous ces mécanismes pour augmenter le calcium sanguin.",
    category: "parathyroide"
  },
  {
    id: 35,
    question: "Quel est l'effet de la PTH sur le phosphate sanguin?",
    options: ["Augmentation", "Diminution", "Pas d'effet", "Effect varié"],
    correctAnswer: 1,
    explanation: "La PTH augmente l'excrétion rénale de phosphate, réduisant ses niveaux.",
    category: "parathyroide"
  },
  {
    id: 36,
    question: "Quel est le rôle de la vitamine D dans la régulation du calcium?",
    options: ["Réduction de l'absorption intestinale", "Augmentation de l'absorption intestinale de calcium", "Pas de rôle", "Inhibition de la PTH"],
    correctAnswer: 1,
    explanation: "La vitamine D augmente l'absorption intestinale du calcium.",
    category: "parathyroide"
  },
  {
    id: 37,
    question: "Quelle condition résulte d'une hypo-sécrétion de PTH?",
    options: ["Hypercalcémie", "Hypocalcémie", "Hypertension", "Diabète"],
    correctAnswer: 1,
    explanation: "L'hypoparathyroïdie provoque une hypocalcémie.",
    category: "parathyroide"
  },
  {
    id: 38,
    question: "Uelle condition résulte d'une hyper-sécrétion de PTH?",
    options: ["Hypocalcémie", "Hypercalcémie", "Acidose", "Alcalose"],
    correctAnswer: 1,
    explanation: "L'hyperparathyroïdie provoque une hypercalcémie.",
    category: "parathyroide"
  },
  {
    id: 39,
    question: "Quel minéral travaille avec la PTH pour la régulation du calcium?",
    options: ["Potassium", "Magnésium", "Phosphate", "Sodium"],
    correctAnswer: 2,
    explanation: "La PTH et le phosphate régulent ensemble le calcium sanguin.",
    category: "parathyroide"
  },
  {
    id: 40,
    question: "Quel est l'impact de la PTH sur la réabsorption rénale de calcium?",
    options: ["Diminution", "Augmentation", "Pas d'effet", "Inhibition"],
    correctAnswer: 1,
    explanation: "La PTH augmente la réabsorption tubulaire rénale du calcium.",
    category: "parathyroide"
  },

  // Adrenal Glands
  {
    id: 41,
    question: "Quelles sont les deux parties principales de la glande surrénale?",
    options: ["Cortex et pulpe", "Médulla et capsule", "Cortex et médulla", "Zone externe et interne"],
    correctAnswer: 2,
    explanation: "Le cortex surrénalien (externe) et la médulla (interne) sont les deux principales régions.",
    category: "surrenales"
  },
  {
    id: 42,
    question: "Quel est le principal glucocorticoïde produit par le cortex surrénalien?",
    options: ["L'aldostérone", "Le cortisol", "La DHEA", "L'androgenèse"],
    correctAnswer: 1,
    explanation: "Le cortisol est le principal glucocorticoïde du cortex surrénalien.",
    category: "surrenales"
  },
  {
    id: 43,
    question: "Quel est le rôle principal du cortisol?",
    options: ["Glycémie élevée et réaction au stress", "Baisse de la glycémie", "Augmentation du potassium", "Réduction du sodium"],
    correctAnswer: 0,
    explanation: "Le cortisol augmente la glucose et prépare le corps au stress.",
    category: "surrenales"
  },
  {
    id: 44,
    question: "Quelle hormone est libérée par la médulla surrénalienne?",
    options: ["Cortisol", "Adrénaline et noradrénaline", "Aldostérone", "Testostérone"],
    correctAnswer: 1,
    explanation: "La médulla libère l'adrénaline et noradrénaline.",
    category: "surrenales"
  },
  {
    id: 45,
    question: "Quel est le rôle principal de l'aldostérone?",
    options: ["Croissance osseuse", "Équilibre sodium-potassium", "Métabolisme du calcium", "Production d'énergie"],
    correctAnswer: 1,
    explanation: "L'aldostérone régule l'équilibre hydro-électrolytique.",
    category: "surrenales"
  },
  {
    id: 46,
    question: "Quel est le stimulus principal pour la libération d'ACTH?",
    options: ["Niveaux élevés de cortisol", "Niveaux bas de cortisol et stress", "Augmentation du calcium", "Réduction de glucose"],
    correctAnswer: 1,
    explanation: "Un stress ou des niveaux bas de cortisol stimulent la libération d'ACTH.",
    category: "surrenales"
  },
  {
    id: 47,
    question: "Quel est le rôle de la DHEA?",
    options: ["Métabolisme des lipides", "Précurseur des hormones sexuelles", "Régulation du potassium", "Synthèse du glucose"],
    correctAnswer: 1,
    explanation: "La DHEA est un précurseur androgénique des hormones sexuelles.",
    category: "surrenales"
  },
  {
    id: 48,
    question: "Comment l'adrénaline affecte-t-elle le cœur?",
    options: ["Ralentit le rythme", "Augmente la fréquence cardiaque", "Pas d'effet", "Arrête le cœur"],
    correctAnswer: 1,
    explanation: "L'adrénaline augmente la fréquence et la force des contractions cardiaques.",
    category: "surrenales"
  },
  {
    id: 49,
    question: "Quel est le rôle de la noradrénaline?",
    options: ["Relaxation musculaire", "Vasopression et augmentation du débit cardiaque", "Réduction de la pression", "Inhibition de la contraction"],
    correctAnswer: 1,
    explanation: "La noradrénaline augmente la pression artérielle et le débit cardiaque.",
    category: "surrenales"
  },
  {
    id: 50,
    question: "Quelle hormone du cortex surrénalien est minéralocorticoïde principal?",
    options: ["Cortisol", "DHEA", "Aldostérone", "Testostérone"],
    correctAnswer: 2,
    explanation: "L'aldostérone est le minéralocorticoïde principal.",
    category: "surrenales"
  },

  // Pancreas
  {
    id: 51,
    question: "Quelle hormone du pancréas abaisse la glycémie?",
    options: ["Le glucagon", "L'insuline", "La somatostatine", "L'amyline"],
    correctAnswer: 1,
    explanation: "L'insuline réduit la glycémie en favorisant l'absorption cellulaire du glucose.",
    category: "pancreas"
  },
  {
    id: 52,
    question: "Quel est le rôle principal du glucagon?",
    options: ["Réduire la glycémie", "Augmenter la glycémie", "Stimuler l'absorption du glucose", "Bloquer la lipogenèse"],
    correctAnswer: 1,
    explanation: "Le glucagon augmente la glycémie.",
    category: "pancreas"
  },
  {
    id: 53,
    question: "Quels types de cellules sécrètent l'insuline et le glucagon?",
    options: ["Cellules acineuses", "Cellules bêta et alpha", "Cellules delta", "Cellules gamma"],
    correctAnswer: 1,
    explanation: "Cellules bêta sécrètent insuline et cellules alpha sécrètent glucagon.",
    category: "pancreas"
  },
  {
    id: 54,
    question: "Quel stimulus provoque la libération d'insuline?",
    options: ["Glycémie basse", "Glycémie élevée", "Jeûne", "Stress"],
    correctAnswer: 1,
    explanation: "Une glycémie élevée stimule la libération d'insuline.",
    category: "pancreas"
  },
  {
    id: 55,
    question: "Quel stimulus provoque la libération de glucagon?",
    options: ["Glycémie élevée", "Glycémie basse", "Repos", "Digestion"],
    correctAnswer: 1,
    explanation: "Une glycémie basse stimule la libération de glucagon.",
    category: "pancreas"
  },
  {
    id: 56,
    question: "Quel est le rôle principal de la somatostatine pancréatique?",
    options: ["Augmentation de la glycémie", "Stimulation de la digestion", "Inhibition de l'insuline et du glucagon", "Production d'ATP"],
    correctAnswer: 2,
    explanation: "La somatostatine inhibe la libération d'insuline et de glucagon.",
    category: "pancreas"
  },
  {
    id: 57,
    question: "Comment l'insuline abaisse-t-elle la glycémie?",
    options: ["En bloquant la glycolyse", "En favorisant l'absorption de glucose par les cellules", "En inhibant la digestion", "En bloquant la gluconéogenèse"],
    correctAnswer: 1,
    explanation: "L'insuline augmente la captation de glucose par les cellules musculaires et adipeuses.",
    category: "pancreas"
  },
  {
    id: 58,
    question: "Quel est l'effet de l'insuline sur la synthèse du glycogène?",
    options: ["Inhibition", "Stimulation", "Pas d'effet", "Destruction"],
    correctAnswer: 1,
    explanation: "L'insuline stimule la glycogénogenèse (formation du glycogène).",
    category: "pancreas"
  },
  {
    id: 59,
    question: "Quel est l'effet du glucagon sur le glycogène?",
    options: ["Formation", "Dégradation (glycogénolyse)", "Pas d'effet", "Stockage"],
    correctAnswer: 1,
    explanation: "Le glucagon stimule la glycogénolyse (dégradation du glycogène).",
    category: "pancreas"
  },
  {
    id: 60,
    question: "Quel est le rôle de l'amyline?",
    options: ["Augmentation de la glycémie", "Ralentissement de la vidange gastrique", "Augmentation du potassium", "Réduction du sodium"],
    correctAnswer: 1,
    explanation: "L'amyline ralentit la vidange gastrique et supprime le glucagon.",
    category: "pancreas"
  },

  // Reproductive Hormones
  {
    id: 61,
    question: "Quelle hormone contrôle le cycle menstruel féminin?",
    options: ["La testostérone", "L'œstrogène et la progestérone", "L'insuline", "Le cortisol"],
    correctAnswer: 1,
    explanation: "L'œstrogène et la progestérone régulent le cycle reproductif féminin.",
    category: "hormones-reproductives"
  },
  {
    id: 62,
    question: "Quelle est la principale hormone sexuelle masculine?",
    options: ["L'œstrogène", "La progestérone", "La testostérone", "L'inhibine"],
    correctAnswer: 2,
    explanation: "La testostérone est la principale hormone androgène.",
    category: "hormones-reproductives"
  },
  {
    id: 63,
    question: "Quelle hormone stimule la maturation folliculaire ovarienne?",
    options: ["LH", "FSH", "Prolactine", "HCG"],
    correctAnswer: 1,
    explanation: "La FSH stimule la croissance des follicules ovariens.",
    category: "hormones-reproductives"
  },
  {
    id: 64,
    question: "Quel est le rôle de l'hormone lutéinisante (LH)?",
    options: ["Croissance du follicule", "Ovulation et formation du corps jaune", "Stimulation mammaire", "Production de progestérone"],
    correctAnswer: 1,
    explanation: "La LH stimule l'ovulation et la formation du corps jaune.",
    category: "hormones-reproductives"
  },
  {
    id: 65,
    question: "Quand est libérée la majorité du LH pendant le cycle menstruel?",
    options: ["Phase folliculaire", "Avant l'ovulation (pic de LH)", "Phase lutéale", "Pendant les menstruations"],
    correctAnswer: 1,
    explanation: "Le pic de LH déclenche l'ovulation au milieu du cycle.",
    category: "hormones-reproductives"
  },
  {
    id: 66,
    question: "Quel est le rôle principal de l'œstrogène?",
    options: ["Soutien de la grossesse", "Développement caractères sexuels féminins et cycle menstruel", "Croissance osseuse", "Métabolisme du calcium"],
    correctAnswer: 1,
    explanation: "L'œstrogène régule le cycle menstruel et développe les caractères sexuels secondaires.",
    category: "hormones-reproductives"
  },
  {
    id: 67,
    question: "Quel est le rôle principal de la progestérone?",
    options: ["Développement sexuel", "Soutien de la grossesse et préparation de l'utérus", "Production d'œufs", "Contraction musculaire"],
    correctAnswer: 1,
    explanation: "La progestérone soutient la grossesse et prépare l'utérus.",
    category: "hormones-reproductives"
  },
  {
    id: 68,
    question: "Quel est le rôle du corps jaune?",
    options: ["Produire l'œuf", "Produire progestérone et maintenir l'endomètre", "Stimuler l'ovulation", "Produire FSH"],
    correctAnswer: 1,
    explanation: "Le corps jaune produit la progestérone après l'ovulation.",
    category: "hormones-reproductives"
  },
  {
    id: 69,
    question: "Qu'est-ce que l'hormone chorionique gonadotrope (hCG)?",
    options: ["Hormone de l'hypophyse", "Hormone produite par l'embryon pour maintenir le corps jaune", "Hormone des ovaires", "Hormone de la thyroïde"],
    correctAnswer: 1,
    explanation: "L'hCG est produite après la fécondation pour maintenir le corps jaune.",
    category: "hormones-reproductives"
  },
  {
    id: 70,
    question: "Quel est le rôle de l'inhibine?",
    options: ["Augmentation de FSH", "Suppression de FSH", "Augmentation de LH", "Production d'ovules"],
    correctAnswer: 1,
    explanation: "L'inhibine supprime la sécrétion de FSH.",
    category: "hormones-reproductives"
  },

  // Pathophysiology
  {
    id: 71,
    question: "Qu'est-ce que le diabète de type 1?",
    options: ["Résistance à l'insuline", "Destruction auto-immune des cellules bêta", "Surproduction d'insuline", "Carence en glucagon"],
    correctAnswer: 1,
    explanation: "Type 1: destruction auto-immune des cellules productrices d'insuline.",
    category: "pathophysiologie"
  },
  {
    id: 72,
    question: "Qu'est-ce que le diabète de type 2?",
    options: ["Absence d'insuline", "Résistance à l'insuline et production insuffisante", "Production excessive d'insuline", "Absence de glucagon"],
    correctAnswer: 1,
    explanation: "Type 2: résistance à l'insuline et production décroissante.",
    category: "pathophysiologie"
  },
  {
    id: 73,
    question: "Quelle condition résulte d'une sécrétion excessive de cortisol?",
    options: ["Syndrome d'Addison", "Syndrome de Cushing", "Hyperthyroïdie", "Hypothyroïdie"],
    correctAnswer: 1,
    explanation: "Syndrome de Cushing: exposition chronique à des niveaux excessifs de cortisol.",
    category: "pathophysiologie"
  },
  {
    id: 74,
    question: "Quel est le syndrome d'Addison?",
    options: ["Hyper-sécrétion de cortisol", "Hypo-sécrétion de cortisol", "Hyper-sécrétion de thyroïde", "Hypo-sécrétion de thyroïde"],
    correctAnswer: 1,
    explanation: "Syndrome d'Addison: déficit en glucocorticoïdes et minéralocorticoïdes.",
    category: "pathophysiologie"
  },
  {
    id: 75,
    question: "Qu'est-ce que l'hyperthyroïdie?",
    options: ["Production insuffisante de thyroïde", "Production excessive de thyroïde", "Destruction thyroïdienne", "Cancer thyroïdien"],
    correctAnswer: 1,
    explanation: "Hyperthyroïdie: sécrétion excessive d'hormones thyroïdiennes.",
    category: "pathophysiologie"
  },
  {
    id: 76,
    question: "Qu'est-ce que l'hypothyroïdie?",
    options: ["Production excessive de thyroïde", "Production insuffisante de thyroïde", "Inflammation thyroïdienne", "Cancer thyroïdien"],
    correctAnswer: 1,
    explanation: "Hypothyroïdie: sécrétion insuffisante d'hormones thyroïdiennes.",
    category: "pathophysiologie"
  },
  {
    id: 77,
    question: "Quelle est la cause la plus fréquente d'hypothyroïdie?",
    options: ["Cancer", "Carence en iode", "Infection virale", "Tumeur hypophysaire"],
    correctAnswer: 1,
    explanation: "La carence en iode est la cause la plus fréquente d'hypothyroïdie mondialement.",
    category: "pathophysiologie"
  },
  {
    id: 78,
    question: "Qu'est-ce que la maladie de Graves?",
    options: ["Hypothyroïdie auto-immune", "Hyperthyroïdie auto-immune", "Diabète sucré", "Syndrome métabolique"],
    correctAnswer: 1,
    explanation: "Graves: hyperthyroïdie auto-immune causée par des anticorps au récepteur TSH.",
    category: "pathophysiologie"
  },
  {
    id: 79,
    question: "Qu'est-ce que la maladie de Hashimoto?",
    options: ["Hyperthyroïdie auto-immune", "Hypothyroïdie auto-immune", "Diabète", "Syndrome de Cushing"],
    correctAnswer: 1,
    explanation: "Hashimoto: hypothyroïdie auto-immune avec destruction thyroïdienne.",
    category: "pathophysiologie"
  },
  {
    id: 80,
    question: "Quel est le principal symptôme du syndrome de Cushing?",
    options: ["Fatigue extrême", "Amaigrissement", "Obésité centrale et vergetures pourpres", "Perte de cheveux"],
    correctAnswer: 2,
    explanation: "Cushing provoque obésité centrale, vergetures et visage de lune.",
    category: "pathophysiologie"
  },
  {
    id: 81,
    question: "Quels sont les symptômes de l'hypothyroïdie?",
    options: ["Tachycardie et anxiété", "Fatigue, prise de poids et ralentissement", "Tremblements", "Insomnie"],
    correctAnswer: 1,
    explanation: "Hypothyroïdie: fatigue, prise de poids, ralentissement du métabolisme.",
    category: "pathophysiologie"
  },
  {
    id: 82,
    question: "Quels sont les symptômes de l'hyperthyroïdie?",
    options: ["Fatigue et prise de poids", "Tachycardie, anxiété, perte de poids", "Bradycardie", "Obésité"],
    correctAnswer: 1,
    explanation: "Hyperthyroïdie: tachycardie, nervosité, perte de poids, intolérance à la chaleur.",
    category: "pathophysiologie"
  },
  {
    id: 83,
    question: "Quelles sont les complications chroniques du diabète?",
    options: ["Infection urinaire", "Neuropathie, néphropathie, rétinopathie", "Asthme", "Arthrose"],
    correctAnswer: 1,
    explanation: "Diabète: complications micro et macro-vasculaires (neuropathie, néphropathie, rétinopathie).",
    category: "pathophysiologie"
  },
  {
    id: 84,
    question: "Quel est le principal symptôme du diabète non contrôlé?",
    options: ["Hypoglycémie", "Hyperglycémie et glycosurie", "Acidose métabolique", "Hypertension"],
    correctAnswer: 1,
    explanation: "Hyperglycémie et glycosurie sont les signes principaux.",
    category: "pathophysiologie"
  },
  {
    id: 85,
    question: "Qu'est-ce que l'acidocétose diabétique?",
    options: ["Hyperglycémie légère", "Complication grave du diabète 1 avec acidose", "Hypoglycémie extrême", "Infection rénale"],
    correctAnswer: 1,
    explanation: "DKA: complication grave avec lipolyse et acidose métabolique.",
    category: "pathophysiologie"
  },
  {
    id: 86,
    question: "Quel est le traitement principal du diabète de type 1?",
    options: ["Régime alimentaire", "Insuline exogène", "Agents oraux", "Exercice seul"],
    correctAnswer: 1,
    explanation: "Type 1 requires insuline car les cellules bêta sont détruites.",
    category: "pathophysiologie"
  },
  {
    id: 87,
    question: "Qu'est-ce que l'hypoglycémie?",
    options: ["Sucre sanguin élevé", "Sucre sanguin bas (typiquement <70 mg/dL)", "Sucre normal", "Absence de glucose"],
    correctAnswer: 1,
    explanation: "Hypoglycémie: glucose sanguin anormalement bas.",
    category: "pathophysiologie"
  },
  {
    id: 88,
    question: "Quels sont les symptômes de l'hypoglycémie?",
    options: ["Fatigue et prise de poids", "Sueurs, tremblements, confusion, tachycardie", "Pâleur", "Obésité"],
    correctAnswer: 1,
    explanation: "Hypoglycémie: sueurs froides, tremblements, confusion, tachycardie.",
    category: "pathophysiologie"
  },
  {
    id: 89,
    question: "Quel hormone est augmentée en réaction à l'hypoglycémie?",
    options: ["Insuline", "Glucagon et adrénaline", "Cortisol seul", "TSH"],
    correctAnswer: 1,
    explanation: "Glucagon et adrénaline augmentent pour corriger l'hypoglycémie.",
    category: "pathophysiologie"
  },
  {
    id: 90,
    question: "Qu'est-ce que l'hyperaldostéronisme?",
    options: ["Déficit en aldostérone", "Excès d'aldostérone avec hypertension et hypokalémie", "Diabète sucré", "Hypothyroïdie"],
    correctAnswer: 1,
    explanation: "Hyperaldostéronisme: hypertension et hypokalémie.",
    category: "pathophysiologie"
  },
  {
    id: 91,
    question: "Qu'est-ce que l'hyperparathyroïdie?",
    options: ["Déficit en PTH", "Excès de PTH avec hypercalcémie", "Carence en calcium", "Ostéoporose"],
    correctAnswer: 1,
    explanation: "Hyperparathyroïdie: hypercalcémie et hypokalémie.",
    category: "pathophysiologie"
  },
  {
    id: 92,
    question: "Qu'est-ce que l'hypoparathyroïdie?",
    options: ["Excès de PTH", "Déficit en PTH avec hypocalcémie", "Hypercalcémie", "Ostéopénie"],
    correctAnswer: 1,
    explanation: "Hypoparathyroïdie: hypocalcémie et hyperphosphatémie.",
    category: "pathophysiologie"
  },
  {
    id: 93,
    question: "Quelle condition résulte d'une production excessive d'hormone de croissance?",
    options: ["Nanisme", "Gigantisme ou acromégalie", "Hypothyroïdie", "Diabète"],
    correctAnswer: 1,
    explanation: "Gigantisme (enfants) ou acromégalie (adultes).",
    category: "pathophysiologie"
  },
  {
    id: 94,
    question: "Quelle condition résulte d'une production insuffisante d'hormone de croissance?",
    options: ["Gigantisme", "Nanisme hypophysaire", "Macrosomie", "Acromégalie"],
    correctAnswer: 1,
    explanation: "Déficit en hormone de croissance: nanisme.",
    category: "pathophysiologie"
  },
  {
    id: 95,
    question: "Qu'est-ce que le diabète insipide?",
    options: ["Diabète sucré", "Déficit en ADH avec polyurie et polydipsie", "Hyperglycémie", "Infection rénale"],
    correctAnswer: 1,
    explanation: "Diabète insipide: déficit en ADH causant polyurie.",
    category: "pathophysiologie"
  },
  {
    id: 96,
    question: "Quel est le syndrome SIADH?",
    options: ["Déficit en ADH", "Sécrétion inappropriée d'ADH avec hyponatrémie", "Hyperglycémie", "Hyperaldostéronisme"],
    correctAnswer: 1,
    explanation: "SIADH: sécrétion excessive d'ADH causant hyponatrémie.",
    category: "pathophysiologie"
  },
  {
    id: 97,
    question: "Quel est le rôle du glucose dans les tests de diagnostic endocrinien?",
    options: ["Mesurer la tension artérielle", "Évaluer la fonction du pancréas et la glycémie", "Tester la thyroïde", "Vérifier la fonction rénale"],
    correctAnswer: 1,
    explanation: "Le glucose test évalue la glycémie et la fonction pancréatique.",
    category: "pathophysiologie"
  },
  {
    id: 98,
    question: "Quel test détecte une hyperthyroïdie?",
    options: ["Cortisol urinaire", "TSH basse et T3/T4 élevés", "Glucose sanguin", "Calcium ionisé"],
    correctAnswer: 1,
    explanation: "Hyperthyroïdie: TSH supprimée avec T3/T4 élevés.",
    category: "pathophysiologie"
  },
  {
    id: 99,
    question: "Quel est le test de base pour le diabète?",
    options: ["Cortisol urinaire", "Glucose à jeun et HbA1c", "TSH", "PTH"],
    correctAnswer: 1,
    explanation: "Glucose à jeun et HbA1c diagnostiquent le diabète.",
    category: "pathophysiologie"
  },
  {
    id: 100,
    question: "Quel est le dépistage standard pour les troubles endocriniens?",
    options: ["Examen clinique seul", "Dosages hormonaux basés sur les symptômes", "Imagerie d'abord", "Biopsie"},
    correctAnswer: 1,
    explanation: "Les dosages hormonaux orientent le diagnostic des troubles endocriniens.",
    category: "pathophysiologie"
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
