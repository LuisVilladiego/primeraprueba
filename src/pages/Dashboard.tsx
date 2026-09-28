import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useUserStore } from "@/stores/userStore";
import { useProgressStore } from "@/stores/progressStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Progress, ProgressRing } from "@/components/ui/Progress";
import { Button } from "@/components/ui/Button";
import { 
  BookOpen, 
  FlaskConical, 
  GraduationCap, 
  Target, 
  ChevronRight,
  Sparkles
} from "lucide-react";

export function Dashboard() {
  const { t, locale } = useTranslation();
  const { stats } = useUserStore();
  const { getModuleProgress } = useProgressStore();

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
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Progress Overview */}
        <Card className="col-span-full lg:col-span-1">
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
                  {stats.exercisesCompleted}
                </p>
                <p className="text-sm text-zinc-500">{t("dashboard.exercisesCompleted")}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <Card>
          <CardHeader>
            <CardTitle>{t("dashboard.labsCompleted")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                <FlaskConical className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                  {stats.labsCompleted}
                </p>
                <p className="text-sm text-zinc-500">
                  {locale === "es" ? "laboratorios" : "labs"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("dashboard.examsPassed")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
                <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                  {stats.examsPassed}
                </p>
                <p className="text-sm text-zinc-500">
                  {locale === "es" ? "exámenes" : "exams"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Next Objectives */}
      <Card>
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
                <div className="flex items-center gap-4 rounded-lg border border-zinc-200 p-4 transition-all hover:border-blue-300 hover:shadow-sm dark:border-zinc-700 dark:hover:border-blue-700">
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
      <div className="flex justify-center">
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
