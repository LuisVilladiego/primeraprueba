import { create } from "zustand";
import type { ToastData } from "@/components/ui/Toast";

interface ToastState {
  toasts: ToastData[];
  addToast: (toast: Omit<ToastData, "id">) => void;
  removeToast: (id: string) => void;
  showAchievement: (title: string, xpReward: number) => void;
}

let toastId = 0;

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  addToast: (toast) => {
    const id = `toast-${++toastId}`;
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id }],
    }));
  },
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    }));
  },
  showAchievement: (title, xpReward) => {
    const id = `toast-${++toastId}`;
    set((state) => ({
      toasts: [
        ...state.toasts,
        {
          id,
          type: "achievement",
          title: `🎉 ${title}`,
          message: `+${xpReward} XP`,
          duration: 5000,
        },
      ],
    }));
  },
}));
