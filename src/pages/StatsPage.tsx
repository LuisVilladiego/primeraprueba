import { useMemo } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useUserStore } from "@/stores/userStore";
import { useProgressStore } from "@/stores/progressStore";
import { useAchievementsStore, achievements as achievementsList } from "@/stores/achievementsStore";
import { useCommandHistoryStore } from "@/stores/commandHistoryStore";
import { Card } from "@/components/ui/Card";
import { ProgressRing } from "@/components/ui/ProgressRing";
import {
  BarChart3,
  TrendingUp,
  Clock,
  Terminal,
  BookOpen,
  Trophy,
  Target,
  Flame,
  Star,
  Award,
  Zap,
  Calendar,
} from "lucide-react";

export function StatsPage() {
  const { locale } = useTranslation();
  const { stats, commandsExecuted, todayStudyTime, longestStreak, weeklyActivity } = useUserStore();
  const { getModuleProgress } = useProgressStore();
  const { unlockedAchievements } = useAchievementsStore();
  const { getCommandStats } = useCommandHistoryStore();

  const commandStats = useMemo(() => getCommandStats(), [getCommandStats]);
  const level0Progress = getModuleProgress("level-0");

  const totalAchievements = achievementsList.length;
  const achievementsProgress = (unlockedAchievements.length / totalAchievements) * 100;

  const daysOfWeek = locale === "es" 
    ? ["L", "M", "X", "J", "V", "S", "D"]
    : ["M", "T", "W", "T", "F", "S", "S"];

  const statCards = [
    {
      icon: Star,
      label: locale === "es" ? "XP Total" : "Total XP",
      value: stats.totalXp.toLocaleString(),
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    },
    {
      icon: Zap,
      label: locale === "es" ? "Nivel Actual" : "Current Level",
      value: stats.level.toString(),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      icon: Flame,
      label: locale === "es" ? "Racha Actual" : "Current Streak",
      value: `${stats.streakDays} ${locale === "es" ? "días" : "days"}`,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      icon: Clock,
      label: locale === "es" ? "Tiempo de Estudio" : "Study Time",
      value: `${Math.floor(stats.totalStudyTime / 60)}h ${stats.totalStudyTime % 60}m`,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: BookOpen,
      label: locale === "es" ? "Lecciones" : "Lessons",
      value: stats.lessonsCompleted.toString(),
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
      icon: Terminal,
      label: locale === "es" ? "Comandos" : "Commands",
      value: commandsExecuted.toString(),
      color: "from-zinc-600 to-zinc-800",
      bgColor: "bg-zinc-200 dark:bg-zinc-700",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="mb-6 animate-[fade-in-up_0.4s_ease-out]">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600">
            <BarChart3 className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {locale === "es" ? "Estadísticas Detalladas" : "Detailed Statistics"}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              {locale === "es"
                ? "Analiza tu progreso y rendimiento"
                : "Analyze your progress and performance"}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 mb-6">
        {statCards.map((stat, index) => (
          <Card
            key={stat.label}
            hover
            className="p-4 animate-[fade-in-up_0.3s_ease-out_both]"
            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bgColor}`}>
              <stat.icon className={`h-5 w-5 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} style={{ stroke: 'currentColor' }} />
            </div>
            <p className="mt-3 text-2xl font-bold text-zinc-900 dark:text-white">
              {stat.value}
            </p>
            <p className="text-xs text-zinc-500">{stat.label}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Progress Overview */}
        <Card className="p-6 animate-[fade-in-up_0.4s_ease-out_0.3s_both]">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white mb-6">
            <Target className="h-5 w-5 text-blue-500" />
            {locale === "es" ? "Progreso General" : "Overall Progress"}
          </h3>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <ProgressRing progress={level0Progress} size={100} strokeWidth={8} color="#3b82f6">
                <span className="text-xl font-bold">{level0Progress}%</span>
              </ProgressRing>
              <p className="mt-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {locale === "es" ? "Nivel 0" : "Level 0"}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <ProgressRing progress={achievementsProgress} size={100} strokeWidth={8} color="#f59e0b">
                <span className="text-xl font-bold">{Math.round(achievementsProgress)}%</span>
              </ProgressRing>
              <p className="mt-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {locale === "es" ? "Logros" : "Achievements"}
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
              <p className="text-xl font-bold text-zinc-900 dark:text-white">
                {stats.labsCompleted}
              </p>
              <p className="text-xs text-zinc-500">
                {locale === "es" ? "Labs" : "Labs"}
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
              <p className="text-xl font-bold text-zinc-900 dark:text-white">
                {stats.examsPassed}
              </p>
              <p className="text-xs text-zinc-500">
                {locale === "es" ? "Exámenes" : "Exams"}
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
              <p className="text-xl font-bold text-zinc-900 dark:text-white">
                {unlockedAchievements.length}/{totalAchievements}
              </p>
              <p className="text-xs text-zinc-500">
                {locale === "es" ? "Logros" : "Achievements"}
              </p>
            </div>
          </div>
        </Card>

        {/* Weekly Activity */}
        <Card className="p-6 animate-[fade-in-up_0.4s_ease-out_0.35s_both]">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white mb-6">
            <Calendar className="h-5 w-5 text-green-500" />
            {locale === "es" ? "Actividad Semanal" : "Weekly Activity"}
          </h3>

          <div className="flex justify-center gap-3 mb-6">
            {daysOfWeek.map((day, index) => (
              <div key={day} className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all ${
                    weeklyActivity[index]
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
                      : "bg-zinc-100 text-zinc-400 dark:bg-zinc-800"
                  }`}
                >
                  {weeklyActivity[index] ? "✓" : ""}
                </div>
                <span className="text-xs font-medium text-zinc-500">{day}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 p-4 dark:from-orange-900/30 dark:to-amber-900/30">
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-500" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {locale === "es" ? "Mejor racha" : "Best streak"}
                </span>
              </div>
              <p className="mt-2 text-2xl font-bold text-orange-600 dark:text-orange-400">
                {longestStreak} {locale === "es" ? "días" : "days"}
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 p-4 dark:from-blue-900/30 dark:to-cyan-900/30">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {locale === "es" ? "Hoy" : "Today"}
                </span>
              </div>
              <p className="mt-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
                {todayStudyTime}m
              </p>
            </div>
          </div>
        </Card>

        {/* Command Stats */}
        <Card className="p-6 animate-[fade-in-up_0.4s_ease-out_0.4s_both]">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white mb-6">
            <Terminal className="h-5 w-5 text-green-500" />
            {locale === "es" ? "Estadísticas de Terminal" : "Terminal Statistics"}
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800">
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                {commandStats.totalCommands}
              </p>
              <p className="text-sm text-zinc-500">
                {locale === "es" ? "Comandos totales" : "Total commands"}
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800">
              <p className="text-3xl font-bold text-green-600">
                {commandStats.successRate.toFixed(0)}%
              </p>
              <p className="text-sm text-zinc-500">
                {locale === "es" ? "Tasa de éxito" : "Success rate"}
              </p>
            </div>
          </div>

          {commandStats.mostUsed.length > 0 && (
            <div>
              <p className="mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {locale === "es" ? "Comandos más usados" : "Most used commands"}
              </p>
              <div className="space-y-2">
                {commandStats.mostUsed.slice(0, 5).map((cmd, index) => (
                  <div
                    key={cmd.command}
                    className="flex items-center justify-between rounded-lg bg-zinc-50 px-3 py-2 dark:bg-zinc-800"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        {index + 1}
                      </span>
                      <code className="font-mono text-sm text-zinc-700 dark:text-zinc-300">
                        {cmd.command}
                      </code>
                    </div>
                    <span className="text-sm font-medium text-zinc-500">
                      {cmd.count}x
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* Achievements Overview */}
        <Card className="p-6 animate-[fade-in-up_0.4s_ease-out_0.45s_both]">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white mb-6">
            <Trophy className="h-5 w-5 text-yellow-500" />
            {locale === "es" ? "Resumen de Logros" : "Achievements Summary"}
          </h3>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-zinc-500">
                {unlockedAchievements.length} / {totalAchievements}
              </span>
              <span className="text-sm font-medium text-zinc-900 dark:text-white">
                {Math.round(achievementsProgress)}%
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 transition-all duration-500"
                style={{ width: `${achievementsProgress}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { category: "learning", label: locale === "es" ? "Aprendizaje" : "Learning", icon: BookOpen, color: "text-blue-500" },
              { category: "terminal", label: "Terminal", icon: Terminal, color: "text-green-500" },
              { category: "streak", label: locale === "es" ? "Rachas" : "Streaks", icon: Flame, color: "text-orange-500" },
              { category: "special", label: locale === "es" ? "Especiales" : "Special", icon: Award, color: "text-purple-500" },
            ].map(({ category, label, icon: Icon, color }) => {
              const categoryAchievements = achievementsList.filter((a) => a.category === category);
              const unlocked = categoryAchievements.filter((a) =>
                unlockedAchievements.includes(a.id)
              ).length;

              return (
                <div
                  key={category}
                  className="flex items-center gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800"
                >
                  <Icon className={`h-5 w-5 ${color}`} />
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                      {label}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {unlocked}/{categoryAchievements.length}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
