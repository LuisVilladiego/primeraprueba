"use client";

import Link from "next/link";
import { MainLayout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/Progress";
import { Badge } from "@/components/ui/Badge";
import { useTranslation } from "@/hooks/useTranslation";
import { useProgressStore } from "@/stores/progressStore";
import { level0Lessons, level0Labs, level0Exam, level0Module } from "@/content/modules/level-0";
import {
  BookOpen,
  FlaskConical,
  GraduationCap,
  Clock,
  CheckCircle2,
  Lock,
  Play,
  ArrowRight,
} from "lucide-react";

export default function Level0CoursePage() {
  const { t, tBilingual, locale } = useTranslation();
  const { getProgress } = useProgressStore();

  const moduleProgress = getProgress("MODULE", "level-0");
  const overallProgress = moduleProgress?.score || 0;

  const getLessonStatus = (lessonId: string) => {
    const progress = getProgress("LESSON", lessonId);
    if (!progress) return "available";
    if (progress.status === "COMPLETED" || progress.status === "MASTERED") return "completed";
    if (progress.status === "IN_PROGRESS") return "in_progress";
    return "available";
  };

  const getLabStatus = (labId: string) => {
    const progress = getProgress("LAB", labId);
    if (!progress) return "available";
    if (progress.status === "COMPLETED" || progress.status === "MASTERED") return "completed";
    if (progress.status === "IN_PROGRESS") return "in_progress";
    return "available";
  };

  const allLessonsCompleted = level0Lessons.every(
    (lesson) => getLessonStatus(lesson.id) === "completed"
  );

  const allLabsCompleted = level0Labs.every(
    (lab) => getLabStatus(lab.id) === "completed"
  );

  const examAvailable = allLessonsCompleted && allLabsCompleted;

  return (
    <MainLayout title={`${t("roadmap.level")} 0 - ${tBilingual(level0Module.title)}`}>
      <div className="space-y-8">
        {/* Module Header */}
        <div className="rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 p-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Badge className="bg-white/20 text-white">
                  {t("roadmap.level")} 0
                </Badge>
              </div>
              <h1 className="text-3xl font-bold">{tBilingual(level0Module.title)}</h1>
              <p className="mt-2 max-w-2xl text-white/90">
                {tBilingual(level0Module.description)}
              </p>
            </div>
            <div className="text-6xl">{level0Module.icon}</div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            <div className="rounded-lg bg-white/10 p-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm opacity-80">{t("learning.lesson")}s</span>
              </div>
              <p className="mt-1 text-2xl font-bold">{level0Lessons.length}</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <div className="flex items-center gap-2">
                <FlaskConical className="h-5 w-5" />
                <span className="text-sm opacity-80">{t("learning.lab")}s</span>
              </div>
              <p className="mt-1 text-2xl font-bold">{level0Labs.length}</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <span className="text-sm opacity-80">{t("learning.exam")}</span>
              </div>
              <p className="mt-1 text-2xl font-bold">{level0Exam.questions.length} {t("exam.questions")}</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm opacity-80">{t("learning.duration")}</span>
              </div>
              <p className="mt-1 text-2xl font-bold">
                {level0Lessons.reduce((acc, l) => acc + l.duration, 0)} {t("common.min")}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Progress
              value={overallProgress}
              size="lg"
              variant="default"
              showLabel
              label={t("dashboard.overallProgress")}
              className="[&>div:first-child]:text-white [&>div>span]:text-white/80"
            />
          </div>
        </div>

        {/* Lessons Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              {t("learning.lesson")}s
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {level0Lessons.map((lesson, index) => {
                const status = getLessonStatus(lesson.id);
                const isCompleted = status === "completed";
                const isInProgress = status === "in_progress";

                return (
                  <Link
                    key={lesson.id}
                    href={`/courses/level-0/lessons/${lesson.slug}`}
                    className="group flex items-center gap-4 rounded-lg border border-zinc-200 p-4 transition-all hover:border-blue-300 hover:bg-blue-50/50 dark:border-zinc-700 dark:hover:border-blue-800 dark:hover:bg-blue-900/10"
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                        isCompleted
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : isInProgress
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-zinc-900 dark:text-white">
                        {tBilingual(lesson.title)}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {tBilingual(lesson.description)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {lesson.duration} {t("common.min")}
                      </span>
                      {isCompleted ? (
                        <Badge variant="success">{t("progress.completed")}</Badge>
                      ) : isInProgress ? (
                        <Badge variant="primary">{t("progress.inProgress")}</Badge>
                      ) : (
                        <Play className="h-5 w-5 text-zinc-400 group-hover:text-blue-600" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Labs Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5" />
              {t("learning.lab")}s
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {level0Labs.map((lab, index) => {
                const status = getLabStatus(lab.id);
                const isCompleted = status === "completed";

                return (
                  <Link
                    key={lab.id}
                    href={`/labs/level-0/${lab.slug}`}
                    className="group flex items-center gap-4 rounded-lg border border-zinc-200 p-4 transition-all hover:border-purple-300 hover:bg-purple-50/50 dark:border-zinc-700 dark:hover:border-purple-800 dark:hover:bg-purple-900/10"
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        isCompleted
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <FlaskConical className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-zinc-900 dark:text-white">
                        LAB {index + 1}: {tBilingual(lab.title)}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {tBilingual(lab.description)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {lab.estimatedTime} {t("common.min")}
                      </span>
                      {isCompleted ? (
                        <Badge variant="success">{t("progress.completed")}</Badge>
                      ) : (
                        <Badge variant="purple">{lab.difficulty}</Badge>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Exam Section */}
        <Card className={!examAvailable ? "opacity-70" : ""}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              {t("exam.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between rounded-lg border border-zinc-200 p-6 dark:border-zinc-700">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                    examAvailable
                      ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                      : "bg-zinc-100 text-zinc-400 dark:bg-zinc-800"
                  }`}
                >
                  {examAvailable ? (
                    <GraduationCap className="h-7 w-7" />
                  ) : (
                    <Lock className="h-7 w-7" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
                    {tBilingual(level0Exam.title)}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {level0Exam.questions.length} {t("exam.questions")} •{" "}
                    {t("exam.passingScore")}: {level0Exam.passingScore}%
                  </p>
                  {!examAvailable && (
                    <p className="mt-1 text-sm text-orange-600 dark:text-orange-400">
                      {locale === "es"
                        ? "Completa todas las lecciones y laboratorios para desbloquear"
                        : "Complete all lessons and labs to unlock"}
                    </p>
                  )}
                </div>
              </div>
              <Link href={examAvailable ? "/exams/level-0" : "#"}>
                <Button
                  variant={examAvailable ? "primary" : "secondary"}
                  disabled={!examAvailable}
                >
                  {examAvailable ? t("exam.startExam") : t("roadmap.locked")}
                  {examAvailable && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
