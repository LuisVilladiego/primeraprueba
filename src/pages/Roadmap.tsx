import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useProgressStore } from "@/stores/progressStore";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { Lock, CheckCircle2, Play, ChevronRight } from "lucide-react";

const levels = [
  { id: 0, icon: "🎯", title: { es: "Fundamentos de Computación", en: "Computing Fundamentals" }, href: "/courses/level-0" },
  { id: 1, icon: "🐧", title: { es: "Linux Fundamentals", en: "Linux Fundamentals" }, href: null },
  { id: 2, icon: "⚙️", title: { es: "Administración Linux", en: "Linux Administration" }, href: null },
  { id: 3, icon: "🌐", title: { es: "Networking", en: "Networking" }, href: null },
  { id: 4, icon: "🔐", title: { es: "SSH", en: "SSH" }, href: null },
  { id: 5, icon: "📦", title: { es: "Git & GitHub", en: "Git & GitHub" }, href: null },
  { id: 6, icon: "📜", title: { es: "Bash Scripting", en: "Bash Scripting" }, href: null },
  { id: 7, icon: "🐳", title: { es: "Docker", en: "Docker" }, href: null },
  { id: 8, icon: "🌍", title: { es: "Web Servers (Nginx)", en: "Web Servers (Nginx)" }, href: null },
  { id: 9, icon: "🗃️", title: { es: "PostgreSQL", en: "PostgreSQL" }, href: null },
  { id: 10, icon: "🛡️", title: { es: "Seguridad Linux", en: "Linux Security" }, href: null },
  { id: 11, icon: "☁️", title: { es: "Cloud (AWS)", en: "Cloud (AWS)" }, href: null },
  { id: 12, icon: "🔄", title: { es: "CI/CD", en: "CI/CD" }, href: null },
  { id: 13, icon: "🚀", title: { es: "DevOps", en: "DevOps" }, href: null },
  { id: 14, icon: "🏗️", title: { es: "Terraform", en: "Terraform" }, href: null },
  { id: 15, icon: "☸️", title: { es: "Kubernetes", en: "Kubernetes" }, href: null },
];

export function Roadmap() {
  const { t, locale } = useTranslation();
  const { getModuleProgress, isExamPassed } = useProgressStore();

  const getLevelStatus = (levelId: number) => {
    if (levelId === 0) {
      const progress = getModuleProgress("level-0");
      if (isExamPassed("exam-level-0")) return "completed";
      if (progress > 0) return "in_progress";
      return "available";
    }
    const prevExamPassed = isExamPassed(`exam-level-${levelId - 1}`);
    return prevExamPassed ? "available" : "locked";
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          {t("roadmap.title")}
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {t("roadmap.subtitle")}
        </p>
      </div>

      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-8 top-0 h-full w-0.5 bg-zinc-200 dark:bg-zinc-700" />

        <div className="space-y-4">
          {levels.map((level) => {
            const status = getLevelStatus(level.id);
            const progress = level.id === 0 ? getModuleProgress("level-0") : 0;
            const isLocked = status === "locked";
            const isCompleted = status === "completed";
            const isInProgress = status === "in_progress";

            return (
              <div key={level.id} className="relative pl-16">
                {/* Node */}
                <div
                  className={`absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                    isCompleted
                      ? "border-green-500 bg-green-500 text-white"
                      : isInProgress
                        ? "border-blue-500 bg-blue-500 text-white"
                        : isLocked
                          ? "border-zinc-300 bg-zinc-100 text-zinc-400 dark:border-zinc-600 dark:bg-zinc-800"
                          : "border-blue-500 bg-white text-blue-500 dark:bg-zinc-900"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : isLocked ? (
                    <Lock className="h-4 w-4" />
                  ) : isInProgress ? (
                    <Play className="h-4 w-4" />
                  ) : (
                    <span className="text-sm font-bold">{level.id}</span>
                  )}
                </div>

                {/* Card */}
                {level.href && !isLocked ? (
                  <Link to={level.href}>
                    <Card className={`p-4 transition-all hover:shadow-md ${
                      isLocked ? "opacity-50" : ""
                    }`}>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{level.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-zinc-900 dark:text-white">
                              {t("roadmap.level")} {level.id}
                            </h3>
                            <Badge variant={
                              isCompleted ? "success" : 
                              isInProgress ? "primary" : 
                              isLocked ? "outline" : "secondary"
                            }>
                              {isCompleted ? t("roadmap.completed") :
                               isInProgress ? t("roadmap.inProgress") :
                               isLocked ? t("roadmap.locked") : t("roadmap.available")}
                            </Badge>
                          </div>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {level.title[locale as "es" | "en"]}
                          </p>
                          {(isInProgress || isCompleted) && (
                            <div className="mt-2 w-48">
                              <Progress value={progress} max={100} size="sm" />
                            </div>
                          )}
                        </div>
                        <ChevronRight className="h-5 w-5 text-zinc-400" />
                      </div>
                    </Card>
                  </Link>
                ) : (
                  <Card className={`p-4 ${isLocked ? "opacity-50" : ""}`}>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{level.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-zinc-900 dark:text-white">
                            {t("roadmap.level")} {level.id}
                          </h3>
                          <Badge variant="outline">
                            {locale === "es" ? "Próximamente" : "Coming Soon"}
                          </Badge>
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {level.title[locale as "es" | "en"]}
                        </p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
