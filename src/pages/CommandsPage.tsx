import { useState, useMemo } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Search, Terminal, Copy, Check, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface Command {
  name: string;
  description: { es: string; en: string };
  syntax: string;
  examples: string[];
  category: string;
}

const commands: Command[] = [
  // File System
  { name: "ls", description: { es: "Lista archivos y directorios", en: "List files and directories" }, syntax: "ls [opciones] [directorio]", examples: ["ls", "ls -la", "ls -lh /home"], category: "filesystem" },
  { name: "cd", description: { es: "Cambia de directorio", en: "Change directory" }, syntax: "cd [directorio]", examples: ["cd /home", "cd ..", "cd ~"], category: "filesystem" },
  { name: "pwd", description: { es: "Muestra el directorio actual", en: "Print working directory" }, syntax: "pwd", examples: ["pwd"], category: "filesystem" },
  { name: "mkdir", description: { es: "Crea un directorio", en: "Create a directory" }, syntax: "mkdir [opciones] directorio", examples: ["mkdir nuevo", "mkdir -p ruta/nueva"], category: "filesystem" },
  { name: "rm", description: { es: "Elimina archivos o directorios", en: "Remove files or directories" }, syntax: "rm [opciones] archivo", examples: ["rm archivo.txt", "rm -r directorio", "rm -rf directorio"], category: "filesystem" },
  { name: "cp", description: { es: "Copia archivos o directorios", en: "Copy files or directories" }, syntax: "cp [opciones] origen destino", examples: ["cp archivo.txt copia.txt", "cp -r dir1 dir2"], category: "filesystem" },
  { name: "mv", description: { es: "Mueve o renombra archivos", en: "Move or rename files" }, syntax: "mv origen destino", examples: ["mv viejo.txt nuevo.txt", "mv archivo.txt /otra/ruta/"], category: "filesystem" },
  { name: "touch", description: { es: "Crea un archivo vacío", en: "Create an empty file" }, syntax: "touch archivo", examples: ["touch nuevo.txt", "touch archivo1 archivo2"], category: "filesystem" },
  { name: "cat", description: { es: "Muestra el contenido de un archivo", en: "Display file contents" }, syntax: "cat [archivo]", examples: ["cat archivo.txt", "cat archivo1 archivo2"], category: "filesystem" },
  { name: "less", description: { es: "Visualiza archivos página por página", en: "View files page by page" }, syntax: "less archivo", examples: ["less archivo.txt"], category: "filesystem" },
  { name: "head", description: { es: "Muestra las primeras líneas", en: "Show first lines" }, syntax: "head [opciones] archivo", examples: ["head archivo.txt", "head -n 20 archivo.txt"], category: "filesystem" },
  { name: "tail", description: { es: "Muestra las últimas líneas", en: "Show last lines" }, syntax: "tail [opciones] archivo", examples: ["tail archivo.txt", "tail -f /var/log/syslog"], category: "filesystem" },
  
  // Search
  { name: "grep", description: { es: "Busca texto en archivos", en: "Search text in files" }, syntax: "grep [opciones] patrón archivo", examples: ["grep 'error' log.txt", "grep -r 'texto' .", "grep -i 'TEXTO' archivo"], category: "search" },
  { name: "find", description: { es: "Busca archivos y directorios", en: "Find files and directories" }, syntax: "find [ruta] [expresión]", examples: ["find . -name '*.txt'", "find /home -type d", "find . -size +1M"], category: "search" },
  { name: "which", description: { es: "Muestra la ruta de un comando", en: "Show command path" }, syntax: "which comando", examples: ["which python", "which bash"], category: "search" },
  
  // System
  { name: "sudo", description: { es: "Ejecuta como superusuario", en: "Execute as superuser" }, syntax: "sudo comando", examples: ["sudo apt update", "sudo -i"], category: "system" },
  { name: "apt", description: { es: "Gestor de paquetes Debian/Ubuntu", en: "Debian/Ubuntu package manager" }, syntax: "apt [acción] [paquete]", examples: ["apt update", "apt install vim", "apt remove paquete"], category: "system" },
  { name: "ps", description: { es: "Muestra procesos en ejecución", en: "Show running processes" }, syntax: "ps [opciones]", examples: ["ps", "ps aux", "ps -ef"], category: "system" },
  { name: "top", description: { es: "Monitor de procesos en tiempo real", en: "Real-time process monitor" }, syntax: "top", examples: ["top", "htop"], category: "system" },
  { name: "kill", description: { es: "Termina un proceso", en: "Terminate a process" }, syntax: "kill [señal] PID", examples: ["kill 1234", "kill -9 1234"], category: "system" },
  { name: "chmod", description: { es: "Cambia permisos de archivos", en: "Change file permissions" }, syntax: "chmod [modo] archivo", examples: ["chmod +x script.sh", "chmod 755 archivo", "chmod -R 644 directorio"], category: "system" },
  { name: "chown", description: { es: "Cambia el propietario", en: "Change owner" }, syntax: "chown usuario[:grupo] archivo", examples: ["chown user archivo", "chown user:group archivo"], category: "system" },
  
  // Network
  { name: "ping", description: { es: "Prueba conectividad de red", en: "Test network connectivity" }, syntax: "ping [opciones] host", examples: ["ping google.com", "ping -c 4 8.8.8.8"], category: "network" },
  { name: "curl", description: { es: "Transfiere datos desde URL", en: "Transfer data from URL" }, syntax: "curl [opciones] URL", examples: ["curl https://api.example.com", "curl -O https://file.com/file.zip"], category: "network" },
  { name: "wget", description: { es: "Descarga archivos de la web", en: "Download files from web" }, syntax: "wget [opciones] URL", examples: ["wget https://file.com/file.zip", "wget -c URL"], category: "network" },
  { name: "ssh", description: { es: "Conexión segura remota", en: "Secure remote connection" }, syntax: "ssh usuario@host", examples: ["ssh user@192.168.1.1", "ssh -p 2222 user@host"], category: "network" },
  { name: "scp", description: { es: "Copia archivos vía SSH", en: "Copy files via SSH" }, syntax: "scp origen destino", examples: ["scp archivo.txt user@host:/ruta/", "scp -r directorio user@host:/ruta/"], category: "network" },
];

const categories = [
  { id: "all", name: { es: "Todos", en: "All" } },
  { id: "filesystem", name: { es: "Sistema de Archivos", en: "File System" } },
  { id: "search", name: { es: "Búsqueda", en: "Search" } },
  { id: "system", name: { es: "Sistema", en: "System" } },
  { id: "network", name: { es: "Red", en: "Network" } },
];

export function CommandsPage() {
  const { locale } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const filteredCommands = useMemo(() => {
    return commands.filter((cmd) => {
      const matchesSearch = 
        cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cmd.description[locale as "es" | "en"].toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || cmd.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, locale]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600">
            <Terminal className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {locale === "es" ? "Referencia de Comandos" : "Command Reference"}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              {locale === "es" 
                ? "Busca y aprende comandos Linux esenciales" 
                : "Search and learn essential Linux commands"}
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6 p-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder={locale === "es" ? "Buscar comandos..." : "Search commands..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-white py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                }`}
              >
                {cat.name[locale as "es" | "en"]}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Commands List */}
      <div className="space-y-4">
        {filteredCommands.map((cmd) => (
          <Card key={cmd.name} className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <code className="rounded-lg bg-zinc-900 px-3 py-1 text-lg font-bold text-green-400 dark:bg-zinc-800">
                    {cmd.name}
                  </code>
                  <Badge variant="outline" size="sm">
                    {categories.find(c => c.id === cmd.category)?.name[locale as "es" | "en"]}
                  </Badge>
                </div>
                
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {cmd.description[locale as "es" | "en"]}
                </p>
                
                <div className="mt-3">
                  <p className="text-xs font-medium text-zinc-500">
                    {locale === "es" ? "Sintaxis:" : "Syntax:"}
                  </p>
                  <code className="text-sm text-zinc-700 dark:text-zinc-300">
                    {cmd.syntax}
                  </code>
                </div>
                
                <div className="mt-3">
                  <p className="text-xs font-medium text-zinc-500 mb-2">
                    {locale === "es" ? "Ejemplos:" : "Examples:"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cmd.examples.map((example, i) => (
                      <button
                        key={i}
                        onClick={() => copyToClipboard(example)}
                        className="group flex items-center gap-2 rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-mono text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                      >
                        {example}
                        {copiedCommand === example ? (
                          <Check className="h-3.5 w-3.5 text-green-500" />
                        ) : (
                          <Copy className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {filteredCommands.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-zinc-500">
              {locale === "es" 
                ? "No se encontraron comandos" 
                : "No commands found"}
            </p>
          </Card>
        )}
      </div>

      {/* Link to Terminal */}
      <Card className="mt-6 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Terminal className="h-5 w-5 text-green-500" />
            <span className="text-zinc-600 dark:text-zinc-400">
              {locale === "es" 
                ? "¿Quieres practicar estos comandos?" 
                : "Want to practice these commands?"}
            </span>
          </div>
          <Link 
            to="/terminal"
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            {locale === "es" ? "Abrir Terminal" : "Open Terminal"}
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </Card>
    </div>
  );
}
