import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Lightbulb, Copy, Check, ChevronLeft, ChevronRight, Shuffle } from "lucide-react";

interface Tip {
  id: number;
  title: { es: string; en: string };
  description: { es: string; en: string };
  command?: string;
  category: "terminal" | "productivity" | "security" | "networking" | "general";
}

const tips: Tip[] = [
  {
    id: 1,
    title: { es: "Historial de comandos", en: "Command history" },
    description: { 
      es: "Usa Ctrl+R para buscar comandos anteriores en tu historial. Escribe parte del comando y presiona Enter.",
      en: "Use Ctrl+R to search previous commands in your history. Type part of the command and press Enter."
    },
    command: "Ctrl+R",
    category: "terminal",
  },
  {
    id: 2,
    title: { es: "Salida del último comando", en: "Last command output" },
    description: { 
      es: "Usa !! para repetir el último comando. Útil con sudo: 'sudo !!' ejecuta el último comando como root.",
      en: "Use !! to repeat the last command. Useful with sudo: 'sudo !!' runs the last command as root."
    },
    command: "sudo !!",
    category: "terminal",
  },
  {
    id: 3,
    title: { es: "Crear múltiples directorios", en: "Create multiple directories" },
    description: { 
      es: "Usa llaves {} para crear múltiples directorios o archivos de una vez.",
      en: "Use braces {} to create multiple directories or files at once."
    },
    command: "mkdir -p proyecto/{src,tests,docs}",
    category: "productivity",
  },
  {
    id: 4,
    title: { es: "Ver procesos en tiempo real", en: "View processes in real-time" },
    description: { 
      es: "Usa htop en lugar de top para una vista más interactiva de los procesos del sistema.",
      en: "Use htop instead of top for a more interactive view of system processes."
    },
    command: "htop",
    category: "general",
  },
  {
    id: 5,
    title: { es: "Buscar archivos grandes", en: "Find large files" },
    description: { 
      es: "Encuentra los archivos más grandes en un directorio ordenados por tamaño.",
      en: "Find the largest files in a directory sorted by size."
    },
    command: "du -ah . | sort -rh | head -20",
    category: "productivity",
  },
  {
    id: 6,
    title: { es: "Permisos de archivos", en: "File permissions" },
    description: { 
      es: "Recuerda: r=4, w=2, x=1. Así que 755 significa rwxr-xr-x (lectura y ejecución para todos, escritura solo owner).",
      en: "Remember: r=4, w=2, x=1. So 755 means rwxr-xr-x (read and execute for all, write only for owner)."
    },
    command: "chmod 755 script.sh",
    category: "security",
  },
  {
    id: 7,
    title: { es: "Ver tu IP pública", en: "View your public IP" },
    description: { 
      es: "Obtén tu dirección IP pública rápidamente desde la terminal.",
      en: "Quickly get your public IP address from the terminal."
    },
    command: "curl ifconfig.me",
    category: "networking",
  },
  {
    id: 8,
    title: { es: "Alias personalizados", en: "Custom aliases" },
    description: { 
      es: "Crea alias en ~/.bashrc para comandos que usas frecuentemente.",
      en: "Create aliases in ~/.bashrc for commands you use frequently."
    },
    command: "alias ll='ls -la'",
    category: "productivity",
  },
  {
    id: 9,
    title: { es: "Ejecutar comando al inicio", en: "Run command at startup" },
    description: { 
      es: "Añade comandos a ~/.bashrc para que se ejecuten cada vez que abras una terminal.",
      en: "Add commands to ~/.bashrc to run them every time you open a terminal."
    },
    category: "general",
  },
  {
    id: 10,
    title: { es: "Matar proceso por nombre", en: "Kill process by name" },
    description: { 
      es: "Usa pkill para terminar procesos por nombre en lugar de buscar el PID.",
      en: "Use pkill to terminate processes by name instead of looking up the PID."
    },
    command: "pkill firefox",
    category: "general",
  },
  {
    id: 11,
    title: { es: "Descargar archivos", en: "Download files" },
    description: { 
      es: "Usa wget -c para continuar descargas interrumpidas.",
      en: "Use wget -c to resume interrupted downloads."
    },
    command: "wget -c https://example.com/file.zip",
    category: "networking",
  },
  {
    id: 12,
    title: { es: "Ver espacio en disco", en: "View disk space" },
    description: { 
      es: "df -h muestra el espacio en disco en formato legible (GB, MB).",
      en: "df -h shows disk space in human-readable format (GB, MB)."
    },
    command: "df -h",
    category: "general",
  },
  {
    id: 13,
    title: { es: "Comprimir archivos", en: "Compress files" },
    description: { 
      es: "Crea archivos tar.gz para comprimir directorios completos.",
      en: "Create tar.gz files to compress entire directories."
    },
    command: "tar -czvf backup.tar.gz directorio/",
    category: "productivity",
  },
  {
    id: 14,
    title: { es: "SSH sin contraseña", en: "SSH without password" },
    description: { 
      es: "Genera y copia tu clave SSH para conectarte sin contraseña.",
      en: "Generate and copy your SSH key to connect without a password."
    },
    command: "ssh-keygen && ssh-copy-id user@server",
    category: "security",
  },
  {
    id: 15,
    title: { es: "Monitorear logs en vivo", en: "Monitor live logs" },
    description: { 
      es: "Usa tail -f para ver los logs en tiempo real mientras se actualizan.",
      en: "Use tail -f to watch logs in real-time as they update."
    },
    command: "tail -f /var/log/syslog",
    category: "general",
  },
];

const categoryColors: Record<string, string> = {
  terminal: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  productivity: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  security: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  networking: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  general: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
};

const categoryLabels: Record<string, { es: string; en: string }> = {
  terminal: { es: "Terminal", en: "Terminal" },
  productivity: { es: "Productividad", en: "Productivity" },
  security: { es: "Seguridad", en: "Security" },
  networking: { es: "Redes", en: "Networking" },
  general: { es: "General", en: "General" },
};

export function DailyTip() {
  const { locale } = useTranslation();
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
    );
    setCurrentTipIndex(dayOfYear % tips.length);
  }, []);

  const tip = tips[currentTipIndex];

  const handleCopy = () => {
    if (tip.command) {
      navigator.clipboard.writeText(tip.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrev = () => {
    setCurrentTipIndex((prev) => (prev - 1 + tips.length) % tips.length);
  };

  const handleNext = () => {
    setCurrentTipIndex((prev) => (prev + 1) % tips.length);
  };

  const handleRandom = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * tips.length);
    } while (newIndex === currentTipIndex);
    setCurrentTipIndex(newIndex);
  };

  return (
    <Card hover className="overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500" />
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              {locale === "es" ? "Tip del Día" : "Tip of the Day"}
            </h3>
          </div>
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[tip.category]}`}>
            {categoryLabels[tip.category][locale as "es" | "en"]}
          </span>
        </div>

        <h4 className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">
          {tip.title[locale as "es" | "en"]}
        </h4>
        
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          {tip.description[locale as "es" | "en"]}
        </p>

        {tip.command && (
          <div className="flex items-center gap-2 mb-4">
            <code className="flex-1 rounded-lg bg-zinc-900 px-3 py-2 font-mono text-sm text-green-400 dark:bg-zinc-800">
              {tip.command}
            </code>
            <Button
              variant="ghost"
              size="iconSm"
              onClick={handleCopy}
              className="shrink-0"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-zinc-700">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="iconSm" onClick={handlePrev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-xs text-zinc-400 px-2">
              {currentTipIndex + 1} / {tips.length}
            </span>
            <Button variant="ghost" size="iconSm" onClick={handleNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="sm" onClick={handleRandom}>
            <Shuffle className="h-4 w-4" />
            {locale === "es" ? "Aleatorio" : "Random"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
