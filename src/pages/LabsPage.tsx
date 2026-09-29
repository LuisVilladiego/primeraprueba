import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useProgressStore } from "@/stores/progressStore";
import { level0Labs } from "@/content/modules/level-0";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { 
  ArrowLeft, 
  FlaskConical, 
  Clock, 
  CheckCircle2, 
  ChevronRight 
} from "lucide-react";

export function LabsPage() {
  const { t, tBilingual, locale } = useTranslation();
  const { getProgress } = useProgressStore();

  const completedLabs = level0Labs.filter(
    (lab) => getProgress("LAB", lab.id)?.status === "COMPLETED"
  ).length;

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <Link 
          to="/courses/level-0" 
          className="mb-4 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {locale === "es" ? "Volver al Nivel 0" : "Back to Level 0"}
        </Link>
        
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600">
            <FlaskConical className="h-7 w-7 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {locale === "es" ? "Laboratorios del Nivel 0" : "Level 0 Labs"}
            </h1>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              {locale === "es" 
                ? "Ejercicios prácticos para aplicar los conceptos aprendidos" 
                : "Hands-on exercises to apply the concepts learned"}
            </p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <Card className="mb-6 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-500">
              {locale === "es" ? "Progreso de laboratorios" : "Labs progress"}
            </p>
            <p className="text-lg font-semibold text-zinc-900 dark:text-white">
              {completedLabs} / {level0Labs.length} {locale === "es" ? "completados" : "completed"}
            </p>
          </div>
          <div className="w-32">
            <Progress 
              value={completedLabs} 
              max={level0Labs.length} 
              size="md"
            />
          </div>
        </div>
      </Card>

      {/* Labs List */}
      <div className="space-y-4">
        {level0Labs.map((lab, index) => {
          const progress = getProgress("LAB", lab.id);
          const isCompleted = progress?.status === "COMPLETED";

          return (
            <Link key={lab.id} to={`/courses/level-0/labs/${lab.slug}`}>
              <Card className={`p-5 transition-all hover:shadow-md ${
                isCompleted ? "border-green-200 dark:border-green-800/30" : ""
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    isCompleted 
                      ? "bg-green-100 dark:bg-green-900/30" 
                      : "bg-purple-100 dark:bg-purple-900/30"
                  }`}>
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <FlaskConical className="h-5 w-5 text-purple-500" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <Badge variant={isCompleted ? "success" : "primary"}>
                        Lab {index + 1}
                      </Badge>
                      <Badge variant="outline">
                        <Clock className="mr-1 h-3 w-3" />
                        {lab.estimatedTime} {t("common.min")}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {tBilingual(lab.title)}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {tBilingual(lab.description)}
                    </p>
                  </div>
                  
                  <ChevronRight className="h-5 w-5 shrink-0 text-zinc-400" />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
