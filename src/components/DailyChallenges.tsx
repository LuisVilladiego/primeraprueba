import { useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useDailyChallengesStore, Challenge } from "@/stores/dailyChallengesStore";
import { Card } from "@/components/ui/Card";
import {
  Target,
  Terminal,
  HelpCircle,
  Compass,
  Dumbbell,
  CheckCircle,
  Star,
  Zap,
  Clock,
} from "lucide-react";

const typeIcons: Record<Challenge["type"], React.ReactNode> = {
  command: <Terminal className="h-5 w-5" />,
  quiz: <HelpCircle className="h-5 w-5" />,
  explore: <Compass className="h-5 w-5" />,
  practice: <Dumbbell className="h-5 w-5" />,
};

const difficultyColors: Record<Challenge["difficulty"], { bg: string; text: string; border: string }> = {
  easy: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-600 dark:text-green-400", border: "border-green-200 dark:border-green-800" },
  medium: { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-600 dark:text-yellow-400", border: "border-yellow-200 dark:border-yellow-800" },
  hard: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-600 dark:text-red-400", border: "border-red-200 dark:border-red-800" },
};

const difficultyLabels: Record<Challenge["difficulty"], { es: string; en: string }> = {
  easy: { es: "Fácil", en: "Easy" },
  medium: { es: "Medio", en: "Medium" },
  hard: { es: "Difícil", en: "Hard" },
};

export function DailyChallenges() {
  const { locale } = useTranslation();
  const { todaysChallenges, progress, refreshChallenges, getTodaysStats, completedDays } =
    useDailyChallengesStore();

  useEffect(() => {
    refreshChallenges();
  }, [refreshChallenges]);

  const stats = getTodaysStats();

  const getTimeUntilReset = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const diffMs = tomorrow.getTime() - now.getTime();
    const hours = Math.floor(diffMs / 3600000);
    const minutes = Math.floor((diffMs % 3600000) / 60000);
    
    return `${hours}h ${minutes}m`;
  };

  return (
    <Card className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500">
            <Target className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              {locale === "es" ? "Desafíos Diarios" : "Daily Challenges"}
            </h3>
            <p className="text-xs text-zinc-500">
              {stats.completed}/{stats.total} {locale === "es" ? "completados" : "completed"}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Clock className="h-3.5 w-3.5" />
          <span>{locale === "es" ? "Reinicia en" : "Resets in"} {getTimeUntilReset()}</span>
        </div>
      </div>

      {/* Streak Badge */}
      {completedDays > 0 && (
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 dark:bg-amber-900/20">
          <Zap className="h-4 w-4 text-amber-500" />
          <span className="text-sm text-amber-700 dark:text-amber-400">
            {completedDays} {locale === "es" ? "días completando desafíos" : "days completing challenges"}
          </span>
        </div>
      )}

      {/* Challenges List */}
      <div className="space-y-3">
        {todaysChallenges.map((challenge) => {
          const challengeProgress = progress.find((p) => p.challengeId === challenge.id);
          const isCompleted = challengeProgress?.completed || false;
          const currentValue = challengeProgress?.currentProgress || 0;
          const targetValue = challenge.requirement.count || 1;
          const progressPercent = Math.min((currentValue / targetValue) * 100, 100);
          const colors = difficultyColors[challenge.difficulty];

          return (
            <div
              key={challenge.id}
              className={`relative overflow-hidden rounded-xl border p-4 transition-all ${
                isCompleted
                  ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                  : `${colors.border} bg-white dark:bg-zinc-800`
              }`}
            >
              {/* Progress bar background */}
              {!isCompleted && progressPercent > 0 && (
                <div
                  className="absolute inset-y-0 left-0 bg-blue-50 dark:bg-blue-900/20 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              )}

              <div className="relative flex items-start gap-3">
                {/* Icon */}
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${
                    isCompleted
                      ? "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400"
                      : `${colors.bg} ${colors.text}`
                  }`}
                >
                  {isCompleted ? <CheckCircle className="h-5 w-5" /> : typeIcons[challenge.type]}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4
                      className={`font-medium ${
                        isCompleted
                          ? "text-green-700 dark:text-green-400"
                          : "text-zinc-900 dark:text-white"
                      }`}
                    >
                      {challenge.title[locale as "es" | "en"]}
                    </h4>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${colors.bg} ${colors.text}`}
                    >
                      {difficultyLabels[challenge.difficulty][locale as "es" | "en"]}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-zinc-500">
                    {challenge.description[locale as "es" | "en"]}
                  </p>

                  {/* Progress */}
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {targetValue > 1 && (
                        <span className="text-xs text-zinc-500">
                          {currentValue}/{targetValue}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">+{challenge.xpReward} XP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total XP */}
      {stats.xpEarned > 0 && (
        <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-amber-50 py-2 dark:bg-amber-900/20">
          <Star className="h-5 w-5 text-amber-500 fill-current" />
          <span className="font-semibold text-amber-700 dark:text-amber-400">
            {stats.xpEarned} XP {locale === "es" ? "ganados hoy" : "earned today"}
          </span>
        </div>
      )}
    </Card>
  );
}
