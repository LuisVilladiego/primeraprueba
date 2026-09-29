import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CommandHistoryEntry {
  id: string;
  command: string;
  output: string;
  exitCode: number;
  timestamp: number;
  workingDirectory: string;
}

interface CommandHistoryState {
  history: CommandHistoryEntry[];
  maxEntries: number;
  addCommand: (entry: Omit<CommandHistoryEntry, "id" | "timestamp">) => void;
  clearHistory: () => void;
  getRecentCommands: (limit?: number) => CommandHistoryEntry[];
  searchHistory: (query: string) => CommandHistoryEntry[];
  removeEntry: (id: string) => void;
  getCommandStats: () => {
    totalCommands: number;
    uniqueCommands: number;
    mostUsed: { command: string; count: number }[];
    successRate: number;
  };
}

export const useCommandHistoryStore = create<CommandHistoryState>()(
  persist(
    (set, get) => ({
      history: [],
      maxEntries: 500,

      addCommand: (entry) => {
        const newEntry: CommandHistoryEntry = {
          ...entry,
          id: `cmd-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          timestamp: Date.now(),
        };

        set((state) => ({
          history: [newEntry, ...state.history].slice(0, state.maxEntries),
        }));
      },

      clearHistory: () => {
        set({ history: [] });
      },

      getRecentCommands: (limit = 50) => {
        return get().history.slice(0, limit);
      },

      searchHistory: (query) => {
        const lowerQuery = query.toLowerCase();
        return get().history.filter(
          (entry) =>
            entry.command.toLowerCase().includes(lowerQuery) ||
            entry.output.toLowerCase().includes(lowerQuery)
        );
      },

      removeEntry: (id) => {
        set((state) => ({
          history: state.history.filter((entry) => entry.id !== id),
        }));
      },

      getCommandStats: () => {
        const history = get().history;
        const commandCounts: Record<string, number> = {};
        let successCount = 0;

        history.forEach((entry) => {
          const baseCommand = entry.command.split(" ")[0];
          commandCounts[baseCommand] = (commandCounts[baseCommand] || 0) + 1;
          if (entry.exitCode === 0) successCount++;
        });

        const mostUsed = Object.entries(commandCounts)
          .map(([command, count]) => ({ command, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 10);

        return {
          totalCommands: history.length,
          uniqueCommands: Object.keys(commandCounts).length,
          mostUsed,
          successRate: history.length > 0 ? (successCount / history.length) * 100 : 0,
        };
      },
    }),
    {
      name: "pinguinono-command-history",
    }
  )
);
