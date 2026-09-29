import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useToastStore } from "./toastStore";

export interface Achievement {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  icon: string;
  category: "learning" | "terminal" | "streak" | "special";
  requirement: number;
  xpReward: number;
}

interface AchievementsState {
  unlockedAchievements: string[];
  checkAchievement: (id: string, currentValue: number) => boolean;
  unlockAchievement: (id: string, showNotification?: boolean) => void;
  getUnlockedCount: () => number;
  isUnlocked: (id: string) => boolean;
}

export const achievements: Achievement[] = [
  // Learning achievements
  {
    id: "first-lesson",
    title: { es: "Primera Lección", en: "First Lesson" },
    description: { es: "Completa tu primera lección", en: "Complete your first lesson" },
    icon: "📖",
    category: "learning",
    requirement: 1,
    xpReward: 50,
  },
  {
    id: "lesson-master",
    title: { es: "Maestro de Lecciones", en: "Lesson Master" },
    description: { es: "Completa 10 lecciones", en: "Complete 10 lessons" },
    icon: "🎓",
    category: "learning",
    requirement: 10,
    xpReward: 200,
  },
  {
    id: "first-exam",
    title: { es: "Primer Examen", en: "First Exam" },
    description: { es: "Aprueba tu primer examen", en: "Pass your first exam" },
    icon: "✅",
    category: "learning",
    requirement: 1,
    xpReward: 100,
  },
  {
    id: "exam-ace",
    title: { es: "As de Exámenes", en: "Exam Ace" },
    description: { es: "Aprueba 5 exámenes", en: "Pass 5 exams" },
    icon: "🏆",
    category: "learning",
    requirement: 5,
    xpReward: 500,
  },
  {
    id: "lab-rat",
    title: { es: "Rata de Laboratorio", en: "Lab Rat" },
    description: { es: "Completa tu primer laboratorio", en: "Complete your first lab" },
    icon: "🔬",
    category: "learning",
    requirement: 1,
    xpReward: 75,
  },
  {
    id: "lab-expert",
    title: { es: "Experto en Labs", en: "Lab Expert" },
    description: { es: "Completa 10 laboratorios", en: "Complete 10 labs" },
    icon: "🧪",
    category: "learning",
    requirement: 10,
    xpReward: 300,
  },
  // Terminal achievements
  {
    id: "terminal-newbie",
    title: { es: "Novato de Terminal", en: "Terminal Newbie" },
    description: { es: "Ejecuta tu primer comando", en: "Run your first command" },
    icon: "💻",
    category: "terminal",
    requirement: 1,
    xpReward: 25,
  },
  {
    id: "command-warrior",
    title: { es: "Guerrero de Comandos", en: "Command Warrior" },
    description: { es: "Ejecuta 100 comandos", en: "Run 100 commands" },
    icon: "⚔️",
    category: "terminal",
    requirement: 100,
    xpReward: 200,
  },
  {
    id: "terminal-master",
    title: { es: "Maestro de Terminal", en: "Terminal Master" },
    description: { es: "Ejecuta 500 comandos", en: "Run 500 commands" },
    icon: "🧙",
    category: "terminal",
    requirement: 500,
    xpReward: 500,
  },
  // Streak achievements
  {
    id: "streak-starter",
    title: { es: "Iniciando Racha", en: "Streak Starter" },
    description: { es: "Mantén una racha de 3 días", en: "Keep a 3-day streak" },
    icon: "🔥",
    category: "streak",
    requirement: 3,
    xpReward: 50,
  },
  {
    id: "streak-warrior",
    title: { es: "Guerrero de Rachas", en: "Streak Warrior" },
    description: { es: "Mantén una racha de 7 días", en: "Keep a 7-day streak" },
    icon: "💪",
    category: "streak",
    requirement: 7,
    xpReward: 150,
  },
  {
    id: "streak-legend",
    title: { es: "Leyenda de Rachas", en: "Streak Legend" },
    description: { es: "Mantén una racha de 30 días", en: "Keep a 30-day streak" },
    icon: "👑",
    category: "streak",
    requirement: 30,
    xpReward: 500,
  },
  // Special achievements
  {
    id: "level-0-complete",
    title: { es: "Fundamentos Completados", en: "Fundamentals Complete" },
    description: { es: "Completa el Nivel 0", en: "Complete Level 0" },
    icon: "🎯",
    category: "special",
    requirement: 1,
    xpReward: 250,
  },
  {
    id: "xp-collector",
    title: { es: "Coleccionista de XP", en: "XP Collector" },
    description: { es: "Acumula 1000 XP", en: "Accumulate 1000 XP" },
    icon: "⭐",
    category: "special",
    requirement: 1000,
    xpReward: 100,
  },
  {
    id: "xp-master",
    title: { es: "Maestro de XP", en: "XP Master" },
    description: { es: "Acumula 5000 XP", en: "Accumulate 5000 XP" },
    icon: "🌟",
    category: "special",
    requirement: 5000,
    xpReward: 500,
  },
];

export const useAchievementsStore = create<AchievementsState>()(
  persist(
    (set, get) => ({
      unlockedAchievements: [],
      
      isUnlocked: (id) => {
        return get().unlockedAchievements.includes(id);
      },
      
      checkAchievement: (id, currentValue) => {
        const state = get();
        if (state.unlockedAchievements.includes(id)) {
          return true;
        }
        
        const achievement = achievements.find((a) => a.id === id);
        if (!achievement) return false;
        
        if (currentValue >= achievement.requirement) {
          state.unlockAchievement(id, true);
          return true;
        }
        
        return false;
      },
      
      unlockAchievement: (id, showNotification = false) => {
        const state = get();
        if (!state.unlockedAchievements.includes(id)) {
          const achievement = achievements.find((a) => a.id === id);
          set({
            unlockedAchievements: [...state.unlockedAchievements, id],
          });
          
          if (showNotification && achievement) {
            const locale = localStorage.getItem("pinguinono-settings") 
              ? JSON.parse(localStorage.getItem("pinguinono-settings")!).state?.locale || "es"
              : "es";
            const title = achievement.title[locale as "es" | "en"];
            useToastStore.getState().showAchievement(
              `${achievement.icon} ${title}`,
              achievement.xpReward
            );
          }
        }
      },
      
      getUnlockedCount: () => {
        return get().unlockedAchievements.length;
      },
    }),
    {
      name: "pinguinono-achievements",
    }
  )
);
