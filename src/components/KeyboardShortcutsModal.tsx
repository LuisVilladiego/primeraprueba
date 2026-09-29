import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Keyboard, X } from "lucide-react";

const shortcuts = [
  { keys: ["Ctrl", "D"], description: { es: "Ir al Dashboard", en: "Go to Dashboard" } },
  { keys: ["Ctrl", "T"], description: { es: "Abrir Terminal", en: "Open Terminal" } },
  { keys: ["Ctrl", "R"], description: { es: "Ver Roadmap", en: "View Roadmap" } },
  { keys: ["Ctrl", "B"], description: { es: "Alternar sidebar", en: "Toggle sidebar" } },
  { keys: ["Ctrl", "."], description: { es: "Cambiar tema", en: "Change theme" } },
  { keys: ["Ctrl", ","], description: { es: "Abrir Configuración", en: "Open Settings" } },
  { keys: ["Ctrl", "Shift", "P"], description: { es: "Ver Perfil", en: "View Profile" } },
  { keys: ["Ctrl", "Shift", "A"], description: { es: "Ver Logros", en: "View Achievements" } },
  { keys: ["Ctrl", "Shift", "C"], description: { es: "Ver Comandos", en: "View Commands" } },
  { keys: ["?"], description: { es: "Mostrar atajos", en: "Show shortcuts" } },
];

export function KeyboardShortcutsModal() {
  const { locale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "?" && !e.ctrlKey && !e.altKey) {
        if (
          !(e.target instanceof HTMLInputElement) &&
          !(e.target instanceof HTMLTextAreaElement)
        ) {
          e.preventDefault();
          setIsOpen((prev) => !prev);
        }
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]">
      <Card className="w-full max-w-lg mx-4 animate-[scale-in_0.2s_ease-out]">
        <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-700">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Keyboard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {locale === "es" ? "Atajos de Teclado" : "Keyboard Shortcuts"}
            </h2>
          </div>
          <Button variant="ghost" size="iconSm" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          <div className="space-y-2">
            {shortcuts.map((shortcut, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-zinc-50 px-4 py-3 dark:bg-zinc-800/50"
              >
                <span className="text-zinc-600 dark:text-zinc-400">
                  {shortcut.description[locale as "es" | "en"]}
                </span>
                <div className="flex items-center gap-1">
                  {shortcut.keys.map((key, i) => (
                    <span key={i}>
                      <kbd className="inline-flex min-w-[28px] items-center justify-center rounded-md border border-zinc-300 bg-white px-2 py-1 text-xs font-medium text-zinc-700 shadow-sm dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
                        {key}
                      </kbd>
                      {i < shortcut.keys.length - 1 && (
                        <span className="mx-1 text-zinc-400">+</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-200 p-4 dark:border-zinc-700">
          <p className="text-center text-sm text-zinc-500">
            {locale === "es"
              ? "Presiona ? en cualquier momento para ver esta ayuda"
              : "Press ? at any time to see this help"}
          </p>
        </div>
      </Card>
    </div>
  );
}
