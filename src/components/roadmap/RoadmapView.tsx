"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useProgressStore } from "@/stores/progressStore";
import { LevelNode } from "./LevelNode";
import { cn } from "@/lib/utils";
import type { BilingualText } from "@/types";

export interface RoadmapLevel {
  id: string;
  level: number;
  title: BilingualText;
  description: BilingualText;
  icon: string;
  lessonsCount: number;
  labsCount: number;
  hasExam: boolean;
  hasProject: boolean;
  prerequisites: string[];
  href: string;
}

const levels: RoadmapLevel[] = [
  {
    id: "level-0",
    level: 0,
    title: { es: "Fundamentos", en: "Fundamentals" },
    description: { es: "Conceptos básicos de computación y sistemas operativos", en: "Basic concepts of computing and operating systems" },
    icon: "🎯",
    lessonsCount: 7,
    labsCount: 2,
    hasExam: true,
    hasProject: false,
    prerequisites: [],
    href: "/courses/level-0",
  },
  {
    id: "level-1",
    level: 1,
    title: { es: "Linux Fundamentals", en: "Linux Fundamentals" },
    description: { es: "Navegación, archivos y comandos básicos de Linux", en: "Navigation, files and basic Linux commands" },
    icon: "🐧",
    lessonsCount: 9,
    labsCount: 5,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-0"],
    href: "/courses/level-1",
  },
  {
    id: "level-2",
    level: 2,
    title: { es: "Administración Linux", en: "Linux Administration" },
    description: { es: "Usuarios, permisos, procesos y servicios", en: "Users, permissions, processes and services" },
    icon: "⚙️",
    lessonsCount: 9,
    labsCount: 5,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-1"],
    href: "/courses/level-2",
  },
  {
    id: "level-3",
    level: 3,
    title: { es: "Redes", en: "Networking" },
    description: { es: "IP, TCP/UDP, DNS, HTTP y herramientas de red", en: "IP, TCP/UDP, DNS, HTTP and network tools" },
    icon: "🌐",
    lessonsCount: 10,
    labsCount: 5,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-1", "level-2"],
    href: "/courses/level-3",
  },
  {
    id: "level-4",
    level: 4,
    title: { es: "SSH", en: "SSH" },
    description: { es: "Conexiones seguras y administración remota", en: "Secure connections and remote administration" },
    icon: "🔐",
    lessonsCount: 8,
    labsCount: 3,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-3"],
    href: "/courses/level-4",
  },
  {
    id: "level-5",
    level: 5,
    title: { es: "Git y GitHub", en: "Git & GitHub" },
    description: { es: "Control de versiones y colaboración", en: "Version control and collaboration" },
    icon: "📦",
    lessonsCount: 10,
    labsCount: 4,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-1", "level-4"],
    href: "/courses/level-5",
  },
  {
    id: "level-6",
    level: 6,
    title: { es: "Bash Scripting", en: "Bash Scripting" },
    description: { es: "Automatización con scripts de shell", en: "Automation with shell scripts" },
    icon: "📜",
    lessonsCount: 12,
    labsCount: 6,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-2"],
    href: "/courses/level-6",
  },
  {
    id: "level-7",
    level: 7,
    title: { es: "Docker", en: "Docker" },
    description: { es: "Contenedores y Docker Compose", en: "Containers and Docker Compose" },
    icon: "🐳",
    lessonsCount: 12,
    labsCount: 6,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-3", "level-5", "level-6"],
    href: "/courses/level-7",
  },
  {
    id: "level-8",
    level: 8,
    title: { es: "Servidores Web", en: "Web Servers" },
    description: { es: "Nginx, reverse proxy y HTTPS", en: "Nginx, reverse proxy and HTTPS" },
    icon: "🌍",
    lessonsCount: 8,
    labsCount: 4,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-3", "level-4", "level-7"],
    href: "/courses/level-8",
  },
  {
    id: "level-9",
    level: 9,
    title: { es: "PostgreSQL", en: "PostgreSQL" },
    description: { es: "Bases de datos relacionales", en: "Relational databases" },
    icon: "🗃️",
    lessonsCount: 10,
    labsCount: 5,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-7"],
    href: "/courses/level-9",
  },
  {
    id: "level-10",
    level: 10,
    title: { es: "Seguridad Linux", en: "Linux Security" },
    description: { es: "Hardening y mejores prácticas", en: "Hardening and best practices" },
    icon: "🛡️",
    lessonsCount: 10,
    labsCount: 5,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-2", "level-3", "level-4"],
    href: "/courses/level-10",
  },
  {
    id: "level-11",
    level: 11,
    title: { es: "Cloud (AWS)", en: "Cloud (AWS)" },
    description: { es: "Introducción a cloud y AWS", en: "Introduction to cloud and AWS" },
    icon: "☁️",
    lessonsCount: 12,
    labsCount: 6,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-3", "level-7", "level-10"],
    href: "/courses/level-11",
  },
  {
    id: "level-12",
    level: 12,
    title: { es: "CI/CD", en: "CI/CD" },
    description: { es: "Integración y despliegue continuo", en: "Continuous integration and deployment" },
    icon: "🚀",
    lessonsCount: 10,
    labsCount: 5,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-5", "level-7"],
    href: "/courses/level-12",
  },
  {
    id: "level-13",
    level: 13,
    title: { es: "DevOps", en: "DevOps" },
    description: { es: "Integración de todas las disciplinas", en: "Integration of all disciplines" },
    icon: "♾️",
    lessonsCount: 8,
    labsCount: 4,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-5", "level-6", "level-7", "level-8", "level-9", "level-10", "level-11", "level-12"],
    href: "/courses/level-13",
  },
  {
    id: "level-14",
    level: 14,
    title: { es: "Terraform", en: "Terraform" },
    description: { es: "Infrastructure as Code", en: "Infrastructure as Code" },
    icon: "🏗️",
    lessonsCount: 10,
    labsCount: 5,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-11"],
    href: "/courses/level-14",
  },
  {
    id: "level-15",
    level: 15,
    title: { es: "Kubernetes", en: "Kubernetes" },
    description: { es: "Orquestación de contenedores", en: "Container orchestration" },
    icon: "☸️",
    lessonsCount: 12,
    labsCount: 6,
    hasExam: true,
    hasProject: true,
    prerequisites: ["level-7", "level-11"],
    href: "/courses/level-15",
  },
];

export function RoadmapView() {
  const { t, tBilingual } = useTranslation();
  const { getProgress, isExamPassed } = useProgressStore();

  const getLevelStatus = (level: RoadmapLevel) => {
    const moduleProgress = getProgress("MODULE", level.id);
    
    if (moduleProgress?.status === "MASTERED") return "mastered";
    if (moduleProgress?.status === "COMPLETED") return "completed";
    if (moduleProgress?.status === "IN_PROGRESS") return "in_progress";
    
    const allPrerequisitesMet = level.prerequisites.every((prereqId) => {
      const prereqProgress = getProgress("MODULE", prereqId);
      if (!prereqProgress) return false;
      
      const prereqLevel = levels.find((l) => l.id === prereqId);
      if (!prereqLevel) return false;
      
      if (prereqLevel.hasExam) {
        return isExamPassed(`exam-${prereqId}`, 80);
      }
      
      return prereqProgress.status === "COMPLETED" || prereqProgress.status === "MASTERED";
    });

    if (level.prerequisites.length === 0 || allPrerequisitesMet) {
      return "available";
    }

    return "locked";
  };

  const getLevelProgress = (level: RoadmapLevel) => {
    const moduleProgress = useProgressStore.getState().getProgress("MODULE", level.id);
    if (!moduleProgress) return 0;
    return moduleProgress.score || 0;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          {t("roadmap.title")}
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {t("roadmap.subtitle")}
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { status: "locked", label: t("roadmap.locked"), color: "bg-zinc-200 dark:bg-zinc-700" },
          { status: "available", label: t("roadmap.available"), color: "bg-yellow-200 dark:bg-yellow-900" },
          { status: "in_progress", label: t("roadmap.inProgress"), color: "bg-blue-200 dark:bg-blue-900" },
          { status: "completed", label: t("roadmap.completed"), color: "bg-green-200 dark:bg-green-900" },
          { status: "mastered", label: t("roadmap.mastered"), color: "bg-purple-200 dark:bg-purple-900" },
        ].map((item) => (
          <div key={item.status} className="flex items-center gap-2">
            <div className={cn("h-4 w-4 rounded", item.color)} />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Roadmap Grid */}
      <div className="relative">
        {/* Connection Lines - CSS handles this via pseudo-elements */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {levels.map((level) => (
            <LevelNode
              key={level.id}
              level={level}
              status={getLevelStatus(level)}
              progress={getLevelProgress(level)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
