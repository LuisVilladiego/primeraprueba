import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useProgressStore } from "@/stores/progressStore";
import { useUserStore } from "@/stores/userStore";
import { level0Exam } from "@/content/modules/level-0";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { 
  ArrowLeft,
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  XCircle,
  ChevronLeft,
  ChevronRight,
  Trophy,
  AlertTriangle
} from "lucide-react";

type ExamState = "start" | "in_progress" | "results";

export function ExamPage() {
  const navigate = useNavigate();
  const { t, tBilingual, locale } = useTranslation();
  const { markAsCompleted, getProgress, setExamPassed } = useProgressStore();
  const { incrementXp, updateStats, stats } = useUserStore();

  const [examState, setExamState] = useState<ExamState>("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = level0Exam.questions;
  const progress = getProgress("EXAM", level0Exam.id);
  const alreadyPassed = progress?.status === "COMPLETED";

  const handleStartExam = () => {
    setExamState("in_progress");
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleSelectAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setExamState("results");
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    let total = 0;

    questions.forEach((q) => {
      total += q.points;
      const userAnswer = answers[q.id];
      if (userAnswer === q.correctAnswer || 
          (Array.isArray(q.correctAnswer) && JSON.stringify(userAnswer) === JSON.stringify(q.correctAnswer))) {
        correct += q.points;
      }
    });

    return { correct, total, percentage: Math.round((correct / total) * 100) };
  };

  const { correct, total, percentage } = showResults ? calculateScore() : { correct: 0, total: 0, percentage: 0 };
  const passed = percentage >= level0Exam.passingScore;

  if (showResults && passed && !alreadyPassed) {
    markAsCompleted("EXAM", level0Exam.id, percentage);
    setExamPassed(level0Exam.id);
    incrementXp(200);
    updateStats({ examsPassed: stats.examsPassed + 1 });
  }

  const question = questions[currentQuestion];

  return (
    <div className="mx-auto max-w-4xl">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500">
        <Link to="/courses/level-0" className="hover:text-zinc-900 dark:hover:text-white">
          {t("roadmap.level")} 0
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-white">
          {locale === "es" ? "Examen" : "Exam"}
        </span>
      </div>

      {examState === "start" && (
        <Card className="p-8 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <GraduationCap className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {tBilingual(level0Exam.title)}
          </h1>
          <p className="mx-auto mt-2 max-w-md text-zinc-600 dark:text-zinc-400">
            {tBilingual(level0Exam.description)}
          </p>

          <div className="mx-auto mt-6 flex max-w-sm justify-center gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                {questions.length}
              </p>
              <p className="text-sm text-zinc-500">
                {locale === "es" ? "Preguntas" : "Questions"}
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                {level0Exam.passingScore}%
              </p>
              <p className="text-sm text-zinc-500">
                {locale === "es" ? "Para aprobar" : "To pass"}
              </p>
            </div>
          </div>

          {alreadyPassed && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-100 px-4 py-2 text-green-700 dark:bg-green-900/30 dark:text-green-400">
              <CheckCircle2 className="h-5 w-5" />
              {locale === "es" ? "Ya aprobaste este examen" : "You already passed this exam"}
            </div>
          )}

          <div className="mt-8">
            <Button variant="primary" size="lg" onClick={handleStartExam}>
              {alreadyPassed 
                ? (locale === "es" ? "Volver a tomar" : "Retake")
                : (locale === "es" ? "Comenzar Examen" : "Start Exam")}
            </Button>
          </div>
        </Card>
      )}

      {examState === "in_progress" && question && (
        <div>
          {/* Progress */}
          <Card className="mb-6 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">
                {locale === "es" ? "Pregunta" : "Question"} {currentQuestion + 1} / {questions.length}
              </span>
              <Progress value={currentQuestion + 1} max={questions.length} size="sm" className="w-48" />
            </div>
          </Card>

          {/* Question */}
          <Card className="mb-6 p-6">
            <Badge variant="outline" className="mb-4">
              {question.type === "MULTIPLE_CHOICE" && (locale === "es" ? "Opción Múltiple" : "Multiple Choice")}
              {question.type === "TRUE_FALSE" && (locale === "es" ? "Verdadero/Falso" : "True/False")}
              {question.type === "SCENARIO" && (locale === "es" ? "Escenario" : "Scenario")}
              {question.type === "ORDERING" && (locale === "es" ? "Ordenar" : "Ordering")}
            </Badge>

            <h2 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-white">
              {tBilingual(question.question)}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {question.type === "TRUE_FALSE" ? (
                <>
                  {["true", "false"].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelectAnswer(question.id, option)}
                      className={`w-full rounded-lg border p-4 text-left transition-all ${
                        answers[question.id] === option
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                          : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700"
                      }`}
                    >
                      {option === "true" 
                        ? (locale === "es" ? "Verdadero" : "True")
                        : (locale === "es" ? "Falso" : "False")}
                    </button>
                  ))}
                </>
              ) : question.options && (
                <>
                  {(question.options[locale as "es" | "en"] || question.options.es).map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelectAnswer(question.id, String(index))}
                      className={`w-full rounded-lg border p-4 text-left transition-all ${
                        answers[question.id] === String(index)
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                          : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700"
                      }`}
                    >
                      <span className="mr-3 font-medium">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </button>
                  ))}
                </>
              )}
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={handlePrev}
              disabled={currentQuestion === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              {locale === "es" ? "Anterior" : "Previous"}
            </Button>

            {currentQuestion === questions.length - 1 ? (
              <Button 
                variant="primary" 
                onClick={handleSubmit}
                disabled={Object.keys(answers).length < questions.length}
              >
                {locale === "es" ? "Enviar Examen" : "Submit Exam"}
              </Button>
            ) : (
              <Button variant="outline" onClick={handleNext}>
                {locale === "es" ? "Siguiente" : "Next"}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      )}

      {examState === "results" && (
        <Card className="p-8 text-center">
          <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${
            passed ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"
          }`}>
            {passed ? (
              <Trophy className="h-10 w-10 text-green-600 dark:text-green-400" />
            ) : (
              <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
            )}
          </div>

          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {passed 
              ? (locale === "es" ? "¡Felicitaciones!" : "Congratulations!")
              : (locale === "es" ? "No aprobaste" : "You didn't pass")}
          </h1>

          <div className="mx-auto mt-6 max-w-xs">
            <div className="mb-2 flex justify-between text-sm">
              <span>{locale === "es" ? "Tu puntuación" : "Your score"}</span>
              <span className="font-semibold">{percentage}%</span>
            </div>
            <Progress 
              value={percentage} 
              max={100} 
              size="lg"
              className={passed ? "" : ""}
            />
            <p className="mt-2 text-sm text-zinc-500">
              {correct} / {total} {locale === "es" ? "puntos" : "points"}
            </p>
          </div>

          <p className="mx-auto mt-6 max-w-md text-zinc-600 dark:text-zinc-400">
            {passed 
              ? (locale === "es" 
                  ? "Has desbloqueado el siguiente nivel. ¡Sigue aprendiendo!"
                  : "You've unlocked the next level. Keep learning!")
              : (locale === "es"
                  ? `Necesitas ${level0Exam.passingScore}% para aprobar. Revisa el material e intenta de nuevo.`
                  : `You need ${level0Exam.passingScore}% to pass. Review the material and try again.`)}
          </p>

          <div className="mt-8 flex justify-center gap-4">
            {passed ? (
              <Button variant="primary" onClick={() => navigate("/roadmap")}>
                {locale === "es" ? "Ver Roadmap" : "View Roadmap"}
              </Button>
            ) : (
              <>
                <Button variant="outline" onClick={() => navigate("/courses/level-0")}>
                  {locale === "es" ? "Revisar Material" : "Review Material"}
                </Button>
                <Button variant="primary" onClick={handleStartExam}>
                  {locale === "es" ? "Intentar de Nuevo" : "Try Again"}
                </Button>
              </>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
