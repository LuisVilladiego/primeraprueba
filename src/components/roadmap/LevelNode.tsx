"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/Progress";
import { cn } from "@/lib/utils";
import { BookOpen, FlaskConical, GraduationCap, FolderKanban, Lock, ChevronRight } from "lucide-react";
import type { RoadmapLevel } from "./RoadmapView";

type LevelStatus = "locked" | "available" | "in_progress" | "completed" | "mastered";

interface LevelNodeProps {
  level: RoadmapLevel;
  status: LevelStatus;
  progress: number;
}

const statusConfig: Record<
  LevelStatus,
  {
    bgClass: string;
    borderClass: string;
    textClass: string;
    iconBgClass: string;
  }
> = {
  locked: {
    bgClass: "bg-zinc-100 dark:bg-zinc-800/50",
    borderClass: "border-zinc-200 dark:border-zinc-700",
    textClass: "text-zinc-400 dark:text-zinc-500",
    iconBgClass: "bg-zinc-200 dark:bg-zinc-700",
  },
  available: {
    bgClass: "bg-yellow-50 dark:bg-yellow-900/10",
    borderClass: "border-yellow-200 dark:border-yellow-800",
    textClass: "text-zinc-900 dark:text-white",
    iconBgClass: "bg-yellow-100 dark:bg-yellow-900/30",
  },
  in_progress: {
    bgClass: "bg-blue-50 dark:bg-blue-900/10",
    borderClass: "border-blue-300 dark:border-blue-700",
    textClass: "text-zinc-900 dark:text-white",
    iconBgClass: "bg-blue-100 dark:bg-blue-900/30",
  },
  completed: {
    bgClass: "bg-green-50 dark:bg-green-900/10",
    borderClass: "border-green-300 dark:border-green-700",
    textClass: "text-zinc-900 dark:text-white",
    iconBgClass: "bg-green-100 dark:bg-green-900/30",
  },
  mastered: {
    bgClass: "bg-purple-50 dark:bg-purple-900/10",
    borderClass: "border-purple-300 dark:border-purple-700",
    textClass: "text-zinc-900 dark:text-white",
    iconBgClass: "bg-purple-100 dark:bg-purple-900/30",
  },
};

export function LevelNode({ level, status, progress }: LevelNodeProps) {
  const { t, tBilingual } = useTranslation();
  const config = statusConfig[status];

  const getButtonText = () => {
    switch (status) {
      case "locked":
        return t("roadmap.prerequisitesRequired");
      case "available":
        return t("roadmap.startModule");
      case "in_progress":
        return t("roadmap.continueModule");
      case "completed":
      case "mastered":
        return t("roadmap.reviewModule");
    }
  };

  const content = (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-xl border-2 p-5 transition-all",
        config.bgClass,
        config.borderClass,
        status !== "locked" && "hover:shadow-lg hover:scale-[1.02]"
      )}
    >
      {/* Level Badge */}
      <div className="absolute -top-3 left-4">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold",
            status === "locked"
              ? "bg-zinc-300 text-zinc-600 dark:bg-zinc-600 dark:text-zinc-300"
              : "bg-blue-600 text-white"
          )}
        >
          {t("roadmap.level")} {level.level}
        </span>
      </div>

      {/* Header */}
      <div className="flex items-start gap-3 pt-2">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl text-2xl",
            config.iconBgClass
          )}
        >
          {status === "locked" ? <Lock className="h-6 w-6 text-zinc-400" /> : level.icon}
        </div>
        <div className="flex-1">
          <h3
            className={cn(
              "font-bold",
              config.textClass,
              status === "locked" && "opacity-50"
            )}
          >
            {tBilingual(level.title)}
          </h3>
          <p
            className={cn(
              "mt-1 text-sm",
              status === "locked"
                ? "text-zinc-400 dark:text-zinc-500"
                : "text-zinc-600 dark:text-zinc-400"
            )}
          >
            {tBilingual(level.description)}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 flex flex-wrap gap-3">
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          <BookOpen className="h-3.5 w-3.5" />
          <span>{level.lessonsCount}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          <FlaskConical className="h-3.5 w-3.5" />
          <span>{level.labsCount}</span>
        </div>
        {level.hasExam && (
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>{t("learning.exam")}</span>
          </div>
        )}
        {level.hasProject && (
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
            <FolderKanban className="h-3.5 w-3.5" />
            <span>{t("learning.project")}</span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {status !== "locked" && (
        <div className="mt-4">
          <Progress
            value={progress}
            size="sm"
            variant={
              status === "mastered"
                ? "gradient"
                : status === "completed"
                ? "success"
                : "default"
            }
            showLabel
          />
        </div>
      )}

      {/* Action Button */}
      <div className="mt-4 pt-2">
        <Button
          variant={status === "locked" ? "secondary" : status === "in_progress" ? "primary" : "outline"}
          size="sm"
          className="w-full"
          disabled={status === "locked"}
        >
          {getButtonText()}
          {status !== "locked" && <ChevronRight className="ml-1 h-4 w-4" />}
        </Button>
      </div>
    </div>
  );

  if (status === "locked") {
    return content;
  }

  return <Link href={level.href}>{content}</Link>;
}
