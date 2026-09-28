import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserStats } from "@/types";

interface UserState {
  userId: string | null;
  name: string;
  stats: UserStats;
  setUserId: (id: string) => void;
  setName: (name: string) => void;
  updateStats: (stats: Partial<UserStats>) => void;
  incrementXp: (amount: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  addStudyTime: (minutes: number) => void;
}

const initialStats: UserStats = {
  totalXp: 0,
  level: 1,
  streakDays: 0,
  totalStudyTime: 0,
  lessonsCompleted: 0,
  exercisesCompleted: 0,
  labsCompleted: 0,
  examsPassed: 0,
  projectsCompleted: 0,
  skillsAcquired: 0,
  achievementsEarned: 0,
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userId: null,
      name: "Estudiante",
      stats: initialStats,
      setUserId: (id) => set({ userId: id }),
      setName: (name) => set({ name }),
      updateStats: (newStats) =>
        set((state) => ({
          stats: { ...state.stats, ...newStats },
        })),
      incrementXp: (amount) =>
        set((state) => {
          const newXp = state.stats.totalXp + amount;
          const newLevel = Math.floor(newXp / 1000) + 1;
          return {
            stats: {
              ...state.stats,
              totalXp: newXp,
              level: newLevel,
            },
          };
        }),
      incrementStreak: () =>
        set((state) => ({
          stats: {
            ...state.stats,
            streakDays: state.stats.streakDays + 1,
          },
        })),
      resetStreak: () =>
        set((state) => ({
          stats: {
            ...state.stats,
            streakDays: 0,
          },
        })),
      addStudyTime: (minutes) =>
        set((state) => ({
          stats: {
            ...state.stats,
            totalStudyTime: state.stats.totalStudyTime + minutes,
          },
        })),
    }),
    {
      name: "linux-academy-user",
    }
  )
);
