import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProgressStatus, EntityType } from "@/types";

interface ProgressEntry {
  entityType: EntityType;
  entityId: string;
  status: ProgressStatus;
  score?: number;
  attempts: number;
  timeSpent: number;
  completedAt?: string;
  data?: Record<string, unknown>;
}

interface ProgressState {
  progress: Record<string, ProgressEntry>;
  getProgress: (entityType: EntityType, entityId: string) => ProgressEntry | null;
  setProgress: (entry: ProgressEntry) => void;
  updateProgress: (
    entityType: EntityType,
    entityId: string,
    updates: Partial<ProgressEntry>
  ) => void;
  markAsStarted: (entityType: EntityType, entityId: string) => void;
  markAsCompleted: (entityType: EntityType, entityId: string, score?: number) => void;
  markAsMastered: (entityType: EntityType, entityId: string) => void;
  addTimeSpent: (entityType: EntityType, entityId: string, seconds: number) => void;
  incrementAttempts: (entityType: EntityType, entityId: string) => void;
  getModuleProgress: (moduleId: string, lessonIds: string[], exerciseIds: string[], labIds: string[]) => {
    lessons: { completed: number; total: number; percentage: number };
    exercises: { completed: number; total: number; percentage: number };
    labs: { completed: number; total: number; percentage: number };
    overall: number;
  };
  isModuleCompleted: (moduleId: string) => boolean;
  isExamPassed: (examId: string, passingScore: number) => boolean;
}

const createKey = (entityType: EntityType, entityId: string) => `${entityType}:${entityId}`;

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: {},

      getProgress: (entityType, entityId) => {
        const key = createKey(entityType, entityId);
        return get().progress[key] || null;
      },

      setProgress: (entry) => {
        const key = createKey(entry.entityType, entry.entityId);
        set((state) => ({
          progress: {
            ...state.progress,
            [key]: entry,
          },
        }));
      },

      updateProgress: (entityType, entityId, updates) => {
        const key = createKey(entityType, entityId);
        set((state) => {
          const existing = state.progress[key] || {
            entityType,
            entityId,
            status: "NOT_STARTED" as ProgressStatus,
            attempts: 0,
            timeSpent: 0,
          };
          return {
            progress: {
              ...state.progress,
              [key]: { ...existing, ...updates },
            },
          };
        });
      },

      markAsStarted: (entityType, entityId) => {
        const key = createKey(entityType, entityId);
        set((state) => {
          const existing = state.progress[key];
          if (existing && existing.status !== "NOT_STARTED") {
            return state;
          }
          return {
            progress: {
              ...state.progress,
              [key]: {
                entityType,
                entityId,
                status: "IN_PROGRESS",
                attempts: existing?.attempts || 0,
                timeSpent: existing?.timeSpent || 0,
              },
            },
          };
        });
      },

      markAsCompleted: (entityType, entityId, score) => {
        const key = createKey(entityType, entityId);
        set((state) => {
          const existing = state.progress[key] || {
            entityType,
            entityId,
            attempts: 0,
            timeSpent: 0,
          };
          return {
            progress: {
              ...state.progress,
              [key]: {
                ...existing,
                status: "COMPLETED",
                score,
                completedAt: new Date().toISOString(),
              },
            },
          };
        });
      },

      markAsMastered: (entityType, entityId) => {
        const key = createKey(entityType, entityId);
        set((state) => {
          const existing = state.progress[key];
          if (!existing) return state;
          return {
            progress: {
              ...state.progress,
              [key]: {
                ...existing,
                status: "MASTERED",
              },
            },
          };
        });
      },

      addTimeSpent: (entityType, entityId, seconds) => {
        const key = createKey(entityType, entityId);
        set((state) => {
          const existing = state.progress[key] || {
            entityType,
            entityId,
            status: "NOT_STARTED" as ProgressStatus,
            attempts: 0,
            timeSpent: 0,
          };
          return {
            progress: {
              ...state.progress,
              [key]: {
                ...existing,
                timeSpent: existing.timeSpent + seconds,
              },
            },
          };
        });
      },

      incrementAttempts: (entityType, entityId) => {
        const key = createKey(entityType, entityId);
        set((state) => {
          const existing = state.progress[key] || {
            entityType,
            entityId,
            status: "NOT_STARTED" as ProgressStatus,
            attempts: 0,
            timeSpent: 0,
          };
          return {
            progress: {
              ...state.progress,
              [key]: {
                ...existing,
                attempts: existing.attempts + 1,
              },
            },
          };
        });
      },

      getModuleProgress: (moduleId, lessonIds, exerciseIds, labIds) => {
        const state = get();
        
        const countCompleted = (entityType: EntityType, ids: string[]) => {
          let completed = 0;
          for (const id of ids) {
            const progress = state.getProgress(entityType, id);
            if (progress && (progress.status === "COMPLETED" || progress.status === "MASTERED")) {
              completed++;
            }
          }
          return completed;
        };

        const lessonsCompleted = countCompleted("LESSON", lessonIds);
        const exercisesCompleted = countCompleted("EXERCISE", exerciseIds);
        const labsCompleted = countCompleted("LAB", labIds);

        const lessonsPercentage = lessonIds.length > 0 
          ? Math.round((lessonsCompleted / lessonIds.length) * 100) 
          : 100;
        const exercisesPercentage = exerciseIds.length > 0 
          ? Math.round((exercisesCompleted / exerciseIds.length) * 100) 
          : 100;
        const labsPercentage = labIds.length > 0 
          ? Math.round((labsCompleted / labIds.length) * 100) 
          : 100;

        const overall = Math.round(
          (lessonsPercentage + exercisesPercentage + labsPercentage) / 3
        );

        return {
          lessons: {
            completed: lessonsCompleted,
            total: lessonIds.length,
            percentage: lessonsPercentage,
          },
          exercises: {
            completed: exercisesCompleted,
            total: exerciseIds.length,
            percentage: exercisesPercentage,
          },
          labs: {
            completed: labsCompleted,
            total: labIds.length,
            percentage: labsPercentage,
          },
          overall,
        };
      },

      isModuleCompleted: (moduleId) => {
        const progress = get().getProgress("MODULE", moduleId);
        return progress?.status === "COMPLETED" || progress?.status === "MASTERED";
      },

      isExamPassed: (examId, passingScore) => {
        const progress = get().getProgress("EXAM", examId);
        return progress?.status === "COMPLETED" && (progress.score || 0) >= passingScore;
      },
    }),
    {
      name: "linux-academy-progress",
    }
  )
);
