"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface Skill {
  id: string;
  name: { es: string; en: string };
  status: "not_started" | "learning" | "practiced" | "passed" | "mastered";
}

interface SkillCategory {
  id: string;
  name: { es: string; en: string };
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "fundamentals",
    name: { es: "Fundamentos", en: "Fundamentals" },
    skills: [
      { id: "hardware", name: { es: "Hardware básico", en: "Basic hardware" }, status: "not_started" },
      { id: "os-concepts", name: { es: "Conceptos de SO", en: "OS concepts" }, status: "not_started" },
      { id: "processes", name: { es: "Procesos", en: "Processes" }, status: "not_started" },
      { id: "filesystems", name: { es: "Sistemas de archivos", en: "File systems" }, status: "not_started" },
      { id: "cli-basics", name: { es: "CLI vs GUI", en: "CLI vs GUI" }, status: "not_started" },
      { id: "linux-history", name: { es: "Historia de Linux", en: "Linux history" }, status: "not_started" },
    ],
  },
  {
    id: "linux",
    name: { es: "Linux Fundamentals", en: "Linux Fundamentals" },
    skills: [
      { id: "terminal", name: { es: "Terminal", en: "Terminal" }, status: "not_started" },
      { id: "navigation", name: { es: "Navegación", en: "Navigation" }, status: "not_started" },
      { id: "file-manipulation", name: { es: "Manipulación de archivos", en: "File manipulation" }, status: "not_started" },
      { id: "text-processing", name: { es: "Procesamiento de texto", en: "Text processing" }, status: "not_started" },
      { id: "pipes", name: { es: "Pipes y redirecciones", en: "Pipes & redirections" }, status: "not_started" },
    ],
  },
];

function getStatusIcon(status: Skill["status"]) {
  switch (status) {
    case "not_started":
      return "☐";
    case "learning":
      return "◐";
    case "practiced":
      return "◑";
    case "passed":
      return "✓";
    case "mastered":
      return "🏆";
  }
}

function getStatusColor(status: Skill["status"]) {
  switch (status) {
    case "not_started":
      return "text-zinc-400 dark:text-zinc-500";
    case "learning":
      return "text-blue-500";
    case "practiced":
      return "text-yellow-500";
    case "passed":
      return "text-green-500";
    case "mastered":
      return "text-purple-500";
  }
}

export function SkillsChecklist() {
  const { t, tBilingual } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {t("profile.skills")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {tBilingual(category.name)}
              </h4>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center gap-3 rounded-lg border border-zinc-100 bg-zinc-50/50 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-800/30"
                  >
                    <span
                      className={cn(
                        "text-lg",
                        getStatusColor(skill.status)
                      )}
                    >
                      {getStatusIcon(skill.status)}
                    </span>
                    <span
                      className={cn(
                        "text-sm",
                        skill.status === "not_started"
                          ? "text-zinc-500 dark:text-zinc-400"
                          : "text-zinc-700 dark:text-zinc-300"
                      )}
                    >
                      {tBilingual(skill.name)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
