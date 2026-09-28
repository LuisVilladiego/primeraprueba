import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { invoke } from "@tauri-apps/api/core";
import { useTranslation } from "@/hooks/useTranslation";
import { Card } from "@/components/ui/Card";
import { Terminal as TerminalIcon, Info, Lightbulb, Zap } from "lucide-react";

interface TerminalOutput {
  type: "input" | "output" | "error";
  content: string;
}

export function TerminalPage() {
  const { locale } = useTranslation();
  const [history, setHistory] = useState<TerminalOutput[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPath, setCurrentPath] = useState("~");
  const [username, setUsername] = useState("user");
  const [hostname, setHostname] = useState("pinguinono");
  const [isExecuting, setIsExecuting] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
    initTerminal();
  }, []);

  const initTerminal = async () => {
    try {
      const [user, host, path] = await Promise.all([
        invoke<string>("get_username"),
        invoke<string>("get_hostname"),
        invoke<string>("get_current_directory"),
      ]);
      setUsername(user);
      setHostname(host);
      setCurrentPath(path);
      
      setHistory([{
        type: "output",
        content: locale === "es" 
          ? `¡Bienvenido a Pinguiñoño Terminal, ${user}!\nEsta es una terminal REAL de tu sistema Linux.\nEscribe 'help' para ver comandos sugeridos.\n`
          : `Welcome to Pinguiñoño Terminal, ${user}!\nThis is a REAL terminal from your Linux system.\nType 'help' for suggested commands.\n`,
      }]);
    } catch {
      setHistory([{
        type: "output",
        content: locale === "es" 
          ? "¡Bienvenido a Pinguiñoño Terminal!\nEscribe 'help' para ver comandos sugeridos.\n"
          : "Welcome to Pinguiñoño Terminal!\nType 'help' for suggested commands.\n",
      }]);
    }
  };

  const updatePath = async () => {
    try {
      const path = await invoke<string>("get_current_directory");
      setCurrentPath(path);
    } catch {
      // Keep current path
    }
  };

  const executeCommand = async (command: string) => {
    const trimmedCommand = command.trim();
    if (!trimmedCommand) return;

    setCommandHistory((prev) => [...prev, trimmedCommand]);
    setHistoryIndex(-1);
    setIsExecuting(true);

    const prompt = `${username}@${hostname}:${currentPath}$`;
    setHistory((prev) => [
      ...prev,
      { type: "input", content: `${prompt} ${trimmedCommand}` },
    ]);

    if (trimmedCommand === "clear") {
      setHistory([]);
      setIsExecuting(false);
      return;
    }

    if (trimmedCommand === "help") {
      const helpText = locale === "es"
        ? `Comandos sugeridos para practicar:
  pwd       - Muestra el directorio actual
  ls        - Lista archivos y directorios
  cd <dir>  - Cambia de directorio
  cat <file>- Muestra el contenido de un archivo
  echo <text>- Muestra texto en pantalla
  mkdir <dir>- Crea un directorio
  touch <file>- Crea un archivo vacío
  rm <file> - Elimina un archivo
  cp <src> <dest> - Copia archivos
  mv <src> <dest> - Mueve/renombra archivos
  grep <pattern> <file> - Busca texto en archivos
  whoami    - Muestra el usuario actual
  date      - Muestra la fecha y hora
  uname -a  - Información del sistema
  clear     - Limpia la pantalla
  history   - Historial de comandos
`
        : `Suggested commands to practice:
  pwd       - Print working directory
  ls        - List files and directories
  cd <dir>  - Change directory
  cat <file>- Display file contents
  echo <text>- Display text
  mkdir <dir>- Create directory
  touch <file>- Create empty file
  rm <file> - Remove file
  cp <src> <dest> - Copy files
  mv <src> <dest> - Move/rename files
  grep <pattern> <file> - Search text in files
  whoami    - Display current user
  date      - Display date and time
  uname -a  - System information
  clear     - Clear screen
  history   - Command history
`;
      setHistory((prev) => [...prev, { type: "output", content: helpText }]);
      setIsExecuting(false);
      return;
    }

    try {
      const result = await invoke<string>("execute_command", { command: trimmedCommand });
      
      if (result) {
        setHistory((prev) => [...prev, { type: "output", content: result }]);
      }
      
      // Update path after cd or any command that might change directory
      if (trimmedCommand.startsWith("cd ") || trimmedCommand === "cd") {
        await updatePath();
      }
    } catch (error) {
      setHistory((prev) => [
        ...prev,
        { type: "error", content: String(error) },
      ]);
    }

    setIsExecuting(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isExecuting) {
      executeCommand(inputValue);
      setInputValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputValue("");
        } else {
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[newIndex]);
        }
      }
    } else if (e.key === "c" && e.ctrlKey) {
      const prompt = `${username}@${hostname}:${currentPath}$`;
      setHistory((prev) => [
        ...prev,
        { type: "input", content: `${prompt} ${inputValue}^C` },
      ]);
      setInputValue("");
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  const tips = locale === "es" ? [
    "Usa las flechas ↑↓ para navegar por el historial",
    "Ctrl+C cancela el comando actual",
    "Ctrl+L limpia la pantalla",
    "Tab autocompleta (en terminal real)",
  ] : [
    "Use ↑↓ arrows to navigate history",
    "Ctrl+C cancels the current command",
    "Ctrl+L clears the screen",
    "Tab autocompletes (in real terminal)",
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
            <TerminalIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {locale === "es" ? "Terminal Real" : "Real Terminal"}
              </h1>
              <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                <Zap className="h-3 w-3" />
                {locale === "es" ? "Conectada" : "Connected"}
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              {locale === "es" 
                ? "Terminal nativa de tu sistema Linux" 
                : "Native terminal from your Linux system"}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        {/* Terminal */}
        <Card className="overflow-hidden p-0">
          <div
            className="flex h-[500px] flex-col bg-zinc-900 font-mono text-sm text-green-400"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-zinc-700 bg-zinc-800 px-4 py-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-2 text-xs text-zinc-400">
                Terminal - Pinguiñoño
              </span>
            </div>

            {/* Terminal output */}
            <div
              ref={terminalRef}
              className="flex-1 overflow-y-auto p-4"
            >
              {history.map((item, index) => (
                <div
                  key={index}
                  className={`whitespace-pre-wrap ${
                    item.type === "error" ? "text-red-400" : 
                    item.type === "input" ? "text-blue-400" : "text-green-400"
                  }`}
                >
                  {item.content}
                </div>
              ))}

              {/* Input line */}
              <div className="flex items-center">
                <span className="text-green-400">{username}@{hostname}</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">{currentPath}</span>
                <span className="text-white">$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 border-none bg-transparent text-green-400 outline-none caret-green-400"
                  disabled={isExecuting}
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
                {isExecuting && (
                  <span className="animate-pulse text-yellow-400">●</span>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card className="p-4">
            <div className="mb-3 flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-500" />
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                {locale === "es" ? "Información" : "Information"}
              </h3>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {locale === "es"
                ? "Esta es una terminal REAL conectada a tu sistema Linux. Los comandos que ejecutes afectarán tu sistema."
                : "This is a REAL terminal connected to your Linux system. Commands you run will affect your system."}
            </p>
          </Card>

          <Card className="p-4">
            <div className="mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                {locale === "es" ? "Consejos" : "Tips"}
              </h3>
            </div>
            <ul className="space-y-2">
              {tips.map((tip, index) => (
                <li key={index} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="text-green-500">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-4">
            <h3 className="mb-3 font-semibold text-zinc-900 dark:text-white">
              {locale === "es" ? "Comandos Útiles" : "Useful Commands"}
            </h3>
            <div className="space-y-2">
              {[
                { cmd: "ls -la", desc: locale === "es" ? "Lista detallada" : "Detailed list" },
                { cmd: "pwd", desc: locale === "es" ? "Directorio actual" : "Current dir" },
                { cmd: "cd ..", desc: locale === "es" ? "Subir un nivel" : "Go up one level" },
                { cmd: "cat file", desc: locale === "es" ? "Ver archivo" : "View file" },
                { cmd: "man cmd", desc: locale === "es" ? "Manual" : "Manual" },
              ].map((item) => (
                <div key={item.cmd} className="flex items-center justify-between text-sm">
                  <code className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-green-600 dark:bg-zinc-700 dark:text-green-400">
                    {item.cmd}
                  </code>
                  <span className="text-zinc-500">{item.desc}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
