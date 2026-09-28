"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import { useProgressStore } from "@/stores/progressStore";
import { useUserStore } from "@/stores/userStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { cn } from "@/lib/utils";
import type { Exam, ExamQuestion, ExamResult } from "@/types";
import {
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Trophy,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

interface ExamContainerProps {
  exam: Exam;
  moduleId: string;
  onComplete: (result: ExamResult) => void;
}

export function ExamContainer({ exam, moduleId, onComplete }: ExamContainerProps) {
  const { t, tBilingual, tArray, locale } = useTranslation();
  const router = useRouter();
  const { markAsCompleted, incrementAttempts, getProgress } = useProgressStore();
  const { incrementXp, updateStats, stats } = useUserStore();

  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [timeRemaining, setTimeRemaining] = useState(exam.timeLimit ? exam.timeLimit * 60 : null);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<ExamResult | null>(null);

  const questions = exam.shuffleQuestions
    ? [...exam.questions].sort(() => Math.random() - 0.5)
    : exam.questions;

  useEffect(() => {
    if (!started || !timeRemaining) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === null || prev <= 0) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setStarted(true);
    incrementAttempts("EXAM", exam.id);
  };

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    let totalPoints = 0;
    let earnedPoints = 0;
    const weakAreas: string[] = [];

    questions.forEach((q) => {
      totalPoints += q.points;
      const userAnswer = answers[q.id];
      const isCorrect = Array.isArray(q.correctAnswer)
        ? JSON.stringify(userAnswer) === JSON.stringify(q.correctAnswer)
        : userAnswer === q.correctAnswer;

      if (isCorrect) {
        correctCount++;
        earnedPoints += q.points;
      } else {
        if (!weakAreas.includes(q.category)) {
          weakAreas.push(q.category);
        }
      }
    });

    const percentage = Math.round((earnedPoints / totalPoints) * 100);
    const passed = percentage >= exam.passingScore;

    const examResult: ExamResult = {
      score: earnedPoints,
      totalPoints,
      percentage,
      passed,
      correctAnswers: correctCount,
      totalQuestions: questions.length,
      timeSpent: exam.timeLimit ? (exam.timeLimit * 60 - (timeRemaining || 0)) : 0,
      answers: questions.map((q) => ({
        questionId: q.id,
        answer: answers[q.id] || "",
        isCorrect: Array.isArray(q.correctAnswer)
          ? JSON.stringify(answers[q.id]) === JSON.stringify(q.correctAnswer)
          : answers[q.id] === q.correctAnswer,
        timeSpent: 0,
      })),
      weakAreas,
      recommendations: weakAreas.map((area) =>
        locale === "es"
          ? `Revisa la sección de ${area}`
          : `Review the ${area} section`
      ),
    };

    setResult(examResult);
    setShowResults(true);

    if (passed) {
      markAsCompleted("EXAM", exam.id, percentage);
      markAsCompleted("MODULE", moduleId, percentage);
      incrementXp(200);
      updateStats({
        examsPassed: stats.examsPassed + 1,
      });
    }

    onComplete(examResult);
  };

  const renderQuestion = (question: ExamQuestion, index: number) => {
    const options = question.options ? tArray(question.options) : [];
    const selectedAnswer = answers[question.id];

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="primary">
            {t("exam.question")} {index + 1} {t("exam.of")} {questions.length}
          </Badge>
          <Badge variant="outline">{question.points} pts</Badge>
        </div>

        <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
          {tBilingual(question.question)}
        </h3>

        {question.type === "MULTIPLE_CHOICE" && (
          <div className="space-y-2">
            {options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(question.id, String(i))}
                className={cn(
                  "w-full rounded-lg border p-4 text-left transition-all",
                  selectedAnswer === String(i)
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700"
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full border-2",
                      selectedAnswer === String(i)
                        ? "border-blue-500 bg-blue-500"
                        : "border-zinc-300 dark:border-zinc-600"
                    )}
                  >
                    {selectedAnswer === String(i) && (
                      <div className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {question.type === "TRUE_FALSE" && (
          <div className="flex gap-4">
            {[
              { value: "true", label: locale === "es" ? "Verdadero" : "True" },
              { value: "false", label: locale === "es" ? "Falso" : "False" },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(question.id, opt.value)}
                className={cn(
                  "flex-1 rounded-lg border p-4 transition-all",
                  selectedAnswer === opt.value
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {(question.type === "SCENARIO" || question.type === "ORDERING") && options.length > 0 && (
          <div className="space-y-2">
            {options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(question.id, String(i))}
                className={cn(
                  "w-full rounded-lg border p-4 text-left transition-all",
                  selectedAnswer === String(i)
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700"
                )}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (showResults && result) {
    return (
      <div className="space-y-6">
        {/* Result Header */}
        <Card
          className={cn(
            "border-2",
            result.passed
              ? "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20"
              : "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20"
          )}
        >
          <CardContent className="p-8 text-center">
            <div
              className={cn(
                "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full",
                result.passed ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"
              )}
            >
              {result.passed ? (
                <Trophy className="h-10 w-10 text-green-600" />
              ) : (
                <AlertCircle className="h-10 w-10 text-red-600" />
              )}
            </div>

            <h2
              className={cn(
                "text-3xl font-bold",
                result.passed ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"
              )}
            >
              {result.passed ? t("exam.passed") : t("exam.failed")}
            </h2>

            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {result.passed ? t("exam.passedMessage") : t("exam.failedMessage")}
            </p>

            <div className="mt-6 text-5xl font-bold text-zinc-900 dark:text-white">
              {result.percentage}%
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-green-600">{result.correctAnswers}</p>
                <p className="text-sm text-zinc-500">{t("exam.correctAnswers")}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">
                  {result.totalQuestions - result.correctAnswers}
                </p>
                <p className="text-sm text-zinc-500">{t("exam.incorrectAnswers")}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {result.totalQuestions}
                </p>
                <p className="text-sm text-zinc-500">{t("exam.questions")}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weak Areas */}
        {result.weakAreas.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>{t("exam.weakAreas")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {result.weakAreas.map((area) => (
                  <Badge key={area} variant="warning">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        <div className="flex justify-center gap-4">
          {!result.passed && (
            <Button
              variant="outline"
              onClick={() => {
                setShowResults(false);
                setStarted(false);
                setCurrentQuestion(0);
                setAnswers({});
                setTimeRemaining(exam.timeLimit ? exam.timeLimit * 60 : null);
              }}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              {t("exam.retakeExam")}
            </Button>
          )}

          <Button
            variant="primary"
            onClick={() => router.push(result.passed ? "/roadmap" : "/courses/level-0")}
          >
            {result.passed ? t("exam.continueToNext") : locale === "es" ? "Revisar Lecciones" : "Review Lessons"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{tBilingual(exam.title)}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-zinc-600 dark:text-zinc-400">
            {tBilingual(exam.description)}
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800">
              <p className="text-sm text-zinc-500">{t("exam.questions")}</p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                {exam.questions.length}
              </p>
            </div>
            <div className="rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800">
              <p className="text-sm text-zinc-500">{t("exam.passingScore")}</p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                {exam.passingScore}%
              </p>
            </div>
            <div className="rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800">
              <p className="text-sm text-zinc-500">{t("exam.timeLimit")}</p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                {exam.timeLimit ? `${exam.timeLimit} min` : t("exam.noTimeLimit")}
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
            <h4 className="font-medium text-yellow-800 dark:text-yellow-400">
              {t("exam.instructions")}
            </h4>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
              <li>{locale === "es" ? "Lee cada pregunta cuidadosamente" : "Read each question carefully"}</li>
              <li>{locale === "es" ? "Puedes navegar entre preguntas" : "You can navigate between questions"}</li>
              <li>{locale === "es" ? `Necesitas ${exam.passingScore}% para aprobar` : `You need ${exam.passingScore}% to pass`}</li>
              {exam.timeLimit && (
                <li>{locale === "es" ? `Tienes ${exam.timeLimit} minutos` : `You have ${exam.timeLimit} minutes`}</li>
              )}
            </ul>
          </div>

          <Button onClick={handleStart} size="lg" className="w-full">
            {t("exam.startExam")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Progress
                value={Object.keys(answers).length}
                max={questions.length}
                size="md"
                className="w-48"
              />
              <span className="text-sm text-zinc-500">
                {Object.keys(answers).length}/{questions.length} {locale === "es" ? "respondidas" : "answered"}
              </span>
            </div>

            {timeRemaining !== null && (
              <div
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2",
                  timeRemaining < 60
                    ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                )}
              >
                <Clock className="h-5 w-5" />
                <span className="font-mono font-bold">{formatTime(timeRemaining)}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Question */}
      <Card>
        <CardContent className="p-6">
          {renderQuestion(questions[currentQuestion], currentQuestion)}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentQuestion(i)}
              className={cn(
                "h-10 w-10 rounded-lg text-sm font-medium transition-all",
                currentQuestion === i
                  ? "bg-blue-600 text-white"
                  : answers[questions[i].id]
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400"
              )}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
          >
            {t("common.previous")}
          </Button>

          {currentQuestion < questions.length - 1 ? (
            <Button
              onClick={() => setCurrentQuestion((prev) => Math.min(questions.length - 1, prev + 1))}
            >
              {t("common.next")}
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < questions.length}
            >
              {t("exam.submitExam")}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
