"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useUserStore } from "@/stores/userStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ProgressRing } from "@/components/ui/Progress";
import { formatTimeSpent } from "@/lib/utils";
import {
  BookOpen,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  FolderKanban,
  Flame,
  Clock,
  Sparkles,
} from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subtext?: string;
  color: string;
}

function StatCard({ icon, label, value, subtext, color }: StatCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-800/50">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${color}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
        <p className="text-lg font-bold text-zinc-900 dark:text-white">
          {value}
          {subtext && (
            <span className="ml-1 text-sm font-normal text-zinc-500">
              {subtext}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export function ProgressOverview() {
  const { t } = useTranslation();
  const { stats } = useUserStore();

  const overallProgress = 15; // TODO: Calculate from actual progress

  return (
    <div className="space-y-6">
      {/* Main Progress Card */}
      <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">{t("dashboard.overallProgress")}</h2>
              <p className="text-blue-100">
                {t("roadmap.level")} {stats.level} - Linux Fundamentals
              </p>
            </div>
            <ProgressRing
              value={overallProgress}
              size={100}
              strokeWidth={8}
              className="text-white [&_circle:first-child]:text-white/20 [&_circle:last-child]:text-white"
            />
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<BookOpen className="h-5 w-5 text-white" />}
          label={t("dashboard.lessonsCompleted")}
          value={stats.lessonsCompleted}
          color="bg-blue-500"
        />
        <StatCard
          icon={<CheckCircle2 className="h-5 w-5 text-white" />}
          label={t("dashboard.exercisesCompleted")}
          value={stats.exercisesCompleted}
          color="bg-green-500"
        />
        <StatCard
          icon={<FlaskConical className="h-5 w-5 text-white" />}
          label={t("dashboard.labsCompleted")}
          value={stats.labsCompleted}
          color="bg-purple-500"
        />
        <StatCard
          icon={<GraduationCap className="h-5 w-5 text-white" />}
          label={t("dashboard.examsPassed")}
          value={stats.examsPassed}
          color="bg-orange-500"
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<FolderKanban className="h-5 w-5 text-white" />}
          label={t("dashboard.projectsCompleted")}
          value={stats.projectsCompleted}
          color="bg-pink-500"
        />
        <StatCard
          icon={<Sparkles className="h-5 w-5 text-white" />}
          label={t("dashboard.skillsAcquired")}
          value={stats.skillsAcquired}
          color="bg-yellow-500"
        />
        <StatCard
          icon={<Flame className="h-5 w-5 text-white" />}
          label={t("dashboard.studyStreak")}
          value={stats.streakDays}
          subtext={t("dashboard.days")}
          color="bg-red-500"
        />
        <StatCard
          icon={<Clock className="h-5 w-5 text-white" />}
          label={t("dashboard.timeStudied")}
          value={formatTimeSpent(stats.totalStudyTime * 60)}
          color="bg-cyan-500"
        />
      </div>
    </div>
  );
}
