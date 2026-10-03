import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useProgressStore } from "@/stores/progressStore";
import { useUserStore } from "@/stores/userStore";
import { getCourse } from "@/content/courses/registry";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  Info,
  Code,
  BookOpen,
} from "lucide-react";
import type { ContentBlock } from "@/types";

function ContentBlockRenderer({ block, locale }: { block: ContentBlock; locale: string }) {
  const content = block.content[locale as "es" | "en"];

  const blockStyles: Record<string, { icon: typeof Info; bg: string; border: string }> = {
    KEY_CONCEPT: {
      icon: Lightbulb,
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800",
    },
    TIP: {
      icon: Lightbulb,
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800",
    },
    WARNING: {
      icon: AlertTriangle,
      bg: "bg-yellow-50 dark:bg-yellow-900/20",
      border: "border-yellow-200 dark:border-yellow-800",
    },
    CODE: {
      icon: Code,
      bg: "bg-zinc-100 dark:bg-zinc-800",
      border: "border-zinc-200 dark:border-zinc-700",
    },
  };

  const style = blockStyles[block.type];

  if (block.type === "TEXT") {
    return (
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        {content.title && <h2 className="text-xl font-semibold">{content.title}</h2>}
        <div className="whitespace-pre-wrap">{content.text || content.code}</div>
      </div>
    );
  }

  if (style) {
    const Icon = style.icon;
    return (
      <div className={`rounded-lg border p-4 ${style.bg} ${style.border}`}>
        <div className="flex items-start gap-3">
          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-current opacity-70" />
          <div>
            {content.title && <h3 className="font-semibold">{content.title}</h3>}
            <div className="whitespace-pre-wrap text-sm">
              {content.text || content.code}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
      {content.title && <h3 className="font-semibold">{content.title}</h3>}
      <div className="whitespace-pre-wrap">{content.text || content.code}</div>
    </div>
  );
}

export function LessonPage() {
  const { levelId = "level-0", slug } = useParams();
  const navigate = useNavigate();
  const { t, tBilingual, locale } = useTranslation();
  const { markAsCompleted, markAsStarted, getProgress } = useProgressStore();
  const { updateStats, incrementXp, stats } = useUserStore();

  const course = getCourse(levelId);
  if (!course) {
    return <Navigate to="/roadmap" replace />;
  }

  const lesson = (slug && course.lessonBySlug[slug]) || course.lessons[0];
  const currentIndex = course.lessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < course.lessons.length - 1 ? course.lessons[currentIndex + 1] : null;

  const progress = getProgress("LESSON", lesson.id);
  const isCompleted = progress?.status === "COMPLETED" || progress?.status === "MASTERED";

  if (!progress || progress.status === "NOT_STARTED") {
    markAsStarted("LESSON", lesson.id);
  }

  const handleComplete = () => {
    markAsCompleted("LESSON", lesson.id, 100);
    incrementXp(50);
    updateStats({
      lessonsCompleted: stats.lessonsCompleted + 1,
    });

    if (nextLesson) {
      navigate(`/courses/${levelId}/lessons/${nextLesson.slug}`);
    } else {
      navigate(`/courses/${levelId}`);
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500">
        <Link
          to={`/courses/${levelId}`}
          className="hover:text-zinc-900 dark:hover:text-white"
        >
          {t("roadmap.level")} {course.module.level}
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-white">{tBilingual(lesson.title)}</span>
      </div>

      <Card className="mb-8 p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="primary">
                <BookOpen className="mr-1 h-3 w-3" />
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
            <span>
              {lesson.duration} {t("common.min")}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <Progress
            value={currentIndex + 1}
            max={course.lessons.length}
            size="sm"
            showLabel
            label={`${t("learning.lesson")} ${currentIndex + 1}/${course.lessons.length}`}
          />
        </div>
      </Card>

      <Card className="mb-8 p-6">
        <div className="space-y-6">
          {lesson.contentBlocks.map((block) => (
            <ContentBlockRenderer key={block.id} block={block} locale={locale} />
          ))}
        </div>

        {!isCompleted && (
          <div className="mt-8 flex justify-center">
            <Button variant="primary" size="lg" onClick={handleComplete}>
              <CheckCircle2 className="mr-2 h-5 w-5" />
              {locale === "es" ? "Marcar como completada" : "Mark as completed"}
            </Button>
          </div>
        )}
      </Card>

      <div className="flex items-center justify-between">
        {prevLesson ? (
          <Link to={`/courses/${levelId}/lessons/${prevLesson.slug}`}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("learning.previousLesson")}
            </Button>
          </Link>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <Link to={`/courses/${levelId}/lessons/${nextLesson.slug}`}>
            <Button variant="outline">
              {t("learning.nextLesson")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Link to={`/courses/${levelId}`}>
            <Button variant="primary">
              {locale === "es" ? "Volver al curso" : "Back to course"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
