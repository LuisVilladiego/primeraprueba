import { useTranslation } from "@/hooks/useTranslation";
import { useUserStore } from "@/stores/userStore";
import { Card } from "@/components/ui/Card";
import { Flame, Trophy, Calendar } from "lucide-react";

const dayNames = {
  es: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

export function StreakCard() {
  const { locale } = useTranslation();
  const { stats, longestStreak, weeklyActivity } = useUserStore();

  const today = new Date().getDay();

  return (
    <Card hover className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          {locale === "es" ? "Tu Racha" : "Your Streak"}
        </h3>
        <div className="flex items-center gap-1 text-sm text-zinc-500">
          <Trophy className="h-4 w-4 text-yellow-500" />
          <span>{locale === "es" ? "Mejor:" : "Best:"} {longestStreak}</span>
        </div>
      </div>

      {/* Current Streak */}
      <div className="flex items-center gap-4 mb-5">
        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
          stats.streakDays > 0 
            ? "bg-gradient-to-br from-orange-400 to-red-500" 
            : "bg-zinc-200 dark:bg-zinc-700"
        }`}>
          <span className="text-2xl font-bold text-white">
            {stats.streakDays}
          </span>
        </div>
        <div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white">
            {stats.streakDays} {stats.streakDays === 1 
              ? (locale === "es" ? "día" : "day") 
              : (locale === "es" ? "días" : "days")}
          </p>
          <p className="text-sm text-zinc-500">
            {stats.streakDays > 0
              ? (locale === "es" ? "¡Sigue así!" : "Keep it up!")
              : (locale === "es" ? "Comienza tu racha hoy" : "Start your streak today")}
          </p>
        </div>
      </div>

      {/* Weekly Activity */}
      <div>
        <p className="text-xs font-medium text-zinc-500 mb-2 flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {locale === "es" ? "Esta semana" : "This week"}
        </p>
        <div className="flex justify-between gap-1">
          {dayNames[locale as "es" | "en"].map((day, index) => {
            const isActive = weeklyActivity[index];
            const isToday = index === today;
            
            return (
              <div key={day} className="flex flex-col items-center gap-1">
                <span className={`text-xs ${isToday ? "font-bold text-blue-600 dark:text-blue-400" : "text-zinc-400"}`}>
                  {day}
                </span>
                <div
                  className={`h-8 w-8 rounded-lg flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-gradient-to-br from-orange-400 to-red-500 text-white"
                      : isToday
                        ? "border-2 border-dashed border-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "bg-zinc-100 dark:bg-zinc-800"
                  }`}
                >
                  {isActive && <Flame className="h-4 w-4" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Motivational Message */}
      {stats.streakDays > 0 && (
        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
          <p className="text-sm text-center">
            {stats.streakDays >= 30 && "👑 "}
            {stats.streakDays >= 7 && stats.streakDays < 30 && "🔥 "}
            {stats.streakDays >= 3 && stats.streakDays < 7 && "💪 "}
            <span className="text-zinc-600 dark:text-zinc-400">
              {stats.streakDays >= 30
                ? (locale === "es" ? "¡Eres una leyenda! Un mes de dedicación" : "You're a legend! A month of dedication")
                : stats.streakDays >= 7
                  ? (locale === "es" ? "¡Increíble semana de aprendizaje!" : "Amazing week of learning!")
                  : stats.streakDays >= 3
                    ? (locale === "es" ? "¡Buen ritmo! Sigue practicando" : "Good pace! Keep practicing")
                    : (locale === "es" ? "¡Buen comienzo!" : "Good start!")}
            </span>
          </p>
        </div>
      )}
    </Card>
  );
}
