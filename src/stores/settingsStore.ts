import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Locale } from "@/types";
import { defaultLocale } from "@/i18n/config";

interface SettingsState {
  locale: Locale;
  theme: "light" | "dark" | "system";
  sidebarCollapsed: boolean;
  setLocale: (locale: Locale) => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      locale: defaultLocale,
      theme: "system",
      sidebarCollapsed: false,
      setLocale: (locale) => set({ locale }),
      setTheme: (theme) => set({ theme }),
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
    }),
    {
      name: "linux-academy-settings",
    }
  )
);
