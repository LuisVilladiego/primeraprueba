import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useUserStore } from "@/stores/userStore";
import { useSettingsStore } from "@/stores/settingsStore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/Progress";
import {
  Sparkles,
  Terminal,
  Trophy,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Check,
  User,
  Globe,
} from "lucide-react";

interface OnboardingStep {
  id: string;
  icon: React.ElementType;
  title: { es: string; en: string };
  description: { es: string; en: string };
  color: string;
}

const steps: OnboardingStep[] = [
  {
    id: "welcome",
    icon: Sparkles,
    title: { es: "¡Bienvenido a Pinguiñoño!", en: "Welcome to Pinguiñoño!" },
    description: {
      es: "Tu compañero para aprender Linux, Cloud y DevOps de manera interactiva y divertida.",
      en: "Your companion to learn Linux, Cloud, and DevOps in an interactive and fun way.",
    },
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "terminal",
    icon: Terminal,
    title: { es: "Terminal Real", en: "Real Terminal" },
    description: {
      es: "Practica con una terminal real conectada a tu sistema Linux. Ejecuta comandos reales y ve los resultados al instante.",
      en: "Practice with a real terminal connected to your Linux system. Run real commands and see instant results.",
    },
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "learning",
    icon: BookOpen,
    title: { es: "Aprende Paso a Paso", en: "Learn Step by Step" },
    description: {
      es: "16 niveles desde los fundamentos hasta Kubernetes. Lecciones interactivas, laboratorios prácticos y exámenes.",
      en: "16 levels from fundamentals to Kubernetes. Interactive lessons, hands-on labs, and exams.",
    },
    color: "from-orange-500 to-red-500",
  },
  {
    id: "achievements",
    icon: Trophy,
    title: { es: "Gana Logros", en: "Earn Achievements" },
    description: {
      es: "Desbloquea logros, mantén rachas diarias, gana XP y obtén certificados al completar cada nivel.",
      en: "Unlock achievements, maintain daily streaks, earn XP, and get certificates for completing each level.",
    },
    color: "from-yellow-500 to-orange-500",
  },
];

export function OnboardingModal() {
  const navigate = useNavigate();
  const { locale } = useTranslation();
  const { name, setName, stats } = useUserStore();
  const { setLocale } = useSettingsStore();
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userName, setUserName] = useState(name);
  const [selectedLocale, setSelectedLocale] = useState<"es" | "en">(locale as "es" | "en");

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem("pinguinono-onboarding-complete");
    if (!hasSeenOnboarding && stats.totalXp === 0) {
      setIsOpen(true);
    }
  }, [stats.totalXp]);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    if (userName.trim()) {
      setName(userName.trim());
    }
    setLocale(selectedLocale);
    localStorage.setItem("pinguinono-onboarding-complete", "true");
    setIsOpen(false);
    navigate("/courses/level-0");
  };

  const handleSkip = () => {
    localStorage.setItem("pinguinono-onboarding-complete", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const isLastStep = currentStep === steps.length;
  const step = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-[fade-in_0.3s_ease-out]">
      <Card className="w-full max-w-lg mx-4 overflow-hidden animate-[scale-in_0.3s_ease-out]">
        {/* Progress */}
        <div className="px-6 pt-6">
          <Progress 
            value={currentStep + 1} 
            max={steps.length + 1} 
            size="sm" 
            variant="gradient"
          />
          <p className="mt-2 text-xs text-zinc-500 text-center">
            {currentStep + 1} / {steps.length + 1}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isLastStep ? (
            <div className="text-center animate-[fade-in-up_0.3s_ease-out]" key={step.id}>
              <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color}`}>
                <step.icon className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                {step.title[selectedLocale]}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {step.description[selectedLocale]}
              </p>
            </div>
          ) : (
            <div className="animate-[fade-in-up_0.3s_ease-out]">
              <div className="text-center mb-6">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                  {selectedLocale === "es" ? "¡Personaliza tu experiencia!" : "Personalize your experience!"}
                </h2>
                <p className="text-zinc-500">
                  {selectedLocale === "es" ? "¿Cómo te llamamos?" : "What should we call you?"}
                </p>
              </div>

              {/* Name Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  {selectedLocale === "es" ? "Tu nombre" : "Your name"}
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder={selectedLocale === "es" ? "Escribe tu nombre..." : "Enter your name..."}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                  autoFocus
                />
              </div>

              {/* Language Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  <Globe className="inline h-4 w-4 mr-1" />
                  {selectedLocale === "es" ? "Idioma" : "Language"}
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedLocale("es")}
                    className={`flex-1 flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 font-medium transition-all ${
                      selectedLocale === "es"
                        ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                        : "border-zinc-200 text-zinc-600 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-400"
                    }`}
                  >
                    <span className="text-xl">🇪🇸</span>
                    Español
                    {selectedLocale === "es" && <Check className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => setSelectedLocale("en")}
                    className={`flex-1 flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 font-medium transition-all ${
                      selectedLocale === "en"
                        ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                        : "border-zinc-200 text-zinc-600 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-400"
                    }`}
                  >
                    <span className="text-xl">🇺🇸</span>
                    English
                    {selectedLocale === "en" && <Check className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between border-t border-zinc-200 dark:border-zinc-700 p-4">
          <div>
            {currentStep > 0 ? (
              <Button variant="ghost" onClick={handlePrev}>
                <ChevronLeft className="h-4 w-4" />
                {selectedLocale === "es" ? "Anterior" : "Back"}
              </Button>
            ) : (
              <Button variant="ghost" onClick={handleSkip}>
                {selectedLocale === "es" ? "Omitir" : "Skip"}
              </Button>
            )}
          </div>

          <div>
            {isLastStep ? (
              <Button variant="primary" onClick={handleComplete}>
                {selectedLocale === "es" ? "¡Comenzar!" : "Let's go!"}
                <Sparkles className="h-4 w-4" />
              </Button>
            ) : (
              <Button variant="primary" onClick={handleNext}>
                {selectedLocale === "es" ? "Siguiente" : "Next"}
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
