"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useTranslation } from "@/hooks/useTranslation";

interface FileSystemNode {
  type: "file" | "directory";
  content?: string;
  children?: Record<string, FileSystemNode>;
}

interface TerminalOutput {
  type: "input" | "output" | "error";
  content: string;
}

const initialFileSystem: Record<string, FileSystemNode> = {
  home: {
    type: "directory",
    children: {
      user: {
        type: "directory",
        children: {
          documents: {
            type: "directory",
            children: {
              "readme.txt": {
                type: "file",
                content: "¡Bienvenido a Pinguiñoño!\nEste es un archivo de práctica.\n\nWelcome to Pinguiñoño!\nThis is a practice file.\n",
              },
              "notes.txt": {
                type: "file",
                content: "Learning Linux is fun and useful!\n",
              },
            },
          },
          downloads: {
            type: "directory",
            children: {},
          },
          ".bashrc": {
            type: "file",
            content: "# Bash configuration file\nexport PATH=$PATH:/usr/local/bin\n",
          },
        },
      },
    },
  },
  etc: {
    type: "directory",
    children: {
      "hostname": {
        type: "file",
        content: "pinguinono\n",
      },
      "os-release": {
        type: "file",
        content: 'NAME="Pinguiñoño OS"\nVERSION="1.0"\nID=pinguinono\n',
      },
    },
  },
  var: {
    type: "directory",
    children: {
      log: {
        type: "directory",
        children: {
          "system.log": {
            type: "file",
            content: "[INFO] System started\n[INFO] All services running\n",
          },
        },
      },
    },
  },
};

interface TerminalSimulatorProps {
  initialPath?: string;
  onCommandExecuted?: (command: string, output: string) => void;
  expectedCommands?: string[];
  className?: string;
}

export function TerminalSimulator({
  initialPath = "/home/user",
  onCommandExecuted,
  expectedCommands,
  className = "",
}: TerminalSimulatorProps) {
  const { t, locale } = useTranslation();
  const [history, setHistory] = useState<TerminalOutput[]>([
    {
      type: "output",
      content: locale === "es" 
        ? "¡Bienvenido a Pinguiñoño Terminal!\nEscribe 'help' para ver los comandos disponibles.\n"
        : "Welcome to Pinguiñoño Terminal!\nType 'help' to see available commands.\n",
    },
  ]);
  const [currentPath, setCurrentPath] = useState(initialPath);
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [fileSystem] = useState(initialFileSystem);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const getNodeAtPath = (path: string): FileSystemNode | null => {
    const parts = path.split("/").filter(Boolean);
    
    if (parts.length === 0) {
      return { type: "directory", children: fileSystem };
    }
    
    let currentChildren: Record<string, FileSystemNode> = fileSystem;
    
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const node = currentChildren[part];
      
      if (!node) {
        return null;
      }
      
      if (i === parts.length - 1) {
        return node;
      }
      
      if (node.type !== "directory" || !node.children) {
        return null;
      }
      
      currentChildren = node.children;
    }
    
    return null;
  };

  const resolvePath = (path: string): string => {
    if (path.startsWith("/")) {
      return path;
    }
    if (path === "~") {
      return "/home/user";
    }
    if (path.startsWith("~/")) {
      return "/home/user" + path.slice(1);
    }
    if (path === "..") {
      const parts = currentPath.split("/").filter(Boolean);
      parts.pop();
      return "/" + parts.join("/");
    }
    if (path === ".") {
      return currentPath;
    }
    
    const parts = path.split("/");
    const currentParts = currentPath.split("/").filter(Boolean);
    
    for (const part of parts) {
      if (part === "..") {
        currentParts.pop();
      } else if (part !== ".") {
        currentParts.push(part);
      }
    }
    
    return "/" + currentParts.join("/");
  };

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim();
    if (!trimmedCommand) return;

    setCommandHistory((prev) => [...prev, trimmedCommand]);
    setHistoryIndex(-1);

    setHistory((prev) => [
      ...prev,
      { type: "input", content: `${currentPath}$ ${trimmedCommand}` },
    ]);

    const [cmd, ...args] = trimmedCommand.split(/\s+/);
    let output = "";
    let isError = false;

    switch (cmd.toLowerCase()) {
      case "help": {
        output = locale === "es"
          ? `Comandos disponibles:
  pwd       - Muestra el directorio actual
  ls        - Lista archivos y directorios
  cd <dir>  - Cambia de directorio
  cat <file>- Muestra el contenido de un archivo
  echo <text>- Muestra texto en pantalla
  mkdir <dir>- Crea un directorio (simulado)
  touch <file>- Crea un archivo (simulado)
  clear     - Limpia la pantalla
  whoami    - Muestra el usuario actual
  date      - Muestra la fecha y hora
  uname     - Muestra información del sistema
  history   - Muestra el historial de comandos
  help      - Muestra esta ayuda
`
          : `Available commands:
  pwd       - Print working directory
  ls        - List files and directories
  cd <dir>  - Change directory
  cat <file>- Display file contents
  echo <text>- Display text
  mkdir <dir>- Create directory (simulated)
  touch <file>- Create file (simulated)
  clear     - Clear screen
  whoami    - Display current user
  date      - Display date and time
  uname     - Display system information
  history   - Show command history
  help      - Show this help
`;
        break;
      }

      case "pwd": {
        output = currentPath + "\n";
        break;
      }

      case "ls": {
        const targetPath = args[0] ? resolvePath(args[0]) : currentPath;
        const showHidden = args.includes("-a") || args.includes("-la") || args.includes("-al");
        const longFormat = args.includes("-l") || args.includes("-la") || args.includes("-al");
        const node = getNodeAtPath(targetPath);
        
        if (!node) {
          output = locale === "es"
            ? `ls: no se puede acceder a '${args[0] || targetPath}': No existe el fichero o el directorio\n`
            : `ls: cannot access '${args[0] || targetPath}': No such file or directory\n`;
          isError = true;
        } else if (node.type === "file") {
          output = (args[0] || targetPath.split("/").pop()) + "\n";
        } else if (node.children) {
          const entries = Object.keys(node.children);
          const filtered = showHidden ? entries : entries.filter(e => !e.startsWith("."));
          
          if (longFormat) {
            output = filtered.map(entry => {
              const child = node.children![entry];
              const type = child.type === "directory" ? "drwxr-xr-x" : "-rw-r--r--";
              const size = child.type === "file" ? (child.content?.length || 0).toString().padStart(5) : "  4096";
              return `${type} user user ${size} Jan  1 00:00 ${entry}`;
            }).join("\n") + "\n";
          } else {
            output = filtered.length > 0 ? filtered.join("  ") + "\n" : "";
          }
        }
        break;
      }

      case "cd": {
        const target = args[0] || "~";
        const newPath = resolvePath(target);
        const node = getNodeAtPath(newPath);
        
        if (!node) {
          output = locale === "es"
            ? `cd: ${target}: No existe el fichero o el directorio\n`
            : `cd: ${target}: No such file or directory\n`;
          isError = true;
        } else if (node.type !== "directory") {
          output = locale === "es"
            ? `cd: ${target}: No es un directorio\n`
            : `cd: ${target}: Not a directory\n`;
          isError = true;
        } else {
          setCurrentPath(newPath || "/");
        }
        break;
      }

      case "cat": {
        if (!args[0]) {
          output = locale === "es" ? "cat: falta el operando archivo\n" : "cat: missing file operand\n";
          isError = true;
        } else {
          const targetPath = resolvePath(args[0]);
          const node = getNodeAtPath(targetPath);
          
          if (!node) {
            output = locale === "es"
              ? `cat: ${args[0]}: No existe el fichero o el directorio\n`
              : `cat: ${args[0]}: No such file or directory\n`;
            isError = true;
          } else if (node.type === "directory") {
            output = locale === "es"
              ? `cat: ${args[0]}: Es un directorio\n`
              : `cat: ${args[0]}: Is a directory\n`;
            isError = true;
          } else {
            output = node.content || "";
          }
        }
        break;
      }

      case "echo": {
        output = args.join(" ").replace(/^["']|["']$/g, "") + "\n";
        break;
      }

      case "mkdir": {
        if (!args[0]) {
          output = locale === "es" ? "mkdir: falta el operando\n" : "mkdir: missing operand\n";
          isError = true;
        } else {
          output = locale === "es"
            ? `[Simulado] Directorio '${args[0]}' creado\n`
            : `[Simulated] Directory '${args[0]}' created\n`;
        }
        break;
      }

      case "touch": {
        if (!args[0]) {
          output = locale === "es" ? "touch: falta el operando archivo\n" : "touch: missing file operand\n";
          isError = true;
        } else {
          output = locale === "es"
            ? `[Simulado] Archivo '${args[0]}' creado\n`
            : `[Simulated] File '${args[0]}' created\n`;
        }
        break;
      }

      case "rm": {
        if (!args[0]) {
          output = locale === "es" ? "rm: falta el operando\n" : "rm: missing operand\n";
          isError = true;
        } else {
          output = locale === "es"
            ? `[Simulado] Archivo '${args[0]}' eliminado\n`
            : `[Simulated] File '${args[0]}' removed\n`;
        }
        break;
      }

      case "clear": {
        setHistory([]);
        return;
      }

      case "whoami": {
        output = "user\n";
        break;
      }

      case "date": {
        output = new Date().toLocaleString(locale === "es" ? "es-ES" : "en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + "\n";
        break;
      }

      case "uname": {
        if (args.includes("-a")) {
          output = "Linux pinguinono 5.15.0-pinguinono #1 SMP x86_64 GNU/Linux\n";
        } else {
          output = "Linux\n";
        }
        break;
      }

      case "history": {
        output = commandHistory.map((cmd, i) => `  ${i + 1}  ${cmd}`).join("\n") + "\n";
        break;
      }

      case "man": {
        if (!args[0]) {
          output = locale === "es" ? "¿Qué página de manual deseas?\n" : "What manual page do you want?\n";
        } else {
          output = locale === "es"
            ? `No hay entrada de manual para ${args[0]} (usa 'help' para ver comandos)\n`
            : `No manual entry for ${args[0]} (use 'help' to see commands)\n`;
        }
        break;
      }

      default: {
        output = locale === "es"
          ? `${cmd}: comando no encontrado. Escribe 'help' para ver los comandos disponibles.\n`
          : `${cmd}: command not found. Type 'help' to see available commands.\n`;
        isError = true;
      }
    }

    setHistory((prev) => [
      ...prev,
      { type: isError ? "error" : "output", content: output },
    ]);

    if (onCommandExecuted) {
      onCommandExecuted(trimmedCommand, output);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
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
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple tab completion for paths
      const parts = inputValue.split(/\s+/);
      const lastPart = parts[parts.length - 1];
      if (lastPart) {
        const path = resolvePath(lastPart);
        const parentPath = path.split("/").slice(0, -1).join("/") || "/";
        const searchName = path.split("/").pop() || "";
        const parent = getNodeAtPath(parentPath);
        
        if (parent?.children) {
          const matches = Object.keys(parent.children).filter(name => 
            name.startsWith(searchName)
          );
          if (matches.length === 1) {
            parts[parts.length - 1] = lastPart.includes("/")
              ? lastPart.split("/").slice(0, -1).join("/") + "/" + matches[0]
              : matches[0];
            setInputValue(parts.join(" "));
          }
        }
      }
    } else if (e.key === "c" && e.ctrlKey) {
      setHistory((prev) => [
        ...prev,
        { type: "input", content: `${currentPath}$ ${inputValue}^C` },
      ]);
      setInputValue("");
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  return (
    <div
      className={`flex h-full min-h-[400px] flex-col rounded-lg bg-zinc-900 font-mono text-sm text-green-400 ${className}`}
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
        {expectedCommands && expectedCommands.length > 0 && (
          <span className="ml-auto text-xs text-zinc-500">
            {locale === "es" ? "Comandos esperados: " : "Expected commands: "}
            {expectedCommands.join(", ")}
          </span>
        )}
      </div>

      {/* Terminal output */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4"
        style={{ maxHeight: "calc(100% - 40px)" }}
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
          <span className="text-blue-400">{currentPath}$ </span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border-none bg-transparent text-green-400 outline-none caret-green-400"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
