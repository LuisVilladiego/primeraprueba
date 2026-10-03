import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProgressStatus, EntityType } from "@/types";
import { getLessonIdsForModule } from "@/content/courses/registry";

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
  passedExams: string[];
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
  getModuleProgress: (moduleId: string) => number;
  isModuleCompleted: (moduleId: string) => boolean;
  isExamPassed: (examId: string) => boolean;
  setExamPassed: (examId: string) => void;
}

const createKey = (entityType: EntityType, entityId: string) => `${entityType}:${entityId}`;

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: {},
      passedExams: [],

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

      getModuleProgress: (moduleId) => {
        const state = get();
        const lessonIds = getLessonIdsForModule(moduleId);
        
        let completed = 0;
        for (const id of lessonIds) {
          const progress = state.getProgress("LESSON", id);
          if (progress && (progress.status === "COMPLETED" || progress.status === "MASTERED")) {
            completed++;
          }
        }
        
        return lessonIds.length > 0 
          ? Math.round((completed / lessonIds.length) * 100) 
          : 0;
      },

      isModuleCompleted: (moduleId) => {
        const progress = get().getProgress("MODULE", moduleId);
        return progress?.status === "COMPLETED" || progress?.status === "MASTERED";
      },

      isExamPassed: (examId) => {
        return get().passedExams.includes(examId);
      },

      setExamPassed: (examId) => {
        set((state) => ({
          passedExams: state.passedExams.includes(examId) 
            ? state.passedExams 
            : [...state.passedExams, examId],
        }));
      },
    }),
    {
      name: "linux-academy-progress",
    }
  )
);
