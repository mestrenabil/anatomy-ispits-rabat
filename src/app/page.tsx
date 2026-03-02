"use client";

import { useState, useEffect, useCallback } from "react";
import { qcmData, categoryLabels, categoryColors, Question as SkeletalQuestion } from "@/data/qcm-data";
import { digestiveData, digestiveCategoryLabels, digestiveCategoryColors, Question as DigestiveQuestion } from "@/data/digestive-data";
import { nervousData, nervousCategoryLabels, nervousCategoryColors, Question as NervousQuestion } from "@/data/nervous-data";
import { cardiovascularData, cardiovascularCategoryLabels, cardiovascularCategoryColors, Question as CardiovascularQuestion } from "@/data/cardiovascular-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  Bone, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  Target, 
  Brain,
  Stethoscope,
  Activity,
  BookOpen,
  Home,
  ListFilter,
  Sparkles,
  Award,
  TrendingUp,
  Utensils,
  Apple,
  Zap
} from "lucide-react";

type Mode = "menu" | "module-select" | "quiz" | "results";
type QuizMode = "all" | "category" | "exam";

type Question = SkeletalQuestion | DigestiveQuestion | NervousQuestion | CardiovascularQuestion;

interface AnswerRecord {
  questionId: number;
  selectedAnswer: number | null;
  isCorrect: boolean;
  question: Question;
}

interface Module {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  questionCount: number;
  categories: Record<string, string>;
  categoryColors: Record<string, string>;
}

const modules: Module[] = [
  {
    id: "skeletal",
    name: "Système Ostéo-articulaire",
    description: "Anatomie, physiologie, articulations et pathologies",
    icon: <Bone className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-600",
    questionCount: 100,
    categories: categoryLabels,
    categoryColors: categoryColors
  },
  {
    id: "digestive",
    name: "Système Digestif",
    description: "Anatomie, digestion mécanique, chimique, absorption",
    icon: <Utensils className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-600",
    questionCount: 50,
    categories: digestiveCategoryLabels,
    categoryColors: digestiveCategoryColors
  },
  {
    id: "nervous",
    name: "Système Nerveux",
    description: "Neurone, potentiel d'action, synapse, SNC & SNP",
    icon: <Brain className="w-6 h-6" />,
    color: "from-rose-500 to-pink-600",
    questionCount: 100,
    categories: nervousCategoryLabels,
    categoryColors: nervousCategoryColors
  },
  {
    id: "cardiovascular",
    name: "Système Circulatoire",
    description: "Cœur, vaisseaux, physiologie et circulation sanguine",
    icon: <Activity className="w-6 h-6" />,
    color: "from-red-500 to-rose-600",
    questionCount: 70,
    categories: cardiovascularCategoryLabels,
    categoryColors: cardiovascularCategoryColors
  }
];

const categoryIcons: Record<string, React.ReactNode> = {
  anatomie: <Bone className="w-5 h-5" />,
  physiologie: <Activity className="w-5 h-5" />,
  pathologie: <Stethoscope className="w-5 h-5" />,
  articulations: <Target className="w-5 h-5" />,
  'digestion-mecanique': <Apple className="w-5 h-5" />,
  'digestion-chimique': <Activity className="w-5 h-5" />,
  'absorption-excretion': <Target className="w-5 h-5" />,
  'organisation': <Brain className="w-5 h-5" />,
  'neurone': <Activity className="w-5 h-5" />,
  'classification': <Target className="w-5 h-5" />,
  'potentiel': <Zap className="w-5 h-5" />,
  'synapse': <Target className="w-5 h-5" />,
  'snc-snp': <Brain className="w-5 h-5" />,
  'circulation': <Activity className="w-5 h-5" />,
  'valves': <Target className="w-5 h-5" />,
  'vaisseaux': <Activity className="w-5 h-5" />
};

export default function QCMApp() {
  const [mode, setMode] = useState<Mode>("module-select");
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [quizMode, setQuizMode] = useState<QuizMode>("all");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showCorrection, setShowCorrection] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [examTimeLeft, setExamTimeLeft] = useState<number | null>(null);

  const getModuleData = (moduleId: string): Question[] => {
    if (moduleId === "skeletal") return qcmData;
    if (moduleId === "digestive") return digestiveData;
    if (moduleId === "nervous") return nervousData;
    if (moduleId === "cardiovascular") return cardiovascularData;
    return [];
  };

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startQuiz = useCallback((qMode: QuizMode, category?: string) => {
    if (!selectedModule) return;
    
    setQuizMode(qMode);
    let selectedQuestions: Question[] = [];
    const moduleData = getModuleData(selectedModule.id);
    
    if (qMode === "all") {
      selectedQuestions = shuffleArray(moduleData);
    } else if (qMode === "category" && category) {
      selectedQuestions = shuffleArray(moduleData.filter(q => q.category === category));
    } else if (qMode === "exam") {
      const examCount = selectedModule.id === "digestive" ? 25 : 25;
      selectedQuestions = shuffleArray(moduleData).slice(0, examCount);
      setExamTimeLeft(30 * 60); // 30 minutes
    }
    
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowCorrection(false);
    setAnswers([]);
    setMode("quiz");
  }, [selectedModule]);

  const handleAnswerSelect = (index: number) => {
    if (!showCorrection) {
      setSelectedAnswer(index);
    }
  };

  const validateAnswer = () => {
    if (selectedAnswer === null) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    setAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      question: currentQuestion
    }]);
    
    setShowCorrection(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowCorrection(false);
    } else {
      setMode("results");
    }
  };

  const resetQuiz = () => {
    setMode("module-select");
    setSelectedModule(null);
    setExamTimeLeft(null);
  };

  const selectModule = (module: Module) => {
    setSelectedModule(module);
    setMode("menu");
  };

  // Timer for exam mode
  useEffect(() => {
    if (mode === "quiz" && quizMode === "exam" && examTimeLeft !== null && examTimeLeft > 0) {
      const timer = setTimeout(() => {
        const newTime = examTimeLeft - 1;
        if (newTime === 0) {
          setExamTimeLeft(0);
          // Use setTimeout to defer state update
          setTimeout(() => setMode("results"), 0);
        } else {
          setExamTimeLeft(newTime);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [mode, quizMode, examTimeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateScore = () => {
    const correct = answers.filter(a => a.isCorrect).length;
    return { correct, total: answers.length, percentage: Math.round((correct / answers.length) * 100) };
  };

  const getScoreLevel = (percentage: number) => {
    if (percentage >= 80) return { level: "Excellent", color: "text-emerald-500", emoji: "🏆" };
    if (percentage >= 60) return { level: "Bon niveau", color: "text-sky-500", emoji: "🎯" };
    if (percentage >= 40) return { level: "Moyen", color: "text-amber-500", emoji: "📚" };
    return { level: "À réviser", color: "text-rose-500", emoji: "💪" };
  };

  // Module Selection Screen
  if (mode === "module-select") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">QCM Médicaux</h1>
                <p className="text-sm text-slate-500">Préparation concours & examens</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
          <div className="grid gap-6">
            {/* Hero Card */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-slate-300 font-medium">Module Anatomie–Physiologie S1</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Choisissez un module</h2>
                  <p className="text-slate-300 max-w-xl">
                    Testez vos connaissances avec des QCM complets incluant corrections et explications détaillées.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Module Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {modules.map((module) => (
                <Card 
                  key={module.id}
                  className="cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-slate-300 overflow-hidden"
                  onClick={() => selectModule(module)}
                >
                  <div className={cn("h-2 bg-gradient-to-r", module.color)} />
                  <CardHeader>
                    <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br text-white", module.color)}>
                      {module.icon}
                    </div>
                    <CardTitle className="text-xl">{module.name}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-sm">
                          {module.questionCount} Questions
                        </Badge>
                        <Badge variant="outline" className="text-sm">
                          {Object.keys(module.categories).length} Catégories
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Object.entries(module.categories).map(([key, label]) => (
                        <span 
                          key={key}
                          className={cn("px-2 py-1 rounded text-xs text-white", module.categoryColors[key])}
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                    <Button className={cn("w-full bg-gradient-to-r text-white", module.color)}>
                      Commencer le QCM
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats Summary */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-slate-500" />
                  Total des questions disponibles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                    <p className="text-3xl font-bold text-emerald-600">250</p>
                    <p className="text-sm text-slate-500">Questions Total</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
                    <p className="text-3xl font-bold text-purple-600">3</p>
                    <p className="text-sm text-slate-500">Modules</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                    <p className="text-3xl font-bold text-amber-600">14</p>
                    <p className="text-sm text-slate-500">Catégories</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl">
                    <p className="text-3xl font-bold text-rose-600">100%</p>
                    <p className="text-sm text-slate-500">Avec Explications</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="bg-white border-t border-slate-200 py-4 mt-auto">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-slate-500">
            📚 QCM Médicaux • Préparation concours & examens • Corrections détaillées
          </div>
        </footer>
      </div>
    );
  }

  // Menu Screen (Module Selected)
  if (mode === "menu" && selectedModule) {
    const moduleData = getModuleData(selectedModule.id);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" onClick={() => setMode("module-select")}>
                  <ArrowRight className="w-4 h-4 mr-1 rotate-180" />
                  Modules
                </Button>
                <div className="h-6 w-px bg-slate-200" />
                <div className={cn("p-2 rounded-xl bg-gradient-to-br text-white", selectedModule.color)}>
                  {selectedModule.icon}
                </div>
                <div>
                  <h1 className="text-lg font-bold text-slate-800">{selectedModule.name}</h1>
                  <p className="text-sm text-slate-500">{selectedModule.questionCount} Questions</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
          <div className="grid gap-6">
            {/* Hero Card */}
            <Card className={cn("border-0 shadow-xl bg-gradient-to-br text-white overflow-hidden", selectedModule.color)}>
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-white/80 font-medium">Examens & Concours</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Testez vos connaissances</h2>
                  <p className="text-white/80 max-w-xl">
                    {selectedModule.questionCount} QCM couvrant {Object.keys(selectedModule.categories).length} catégories avec corrections détaillées.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mode Selection */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card 
                className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-2 border-transparent hover:border-emerald-200"
                onClick={() => startQuiz("all")}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-3">
                    <BookOpen className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">Mode Complet</CardTitle>
                  <CardDescription>{selectedModule.questionCount} questions aléatoires</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    Parcourez toutes les questions avec corrections détaillées à votre rythme.
                  </p>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                    Commencer
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-2 border-transparent hover:border-amber-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-3">
                    <ListFilter className="w-6 h-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-lg">Par Catégorie</CardTitle>
                  <CardDescription>Questions thématiques</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    Choisissez une catégorie spécifique pour réviser ciblé.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(selectedModule.categories).map(([key, label]) => (
                      <Button 
                        key={key}
                        variant="outline" 
                        size="sm"
                        className="text-xs"
                        onClick={() => startQuiz("category", key)}
                      >
                        {categoryIcons[key]}
                        <span className="ml-1">{label}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-2 border-transparent hover:border-rose-200"
                onClick={() => startQuiz("exam")}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-3">
                    <Trophy className="w-6 h-6 text-rose-600" />
                  </div>
                  <CardTitle className="text-lg">Mode Examen</CardTitle>
                  <CardDescription>25 questions • 30 min</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    Simulez un examen avec temps limité. Pas de correction avant la fin.
                  </p>
                  <Button className="w-full bg-rose-500 hover:bg-rose-600">
                    Démarrer l'examen
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-slate-500" />
                  Contenu du QCM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(selectedModule.categories).map(([key, label]) => (
                    <div key={key} className="flex items-center gap-3">
                      <div className={cn("w-3 h-3 rounded-full", selectedModule.categoryColors[key])} />
                      <div>
                        <p className="font-medium text-slate-800">{label}</p>
                        <p className="text-sm text-slate-500">
                          {moduleData.filter(q => q.category === key).length} questions
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="bg-white border-t border-slate-200 py-4 mt-auto">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-slate-500">
            📚 {selectedModule.name} • Préparation concours & examens
          </div>
        </footer>
      </div>
    );
  }

  // Quiz Screen
  if (mode === "quiz") {
    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    const score = calculateScore();
    const currentCategoryColors = selectedModule?.categoryColors || categoryColors;
    const currentCategoryLabels = selectedModule?.categories || categoryLabels;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" onClick={resetQuiz}>
                  <Home className="w-4 h-4 mr-1" />
                  Menu
                </Button>
                <div className="h-6 w-px bg-slate-200" />
                <Badge variant="outline" className="font-mono">
                  {currentQuestionIndex + 1} / {questions.length}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4">
                {quizMode === "exam" && examTimeLeft !== null && (
                  <div className={cn(
                    "font-mono text-lg font-bold px-3 py-1 rounded-lg",
                    examTimeLeft < 300 ? "bg-rose-100 text-rose-600" : "bg-slate-100 text-slate-600"
                  )}>
                    ⏱ {formatTime(examTimeLeft)}
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-500 font-medium">{score.correct}</span>
                  <span className="text-slate-400">/</span>
                  <span className="text-slate-600">{answers.length}</span>
                </div>
              </div>
            </div>
            <Progress value={progress} className="mt-3 h-2" />
          </div>
        </header>

        <main className="flex-1 max-w-4xl mx-auto px-4 py-6 w-full">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={cn("text-white", currentCategoryColors[currentQuestion.category])}>
                  {categoryIcons[currentQuestion.category]}
                  <span className="ml-1">{currentCategoryLabels[currentQuestion.category]}</span>
                </Badge>
                <Badge variant="outline" className="text-slate-500">
                  Question {currentQuestion.id}
                </Badge>
              </div>
              <CardTitle className="text-xl leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showCorrect = showCorrection && isCorrect;
                const showWrong = showCorrection && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showCorrection && quizMode !== "exam"}
                    className={cn(
                      "w-full p-4 rounded-xl text-left transition-all border-2 flex items-start gap-3",
                      "hover:shadow-md",
                      !showCorrection && isSelected && "border-emerald-400 bg-emerald-50",
                      !showCorrection && !isSelected && "border-slate-200 hover:border-slate-300 bg-white",
                      showCorrect && "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200",
                      showWrong && "border-rose-400 bg-rose-50",
                      showCorrection && !isSelected && !isCorrect && "opacity-50"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0",
                      !showCorrection && isSelected && "bg-emerald-500 text-white",
                      !showCorrection && !isSelected && "bg-slate-100 text-slate-600",
                      showCorrect && "bg-emerald-500 text-white",
                      showWrong && "bg-rose-500 text-white",
                      showCorrection && !isSelected && !isCorrect && "bg-slate-100 text-slate-400"
                    )}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className={cn(
                      "flex-1 pt-1",
                      showCorrect && "text-emerald-700 font-medium",
                      showWrong && "text-rose-700"
                    )}>
                      {option}
                    </span>
                    {showCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                    {showWrong && <XCircle className="w-5 h-5 text-rose-500 shrink-0" />}
                  </button>
                );
              })}
            </CardContent>
          </Card>

          {/* Correction */}
          {showCorrection && quizMode !== "exam" && (
            <Card className={cn(
              "mt-4 border-2",
              selectedAnswer === currentQuestion.correctAnswer 
                ? "border-emerald-200 bg-emerald-50" 
                : "border-rose-200 bg-rose-50"
            )}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-rose-500 shrink-0" />
                  )}
                  <div>
                    <p className={cn(
                      "font-semibold mb-1",
                      selectedAnswer === currentQuestion.correctAnswer 
                        ? "text-emerald-700" 
                        : "text-rose-700"
                    )}>
                      {selectedAnswer === currentQuestion.correctAnswer ? "Bonne réponse !" : "Mauvaise réponse"}
                    </p>
                    <p className="text-slate-700">
                      📖 {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Actions */}
          <div className="mt-6 flex justify-center gap-3">
            {!showCorrection ? (
              <Button 
                onClick={validateAnswer}
                disabled={selectedAnswer === null}
                size="lg"
                className="px-8 bg-emerald-500 hover:bg-emerald-600"
              >
                Valider
                <CheckCircle2 className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button 
                onClick={nextQuestion}
                size="lg"
                className="px-8"
              >
                {currentQuestionIndex < questions.length - 1 ? (
                  <>
                    Question suivante
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    Voir les résultats
                    <Trophy className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </main>
      </div>
    );
  }

  // Results Screen
  if (mode === "results") {
    const score = calculateScore();
    const scoreLevel = getScoreLevel(score.percentage);
    const currentCategoryLabels = selectedModule?.categories || categoryLabels;
    const currentCategoryColors = selectedModule?.categoryColors || categoryColors;
    
    const categoryStats = Object.keys(currentCategoryLabels).map(cat => ({
      category: cat,
      total: answers.filter(a => a.question.category === cat).length,
      correct: answers.filter(a => a.question.category === cat && a.isCorrect).length
    })).filter(stat => stat.total > 0);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={cn("p-2 rounded-xl bg-gradient-to-br text-white", selectedModule?.color || "from-slate-700 to-slate-800")}>
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-slate-800">Résultats</h1>
                  <p className="text-sm text-slate-500">{selectedModule?.name} • {quizMode === "exam" ? "Mode Examen" : quizMode === "category" ? "Mode Catégorie" : "Mode Complet"}</p>
                </div>
              </div>
              <Button onClick={resetQuiz} variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Menu
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
          <div className="grid gap-6">
            {/* Score Card */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className={cn(
                "p-8 text-center text-white",
                score.percentage >= 80 ? "bg-gradient-to-br from-emerald-500 to-teal-600" :
                score.percentage >= 60 ? "bg-gradient-to-br from-sky-500 to-blue-600" :
                score.percentage >= 40 ? "bg-gradient-to-br from-amber-500 to-orange-600" :
                "bg-gradient-to-br from-rose-500 to-red-600"
              )}>
                <div className="text-6xl mb-4">{scoreLevel.emoji}</div>
                <h2 className="text-3xl font-bold mb-2">{scoreLevel.level}</h2>
                <div className="text-7xl font-bold mb-2">{score.percentage}%</div>
                <p className="text-lg opacity-90">
                  {score.correct} bonnes réponses sur {score.total}
                </p>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-emerald-50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-emerald-600">{score.correct}</p>
                    <p className="text-sm text-slate-500">Bonnes réponses</p>
                  </div>
                  <div className="p-4 bg-rose-50 rounded-xl">
                    <XCircle className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-rose-600">{score.total - score.correct}</p>
                    <p className="text-sm text-slate-500">Erreurs</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <Brain className="w-6 h-6 text-slate-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-600">{questions.length}</p>
                    <p className="text-sm text-slate-500">Questions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Category Stats */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  Performance par catégorie
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {categoryStats.map(stat => {
                  const percentage = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                  return (
                    <div key={stat.category} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={cn("w-3 h-3 rounded-full", currentCategoryColors[stat.category])} />
                          <span className="font-medium">{currentCategoryLabels[stat.category]}</span>
                        </div>
                        <span className="text-sm text-slate-500">
                          {stat.correct}/{stat.total} ({percentage}%)
                        </span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={cn("h-full rounded-full transition-all", currentCategoryColors[stat.category])}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Wrong Answers Review */}
            {answers.filter(a => !a.isCorrect).length > 0 && (
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-rose-500" />
                    Réponses à réviser ({answers.filter(a => !a.isCorrect).length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {answers.filter(a => !a.isCorrect).map((answer, idx) => (
                      <div key={idx} className="p-4 bg-rose-50 rounded-xl border border-rose-200">
                        <div className="flex items-start gap-3">
                          <Badge className={cn("text-white shrink-0", currentCategoryColors[answer.question.category])}>
                            Q{answer.question.id}
                          </Badge>
                          <div className="flex-1">
                            <p className="font-medium text-slate-800 mb-2">
                              {answer.question.question}
                            </p>
                            <div className="flex flex-wrap gap-2 text-sm">
                              <span className="px-2 py-1 bg-rose-200 text-rose-700 rounded">
                                ❌ {answer.question.options[answer.selectedAnswer!]}
                              </span>
                              <span className="px-2 py-1 bg-emerald-200 text-emerald-700 rounded">
                                ✅ {answer.question.options[answer.question.correctAnswer]}
                              </span>
                            </div>
                            <p className="text-sm text-slate-600 mt-2">
                              📖 {answer.question.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={resetQuiz} size="lg" className="px-8">
                <Home className="w-4 h-4 mr-2" />
                Retour au menu
              </Button>
              <Button 
                onClick={() => startQuiz(quizMode, selectedCategory || undefined)} 
                variant="outline"
                size="lg"
                className="px-8"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Recommencer
              </Button>
            </div>
          </div>
        </main>

        <footer className="bg-white border-t border-slate-200 py-4 mt-auto">
          <div className="max-w-4xl mx-auto px-4 text-center text-sm text-slate-500">
            📚 {selectedModule?.name} • Préparation concours & examens
          </div>
        </footer>
      </div>
    );
  }

  return null;
}
