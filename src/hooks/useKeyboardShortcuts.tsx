import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSettingsStore } from "@/stores/settingsStore";
import { useCommandPaletteStore } from "@/stores/commandPaletteStore";

interface ShortcutConfig {
  key: string;
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
  action: () => void;
  description: { es: string; en: string };
}

export function useKeyboardShortcuts() {
  const navigate = useNavigate();
  const { toggleSidebar, setTheme, theme } = useSettingsStore();
  const { toggle: toggleCommandPalette } = useCommandPaletteStore();

  const shortcuts: ShortcutConfig[] = [
    {
      key: "k",
      ctrl: true,
      action: () => toggleCommandPalette(),
      description: { es: "Abrir búsqueda global", en: "Open global search" },
    },
    {
      key: "d",
      ctrl: true,
      action: () => navigate("/"),
      description: { es: "Ir al Dashboard", en: "Go to Dashboard" },
    },
    {
      key: "t",
      ctrl: true,
      action: () => navigate("/terminal"),
      description: { es: "Abrir Terminal", en: "Open Terminal" },
    },
    {
      key: "r",
      ctrl: true,
      action: () => navigate("/roadmap"),
      description: { es: "Ver Roadmap", en: "View Roadmap" },
    },
    {
      key: "p",
      ctrl: true,
      shift: true,
      action: () => navigate("/profile"),
      description: { es: "Ver Perfil", en: "View Profile" },
    },
    {
      key: "b",
      ctrl: true,
      action: () => toggleSidebar(),
      description: { es: "Alternar sidebar", en: "Toggle sidebar" },
    },
    {
      key: ".",
      ctrl: true,
      action: () => {
        const themes: Array<"light" | "dark" | "system"> = ["light", "dark", "system"];
        const currentIndex = themes.indexOf(theme);
        const nextTheme = themes[(currentIndex + 1) % themes.length];
        setTheme(nextTheme);
      },
      description: { es: "Cambiar tema", en: "Change theme" },
    },
    {
      key: ",",
      ctrl: true,
      action: () => navigate("/settings"),
      description: { es: "Abrir Configuración", en: "Open Settings" },
    },
    {
      key: "a",
      ctrl: true,
      shift: true,
      action: () => navigate("/achievements"),
      description: { es: "Ver Logros", en: "View Achievements" },
    },
    {
      key: "c",
      ctrl: true,
      shift: true,
      action: () => navigate("/commands"),
      description: { es: "Ver Comandos", en: "View Commands" },
    },
  ];

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      for (const shortcut of shortcuts) {
        const ctrlMatch = shortcut.ctrl ? event.ctrlKey || event.metaKey : !event.ctrlKey && !event.metaKey;
        const altMatch = shortcut.alt ? event.altKey : !event.altKey;
        const shiftMatch = shortcut.shift ? event.shiftKey : !event.shiftKey;
        const keyMatch = event.key.toLowerCase() === shortcut.key.toLowerCase();

        if (ctrlMatch && altMatch && shiftMatch && keyMatch) {
          event.preventDefault();
          shortcut.action();
          return;
        }
      }
    },
    [shortcuts]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return { shortcuts };
}

export function KeyboardShortcutsProvider({ children }: { children: React.ReactNode }) {
  useKeyboardShortcuts();
  return <>{children}</>;
}
