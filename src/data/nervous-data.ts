export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'organisation' | 'neurone' | 'classification' | 'potentiel' | 'synapse' | 'snc-snp';
}

export const nervousData: Question[] = [
  // PARTIE I : Organisation générale (1–15)
  {
    id: 1,
    question: "Le système nerveux assure combien de fonctions principales ?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "Le système nerveux assure 3 fonctions principales : fonction sensorielle, intégrative et motrice.",
    category: 'organisation'
  },
  {
    id: 2,
    question: "La fonction sensorielle correspond à :",
    options: ["Réponse musculaire", "Réception des stimuli", "Sécrétion hormonale", "Contraction cardiaque"],
    correctAnswer: 1,
    explanation: "La fonction sensorielle correspond à la réception des stimuli provenant de l'environnement interne ou externe.",
    category: 'organisation'
  },
  {
    id: 3,
    question: "La voie afférente est :",
    options: ["Motrice", "Sensitive", "Autonome", "Glandulaire"],
    correctAnswer: 1,
    explanation: "La voie afférente (sensitive) véhicule les informations sensorielles vers le SNC.",
    category: 'organisation'
  },
  {
    id: 4,
    question: "La voie efférente est :",
    options: ["Sensitive", "Motrice", "Sensorielle", "Intégrative"],
    correctAnswer: 1,
    explanation: "La voie efférente (motrice) transmet les commandes motrices du SNC vers les effecteurs.",
    category: 'organisation'
  },
  {
    id: 5,
    question: "Le SNC comprend :",
    options: ["Nerfs crâniens", "Encéphale + moelle épinière", "Ganglions", "Nerfs spinaux"],
    correctAnswer: 1,
    explanation: "Le système nerveux central (SNC) comprend l'encéphale et la moelle épinière.",
    category: 'organisation'
  },
  {
    id: 6,
    question: "Le SNP comprend :",
    options: ["Encéphale", "Moelle", "Nerfs crâniens et rachidiens", "Cervelet"],
    correctAnswer: 2,
    explanation: "Le système nerveux périphérique (SNP) comprend les nerfs crâniens (12 paires) et rachidiens (31 paires).",
    category: 'organisation'
  },
  {
    id: 7,
    question: "Les neurones représentent environ :",
    options: ["50%", "10%", "90%", "70%"],
    correctAnswer: 1,
    explanation: "Les neurones représentent environ 10% des cellules du système nerveux.",
    category: 'organisation'
  },
  {
    id: 8,
    question: "Les cellules gliales représentent environ :",
    options: ["10%", "20%", "90%", "50%"],
    correctAnswer: 2,
    explanation: "Les cellules gliales (glie) représentent environ 90% des cellules du système nerveux.",
    category: 'organisation'
  },
  {
    id: 9,
    question: "Les cellules gliales assurent :",
    options: ["Conduction de l'influx", "Soutien et nutrition", "Sécrétion enzymatique", "Contraction"],
    correctAnswer: 1,
    explanation: "Les cellules gliales assurent le soutien, la nutrition, la protection et la myélinisation des neurones.",
    category: 'organisation'
  },
  {
    id: 10,
    question: "Un neurone possède :",
    options: ["Soma + axone + dendrites", "Capsule", "Myofibrilles", "Sarcomère"],
    correctAnswer: 0,
    explanation: "Un neurone est constitué d'un soma (corps cellulaire), d'un axone et de dendrites.",
    category: 'organisation'
  },
  {
    id: 11,
    question: "La fonction intégrative du système nerveux correspond à :",
    options: ["Réception stimuli", "Traitement de l'information", "Réponse musculaire", "Sécrétion hormonale"],
    correctAnswer: 1,
    explanation: "La fonction intégrative correspond au traitement et à l'analyse de l'information dans le SNC.",
    category: 'organisation'
  },
  {
    id: 12,
    question: "La fonction motrice du système nerveux correspond à :",
    options: ["Réception des stimuli", "Génération de réponses", "Sécrétion hormonale", "Digestion"],
    correctAnswer: 1,
    explanation: "La fonction motrice correspond à la génération de réponses (musculaires ou glandulaires).",
    category: 'organisation'
  },
  {
    id: 13,
    question: "Le système nerveux central est protégé par :",
    options: ["Peau", "Méninges et LCR", "Muscles", "Os uniquement"],
    correctAnswer: 1,
    explanation: "Le SNC est protégé par les méninges (dure-mère, arachnoïde, pie-mère) et le liquide cérébro-spinal (LCR).",
    category: 'organisation'
  },
  {
    id: 14,
    question: "Le liquide cérébro-spinal (LCR) est produit par :",
    options: ["Les ventricules", "Les plexus choroïdes", "La dure-mère", "Les neurones"],
    correctAnswer: 1,
    explanation: "Le LCR est produit par les plexus choroïdes situés dans les ventricules cérébraux.",
    category: 'organisation'
  },
  {
    id: 15,
    question: "Le système nerveux assure l'homéostasie par :",
    options: ["Contraction musculaire", "Régulation des fonctions vitales", "Digestion", "Respiration uniquement"],
    correctAnswer: 1,
    explanation: "Le système nerveux maintient l'homéostasie en régulant les fonctions vitales (température, pression, etc.).",
    category: 'organisation'
  },
  // PARTIE II : Structure du neurone (16–30)
  {
    id: 16,
    question: "La zone réceptrice du neurone est :",
    options: ["L'axone", "Les dendrites", "La myéline", "Le nœud de Ranvier"],
    correctAnswer: 1,
    explanation: "Les dendrites sont la zone réceptrice du neurone, elles reçoivent les signaux d'autres neurones.",
    category: 'neurone'
  },
  {
    id: 17,
    question: "Le cône d'émergence produit :",
    options: ["Neurotransmetteurs", "Influx nerveux", "Hormones", "Myéline"],
    correctAnswer: 1,
    explanation: "Le cône d'émergence (implantation de l'axone) est le site de génération de l'influx nerveux (potentiel d'action).",
    category: 'neurone'
  },
  {
    id: 18,
    question: "La myéline est riche en :",
    options: ["Protéines", "Lipides", "Glucose", "Eau"],
    correctAnswer: 1,
    explanation: "La myéline est une gaine riche en lipides qui entoure certains axones et accélère la conduction.",
    category: 'neurone'
  },
  {
    id: 19,
    question: "Les nœuds de Ranvier permettent :",
    options: ["Sécrétion de neurotransmetteurs", "Conduction saltatoire", "Inhibition synaptique", "Hyperpolarisation"],
    correctAnswer: 1,
    explanation: "Les nœuds de Ranvier sont les espaces entre les gaines de myéline où l'influx se régénère (conduction saltatoire).",
    category: 'neurone'
  },
  {
    id: 20,
    question: "Les dendrites sont :",
    options: ["Myélinisées", "Toujours amyélinisées", "Contractiles", "Musculaires"],
    correctAnswer: 1,
    explanation: "Les dendrites sont généralement amyélinisées et conduisent les signaux vers le corps cellulaire.",
    category: 'neurone'
  },
  {
    id: 21,
    question: "L'axone conduit l'influx nerveux :",
    options: ["Vers le soma", "Du soma vers les terminaisons", "De façon bidirectionnelle", "Uniquement vers les dendrites"],
    correctAnswer: 1,
    explanation: "L'axone conduit l'influx nerveux du soma vers les terminaisons axonales (conduction orthodromique).",
    category: 'neurone'
  },
  {
    id: 22,
    question: "La gaine de myéline est formée par :",
    options: ["Les neurones", "Les cellules de Schwann (PNS) et oligodendrocytes (CNS)", "Les astrocytes", "Les microglies"],
    correctAnswer: 1,
    explanation: "La myéline est formée par les cellules de Schwann dans le SNP et les oligodendrocytes dans le SNC.",
    category: 'neurone'
  },
  {
    id: 23,
    question: "Les terminaisons axonales contiennent :",
    options: ["Des ribosomes", "Des vésicules de neurotransmetteurs", "Du noyau", "Des mitochondries uniquement"],
    correctAnswer: 1,
    explanation: "Les terminaisons axonales contiennent des vésicules remplies de neurotransmetteurs prêts à être libérés.",
    category: 'neurone'
  },
  {
    id: 24,
    question: "Le corps cellulaire du neurone contient :",
    options: ["Uniquement des mitochondries", "Le noyau et les organites", "Uniquement des vésicules", "De la myéline"],
    correctAnswer: 1,
    explanation: "Le soma contient le noyau, le réticulum endoplasmique, l'appareil de Golgi et les mitochondries.",
    category: 'neurone'
  },
  {
    id: 25,
    question: "La vitesse de conduction de l'influx nerveux dépend de :",
    options: ["La couleur du neurone", "Du diamètre de l'axone et de la myélinisation", "De l'âge uniquement", "De la température corporelle uniquement"],
    correctAnswer: 1,
    explanation: "La vitesse de conduction augmente avec le diamètre de l'axone et la présence de myéline.",
    category: 'neurone'
  },
  {
    id: 26,
    question: "Un axone myélinisé a une conduction :",
    options: ["Plus lente", "Plus rapide", "Identique", "Inexistante"],
    correctAnswer: 1,
    explanation: "La myélinisation permet une conduction saltatoire jusqu'à 100 fois plus rapide.",
    category: 'neurone'
  },
  {
    id: 27,
    question: "Les cellules de Schwann se trouvent dans :",
    options: ["Le SNC uniquement", "Le SNP uniquement", "Les deux", "Aucun"],
    correctAnswer: 1,
    explanation: "Les cellules de Schwann myélinisent les axones du système nerveux périphérique.",
    category: 'neurone'
  },
  {
    id: 28,
    question: "Les oligodendrocytes se trouvent dans :",
    options: ["Le SNC uniquement", "Le SNP uniquement", "Les deux", "Aucun"],
    correctAnswer: 0,
    explanation: "Les oligodendrocytes myélinisent les axones du système nerveux central.",
    category: 'neurone'
  },
  {
    id: 29,
    question: "Les astrocytes assurent :",
    options: ["La myélinisation", "Le soutien et la barrière hémato-encéphalique", "La phagocytose", "La conduction"],
    correctAnswer: 1,
    explanation: "Les astrocytes forment la barrière hémato-encéphalique et assurent le soutien métabolique des neurones.",
    category: 'neurone'
  },
  {
    id: 30,
    question: "La microglie assure :",
    options: ["La myélinisation", "La phagocytose et défense immunitaire", "La nutrition", "La conduction"],
    correctAnswer: 1,
    explanation: "La microglie est la cellule immunitaire du SNC, elle assure la phagocytose des débris cellulaires.",
    category: 'neurone'
  },
  // PARTIE III : Classification des neurones (31–45)
  {
    id: 31,
    question: "Un neurone multipolaire possède :",
    options: ["1 prolongement", "2 prolongements", "Plusieurs dendrites + 1 axone", "Aucun axone"],
    correctAnswer: 2,
    explanation: "Un neurone multipolaire possède plusieurs dendrites et un seul axone (type le plus fréquent).",
    category: 'classification'
  },
  {
    id: 32,
    question: "Les neurones sensitifs sont souvent :",
    options: ["Multipolaires", "Unipolaires (pseudo-unipolaires)", "Bipolaires", "Amyéliniques"],
    correctAnswer: 1,
    explanation: "Les neurones sensitifs (ganglions spinaux) sont pseudo-unipolaires avec un seul prolongement qui se divise.",
    category: 'classification'
  },
  {
    id: 33,
    question: "Les interneurones assurent :",
    options: ["La contraction musculaire", "La connexion entre neurones", "La digestion", "La sécrétion hormonale"],
    correctAnswer: 1,
    explanation: "Les interneurones établissent des connexions entre neurones sensitifs et moteurs dans le SNC.",
    category: 'classification'
  },
  {
    id: 34,
    question: "Les neurones moteurs activent :",
    options: ["Les récepteurs sensoriels", "Les muscles squelettiques", "La myéline", "Les capsules"],
    correctAnswer: 1,
    explanation: "Les motoneurones (neurones moteurs) activent les muscles squelettiques (voies efférentes).",
    category: 'classification'
  },
  {
    id: 35,
    question: "Un neurone bipolaire possède :",
    options: ["Un seul prolongement", "Deux prolongements", "Plusieurs axones", "Pas de dendrites"],
    correctAnswer: 1,
    explanation: "Un neurone bipolaire possède un axone et une dendrite (ex: neurones de la rétine, de l'oreille interne).",
    category: 'classification'
  },
  {
    id: 36,
    question: "Les neurones unipolaires se trouvent principalement dans :",
    options: ["Le cerveau", "Les ganglions spinaux", "Le cervelet", "La moelle épinière"],
    correctAnswer: 1,
    explanation: "Les neurones pseudo-unipolaires se trouvent dans les ganglions spinaux (neurones sensitifs).",
    category: 'classification'
  },
  {
    id: 37,
    question: "Les neurones multipolaires sont les plus :",
    options: ["Rares", "Nombreux", "Grands", "Petits"],
    correctAnswer: 1,
    explanation: "Les neurones multipolaires représentent la majorité des neurones du SNC (interneurones, motoneurones).",
    category: 'classification'
  },
  {
    id: 38,
    question: "Un motoneurone supérieur a son corps cellulaire dans :",
    options: ["La moelle épinière", "Le cortex moteur", "Le ganglion spinal", "Le cervelet"],
    correctAnswer: 1,
    explanation: "Les motoneurones supérieurs ont leur corps cellulaire dans le cortex moteur (voies pyramidales).",
    category: 'classification'
  },
  {
    id: 39,
    question: "Un motoneurone inférieur a son corps cellulaire dans :",
    options: ["Le cortex moteur", "La moelle épinière ou tronc cérébral", "Le cervelet", "Le thalamus"],
    correctAnswer: 1,
    explanation: "Les motoneurones inférieurs ont leur corps cellulaire dans la corne antérieure de la moelle ou le tronc cérébral.",
    category: 'classification'
  },
  {
    id: 40,
    question: "Les neurones sensitifs primaires ont leur corps cellulaire dans :",
    options: ["La moelle épinière", "Les ganglions spinaux", "Le cortex", "Le thalamus"],
    correctAnswer: 1,
    explanation: "Les corps cellulaires des neurones sensitifs primaires sont dans les ganglions spinaux (racine postérieure).",
    category: 'classification'
  },
  {
    id: 41,
    question: "Les interneurones représentent environ :",
    options: ["10% des neurones", "50% des neurones", "99% des neurones", "1% des neurones"],
    correctAnswer: 2,
    explanation: "Les interneurones représentent environ 99% des neurones du SNC.",
    category: 'classification'
  },
  {
    id: 42,
    question: "Les neurones de projection relient :",
    options: ["Deux zones proches", "Différentes régions du SNC", "Le muscle au SNC", "La peau au SNC"],
    correctAnswer: 1,
    explanation: "Les neurones de projection relient différentes régions du SNC (ex: voies pyramidales, spinothalamiques).",
    category: 'classification'
  },
  {
    id: 43,
    question: "Les neurones moteurs gamma innervent :",
    options: ["Les fibres squelettiques", "Les fuseaux neuromusculaires", "La peau", "Les tendons"],
    correctAnswer: 1,
    explanation: "Les motoneurones gamma innervent les fibres musculaires des fuseaux neuromusculaires (régulation du tonus).",
    category: 'classification'
  },
  {
    id: 44,
    question: "Les neurones moteurs alpha innervent :",
    options: ["Les fibres intrafusales", "Les fibres extrafusales (muscle squelettique)", "Les fuseaux", "Les tendons"],
    correctAnswer: 1,
    explanation: "Les motoneurones alpha innervent les fibres musculaires extrafusales (contraction principale).",
    category: 'classification'
  },
  {
    id: 45,
    question: "La classification fonctionnelle des neurones comprend :",
    options: ["Multipolaires et bipolaires", "Sensitifs, moteurs et interneurones", "Myélinisés et amyélinisés", "Grands et petits"],
    correctAnswer: 1,
    explanation: "La classification fonctionnelle distingue les neurones sensitifs, moteurs et les interneurones.",
    category: 'classification'
  },
  // PARTIE IV : Potentiel de membrane (46–65)
  {
    id: 46,
    question: "Le potentiel de repos est environ :",
    options: ["-40 mV", "-70 mV", "0 mV", "+40 mV"],
    correctAnswer: 1,
    explanation: "Le potentiel de repos d'un neurone est d'environ -70 mV (intérieur négatif par rapport à l'extérieur).",
    category: 'potentiel'
  },
  {
    id: 47,
    question: "Au repos, l'intérieur de la membrane est :",
    options: ["Positif", "Négatif", "Neutre", "Instable"],
    correctAnswer: 1,
    explanation: "Au repos, l'intérieur du neurone est négatif (-70 mV) par rapport à l'extérieur.",
    category: 'potentiel'
  },
  {
    id: 48,
    question: "L'extérieur de la membrane contient surtout :",
    options: ["K+", "Protéines anioniques", "Na+", "Phosphates"],
    correctAnswer: 2,
    explanation: "L'extérieur de la membrane est riche en Na+ (145 mM) tandis que l'intérieur est riche en K+ (140 mM).",
    category: 'potentiel'
  },
  {
    id: 49,
    question: "La dépolarisation correspond à :",
    options: ["Sortie de Na+", "Entrée massive de Na+", "Sortie de K+", "Fermeture des canaux Na+"],
    correctAnswer: 1,
    explanation: "La dépolarisation résulte de l'entrée massive de Na+ par les canaux Na+ voltage-dépendants ouverts.",
    category: 'potentiel'
  },
  {
    id: 50,
    question: "Le seuil du potentiel d'action est environ :",
    options: ["-100 mV", "-55 mV", "0 mV", "+70 mV"],
    correctAnswer: 1,
    explanation: "Le seuil de déclenchement du potentiel d'action est environ -55 mV (environ 15 mV au-dessus du repos).",
    category: 'potentiel'
  },
  {
    id: 51,
    question: "La repolarisation correspond à :",
    options: ["Entrée de Na+", "Sortie de K+", "Sortie de Na+", "Entrée de Cl-"],
    correctAnswer: 1,
    explanation: "La repolarisation est due à la sortie de K+ par les canaux K+ voltage-dépendants ouverts.",
    category: 'potentiel'
  },
  {
    id: 52,
    question: "L'hyperpolarisation correspond à :",
    options: ["Excès de Na+", "Excès de sortie de K+", "Entrée de Ca++", "Ouverture des canaux Na+"],
    correctAnswer: 1,
    explanation: "L'hyperpolarisation est due à une sortie prolongée de K+ rendant la membrane plus négative que le repos.",
    category: 'potentiel'
  },
  {
    id: 53,
    question: "La pompe Na+/K+ :",
    options: ["Sort Na+ et fait entrer K+", "Sort K+ uniquement", "Fait entrer Na+ uniquement", "Bloque les ions"],
    correctAnswer: 0,
    explanation: "La pompe Na+/K+ expulse 3 Na+ et fait entrer 2 K+ (contre leurs gradients) en utilisant de l'ATP.",
    category: 'potentiel'
  },
  {
    id: 54,
    question: "Le potentiel d'action respecte la loi de :",
    options: ["Tout ou rien", "Graduelle", "Proportionnelle", "Aléatoire"],
    correctAnswer: 0,
    explanation: "Le potentiel d'action suit la loi du tout ou rien : une fois le seuil atteint, l'amplitude est maximale et constante.",
    category: 'potentiel'
  },
  {
    id: 55,
    question: "La période réfractaire absolue correspond à :",
    options: ["Une excitabilité augmentée", "L'impossibilité de générer un nouveau PA", "Une excitabilité normale", "Un seuil abaissé"],
    correctAnswer: 1,
    explanation: "Pendant la période réfractaire absolue, aucun nouveau PA ne peut être généré (canaux Na+ inactivés).",
    category: 'potentiel'
  },
  {
    id: 56,
    question: "La période réfractaire relative correspond à :",
    options: ["Aucune réponse possible", "Un seuil plus élevé", "Une excitabilité accrue", "Une inhibition totale"],
    correctAnswer: 1,
    explanation: "Pendant la période réfractaire relative, un stimulus plus intense est nécessaire pour déclencher un PA.",
    category: 'potentiel'
  },
  {
    id: 57,
    question: "L'intérieur du neurone est riche en :",
    options: ["Na+", "K+", "Ca++", "Cl-"],
    correctAnswer: 1,
    explanation: "L'intérieur du neurone contient environ 140 mM de K+ contre 5 mM à l'extérieur.",
    category: 'potentiel'
  },
  {
    id: 58,
    question: "Les protéines anioniques intracellulaires contribuent à :",
    options: ["Positivité intracellulaire", "Négativité intracellulaire", "Neutralité", "Positivité extracellulaire"],
    correctAnswer: 1,
    explanation: "Les protéines anioniques (A-) intracellulaires contribuent à la négativité du potentiel de repos.",
    category: 'potentiel'
  },
  {
    id: 59,
    question: "Le potentiel d'équilibre de K+ est environ :",
    options: ["-90 mV", "-70 mV", "+60 mV", "0 mV"],
    correctAnswer: 0,
    explanation: "Le potentiel d'équilibre de K+ est environ -90 mV (proche du potentiel de repos).",
    category: 'potentiel'
  },
  {
    id: 60,
    question: "Le potentiel d'équilibre de Na+ est environ :",
    options: ["-90 mV", "-70 mV", "+60 mV", "0 mV"],
    correctAnswer: 2,
    explanation: "Le potentiel d'équilibre de Na+ est environ +60 mV (explique la dépolarisation).",
    category: 'potentiel'
  },
  {
    id: 61,
    question: "Les canaux Na+ voltage-dépendants s'ouvrent lors de :",
    options: ["L'hyperpolarisation", "La dépolarisation", "La repolarisation", "Le repos"],
    correctAnswer: 1,
    explanation: "Les canaux Na+ s'ouvrent quand la membrane se dépolarise et atteint le seuil.",
    category: 'potentiel'
  },
  {
    id: 62,
    question: "Les canaux K+ voltage-dépendants s'ouvrent :",
    options: ["Avant les canaux Na+", "Après les canaux Na+", "Simultanément", "Jamais"],
    correctAnswer: 1,
    explanation: "Les canaux K+ s'ouvrent avec un léger retard par rapport aux canaux Na+ (responsables de la repolarisation).",
    category: 'potentiel'
  },
  {
    id: 63,
    question: "La conduction saltatoire se produit dans :",
    options: ["Les axones amyélinisés", "Les axones myélinisés", "Les dendrites", "Le soma"],
    correctAnswer: 1,
    explanation: "La conduction saltatoire se produit uniquement dans les axones myélinisés aux nœuds de Ranvier.",
    category: 'potentiel'
  },
  {
    id: 64,
    question: "La conduction continue se produit dans :",
    options: ["Les axones myélinisés", "Les axones amyélinisés", "Uniquement les gros axones", "Uniquement les dendrites"],
    correctAnswer: 1,
    explanation: "La conduction continue (décroissante en amplitude) se produit dans les axones amyélinisés.",
    category: 'potentiel'
  },
  {
    id: 65,
    question: "Le potentiel de repos est maintenu principalement par :",
    options: ["Les canaux Na+", "La pompe Na+/K+ et la perméabilité au K+", "Les canaux Ca++", "Les canaux Cl-"],
    correctAnswer: 1,
    explanation: "Le potentiel de repos est maintenu par la pompe Na+/K+ et la perméabilité membranaire au K+.",
    category: 'potentiel'
  },
  // PARTIE V : Synapse (66–80)
  {
    id: 66,
    question: "La synapse neuro-neuronale relie :",
    options: ["Nerf-muscle", "Nerf-glande", "Deux neurones", "Muscle-muscle"],
    correctAnswer: 2,
    explanation: "La synapse neuro-neuronale relie deux neurones (synapse interneuronale).",
    category: 'synapse'
  },
  {
    id: 67,
    question: "La synapse chimique fonctionne par :",
    options: ["Passage direct du courant", "Libération de neurotransmetteur", "Pompe Na/K", "Diffusion d'O2"],
    correctAnswer: 1,
    explanation: "La synapse chimique fonctionne par libération de neurotransmetteur dans la fente synaptique.",
    category: 'synapse'
  },
  {
    id: 68,
    question: "Le glutamate est :",
    options: ["Inhibiteur", "Excitateur", "Hormonal", "Enzymatique"],
    correctAnswer: 1,
    explanation: "Le glutamate est le principal neurotransmetteur excitateur du SNC.",
    category: 'synapse'
  },
  {
    id: 69,
    question: "Le GABA est :",
    options: ["Excitateur", "Inhibiteur", "Moteur", "Sensoriel"],
    correctAnswer: 1,
    explanation: "Le GABA est le principal neurotransmetteur inhibiteur du SNC (hyperpolarise la membrane).",
    category: 'synapse'
  },
  {
    id: 70,
    question: "Un EPSP est :",
    options: ["Un potentiel inhibiteur postsynaptique", "Un potentiel excitateur postsynaptique", "Une hyperpolarisation", "Un potentiel de repos"],
    correctAnswer: 1,
    explanation: "Un EPSP (Excitatory Post-Synaptic Potential) est une dépolarisation locale qui facilite le PA.",
    category: 'synapse'
  },
  {
    id: 71,
    question: "Un IPSP correspond à :",
    options: ["Une dépolarisation", "Une hyperpolarisation", "Une excitation", "Un seuil"],
    correctAnswer: 1,
    explanation: "Un IPSP (Inhibitory Post-Synaptic Potential) est une hyperpolarisation qui inhibe le PA.",
    category: 'synapse'
  },
  {
    id: 72,
    question: "L'acétylcholine est le neurotransmetteur de :",
    options: ["La jonction neuromusculaire uniquement", "Toutes les synapses chimiques", "La jonction neuromusculaire et les synapses parasympathiques", "Le SNC uniquement"],
    correctAnswer: 2,
    explanation: "L'acétylcholine est le neurotransmetteur de la jonction neuromusculaire et des fibres parasympathiques.",
    category: 'synapse'
  },
  {
    id: 73,
    question: "La transmission synaptique chimique est :",
    options: ["Bidirectionnelle", "Unidirectionnelle", "Instantanée", "Continue"],
    correctAnswer: 1,
    explanation: "La transmission synaptique chimique est unidirectionnelle (présynaptique → postsynaptique).",
    category: 'synapse'
  },
  {
    id: 74,
    question: "La fente synaptique a une largeur d'environ :",
    options: ["1 nm", "20-30 nm", "1 µm", "1 mm"],
    correctAnswer: 1,
    explanation: "La fente synaptique mesure environ 20-30 nm de large.",
    category: 'synapse'
  },
  {
    id: 75,
    question: "Les vésicules synaptiques contiennent :",
    options: ["Des enzymes", "Des neurotransmetteurs", "De l'ATP uniquement", "Du calcium"],
    correctAnswer: 1,
    explanation: "Les vésicules synaptiques contiennent des neurotransmetteurs prêts à être libérés.",
    category: 'synapse'
  },
  {
    id: 76,
    question: "L'arrivée du PA dans la terminaison provoque :",
    options: ["La sortie de K+", "L'entrée de Ca++", "La sortie de Na+", "L'entrée de Cl-"],
    correctAnswer: 1,
    explanation: "L'arrivée du PA provoque l'ouverture des canaux Ca++ voltage-dépendants et l'entrée de Ca++.",
    category: 'synapse'
  },
  {
    id: 77,
    question: "Le calcium intracellulaire provoque :",
    options: ["La fermeture des canaux", "L'exocytose des vésicules", "L'endocytose", "L'inactivation"],
    correctAnswer: 1,
    explanation: "L'entrée de Ca++ déclenche l'exocytose des vésicules et la libération des neurotransmetteurs.",
    category: 'synapse'
  },
  {
    id: 78,
    question: "L'acétylcholinestérase :",
    options: ["Synthétise l'acétylcholine", "Dégrade l'acétylcholine", "Active les récepteurs", "Transporte l'ACh"],
    correctAnswer: 1,
    explanation: "L'acétylcholinestérase dégrade l'acétylcholine en acétate et choline (terminaison du signal).",
    category: 'synapse'
  },
  {
    id: 79,
    question: "La sommation spatiale correspond à :",
    options: ["Plusieurs PA sur une même synapse", "Activation de plusieurs synapses simultanément", "Un seul PA", "Une inhibition"],
    correctAnswer: 1,
    explanation: "La sommation spatiale résulte de l'activation simultanée de plusieurs synapses sur le même neurone.",
    category: 'synapse'
  },
  {
    id: 80,
    question: "La sommation temporelle correspond à :",
    options: ["Activation de plusieurs synapses", "Plusieurs PA rapprochés sur la même synapse", "Un seul stimulus", "Une inhibition"],
    correctAnswer: 1,
    explanation: "La sommation temporelle résulte de PA rapprochés dans le temps sur la même synapse.",
    category: 'synapse'
  },
  // PARTIE VI : SNC & SNP (81–100)
  {
    id: 81,
    question: "Le SNC comprend :",
    options: ["Les nerfs", "Les ganglions", "L'encéphale et la moelle épinière", "La myéline"],
    correctAnswer: 2,
    explanation: "Le système nerveux central comprend l'encéphale (cerveau, cervelet, tronc cérébral) et la moelle épinière.",
    category: 'snc-snp'
  },
  {
    id: 82,
    question: "Le SNP comprend :",
    options: ["12 paires de nerfs crâniens", "31 paires de nerfs spinaux", "Les deux", "Aucun"],
    correctAnswer: 2,
    explanation: "Le SNP comprend les 12 paires de nerfs crâniens et les 31 paires de nerfs spinaux.",
    category: 'snc-snp'
  },
  {
    id: 83,
    question: "Le système somatique contrôle :",
    options: ["Volontairement les muscles squelettiques", "Le cœur", "Les glandes", "La digestion"],
    correctAnswer: 0,
    explanation: "Le système somatique contrôle de façon volontaire les muscles squelettiques.",
    category: 'snc-snp'
  },
  {
    id: 84,
    question: "Le SNA contrôle :",
    options: ["Les muscles squelettiques", "Les fonctions involontaires", "Les mouvements conscients", "La pensée"],
    correctAnswer: 1,
    explanation: "Le système nerveux autonome (SNA) contrôle les fonctions involontaires (cœur, digestion, glandes).",
    category: 'snc-snp'
  },
  {
    id: 85,
    question: "Le sympathique agit en situation :",
    options: ["De repos", "De stress", "De sommeil", "De digestion"],
    correctAnswer: 1,
    explanation: "Le système orthosympathique est activé en situation de stress (fight or flight).",
    category: 'snc-snp'
  },
  {
    id: 86,
    question: "Le parasympathique agit en situation :",
    options: ["D'urgence", "De stress", "De repos", "D'alerte"],
    correctAnswer: 2,
    explanation: "Le système parasympathique est activé au repos (rest and digest).",
    category: 'snc-snp'
  },
  {
    id: 87,
    question: "Tous les neurones préganglionnaires du SNA sont :",
    options: ["Noradrénergiques", "Cholinergiques", "Dopaminergiques", "GABAergiques"],
    correctAnswer: 1,
    explanation: "Tous les neurones préganglionnaires du SNA (sympathique et parasympathique) libèrent de l'acétylcholine.",
    category: 'snc-snp'
  },
  {
    id: 88,
    question: "Les neurones postganglionnaires sympathiques sont :",
    options: ["Cholinergiques", "Noradrénergiques", "Glutamatergiques", "GABAergiques"],
    correctAnswer: 1,
    explanation: "Les neurones postganglionnaires sympathiques libèrent de la noradrénaline.",
    category: 'snc-snp'
  },
  {
    id: 89,
    question: "Les neurones postganglionnaires parasympathiques sont :",
    options: ["Noradrénergiques", "Cholinergiques", "Dopaminergiques", "Mixtes"],
    correctAnswer: 1,
    explanation: "Les neurones postganglionnaires parasympathiques libèrent de l'acétylcholine.",
    category: 'snc-snp'
  },
  {
    id: 90,
    question: "La sclérose en plaques est une maladie :",
    options: ["Des muscles", "De la myéline du SNC", "Des nerfs périphériques", "Des synapses"],
    correctAnswer: 1,
    explanation: "La sclérose en plaques est une maladie auto-immune détruisant la myéline du SNC.",
    category: 'snc-snp'
  },
  {
    id: 91,
    question: "La maladie de Parkinson est due à :",
    options: ["Une perte de neurones dopaminergiques", "Une perte de myéline", "Une infection virale", "Un traumatisme"],
    correctAnswer: 0,
    explanation: "La maladie de Parkinson résulte de la dégénérescence des neurones dopaminergiques de la substance noire.",
    category: 'snc-snp'
  },
  {
    id: 92,
    question: "L'épilepsie correspond à :",
    options: ["Une perte de neurones", "Une hyperactivité synaptique", "Une démyélinisation", "Une infection"],
    correctAnswer: 1,
    explanation: "L'épilepsie est due à une hyperactivité synaptique anormale et synchronisée des neurones.",
    category: 'snc-snp'
  },
  {
    id: 93,
    question: "Les ganglions spinaux contiennent les corps cellulaires des :",
    options: ["Motoneurones", "Neurones sensitifs", "Interneurones", "Neurones sympathiques"],
    correctAnswer: 1,
    explanation: "Les ganglions spinaux (racine postérieure) contiennent les corps cellulaires des neurones sensitifs primaires.",
    category: 'snc-snp'
  },
  {
    id: 94,
    question: "Le LCR circule dans :",
    options: ["Les vaisseaux sanguins", "Les ventricules et l'espace sous-arachnoïdien", "La moelle épinière", "Les ganglions"],
    correctAnswer: 1,
    explanation: "Le LCR circule dans les ventricules cérébraux et l'espace sous-arachnoïdien.",
    category: 'snc-snp'
  },
  {
    id: 95,
    question: "Le cortex moteur se situe dans :",
    options: ["Le lobe frontal", "Le lobe pariétal", "Le lobe temporal", "Le lobe occipital"],
    correctAnswer: 0,
    explanation: "Le cortex moteur primaire se situe dans le lobe frontal (circonvolution frontale ascendante).",
    category: 'snc-snp'
  },
  {
    id: 96,
    question: "Le cortex sensitif se situe dans :",
    options: ["Le lobe frontal", "Le lobe pariétal", "Le lobe temporal", "Le lobe occipital"],
    correctAnswer: 1,
    explanation: "Le cortex sensitif primaire se situe dans le lobe pariétal (circonvolution pariétale ascendante).",
    category: 'snc-snp'
  },
  {
    id: 97,
    question: "Le cervelet coordonne :",
    options: ["La pensée", "Les mouvements et l'équilibre", "La mémoire", "Le langage"],
    correctAnswer: 1,
    explanation: "Le cervelet coordonne les mouvements, maintient l'équilibre et la posture.",
    category: 'snc-snp'
  },
  {
    id: 98,
    question: "Le thalamus est :",
    options: ["Un centre moteur", "Un relais sensitif", "Un centre de mémoire", "Un centre respiratoire"],
    correctAnswer: 1,
    explanation: "Le thalamus est le principal relais des voies sensitives vers le cortex.",
    category: 'snc-snp'
  },
  {
    id: 99,
    question: "L'hypothalamus contrôle :",
    options: ["Les mouvements", "L'homéostasie et les fonctions végétatives", "La mémoire", "Le langage"],
    correctAnswer: 1,
    explanation: "L'hypothalamus contrôle l'homéostasie, la faim, la soif, la température et le système endocrinien.",
    category: 'snc-snp'
  },
  {
    id: 100,
    question: "Le tronc cérébral comprend :",
    options: ["Le cortex et le thalamus", "Le mésencéphale, la protubérance et le bulbe", "Le cervelet", "Les hémisphères"],
    correctAnswer: 1,
    explanation: "Le tronc cérébral comprend le mésencéphale, la protubérance (pons) et le bulbe rachidien.",
    category: 'snc-snp'
  }
];

export const nervousCategoryLabels: Record<string, string> = {
  'organisation': "Organisation Générale",
  'neurone': "Structure du Neurone",
  'classification': "Classification",
  'potentiel': "Potentiel de Membrane",
  'synapse': "Synapse",
  'snc-snp': "SNC & SNP"
};

export const nervousCategoryColors: Record<string, string> = {
  'organisation': "bg-violet-500",
  'neurone': "bg-blue-500",
  'classification': "bg-teal-500",
  'potentiel': "bg-red-500",
  'synapse': "bg-yellow-500",
  'snc-snp': "bg-indigo-500"
};
