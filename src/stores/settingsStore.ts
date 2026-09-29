import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Locale } from "@/types";
import { defaultLocale } from "@/i18n/config";

interface SettingsState {
  locale: Locale;
  theme: "light" | "dark" | "system";
  sidebarCollapsed: boolean;
  soundEnabled: boolean;
  notificationsEnabled: boolean;
  animationsEnabled: boolean;
  fontSize: "small" | "medium" | "large";
  setLocale: (locale: Locale) => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setSoundEnabled: (enabled: boolean) => void;
  setNotificationsEnabled: (enabled: boolean) => void;
  setAnimationsEnabled: (enabled: boolean) => void;
  setFontSize: (size: "small" | "medium" | "large") => void;
  resetSettings: () => void;
}

const defaultSettings = {
  locale: defaultLocale,
  theme: "system" as const,
  sidebarCollapsed: false,
  soundEnabled: true,
  notificationsEnabled: true,
  animationsEnabled: true,
  fontSize: "medium" as const,
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      ...defaultSettings,
      setLocale: (locale) => set({ locale }),
      setTheme: (theme) => set({ theme }),
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),
      setNotificationsEnabled: (enabled) => set({ notificationsEnabled: enabled }),
      setAnimationsEnabled: (enabled) => set({ animationsEnabled: enabled }),
      setFontSize: (size) => set({ fontSize: size }),
      resetSettings: () => set(defaultSettings),
    }),
    {
      name: "pinguinono-settings",
    }
  )
);
