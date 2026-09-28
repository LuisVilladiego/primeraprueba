"use client";

import { MainLayout } from "@/components/layout";
import { TerminalSimulator } from "@/components/terminal";
import { useTranslation } from "@/hooks/useTranslation";
import { Terminal as TerminalIcon, Info, Lightbulb } from "lucide-react";

export default function TerminalPage() {
  const { t, locale } = useTranslation();

  const tips = locale === "es" ? [
    "Usa las flechas ↑↓ para navegar por el historial de comandos",
    "Tab autocompleta nombres de archivos y directorios",
    "Ctrl+C cancela el comando actual",
    "Ctrl+L limpia la pantalla (igual que 'clear')",
  ] : [
    "Use ↑↓ arrows to navigate command history",
    "Tab autocompletes file and directory names",
    "Ctrl+C cancels the current command",
    "Ctrl+L clears the screen (same as 'clear')",
  ];

  return (
    <MainLayout>
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
              <TerminalIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {locale === "es" ? "Terminal de Práctica" : "Practice Terminal"}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                {locale === "es" 
                  ? "Practica comandos Linux en un entorno seguro" 
                  : "Practice Linux commands in a safe environment"}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          {/* Terminal */}
          <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700">
            <TerminalSimulator className="h-[500px]" />
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Info */}
            <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
              <div className="mb-3 flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-500" />
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {locale === "es" ? "Información" : "Information"}
                </h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {locale === "es"
                  ? "Este es un simulador de terminal de Pinguiñoño que te permite practicar comandos básicos de Linux sin riesgo. El sistema de archivos es virtual y se reinicia al recargar la página."
                  : "This is Pinguiñoño's terminal simulator that allows you to practice basic Linux commands without risk. The file system is virtual and resets when you reload the page."}
              </p>
            </div>

            {/* Tips */}
            <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
              <div className="mb-3 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {locale === "es" ? "Consejos" : "Tips"}
                </h3>
              </div>
              <ul className="space-y-2">
                {tips.map((tip, index) => (
                  <li key={index} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="text-green-500">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Commands */}
            <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
              <h3 className="mb-3 font-semibold text-zinc-900 dark:text-white">
                {locale === "es" ? "Comandos Comunes" : "Common Commands"}
              </h3>
              <div className="space-y-2">
                {[
                  { cmd: "pwd", desc: locale === "es" ? "Directorio actual" : "Current directory" },
                  { cmd: "ls", desc: locale === "es" ? "Listar archivos" : "List files" },
                  { cmd: "cd", desc: locale === "es" ? "Cambiar directorio" : "Change directory" },
                  { cmd: "cat", desc: locale === "es" ? "Ver archivo" : "View file" },
                  { cmd: "echo", desc: locale === "es" ? "Mostrar texto" : "Display text" },
                  { cmd: "clear", desc: locale === "es" ? "Limpiar pantalla" : "Clear screen" },
                ].map((item) => (
                  <div key={item.cmd} className="flex items-center justify-between text-sm">
                    <code className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-green-600 dark:bg-zinc-700 dark:text-green-400">
                      {item.cmd}
                    </code>
                    <span className="text-zinc-500">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
