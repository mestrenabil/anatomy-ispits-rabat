export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option (0-based)
  explanation: string;
  category: 'anatomie' | 'physiologie' | 'pathologie' | 'articulations';
}

export const qcmData: Question[] = [
  // Questions 1-25
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
    question: "La moelle rouge assure :",
    options: ["Stockage graisse", "Hématopoïèse", "Lubrification", "Résorption"],
    correctAnswer: 1,
    explanation: "Elle produit globules rouges, blancs et plaquettes.",
    category: 'physiologie'
  },
  {
    id: 7,
    question: "La moelle jaune est riche en :",
    options: ["Globules rouges", "Lipides", "Calcium", "Collagène"],
    correctAnswer: 1,
    explanation: "Elle sert de réserve énergétique.",
    category: 'physiologie'
  },
  {
    id: 8,
    question: "Les ostéoblastes assurent :",
    options: ["Résorption", "Formation osseuse", "Infection", "Destruction"],
    correctAnswer: 1,
    explanation: "Ce sont les cellules constructrices de l'os.",
    category: 'physiologie'
  },
  {
    id: 9,
    question: "Les ostéoclastes assurent :",
    options: ["Formation", "Résorption", "Stabilisation", "Lubrification"],
    correctAnswer: 1,
    explanation: "Ils détruisent l'os ancien dans le remodelage.",
    category: 'physiologie'
  },
  {
    id: 10,
    question: "Le calcium donne à l'os :",
    options: ["Souplesse", "Rigidité", "Élasticité", "Couleur"],
    correctAnswer: 1,
    explanation: "Les sels minéraux assurent la dureté osseuse.",
    category: 'physiologie'
  },
  {
    id: 11,
    question: "Le collagène donne à l'os :",
    options: ["Dureté", "Souplesse", "Minéralisation", "Poids"],
    correctAnswer: 1,
    explanation: "Le collagène évite que l'os casse facilement.",
    category: 'physiologie'
  },
  {
    id: 12,
    question: "L'unité structurale de l'os compact est :",
    options: ["Trabécule", "Ostéone", "Capsule", "Canal médullaire"],
    correctAnswer: 1,
    explanation: "L'ostéone contient canal de Havers + lamelles concentriques.",
    category: 'anatomie'
  },
  {
    id: 13,
    question: "Le canal de Havers contient :",
    options: ["Lipides", "Vaisseaux sanguins", "Cartilage", "Capsule"],
    correctAnswer: 1,
    explanation: "Il permet la vascularisation de l'os.",
    category: 'anatomie'
  },
  {
    id: 14,
    question: "Les trabécules caractérisent :",
    options: ["Os compact", "Os spongieux", "Capsule", "Périoste"],
    correctAnswer: 1,
    explanation: "Structure en réseau allégeant l'os.",
    category: 'anatomie'
  },
  {
    id: 15,
    question: "La croissance en longueur dépend :",
    options: ["Périoste", "Cartilage de conjugaison", "Capsule", "Moelle"],
    correctAnswer: 1,
    explanation: "La plaque épiphysaire permet l'allongement chez l'enfant.",
    category: 'physiologie'
  },
  {
    id: 16,
    question: "Une synarthrose est :",
    options: ["Mobile", "Semi-mobile", "Immobile", "Synoviale"],
    correctAnswer: 2,
    explanation: "Exemple : sutures du crâne.",
    category: 'articulations'
  },
  {
    id: 17,
    question: "Une diarthrose est :",
    options: ["Immobile", "Semi-mobile", "Mobile", "Fibreuse"],
    correctAnswer: 2,
    explanation: "Articulation synoviale (genou, épaule).",
    category: 'articulations'
  },
  {
    id: 18,
    question: "Le liquide synovial sert à :",
    options: ["Hématopoïèse", "Lubrification", "Résorption", "Minéralisation"],
    correctAnswer: 1,
    explanation: "Réduit le frottement entre surfaces articulaires.",
    category: 'articulations'
  },
  {
    id: 19,
    question: "Les ligaments relient :",
    options: ["Muscle-os", "Os-os", "Nerf-os", "Muscle-muscle"],
    correctAnswer: 1,
    explanation: "Ils stabilisent l'articulation.",
    category: 'articulations'
  },
  {
    id: 20,
    question: "Les tendons relient :",
    options: ["Os-os", "Muscle-os", "Nerf-muscle", "Capsule"],
    correctAnswer: 1,
    explanation: "Ils transmettent la force musculaire.",
    category: 'articulations'
  },
  {
    id: 21,
    question: "L'ostéoporose est caractérisée par :",
    options: ["Infection", "Perte masse osseuse", "Luxation", "Tumeur"],
    correctAnswer: 1,
    explanation: "Résorption > formation → os fragile.",
    category: 'pathologie'
  },
  {
    id: 22,
    question: "Une fracture correspond à :",
    options: ["Déplacement articulaire", "Rupture osseuse", "Infection", "Inflammation"],
    correctAnswer: 1,
    explanation: "Une fracture est une rupture ou fissure de l'os.",
    category: 'pathologie'
  },
  {
    id: 23,
    question: "L'arthrose touche principalement :",
    options: ["Moelle", "Cartilage articulaire", "Capsule", "Périoste"],
    correctAnswer: 1,
    explanation: "Dégénérescence du cartilage.",
    category: 'pathologie'
  },
  {
    id: 24,
    question: "La stabilité articulaire dépend surtout :",
    options: ["Moelle", "Ligaments + capsule", "Calcium", "Nerfs"],
    correctAnswer: 1,
    explanation: "Les ligaments et la capsule articulaire assurent la stabilité.",
    category: 'articulations'
  },
  {
    id: 25,
    question: "Le squelette appendiculaire comprend :",
    options: ["Crâne", "Membres", "Colonne", "Sternum"],
    correctAnswer: 1,
    explanation: "Il permet la locomotion.",
    category: 'anatomie'
  },
  // Questions 26-50
  {
    id: 26,
    question: "Le nombre de vertèbres thoraciques est :",
    options: ["7", "12", "5", "8"],
    correctAnswer: 1,
    explanation: "Il y a 12 vertèbres thoraciques (T1–T12).",
    category: 'anatomie'
  },
  {
    id: 27,
    question: "Le nombre de vertèbres cervicales est :",
    options: ["5", "7", "12", "26"],
    correctAnswer: 1,
    explanation: "7 cervicales (C1–C7).",
    category: 'anatomie'
  },
  {
    id: 28,
    question: "Le sternum protège :",
    options: ["Moelle", "Cerveau", "Cœur", "Rein"],
    correctAnswer: 2,
    explanation: "Le sternum fait partie de la cage thoracique qui protège le cœur.",
    category: 'anatomie'
  },
  {
    id: 29,
    question: "La scapula est un os :",
    options: ["Long", "Plat", "Court", "Irrégulier"],
    correctAnswer: 1,
    explanation: "La scapula (omoplate) est un os plat triangulaire.",
    category: 'anatomie'
  },
  {
    id: 30,
    question: "Le fémur est l'os le plus :",
    options: ["Court", "Long", "Plat", "Fragile"],
    correctAnswer: 1,
    explanation: "Le fémur est l'os le plus long du corps humain.",
    category: 'anatomie'
  },
  {
    id: 31,
    question: "Le tibia appartient :",
    options: ["Bras", "Jambe", "Cuisse", "Avant-bras"],
    correctAnswer: 1,
    explanation: "Le tibia est l'os principal de la jambe.",
    category: 'anatomie'
  },
  {
    id: 32,
    question: "L'humérus appartient :",
    options: ["Membre supérieur", "Membre inférieur", "Axial", "Pelvien"],
    correctAnswer: 0,
    explanation: "L'humérus est l'os du bras (membre supérieur).",
    category: 'anatomie'
  },
  {
    id: 33,
    question: "Les os du carpe sont :",
    options: ["Longs", "Courts", "Plats", "Irréguliers"],
    correctAnswer: 1,
    explanation: "Les 8 os du carpe sont des os courts.",
    category: 'anatomie'
  },
  {
    id: 34,
    question: "La rotule est un os :",
    options: ["Long", "Plat", "Court", "Sésamoïde"],
    correctAnswer: 3,
    explanation: "La rotule est un os sésamoïde développé dans le tendon du quadriceps.",
    category: 'anatomie'
  },
  {
    id: 35,
    question: "Les côtes sont des os :",
    options: ["Longs", "Courts", "Plats", "Irréguliers"],
    correctAnswer: 2,
    explanation: "Les côtes sont classées comme os plats.",
    category: 'anatomie'
  },
  {
    id: 36,
    question: "L'os spongieux est riche en :",
    options: ["Ostéones", "Trabécules", "Capsule", "Tendons"],
    correctAnswer: 1,
    explanation: "L'os spongieux est caractérisé par son réseau de trabécules.",
    category: 'anatomie'
  },
  {
    id: 37,
    question: "La métaphyse contient :",
    options: ["Moelle jaune", "Cartilage de conjugaison", "Capsule", "Ligament"],
    correctAnswer: 1,
    explanation: "La métaphyse est la zone de croissance avec le cartilage de conjugaison.",
    category: 'anatomie'
  },
  {
    id: 38,
    question: "La croissance en épaisseur dépend :",
    options: ["Cartilage", "Moelle", "Périoste", "Capsule"],
    correctAnswer: 2,
    explanation: "Le périoste permet la croissance en épaisseur par apposition.",
    category: 'physiologie'
  },
  {
    id: 39,
    question: "Les ostéocytes sont :",
    options: ["Cellules matures", "Immatures", "Lipidiques", "Cartilagineuses"],
    correctAnswer: 0,
    explanation: "Les ostéocytes sont les cellules osseuses matures.",
    category: 'physiologie'
  },
  {
    id: 40,
    question: "Le remodelage osseux est :",
    options: ["Rare", "Permanent", "Inexistant", "Pathologique"],
    correctAnswer: 1,
    explanation: "Le remodelage osseux est un processus permanent tout au long de la vie.",
    category: 'physiologie'
  },
  {
    id: 41,
    question: "La minéralisation dépend surtout de :",
    options: ["Sodium", "Fer", "Calcium", "Potassium"],
    correctAnswer: 2,
    explanation: "Le calcium est le minéral principal de l'os.",
    category: 'physiologie'
  },
  {
    id: 42,
    question: "Une amphiarthrose est :",
    options: ["Immobile", "Semi-mobile", "Mobile", "Fixe"],
    correctAnswer: 1,
    explanation: "Une amphiarthrose est une articulation semi-mobile (ex: symphyse pubienne).",
    category: 'articulations'
  },
  {
    id: 43,
    question: "Une synarthrose est :",
    options: ["Mobile", "Semi-mobile", "Immobile", "Synoviale"],
    correctAnswer: 2,
    explanation: "Une synarthrose est une articulation immobile (ex: sutures du crâne).",
    category: 'articulations'
  },
  {
    id: 44,
    question: "Le genou est une :",
    options: ["Synarthrose", "Amphiarthrose", "Diarthrose", "Fixe"],
    correctAnswer: 2,
    explanation: "Le genou est une diarthrose (articulation synoviale mobile).",
    category: 'articulations'
  },
  {
    id: 45,
    question: "Les ligaments stabilisent :",
    options: ["Muscle", "Os", "Articulation", "Moelle"],
    correctAnswer: 2,
    explanation: "Les ligaments stabilisent les articulations.",
    category: 'articulations'
  },
  {
    id: 46,
    question: "La luxation correspond à :",
    options: ["Rupture os", "Infection", "Déplacement os articulation", "Résorption"],
    correctAnswer: 2,
    explanation: "Une luxation est le déplacement permanent des surfaces articulaires.",
    category: 'pathologie'
  },
  {
    id: 47,
    question: "L'ostéoporose entraîne :",
    options: ["Solidité", "Fragilité", "Hypertrophie", "Infection"],
    correctAnswer: 1,
    explanation: "L'ostéoporose fragilise l'os par perte de masse osseuse.",
    category: 'pathologie'
  },
  {
    id: 48,
    question: "La moelle rouge est surtout présente dans :",
    options: ["Os plats", "Diaphyse adulte", "Capsule", "Tendon"],
    correctAnswer: 0,
    explanation: "La moelle rouge se trouve principalement dans les os plats et les épiphyses.",
    category: 'anatomie'
  },
  {
    id: 49,
    question: "Le canal médullaire contient :",
    options: ["Capsule", "Moelle", "Ligament", "Cartilage"],
    correctAnswer: 1,
    explanation: "Le canal médullaire contient la moelle osseuse.",
    category: 'anatomie'
  },
  {
    id: 50,
    question: "L'ostéone appartient à :",
    options: ["Os spongieux", "Os compact", "Capsule", "Périoste"],
    correctAnswer: 1,
    explanation: "L'ostéone est l'unité structurale de l'os compact.",
    category: 'anatomie'
  },
  // Questions 51-75
  {
    id: 51,
    question: "La colonne vertébrale protège :",
    options: ["Le cerveau", "La moelle épinière", "Le cœur", "Les poumons"],
    correctAnswer: 1,
    explanation: "La colonne vertébrale forme un canal qui protège la moelle épinière.",
    category: 'anatomie'
  },
  {
    id: 52,
    question: "Le cartilage articulaire est :",
    options: ["Vascularisé", "Non vascularisé", "Innervé", "Richement vascularisé"],
    correctAnswer: 1,
    explanation: "Le cartilage articulaire est avasculaire, nourri par le liquide synovial.",
    category: 'anatomie'
  },
  {
    id: 53,
    question: "L'articulation de l'épaule est de type :",
    options: ["Charnière", "Pivot", "Sphéroïde", "Selle"],
    correctAnswer: 2,
    explanation: "L'épaule est une articulation sphéroïde permettant mouvements dans tous les plans.",
    category: 'articulations'
  },
  {
    id: 54,
    question: "L'articulation du coude est de type :",
    options: ["Charnière", "Pivot", "Sphéroïde", "Selle"],
    correctAnswer: 0,
    explanation: "Le coude est une articulation en charnière (flexion/extension).",
    category: 'articulations'
  },
  {
    id: 55,
    question: "Les sutures crâniennes sont :",
    options: ["Mobiles", "Semi-mobiles", "Immobiles", "Synoviales"],
    correctAnswer: 2,
    explanation: "Les sutures crâniennes sont des synarthroses (immobiles).",
    category: 'articulations'
  },
  {
    id: 56,
    question: "Le bassin protège :",
    options: ["Le cœur", "Les organes pelviens", "Le cerveau", "Les poumons"],
    correctAnswer: 1,
    explanation: "Le bassin protège les organes pelviens (vessie, rectum, organes reproducteurs).",
    category: 'anatomie'
  },
  {
    id: 57,
    question: "Le nombre de vertèbres lombaires est :",
    options: ["3", "4", "5", "7"],
    correctAnswer: 2,
    explanation: "Il y a 5 vertèbres lombaires (L1-L5).",
    category: 'anatomie'
  },
  {
    id: 58,
    question: "L'axis (C2) permet :",
    options: ["Flexion", "Extension", "Rotation de la tête", "Abduction"],
    correctAnswer: 2,
    explanation: "L'axis avec sa dent de l'axis permet la rotation de la tête.",
    category: 'anatomie'
  },
  {
    id: 59,
    question: "L'atlas (C1) a pour fonction :",
    options: ["Rotation", "Support du crâne", "Flexion forcée", "Extension"],
    correctAnswer: 1,
    explanation: "L'atlas supporte le crâne et permet les mouvements de 'oui'.",
    category: 'anatomie'
  },
  {
    id: 60,
    question: "Le sacrum a une forme :",
    options: ["Rectangulaire", "Triangulaire", "Ronde", "Ovale"],
    correctAnswer: 1,
    explanation: "Le sacrum a une forme triangulaire à base supérieure.",
    category: 'anatomie'
  },
  {
    id: 61,
    question: "Le tibia a pour fonction principale :",
    options: ["Rotation", "Support du poids", "Flexion", "Abduction"],
    correctAnswer: 1,
    explanation: "Le tibia est l'os principal qui supporte le poids du corps.",
    category: 'anatomie'
  },
  {
    id: 62,
    question: "L'ulna (cubitus) se trouve dans :",
    options: ["Le bras", "L'avant-bras", "La cuisse", "La jambe"],
    correctAnswer: 1,
    explanation: "L'ulna est un des deux os de l'avant-bras avec le radius.",
    category: 'anatomie'
  },
  {
    id: 63,
    question: "Les phalanges sont classées comme :",
    options: ["Os courts", "Os longs", "Os plats", "Os irréguliers"],
    correctAnswer: 1,
    explanation: "Les phalanges sont des os longs miniatures.",
    category: 'anatomie'
  },
  {
    id: 64,
    question: "Le nombre de côtes vraies est :",
    options: ["5 paires", "7 paires", "10 paires", "12 paires"],
    correctAnswer: 1,
    explanation: "Les 7 premières paires de côtes sont les côtes vraies (attachées au sternum).",
    category: 'anatomie'
  },
  {
    id: 65,
    question: "Les côtes flottantes sont les :",
    options: ["9e et 10e", "10e et 11e", "11e et 12e", "12e et 13e"],
    correctAnswer: 2,
    explanation: "Les 11e et 12e côtes sont flottantes (non attachées au sternum).",
    category: 'anatomie'
  },
  {
    id: 66,
    question: "La vitamine D est essentielle pour :",
    options: ["Synthèse collagène", "Absorption calcium", "Formation globules", "Lubrification"],
    correctAnswer: 1,
    explanation: "La vitamine D favorise l'absorption intestinale du calcium.",
    category: 'physiologie'
  },
  {
    id: 67,
    question: "La parathormone (PTH) :",
    options: ["Diminue calcium", "Augmente calcium", "Diminue phosphore", "Augmente collagène"],
    correctAnswer: 1,
    explanation: "La PTH augmente la calcémie en stimulant la résorption osseuse.",
    category: 'physiologie'
  },
  {
    id: 68,
    question: "La calcitonine :",
    options: ["Augmente calcium", "Diminue calcium", "Augmente résorption", "Stimule ostéoclastes"],
    correctAnswer: 1,
    explanation: "La calcitonine diminue la calcémie en inhibant les ostéoclastes.",
    category: 'physiologie'
  },
  {
    id: 69,
    question: "L'os compact représente environ :",
    options: ["50%", "60%", "80%", "90%"],
    correctAnswer: 2,
    explanation: "L'os compact représente environ 80% de la masse osseuse totale.",
    category: 'anatomie'
  },
  {
    id: 70,
    question: "Le périoste est un :",
    options: ["Cartilage", "Membrane fibreuse", "Ligament", "Tendon"],
    correctAnswer: 1,
    explanation: "Le périoste est une membrane fibreuse qui entoure l'os.",
    category: 'anatomie'
  },
  {
    id: 71,
    question: "La zone métaphysaire est le site de :",
    options: ["Résorption", "Croissance en longueur", "Moelle jaune", "Articulation"],
    correctAnswer: 1,
    explanation: "La métaphyse contient le cartilage de croissance pour l'allongement.",
    category: 'physiologie'
  },
  {
    id: 72,
    question: "Le processus de remodelage implique :",
    options: ["Ostéoblastes seuls", "Ostéoclastes seuls", "Ostéoblastes + ostéoclastes", "Chondrocytes"],
    correctAnswer: 2,
    explanation: "Le remodelage est un équilibre entre formation et résorption.",
    category: 'physiologie'
  },
  {
    id: 73,
    question: "L'articulation de la hanche est de type :",
    options: ["Charnière", "Pivot", "Sphéroïde", "Selle"],
    correctAnswer: 2,
    explanation: "La hanche est une articulation sphéroïde (énarthrose).",
    category: 'articulations'
  },
  {
    id: 74,
    question: "La symphyse pubienne est une :",
    options: ["Synarthrose", "Amphiarthrose", "Diarthrose", "Arthrodie"],
    correctAnswer: 1,
    explanation: "La symphyse pubienne est une amphiarthrose (semi-mobile).",
    category: 'articulations'
  },
  {
    id: 75,
    question: "Le nombre d'os du carpe est :",
    options: ["5", "6", "7", "8"],
    correctAnswer: 3,
    explanation: "Il y a 8 os du carpe dans chaque poignet.",
    category: 'anatomie'
  },
  // Questions 76-100
  {
    id: 76,
    question: "Le nombre d'os du tarse est :",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "Il y a 7 os du tarse dans chaque pied.",
    category: 'anatomie'
  },
  {
    id: 77,
    question: "L'os le plus volumineux du corps est :",
    options: ["Fémur", "Tibia", "Humérus", "Bassin"],
    correctAnswer: 0,
    explanation: "Le fémur est l'os le plus long et le plus volumineux.",
    category: 'anatomie'
  },
  {
    id: 78,
    question: "La clavicule est un os :",
    options: ["Long", "Court", "Plat", "Sésamoïde"],
    correctAnswer: 0,
    explanation: "La clavicule est un os long (bien que courbe).",
    category: 'anatomie'
  },
  {
    id: 79,
    question: "Le radius est situé :",
    options: ["En dedans", "En dehors", "En avant", "En arrière"],
    correctAnswer: 1,
    explanation: "Le radius est situé en dehors dans l'avant-bras (côté pouce).",
    category: 'anatomie'
  },
  {
    id: 80,
    question: "Le calcanéus est un os du :",
    options: ["Carpe", "Tarse", "Métacarpe", "Métatarse"],
    correctAnswer: 1,
    explanation: "Le calcanéus est le plus gros os du tarse (os du talon).",
    category: 'anatomie'
  },
  {
    id: 81,
    question: "La fracture du col du fémur est fréquente chez :",
    options: ["Enfants", "Adolescents", "Adultes jeunes", "Personnes âgées"],
    correctAnswer: 3,
    explanation: "Fréquente chez les personnes âgées ostéoporotiques.",
    category: 'pathologie'
  },
  {
    id: 82,
    question: "L'arthrite se distingue de l'arthrose par :",
    options: ["Usure cartilage", "Inflammation articulaire", "Absence douleur", "Stabilité"],
    correctAnswer: 1,
    explanation: "L'arthrite implique une inflammation, contrairement à l'arthrose.",
    category: 'pathologie'
  },
  {
    id: 83,
    question: "L'entorse correspond à :",
    options: ["Rupture os", "Lésion ligamentaire", "Luxation", "Fracture"],
    correctAnswer: 1,
    explanation: "Une entorse est une lésion des ligaments.",
    category: 'pathologie'
  },
  {
    id: 84,
    question: "La maladie de Paget se caractérise par :",
    options: ["Os trop dense", "Remodelage excessif", "Os trop mou", "Absence calcium"],
    correctAnswer: 1,
    explanation: "La maladie de Paget implique un remodelage osseux anarchique.",
    category: 'pathologie'
  },
  {
    id: 85,
    question: "Le rachitisme est dû à un déficit en :",
    options: ["Fer", "Vitamine D", "Vitamine C", "Calcium seul"],
    correctAnswer: 1,
    explanation: "Le rachitisme est causé par une carence en vitamine D chez l'enfant.",
    category: 'pathologie'
  },
  {
    id: 86,
    question: "L'ostéomalacie est l'équivalent adulte du :",
    options: ["Rachitisme", "Ostéoporose", "Arthrose", "Paget"],
    correctAnswer: 0,
    explanation: "L'ostéomalacie est le rachitisme de l'adulte (carence vitamine D).",
    category: 'pathologie'
  },
  {
    id: 87,
    question: "La maladie osseuse de Lobstein (ostéogenèse imparfaite) entraîne :",
    options: ["Os trop durs", "Os fragiles", "Os normaux", "Os flexibles"],
    correctAnswer: 1,
    explanation: "Maladie génétique avec os extrêmement fragiles (fragilité osseuse).",
    category: 'pathologie'
  },
  {
    id: 88,
    question: "La scoliose est une déviation :",
    options: ["Antérieure", "Postérieure", "Latérale", "Rotatoire"],
    correctAnswer: 2,
    explanation: "La scoliose est une déviation latérale de la colonne vertébrale.",
    category: 'pathologie'
  },
  {
    id: 89,
    question: "L'hypercyphose est une déviation :",
    options: ["Latérale", "Antérieure", "Postérieure", "Rotatoire"],
    correctAnswer: 2,
    explanation: "L'hypercyphose est une courbure excessive vers l'arrière (dos rond).",
    category: 'pathologie'
  },
  {
    id: 90,
    question: "L'hyperlordose est une courbure excessive :",
    options: ["Latérale", "Antérieure", "Postérieure", "Normale"],
    correctAnswer: 1,
    explanation: "L'hyperlordose est une courbure excessive vers l'avant (creux lombaire).",
    category: 'pathologie'
  },
  {
    id: 91,
    question: "La hernie discale touche principalement :",
    options: ["Cervical", "Thoracique", "Lombaire", "Sacré"],
    correctAnswer: 2,
    explanation: "La hernie discale est plus fréquente au niveau lombaire (L4-L5, L5-S1).",
    category: 'pathologie'
  },
  {
    id: 92,
    question: "Le ligament croisé antérieur du genou empêche :",
    options: ["Flexion", "Extension", "Translation tibiale antérieure", "Rotation"],
    correctAnswer: 2,
    explanation: "Le LCA empêche le tibia de glisser en avant par rapport au fémur.",
    category: 'articulations'
  },
  {
    id: 93,
    question: "Le ménisque a pour fonction :",
    options: ["Lubrification", "Amortissement", "Stabilité latérale", "Rotation"],
    correctAnswer: 1,
    explanation: "Les ménisques amortissent les chocs et répartissent les pressions.",
    category: 'articulations'
  },
  {
    id: 94,
    question: "L'aponévrose est :",
    options: ["Un muscle", "Une membrane fibreuse", "Un tendon", "Un ligament"],
    correctAnswer: 1,
    explanation: "L'aponévrose est une membrane fibreuse qui entoure les muscles.",
    category: 'anatomie'
  },
  {
    id: 95,
    question: "La synoviale sécrète :",
    options: ["Liquide synovial", "Cartilage", "Os", "Ligament"],
    correctAnswer: 0,
    explanation: "La membrane synoviale sécrète le liquide synovial.",
    category: 'articulations'
  },
  {
    id: 96,
    question: "L'arthrocentèse est :",
    options: ["Radiographie", "Ponction articulaire", "Opération", "Rééducation"],
    correctAnswer: 1,
    explanation: "L'arthrocentèse est une ponction du liquide articulaire.",
    category: 'pathologie'
  },
  {
    id: 97,
    question: "Le score T en ostéodensitométrie diagnostique :",
    options: ["Arthrose", "Ostéoporose", "Arthrite", "Fracture"],
    correctAnswer: 1,
    explanation: "Le score T mesure la densité minérale osseuse pour diagnostiquer l'ostéoporose.",
    category: 'pathologie'
  },
  {
    id: 98,
    question: "Un T-score ≤ -2.5 définit :",
    options: ["Normal", "Ostéopénie", "Ostéoporose", "Arthrose"],
    correctAnswer: 2,
    explanation: "T-score ≤ -2.5 = ostéoporose selon l'OMS.",
    category: 'pathologie'
  },
  {
    id: 99,
    question: "Les bisphosphonates sont utilisés pour traiter :",
    options: ["Arthrose", "Arthrite", "Ostéoporose", "Fracture"],
    correctAnswer: 2,
    explanation: "Les bisphosphonates inhibent la résorption osseuse dans l'ostéoporose.",
    category: 'pathologie'
  },
  {
    id: 100,
    question: "La consolidation d'une fracture dure en moyenne :",
    options: ["1-2 semaines", "3-6 semaines", "2-4 mois", "6-12 mois"],
    correctAnswer: 1,
    explanation: "La consolidation osseuse prend généralement 3-6 semaines selon l'os et l'âge.",
    category: 'pathologie'
  }
];

export const categoryLabels: Record<string, string> = {
  anatomie: "Anatomie",
  physiologie: "Physiologie",
  pathologie: "Pathologie",
  articulations: "Articulations"
};

export const categoryColors: Record<string, string> = {
  anatomie: "bg-emerald-500",
  physiologie: "bg-amber-500",
  pathologie: "bg-rose-500",
  articulations: "bg-sky-500"
};
