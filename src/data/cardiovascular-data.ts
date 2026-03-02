export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'anatomie' | 'physiologie' | 'circulation' | 'pathologie' | 'valves' | 'vaisseaux';
}

export const cardiovascularData: Question[] = [
  // PARTIE I : Anatomie générale du cœur (1–15)
  {
    id: 1,
    question: "Le cœur est un muscle composé de combien de cavités ?",
    options: ["2 cavités", "3 cavités", "4 cavités", "5 cavités"],
    correctAnswer: 2,
    explanation: "Le cœur comprend 4 cavités : 2 oreillettes (atriums) et 2 ventricules."
  },
  {
    id: 2,
    question: "Quelle est l'épaisseur relative de la paroi cardiaque ?",
    options: ["Ventricule droit > Ventricule gauche", "Ventricule gauche > Ventricule droit", "Égale", "Oreillettes > Ventricules"],
    correctAnswer: 1,
    explanation: "La paroi du ventricule gauche est beaucoup plus épaisse que celle du ventricule droit car il doit propulser le sang dans tout le corps."
  },
  {
    id: 3,
    question: "Le cœur est situé dans :",
    options: ["L'abdomen", "Le thorax (médiastin)", "Le cou", "L'espace intercostal"],
    correctAnswer: 1,
    explanation: "Le cœur est situé dans le thorax, dans la région médiane appelée médiastin, entre les deux poumons."
  },
  {
    id: 4,
    question: "Le cœur est entouré par une double membrane appelée :",
    options: ["Myocarde", "Endocarde", "Péricarde", "Épicarde"],
    correctAnswer: 2,
    explanation: "Le péricarde est la double membrane qui entoure le cœur. Le feuillet viscéral s'appelle épicarde."
  },
  {
    id: 5,
    question: "Le myocarde est composé de :",
    options: ["Tissu fibreux", "Tissu adipeux", "Muscle cardiaque", "Tissu nerveux"],
    correctAnswer: 2,
    explanation: "Le myocarde est la couche musculaire du cœur, composée de muscle cardiaque capable de contractions rhythmiques."
  },
  {
    id: 6,
    question: "L'endocarde est :",
    options: ["La couche externe du cœur", "La couche musculaire", "L'endothélium de la cavité cardiaque", "La membrane pericardiale"],
    correctAnswer: 2,
    explanation: "L'endocarde est l'endothélium (membrane interne) qui tapisse les cavités du cœur et les valves."
  },
  {
    id: 7,
    question: "Le cloisonnement entre les ventricules s'appelle :",
    options: ["Septum auriculaire", "Septum interventriculaire", "Sillon auriculo-ventriculaire", "Paroi myocardique"],
    correctAnswer: 1,
    explanation: "Le septum interventriculaire est la cloison musculeuse qui sépare les deux ventricules."
  },
  {
    id: 8,
    question: "Le cœur pèse environ :",
    options: ["100 grammes", "200-300 grammes", "500 grammes", "1 kilogramme"],
    correctAnswer: 1,
    explanation: "Le cœur d'un adulte pèse environ 200 à 300 grammes, un peu moins chez la femme."
  },
  {
    id: 9,
    question: "Combien de côtes le cœur se situe derrière ?",
    options: ["1ère et 2ème côte", "3ème et 4ème côte", "4ème et 5ème côte", "6ème et 7ème côte"],
    correctAnswer: 2,
    explanation: "Le cœur se situe principalement derrière les 4ème et 5ème côtes, légèrement à gauche de la ligne médiane."
  },
  {
    id: 10,
    question: "L'apex du cœur est :",
    options: ["La pointe du ventricule gauche", "La base du cœur", "L'origine des artères", "Le sommet de l'oreillette droite"],
    correctAnswer: 0,
    explanation: "L'apex est la pointe du ventricule gauche, qui bat contre la paroi thoracique au 5ème espace intercostal."
  },
  {
    id: 11,
    question: "La base du cœur correspond à :",
    options: ["L'apex", "La partie supérieure où émergent les vaisseaux", "Le ventricule gauche", "Le sillon interventriculaire"],
    correctAnswer: 1,
    explanation: "La base du cœur est sa partie supérieure d'où émergent les vaisseaux (aorte, artères pulmonaires, veines caves et veines pulmonaires)."
  },
  {
    id: 12,
    question: "Quel sillon sépare les oreillettes des ventricules ?",
    options: ["Sillon interventriculaire", "Sillon interauriculaire", "Sillon auriculo-ventriculaire", "Sillon antérieur"],
    correctAnswer: 2,
    explanation: "Le sillon auriculo-ventriculaire (ou sillon coronaire) sépare les oreillettes des ventricules et contient les artères coronaires."
  },
  {
    id: 13,
    question: "Les artères coronaires naissent de :",
    options: ["L'aorte descendante", "La base de l'aorte ascendante", "L'artère pulmonaire", "La veine cave supérieure"],
    correctAnswer: 1,
    explanation: "Les deux artères coronaires (gauche et droite) naissent de la base de l'aorte ascendante, juste au-dessus de la valve aortique."
  },
  {
    id: 14,
    question: "Quelle artère coronaire irrigue le ventricule gauche ?",
    options: ["Artère coronaire droite", "Interventriculaire antérieure (IVA)", "Interventriculaire postérieure", "Marginale"],
    correctAnswer: 1,
    explanation: "L'interventriculaire antérieure (IVA) irrigue le ventricule gauche et le septum interventriculaire."
  },
  {
    id: 15,
    question: "Le sinus coronaire est :",
    options: ["Une artère coronaire", "Une veine qui draine le sang veineux cardiaque", "Un nerf du cœur", "Une valvule du cœur"],
    correctAnswer: 1,
    explanation: "Le sinus coronaire est une veine qui collecte le sang veineux du myocarde et le verse dans l'oreillette droite."
  },

  // PARTIE II : Valves cardiaques (16–30)
  {
    id: 16,
    question: "Combien de valves cardiaques assure le flux unidirectionnel du sang ?",
    options: ["2 valves", "3 valves", "4 valves", "5 valves"],
    correctAnswer: 2,
    explanation: "Le cœur possède 4 valves : tricuspide, mitrale, pulmonaire et aortique."
  },
  {
    id: 17,
    question: "La valve tricuspide se situe entre :",
    options: ["Oreillette gauche et ventricule gauche", "Oreillette droite et ventricule droit", "Ventricule gauche et aorte", "Ventricule droit et artère pulmonaire"],
    correctAnswer: 1,
    explanation: "La valve tricuspide sépare l'oreillette droite du ventricule droit et possède 3 feuillets."
  },
  {
    id: 18,
    question: "La valve mitrale possède combien de feuillets ?",
    options: ["1 feuillet", "2 feuillets", "3 feuillets", "4 feuillets"],
    correctAnswer: 1,
    explanation: "La valve mitrale (ou bicuspide) possède 2 feuillets et sépare l'oreillette gauche du ventricule gauche."
  },
  {
    id: 19,
    question: "La valve pulmonaire se situe entre :",
    options: ["Oreillette droite et ventricule droit", "Ventricule droit et artère pulmonaire", "Oreillette gauche et ventricule gauche", "Ventricule gauche et aorte"],
    correctAnswer: 1,
    explanation: "La valve pulmonaire sépare le ventricule droit de l'artère pulmonaire et possède 3 feuillets."
  },
  {
    id: 20,
    question: "La valve aortique sépare :",
    options: ["Oreillette gauche et ventricule gauche", "Ventricule gauche et aorte", "Oreillette droite et ventricule droit", "Ventricule droit et artère pulmonaire"],
    correctAnswer: 1,
    explanation: "La valve aortique sépare le ventricule gauche de l'aorte et possède 3 feuillets."
  },
  {
    id: 21,
    question: "Les valves pulmonaire et aortique possèdent combien de feuillets ?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "Les valves pulmonaire et aortique sont des valves sigmoïdes avec 3 feuillets en forme de demi-lunes."
  },
  {
    id: 22,
    question: "Quel est le rôle des cordages tendineux ?",
    options: ["Conduire le sang", "Supporter les feuillets des valves auriculo-ventriculaires", "Créer les battements cardiaques", "Réguler la fréquence cardiaque"],
    correctAnswer: 1,
    explanation: "Les cordages tendineux (ou cordes tendineuses) attachent les valves auriculoventriculaires (tricuspide et mitrale) aux muscles papillaires pour les soutenir."
  },
  {
    id: 23,
    question: "Les muscles papillaires sont :",
    options: ["Situés dans les oreillettes", "Situés dans les ventricules et attachent les cordages tendineux", "Une partie du myocarde auriculaire", "Responsables du battement cardiaque"],
    correctAnswer: 1,
    explanation: "Les muscles papillaires sont des saillies du myocarde ventriculaire qui s'attachent aux cordes tendineuses et aident à maintenir les valves fermées."
  },
  {
    id: 24,
    question: "Une insuffisance valvulaire se produit quand :",
    options: ["La valve ne s'ouvre pas complètement", "La valve ne se ferme pas complètement", "La valve est excessivement épaissie", "La valve calcifie"],
    correctAnswer: 1,
    explanation: "L'insuffisance valvulaire (ou régurgitation) survient quand la valve ne se ferme pas complètement, permettant au sang de refluer."
  },
  {
    id: 25,
    question: "Une sténose valvulaire signifie :",
    options: ["Insuffisance de la valve", "Rétrécissement de l'orifice valvulaire", "Destruction de la valve", "Calcification totale de la valve"],
    correctAnswer: 1,
    explanation: "La sténose valvulaire est le rétrécissement de l'orifice valvulaire, empêchant le sang de passer complètement."
  },
  {
    id: 26,
    question: "Le premier bruit du cœur (B1) correspond à :",
    options: ["Fermeture des valves aortique et pulmonaire", "Fermeture des valves tricuspide et mitrale", "Ouverture des valves auriculoventriculaires", "Contraction des oreillettes"],
    correctAnswer: 1,
    explanation: "Le premier bruit cardiaque (B1, 'Tup') est produit par la fermeture synchrone des valves tricuspide et mitrale."
  },
  {
    id: 27,
    question: "Le deuxième bruit du cœur (B2) correspond à :",
    options: ["Fermeture des valves auriculoventriculaires", "Fermeture des valves aortique et pulmonaire", "Ouverture des valves", "Remplissage auriculaire"],
    correctAnswer: 1,
    explanation: "Le deuxième bruit cardiaque (B2, 'Tac') est produit par la fermeture presque simultanée des valves aortique et pulmonaire."
  },
  {
    id: 28,
    question: "Un souffle cardiaque systolique peut indiquer :",
    options: ["Sténose aortique", "Insuffisance mitrale", "Les deux", "Ni l'un ni l'autre"],
    correctAnswer: 2,
    explanation: "Les souffles systoliques peuvent correspondre à une sténose aortique (rétrécissement) ou une insuffisance mitrale (régurgitation)."
  },
  {
    id: 29,
    question: "L'anneau fibré du cœur a pour fonction :",
    options: ["Propulser le sang", "Servir de point d'attache aux valves et aux muscles", "Recevoir le sang", "Produire les battements"],
    correctAnswer: 1,
    explanation: "L'anneau fibré (squelette fibreux) du cœur sert de point d'attache aux feuillets valvulaires et aux muscles cardiaques."
  },
  {
    id: 30,
    question: "Quel est le rôle des muscles papillaires lors de la contraction ventriculaire ?",
    options: ["Propulser le sang hors du cœur", "Maintenir les valves fermées et empêcher leur inversion", "Créer le rythme cardiaque", "Détendre les ventricules"],
    correctAnswer: 1,
    explanation: "Les muscles papillaires se contractent en même temps que le myocarde ventriculaire pour tendre les cordages tendineux et maintenir les valves auriculo-ventriculaires fermées."
  },

  // PARTIE III : Physiologie circulatoire (31–50)
  {
    id: 31,
    question: "Le cycle cardiaque comprend les phases :",
    options: ["Contraction seulement", "Relaxation seulement", "Systole et diastole", "Systole, diastole et repos"],
    correctAnswer: 2,
    explanation: "Le cycle cardiaque comprend la systole (contraction) et la diastole (relaxation et remplissage)."
  },
  {
    id: 32,
    question: "La systole auriculaire dure environ :",
    options: ["0.1 secondes", "0.3 secondes", "0.5 secondes", "1 seconde"],
    correctAnswer: 1,
    explanation: "La systole auriculaire dure environ 0.3 seconde et propulse le sang dans les ventricules."
  },
  {
    id: 33,
    question: "La systole ventriculaire dure environ :",
    options: ["0.2 secondes", "0.3 secondes", "0.4 secondes", "0.6 secondes"],
    correctAnswer: 2,
    explanation: "La systole ventriculaire dure environ 0.4 seconde et propulse le sang vers les vaisseaux (aorte et artère pulmonaire)."
  },
  {
    id: 34,
    question: "Combien de temps dure la diastole du cycle cardiaque normal ?",
    options: ["0.4 secondes", "0.5 secondes", "0.6 secondes", "0.8 secondes"],
    correctAnswer: 2,
    explanation: "La diastole (complète relaxation des ventricules) dure environ 0.6 seconde dans un cycle cardiaque normal de 0.8 seconde."
  },
  {
    id: 35,
    question: "La fréquence cardiaque normale au repos chez l'adulte est :",
    options: ["40-60 bpm", "60-100 bpm", "100-120 bpm", "120-160 bpm"],
    correctAnswer: 1,
    explanation: "La fréquence cardiaque normale au repos chez l'adulte est entre 60 et 100 battements par minute."
  },
  {
    id: 36,
    question: "Le volume d'éjection systolique (VES) normal est environ :",
    options: ["30 mL", "50 mL", "70 mL", "100 mL"],
    correctAnswer: 2,
    explanation: "Le volume d'éjection systolique (VES) représente le volume de sang éjecté par le ventricule à chaque contraction, environ 70 mL."
  },
  {
    id: 37,
    question: "Le débit cardiaque est le produit de :",
    options: ["Fréquence cardiaque + Volume d'éjection", "Fréquence cardiaque - Volume d'éjection", "Fréquence cardiaque × Volume d'éjection", "Fréquence cardiaque ÷ Volume d'éjection"],
    correctAnswer: 2,
    explanation: "Le débit cardiaque = Fréquence cardiaque × VES. Par exemple, 70 bpm × 70 mL = 4.9 L/min."
  },
  {
    id: 38,
    question: "Le débit cardiaque normal au repos est :",
    options: ["2-3 L/min", "4-6 L/min", "7-8 L/min", "10-12 L/min"],
    correctAnswer: 1,
    explanation: "Le débit cardiaque normal au repos est d'environ 4 à 6 litres par minute, ce qui assure la circulation de tout le sang du corps."
  },
  {
    id: 39,
    question: "La précharge est :",
    options: ["La force de contraction du cœur", "L'étirement initial des fibres myocardiques avant contraction", "La résistance que doit vaincre le ventricule", "La relaxation du cœur"],
    correctAnswer: 1,
    explanation: "La précharge est l'étirement initial des fibres myocardiques déterminé par le volume de sang dans le ventricule avant la contraction."
  },
  {
    id: 40,
    question: "La postcharge est :",
    options: ["La précharge", "L'étirement des fibres", "La résistance et la pression que doit vaincre le ventricule pour éjecter le sang", "Le remplissage du cœur"],
    correctAnswer: 2,
    explanation: "La postcharge est la charge (résistance et pression) que le ventricule doit surmonter pour éjecter le sang, notamment la pression artérielle."
  },
  {
    id: 41,
    question: "La loi de Starling du cœur énonce :",
    options: ["Plus la fréquence augmente, plus le débit augmente", "Plus l'étirement initial augmente, plus la force de contraction augmente", "La fréquence cardiaque est indépendante du volume", "Le cœur ne peut pas s'adapter"],
    correctAnswer: 1,
    explanation: "La loi de Starling établit que plus les fibres myocardiques sont étirées par un volume sanguin augmenté, plus elles se contractent fortement."
  },
  {
    id: 42,
    question: "La pression systolique normale du ventricule gauche est :",
    options: ["60-80 mmHg", "80-100 mmHg", "100-150 mmHg", "150-180 mmHg"],
    correctAnswer: 2,
    explanation: "La pression systolique du ventricule gauche est environ 100 à 150 mmHg, correspondant à la pression systolique artérielle."
  },
  {
    id: 43,
    question: "La pression diastolique normale du ventricule gauche est :",
    options: ["0-5 mmHg", "5-15 mmHg", "15-25 mmHg", "25-35 mmHg"],
    correctAnswer: 2,
    explanation: "La pression diastolique du ventricule gauche est environ 15 à 25 mmHg au repos."
  },
  {
    id: 44,
    question: "La pression artérielle systolique normale est :",
    options: ["90/60 mmHg", "120/80 mmHg", "140/90 mmHg", "160/100 mmHg"],
    correctAnswer: 1,
    explanation: "La pression artérielle normale est environ 120/80 mmHg (systolique/diastolique)."
  },
  {
    id: 45,
    question: "Le volume sanguin total chez l'adulte est :",
    options: ["3-4 litres", "5-6 litres", "8-10 litres", "12-15 litres"],
    correctAnswer: 1,
    explanation: "Le volume sanguin total chez l'adulte est environ 5 à 6 litres (70 mL/kg chez l'homme)."
  },
  {
    id: 46,
    question: "Quel pourcentage du volume sanguin se trouve dans la circulation veineuse ?",
    options: ["10%", "30%", "60%", "90%"],
    correctAnswer: 2,
    explanation: "Environ 60% du volume sanguin réside dans la circulation veineuse, qui agit comme un réservoir sanguin."
  },
  {
    id: 47,
    question: "La fractionnelle d'éjection normale du ventricule gauche est :",
    options: ["> 80%", "60-80%", "40-60%", "< 40%"],
    correctAnswer: 1,
    explanation: "La fraction d'éjection normale du ventricule gauche est 60-80%, représentant le pourcentage de sang éjecté à chaque contraction."
  },
  {
    id: 48,
    question: "La contraction isométrique du ventricule dure :",
    options: ["Pendant que les valves s'ouvrent", "Au début de la systole, avant l'éjection du sang", "Pendant le remplissage diastolique", "À la fin de la diastole"],
    correctAnswer: 1,
    explanation: "La contraction isométrique (isovolumétrique) se produit au début de la systole, quand la pression augmente mais le volume reste constant."
  },
  {
    id: 49,
    question: "La relaxation isométrique ventriculaire se produit :",
    options: ["Pendant la systole auriculaire", "Au début de la diastole après la fermeture des valves aortique et pulmonaire", "Pendant le remplissage rapide", "À la fin du cycle cardiaque"],
    correctAnswer: 1,
    explanation: "La relaxation isométrique (isovolumétrique) se produit au début de la diastole, quand la pression diminue mais le volume reste constant."
  },
  {
    id: 50,
    question: "Qu'est-ce que la compliance cardiaque ?",
    options: ["La capacité à se contracter", "La capacité à se relaxer et à accepter le sang", "La fréquence des battements", "La force de contraction"],
    correctAnswer: 1,
    explanation: "La compliance cardiaque est la capacité du ventricule à se relaxer et à s'accommoder d'un volume sanguin croissant sans augmentation excessive de la pression."
  },

  // PARTIE IV : Vaisseaux et circulation (51–70)
  {
    id: 51,
    question: "Quel est le type de vaisseau qui transporte le sang du cœur vers les tissus ?",
    options: ["Veines", "Capillaires", "Artères", "Artérioles"],
    correctAnswer: 2,
    explanation: "Les artères transportent le sang riche en oxygène du cœur vers les tissus."
  },
  {
    id: 52,
    question: "Quelle artère transporte le sang du ventricule gauche ?",
    options: ["Artère pulmonaire", "Aorte", "Artère coronaire", "Veine cave"],
    correctAnswer: 1,
    explanation: "L'aorte est l'artère principale qui sort du ventricule gauche et distribue le sang oxygéné à tout le corps."
  },
  {
    id: 53,
    question: "L'aorte se divise en trois parties principales :",
    options: ["Aorte antérieure, latérale, postérieure", "Aorte ascendante, crosse aortique, aorte descendante", "Aorte ventrale, dorsale, caudale", "Aorte interne, externe, moyenne"],
    correctAnswer: 1,
    explanation: "L'aorte comprend 3 sections : aorte ascendante, crosse aortique et aorte descendante (thoracique et abdominale)."
  },
  {
    id: 54,
    question: "L'artère pulmonaire transporte :",
    options: ["Le sang oxygéné", "Le sang désoxygéné du ventricule droit vers les poumons", "Le sang des poumons", "Le sang veineux de la veine cave"],
    correctAnswer: 1,
    explanation: "L'artère pulmonaire sort du ventricule droit et transporte le sang désoxygéné vers les poumons pour l'oxygénation."
  },
  {
    id: 55,
    question: "Quel est le type de vaisseau capable d'échanges de nutriments avec les tissus ?",
    options: ["Artères", "Veines", "Capillaires", "Artérioles"],
    correctAnswer: 2,
    explanation: "Les capillaires sont les plus petits vaisseaux et permettent les échanges de nutriments, gaz et déchets entre le sang et les tissus."
  },
  {
    id: 56,
    question: "Les veines pulmonaires transportent :",
    options: ["Le sang désoxygéné des poumons", "Le sang oxygéné des poumons vers l'oreillette gauche", "Le sang du cœur vers les poumons", "Le sang veineux systémique"],
    correctAnswer: 1,
    explanation: "Les 4 veines pulmonaires (2 droites et 2 gauches) retournent le sang oxygéné des poumons vers l'oreillette gauche."
  },
  {
    id: 57,
    question: "Combien de veines caves reviennent au cœur ?",
    options: ["1 seule", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "Deux veines caves : la veine cave supérieure (retourne le sang du haut du corps) et la veine cave inférieure (retourne le sang du bas du corps)."
  },
  {
    id: 58,
    question: "La veine cave supérieure draine :",
    options: ["La tête et les membres inférieurs", "Les organes abdominaux", "Les membres supérieurs, la tête et le cou", "Les jambes"],
    correctAnswer: 2,
    explanation: "La veine cave supérieure draine le sang des membres supérieurs, de la tête et du cou vers l'oreillette droite."
  },
  {
    id: 59,
    question: "La veine cave inférieure draine :",
    options: ["Les organes thoraciques", "Les membres inférieurs et les organes abdominaux", "Seulement le foie", "Seulement les reins"],
    correctAnswer: 1,
    explanation: "La veine cave inférieure draine le sang des membres inférieurs, de l'abdomen et du bassin vers l'oreillette droite."
  },
  {
    id: 60,
    question: "La circulation pulmonaire comprend :",
    options: ["Cœur → Aorte → Tissus → Veines caves → Cœur", "Cœur → Artère pulmonaire → Poumons → Veines pulmonaires → Cœur", "Cœur → Capillaires → Cœur", "Aorte → Artères → Veine cave → Cœur"],
    correctAnswer: 1,
    explanation: "La circulation pulmonaire : ventricule droit → artère pulmonaire → poumons → veines pulmonaires → oreillette gauche."
  },
  {
    id: 61,
    question: "La circulation systémique comprend :",
    options: ["Cœur → Poumons → Cœur", "Ventricule gauche → Aorte → Tissus → Veines caves → Oreillette droite", "Oreillette → Ventricule → Oreillette", "Poumons → Cœur → Poumons"],
    correctAnswer: 1,
    explanation: "La circulation systémique : ventricule gauche → aorte → capillaires systémiques → veines caves → oreillette droite."
  },
  {
    id: 62,
    question: "Quelle est la veine principale du foie ?",
    options: ["Artère hépatique", "Veine porte hépatique", "Veine hépatique", "Les deux veines porte et hépatique"],
    correctAnswer: 3,
    explanation: "Le foie reçoit le sang de la veine porte hépatique (du système digestif) et de l'artère hépatique, et le draine par les veines hépatiques."
  },
  {
    id: 63,
    question: "Qu'est-ce que la circulation portale hépatique ?",
    options: ["La veine reliant le cœur aux poumons", "La veine du foie reliant le tube digestif au foie pour le traitement des nutriments", "La circulation artérielle du foie", "La veine reliant les reins"],
    correctAnswer: 1,
    explanation: "La circulation portale hépatique transporte le sang riche en nutriments du tube digestif vers le foie pour le traitement avant le retour au cœur."
  },
  {
    id: 64,
    question: "Les artérioles sont :",
    options: ["Les plus petites artères qui se ramifient en capillaires", "Les plus grandes veines", "Les plus gros vaisseaux du corps", "Les plus petits capillaires"],
    correctAnswer: 0,
    explanation: "Les artérioles sont les petites branches des artères qui se divisent en capillaires et jouent un rôle clé dans la régulation de la pression sanguine."
  },
  {
    id: 65,
    question: "Les veinules sont :",
    options: ["Les petites branches des veines qui reçoivent le sang des capillaires", "Les plus grandes artères", "Les artérioles", "Les plus petits capillaires"],
    correctAnswer: 0,
    explanation: "Les veinules sont les petits vaisseaux qui reçoivent le sang des capillaires et se réunissent pour former les veines."
  },
  {
    id: 66,
    question: "La structure de la paroi artérielle comprend :",
    options: ["Seulement l'endothélium", "Endothélium, couche musculaire lisse, adventice", "Endothélium et adventice", "Seulement le muscle lisse"],
    correctAnswer: 1,
    explanation: "La paroi artérielle comprend 3 couches : intima (endothélium), média (muscle lisse) et adventice (tissu fibreux)."
  },
  {
    id: 67,
    question: "Pourquoi les artères ont-elles une couche musculaire épaisse ?",
    options: ["Pour augmenter la surface d'échange", "Pour résister à la haute pression et réguler le flux sanguin", "Pour absorber les nutriments", "Pour stocker le sang"],
    correctAnswer: 1,
    explanation: "La couche musculaire lisse des artères permet de résister à la pression élevée et de réguler le débit par la vasoconstriction/vasodilatation."
  },
  {
    id: 68,
    question: "La structure de la paroi veineuse :",
    options: ["Identique aux artères", "Possède une couche musculaire très épaisse", "Plus fine que les artères avec peu de muscle lisse", "N'a pas de tissu musculaire"],
    correctAnswer: 2,
    explanation: "Les veines ont une paroi plus mince et avec moins de muscle lisse que les artères, adaptée à une pression plus basse."
  },
  {
    id: 69,
    question: "Le rôle des valves veineuses est :",
    options: ["Réguler la pression sanguine", "Empêcher le reflux du sang et aider au retour au cœur", "Aumentar la velocidad del sangre", "Échanger des nutriments"],
    correctAnswer: 1,
    explanation: "Les valves veineuses (semi-lunaires) empêchent le reflux du sang vers les tissus et facilitent le retour du sang au cœur."
  },
  {
    id: 70,
    question: "Quand le ventricule se contracte, la pression augmente et :",
    options: ["Les valves auriculo-ventriculaires s'ouvrent", "Les valves auriculo-ventriculaires se ferment et les valves sigmoïdes s'ouvrent", "Les valves sigmoïdes se ferment", "Aucune valve ne bouge"],
    correctAnswer: 1,
    explanation: "Lors de la systole ventriculaire, les valves tricuspide et mitrale se ferment (créant B1), puis les valves aortique et pulmonaire s'ouvrent pour l'éjection."
  }
];

export const cardiovascularCategoryLabels: Record<string, string> = {
  'anatomie': 'Anatomie du cœur',
  'physiologie': 'Physiologie cardiaque',
  'circulation': 'Circulation sanguine',
  'pathologie': 'Pathologies cardiaques',
  'valves': 'Valves cardiaques',
  'vaisseaux': 'Vaisseaux sanguins'
};

export const cardiovascularCategoryColors: Record<string, string> = {
  'anatomie': 'bg-blue-100 text-blue-900',
  'physiologie': 'bg-red-100 text-red-900',
  'circulation': 'bg-purple-100 text-purple-900',
  'pathologie': 'bg-orange-100 text-orange-900',
  'valves': 'bg-pink-100 text-pink-900',
  'vaisseaux': 'bg-cyan-100 text-cyan-900'
};
