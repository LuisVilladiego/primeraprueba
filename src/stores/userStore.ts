import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserStats } from "@/types";

interface UserState {
  userId: string | null;
  name: string;
  stats: UserStats;
  commandsExecuted: number;
  lastActiveDate: string | null;
  longestStreak: number;
  todayStudyTime: number;
  weeklyActivity: boolean[];
  setUserId: (id: string) => void;
  setName: (name: string) => void;
  updateStats: (stats: Partial<UserStats>) => void;
  incrementXp: (amount: number) => void;
  checkAndUpdateStreak: () => { streakIncreased: boolean; streakLost: boolean; currentStreak: number };
  resetStreak: () => void;
  addStudyTime: (minutes: number) => void;
  incrementCommandsExecuted: () => void;
  recordActivity: () => void;
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

const getDateString = (date: Date = new Date()) => {
  return date.toISOString().split("T")[0];
};

const getDaysDifference = (date1: string, date2: string): number => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      userId: null,
      name: "Estudiante",
      stats: initialStats,
      commandsExecuted: 0,
      lastActiveDate: null,
      longestStreak: 0,
      todayStudyTime: 0,
      weeklyActivity: [false, false, false, false, false, false, false],
      
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
      
      checkAndUpdateStreak: () => {
        const state = get();
        const today = getDateString();
        const lastActive = state.lastActiveDate;
        
        let streakIncreased = false;
        let streakLost = false;
        let newStreak = state.stats.streakDays;
        let newLongestStreak = state.longestStreak;
        
        if (!lastActive) {
          newStreak = 1;
          streakIncreased = true;
        } else if (lastActive === today) {
          // Already active today, no change
        } else {
          const daysDiff = getDaysDifference(lastActive, today);
          
          if (daysDiff === 1) {
            newStreak = state.stats.streakDays + 1;
            streakIncreased = true;
          } else if (daysDiff > 1) {
            if (state.stats.streakDays > 0) {
              streakLost = true;
            }
            newStreak = 1;
            streakIncreased = true;
          }
        }
        
        if (newStreak > newLongestStreak) {
          newLongestStreak = newStreak;
        }
        
        const dayOfWeek = new Date().getDay();
        const newWeeklyActivity = [...state.weeklyActivity];
        newWeeklyActivity[dayOfWeek] = true;
        
        set({
          lastActiveDate: today,
          longestStreak: newLongestStreak,
          weeklyActivity: newWeeklyActivity,
          stats: {
            ...state.stats,
            streakDays: newStreak,
          },
        });
        
        return { streakIncreased, streakLost, currentStreak: newStreak };
      },
      
      resetStreak: () =>
        set((state) => ({
          stats: {
            ...state.stats,
            streakDays: 0,
          },
        })),
      
      addStudyTime: (minutes) =>
        set((state) => {
          const today = getDateString();
          const isNewDay = state.lastActiveDate !== today;
          
          return {
            todayStudyTime: isNewDay ? minutes : state.todayStudyTime + minutes,
            stats: {
              ...state.stats,
              totalStudyTime: state.stats.totalStudyTime + minutes,
            },
          };
        }),
      
      incrementCommandsExecuted: () =>
        set((state) => ({
          commandsExecuted: state.commandsExecuted + 1,
        })),
      
      recordActivity: () => {
        const state = get();
        const today = getDateString();
        
        if (state.lastActiveDate !== today) {
          state.checkAndUpdateStreak();
        }
      },
    }),
    {
      name: "pinguinono-user",
    }
  )
);
