import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useProgressStore } from "@/stores/progressStore";
import { getCourse } from "@/content/courses/registry";
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
  ArrowLeft,
} from "lucide-react";

export function CoursePage() {
  const { levelId = "level-0" } = useParams();
  const { t, tBilingual, locale } = useTranslation();
  const { getProgress, getModuleProgress } = useProgressStore();

  const course = getCourse(levelId);
  if (!course) {
    return <Navigate to="/roadmap" replace />;
  }

  const { module, lessons, labs, exam } = course;
  const moduleProgress = getModuleProgress(module.id);
  const completedLessons = lessons.filter(
    (l) => getProgress("LESSON", l.id)?.status === "COMPLETED"
  ).length;

  return (
    <div className="mx-auto max-w-4xl">
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
            {module.icon}
          </div>
          <div className="flex-1">
            <Badge variant="primary" className="mb-2">
              {t("roadmap.level")} {module.level}
            </Badge>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {tBilingual(module.title)}
            </h1>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              {tBilingual(module.description)}
            </p>
          </div>
        </div>
      </div>

      <Card className="mb-6 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-500">{t("dashboard.overallProgress")}</p>
            <p className="text-lg font-semibold text-zinc-900 dark:text-white">
              {completedLessons} / {lessons.length}{" "}
              {locale === "es" ? "lecciones" : "lessons"}
            </p>
          </div>
          <div className="w-32">
            <Progress value={moduleProgress} max={100} size="md" />
          </div>
        </div>
      </Card>

      <section className="mb-8">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-white">
          <BookOpen className="h-5 w-5 text-blue-500" />
          {locale === "es" ? "Lecciones" : "Lessons"}
        </h2>
        <div className="space-y-3">
          {lessons.map((lesson, index) => {
            const progress = getProgress("LESSON", lesson.id);
            const isCompleted = progress?.status === "COMPLETED";

            return (
              <Link
                key={lesson.id}
                to={`/courses/${levelId}/lessons/${lesson.slug}`}
              >
                <Card className="p-4 transition-all hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        isCompleted
                          ? "bg-green-100 dark:bg-green-900/30"
                          : "bg-blue-100 dark:bg-blue-900/30"
                      }`}
                    >
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

      {labs.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-white">
            <FlaskConical className="h-5 w-5 text-purple-500" />
            {locale === "es" ? "Laboratorios" : "Labs"}
          </h2>
          <Link to={`/courses/${levelId}/labs`}>
            <Card className="p-4 transition-all hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                  <FlaskConical className="h-6 w-6 text-purple-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-zinc-900 dark:text-white">
                    {labs.length}{" "}
                    {locale === "es"
                      ? "laboratorios disponibles"
                      : "labs available"}
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
      )}

      {exam && (
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-white">
            <GraduationCap className="h-5 w-5 text-green-500" />
            {locale === "es" ? "Examen Final" : "Final Exam"}
          </h2>
          <Link to={`/exams/${levelId}`}>
            <Card className="p-6 transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
                    <GraduationCap className="h-7 w-7 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {tBilingual(exam.title)}
                    </h3>
                    <p className="text-sm text-zinc-500">
                      {exam.questions.length}{" "}
                      {locale === "es" ? "preguntas" : "questions"} •{" "}
                      {locale === "es" ? "Requiere" : "Requires"}{" "}
                      {exam.passingScore}%{" "}
                      {locale === "es" ? "para aprobar" : "to pass"}
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
      )}
    </div>
  );
}
