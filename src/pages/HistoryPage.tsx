import { useState, useMemo } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useCommandHistoryStore } from "@/stores/commandHistoryStore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  History,
  Search,
  Trash2,
  Terminal,
  Clock,
  CheckCircle,
  XCircle,
  Copy,
  Check,
  BarChart3,
  Folder,
} from "lucide-react";

export function HistoryPage() {
  const { locale } = useTranslation();
  const { history, clearHistory, removeEntry, getCommandStats } = useCommandHistoryStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showStats, setShowStats] = useState(false);

  const stats = useMemo(() => getCommandStats(), [history]);

  const filteredHistory = useMemo(() => {
    if (!searchQuery.trim()) return history;
    const query = searchQuery.toLowerCase();
    return history.filter(
      (entry) =>
        entry.command.toLowerCase().includes(query) ||
        entry.workingDirectory.toLowerCase().includes(query)
    );
  }, [history, searchQuery]);

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return locale === "es" ? "Ahora" : "Just now";
    if (diffMins < 60) return locale === "es" ? `Hace ${diffMins}m` : `${diffMins}m ago`;
    if (diffHours < 24) return locale === "es" ? `Hace ${diffHours}h` : `${diffHours}h ago`;
    if (diffDays < 7) return locale === "es" ? `Hace ${diffDays}d` : `${diffDays}d ago`;
    
    return date.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const copyCommand = (id: string, command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-6 animate-[fade-in-up_0.4s_ease-out]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600">
              <History className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {locale === "es" ? "Historial de Comandos" : "Command History"}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                {locale === "es"
                  ? `${history.length} comandos ejecutados`
                  : `${history.length} commands executed`}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={showStats ? "primary" : "outline"}
              size="sm"
              onClick={() => setShowStats(!showStats)}
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              {locale === "es" ? "Estadísticas" : "Stats"}
            </Button>
            {history.length > 0 && (
              <Button variant="outline" size="sm" onClick={clearHistory}>
                <Trash2 className="mr-2 h-4 w-4" />
                {locale === "es" ? "Limpiar" : "Clear"}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Stats Panel */}
      {showStats && (
        <Card className="mb-6 p-6 animate-[fade-in-up_0.3s_ease-out]">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
            {locale === "es" ? "Estadísticas de Uso" : "Usage Statistics"}
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                {stats.totalCommands}
              </p>
              <p className="text-sm text-zinc-500">
                {locale === "es" ? "Total comandos" : "Total commands"}
              </p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                {stats.uniqueCommands}
              </p>
              <p className="text-sm text-zinc-500">
                {locale === "es" ? "Únicos" : "Unique"}
              </p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
              <p className="text-2xl font-bold text-green-600">
                {stats.successRate.toFixed(0)}%
              </p>
              <p className="text-sm text-zinc-500">
                {locale === "es" ? "Tasa de éxito" : "Success rate"}
              </p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                {stats.mostUsed[0]?.command || "-"}
              </p>
              <p className="text-sm text-zinc-500">
                {locale === "es" ? "Más usado" : "Most used"}
              </p>
            </div>
          </div>

          {stats.mostUsed.length > 0 && (
            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {locale === "es" ? "Comandos más usados:" : "Most used commands:"}
              </p>
              <div className="flex flex-wrap gap-2">
                {stats.mostUsed.slice(0, 8).map((item) => (
                  <span
                    key={item.command}
                    className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-mono text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  >
                    {item.command} ({item.count})
                  </span>
                ))}
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Search */}
      <Card className="mb-6 p-4 animate-[fade-in-up_0.4s_ease-out_0.1s_both]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder={locale === "es" ? "Buscar en historial..." : "Search history..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-800"
          />
        </div>
      </Card>

      {/* History List */}
      <div className="space-y-3">
        {filteredHistory.length === 0 ? (
          <Card className="p-12 text-center animate-[fade-in-up_0.4s_ease-out_0.2s_both]">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                <Terminal className="h-8 w-8 text-zinc-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                {locale === "es" ? "Sin historial" : "No history"}
              </h3>
              <p className="mt-2 text-zinc-500">
                {locale === "es"
                  ? "Los comandos que ejecutes aparecerán aquí"
                  : "Commands you run will appear here"}
              </p>
            </div>
          </Card>
        ) : (
          filteredHistory.map((entry, index) => (
            <Card
              key={entry.id}
              hover
              className="p-4 animate-[fade-in-up_0.3s_ease-out_both]"
              style={{ animationDelay: `${0.1 + Math.min(index, 10) * 0.03}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    {entry.exitCode === 0 ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                    )}
                    <code className="truncate rounded-lg bg-zinc-900 px-3 py-1.5 text-sm font-medium text-green-400 dark:bg-zinc-800">
                      {entry.command}
                    </code>
                  </div>

                  <div className="mt-2 flex items-center gap-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {formatTime(entry.timestamp)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Folder className="h-3.5 w-3.5" />
                      <span className="truncate max-w-[200px]">{entry.workingDirectory}</span>
                    </span>
                    {entry.exitCode !== 0 && (
                      <span className="text-red-500">
                        Exit: {entry.exitCode}
                      </span>
                    )}
                  </div>

                  {entry.output && (
                    <div className="mt-2">
                      <pre className="max-h-24 overflow-auto rounded-lg bg-zinc-100 p-2 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        {entry.output.slice(0, 500)}
                        {entry.output.length > 500 && "..."}
                      </pre>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => copyCommand(entry.id, entry.command)}
                    className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800"
                    title={locale === "es" ? "Copiar comando" : "Copy command"}
                  >
                    {copiedId === entry.id ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                  <button
                    onClick={() => removeEntry(entry.id)}
                    className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20"
                    title={locale === "es" ? "Eliminar" : "Delete"}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
