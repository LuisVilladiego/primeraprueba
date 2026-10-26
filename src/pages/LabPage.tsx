import { useParams, Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useActiveCourse } from "@/content/useActiveCourse";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { 
  ArrowLeft, 
  FlaskConical, 
  Clock, 
  Target,
  Lightbulb
} from "lucide-react";

export function LabPage() {
  const { slug } = useParams();
  const { tBilingual, locale } = useTranslation();
  const course = useActiveCourse();
  if (!course) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <p className="text-zinc-500">
          {locale === "es" ? "Nivel no encontrado" : "Level not found"}
        </p>
      </div>
    );
  }

  const lab = course.labs.find((item) => item.slug === slug);

  if (!lab) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <p className="text-zinc-500">
          {locale === "es" ? "Laboratorio no encontrado" : "Lab not found"}
        </p>
      </div>
    );
  }

  const objectives = locale === "es" ? lab.objectives.es : lab.objectives.en;
  const instructions = locale === "es" ? lab.instructions.es : lab.instructions.en;
  const hints = locale === "es" ? lab.hints.es : lab.hints.en;

  return (
    <div className="mx-auto max-w-4xl">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500">
        <Link to={course.coursePath} className="hover:text-zinc-900 dark:hover:text-white">
          {locale === "es" ? `Nivel ${course.level}` : `Level ${course.level}`}
        </Link>
        <span>/</span>
        <Link to={course.labsPath} className="hover:text-zinc-900 dark:hover:text-white">
          Labs
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-white">
          {tBilingual(lab.title)}
        </span>
      </div>

      {/* Header */}
      <Card className="mb-6 p-6">
        <div className="flex items-start justify-between">
          <div>
            <Badge variant="primary" className="mb-2">
              <FlaskConical className="mr-1 h-3 w-3" />
              Lab
            </Badge>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {tBilingual(lab.title)}
            </h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {tBilingual(lab.description)}
            </p>
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <Clock className="h-5 w-5" />
            <span>{lab.estimatedTime} min</span>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
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
                <span className="mt-1 text-purple-500">•</span>
                {obj}
              </li>
            ))}
          </ul>
        </Card>

        {/* Hints */}
        <Card className="p-4">
          <div className="mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              {locale === "es" ? "Pistas" : "Hints"}
            </h3>
          </div>
          <ul className="space-y-2">
            {hints.map((hint, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-yellow-500">💡</span>
                {hint}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Instructions */}
      <Card className="mt-6 p-4">
        <h3 className="mb-4 font-semibold text-zinc-900 dark:text-white">
          {locale === "es" ? "Instrucciones" : "Instructions"}
        </h3>
        <ol className="space-y-4">
          {instructions.map((instr) => (
            <li key={instr.step} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                {instr.step}
              </div>
              <div className="flex-1">
                <p className="font-medium text-zinc-900 dark:text-white">
                  {instr.instruction}
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  {locale === "es" ? "Resultado esperado: " : "Expected: "}
                  {instr.expectedResult}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Card>

      {lab.validationCriteria.length > 0 && (
        <Card className="mt-6 p-6">
          <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">
            {locale === "es" ? "Se considera hecho cuando" : "It counts as done when"}
          </h2>
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            {lab.validationCriteria.map((criterion) => (
              <li key={criterion.check}>
                <span className="font-mono text-xs text-zinc-500">{criterion.check}</span>
                <span> — {criterion.expected}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Link to Terminal */}
      <Card className="mt-6 p-4">
        <div className="text-center">
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            {locale === "es" 
              ? "Abre la terminal para completar este laboratorio" 
              : "Open the terminal to complete this lab"}
          </p>
          <Link 
            to="/terminal" 
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
          >
            {locale === "es" ? "Abrir Terminal" : "Open Terminal"}
          </Link>
        </div>
      </Card>
    </div>
  );
}
