"use client";

import { useUserStore } from "@/stores/userStore";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSelector } from "./LanguageSelector";
import { cn } from "@/lib/utils";
import { Flame, Zap, Bell } from "lucide-react";

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  const { t } = useTranslation();
  const { name, stats } = useUserStore();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/80 px-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="flex items-center gap-4">
        {title && (
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {title}
          </h1>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Stats Pills */}
        <div className="hidden items-center gap-3 md:flex">
          {/* XP */}
          <div
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5",
              "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
            )}
          >
            <Zap className="h-4 w-4" />
            <span className="text-sm font-semibold">{stats.totalXp} XP</span>
          </div>

          {/* Streak */}
          <div
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5",
              stats.streakDays > 0
                ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
            )}
          >
            <Flame className="h-4 w-4" />
            <span className="text-sm font-semibold">
              {stats.streakDays} {t("dashboard.days")}
            </span>
          </div>

          {/* Level */}
          <div
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5",
              "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
            )}
          >
            <span className="text-sm font-semibold">
              {t("roadmap.level")} {stats.level}
            </span>
          </div>
        </div>

        {/* Notifications */}
        <button
          className={cn(
            "relative rounded-lg p-2",
            "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900",
            "dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
            "transition-colors"
          )}
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>

        {/* Language Selector */}
        <LanguageSelector />

        {/* User Avatar */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="flex h-full w-full items-center justify-center text-sm font-bold text-white">
              {name.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
