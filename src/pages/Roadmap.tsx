import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useProgressStore } from "@/stores/progressStore";
import { getCourse } from "@/content/courses/registry";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Progress, ProgressRing } from "@/components/ui/Progress";
import { Button } from "@/components/ui/Button";
import { 
  Lock, 
  CheckCircle2, 
  Play, 
  ChevronRight, 
  Map, 
  BookOpen,
  Clock,
  Star,
  Filter,
  Sparkles
} from "lucide-react";

interface Level {
  id: number;
  icon: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  href: string | null;
  lessons: number;
  labs: number;
  duration: number;
  skills: string[];
}

const levels: Level[] = [
  { 
    id: 0, 
    icon: "🎯", 
    title: { es: "Fundamentos de Computación", en: "Computing Fundamentals" },
    description: { es: "Aprende los conceptos básicos de computación y la línea de comandos", en: "Learn basic computing concepts and the command line" },
    href: "/courses/level-0",
    lessons: 7,
    labs: 5,
    duration: 120,
    skills: ["Terminal", "Navegación", "Archivos"]
  },
  { 
    id: 1, 
    icon: "💻", 
    title: { es: "La Terminal y Comandos Básicos", en: "Terminal and Basic Commands" },
    description: { es: "Domina la terminal de Linux: navegación, archivos y comandos esenciales", en: "Master the Linux terminal: navigation, files and essential commands" },
    href: "/courses/level-1",
    lessons: 7,
    labs: 2,
    duration: 130,
    skills: ["Terminal", "pwd/cd/ls", "Archivos", "man"]
  },
  { 
    id: 2, 
    icon: "📂", 
    title: { es: "Sistema de Archivos de Linux", en: "Linux Filesystem" },
    description: { es: "FHS, enlaces, metadata, uso de disco y búsqueda con find/locate", en: "FHS, links, metadata, disk usage, and search with find/locate" },
    href: "/courses/level-2",
    lessons: 7,
    labs: 2,
    duration: 215,
    skills: ["FHS", "Enlaces", "find", "df/du"]
  },
  { 
    id: 3, 
    icon: "🌐", 
    title: { es: "Networking", en: "Networking" },
    description: { es: "Configura y diagnostica redes en Linux", en: "Configure and diagnose networks on Linux" },
    href: null,
    lessons: 10,
    labs: 8,
    duration: 200,
    skills: ["TCP/IP", "DNS", "Firewall"]
  },
  { 
    id: 4, 
    icon: "🔐", 
    title: { es: "SSH", en: "SSH" },
    description: { es: "Conexiones seguras y gestión remota de servidores", en: "Secure connections and remote server management" },
    href: null,
    lessons: 6,
    labs: 5,
    duration: 90,
    skills: ["Keys", "Tunnels", "Config"]
  },
  { 
    id: 5, 
    icon: "📦", 
    title: { es: "Git & GitHub", en: "Git & GitHub" },
    description: { es: "Control de versiones y colaboración en proyectos", en: "Version control and project collaboration" },
    href: null,
    lessons: 8,
    labs: 6,
    duration: 150,
    skills: ["Commits", "Branches", "PRs"]
  },
  { 
    id: 6, 
    icon: "📜", 
    title: { es: "Bash Scripting", en: "Bash Scripting" },
    description: { es: "Automatiza tareas con scripts de shell", en: "Automate tasks with shell scripts" },
    href: null,
    lessons: 12,
    labs: 10,
    duration: 240,
    skills: ["Variables", "Loops", "Functions"]
  },
  { 
    id: 7, 
    icon: "🐳", 
    title: { es: "Docker", en: "Docker" },
    description: { es: "Containerización de aplicaciones", en: "Application containerization" },
    href: null,
    lessons: 10,
    labs: 8,
    duration: 200,
    skills: ["Images", "Compose", "Volumes"]
  },
  { 
    id: 8, 
    icon: "🌍", 
    title: { es: "Web Servers (Nginx)", en: "Web Servers (Nginx)" },
    description: { es: "Configura servidores web profesionales", en: "Configure professional web servers" },
    href: null,
    lessons: 8,
    labs: 6,
    duration: 160,
    skills: ["Virtual Hosts", "SSL", "Proxy"]
  },
  { 
    id: 9, 
    icon: "🗃️", 
    title: { es: "PostgreSQL", en: "PostgreSQL" },
    description: { es: "Administración de bases de datos relacionales", en: "Relational database administration" },
    href: null,
    lessons: 10,
    labs: 8,
    duration: 200,
    skills: ["SQL", "Backup", "Users"]
  },
  { 
    id: 10, 
    icon: "🛡️", 
    title: { es: "Seguridad Linux", en: "Linux Security" },
    description: { es: "Hardening y mejores prácticas de seguridad", en: "Hardening and security best practices" },
    href: null,
    lessons: 10,
    labs: 8,
    duration: 200,
    skills: ["iptables", "SELinux", "Audit"]
  },
  { 
    id: 11, 
    icon: "☁️", 
    title: { es: "Cloud (AWS)", en: "Cloud (AWS)" },
    description: { es: "Servicios en la nube de Amazon Web Services", en: "Amazon Web Services cloud services" },
    href: null,
    lessons: 15,
    labs: 12,
    duration: 300,
    skills: ["EC2", "S3", "IAM"]
  },
  { 
    id: 12, 
    icon: "🔄", 
    title: { es: "CI/CD", en: "CI/CD" },
    description: { es: "Integración y despliegue continuos", en: "Continuous integration and deployment" },
    href: null,
    lessons: 10,
    labs: 8,
    duration: 200,
    skills: ["GitHub Actions", "Jenkins", "Pipelines"]
  },
  { 
    id: 13, 
    icon: "🚀", 
    title: { es: "DevOps", en: "DevOps" },
    description: { es: "Prácticas y cultura DevOps", en: "DevOps practices and culture" },
    href: null,
    lessons: 12,
    labs: 10,
    duration: 240,
    skills: ["IaC", "Monitoring", "SRE"]
  },
  { 
    id: 14, 
    icon: "🏗️", 
    title: { es: "Terraform", en: "Terraform" },
    description: { es: "Infraestructura como código", en: "Infrastructure as code" },
    href: null,
    lessons: 10,
    labs: 8,
    duration: 200,
    skills: ["HCL", "State", "Modules"]
  },
  { 
    id: 15, 
    icon: "☸️", 
    title: { es: "Kubernetes", en: "Kubernetes" },
    description: { es: "Orquestación de contenedores a escala", en: "Container orchestration at scale" },
    href: null,
    lessons: 15,
    labs: 12,
    duration: 300,
    skills: ["Pods", "Services", "Helm"]
  },
];

export function Roadmap() {
  const { t, locale } = useTranslation();
  const { getModuleProgress, isExamPassed } = useProgressStore();
  const [filter, setFilter] = useState<"all" | "available" | "completed">("all");
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  const getLevelStatus = (levelId: number) => {
    const moduleId = `level-${levelId}`;
    const hasCourse = !!getCourse(moduleId);

    if (hasCourse) {
      const progress = getModuleProgress(moduleId);
      if (isExamPassed(`exam-${moduleId}`)) return "completed";
      if (progress > 0) return "in_progress";
      if (levelId === 0) return "available";
      return isExamPassed(`exam-level-${levelId - 1}`) ? "available" : "locked";
    }

    const prevExamPassed = isExamPassed(`exam-level-${levelId - 1}`);
    return prevExamPassed ? "available" : "locked";
  };

  const completedCount = levels.filter(l => getLevelStatus(l.id) === "completed").length;
  const inProgressCount = levels.filter(l => getLevelStatus(l.id) === "in_progress").length;
  const totalLessons = levels.reduce((sum, l) => sum + l.lessons, 0);
  const totalLabs = levels.reduce((sum, l) => sum + l.labs, 0);
  const overallProgress = Math.round((completedCount / levels.length) * 100);

  const filteredLevels = levels.filter(level => {
    const status = getLevelStatus(level.id);
    if (filter === "all") return true;
    if (filter === "available") return status === "available" || status === "in_progress";
    if (filter === "completed") return status === "completed";
    return true;
  });

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}
      <div className="mb-8 animate-[fade-in-up_0.4s_ease-out]">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600">
            <Map className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {t("roadmap.title")}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t("roadmap.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <Card className="mb-6 p-6 animate-[fade-in-up_0.4s_ease-out_0.1s_both]">
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-4">
            <ProgressRing value={overallProgress} size={80} strokeWidth={6}>
              <div className="text-center">
                <span className="text-lg font-bold">{overallProgress}%</span>
              </div>
            </ProgressRing>
            <div>
              <p className="text-sm text-zinc-500">
                {locale === "es" ? "Progreso total" : "Total progress"}
              </p>
              <p className="text-xl font-bold text-zinc-900 dark:text-white">
                {completedCount} / {levels.length}
              </p>
              <p className="text-sm text-zinc-500">
                {locale === "es" ? "niveles completados" : "levels completed"}
              </p>
            </div>
          </div>
          
          <div className="h-16 w-px bg-zinc-200 dark:bg-zinc-700 hidden sm:block" />
          
          <div className="flex gap-6">
            <div className="text-center">
              <div className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-blue-500" />
                <span className="text-2xl font-bold text-zinc-900 dark:text-white">{totalLessons}</span>
              </div>
              <p className="text-xs text-zinc-500">{locale === "es" ? "Lecciones" : "Lessons"}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-purple-500" />
                <span className="text-2xl font-bold text-zinc-900 dark:text-white">{totalLabs}</span>
              </div>
              <p className="text-xs text-zinc-500">{locale === "es" ? "Labs" : "Labs"}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-green-500" />
                <span className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {Math.round(levels.reduce((sum, l) => sum + l.duration, 0) / 60)}h
                </span>
              </div>
              <p className="text-xs text-zinc-500">{locale === "es" ? "Contenido" : "Content"}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Filters */}
      <div className="mb-6 flex items-center gap-2 animate-[fade-in-up_0.4s_ease-out_0.15s_both]">
        <Filter className="h-4 w-4 text-zinc-400" />
        {[
          { id: "all", label: { es: "Todos", en: "All" } },
          { id: "available", label: { es: "Disponibles", en: "Available" } },
          { id: "completed", label: { es: "Completados", en: "Completed" } },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id as typeof filter)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
              filter === f.id
                ? "bg-indigo-600 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400"
            }`}
          >
            {f.label[locale as "es" | "en"]}
          </button>
        ))}
      </div>

      {/* Roadmap */}
      <div className="relative">
        <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-zinc-300 dark:to-zinc-700" />

        <div className="space-y-4">
          {filteredLevels.map((level, index) => {
            const status = getLevelStatus(level.id);
            const progress = getModuleProgress(`level-${level.id}`);
            const isLocked = status === "locked";
            const isCompleted = status === "completed";
            const isInProgress = status === "in_progress";
            const isExpanded = expandedLevel === level.id;

            return (
              <div 
                key={level.id} 
                className="relative pl-16 animate-[fade-in-up_0.4s_ease-out_both]"
                style={{ animationDelay: `${0.2 + index * 0.03}s` }}
              >
                {/* Node */}
                <div
                  className={`absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all ${
                    isCompleted
                      ? "border-green-500 bg-green-500 text-white"
                      : isInProgress
                        ? "border-blue-500 bg-blue-500 text-white animate-pulse"
                        : isLocked
                          ? "border-zinc-300 bg-zinc-100 text-zinc-400 dark:border-zinc-600 dark:bg-zinc-800"
                          : "border-indigo-500 bg-white text-indigo-500 dark:bg-zinc-900"
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
                <Card 
                  hover={!isLocked}
                  className={`overflow-hidden transition-all ${isLocked ? "opacity-50" : ""}`}
                >
                  <div 
                    className={`h-1 ${
                      isCompleted ? "bg-green-500" : 
                      isInProgress ? "bg-blue-500" : 
                      isLocked ? "bg-zinc-300 dark:bg-zinc-700" : "bg-indigo-500"
                    }`}
                    style={{ width: isInProgress ? `${progress}%` : isCompleted ? "100%" : "0%" }}
                  />
                  <div 
                    className="p-4 cursor-pointer"
                    onClick={() => setExpandedLevel(isExpanded ? null : level.id)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{level.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
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
                             isLocked ? t("roadmap.locked") : 
                             level.href ? t("roadmap.available") : (locale === "es" ? "Próximamente" : "Coming Soon")}
                          </Badge>
                        </div>
                        <p className="font-medium text-zinc-800 dark:text-zinc-200">
                          {level.title[locale as "es" | "en"]}
                        </p>
                        <p className="text-sm text-zinc-500 line-clamp-1">
                          {level.description[locale as "es" | "en"]}
                        </p>
                      </div>
                      <ChevronRight className={`h-5 w-5 text-zinc-400 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700 animate-[fade-in_0.2s_ease-out]">
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                          {level.description[locale as "es" | "en"]}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <BookOpen className="h-4 w-4 text-blue-500" />
                            <span>{level.lessons} {locale === "es" ? "lecciones" : "lessons"}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Sparkles className="h-4 w-4 text-purple-500" />
                            <span>{level.labs} labs</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-green-500" />
                            <span>{level.duration} min</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {level.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {level.href && !isLocked && (
                          <Link to={level.href}>
                            <Button variant="primary" className="w-full">
                              {isInProgress ? (locale === "es" ? "Continuar" : "Continue") : (locale === "es" ? "Comenzar" : "Start")}
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        )}
                        
                        {!level.href && !isLocked && (
                          <Button variant="secondary" className="w-full" disabled>
                            {locale === "es" ? "Próximamente" : "Coming Soon"}
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Empty State */}
      {filteredLevels.length === 0 && (
        <Card className="p-12 text-center">
          <Map className="mx-auto h-12 w-12 text-zinc-300 dark:text-zinc-600" />
          <h3 className="mt-4 text-lg font-medium text-zinc-900 dark:text-white">
            {locale === "es" ? "No hay niveles" : "No levels"}
          </h3>
          <p className="mt-2 text-zinc-500">
            {locale === "es"
              ? "No se encontraron niveles con este filtro"
              : "No levels found with this filter"}
          </p>
        </Card>
      )}
    </div>
  );
}
