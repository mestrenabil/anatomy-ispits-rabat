export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'anatomie' | 'physiologie' | 'pathologie' | 'articulations';
}

export const qcmData: Question[] = [
  // ANATOMIE - Questions 1-30
  {
    id: 1,
    question: "Le squelette axial comprend :",
    options: ["Membres", "Crâne + colonne + cage thoracique", "Bassin", "Membres inférieurs"],
    correctAnswer: 1,
    explanation: "Le squelette axial forme l'axe central et protège cerveau, moelle épinière, cœur et poumons.",
    category: 'anatomie'
  },
  {
    id: 2,
    question: "Le nombre total d'os chez l'adulte est :",
    options: ["200", "206", "210", "212"],
    correctAnswer: 1,
    explanation: "Après la fusion du sacrum et du coccyx, le total est 206 os.",
    category: 'anatomie'
  },
  {
    id: 3,
    question: "Le sacrum résulte de la fusion de :",
    options: ["3 vertèbres", "4 vertèbres", "5 vertèbres", "6 vertèbres"],
    correctAnswer: 2,
    explanation: "Le sacrum est constitué de 5 vertèbres sacrées soudées.",
    category: 'anatomie'
  },
  {
    id: 4,
    question: "La diaphyse d'un os long est :",
    options: ["Extrémité", "Partie centrale", "Cartilage", "Capsule"],
    correctAnswer: 1,
    explanation: "Partie centrale composée surtout d'os compact pour la résistance.",
    category: 'anatomie'
  },
  {
    id: 5,
    question: "L'épiphyse contient principalement :",
    options: ["Os compact", "Os spongieux", "Capsule", "Tendon"],
    correctAnswer: 1,
    explanation: "L'os spongieux absorbe les contraintes et contient la moelle rouge.",
    category: 'anatomie'
  },
  {
    id: 6,
    question: "La métaphyse est la région :",
    options: ["Centrale", "Entre diaphyse et épiphyse", "Terminale", "Médullaire"],
    correctAnswer: 1,
    explanation: "La métaphyse contient le disque de croissance (cartilage de conjugaison) chez l'enfant.",
    category: 'anatomie'
  },
  {
    id: 7,
    question: "Le périoste est :",
    options: ["Membrane interne", "Membrane externe", "Os spongieux", "Cartilage"],
    correctAnswer: 1,
    explanation: "Membrane fibreuse externe qui nourrit l'os et permet son attachement aux muscles.",
    category: 'anatomie'
  },
  {
    id: 8,
    question: "L'endoste est :",
    options: ["Membrane externe", "Membrane interne", "Cartilage", "Tissu adipeux"],
    correctAnswer: 1,
    explanation: "Membrane interne qui recouvre la cavité médullaire contenant la moelle osseuse.",
    category: 'anatomie'
  },
  {
    id: 9,
    question: "La colonne vertébrale contient combien de vertèbres en total :",
    options: ["30", "33", "35", "37"],
    correctAnswer: 1,
    explanation: "7 cervicales + 12 thoraciques + 5 lombaires + 5 sacrées (fused) + 4 coccygiennes = 33",
    category: 'anatomie'
  },
  {
    id: 10,
    question: "L'atlas est :",
    options: ["C2", "C1", "C3", "T1"],
    correctAnswer: 1,
    explanation: "C1 (atlas) supporte la tête et s'articule avec l'axis (C2).",
    category: 'anatomie'
  },
  {
    id: 11,
    question: "L'axis contient :",
    options: ["Foramen magnum", "Odontoïde", "Apophyse xiphoïde", "Lame criblée"],
    correctAnswer: 1,
    explanation: "L'apophyse odontoïde (dent de l'axis) s'articule avec l'atlas permettant la rotation.",
    category: 'anatomie'
  },
  {
    id: 12,
    question: "Les vertèbres thoraciques se caractérisent par :",
    options: ["Petit corps", "Facettes costales", "Grands foramens", "Apophyses transverses courtes"],
    correctAnswer: 1,
    explanation: "Les facettes costales s'articulent avec les côtes formant l'articulation costovértébrale.",
    category: 'anatomie'
  },
  {
    id: 13,
    question: "La lordose cervicale est :",
    options: ["Concavité vers l'avant", "Concavité vers l'arrière", "Absence de courbure", "Courbure latérale"],
    correctAnswer: 0,
    explanation: "Courbure concave vers l'avant (lordose) caractérisée par une concavité antérieure.",
    category: 'anatomie'
  },
  {
    id: 14,
    question: "La cyphose thoracique est :",
    options: ["Concavité vers l'avant", "Concavité vers l'arrière", "Courbure latérale", "Pas de courbure"],
    correctAnswer: 1,
    explanation: "Courbure concave vers l'arrière (cyphose) ou convexité vers l'avant.",
    category: 'anatomie'
  },
  {
    id: 15,
    question: "Le canal vertébral contient :",
    options: ["Moelle osseuse", "Moelle épinière", "Nerfs périphériques", "Vaisseaux sanguins"],
    correctAnswer: 1,
    explanation: "Le canal vertébral (spinal) protège la moelle épinière et ses méninges.",
    category: 'anatomie'
  },
  {
    id: 16,
    question: "Le disque intervertébral comprend :",
    options: ["Fibrocartilage uniquement", "Noyau pulpeux + anneau fibreux", "Os + cartilage", "Ligament + tendon"],
    correctAnswer: 1,
    explanation: "Structure fibrocartilagineuse avec noyau gélatineux central et anneau fibreux externe.",
    category: 'anatomie'
  },
  {
    id: 17,
    question: "Le sternum s'articule avec :",
    options: ["7 côtes", "10 côtes", "12 côtes", "Vertèbres seulement"],
    correctAnswer: 0,
    explanation: "Les 7 premières côtes (vraies côtes) s'articulent avec le sternum par les cartilages costaux.",
    category: 'anatomie'
  },
  {
    id: 18,
    question: "Les côtes flottantes sont :",
    options: ["1-7", "8-10", "11-12", "Toutes sauf 1"],
    correctAnswer: 2,
    explanation: "Les 11e et 12e côtes sont libres antérieurement (non articulées au sternum).",
    category: 'anatomie'
  },
  {
    id: 19,
    question: "Le crâne contient combien d'os :",
    options: ["14", "22", "28", "32"],
    correctAnswer: 1,
    explanation: "Le crâne contient 22 os : 8 crâniens + 14 faciaux.",
    category: 'anatomie'
  },
  {
    id: 20,
    question: "L'os frontal forme :",
    options: ["Tempe", "Région du nez", "Front", "Mâchoire"],
    correctAnswer: 2,
    explanation: "L'os frontal constitue le front et s'articule avec les os nasaux et du maxillaire.",
    category: 'anatomie'
  },
  {
    id: 21,
    question: "L'os pariétal est situé :",
    options: ["Au front", "Temporalement", "Au sommet du crâne", "À la base"],
    correctAnswer: 2,
    explanation: "Les deux os pariétaux forment le toit du crâne à la partie supérieure.",
    category: 'anatomie'
  },
  {
    id: 22,
    question: "Le foramen magnum permet :",
    options: ["Passage du nerf optique", "Passage de la moelle épinière", "Passage de l'artère carotide", "Passage du nerf facial"],
    correctAnswer: 1,
    explanation: "Le foramen magnum dans l'os occipital permet la communication entre crâne et canal rachidien.",
    category: 'anatomie'
  },
  {
    id: 23,
    question: "L'apophyse mastoïde appartient à :",
    options: ["Temporal", "Pariétal", "Occipital", "Frontal"],
    correctAnswer: 0,
    explanation: "Proéminence osseuse du temporal derrière l'oreille, point d'insertion musculaire.",
    category: 'anatomie'
  },
  {
    id: 24,
    question: "La selle turcique contient :",
    options: ["Amygdale", "Cervelet", "Hypophyse", "Thalamus"],
    correctAnswer: 2,
    explanation: "Cavité de l'os sphénoïde hébergeant l'hypophyse (glande pituitaire).",
    category: 'anatomie'
  },
  {
    id: 25,
    question: "L'os hyoïde est unique car :",
    options: ["C'est le plus gros os", "Il n'a pas d'articulation", "Il est pair", "Il s'articule au sternum"],
    correctAnswer: 1,
    explanation: "L'os hyoïde est maintenu par des muscles et ligaments, sans articulation osseuse.",
    category: 'anatomie'
  },
  {
    id: 26,
    question: "Les clavicules sont :",
    options: ["Vertébrales", "Côtes", "Os du membre supérieur", "Os du bassin"],
    correctAnswer: 2,
    explanation: "Deux os du membre supérieur articulés au sternum et à l'acromion (scapula).",
    category: 'anatomie'
  },
  {
    id: 27,
    question: "La scapula (omoplate) contient :",
    options: ["Cavité cotyle", "Cavité glénoïde", "Acétabulum", "Fosse olécranienne"],
    correctAnswer: 1,
    explanation: "Cavité glénoïde superficielle accueillant la tête de l'humérus pour l'articulation gléno-humérale.",
    category: 'anatomie'
  },
  {
    id: 28,
    question: "L'acromion est une projection de :",
    options: ["Clavicule", "Humérus", "Scapula", "Ulna"],
    correctAnswer: 2,
    explanation: "Processus épineux de la scapula, servant de point de repère et d'articulation.",
    category: 'anatomie'
  },
  {
    id: 29,
    question: "Le bassin osseux se divise en :",
    options: ["2 parties", "3 parties", "4 parties", "5 parties"],
    correctAnswer: 2,
    explanation: "Grand bassin (sus-pelvien), petit bassin (sous-pelvien) et détroit pelvien.",
    category: 'anatomie'
  },
  {
    id: 30,
    question: "L'acétabulum reçoit :",
    options: ["Tête fémorale", "Tête tibiale", "Extrémité fibulaire", "Condyle fémoral"],
    correctAnswer: 0,
    explanation: "Cavité du bassin formée par la fusion du pubis, ischium et ilium, accueillant la tête du fémur.",
    category: 'anatomie'
  },
  
  // PHYSIOLOGIE - Questions 31-60
  {
    id: 31,
    question: "L'ossification enchondrale débute par :",
    options: ["Calcification", "Formation de cartilage", "Formation de matrices osseuses", "Minéralisation"],
    correctAnswer: 1,
    explanation: "Formation d'un modèle cartilagineux qui sera remplacé par l'os.",
    category: 'physiologie'
  },
  {
    id: 32,
    question: "L'ossification intramembraneuse débute par :",
    options: ["Cartilage", "Membrane fibreuse", "Hyaline", "Élastique"],
    correctAnswer: 1,
    explanation: "Ossification directe dans une membrane mésenchymateuse sans stade cartilagineux.",
    category: 'physiologie'
  },
  {
    id: 33,
    question: "Les ostéoblastes sont responsables de :",
    options: ["Destruction osseuse", "Formation osseuse", "Résorption", "Calcification seulement"],
    correctAnswer: 1,
    explanation: "Cellules productrices de matrice osseuse et de minéraux pour la formation osseuse.",
    category: 'physiologie'
  },
  {
    id: 34,
    question: "Les ostéoclastes sont responsables de :",
    options: ["Formation osseuse", "Résorption osseuse", "Calcification", "Synthèse collagénique"],
    correctAnswer: 1,
    explanation: "Cellules multinucléées résorbant l'os par acidification et libération d'enzymes.",
    category: 'physiologie'
  },
  {
    id: 35,
    question: "Les ostéocytes sont :",
    options: ["Précurseurs ostéoblastiques", "Ostéoblastes matures dans l'os", "Cellules mésenchymateuses", "Fibroblastes"],
    correctAnswer: 1,
    explanation: "Ostéoblastes emprisonnés dans des lacunes osseuses, maintenant la matrice.",
    category: 'physiologie'
  },
  {
    id: 36,
    question: "La minéralisation osseuse dépend primarily de :",
    options: ["Phosphore seul", "Calcium et phosphore", "Magnésium", "Sodium et potassium"],
    correctAnswer: 1,
    explanation: "Cristaux hydroxyapatite (Ca10(PO4)6(OH)2) assurent la dureté osseuse.",
    category: 'physiologie'
  },
  {
    id: 37,
    question: "La vitamine D agit sur :",
    options: ["Formation collagénique", "Absorption intestinale du calcium", "Résorption osseuse", "Synthèse PTH"],
    correctAnswer: 1,
    explanation: "Augmente absorption du calcium par l'intestin grêle et réabsorption rénale.",
    category: 'physiologie'
  },
  {
    id: 38,
    question: "La parathormone (PTH) :",
    options: ["Baisse le calcium", "Augmente le calcium", "N'affecte pas le calcium", "Augmente le phosphore"],
    correctAnswer: 1,
    explanation: "Augmente résorption osseuse, réabsorption rénale du Ca et synthèse vitamine D.",
    category: 'physiologie'
  },
  {
    id: 39,
    question: "La calcitonine :",
    options: ["Augmente le calcium", "Baisse le calcium", "Augmente le phosphore", "N'a pas d'effet osseux"],
    correctAnswer: 1,
    explanation: "Inhibe ostéoclastes et favorise calcium urinaire, baissant calcémie.",
    category: 'physiologie'
  },
  {
    id: 40,
    question: "Le remodelage osseux désigne :",
    options: ["Formation uniquement", "Résorption uniquement", "Formation et résorption cycliques", "Croissance linéaire"],
    correctAnswer: 2,
    explanation: "Processus continu de destruction et reconstruction osseuse (remplacement complet ~10 ans).",
    category: 'physiologie'
  },
  {
    id: 41,
    question: "Le taux de remodelage augmente avec :",
    options: ["Repos", "Immobilisation", "Charge mécanique", "Repos allongé"],
    correctAnswer: 2,
    explanation: "Force mécanique stimule ostéoblastes via senseurs (ostéocytes et intégrines).",
    category: 'physiologie'
  },
  {
    id: 42,
    question: "La moelle rouge produit :",
    options: ["Plasma", "Globules rouges et blancs", "Lymphe", "Insuline"],
    correctAnswer: 1,
    explanation: "Hématopoïèse productrices d'érythrocytes, leucocytes et thrombocytes.",
    category: 'physiologie'
  },
  {
    id: 43,
    question: "La moelle jaune est composée de :",
    options: ["Cellules souches", "Tissu adipeux", "Cellules sanguines", "Fibrocartilage"],
    correctAnswer: 1,
    explanation: "Tissu adipeux riche en graisses de réserve, peu d'hématopoïèse.",
    category: 'physiologie'
  },
  {
    id: 44,
    question: "L'hématopoïèse se produit principalement dans :",
    options: ["Diaphyse", "Épiphyse", "Moelle rouge", "Périoste"],
    correctAnswer: 2,
    explanation: "Processus de formation des cellules sanguines dans la moelle osseuse rouge.",
    category: 'physiologie'
  },
  {
    id: 45,
    question: "La matrice osseuse comporte :",
    options: ["Collagène seul", "Minéraux seuls", "Collagène (30%) + minéraux (70%)", "Eau principalement"],
    correctAnswer: 2,
    explanation: "Composition combinée donnant à l'os rigidité (minéraux) et flexibilité (collagène).",
    category: 'physiologie'
  },
  {
    id: 46,
    question: "La fusion des épiphyses complète vers :",
    options: ["15-16 ans", "18-20 ans", "21-25 ans", "30-35 ans"],
    correctAnswer: 2,
    explanation: "Fermeture du disque de croissance (cartilage de conjugaison) cessant la croissance linéaire.",
    category: 'physiologie'
  },
  {
    id: 47,
    question: "L'apposition osseuse augmente :",
    options: ["Longueur", "Diamètre", "Épaisseur de la diaphyse", "Profondeur"],
    correctAnswer: 2,
    explanation: "Croissance en épaisseur par dépôt sur periosteum externe et résorption interne.",
    category: 'physiologie'
  },
  {
    id: 48,
    question: "La résistance mécanique de l'os dépend de :",
    options: ["Minéralisation seule", "Collagène seul", "Géométrie + minéralisation + collagène", "Densité osseuse uniquement"],
    correctAnswer: 2,
    explanation: "Combinaison de composition, architecture et qualité osseuse.",
    category: 'physiologie'
  },
  {
    id: 49,
    question: "Les ligaments osseux servent à :",
    options: ["Stocker du calcium", "Joindre os à os", "Joindre os à muscle", "Joindre muscle à muscle"],
    correctAnswer: 1,
    explanation: "Structures fibreuses assurant la cohésion et la stabilité articulaire.",
    category: 'physiologie'
  },
  {
    id: 50,
    question: "La charge mécanique provoque :",
    options: ["Perte osseuse", "Gain osseux", "Aucun effet", "Atrophie"],
    correctAnswer: 1,
    explanation: "Stress mécanique stimule ostéoblastes et remodelage anabolique.",
    category: 'physiologie'
  },
  {
    id: 51,
    question: "L'immobilisation provoque :",
    options: ["Gain osseux", "Perte osseuse", "Aucun effet", "Calcification"],
    correctAnswer: 1,
    explanation: "Absence de stimuli mécaniques diminue remodelage, déminéralisation osseuse.",
    category: 'physiologie'
  },
  {
    id: 52,
    question: "Le pic de masse osseuse est atteint vers :",
    options: ["15-18 ans", "20-30 ans", "35-40 ans", "50+ ans"],
    correctAnswer: 1,
    explanation: "Masse maximale atteinte vers 25-30 ans, puis décline lentement.",
    category: 'physiologie'
  },
  {
    id: 53,
    question: "L'œstrogène affecte l'os par :",
    options: ["Augmentation ostéoclastes", "Inhibition ostéoclastes", "Stimulation ostéoblastes", "Inhibition ostéoblastes"],
    correctAnswer: 1,
    explanation: "Hormone anti-résorption ralentissant ostéoclastes et prévenant perte osseuse.",
    category: 'physiologie'
  },
  {
    id: 54,
    question: "La ménopause provoque :",
    options: ["Gain osseux", "Perte osseuse rapide", "Aucun effet", "Sclérose"],
    correctAnswer: 1,
    explanation: "Chute œstrogène augmente résorption et diminue absorption calcium.",
    category: 'physiologie'
  },
  {
    id: 55,
    question: "L'androgène affecte l'os par :",
    options: ["Perte de masse", "Gain de masse", "Aucun effet", "Atrophie"],
    correctAnswer: 1,
    explanation: "Stimule ostéoblastes et augmente masse musculaire (charge mécanique).",
    category: 'physiologie'
  },
  {
    id: 56,
    question: "L'épaisseur du cortex (os compact) :",
    options: ["Est fixe", "Augmente avec charge", "Diminue avec âge", "Est génétiquement constante"],
    correctAnswer: 1,
    explanation: "Augmente chez sportifs, diminue chez sédentaires ou immobilisés.",
    category: 'physiologie'
  },
  {
    id: 57,
    question: "La porosité osseuse :",
    options: ["Augmente avec charge", "Diminue avec charge", "N'est pas affectée", "Augmente avec âge"],
    correctAnswer: 1,
    explanation: "L'exercice diminue porosité par augmentation densité osseuse.",
    category: 'physiologie'
  },
  {
    id: 58,
    question: "Le turnover osseux est mesuré par :",
    options: ["Calcémie", "Marqueurs de remodelage", "Poids total", "Longueur osseuse"],
    correctAnswer: 1,
    explanation: "P1NP, CTX, et autres marqueurs reflètent l'activité de formation/résorption.",
    category: 'physiologie'
  },
  {
    id: 59,
    question: "La fragilité osseuse augmente avec :",
    options: ["Minéralisation augmentée", "Augmentation porosité", "Épaisseur augmentée", "Aucune"],
    correctAnswer: 1,
    explanation: "Architecture dégradée et minéralisation réduite diminuent résistance aux fractures.",
    category: 'physiologie'
  },
  {
    id: 60,
    question: "La résorption osseuse accélère avec :",
    options: ["Exercice intense", "Immobilisation prolongée", "Charge mécanique", "Augmentation activité physique"],
    correctAnswer: 1,
    explanation: "Repos prolongé diminue stimuli mécaniques augmentant ostéoclastes.",
    category: 'physiologie'
  },
  
  // PATHOLOGIE - Questions 61-85
  {
    id: 61,
    question: "L'ostéoporose se caractérise par :",
    options: ["Augmentation densité", "Diminution densité osseuse", "Augmentation porosité", "Sclérose"],
    correctAnswer: 1,
    explanation: "Maladie métabolique : diminution masse osseuse sans défaut minéralisation.",
    category: 'pathologie'
  },
  {
    id: 62,
    question: "L'ostéomalacie correspond à :",
    options: ["Ostéoporose", "Carence en vitamine D de l'adulte", "Rachitisme", "Sclérose osseuse"],
    correctAnswer: 1,
    explanation: "Minéralisation défectueuse par déficit vitamine D, calcémie ou phosphatémie.",
    category: 'pathologie'
  },
  {
    id: 63,
    question: "Le rachitisme affecte principalement :",
    options: ["Adultes", "Enfants", "Personnes âgées", "Athlètes"],
    correctAnswer: 1,
    explanation: "Maladie de l'enfant : minéralisation osseuse défectueuse par carence nutritionnelle.",
    category: 'pathologie'
  },
  {
    id: 64,
    question: "L'hyperparathyroïdie provoque :",
    options: ["Baisse calcémie", "Augmentation calcémie", "Aucun effet", "Augmentation potassium"],
    correctAnswer: 1,
    explanation: "Excès PTH augmente résorption osseuse et calcémie (hypercalcémie).",
    category: 'pathologie'
  },
  {
    id: 65,
    question: "L'hypoparathyroïdie provoque :",
    options: ["Hypercalcémie", "Hypocalcémie", "Hyperphosphatémie", "Aucun effet"],
    correctAnswer: 1,
    explanation: "Déficit PTH baisse calcémie, augmente phosphatémie (hypocalcémie).",
    category: 'pathologie'
  },
  {
    id: 66,
    question: "La maladie de Paget se caractérise par :",
    options: ["Perte osseuse uniformément", "Résorption puis formation excessive", "Minéralisation défectueuse", "Fracture simple"],
    correctAnswer: 1,
    explanation: "Cycles anormaux résorption-formation provoquant os large, faible et déformé.",
    category: 'pathologie'
  },
  {
    id: 67,
    question: "L'ostéomyélite est :",
    options: ["Inflammation articulaire", "Infection osseuse et médullaire", "Fracture osseuse", "Érosion"],
    correctAnswer: 1,
    explanation: "Infection bactérienne de l'os et moelle, généralement staphylocoque.",
    category: 'pathologie'
  },
  {
    id: 68,
    question: "La tuberculose osseuse affecte principalement :",
    options: ["Fémur uniquement", "Vertèbres", "Côtes", "Crâne"],
    correctAnswer: 1,
    explanation: "Localisation vertébrale (mal de Pott) fréquente en tuberculose généralisée.",
    category: 'pathologie'
  },
  {
    id: 69,
    question: "L'ostéosarcome est :",
    options: ["Infection", "Malignité osseuse primitive", "Fracture", "Dégénération"],
    correctAnswer: 1,
    explanation: "Cancer osseux malin, principalement métaphysaire chez enfant/adolescent.",
    category: 'pathologie'
  },
  {
    id: 70,
    question: "Le myélome multiple atteint :",
    options: ["Os cortical", "Moelle rouge (plasmocytes)", "Cartilage", "Périoste"],
    correctAnswer: 1,
    explanation: "Malignité des plasmocytes dans moelle osseuse, fractures lytiques multiples.",
    category: 'pathologie'
  },
  {
    id: 71,
    question: "La fracture pathologique est causée par :",
    options: ["Trauma violent", "Pathologie osseuse affaiblissant l'os", "Chute simple", "Sport"],
    correctAnswer: 1,
    explanation: "Fracture spontanée ou par trauma minime sur os fragilisé (ostéoporose, métastases, etc).",
    category: 'pathologie'
  },
  {
    id: 72,
    question: "La consolidation osseuse dépend de :",
    options: ["Immobilité seule", "Âge seul", "Immobilité + jeune âge + vascularisation + nutrition", "Pas de facteurs"],
    correctAnswer: 2,
    explanation: "Processus complexe : immobilisation, perfusion, apport en calcium/protéines/vitamine C.",
    category: 'pathologie'
  },
  {
    id: 73,
    question: "Le délai de consolidation chez l'enfant :",
    options: ["Plus long qu'adulte", "Plus court qu'adulte", "Identique", "Imprévisible"],
    correctAnswer: 1,
    explanation: "Enfants consolidant 2-3x plus vite grâce à ostéoblastes actifs et bonne vascularisation.",
    category: 'pathologie'
  },
  {
    id: 74,
    question: "La cal vicieux est :",
    options: ["Consolidation rapide", "Consolidation en mauvaise position", "Perte de consolidation", "Double consolidation"],
    correctAnswer: 1,
    explanation: "Défaut d'alignment provoquant déformation et dysfonction articulaire.",
    category: 'pathologie'
  },
  {
    id: 75,
    question: "La pseudarthrose correspond à :",
    options: ["Consolidation rapide", "Absence de consolidation", "Consolidation partielle", "Hyper-consolidation"],
    correctAnswer: 1,
    explanation: "Non-union osseuse : absence de calcification entre fragments de fracture.",
    category: 'pathologie'
  },
  {
    id: 76,
    question: "Le cal hypertrophique est :",
    options: ["Consolidation insuffisante", "Excès de callus", "Absence de callus", "Cal fibreux"],
    correctAnswer: 1,
    explanation: "Formation excessive de callus osseux, généralement avec mobilité persistante.",
    category: 'pathologie'
  },
  {
    id: 77,
    question: "La luxation articulaire signifie :",
    options: ["Fracture", "Séparation permanente des surfaces articulaires", "Inflammation", "Raideur"],
    correctAnswer: 1,
    explanation: "Déplacement complet de l'articulation, urgence orthopédique requérant réduction.",
    category: 'pathologie'
  },
  {
    id: 78,
    question: "L'entorse correspond à :",
    options: ["Fracture", "Lésion ligamentaire sans luxation", "Rupture musculaire", "Inflammation"],
    correctAnswer: 1,
    explanation: "Étirement ou déchirure partielle de ligament, instabilité légère à modérée.",
    category: 'pathologie'
  },
  {
    id: 79,
    question: "La spondylose cervicale est :",
    options: ["Fracture vertébrale", "Arthrose cervicale progressive", "Infection", "Tumeur"],
    correctAnswer: 1,
    explanation: "Dégénérescence discale et arthrose provocant compression médullaire/radiculaire.",
    category: 'pathologie'
  },
  {
    id: 80,
    question: "La hernie discale provoque :",
    options: ["Fracture", "Protrusion nucleus pulposus comprimant nerves", "Ankylose", "Luxation"],
    correctAnswer: 1,
    explanation: "Déplacement du contenu discal compression nervure/moelle, douleur radiculaire/myélique.",
    category: 'pathologie'
  },
  {
    id: 81,
    question: "L'ankylose est :",
    options: ["Douleur", "Perte de mobilité articulaire", "Inflammation", "Luxation"],
    correctAnswer: 1,
    explanation: "Fusion osseuse complète de l'articulation (ankylosis) ou raideur fibreuse grave.",
    category: 'pathologie'
  },
  {
    id: 82,
    question: "L'arthrose est caractérisée par :",
    options: ["Inflammation auto-immune", "Dégénération cartilagineuse progressive", "Infection", "Luxation"],
    correctAnswer: 1,
    explanation: "Maladie dégénérative : perte cartilage, ostéophytes, douleur et raideur progressive.",
    category: 'pathologie'
  },
  {
    id: 83,
    question: "L'arthrite rhumatoïde affecte :",
    options: ["Cartilage seul", "Articulations par inflammation auto-immune", "Os cortical", "Tendons seul"],
    correctAnswer: 1,
    explanation: "Maladie inflammatoire auto-immune : destruction progressive synoviale, cartilage, os.",
    category: 'pathologie'
  },
  {
    id: 84,
    question: "L'ostéonécrose correspond à :",
    options: ["Infection osseuse", "Mort aseptique du tissu osseux", "Fracture", "Luxation"],
    correctAnswer: 1,
    explanation: "Nécrose ischémique osseuse sans infection (hyperbaric O2 possible si précoce).",
    category: 'pathologie'
  },
  {
    id: 85,
    question: "La scoliose est :",
    options: ["Cyphose thoracique", "Lordose lombaire", "Courbure latérale colonne vertébrale", "Hernie discale"],
    correctAnswer: 2,
    explanation: "Déviation latérale colonne vertébrale, peut progresser chez enfant/adolescent.",
    category: 'pathologie'
  },
  
  // ARTICULATIONS - Questions 86-100
  {
    id: 86,
    question: "Une articulation synoviale comporte :",
    options: ["Ligaments seulement", "Capsule + liquide synovial + cartilage", "Tendons", "Sang"],
    correctAnswer: 1,
    explanation: "Structure mobile : membrane synoviale, cartilage hyalin, ligaments stabilisateurs.",
    category: 'articulations'
  },
  {
    id: 87,
    question: "Le liquide synovial sert à :",
    options: ["Numériser", "Lubrifier et nourrir cartilage", "Transporter oxygène", "Protéger os"],
    correctAnswer: 1,
    explanation: "Produit par membrane synoviale : hyaluronate et protéines de lubrification.",
    category: 'articulations'
  },
  {
    id: 88,
    question: "L'articulation gléno-humérale (épaule) est :",
    options: ["Énarthrose (sphéroïdale)", "Arthrodire", "Ginglyme", "Trochléenne"],
    correctAnswer: 0,
    explanation: "Articulation très mobile permettant abduction-adduction, flexion-extension, rotation.",
    category: 'articulations'
  },
  {
    id: 89,
    question: "L'articulation du coude est :",
    options: ["Sphéroïdale", "Ginglyme (charnière)", "Condyloïde", "Plane"],
    correctAnswer: 1,
    explanation: "Articulation trochléenne : humérus-ulna flexion/extension, radio-ulnaire pronation/supination.",
    category: 'articulations'
  },
  {
    id: 90,
    question: "L'articulation du poignet est :",
    options: ["Ginglyme", "Condyloïde", "Ellipsoïde", "Énarthrose"],
    correctAnswer: 1,
    explanation: "Articulation ellipsoïde : radius-carpe (scaphoïde, lunatum, triquetrum) flexion/extension/déviation.",
    category: 'articulations'
  },
  {
    id: 91,
    question: "L'articulation de la hanche est :",
    options: ["Ginglyme", "Condyloïde", "Énarthrose", "Arthrodire"],
    correctAnswer: 2,
    explanation: "Articulation sphéroïdale : fémur-bassin très mobile protégée par profondeur cotyloïde.",
    category: 'articulations'
  },
  {
    id: 92,
    question: "L'articulation du genou est :",
    options: ["Sphéroïdale", "Ginglyme complexe", "Condyloïde", "Plane"],
    correctAnswer: 1,
    explanation: "Articulation charnière complexe : tibia-fémur flexion/extension + ménisques + ligaments croisés.",
    category: 'articulations'
  },
  {
    id: 93,
    question: "L'articulation talo-crurale (cheville) est :",
    options: ["Sphéroïdale", "Ginglyme", "Condyloïde", "Pivot"],
    correctAnswer: 1,
    explanation: "Articulation charnière : talus-tibia/fibula, flexion plantaire/dorsale, peu de rotation.",
    category: 'articulations'
  },
  {
    id: 94,
    question: "L'articulation sacro-iliaque est :",
    options: ["Mobile", "Plane semi-mobile", "Très mobile", "Fibrose"],
    correctAnswer: 1,
    explanation: "Articulation peu mobile : sacrum-ilium, absorbant forces pelviennes, stabilisée par forts ligaments.",
    category: 'articulations'
  },
  {
    id: 95,
    question: "L'articulation temporo-mandibulaire permet :",
    options: ["Ouverture simple", "Abaissement + protraction + déviation", "Rotation seule", "Aucun mouvement"],
    correctAnswer: 1,
    explanation: "Articulation complexe : condyle mandibulaire-fosse temporale, mouvement 3D complexe.",
    category: 'articulations'
  },
  {
    id: 96,
    question: "Les ligaments croisés du genou :",
    options: ["Ne sont pas importants", "Contrôlent translation tibia/rotation", "Supportent poids", "Lubrifier"],
    correctAnswer: 1,
    explanation: "LCA/LCP : prévention translation antérieure/postérieure, rotation et instabilité.",
    category: 'articulations'
  },
  {
    id: 97,
    question: "Les ménisques du genou sont :",
    options: ["Ligaments", "Cartilages fibreux absorbant choc", "Tendons", "Muscles"],
    correctAnswer: 1,
    explanation: "Structures fibrocartilagineuses : améliore congruence, amortit charges, distribue pression.",
    category: 'articulations'
  },
  {
    id: 98,
    question: "La stabilité articulaire dépend de :",
    options: ["Géométrie osseuse seule", "Muscles seuls", "Géométrie + capsule + ligaments + muscles", "Aucun facteur"],
    correctAnswer: 2,
    explanation: "Stabilité = architecture osseuse + contraintes capsulo-ligamentaires + dynamique musculaire.",
    category: 'articulations'
  },
  {
    id: 99,
    question: "Les cartilages hyalins des articulations :",
    options: ["Contiennent vaisseaux", "Sont avasculaires et anuclés", "Ont une matrice osseuse", "Se régénèrent facilement"],
    correctAnswer: 1,
    explanation: "Cartilage hyalin : avasculaire, anuclé après maturité, régénération limitée.",
    category: 'articulations'
  },
  {
    id: 100,
    question: "Le congruence articulaire désigne :",
    options: ["Raideur", "Adaptation géométrique des surfaces", "Friction", "Inflation"],
    correctAnswer: 1,
    explanation: "Adaptation forme surfaces réduisant stress, augmentant stabilité et longevité articulaire.",
    category: 'articulations'
  }
];

export const categoryLabels: Record<string, string> = {
  'anatomie': 'Anatomie',
  'physiologie': 'Physiologie',
  'pathologie': 'Pathologie',
  'articulations': 'Articulations'
};

export const categoryColors: Record<string, string> = {
  'anatomie': 'bg-blue-100 text-blue-800',
  'physiologie': 'bg-green-100 text-green-800',
  'pathologie': 'bg-red-100 text-red-800',
  'articulations': 'bg-purple-100 text-purple-800'
};
