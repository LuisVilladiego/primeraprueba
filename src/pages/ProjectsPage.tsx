import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useUserStore } from "@/stores/userStore";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/Progress";
import {
  FolderKanban,
  Clock,
  Star,
  ChevronRight,
  Lock,
  CheckCircle,
  Play,
  Terminal,
  Server,
  Shield,
  Network,
  Database,
  Cloud,
  FileCode,
  Layers,
} from "lucide-react";

interface Project {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: number;
  xpReward: number;
  requiredLevel: number;
  icon: React.ElementType;
  color: string;
  skills: string[];
  steps: number;
}

const projects: Project[] = [
  {
    id: "file-organizer",
    title: { es: "Organizador de Archivos", en: "File Organizer" },
    description: {
      es: "Crea un script que organice automáticamente archivos en carpetas según su extensión",
      en: "Create a script that automatically organizes files into folders by extension",
    },
    difficulty: "beginner",
    duration: 30,
    xpReward: 150,
    requiredLevel: 0,
    icon: FileCode,
    color: "from-blue-500 to-cyan-500",
    skills: ["bash", "mv", "mkdir", "for loops"],
    steps: 5,
  },
  {
    id: "system-monitor",
    title: { es: "Monitor del Sistema", en: "System Monitor" },
    description: {
      es: "Desarrolla un dashboard en terminal que muestre CPU, memoria y disco en tiempo real",
      en: "Build a terminal dashboard showing CPU, memory, and disk usage in real-time",
    },
    difficulty: "beginner",
    duration: 45,
    xpReward: 200,
    requiredLevel: 0,
    icon: Terminal,
    color: "from-green-500 to-emerald-500",
    skills: ["top", "free", "df", "watch"],
    steps: 6,
  },
  {
    id: "backup-script",
    title: { es: "Script de Backup", en: "Backup Script" },
    description: {
      es: "Automatiza copias de seguridad incrementales con compresión y rotación",
      en: "Automate incremental backups with compression and rotation",
    },
    difficulty: "intermediate",
    duration: 60,
    xpReward: 300,
    requiredLevel: 1,
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: ["tar", "rsync", "cron", "gzip"],
    steps: 8,
  },
  {
    id: "web-server",
    title: { es: "Servidor Web Básico", en: "Basic Web Server" },
    description: {
      es: "Configura un servidor Nginx con virtual hosts y SSL básico",
      en: "Set up an Nginx server with virtual hosts and basic SSL",
    },
    difficulty: "intermediate",
    duration: 90,
    xpReward: 400,
    requiredLevel: 2,
    icon: Server,
    color: "from-orange-500 to-red-500",
    skills: ["nginx", "systemctl", "openssl", "firewall"],
    steps: 10,
  },
  {
    id: "network-scanner",
    title: { es: "Escáner de Red", en: "Network Scanner" },
    description: {
      es: "Construye una herramienta para descubrir dispositivos y puertos en tu red local",
      en: "Build a tool to discover devices and ports on your local network",
    },
    difficulty: "intermediate",
    duration: 75,
    xpReward: 350,
    requiredLevel: 2,
    icon: Network,
    color: "from-indigo-500 to-blue-500",
    skills: ["nmap", "ping", "arp", "netstat"],
    steps: 7,
  },
  {
    id: "firewall-config",
    title: { es: "Configuración de Firewall", en: "Firewall Configuration" },
    description: {
      es: "Implementa reglas de firewall seguras con iptables o ufw",
      en: "Implement secure firewall rules with iptables or ufw",
    },
    difficulty: "advanced",
    duration: 120,
    xpReward: 500,
    requiredLevel: 3,
    icon: Shield,
    color: "from-red-500 to-rose-500",
    skills: ["iptables", "ufw", "security", "networking"],
    steps: 12,
  },
  {
    id: "docker-app",
    title: { es: "Aplicación con Docker", en: "Docker Application" },
    description: {
      es: "Containeriza una aplicación web con Docker y Docker Compose",
      en: "Containerize a web application with Docker and Docker Compose",
    },
    difficulty: "advanced",
    duration: 150,
    xpReward: 600,
    requiredLevel: 4,
    icon: Layers,
    color: "from-sky-500 to-blue-500",
    skills: ["docker", "dockerfile", "compose", "volumes"],
    steps: 15,
  },
  {
    id: "cloud-deploy",
    title: { es: "Despliegue en la Nube", en: "Cloud Deployment" },
    description: {
      es: "Despliega una infraestructura completa en AWS/GCP usando CLI",
      en: "Deploy complete infrastructure on AWS/GCP using CLI",
    },
    difficulty: "advanced",
    duration: 180,
    xpReward: 800,
    requiredLevel: 5,
    icon: Cloud,
    color: "from-violet-500 to-purple-500",
    skills: ["aws-cli", "gcloud", "terraform", "ssh"],
    steps: 20,
  },
];

export function ProjectsPage() {
  const { locale } = useTranslation();
  const { stats } = useUserStore();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  const userLevel = stats.level;

  const difficulties = [
    { id: "all", label: { es: "Todos", en: "All" } },
    { id: "beginner", label: { es: "Principiante", en: "Beginner" }, color: "text-green-600" },
    { id: "intermediate", label: { es: "Intermedio", en: "Intermediate" }, color: "text-yellow-600" },
    { id: "advanced", label: { es: "Avanzado", en: "Advanced" }, color: "text-red-600" },
  ];

  const filteredProjects = projects.filter(
    (p) => selectedDifficulty === "all" || p.difficulty === selectedDifficulty
  );

  const completedProjects = 0;

  const getDifficultyBadge = (difficulty: string) => {
    const variants: Record<string, "success" | "warning" | "danger"> = {
      beginner: "success",
      intermediate: "warning",
      advanced: "danger",
    };
    const labels: Record<string, { es: string; en: string }> = {
      beginner: { es: "Principiante", en: "Beginner" },
      intermediate: { es: "Intermedio", en: "Intermediate" },
      advanced: { es: "Avanzado", en: "Advanced" },
    };
    return (
      <Badge variant={variants[difficulty]} size="sm">
        {labels[difficulty][locale as "es" | "en"]}
      </Badge>
    );
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="mb-8 animate-[fade-in-up_0.4s_ease-out]">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600">
            <FolderKanban className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {locale === "es" ? "Proyectos Prácticos" : "Practical Projects"}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              {locale === "es"
                ? "Aprende construyendo proyectos del mundo real"
                : "Learn by building real-world projects"}
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <Card className="mb-6 p-6 animate-[fade-in-up_0.4s_ease-out_0.1s_both]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm text-zinc-500">
                {locale === "es" ? "Proyectos completados" : "Projects completed"}
              </p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                {completedProjects} / {projects.length}
              </p>
            </div>
            <div className="h-12 w-px bg-zinc-200 dark:bg-zinc-700" />
            <div>
              <p className="text-sm text-zinc-500">
                {locale === "es" ? "XP disponible" : "Available XP"}
              </p>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {projects.reduce((sum, p) => sum + p.xpReward, 0).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="w-full sm:w-48">
            <Progress 
              value={completedProjects} 
              max={projects.length} 
              size="lg" 
              showLabel 
              label={locale === "es" ? "Progreso" : "Progress"}
            />
          </div>
        </div>
      </Card>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2 animate-[fade-in-up_0.4s_ease-out_0.15s_both]">
        {difficulties.map((diff) => (
          <button
            key={diff.id}
            onClick={() => setSelectedDifficulty(diff.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              selectedDifficulty === diff.id
                ? "bg-violet-600 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            {diff.label[locale as "es" | "en"]}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project, index) => {
          const isLocked = userLevel < project.requiredLevel;
          const Icon = project.icon;

          return (
            <Card
              key={project.id}
              hover={!isLocked}
              className={`overflow-hidden transition-all animate-[fade-in-up_0.4s_ease-out_both] ${
                isLocked ? "opacity-60" : ""
              }`}
              style={{ animationDelay: `${0.2 + index * 0.05}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${isLocked ? "from-zinc-300 to-zinc-400 dark:from-zinc-600 dark:to-zinc-700" : project.color}`} />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
                    isLocked 
                      ? "bg-zinc-100 dark:bg-zinc-800" 
                      : `bg-gradient-to-br ${project.color}`
                  }`}>
                    {isLocked ? (
                      <Lock className="h-6 w-6 text-zinc-400" />
                    ) : (
                      <Icon className="h-7 w-7 text-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-zinc-900 dark:text-white">
                        {project.title[locale as "es" | "en"]}
                      </h3>
                      {getDifficultyBadge(project.difficulty)}
                    </div>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                      {project.description[locale as "es" | "en"]}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4 text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {project.duration} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {project.xpReward} XP
                    </span>
                  </div>
                  <span className="text-zinc-400">
                    {project.steps} {locale === "es" ? "pasos" : "steps"}
                  </span>
                </div>

                {/* Action */}
                <div className="mt-4">
                  {isLocked ? (
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Lock className="h-4 w-4" />
                      {locale === "es"
                        ? `Requiere Nivel ${project.requiredLevel}`
                        : `Requires Level ${project.requiredLevel}`}
                    </div>
                  ) : (
                    <Button variant="primary" className="w-full">
                      <Play className="h-4 w-4" />
                      {locale === "es" ? "Comenzar Proyecto" : "Start Project"}
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <Card className="p-12 text-center">
          <FolderKanban className="mx-auto h-12 w-12 text-zinc-300 dark:text-zinc-600" />
          <h3 className="mt-4 text-lg font-medium text-zinc-900 dark:text-white">
            {locale === "es" ? "No hay proyectos" : "No projects"}
          </h3>
          <p className="mt-2 text-zinc-500">
            {locale === "es"
              ? "No se encontraron proyectos con este filtro"
              : "No projects found with this filter"}
          </p>
        </Card>
      )}

      {/* Call to Action */}
      <Card className="mt-8 p-6 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 animate-[fade-in-up_0.4s_ease-out_0.5s_both]">
        <div className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
            <Terminal className="h-8 w-8 text-violet-600 dark:text-violet-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {locale === "es" ? "¿Listo para practicar?" : "Ready to practice?"}
            </h3>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              {locale === "es"
                ? "Abre la terminal y comienza a ejecutar comandos para completar los proyectos"
                : "Open the terminal and start running commands to complete projects"}
            </p>
          </div>
          <Link to="/terminal">
            <Button variant="primary" size="lg">
              <Terminal className="h-5 w-5" />
              {locale === "es" ? "Abrir Terminal" : "Open Terminal"}
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
