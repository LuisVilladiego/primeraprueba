"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, BookOpen, FlaskConical, GraduationCap } from "lucide-react";

interface Objective {
  id: string;
  type: "lesson" | "lab" | "exam";
  title: { es: string; en: string };
  module: { es: string; en: string };
  href: string;
}

const objectives: Objective[] = [
  {
    id: "1",
    type: "lesson",
    title: { es: "¿Qué es un Computador?", en: "What is a Computer?" },
    module: { es: "Nivel 0 - Fundamentos", en: "Level 0 - Fundamentals" },
    href: "/courses/level-0/lessons/what-is-a-computer",
  },
  {
    id: "2",
    type: "lesson",
    title: { es: "¿Qué es un Sistema Operativo?", en: "What is an Operating System?" },
    module: { es: "Nivel 0 - Fundamentos", en: "Level 0 - Fundamentals" },
    href: "/courses/level-0/lessons/what-is-an-os",
  },
  {
    id: "3",
    type: "lab",
    title: { es: "Identifica los componentes", en: "Identify the components" },
    module: { es: "Nivel 0 - Fundamentos", en: "Level 0 - Fundamentals" },
    href: "/labs/level-0/identify-components",
  },
];

function getTypeIcon(type: Objective["type"]) {
  switch (type) {
    case "lesson":
      return <BookOpen className="h-4 w-4" />;
    case "lab":
      return <FlaskConical className="h-4 w-4" />;
    case "exam":
      return <GraduationCap className="h-4 w-4" />;
  }
}

function getTypeBadge(type: Objective["type"]) {
  switch (type) {
    case "lesson":
      return "primary";
    case "lab":
      return "purple";
    case "exam":
      return "warning";
  }
}

function getTypeLabel(type: Objective["type"], locale: "es" | "en") {
  const labels = {
    lesson: { es: "Lección", en: "Lesson" },
    lab: { es: "Laboratorio", en: "Lab" },
    exam: { es: "Examen", en: "Exam" },
  };
  return labels[type][locale];
}

export function NextObjectives() {
  const { t, tBilingual, locale } = useTranslation();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{t("dashboard.nextObjectives")}</CardTitle>
        <Link href="/roadmap">
          <Button variant="ghost" size="sm">
            {t("common.all")}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {objectives.map((objective) => (
            <Link
              key={objective.id}
              href={objective.href}
              className="group flex items-center gap-4 rounded-lg border border-zinc-200 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50/50 dark:border-zinc-700 dark:hover:border-blue-800 dark:hover:bg-blue-900/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 group-hover:bg-blue-100 group-hover:text-blue-600 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400">
                {getTypeIcon(objective.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-zinc-900 dark:text-white">
                    {tBilingual(objective.title)}
                  </p>
                  <Badge variant={getTypeBadge(objective.type)} size="sm">
                    {getTypeLabel(objective.type, locale)}
                  </Badge>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {tBilingual(objective.module)}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
