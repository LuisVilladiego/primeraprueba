"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { MainLayout } from "@/components/layout";
import { LessonContent } from "@/components/learning";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { useTranslation } from "@/hooks/useTranslation";
import { useProgressStore } from "@/stores/progressStore";
import { useUserStore } from "@/stores/userStore";
import { level0Lessons } from "@/content/modules/level-0";
import { lesson01 } from "@/content/modules/level-0/lessons/lesson-0-1";
import { ArrowLeft, ArrowRight, Clock, CheckCircle2 } from "lucide-react";

const lessonsData: Record<string, typeof lesson01> = {
  "what-is-a-computer": lesson01,
};

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const { t, tBilingual, locale } = useTranslation();
  const { markAsCompleted, markAsStarted, getProgress } = useProgressStore();
  const { updateStats, incrementXp, stats } = useUserStore();

  const slug = params.slug as string;
  const lesson = lessonsData[slug] || lesson01;

  const currentIndex = level0Lessons.findIndex((l) => l.slug === slug);
  const prevLesson = currentIndex > 0 ? level0Lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < level0Lessons.length - 1 ? level0Lessons[currentIndex + 1] : null;

  const progress = getProgress("LESSON", lesson.id);
  const isCompleted = progress?.status === "COMPLETED" || progress?.status === "MASTERED";

  const handleComplete = () => {
    markAsCompleted("LESSON", lesson.id, 100);
    incrementXp(50);
    updateStats({
      lessonsCompleted: stats.lessonsCompleted + 1,
    });

    if (nextLesson) {
      router.push(`/courses/level-0/lessons/${nextLesson.slug}`);
    } else {
      router.push("/courses/level-0");
    }
  };

  if (!progress || progress.status === "NOT_STARTED") {
    markAsStarted("LESSON", lesson.id);
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/courses/level-0" className="hover:text-zinc-900 dark:hover:text-white">
            {t("roadmap.level")} 0
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white">
            {tBilingual(lesson.title)}
          </span>
        </div>

        {/* Lesson Header */}
        <div className="mb-8 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800/50">
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="primary">
                  {t("learning.lesson")} {currentIndex + 1}
                </Badge>
                {isCompleted && (
                  <Badge variant="success">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    {t("progress.completed")}
                  </Badge>
                )}
              </div>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {tBilingual(lesson.title)}
              </h1>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {tBilingual(lesson.description)}
              </p>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <Clock className="h-5 w-5" />
              <span>{lesson.duration} {t("common.min")}</span>
            </div>
          </div>

          {/* Lesson Progress */}
          <div className="mt-4">
            <Progress
              value={currentIndex + 1}
              max={level0Lessons.length}
              size="sm"
              showLabel
              label={`${t("learning.lesson")} ${currentIndex + 1}/${level0Lessons.length}`}
            />
          </div>
        </div>

        {/* Lesson Content */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800/50">
          <LessonContent
            contentBlocks={lesson.contentBlocks}
            exercises={lesson.exercises}
            quiz={lesson.quiz}
            onComplete={handleComplete}
          />
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {prevLesson ? (
            <Link href={`/courses/level-0/lessons/${prevLesson.slug}`}>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("learning.previousLesson")}
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link href={`/courses/level-0/lessons/${nextLesson.slug}`}>
              <Button variant="outline">
                {t("learning.nextLesson")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Link href="/courses/level-0">
              <Button variant="primary">
                {locale === "es" ? "Volver al curso" : "Back to course"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
