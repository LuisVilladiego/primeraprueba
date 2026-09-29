import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import {
  Search,
  Terminal,
  BookOpen,
  Trophy,
  Award,
  Settings,
  Map,
  FolderKanban,
  User,
  Command,
  ArrowRight,
  Home,
  Keyboard,
  X,
} from "lucide-react";

interface SearchItem {
  id: string;
  type: "page" | "command" | "level" | "action";
  title: { es: string; en: string };
  description?: { es: string; en: string };
  icon: React.ReactNode;
  path?: string;
  action?: () => void;
  keywords?: string[];
}

const pages: SearchItem[] = [
  {
    id: "home",
    type: "page",
    title: { es: "Inicio", en: "Home" },
    description: { es: "Volver al dashboard principal", en: "Return to main dashboard" },
    icon: <Home className="h-5 w-5" />,
    path: "/",
    keywords: ["dashboard", "main", "inicio", "principal"],
  },
  {
    id: "terminal",
    type: "page",
    title: { es: "Terminal", en: "Terminal" },
    description: { es: "Abre la terminal de Linux", en: "Open Linux terminal" },
    icon: <Terminal className="h-5 w-5" />,
    path: "/terminal",
    keywords: ["bash", "shell", "consola", "linux", "comandos"],
  },
  {
    id: "lessons",
    type: "page",
    title: { es: "Lecciones", en: "Lessons" },
    description: { es: "Ver todas las lecciones disponibles", en: "View all available lessons" },
    icon: <BookOpen className="h-5 w-5" />,
    path: "/lessons",
    keywords: ["aprender", "cursos", "estudiar", "learn", "study"],
  },
  {
    id: "roadmap",
    type: "page",
    title: { es: "Ruta de Aprendizaje", en: "Learning Path" },
    description: { es: "Ver tu progreso en el roadmap", en: "View your roadmap progress" },
    icon: <Map className="h-5 w-5" />,
    path: "/roadmap",
    keywords: ["progreso", "niveles", "path", "progress", "levels"],
  },
  {
    id: "commands",
    type: "page",
    title: { es: "Comandos Linux", en: "Linux Commands" },
    description: { es: "Referencia de comandos", en: "Command reference" },
    icon: <Command className="h-5 w-5" />,
    path: "/commands",
    keywords: ["referencia", "buscar", "search", "reference"],
  },
  {
    id: "projects",
    type: "page",
    title: { es: "Proyectos", en: "Projects" },
    description: { es: "Proyectos prácticos para aprender", en: "Practical projects to learn" },
    icon: <FolderKanban className="h-5 w-5" />,
    path: "/projects",
    keywords: ["practicar", "hands-on", "practice"],
  },
  {
    id: "achievements",
    type: "page",
    title: { es: "Logros", en: "Achievements" },
    description: { es: "Ver tus logros desbloqueados", en: "View your unlocked achievements" },
    icon: <Trophy className="h-5 w-5" />,
    path: "/achievements",
    keywords: ["trofeos", "badges", "medallas", "trophies"],
  },
  {
    id: "certificates",
    type: "page",
    title: { es: "Certificados", en: "Certificates" },
    description: { es: "Ver y descargar tus certificados", en: "View and download your certificates" },
    icon: <Award className="h-5 w-5" />,
    path: "/certificates",
    keywords: ["diploma", "credential", "certificacion"],
  },
  {
    id: "profile",
    type: "page",
    title: { es: "Perfil", en: "Profile" },
    description: { es: "Ver y editar tu perfil", en: "View and edit your profile" },
    icon: <User className="h-5 w-5" />,
    path: "/profile",
    keywords: ["cuenta", "usuario", "account", "user"],
  },
  {
    id: "settings",
    type: "page",
    title: { es: "Configuración", en: "Settings" },
    description: { es: "Ajustar preferencias de la app", en: "Adjust app preferences" },
    icon: <Settings className="h-5 w-5" />,
    path: "/settings",
    keywords: ["preferencias", "ajustes", "preferences", "config"],
  },
];

const linuxCommands: SearchItem[] = [
  { id: "cmd-ls", type: "command", title: { es: "ls - Listar archivos", en: "ls - List files" }, icon: <Terminal className="h-5 w-5" />, path: "/commands", keywords: ["list", "directory", "archivos"] },
  { id: "cmd-cd", type: "command", title: { es: "cd - Cambiar directorio", en: "cd - Change directory" }, icon: <Terminal className="h-5 w-5" />, path: "/commands", keywords: ["navigate", "folder", "carpeta"] },
  { id: "cmd-grep", type: "command", title: { es: "grep - Buscar texto", en: "grep - Search text" }, icon: <Terminal className="h-5 w-5" />, path: "/commands", keywords: ["find", "pattern", "buscar"] },
  { id: "cmd-chmod", type: "command", title: { es: "chmod - Cambiar permisos", en: "chmod - Change permissions" }, icon: <Terminal className="h-5 w-5" />, path: "/commands", keywords: ["permissions", "permisos", "access"] },
  { id: "cmd-ssh", type: "command", title: { es: "ssh - Conexión remota", en: "ssh - Remote connection" }, icon: <Terminal className="h-5 w-5" />, path: "/commands", keywords: ["remote", "server", "conexion"] },
  { id: "cmd-docker", type: "command", title: { es: "docker - Contenedores", en: "docker - Containers" }, icon: <Terminal className="h-5 w-5" />, path: "/commands", keywords: ["container", "image", "contenedor"] },
];

const levels: SearchItem[] = [
  { id: "level-0", type: "level", title: { es: "Nivel 0: Fundamentos Linux", en: "Level 0: Linux Fundamentals" }, icon: <BookOpen className="h-5 w-5" />, path: "/lessons/0", keywords: ["basico", "inicio", "basic"] },
  { id: "level-1", type: "level", title: { es: "Nivel 1: Sistema de Archivos", en: "Level 1: File System" }, icon: <BookOpen className="h-5 w-5" />, path: "/lessons/1", keywords: ["files", "archivos", "directories"] },
  { id: "level-2", type: "level", title: { es: "Nivel 2: Permisos", en: "Level 2: Permissions" }, icon: <BookOpen className="h-5 w-5" />, path: "/lessons/2", keywords: ["chmod", "chown", "access"] },
  { id: "level-3", type: "level", title: { es: "Nivel 3: Procesos", en: "Level 3: Processes" }, icon: <BookOpen className="h-5 w-5" />, path: "/lessons/3", keywords: ["ps", "top", "kill"] },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const { locale } = useTranslation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const allItems = useMemo(() => [...pages, ...linuxCommands, ...levels], []);

  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      return pages;
    }

    const lowerQuery = query.toLowerCase();
    
    return allItems.filter((item) => {
      const titleMatch = 
        item.title.es.toLowerCase().includes(lowerQuery) ||
        item.title.en.toLowerCase().includes(lowerQuery);
      const descMatch = item.description && (
        item.description.es.toLowerCase().includes(lowerQuery) ||
        item.description.en.toLowerCase().includes(lowerQuery)
      );
      const keywordMatch = item.keywords?.some(k => k.toLowerCase().includes(lowerQuery));
      
      return titleMatch || descMatch || keywordMatch;
    });
  }, [query, allItems]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (listRef.current && filteredItems.length > 0) {
      const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex, filteredItems.length]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filteredItems.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleSelect(filteredItems[selectedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        onClose();
        break;
    }
  };

  const handleSelect = (item: SearchItem) => {
    if (item.action) {
      item.action();
    } else if (item.path) {
      navigate(item.path);
    }
    onClose();
  };

  if (!isOpen) return null;

  const getTypeLabel = (type: string) => {
    const labels: Record<string, { es: string; en: string }> = {
      page: { es: "Página", en: "Page" },
      command: { es: "Comando", en: "Command" },
      level: { es: "Nivel", en: "Level" },
      action: { es: "Acción", en: "Action" },
    };
    return labels[type]?.[locale as "es" | "en"] || type;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fade-in_0.15s_ease-out]"
        onClick={onClose}
      />
      
      {/* Palette */}
      <div className="relative w-full max-w-xl mx-4 animate-[scale-in_0.15s_ease-out]">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900">
          {/* Search Input */}
          <div className="flex items-center gap-3 border-b border-zinc-200 px-4 py-3 dark:border-zinc-700">
            <Search className="h-5 w-5 text-zinc-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={locale === "es" ? "Buscar páginas, comandos, niveles..." : "Search pages, commands, levels..."}
              className="flex-1 bg-transparent text-base text-zinc-900 placeholder-zinc-400 outline-none dark:text-white"
            />
            <button
              onClick={onClose}
              className="rounded-lg p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Results */}
          <div ref={listRef} className="max-h-80 overflow-y-auto p-2">
            {filteredItems.length === 0 ? (
              <div className="py-8 text-center text-zinc-500">
                {locale === "es" ? "No se encontraron resultados" : "No results found"}
              </div>
            ) : (
              filteredItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                    selectedIndex === index
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                      : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  }`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    selectedIndex === index
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                      : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium truncate">
                        {item.title[locale as "es" | "en"]}
                      </span>
                      <span className={`rounded px-1.5 py-0.5 text-xs ${
                        selectedIndex === index
                          ? "bg-blue-100 text-blue-600 dark:bg-blue-900/50"
                          : "bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"
                      }`}>
                        {getTypeLabel(item.type)}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-sm text-zinc-500 truncate dark:text-zinc-400">
                        {item.description[locale as "es" | "en"]}
                      </p>
                    )}
                  </div>
                  <ArrowRight className={`h-4 w-4 flex-shrink-0 transition-opacity ${
                    selectedIndex === index ? "opacity-100" : "opacity-0"
                  }`} />
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-zinc-200 px-4 py-2 text-xs text-zinc-500 dark:border-zinc-700">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-800">↑</kbd>
                <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-800">↓</kbd>
                {locale === "es" ? "navegar" : "navigate"}
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-800">↵</kbd>
                {locale === "es" ? "seleccionar" : "select"}
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-800">esc</kbd>
                {locale === "es" ? "cerrar" : "close"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Keyboard className="h-3.5 w-3.5" />
              <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-800">Ctrl</kbd>
              <span>+</span>
              <kbd className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono dark:bg-zinc-800">K</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
