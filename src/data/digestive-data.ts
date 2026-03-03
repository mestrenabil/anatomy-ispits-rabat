export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'anatomie' | 'digestion-mecanique' | 'digestion-chimique' | 'absorption-excretion';
}

export const digestiveData: Question[] = [
  // ANATOMIE (1-30)
  {
    id: 1,
    question: "Le système digestif commence par :",
    options: ["Pharynx", "Œsophage", "Bouche", "Estomac"],
    correctAnswer: 2,
    explanation: "La cavité buccale est le point d'entrée du tube digestif.",
    category: 'anatomie'
  },
  {
    id: 2,
    question: "Le système digestif se termine par :",
    options: ["Rectum", "Côlon", "Anus", "Iléon"],
    correctAnswer: 2,
    explanation: "L'anus est l'orifice terminal permettant l'excrétion des matières fécales.",
    category: 'anatomie'
  },
  {
    id: 3,
    question: "Le pharynx est :",
    options: ["Organe respiratoire", "Carrefour digestif et respiratoire", "Glande", "Muscle"],
    correctAnswer: 1,
    explanation: "Le pharynx est le carrefour où chemine à la fois nourriture et air.",
    category: 'anatomie'
  },
  {
    id: 4,
    question: "L'épiglotte sert à :",
    options: ["Digérer", "Empêcher aliments dans voies respiratoires", "Absorber", "Sécréter"],
    correctAnswer: 1,
    explanation: "Cartilage bloquant accès laryngien durant déglutition.",
    category: 'anatomie'
  },
  {
    id: 5,
    question: "L'œsophage mesure environ :",
    options: ["10 cm", "20 cm", "25 cm", "35 cm"],
    correctAnswer: 2,
    explanation: "Tube musculaire de 25 cm reliant pharynx à estomac.",
    category: 'anatomie'
  },
  {
    id: 6,
    question: "Le sphincter œsophagien inférieur prévient :",
    options: ["Reflux gastrique", "Déglutition", "Salivation", "Masticage"],
    correctAnswer: 0,
    explanation: "Valve de pression maintenait barrière contre remontée acide.",
    category: 'anatomie'
  },
  {
    id: 7,
    question: "L'estomac contient combien de portions fonctionnelles :",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "Cardia (entrée), fundus (corps), antrum (sortie) - régions fonctionnelles.",
    category: 'anatomie'
  },
  {
    id: 8,
    question: "La capacité gastrique est environ :",
    options: ["500 mL", "1 L", "2 L", "3 L"],
    correctAnswer: 2,
    explanation: "L'estomac peut contenir et traiter ~1.5-2L de contenu.",
    category: 'anatomie'
  },
  {
    id: 9,
    question: "Le pylore est :",
    options: ["Région antrale", "Sphincter gastrique", "Valve iléo-cæcale", "Cardia"],
    correctAnswer: 1,
    explanation: "Sphincter musculaire contrôlant passage chyme vers intestin grêle.",
    category: 'anatomie'
  },
  {
    id: 10,
    question: "L'intestin grêle mesure environ :",
    options: ["2 m", "4 m", "6-7 m", "10 m"],
    correctAnswer: 2,
    explanation: "Tube de 6-7m où se complète digestion chimique et absorbe majorité nutriments.",
    category: 'anatomie'
  },
  {
    id: 11,
    question: "L'intestin grêle comprend :",
    options: ["2 segments", "3 segments", "4 segments", "5 segments"],
    correctAnswer: 1,
    explanation: "Duodénum (25cm), jéjunum (2.5m), iléon (3.5m).",
    category: 'anatomie'
  },
  {
    id: 12,
    question: "Le duodénum reçoit :",
    options: ["Salive", "Suc gastrique", "Bile + suc pancréatique", "Aucun suc"],
    correctAnswer: 2,
    explanation: "Reçoit bile foie et suc pancréatique (ampulla Vateri).",
    category: 'anatomie'
  },
  {
    id: 13,
    question: "Les villosités intestinales augmentent la surface par :",
    options: ["2x", "10x", "30x", "100x"],
    correctAnswer: 2,
    explanation: "Surface absorbante totale ~30m² (intestin grêle + villosités + microvillosités).",
    category: 'anatomie'
  },
  {
    id: 14,
    question: "L'iléon s'unit au côlon au niveau de :",
    options: ["Pylore", "Valve iléo-cæcale", "Anus", "Cardia"],
    correctAnswer: 1,
    explanation: "Valve iléo-cæcale avec appendice vermiforme.",
    category: 'anatomie'
  },
  {
    id: 15,
    question: "Le côlon mesure environ :",
    options: ["1-1.5 m", "2-2.5 m", "4-5 m", "7 m"],
    correctAnswer: 0,
    explanation: "Portion terminale ~1.5m, absorbe eau et électrolytes.",
    category: 'anatomie'
  },
  {
    id: 16,
    question: "Le côlon comporte :",
    options: ["Haustra", "Taeniae coli", "Appendices épiploïques", "Tout ceci"],
    correctAnswer: 3,
    explanation: "Structures anatomiques caractéristiques du côlon.",
    category: 'anatomie'
  },
  {
    id: 17,
    question: "Le rectum mesure environ :",
    options: ["10 cm", "15 cm", "25 cm", "35 cm"],
    correctAnswer: 1,
    explanation: "Portion terminale de 15cm entre côlon et canal anal.",
    category: 'anatomie'
  },
  {
    id: 18,
    question: "L'estomac produit un volume quotidien de :",
    options: ["500 mL", "1-1.5 L", "2-3 L", "5 L"],
    correctAnswer: 2,
    explanation: "Glandes gastriques sécrètent 2-3L suc gastrique quotidiennement.",
    category: 'anatomie'
  },
  {
    id: 19,
    question: "L'intestin grêle produit un volume quotidien de :",
    options: ["1-2 L", "3-4 L", "5-6 L", "7-8 L"],
    correctAnswer: 1,
    explanation: "Brunner (duodénum) et cryptes intestinales sécrètent 3-4L suc intestinal.",
    category: 'anatomie'
  },
  {
    id: 20,
    question: "Le pancréas sécrète un volume quotidien de :",
    options: ["500 mL", "1-1.5 L", "2-3 L", "4-5 L"],
    correctAnswer: 1,
    explanation: "Glande exocrine sécrète 1-2L suc pancréatique riche en enzymes.",
    category: 'anatomie'
  },
  {
    id: 21,
    question: "Le foie produit combien de bile quotidiennement :",
    options: ["0.5-1 L", "1-2 L", "2-3 L", "3-4 L"],
    correctAnswer: 1,
    explanation: "Bile est continuellement produite (~1.2L/jour) et stockée/concentrée vésicule.",
    category: 'anatomie'
  },
  {
    id: 22,
    question: "Le pancréas contient :",
    options: ["Tissu exocrine seulement", "Tissu endocrine seulement", "Les deux (acini + îlots)", "Aucun tissu sécréteur"],
    correctAnswer: 2,
    explanation: "Pancréas exocrine (95% acini) + endocrine (îlots Langerhans 5%).",
    category: 'anatomie'
  },
  {
    id: 23,
    question: "Le foie pèse environ :",
    options: ["500 g", "1 kg", "1.5 kg", "2.5 kg"],
    correctAnswer: 2,
    explanation: "Plus grand organe interne, ~1.5 kg, représente 2% poids corporel.",
    category: 'anatomie'
  },
  {
    id: 24,
    question: "La vésicule biliaire stocke combien de bile :",
    options: ["50 mL", "100 mL", "150-200 mL", "300 mL"],
    correctAnswer: 2,
    explanation: "Vésicule concentre et emmagasine 150-200mL bile entre repas.",
    category: 'anatomie'
  },
  {
    id: 25,
    question: "Le sphincter d'Oddi régule le passage de :",
    options: ["Chyme", "Salive", "Bile et suc pancréatique", "Urine"],
    correctAnswer: 2,
    explanation: "Valve musculaire contrôlant entrée bile/pancréas au duodénum.",
    category: 'anatomie'
  },
  {
    id: 26,
    question: "L'appendice vermiforme est situé au :",
    options: ["Duodénum", "Iléon", "Jonction iléo-cæcale", "Côlon ascendant"],
    correctAnswer: 2,
    explanation: "Tube fermé de 8cm attaché cæcum (jonction intestin grêle-côlon).",
    category: 'anatomie'
  },
  {
    id: 27,
    question: "La salivaire produit un volume quotidien de :",
    options: ["200-300 mL", "500-700 mL", "1-1.5 L", "2-3 L"],
    correctAnswer: 2,
    explanation: "Glandes salivaires (parotides, sous-maxillaires, sublinguales) sécrètent 1-2L/jour.",
    category: 'anatomie'
  },
  {
    id: 28,
    question: "Les glandes parotides sécrètent :",
    options: ["Mucus seulement", "Salive sireuse riche en amylase", "Salive muqueuse", "Acide"],
    correctAnswer: 1,
    explanation: "Sécrètent suc riche en amylase salivaire (ptyaline) pour débuter digestion amidon.",
    category: 'anatomie'
  },
  {
    id: 29,
    question: "Les glandes sous-maxillaires produisent :",
    options: ["Salive purement sireuse", "Salive muqueuse", "Salive mixte (sireuse+mucus)", "Acide"],
    correctAnswer: 2,
    explanation: "Principales glandes salivaires majorité salive (70%), mélange séreux/mucus.",
    category: 'anatomie'
  },
  {
    id: 30,
    question: "Le foie a une vascularisation unique par :",
    options: ["Artère hépatique seule", "Veine porte seule", "Artère hépatique (30%) + veine porte (70%)", "Veines sus-hépatiques"],
    correctAnswer: 2,
    explanation: "Apport dual : artère hépatique (O2) + veine porte (nutriments sang digestif).",
    category: 'anatomie'
  },
  
  // DIGESTION MECANIQUE (31-55)
  {
    id: 31,
    question: "La mastication dure environ :",
    options: ["5 secondes", "15-30 secondes", "1-2 minutes", "5 minutes"],
    correctAnswer: 1,
    explanation: "Process de 15-30s par bolus avant déglutition.",
    category: 'digestion-mecanique'
  },
  {
    id: 32,
    question: "La déglutition comporte combien de phases :",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "Orale (volontaire), pharyngienne (involontaire), œsophagienne (involontaire).",
    category: 'digestion-mecanique'
  },
  {
    id: 33,
    question: "Le réflexe de déglutition est :",
    options: ["Volontaire uniquement", "Involontaire uniquement", "Peut être volontaire mais continue involontairement", "Pas de réflexe"],
    correctAnswer: 2,
    explanation: "Initiation volontaire, continuation involontaire par réflexes médullaires/tronc cérébral.",
    category: 'digestion-mecanique'
  },
  {
    id: 34,
    question: "L'estomac effectue combien de types de mouvements :",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "Mouvements de brassage, péristaltiques et tonus basale.",
    category: 'digestion-mecanique'
  },
  {
    id: 35,
    question: "Le chyme est :",
    options: ["Aliment non digéré", "Bouillie semi-liquide partiellement digérée", "Liquide absorbé", "Matière fécale"],
    correctAnswer: 1,
    explanation: "Produit de digestion gastrique, substance semi-liquide acide.",
    category: 'digestion-mecanique'
  },
  {
    id: 36,
    question: "L'estomac vide son contenu vers le duodénum en :",
    options: ["30 minutes", "1-2 heures", "3-4 heures", "5-6 heures"],
    correctAnswer: 2,
    explanation: "Vidange gastrique progressive 1.5-4h selon type aliment (lipides lents).",
    category: 'digestion-mecanique'
  },
  {
    id: 37,
    question: "La gastrine augmente :",
    options: ["Acidité gastrique", "Motilité gastrique", "Sécrétion pepsine", "Tout ceci"],
    correctAnswer: 3,
    explanation: "Hormone G libérée par cellules antrales, stimule mouvements et sécretions.",
    category: 'digestion-mecanique'
  },
  {
    id: 38,
    question: "La motiline provoque :",
    options: ["Sécrétion acide", "Ondes péristaltiques", "Absorption intestinale", "Aucun effet"],
    correctAnswer: 1,
    explanation: "Hormone initiant cycles moteurs interdigestifs (complexe moteur migrant).",
    category: 'digestion-mecanique'
  },
  {
    id: 39,
    question: "Les contractions péristaltiques sont :",
    options: ["Aléatoires", "Coordonnées, ondes progressives propulsant bolus", "Statiques", "Inverses"],
    correctAnswer: 1,
    explanation: "Mouvements coordonnés musculature lisse, onde progressive le long tube.",
    category: 'digestion-mecanique'
  },
  {
    id: 40,
    question: "L'intestin grêle complète sa digestion en :",
    options: ["30 minutes", "1-2 heures", "3-4 heures", "5-6 heures"],
    correctAnswer: 2,
    explanation: "Temps de transit grêle 3-4h permettant digestion complète.",
    category: 'digestion-mecanique'
  },
  {
    id: 41,
    question: "Le côlon absorbe principalement :",
    options: ["Protéines", "Lipides", "Eau et électrolytes", "Glucides"],
    correctAnswer: 2,
    explanation: "Réabsorbe ~1.5L eau quotidiennement, électrolytes et produit fécès.",
    category: 'digestion-mecanique'
  },
  {
    id: 42,
    question: "Le transit colique dure environ :",
    options: ["1-2 heures", "4-6 heures", "12-24 heures", "48-72 heures"],
    correctAnswer: 3,
    explanation: "Temps passage côlon 24-48h, plus lent que grêle.",
    category: 'digestion-mecanique'
  },
  {
    id: 43,
    question: "La cholécystokinine (CCK) provoque :",
    options: ["Sécrétion acide", "Contraction vésicule biliaire", "Diarrhée", "Vomissements"],
    correctAnswer: 1,
    explanation: "Hormone libérée I duodénal par lipides/protéines, stimule évacuation bile.",
    category: 'digestion-mecanique'
  },
  {
    id: 44,
    question: "La sécrétine augmente :",
    options: ["Gastrine", "Sécrétion pancréatique bicarbonate", "Motilité intestinale", "Absorption"],
    correctAnswer: 1,
    explanation: "Hormone acide duodénal, stimule pancréas produire HCO3- neutralisant chyme acide.",
    category: 'digestion-mecanique'
  },
  {
    id: 45,
    question: "L'acidité gastrique inhibée par :",
    options: ["Protéines", "Lipides", "GIP, CCK, sécrétine", "Glucides"],
    correctAnswer: 2,
    explanation: "Hormones duodénales (GIP, CCK, sécrétine) inhibent acidité comme feedback.",
    category: 'digestion-mecanique'
  },
  {
    id: 46,
    question: "Les microvillosités augmentent surface absorbante par :",
    options: ["2x", "5x", "20x", "100x"],
    correctAnswer: 2,
    explanation: "Microvillosités bordure en brosse augmenter surface 20-30x supplémentaire.",
    category: 'digestion-mecanique'
  },
  {
    id: 47,
    question: "L'énergie dépensée pour déglutition est :",
    options: ["Minimale", "Modérée", "Importante", "Très importante"],
    correctAnswer: 0,
    explanation: "Processus très efficace énergétiquement, minimal coût musculation.",
    category: 'digestion-mecanique'
  },
  {
    id: 48,
    question: "La gangrène sèche au duodénum crée :",
    options: ["Stimulation motilité", "Inhibition motilité", "Aucun effet", "Augmentation sécrétion"],
    correctAnswer: 0,
    explanation: "Duodénal chyme acide stimule motilité antrale et vidange pylore.",
    category: 'digestion-mecanique'
  },
  {
    id: 49,
    question: "Le réflexe gastro-entérique favorise :",
    options: ["Fermeture pylore", "Ouverture pylore et vidange gastrique", "Sécrétion gastrique", "Aucun effet"],
    correctAnswer: 1,
    explanation: "Réflexe extrinsèque coordonne vidange gastrique avec réceptivité intestinale.",
    category: 'digestion-mecanique'
  },
  {
    id: 50,
    question: "La couche mucosité gastrique épaisse :",
    options: ["Ralentit digestion", "Protège muqueuse de l'HCl", "Favorise digestion", "Aucun rôle"],
    correctAnswer: 1,
    explanation: "Mucus + bicarbonate créent couche barrière protégeant épithélium gastrique.",
    category: 'digestion-mecanique'
  },
  {
    id: 51,
    question: "L'acide chlorhydrique gastrique :",
    options: ["Détruit toutes les bactéries", "N'a qu'une fonction de digestion", "Dénature protéines + tue bactéries", "N'agit pas sur bactéries"],
    correctAnswer: 2,
    explanation: "pH gastrique 1.5-3.5 dénature protéines (déploiement) et tue bactéries.",
    category: 'digestion-mecanique'
  },
  {
    id: 52,
    question: "La pepsine agit optimalement à :",
    options: ["pH 8-9", "pH 1.5-2.5", "pH 6-7", "pH 10-11"],
    correctAnswer: 1,
    explanation: "Enzyme protéase optimale acidité forte, inactivée pH>5.",
    category: 'digestion-mecanique'
  },
  {
    id: 53,
    question: "L'achlorhydrie provoque :",
    options: ["Digestion protéine normale", "Réduction digestion protéine", "Augmentation motilité", "Aucun effet"],
    correctAnswer: 1,
    explanation: "Absence HCl diminue activation pepsinogène et digestion protéine.",
    category: 'digestion-mecanique'
  },
  {
    id: 54,
    question: "La gastrite affecte :",
    options: ["Motilité seule", "Sécrétion et motilité", "Absorption", "Défécation"],
    correctAnswer: 1,
    explanation: "Inflammation muqueuse gastrique diminue sécrétion et modifie motilité.",
    category: 'digestion-mecanique'
  },
  {
    id: 55,
    question: "L'ulcère gastrique provoque :",
    options: ["Augmentation motilité", "Diminution motilité", "Pas de changement", "Spasme constant"],
    correctAnswer: 1,
    explanation: "Ulcération diminue déplacement chyme, vidange gastrique ralentie.",
    category: 'digestion-mecanique'
  },
  
  // DIGESTION CHIMIQUE (56-80)
  {
    id: 56,
    question: "L'amylase salivaire digère :",
    options: ["Protéines", "Amidon (glucose)", "Lipides", "Acides gras"],
    correctAnswer: 1,
    explanation: "Ptyaline commence digestion amidon → maltose dans bouche.",
    category: 'digestion-chimique'
  },
  {
    id: 57,
    question: "L'amylase salivaire est inactivée :",
    options: ["Jamais", "Par acidité gastrique", "Par salive acide", "Par lipase"],
    correctAnswer: 1,
    explanation: "pH gastrique <3.5 inactiv amylase salivaire et débute actions pepsine.",
    category: 'digestion-chimique'
  },
  {
    id: 58,
    question: "Le pepsinogène est convertis en pepsine par :",
    options: ["Basophiles", "HCl gastrique", "Lipase", "Bile"],
    correctAnswer: 1,
    explanation: "HCl activateur pepsinogène pro-enzyme → pepsine endopeptidase active.",
    category: 'digestion-chimique'
  },
  {
    id: 59,
    question: "La pepsine digère :",
    options: ["Amidon", "Protéines (endopeptidase)", "Lipides", "Sucres"],
    correctAnswer: 1,
    explanation: "Protéase agissant liaisons peptidiques, débute protéolyse.",
    category: 'digestion-chimique'
  },
  {
    id: 60,
    question: "La lipase gastrique digère :",
    options: ["Amidon", "Protéines", "Lipides (~30% tri-acylglycérols)", "Sucres"],
    correctAnswer: 2,
    explanation: "Lipase gastrique mineure, active acide, digère ~30% lipides (majeur rôle pancréatique).",
    category: 'digestion-chimique'
  },
  {
    id: 61,
    question: "La bile contient :",
    options: ["Enzymes seulement", "Acides biliaires + cholestérol + lecithine", "Protéines seules", "Aucun lipide"],
    correctAnswer: 1,
    explanation: "Bile = émulsifiant (sels biliaires) facilite lipase pancréatique.",
    category: 'digestion-chimique'
  },
  {
    id: 62,
    question: "L'émulsification par bile :",
    options: ["Digère lipides", "Augmente surface lipide pour enzymes", "Absorbe lipides", "Aucun rôle"],
    correctAnswer: 1,
    explanation: "Sels biliaires réduisent tension surface lipide → micelles facilitant digestion/absorption.",
    category: 'digestion-chimique'
  },
  {
    id: 63,
    question: "L'amylase pancréatique digère :",
    options: ["Protéines", "Amidon → dextrines + maltose", "Lipides", "Sucres simples"],
    correctAnswer: 1,
    explanation: "Amylase pancréatique majorité digestion amidon (rôle majeur vs salivaire).",
    category: 'digestion-chimique'
  },
  {
    id: 64,
    question: "La trypsine digère :",
    options: ["Amidon", "Protéines (endopeptidase)", "Lipides", "Sucres"],
    correctAnswer: 1,
    explanation: "Protéase pancréatique majeure, endopeptidase, clive liaisons lysine/arginine.",
    category: 'digestion-chimique'
  },
  {
    id: 65,
    question: "La chymotrypsine digère :",
    options: ["Amidon", "Protéines (endopeptidase)", "Lipides", "Sucres"],
    correctAnswer: 1,
    explanation: "Endopeptidase pancréatique, complément trypsine, clive différentes liaisons.",
    category: 'digestion-chimique'
  },
  {
    id: 66,
    question: "L'élastase digère :",
    options: ["Amidon", "Protéines (élastine notamment)", "Lipides", "Sucres"],
    correctAnswer: 1,
    explanation: "Endopeptidase pancréatique spécialisée contre élastine/fibres protéine.",
    category: 'digestion-chimique'
  },
  {
    id: 67,
    question: "La carboxypeptidase A/B sont :",
    options: ["Endopeptidases", "Exopeptidases libérant aa terminaux", "Lipases", "Amylases"],
    correctAnswer: 1,
    explanation: "Enzymes pancréatiques clivant aa terminaux, phase finale protéolyse.",
    category: 'digestion-chimique'
  },
  {
    id: 68,
    question: "La lipase pancréatique digère :",
    options: ["Amidon", "Protéines", "Lipides (majeur ~75%)", "Sucres"],
    correctAnswer: 2,
    explanation: "Enzyme pancréatique essentielle, digère 75% tri-acylglycérols.",
    category: 'digestion-chimique'
  },
  {
    id: 69,
    question: "L'estérase pancréatique digère :",
    options: ["Amidon", "Protéines", "Cholestérol esters + phospholipides", "Sucres"],
    correctAnswer: 2,
    explanation: "Complément lipase pancréatique, digère lipides complexes.",
    category: 'digestion-chimique'
  },
  {
    id: 70,
    question: "La phospholipase A2 digère :",
    options: ["Amidon", "Protéines", "Phospholipides", "Sucres"],
    correctAnswer: 2,
    explanation: "Enzyme pancréatique attaque phospholipides, produit lysophospholipides.",
    category: 'digestion-chimique'
  },
  {
    id: 71,
    question: "La cholestérol-estérase digère :",
    options: ["Amidon", "Protéines", "Cholestérol esters", "Sucres"],
    correctAnswer: 2,
    explanation: "Enzyme pancréatique spécialisée contre esters cholestérol.",
    category: 'digestion-chimique'
  },
  {
    id: 72,
    question: "Les peptidases intestinales clivent :",
    options: ["Amidon", "Di-peptides + tri-peptides → aa", "Lipides", "Sucres"],
    correctAnswer: 1,
    explanation: "Enzymes entérocytes finalisent protéolyse => aa pour absorption.",
    category: 'digestion-chimique'
  },
  {
    id: 73,
    question: "La sucrase digère :",
    options: ["Amidon", "Saccharose → glucose + fructose", "Lipides", "Cellulose"],
    correctAnswer: 1,
    explanation: "Enzyme bordure en brosse, digère sucre table.",
    category: 'digestion-chimique'
  },
  {
    id: 74,
    question: "La maltase digère :",
    options: ["Amidon", "Maltose → glucose + glucose", "Lipides", "Saccharose"],
    correctAnswer: 1,
    explanation: "Enzyme entérocyte, digère produit amylase.",
    category: 'digestion-chimique'
  },
  {
    id: 75,
    question: "La lactase digère :",
    options: ["Amidon", "Lactose → glucose + galactose", "Lipides", "Sucrose"],
    correctAnswer: 1,
    explanation: "Enzyme bordure brosse, lait sucre digestion. Perte chez adultes sans consomption lait.",
    category: 'digestion-chimique'
  },
  {
    id: 76,
    question: "L'inhibiteur de trypsine pancréatique prévient :",
    options: ["Digestion amidon", "Auto-digestion pancréatique par trypsine", "Émulsification", "Absorption"],
    correctAnswer: 1,
    explanation: "Protecteur pancréatique, bloque trypsine prématurée activation.",
    category: 'digestion-chimique'
  },
  {
    id: 77,
    question: "La déficience en lipase pancréatique provoque :",
    options: ["Maldigestion protéine", "Stéatorrhée (lipides fécaux)", "Maldigestion amidon", "Aucun effet"],
    correctAnswer: 1,
    explanation: "Graisse non digérée lipide diarrhée grasse, déficit calorique.",
    category: 'digestion-chimique'
  },
  {
    id: 78,
    question: "La déficience amylase pancréatique provoque :",
    options: ["Malabsorption graisse", "Maldigestion amidon", "Lipidémie", "Acidose"],
    correctAnswer: 1,
    explanation: "Amidon non digéré → maldigestion glucides, moins sévère lipides.",
    category: 'digestion-chimique'
  },
  {
    id: 79,
    question: "La pH optimal pour trypsine :",
    options: ["pH 2-3", "pH 7-8", "pH 9-10", "pH 1-2"],
    correctAnswer: 1,
    explanation: "Trypsine agit optimalement pH légèrement basique intestin grêle.",
    category: 'digestion-chimique'
  },
  {
    id: 80,
    question: "La entérokinase (kinase entérique) :",
    options: ["Digère lipides", "Convertit trypsinogène → trypsine active", "Absorbe sucre", "Secrete acide"],
    correctAnswer: 1,
    explanation: "Enzyme muqueuse duodénale activant trypsinogène pro-enzyme.",
    category: 'digestion-chimique'
  },
  
  // ABSORPTION EXCRETION (81-100)
  {
    id: 81,
    question: "L'absorption des monosaccharides est :",
    options: ["Diffusion passive", "Transport actif (SGLT1, GLUT2)", "Aucune absorption", "Aucun transport"],
    correctAnswer: 1,
    explanation: "Glucose/galactose absorbés transport actif apical, GLUT2 basolateral.",
    category: 'absorption-excretion'
  },
  {
    id: 82,
    question: "L'absorption des acides aminés est :",
    options: ["Passive", "Transport actif (multiple transporteurs)", "Pas d'absorption", "Diffusion"],
    correctAnswer: 1,
    explanation: "Aa absorbés via transporteurs spécifiques sodium-dépendant et indépendant.",
    category: 'absorption-excretion'
  },
  {
    id: 83,
    question: "L'absorption des lipides formés :",
    options: ["Monoglycérides seuls", "Monoglycérides + acides gras", "Structures complètes tri-acylglycérols", "Aucune"])
    correctAnswer: 1,
    explanation: "Lipase produit monoglycérides + acides gras absorbés micelles.",
    category: 'absorption-excretion'
  },
  {
    id: 84,
    question: "Les micelles biliaires favorisent :",
    options: ["Absorption glucides", "Absorption acides aminés", "Absorption lipides", "Sécrétion"),
    correctAnswer: 2,
    explanation: "Sels biliaires forment micelles, facilite transport lipide hydrophobe => bordure brosse.",
    category: 'absorption-excretion'
  },
  {
    id: 85,
    question: "L'absorption du calcium augmentée par :",
    options: ["Vitamine A", "Vitamine D", "Vitamine E", "Vitamine K"],
    correctAnswer: 1,
    explanation: "Vitamine D augmente transporteur calcium (TRPV6) entérocyte.",
    category: 'absorption-excretion'
  },
  {
    id: 86,
    question: "Le fer est absorbé sous forme :",
    options: ["Fe+3", "Fe+2 (fer ferreux)", "Fe complexé", "Aucune"],
    correctAnswer: 1,
    explanation: "Fe+2 absorbé DMT1, Fe+3 réduit d'abord vitamines C.",
    category: 'absorption-excretion'
  },
  {
    id: 87,
    question: "L'absorption du fer est augmentée par :",
    options: ["Calcium", "Phytates", "Vitamine C", "Tanins"],
    correctAnswer: 2,
    explanation: "Vitamine C réduit Fe+3→Fe+2, augmente absorption 2-3x.",
    category: 'absorption-excretion'
  },
  {
    id: 88,
    question: "Le vitamin B12 est absorbé par :",
    options: ["Transport actif direct", "Facteur intrinsèque + récepteur ileal", "Diffusion", "Aucun"],
    correctAnswer: 1,
    explanation: "B12 nécessite facteur intrinsèque gastrique + récepteur iléal.",
    category: 'absorption-excretion'
  },
  {
    id: 89,
    question: "L'acide folique absorbé par :",
    options: ["Transport passif", "Transport actif (hFR, SLC19A1)", "Diffusion", "Aucun"],
    correctAnswer: 1,
    explanation: "Folate absorbé transporteurs actifs duodénum-jéjunum.",
    category: 'absorption-excretion'
  },
  {
    id: 90,
    question: "L'eau absorbée par :",
    options: ["Transport actif", "Osmose passif (suivi électrolytes)", "Aucune absorption", "Sécrétion"],
    correctAnswer: 1,
    explanation: "Eau suit électrolytes par osmose après absorption glucose/aa.",
    category: 'absorption-excretion'
  },
  {
    id: 91,
    question: "L'absorption de la majorité nutriments par :",
    options: ["Estomac", "Intestin grêle", "Côlon", "Rectum"],
    correctAnswer: 1,
    explanation: "~90% absorption intestin grêle, côlon surtout eau/électrolytes.",
    category: 'absorption-excretion'
  },
  {
    id: 92,
    question: "Les fécès contiennent principalement :",
    options: ["Lipides non digérés", "Eau + électrolytes + bactéries + debris", "Protéines", "Glucose"],
    correctAnswer: 1,
    explanation: "Matière fécale: eau 75% + bactéries 10-50% + debris alimentaire.",
    category: 'absorption-excretion'
  },
  {
    id: 93,
    question: "La diarrhée provoque :",
    options: ["Augmentation temps transit", "Diminution absorption eau", "Augmentation absorption", "Aucun changement"],
    correctAnswer: 1,
    explanation: "Temps transit court + augmentation sécrétion intestinale diarrhée.",
    category: 'absorption-excretion'
  },
  {
    id: 94,
    question: "La constipation provoque :",
    options: ["Transit côlon normal", "Transit côlon lent", "Augmentation motilité", "Vomissements"],
    correctAnswer: 1,
    explanation: "Transit ralenti côlon => augmentation réabsorption eau => selles dures.",
    category: 'absorption-excretion'
  },
  {
    id: 95,
    question: "L'absorption des acides biliaires :",
    options: ["Perdus majorité", "~95% réabsorbés iléon", "Complètement excrétés", "Aucune"],
    correctAnswer: 1,
    explanation: "Circulation entéro-hépatique: 95% iléum absorbés, 5% perdus fécès compensés foie.",
    category: 'absorption-excretion'
  },
  {
    id: 96,
    question: "L'ileal résection provoque :",
    options: ["Diarrhée légère", "Malabsorption B12+acides biliaires", "Aucun effet", "Constipation"],
    correctAnswer: 1,
    explanation: "Perte site ileal => malabsorption B12, acides biliaires => stéatorrhée.",
    category: 'absorption-excretion'
  },
  {
    id: 97,
    question: "L'ammoniac fécal provient :",
    options: ["Viande uniquement", "Bactéries coliques déaminant aa", "Foie", "Pancréas"],
    correctAnswer: 1,
    explanation: "Bactéries côlon produit ammoniac déaminant résidu aa.",
    category: 'absorption-excretion'
  },
  {
    id: 98,
    question: "L'encéphalopathie hépatique liée à :",
    options: ["Déficit ammoniaque", "Augmentation ammoniaque sanguin", "Déficit glucose", "Acidose"],
    correctAnswer: 1,
    explanation: "Déficit foie métaboliser ammoniac => accumulation neurotoxicité.",
    category: 'absorption-excretion'
  },
  {
    id: 99,
    question: "La flore intestinale synthétise :",
    options: ["Glucose", "Vitamine K + B", "Protéines", "Lipides"],
    correctAnswer: 1,
    explanation: "Bactéries coliques produisent K, B12, autres vitamines B.",
    category: 'absorption-excretion'
  },
  {
    id: 100,
    question: "La dysbiose provoque :",
    options: ["Augmentation fonction", "Malabsorption + inflammation", "Aucun effet", "Augmentation motilité"],
    correctAnswer: 1,
    explanation: "Déséquilibre flore => diminution production vitamines, augmentation lipopolysaccharides inflammatoires.",
    category: 'absorption-excretion'
  }
];

export const digestiveCategoryLabels: Record<string, string> = {
  'anatomie': 'Anatomie',
  'digestion-mecanique': 'Digestion Mécanique',
  'digestion-chimique': 'Digestion Chimique',
  'absorption-excretion': 'Absorption & Excrétion'
};

export const digestiveCategoryColors: Record<string, string> = {
  'anatomie': 'bg-orange-100 text-orange-800',
  'digestion-mecanique': 'bg-amber-100 text-amber-800',
  'digestion-chimique': 'bg-yellow-100 text-yellow-800',
  'absorption-excretion': 'bg-red-100 text-red-800'
};
