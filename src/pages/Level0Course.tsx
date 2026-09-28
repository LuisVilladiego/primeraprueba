import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useProgressStore } from "@/stores/progressStore";
import { level0Module, level0Lessons, level0Labs } from "@/content/modules/level-0";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { Button } from "@/components/ui/Button";
import { 
  BookOpen, 
  FlaskConical, 
  GraduationCap, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  ArrowLeft
} from "lucide-react";

export function Level0Course() {
  const { t, tBilingual, locale } = useTranslation();
  const { getProgress, getModuleProgress } = useProgressStore();

  const moduleProgress = getModuleProgress("level-0");
  const completedLessons = level0Lessons.filter(
    (l) => getProgress("LESSON", l.id)?.status === "COMPLETED"
  ).length;

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <Link 
          to="/roadmap" 
          className="mb-4 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {locale === "es" ? "Volver al Roadmap" : "Back to Roadmap"}
        </Link>
        
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-3xl">
            {level0Module.icon}
          </div>
          <div className="flex-1">
            <Badge variant="primary" className="mb-2">
              {t("roadmap.level")} {level0Module.level}
            </Badge>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {tBilingual(level0Module.title)}
            </h1>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              {tBilingual(level0Module.description)}
            </p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <Card className="mb-6 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-500">{t("dashboard.overallProgress")}</p>
            <p className="text-lg font-semibold text-zinc-900 dark:text-white">
              {completedLessons} / {level0Lessons.length} {locale === "es" ? "lecciones" : "lessons"}
            </p>
          </div>
          <div className="w-32">
            <Progress value={moduleProgress} max={100} size="md" />
          </div>
        </div>
      </Card>

      {/* Lessons */}
      <section className="mb-8">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-white">
          <BookOpen className="h-5 w-5 text-blue-500" />
          {locale === "es" ? "Lecciones" : "Lessons"}
        </h2>
        <div className="space-y-3">
          {level0Lessons.map((lesson, index) => {
            const progress = getProgress("LESSON", lesson.id);
            const isCompleted = progress?.status === "COMPLETED";

            return (
              <Link key={lesson.id} to={`/courses/level-0/lessons/${lesson.slug}`}>
                <Card className="p-4 transition-all hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      isCompleted 
                        ? "bg-green-100 dark:bg-green-900/30" 
                        : "bg-blue-100 dark:bg-blue-900/30"
                    }`}>
                      {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                          {index + 1}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-zinc-900 dark:text-white">
                        {tBilingual(lesson.title)}
                      </h3>
                      <p className="text-sm text-zinc-500">
                        {tBilingual(lesson.description)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Clock className="h-4 w-4" />
                      {lesson.duration} {t("common.min")}
                    </div>
                    <ChevronRight className="h-5 w-5 text-zinc-400" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Labs */}
      <section className="mb-8">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-white">
          <FlaskConical className="h-5 w-5 text-purple-500" />
          {locale === "es" ? "Laboratorios" : "Labs"}
        </h2>
        <Link to="/courses/level-0/labs">
          <Card className="p-4 transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                <FlaskConical className="h-6 w-6 text-purple-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-zinc-900 dark:text-white">
                  {level0Labs.length} {locale === "es" ? "laboratorios disponibles" : "labs available"}
                </h3>
                <p className="text-sm text-zinc-500">
                  {locale === "es" 
                    ? "Practica lo aprendido con ejercicios prácticos" 
                    : "Practice what you learned with hands-on exercises"}
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-zinc-400" />
            </div>
          </Card>
        </Link>
      </section>

      {/* Exam */}
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-white">
          <GraduationCap className="h-5 w-5 text-green-500" />
          {locale === "es" ? "Examen Final" : "Final Exam"}
        </h2>
        <Link to="/exams/level-0">
          <Card className="p-6 transition-all hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
                  <GraduationCap className="h-7 w-7 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {locale === "es" ? "Examen de Fundamentos" : "Fundamentals Exam"}
                  </h3>
                  <p className="text-sm text-zinc-500">
                    {locale === "es" 
                      ? "20 preguntas • Requiere 80% para aprobar" 
                      : "20 questions • Requires 80% to pass"}
                  </p>
                </div>
              </div>
              <Button variant="primary">
                {locale === "es" ? "Tomar Examen" : "Take Exam"}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </Link>
      </section>
    </div>
  );
}
