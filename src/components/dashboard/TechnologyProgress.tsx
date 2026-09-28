"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import {
  Terminal,
  Server,
  Network,
  Key,
  GitBranch,
  FileCode,
  Container,
  Globe,
  Database,
  Shield,
  Cloud,
  Rocket,
  Settings,
  Box,
  Layers,
} from "lucide-react";

interface TechnologyItem {
  id: string;
  name: { es: string; en: string };
  icon: React.ReactNode;
  progress: number;
  level: number;
  status: "locked" | "available" | "in_progress" | "completed";
}

const technologies: TechnologyItem[] = [
  {
    id: "fundamentals",
    name: { es: "Fundamentos", en: "Fundamentals" },
    icon: <Terminal className="h-5 w-5" />,
    progress: 0,
    level: 0,
    status: "available",
  },
  {
    id: "linux",
    name: { es: "Linux", en: "Linux" },
    icon: <Terminal className="h-5 w-5" />,
    progress: 0,
    level: 1,
    status: "locked",
  },
  {
    id: "admin",
    name: { es: "Administración", en: "Administration" },
    icon: <Server className="h-5 w-5" />,
    progress: 0,
    level: 2,
    status: "locked",
  },
  {
    id: "networking",
    name: { es: "Redes", en: "Networking" },
    icon: <Network className="h-5 w-5" />,
    progress: 0,
    level: 3,
    status: "locked",
  },
  {
    id: "ssh",
    name: { es: "SSH", en: "SSH" },
    icon: <Key className="h-5 w-5" />,
    progress: 0,
    level: 4,
    status: "locked",
  },
  {
    id: "git",
    name: { es: "Git", en: "Git" },
    icon: <GitBranch className="h-5 w-5" />,
    progress: 0,
    level: 5,
    status: "locked",
  },
  {
    id: "bash",
    name: { es: "Bash", en: "Bash" },
    icon: <FileCode className="h-5 w-5" />,
    progress: 0,
    level: 6,
    status: "locked",
  },
  {
    id: "docker",
    name: { es: "Docker", en: "Docker" },
    icon: <Container className="h-5 w-5" />,
    progress: 0,
    level: 7,
    status: "locked",
  },
  {
    id: "webservers",
    name: { es: "Servidores Web", en: "Web Servers" },
    icon: <Globe className="h-5 w-5" />,
    progress: 0,
    level: 8,
    status: "locked",
  },
  {
    id: "postgresql",
    name: { es: "PostgreSQL", en: "PostgreSQL" },
    icon: <Database className="h-5 w-5" />,
    progress: 0,
    level: 9,
    status: "locked",
  },
  {
    id: "security",
    name: { es: "Seguridad", en: "Security" },
    icon: <Shield className="h-5 w-5" />,
    progress: 0,
    level: 10,
    status: "locked",
  },
  {
    id: "cloud",
    name: { es: "Cloud", en: "Cloud" },
    icon: <Cloud className="h-5 w-5" />,
    progress: 0,
    level: 11,
    status: "locked",
  },
  {
    id: "cicd",
    name: { es: "CI/CD", en: "CI/CD" },
    icon: <Rocket className="h-5 w-5" />,
    progress: 0,
    level: 12,
    status: "locked",
  },
  {
    id: "devops",
    name: { es: "DevOps", en: "DevOps" },
    icon: <Settings className="h-5 w-5" />,
    progress: 0,
    level: 13,
    status: "locked",
  },
  {
    id: "terraform",
    name: { es: "Terraform", en: "Terraform" },
    icon: <Box className="h-5 w-5" />,
    progress: 0,
    level: 14,
    status: "locked",
  },
  {
    id: "kubernetes",
    name: { es: "Kubernetes", en: "Kubernetes" },
    icon: <Layers className="h-5 w-5" />,
    progress: 0,
    level: 15,
    status: "locked",
  },
];

function getStatusColor(status: TechnologyItem["status"]) {
  switch (status) {
    case "completed":
      return "text-green-600 dark:text-green-400";
    case "in_progress":
      return "text-blue-600 dark:text-blue-400";
    case "available":
      return "text-yellow-600 dark:text-yellow-400";
    case "locked":
      return "text-zinc-400 dark:text-zinc-500";
    default:
      return "text-zinc-400";
  }
}

function getProgressVariant(status: TechnologyItem["status"]) {
  switch (status) {
    case "completed":
      return "success" as const;
    case "in_progress":
      return "default" as const;
    default:
      return "default" as const;
  }
}

export function TechnologyProgress() {
  const { t, tBilingual } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("dashboard.progressByTechnology")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {technologies.map((tech) => (
            <div key={tech.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={getStatusColor(tech.status)}>{tech.icon}</span>
                  <span
                    className={`text-sm font-medium ${
                      tech.status === "locked"
                        ? "text-zinc-400 dark:text-zinc-500"
                        : "text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    {tBilingual(tech.name)}
                  </span>
                  {tech.status === "locked" && (
                    <span className="text-xs text-zinc-400">🔒</span>
                  )}
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {tech.progress}%
                </span>
              </div>
              <Progress
                value={tech.progress}
                size="sm"
                variant={getProgressVariant(tech.status)}
                className={tech.status === "locked" ? "opacity-50" : ""}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
