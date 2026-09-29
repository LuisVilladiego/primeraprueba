import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useUserStore } from "@/stores/userStore";
import { useProgressStore } from "@/stores/progressStore";
import { useAchievementTracker } from "@/hooks/useAchievementTracker";
import { useStreakTracker } from "@/hooks/useStreakTracker";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Progress, ProgressRing } from "@/components/ui/Progress";
import { Button } from "@/components/ui/Button";
import { StreakCard } from "@/components/StreakCard";
import { 
  BookOpen, 
  FlaskConical, 
  GraduationCap, 
  Target, 
  ChevronRight,
  Sparkles,
  Star,
  Clock
} from "lucide-react";

export function Dashboard() {
  const { t, locale } = useTranslation();
  const { stats, commandsExecuted, todayStudyTime } = useUserStore();
  const { getModuleProgress } = useProgressStore();
  useAchievementTracker();
  useStreakTracker();

  const level0Progress = getModuleProgress("level-0");

  const objectives = [
    {
      title: locale === "es" ? "Completar Nivel 0" : "Complete Level 0",
      description: locale === "es" 
        ? "Aprende los fundamentos de computación" 
        : "Learn computing fundamentals",
      href: "/courses/level-0",
      progress: level0Progress,
      icon: BookOpen,
    },
    {
      title: locale === "es" ? "Aprobar examen" : "Pass exam",
      description: locale === "es" 
        ? "Demuestra tu conocimiento" 
        : "Demonstrate your knowledge",
      href: "/exams/level-0",
      progress: 0,
      icon: GraduationCap,
    },
    {
      title: locale === "es" ? "Practicar en terminal" : "Practice in terminal",
      description: locale === "es" 
        ? "Domina los comandos básicos" 
        : "Master basic commands",
      href: "/terminal",
      progress: 0,
      icon: FlaskConical,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      {/* Welcome */}
      <div className="animate-[fade-in-up_0.4s_ease-out] rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6" />
          <h1 className="text-2xl font-bold">
            {stats.totalXp > 0 ? t("dashboard.welcome") : t("dashboard.welcomeNew")}
          </h1>
        </div>
        <p className="mt-2 text-blue-100">
          {locale === "es" 
            ? "Continúa tu viaje de aprendizaje en Linux" 
            : "Continue your Linux learning journey"}
        </p>
      </div>

      {/* Main Stats Row */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* XP & Level */}
        <Card hover className="animate-[fade-in-up_0.4s_ease-out_0.1s_both]">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-zinc-500">
                {locale === "es" ? "Nivel" : "Level"} {stats.level}
              </span>
              <Star className="h-5 w-5 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-zinc-900 dark:text-white">
              {stats.totalXp.toLocaleString()}
            </p>
            <p className="text-sm text-zinc-500">XP Total</p>
            <div className="mt-3">
              <Progress 
                value={stats.totalXp % 1000} 
                max={1000} 
                size="sm" 
                variant="gradient"
              />
              <p className="mt-1 text-xs text-zinc-400">
                {1000 - (stats.totalXp % 1000)} XP {locale === "es" ? "para nivel" : "to level"} {stats.level + 1}
              </p>
            </div>
          </div>
        </Card>

        {/* Study Time */}
        <Card hover className="animate-[fade-in-up_0.4s_ease-out_0.15s_both]">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-zinc-500">
                {locale === "es" ? "Tiempo de estudio" : "Study time"}
              </span>
              <Clock className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-zinc-900 dark:text-white">
              {Math.floor(stats.totalStudyTime / 60)}h {stats.totalStudyTime % 60}m
            </p>
            <p className="text-sm text-zinc-500">
              {locale === "es" ? "total acumulado" : "total accumulated"}
            </p>
            {todayStudyTime > 0 && (
              <p className="mt-2 text-xs text-green-600 dark:text-green-400">
                +{todayStudyTime}m {locale === "es" ? "hoy" : "today"}
              </p>
            )}
          </div>
        </Card>

        {/* Labs */}
        <Card hover className="animate-[fade-in-up_0.4s_ease-out_0.2s_both]">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-zinc-500">
                {locale === "es" ? "Laboratorios" : "Labs"}
              </span>
              <FlaskConical className="h-5 w-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-zinc-900 dark:text-white">
              {stats.labsCompleted}
            </p>
            <p className="text-sm text-zinc-500">
              {locale === "es" ? "completados" : "completed"}
            </p>
          </div>
        </Card>

        {/* Commands */}
        <Card hover className="animate-[fade-in-up_0.4s_ease-out_0.25s_both]">
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-zinc-500">
                {locale === "es" ? "Comandos" : "Commands"}
              </span>
              <span className="text-lg">💻</span>
            </div>
            <p className="text-3xl font-bold text-zinc-900 dark:text-white">
              {commandsExecuted}
            </p>
            <p className="text-sm text-zinc-500">
              {locale === "es" ? "ejecutados" : "executed"}
            </p>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Progress Overview */}
        <Card hover className="animate-[fade-in-up_0.4s_ease-out_0.3s_both]">
          <CardHeader>
            <CardTitle>{t("dashboard.overallProgress")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-4">
              <ProgressRing value={level0Progress} size={120} strokeWidth={10}>
                <div className="text-center">
                  <span className="text-2xl font-bold">{level0Progress}%</span>
                </div>
              </ProgressRing>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {stats.lessonsCompleted}
                </p>
                <p className="text-sm text-zinc-500">{t("dashboard.lessonsCompleted")}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {stats.examsPassed}
                </p>
                <p className="text-sm text-zinc-500">{t("dashboard.examsPassed")}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Streak Card */}
        <div className="animate-[fade-in-up_0.4s_ease-out_0.35s_both]">
          <StreakCard />
        </div>

        {/* Quick Links */}
        <Card hover className="animate-[fade-in-up_0.4s_ease-out_0.4s_both]">
          <div className="p-5">
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-4">
              {locale === "es" ? "Acceso Rápido" : "Quick Access"}
            </h3>
            <div className="space-y-2">
              {[
                { href: "/terminal", icon: "💻", label: locale === "es" ? "Terminal" : "Terminal" },
                { href: "/commands", icon: "📖", label: locale === "es" ? "Comandos" : "Commands" },
                { href: "/achievements", icon: "🏆", label: locale === "es" ? "Logros" : "Achievements" },
                { href: "/projects", icon: "📁", label: locale === "es" ? "Proyectos" : "Projects" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {link.label}
                  </span>
                  <ChevronRight className="ml-auto h-4 w-4 text-zinc-400" />
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Next Objectives */}
      <Card className="animate-[fade-in-up_0.4s_ease-out_0.4s_both]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            {t("dashboard.nextObjectives")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {objectives.map((obj, index) => (
              <Link key={index} to={obj.href}>
                <div className="flex items-center gap-4 rounded-lg border border-zinc-200 p-4 transition-all duration-200 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 dark:border-zinc-700 dark:hover:border-blue-700">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <obj.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-zinc-900 dark:text-white">
                      {obj.title}
                    </h4>
                    <p className="text-sm text-zinc-500">{obj.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {obj.progress > 0 && (
                      <div className="w-24">
                        <Progress value={obj.progress} max={100} size="sm" />
                      </div>
                    )}
                    <ChevronRight className="h-5 w-5 text-zinc-400" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Action */}
      <div className="flex justify-center animate-[fade-in-up_0.4s_ease-out_0.5s_both]">
        <Link to="/courses/level-0">
          <Button variant="primary" size="lg">
            {t("dashboard.continueStudying")}
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
