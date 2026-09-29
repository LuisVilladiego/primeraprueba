import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Challenge {
  id: string;
  type: "command" | "quiz" | "explore" | "practice";
  title: { es: string; en: string };
  description: { es: string; en: string };
  xpReward: number;
  requirement: {
    type: "run_command" | "answer_quiz" | "visit_page" | "complete_lesson" | "use_terminal";
    target?: string;
    count?: number;
  };
  difficulty: "easy" | "medium" | "hard";
}

interface DailyChallengeProgress {
  challengeId: string;
  currentProgress: number;
  completed: boolean;
  completedAt?: number;
}

interface DailyChallengesState {
  lastRefreshDate: string | null;
  todaysChallenges: Challenge[];
  progress: DailyChallengeProgress[];
  completedDays: number;
  
  refreshChallenges: () => void;
  updateProgress: (challengeId: string, amount?: number) => void;
  getChallengeProgress: (challengeId: string) => DailyChallengeProgress | undefined;
  getTodaysStats: () => { total: number; completed: number; xpEarned: number };
}

const allChallenges: Challenge[] = [
  // Easy challenges
  {
    id: "run-ls",
    type: "command",
    title: { es: "Explorador Básico", en: "Basic Explorer" },
    description: { es: "Ejecuta el comando 'ls' para listar archivos", en: "Run the 'ls' command to list files" },
    xpReward: 10,
    requirement: { type: "run_command", target: "ls", count: 1 },
    difficulty: "easy",
  },
  {
    id: "run-pwd",
    type: "command",
    title: { es: "¿Dónde estoy?", en: "Where am I?" },
    description: { es: "Usa 'pwd' para ver tu directorio actual", en: "Use 'pwd' to see your current directory" },
    xpReward: 10,
    requirement: { type: "run_command", target: "pwd", count: 1 },
    difficulty: "easy",
  },
  {
    id: "use-terminal-3",
    type: "practice",
    title: { es: "Práctica Terminal", en: "Terminal Practice" },
    description: { es: "Ejecuta 3 comandos en la terminal", en: "Run 3 commands in the terminal" },
    xpReward: 15,
    requirement: { type: "use_terminal", count: 3 },
    difficulty: "easy",
  },
  {
    id: "visit-commands",
    type: "explore",
    title: { es: "Explorador de Comandos", en: "Command Explorer" },
    description: { es: "Visita la página de referencia de comandos", en: "Visit the command reference page" },
    xpReward: 10,
    requirement: { type: "visit_page", target: "/commands" },
    difficulty: "easy",
  },
  
  // Medium challenges
  {
    id: "run-grep",
    type: "command",
    title: { es: "Buscador de Texto", en: "Text Seeker" },
    description: { es: "Usa grep para buscar texto en archivos", en: "Use grep to search text in files" },
    xpReward: 25,
    requirement: { type: "run_command", target: "grep", count: 1 },
    difficulty: "medium",
  },
  {
    id: "run-find",
    type: "command",
    title: { es: "Cazador de Archivos", en: "File Hunter" },
    description: { es: "Usa find para buscar archivos", en: "Use find to search for files" },
    xpReward: 25,
    requirement: { type: "run_command", target: "find", count: 1 },
    difficulty: "medium",
  },
  {
    id: "use-terminal-10",
    type: "practice",
    title: { es: "Usuario Activo", en: "Active User" },
    description: { es: "Ejecuta 10 comandos en la terminal", en: "Run 10 commands in the terminal" },
    xpReward: 30,
    requirement: { type: "use_terminal", count: 10 },
    difficulty: "medium",
  },
  {
    id: "create-file",
    type: "command",
    title: { es: "Creador", en: "Creator" },
    description: { es: "Crea un archivo usando touch o echo", en: "Create a file using touch or echo" },
    xpReward: 20,
    requirement: { type: "run_command", target: "touch", count: 1 },
    difficulty: "medium",
  },
  
  // Hard challenges
  {
    id: "use-terminal-25",
    type: "practice",
    title: { es: "Maestro Terminal", en: "Terminal Master" },
    description: { es: "Ejecuta 25 comandos en la terminal", en: "Run 25 commands in the terminal" },
    xpReward: 50,
    requirement: { type: "use_terminal", count: 25 },
    difficulty: "hard",
  },
  {
    id: "run-chmod",
    type: "command",
    title: { es: "Controlador de Permisos", en: "Permission Controller" },
    description: { es: "Cambia permisos de un archivo con chmod", en: "Change file permissions with chmod" },
    xpReward: 40,
    requirement: { type: "run_command", target: "chmod", count: 1 },
    difficulty: "hard",
  },
  {
    id: "run-pipe",
    type: "command",
    title: { es: "Encadenador", en: "Pipe Master" },
    description: { es: "Usa un pipe (|) para encadenar comandos", en: "Use a pipe (|) to chain commands" },
    xpReward: 45,
    requirement: { type: "run_command", target: "|", count: 1 },
    difficulty: "hard",
  },
];

const getTodayString = () => {
  return new Date().toISOString().split("T")[0];
};

const selectRandomChallenges = (count: number = 3): Challenge[] => {
  const today = getTodayString();
  const seed = today.split("-").reduce((acc, val) => acc + parseInt(val), 0);
  
  const shuffled = [...allChallenges].sort((a, b) => {
    const hashA = (seed * a.id.charCodeAt(0)) % 100;
    const hashB = (seed * b.id.charCodeAt(0)) % 100;
    return hashA - hashB;
  });

  const easy = shuffled.filter((c) => c.difficulty === "easy").slice(0, 1);
  const medium = shuffled.filter((c) => c.difficulty === "medium").slice(0, 1);
  const hard = shuffled.filter((c) => c.difficulty === "hard").slice(0, 1);

  return [...easy, ...medium, ...hard];
};

export const useDailyChallengesStore = create<DailyChallengesState>()(
  persist(
    (set, get) => ({
      lastRefreshDate: null,
      todaysChallenges: [],
      progress: [],
      completedDays: 0,

      refreshChallenges: () => {
        const today = getTodayString();
        const state = get();

        if (state.lastRefreshDate !== today) {
          const allCompleted = state.progress.every((p) => p.completed);
          const newCompletedDays = allCompleted && state.progress.length > 0
            ? state.completedDays + 1
            : state.completedDays;

          const newChallenges = selectRandomChallenges(3);
          
          set({
            lastRefreshDate: today,
            todaysChallenges: newChallenges,
            progress: newChallenges.map((c) => ({
              challengeId: c.id,
              currentProgress: 0,
              completed: false,
            })),
            completedDays: newCompletedDays,
          });
        }
      },

      updateProgress: (challengeId, amount = 1) => {
        const state = get();
        const challenge = state.todaysChallenges.find((c) => c.id === challengeId);
        if (!challenge) return;

        const progressIndex = state.progress.findIndex((p) => p.challengeId === challengeId);
        if (progressIndex === -1) return;

        const currentProgress = state.progress[progressIndex];
        if (currentProgress.completed) return;

        const requiredCount = challenge.requirement.count || 1;
        const newProgress = Math.min(currentProgress.currentProgress + amount, requiredCount);
        const completed = newProgress >= requiredCount;

        const updatedProgress = [...state.progress];
        updatedProgress[progressIndex] = {
          ...currentProgress,
          currentProgress: newProgress,
          completed,
          completedAt: completed ? Date.now() : undefined,
        };

        set({ progress: updatedProgress });
      },

      getChallengeProgress: (challengeId) => {
        return get().progress.find((p) => p.challengeId === challengeId);
      },

      getTodaysStats: () => {
        const state = get();
        const completed = state.progress.filter((p) => p.completed).length;
        const xpEarned = state.progress
          .filter((p) => p.completed)
          .reduce((acc, p) => {
            const challenge = state.todaysChallenges.find((c) => c.id === p.challengeId);
            return acc + (challenge?.xpReward || 0);
          }, 0);

        return {
          total: state.todaysChallenges.length,
          completed,
          xpEarned,
        };
      },
    }),
    {
      name: "pinguinono-daily-challenges",
    }
  )
);
