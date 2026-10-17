import { useTranslation } from "@/hooks/useTranslation";
import { useUserStore } from "@/stores/userStore";
import { useProgressStore } from "@/stores/progressStore";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { 
  Award, 
  Download, 
  Lock, 
  CheckCircle, 
  Calendar,
  Star,
  Share2
} from "lucide-react";

interface Certificate {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  level: number;
  requiredProgress: number;
  icon: string;
  color: string;
}

const certificates: Certificate[] = [
  { id: "level-0", level: 0, icon: "🎯", color: "from-blue-500 to-cyan-500", requiredProgress: 100, title: { es: "Fundamentos de Computación", en: "Computing Fundamentals" }, description: { es: "Base sólida en hardware, SO, procesos y CLI.", en: "Solid base in hardware, OS, processes, and CLI." } },
  { id: "level-1", level: 1, icon: "💻", color: "from-green-500 to-emerald-500", requiredProgress: 100, title: { es: "Terminal y Comandos Básicos", en: "Terminal and Basic Commands" }, description: { es: "Navegación, archivos y ayuda en la shell.", en: "Navigation, files, and shell help." } },
  { id: "level-2", level: 2, icon: "📁", color: "from-purple-500 to-pink-500", requiredProgress: 100, title: { es: "Sistema de Archivos Linux", en: "Linux File System" }, description: { es: "FHS, enlaces, búsqueda y uso de disco.", en: "FHS, links, search, and disk usage." } },
  { id: "level-3", level: 3, icon: "🔐", color: "from-orange-500 to-red-500", requiredProgress: 100, title: { es: "Permisos y Usuarios", en: "Permissions and Users" }, description: { es: "Modelo rwx, usuarios, grupos y sudo.", en: "rwx model, users, groups, and sudo." } },
  { id: "level-4", level: 4, icon: "⚙️", color: "from-indigo-500 to-blue-500", requiredProgress: 100, title: { es: "Procesos y Gestión del Sistema", en: "Processes and System Management" }, description: { es: "Señales, monitoreo, jobs y recursos.", en: "Signals, monitoring, jobs, and resources." } },
  { id: "level-5", level: 5, icon: "📜", color: "from-amber-500 to-orange-500", requiredProgress: 100, title: { es: "Shell Scripting Básico", en: "Basic Shell Scripting" }, description: { es: "Automatización con Bash en producción.", en: "Bash automation for production." } },
  { id: "level-6", level: 6, icon: "✏️", color: "from-teal-500 to-cyan-500", requiredProgress: 100, title: { es: "Editores de Texto", en: "Text Editors" }, description: { es: "Vim y nano para configuración y código.", en: "Vim and nano for config and code." } },
  { id: "level-7", level: 7, icon: "🔍", color: "from-violet-500 to-purple-500", requiredProgress: 100, title: { es: "Procesamiento de Texto", en: "Text Processing" }, description: { es: "grep, sed, awk y expresiones regulares.", en: "grep, sed, awk, and regular expressions." } },
  { id: "level-8", level: 8, icon: "📦", color: "from-sky-500 to-blue-500", requiredProgress: 100, title: { es: "Gestión de Paquetes", en: "Package Management" }, description: { es: "apt, dnf, snap y repositorios.", en: "apt, dnf, snap, and repositories." } },
  { id: "level-9", level: 9, icon: "🌐", color: "from-blue-600 to-indigo-500", requiredProgress: 100, title: { es: "Networking Básico", en: "Basic Networking" }, description: { es: "TCP/IP, DNS, diagnóstico y firewalls.", en: "TCP/IP, DNS, diagnostics, and firewalls." } },
  { id: "level-10", level: 10, icon: "🔧", color: "from-zinc-500 to-slate-600", requiredProgress: 100, title: { es: "Servicios y systemd", en: "Services and systemd" }, description: { es: "Units, journalctl, timers y servicios web.", en: "Units, journalctl, timers, and web services." } },
  { id: "level-11", level: 11, icon: "🔑", color: "from-red-500 to-rose-500", requiredProgress: 100, title: { es: "SSH y Seguridad", en: "SSH and Security" }, description: { es: "Acceso remoto, llaves y hardening.", en: "Remote access, keys, and hardening." } },
  { id: "level-12", level: 12, icon: "🚀", color: "from-fuchsia-500 to-pink-500", requiredProgress: 100, title: { es: "Scripting Avanzado", en: "Advanced Scripting" }, description: { es: "Scripts robustos, cron y debugging.", en: "Robust scripts, cron, and debugging." } },
  { id: "level-13", level: 13, icon: "🌿", color: "from-lime-500 to-green-600", requiredProgress: 100, title: { es: "Git y Control de Versiones", en: "Git and Version Control" }, description: { es: "Colaboración, branches y CI/CD.", en: "Collaboration, branches, and CI/CD." } },
  { id: "level-14", level: 14, icon: "🐳", color: "from-cyan-500 to-blue-600", requiredProgress: 100, title: { es: "Docker Fundamentos", en: "Docker Fundamentals" }, description: { es: "Imágenes, Dockerfile, redes y Compose.", en: "Images, Dockerfile, networking, and Compose." } },
  { id: "level-15", level: 15, icon: "☸️", color: "from-blue-600 to-indigo-600", requiredProgress: 100, title: { es: "Kubernetes Fundamentos", en: "Kubernetes Fundamentals" }, description: { es: "Pods, Deployments, Services e Helm.", en: "Pods, Deployments, Services, and Helm." } },
];

export function CertificatesPage() {
  const { locale } = useTranslation();
  const { name, stats } = useUserStore();
  const { getModuleProgress, passedExams } = useProgressStore();

  const getCertificateStatus = (cert: Certificate) => {
    const moduleId = cert.id;
    const examId = `exam-${moduleId}`;
    const unlocked =
      cert.level === 0 ||
      passedExams.includes(`exam-level-${cert.level - 1}`) ||
      getModuleProgress(`level-${cert.level - 1}`) >= 100;

    if (!unlocked) return "locked";

    const progress = getModuleProgress(moduleId);
    const examPassed = passedExams.includes(examId);

    if (progress >= cert.requiredProgress && examPassed) return "earned";
    if (progress > 0 || examPassed) return "in-progress";
    return "locked";
  };

  const earnedCertificates = certificates.filter(
    (c) => getCertificateStatus(c) === "earned"
  );

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}
      <div className="mb-8 animate-[fade-in-up_0.4s_ease-out]">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500">
            <Award className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {locale === "es" ? "Mis Certificados" : "My Certificates"}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              {locale === "es"
                ? "Obtén certificados completando niveles y aprobando exámenes"
                : "Earn certificates by completing levels and passing exams"}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <Card className="mb-8 p-6 animate-[fade-in-up_0.4s_ease-out_0.1s_both]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-500">
              {locale === "es" ? "Certificados obtenidos" : "Certificates earned"}
            </p>
            <p className="text-3xl font-bold text-zinc-900 dark:text-white">
              {earnedCertificates.length} / {certificates.length}
            </p>
          </div>
          <div className="flex gap-2">
            {earnedCertificates.length > 0 && (
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
                {locale === "es" ? "Compartir" : "Share"}
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Earned Certificates */}
      {earnedCertificates.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
            {locale === "es" ? "Certificados Obtenidos" : "Earned Certificates"}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {earnedCertificates.map((cert, index) => (
              <Card
                key={cert.id}
                hover
                className="overflow-hidden animate-[fade-in-up_0.4s_ease-out_both]"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-3xl dark:from-amber-900/30 dark:to-orange-900/30">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-zinc-900 dark:text-white">
                          {cert.title[locale as "es" | "en"]}
                        </h3>
                        <Badge variant="success" size="sm">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          {locale === "es" ? "Obtenido" : "Earned"}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm text-zinc-500">
                        {cert.description[locale as "es" | "en"]}
                      </p>
                      <div className="mt-3 flex items-center gap-4 text-sm text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(new Date())}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {locale === "es" ? "Nivel" : "Level"} {cert.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="primary" size="sm" className="flex-1">
                      <Download className="h-4 w-4" />
                      {locale === "es" ? "Descargar PDF" : "Download PDF"}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Available Certificates */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
          {locale === "es" ? "Certificados Disponibles" : "Available Certificates"}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificates
            .filter((c) => getCertificateStatus(c) !== "earned")
            .map((cert, index) => {
              const status = getCertificateStatus(cert);
              const isLocked = status === "locked";
              const isInProgress = status === "in-progress";
              const progress = cert.level === 0 ? getModuleProgress("level-0") : 0;

              return (
                <Card
                  key={cert.id}
                  hover={!isLocked}
                  className={`overflow-hidden transition-all animate-[fade-in-up_0.4s_ease-out_both] ${
                    isLocked ? "opacity-60" : ""
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${isLocked ? "from-zinc-300 to-zinc-400 dark:from-zinc-600 dark:to-zinc-700" : cert.color}`} />
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg text-2xl ${
                        isLocked 
                          ? "bg-zinc-100 dark:bg-zinc-800" 
                          : "bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30"
                      }`}>
                        {isLocked ? <Lock className="h-5 w-5 text-zinc-400" /> : cert.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="truncate font-medium text-zinc-900 dark:text-white">
                            {cert.title[locale as "es" | "en"]}
                          </h3>
                        </div>
                        <p className="mt-0.5 text-xs text-zinc-500">
                          {locale === "es" ? "Nivel" : "Level"} {cert.level}
                        </p>
                      </div>
                    </div>
                    
                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                      {cert.description[locale as "es" | "en"]}
                    </p>

                    {isInProgress && (
                      <div className="mt-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-zinc-500">
                            {locale === "es" ? "Progreso" : "Progress"}
                          </span>
                          <span className="font-medium text-zinc-700 dark:text-zinc-300">
                            {progress}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${cert.color} transition-all duration-500`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {isLocked && (
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-400">
                        <Lock className="h-3 w-3" />
                        {locale === "es" 
                          ? `Completa el Nivel ${cert.level - 1} primero` 
                          : `Complete Level ${cert.level - 1} first`}
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
        </div>
      </div>

      {/* Certificate Preview Modal placeholder */}
      {earnedCertificates.length > 0 && (
        <Card className="mt-8 p-6 animate-[fade-in-up_0.4s_ease-out_0.5s_both]">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20">
              <Award className="h-10 w-10 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {locale === "es" 
                ? `¡Felicidades, ${name}!` 
                : `Congratulations, ${name}!`}
            </h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {locale === "es"
                ? `Has obtenido ${earnedCertificates.length} certificado${earnedCertificates.length > 1 ? "s" : ""}. ¡Sigue aprendiendo para desbloquear más!`
                : `You've earned ${earnedCertificates.length} certificate${earnedCertificates.length > 1 ? "s" : ""}. Keep learning to unlock more!`}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}
