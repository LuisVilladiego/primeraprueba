"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { MainLayout } from "@/components/layout";
import { TerminalSimulator } from "@/components/terminal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import { useTranslation } from "@/hooks/useTranslation";
import { useProgressStore } from "@/stores/progressStore";
import { useUserStore } from "@/stores/userStore";
import { level0Labs } from "@/content/modules/level-0";
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  FlaskConical,
  Target,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Award
} from "lucide-react";

export default function LabPage() {
  const params = useParams();
  const router = useRouter();
  const { t, tBilingual, locale } = useTranslation();
  const { markAsCompleted, markAsStarted, getProgress } = useProgressStore();
  const { updateStats, incrementXp, stats } = useUserStore();

  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const slug = params.slug as string;
  const lab = level0Labs.find((l) => l.slug === slug);
  
  const currentIndex = level0Labs.findIndex((l) => l.slug === slug);
  const prevLab = currentIndex > 0 ? level0Labs[currentIndex - 1] : null;
  const nextLab = currentIndex < level0Labs.length - 1 ? level0Labs[currentIndex + 1] : null;

  if (!lab) {
    return (
      <MainLayout>
        <div className="flex h-[400px] items-center justify-center">
          <p className="text-zinc-500">
            {locale === "es" ? "Laboratorio no encontrado" : "Lab not found"}
          </p>
        </div>
      </MainLayout>
    );
  }

  const progress = getProgress("LAB", lab.id);
  const isCompleted = progress?.status === "COMPLETED";
  const instructions = locale === "es" ? lab.instructions.es : lab.instructions.en;
  const hints = locale === "es" ? lab.hints.es : lab.hints.en;
  const solution = locale === "es" ? lab.solution.es : lab.solution.en;
  const objectives = locale === "es" ? lab.objectives.es : lab.objectives.en;

  if (!progress || progress.status === "NOT_STARTED") {
    markAsStarted("LAB", lab.id);
  }

  const toggleStep = (step: number) => {
    setCompletedSteps((prev) => 
      prev.includes(step) 
        ? prev.filter((s) => s !== step)
        : [...prev, step]
    );
  };

  const handleComplete = () => {
    markAsCompleted("LAB", lab.id, 100);
    incrementXp(75);
    updateStats({
      labsCompleted: stats.labsCompleted + 1,
    });

    if (nextLab) {
      router.push(`/courses/level-0/labs/${nextLab.slug}`);
    } else {
      router.push("/courses/level-0/labs");
    }
  };

  const allStepsCompleted = completedSteps.length === instructions.length;

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/courses/level-0" className="hover:text-zinc-900 dark:hover:text-white">
            {t("roadmap.level")} 0
          </Link>
          <span>/</span>
          <Link href="/courses/level-0/labs" className="hover:text-zinc-900 dark:hover:text-white">
            {locale === "es" ? "Laboratorios" : "Labs"}
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white">
            {tBilingual(lab.title)}
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
          {/* Main content */}
          <div className="space-y-6">
            {/* Lab Header */}
            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="primary">
                      <FlaskConical className="mr-1 h-3 w-3" />
                      {locale === "es" ? "Lab" : "Lab"} {currentIndex + 1}
                    </Badge>
                    {isCompleted && (
                      <Badge variant="success">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        {t("progress.completed")}
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {tBilingual(lab.title)}
                  </h1>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {tBilingual(lab.description)}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-zinc-500">
                  <Clock className="h-5 w-5" />
                  <span>{lab.estimatedTime} {t("common.min")}</span>
                </div>
              </div>
            </Card>

            {/* Terminal */}
            <Card className="overflow-hidden p-0">
              <TerminalSimulator className="h-[400px]" />
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              {prevLab ? (
                <Link href={`/courses/level-0/labs/${prevLab.slug}`}>
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {locale === "es" ? "Lab anterior" : "Previous lab"}
                  </Button>
                </Link>
              ) : (
                <div />
              )}

              {nextLab ? (
                <Link href={`/courses/level-0/labs/${nextLab.slug}`}>
                  <Button variant="outline">
                    {locale === "es" ? "Siguiente lab" : "Next lab"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Link href="/courses/level-0/labs">
                  <Button variant="primary">
                    {locale === "es" ? "Volver a laboratorios" : "Back to labs"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Objectives */}
            <Card className="p-4">
              <div className="mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-500" />
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {locale === "es" ? "Objetivos" : "Objectives"}
                </h3>
              </div>
              <ul className="space-y-2">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    {obj}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Instructions */}
            <Card className="p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {locale === "es" ? "Instrucciones" : "Instructions"}
                </h3>
                <span className="text-sm text-zinc-500">
                  {completedSteps.length}/{instructions.length}
                </span>
              </div>
              <Progress 
                value={completedSteps.length} 
                max={instructions.length}
                size="sm"
                className="mb-4"
              />
              <ol className="space-y-3">
                {instructions.map((instr) => (
                  <li 
                    key={instr.step}
                    className={`rounded-lg border p-3 transition-all cursor-pointer ${
                      completedSteps.includes(instr.step)
                        ? "border-green-200 bg-green-50 dark:border-green-800/30 dark:bg-green-900/10"
                        : "border-zinc-200 dark:border-zinc-700 hover:border-purple-300 dark:hover:border-purple-700"
                    }`}
                    onClick={() => toggleStep(instr.step)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                        completedSteps.includes(instr.step)
                          ? "bg-green-500 text-white"
                          : "bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
                      }`}>
                        {completedSteps.includes(instr.step) ? "✓" : instr.step}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-zinc-900 dark:text-white">
                          {instr.instruction}
                        </p>
                        <p className="mt-1 text-xs text-zinc-500">
                          {locale === "es" ? "Resultado esperado: " : "Expected: "}
                          {instr.expectedResult}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </Card>

            {/* Hints */}
            <Card className="p-4">
              <button
                onClick={() => setShowHints(!showHints)}
                className="flex w-full items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    {locale === "es" ? "Pistas" : "Hints"}
                  </h3>
                </div>
                {showHints ? (
                  <ChevronUp className="h-5 w-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-zinc-400" />
                )}
              </button>
              {showHints && (
                <ul className="mt-3 space-y-2">
                  {hints.map((hint, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="text-yellow-500">💡</span>
                      {hint}
                    </li>
                  ))}
                </ul>
              )}
            </Card>

            {/* Solution */}
            <Card className="p-4">
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="flex w-full items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-500" />
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    {locale === "es" ? "Solución" : "Solution"}
                  </h3>
                </div>
                {showSolution ? (
                  <ChevronUp className="h-5 w-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-zinc-400" />
                )}
              </button>
              {showSolution && (
                <div className="mt-3 rounded-lg bg-zinc-100 p-3 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  {solution}
                </div>
              )}
            </Card>

            {/* Complete Button */}
            {!isCompleted && (
              <Button 
                variant="primary" 
                className="w-full"
                onClick={handleComplete}
                disabled={!allStepsCompleted}
              >
                <CheckCircle2 className="mr-2 h-4 w-4" />
                {allStepsCompleted 
                  ? (locale === "es" ? "Marcar como completado" : "Mark as completed")
                  : (locale === "es" ? "Completa todos los pasos" : "Complete all steps")
                }
              </Button>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
