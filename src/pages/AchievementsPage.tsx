import { useTranslation } from "@/hooks/useTranslation";
import { useAchievementsStore, achievements } from "@/stores/achievementsStore";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { Trophy, Lock, Star } from "lucide-react";

export function AchievementsPage() {
  const { locale } = useTranslation();
  const { unlockedAchievements, getUnlockedCount } = useAchievementsStore();

  const categories = [
    { id: "learning", title: locale === "es" ? "Aprendizaje" : "Learning", icon: "📚" },
    { id: "terminal", title: locale === "es" ? "Terminal" : "Terminal", icon: "💻" },
    { id: "streak", title: locale === "es" ? "Rachas" : "Streaks", icon: "🔥" },
    { id: "special", title: locale === "es" ? "Especiales" : "Special", icon: "⭐" },
  ];

  const unlockedCount = getUnlockedCount();
  const totalCount = achievements.length;
  const progressPercentage = Math.round((unlockedCount / totalCount) * 100);

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {locale === "es" ? "Logros" : "Achievements"}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              {locale === "es" 
                ? "Desbloquea logros completando desafíos" 
                : "Unlock achievements by completing challenges"}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="mb-8 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {locale === "es" ? "Progreso Total" : "Total Progress"}
            </h3>
            <p className="mt-1 text-3xl font-bold text-zinc-900 dark:text-white">
              {unlockedCount} / {totalCount}
            </p>
            <p className="text-sm text-zinc-500">
              {locale === "es" ? "logros desbloqueados" : "achievements unlocked"}
            </p>
          </div>
          <div className="w-48">
            <Progress value={progressPercentage} max={100} size="lg" showLabel />
          </div>
        </div>
      </Card>

      {/* Achievements by Category */}
      {categories.map((category) => {
        const categoryAchievements = achievements.filter(
          (a) => a.category === category.id
        );

        return (
          <div key={category.id} className="mb-8">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-white">
              <span>{category.icon}</span>
              {category.title}
            </h2>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {categoryAchievements.map((achievement) => {
                const isUnlocked = unlockedAchievements.includes(achievement.id);
                
                return (
                  <Card 
                    key={achievement.id}
                    className={`p-4 transition-all ${
                      isUnlocked 
                        ? "border-yellow-200 bg-yellow-50/50 dark:border-yellow-800/30 dark:bg-yellow-900/10" 
                        : "opacity-75"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${
                        isUnlocked 
                          ? "bg-yellow-100 dark:bg-yellow-900/30" 
                          : "bg-zinc-100 dark:bg-zinc-800"
                      }`}>
                        {isUnlocked ? achievement.icon : <Lock className="h-6 w-6 text-zinc-400" />}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className={`font-semibold ${
                            isUnlocked 
                              ? "text-zinc-900 dark:text-white" 
                              : "text-zinc-500 dark:text-zinc-400"
                          }`}>
                            {achievement.title[locale as "es" | "en"]}
                          </h3>
                          {isUnlocked && (
                            <Badge variant="success" size="sm">
                              {locale === "es" ? "Desbloqueado" : "Unlocked"}
                            </Badge>
                          )}
                        </div>
                        
                        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                          {achievement.description[locale as "es" | "en"]}
                        </p>
                        
                        <div className="mt-2 flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                            +{achievement.xpReward} XP
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
