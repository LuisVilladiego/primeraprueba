import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useProgressStore } from "@/stores/progressStore";
import { useUserStore } from "@/stores/userStore";
import { level0Lessons } from "@/content/modules/level-0";
import { lesson01 } from "@/content/modules/level-0/lessons/lesson-0-1";
import { lesson02 } from "@/content/modules/level-0/lessons/lesson-0-2";
import { lesson03 } from "@/content/modules/level-0/lessons/lesson-0-3";
import { lesson04 } from "@/content/modules/level-0/lessons/lesson-0-4";
import { lesson05 } from "@/content/modules/level-0/lessons/lesson-0-5";
import { lesson06 } from "@/content/modules/level-0/lessons/lesson-0-6";
import { lesson07 } from "@/content/modules/level-0/lessons/lesson-0-7";
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
  BookOpen
} from "lucide-react";
import type { ContentBlock } from "@/types";

const lessonsData: Record<string, typeof lesson01> = {
  "what-is-a-computer": lesson01,
  "what-is-an-operating-system": lesson02,
  "processes-and-memory": lesson03,
  "storage-and-files": lesson04,
  "user-interfaces": lesson05,
  "linux-history": lesson06,
  "linux-vs-windows-vs-macos": lesson07,
};

function ContentBlockRenderer({ block, locale }: { block: ContentBlock; locale: string }) {
  const content = block.content[locale as "es" | "en"];
  
  const blockStyles: Record<string, { icon: typeof Info; bg: string; border: string }> = {
    KEY_CONCEPT: { icon: Lightbulb, bg: "bg-blue-50 dark:bg-blue-900/20", border: "border-blue-200 dark:border-blue-800" },
    TIP: { icon: Lightbulb, bg: "bg-green-50 dark:bg-green-900/20", border: "border-green-200 dark:border-green-800" },
    WARNING: { icon: AlertTriangle, bg: "bg-yellow-50 dark:bg-yellow-900/20", border: "border-yellow-200 dark:border-yellow-800" },
    CODE: { icon: Code, bg: "bg-zinc-100 dark:bg-zinc-800", border: "border-zinc-200 dark:border-zinc-700" },
  };

  const style = blockStyles[block.type];

  if (block.type === "TEXT") {
    return (
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        {content.title && <h2 className="text-xl font-semibold">{content.title}</h2>}
        <div className="whitespace-pre-wrap">{content.text}</div>
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
            <div className="whitespace-pre-wrap text-sm">{content.text}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
      {content.title && <h3 className="font-semibold">{content.title}</h3>}
      <div className="whitespace-pre-wrap">{content.text}</div>
    </div>
  );
}

export function LessonPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, tBilingual, locale } = useTranslation();
  const { markAsCompleted, markAsStarted, getProgress } = useProgressStore();
  const { updateStats, incrementXp, stats } = useUserStore();

  const lesson = lessonsData[slug || ""] || lesson01;
  const currentIndex = level0Lessons.findIndex((l) => l.slug === slug);
  const prevLesson = currentIndex > 0 ? level0Lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < level0Lessons.length - 1 ? level0Lessons[currentIndex + 1] : null;

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
      navigate(`/courses/level-0/lessons/${nextLesson.slug}`);
    } else {
      navigate("/courses/level-0");
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500">
        <Link to="/courses/level-0" className="hover:text-zinc-900 dark:hover:text-white">
          {t("roadmap.level")} 0
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-white">
          {tBilingual(lesson.title)}
        </span>
      </div>

      {/* Lesson Header */}
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
            <span>{lesson.duration} {t("common.min")}</span>
          </div>
        </div>

        <div className="mt-4">
          <Progress
            value={currentIndex + 1}
            max={level0Lessons.length}
            size="sm"
            showLabel
            label={`${t("learning.lesson")} ${currentIndex + 1}/${level0Lessons.length}`}
          />
        </div>
      </Card>

      {/* Lesson Content */}
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

      {/* Navigation */}
      <div className="flex items-center justify-between">
        {prevLesson ? (
          <Link to={`/courses/level-0/lessons/${prevLesson.slug}`}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("learning.previousLesson")}
            </Button>
          </Link>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <Link to={`/courses/level-0/lessons/${nextLesson.slug}`}>
            <Button variant="outline">
              {t("learning.nextLesson")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Link to="/courses/level-0">
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
