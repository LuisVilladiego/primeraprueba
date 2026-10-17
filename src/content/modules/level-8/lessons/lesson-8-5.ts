import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson85Content: ContentBlock[] = [
  {
    id: "block-8-5-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Paquetes Universales: Snap, Flatpak, AppImage", text: "Paquetes Universales: Snap, Flatpak, AppImage — Soluciones multiplataforma de empaquetado\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Universal Packages: Snap, Flatpak, AppImage", text: "Universal Packages: Snap, Flatpak, AppImage — Cross-platform packaging solutions\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-8-5-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Paquetes Universales: Snap, Flatpak, AppImage**\n\nsnap confinement; flatpak remotes flathub; AppImage portable sin install system-wide.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nsnap install hello-world\nflatpak install flathub org.gimp.GIMP\n```" },
      en: { title: "Key concepts", text: "**Universal Packages: Snap, Flatpak, AppImage**\n\nsnap confinement; flatpak remotes flathub; AppImage portable without system install.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nsnap install hello-world\nflatpak install flathub org.gimp.GIMP\n```" },
    },
  },
  {
    id: "block-8-5-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "snap install hello-world\nflatpak install flathub org.gimp.GIMP", language: "bash" },
      en: { title: "Practice commands", code: "snap install hello-world\nflatpak install flathub org.gimp.GIMP", language: "bash" },
    },
  },
  {
    id: "block-8-5-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "En servidores headless evita snapd salvo necesidad; prefer packages nativos." },
      en: { title: "Operational tip", text: "On headless servers avoid snapd unless needed; prefer native packages." },
    },
  },
  {
    id: "block-8-5-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson85Exercises: Exercise[] = [
  {
    id: "ex-8-5-1",
    lessonId: "lesson-8-5",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Paquetes Universales: Snap, Flatpak, AppImage»?",
      en: "Which tool or idea is central to «Universal Packages: Snap, Flatpak, AppImage»?",
    },
    options: { es: ["Solo snap flatpak appimage en teoría", "Práctica de snap flatpak appimage en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only snap flatpak appimage in theory", "Hands-on snap flatpak appimage on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica snap flatpak appimage en entornos reales.",
      en: "This lesson applies snap flatpak appimage in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-8-5-2",
    lessonId: "lesson-8-5",
    slug: "production-practice",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "Antes de cambiar producción, ¿qué paso es más sensato?",
      en: "Before changing production, which step is most sensible?",
    },
    options: { es: ["Aplicar directo en prod", "Validar en staging/VM y revisar rollback", "Desactivar logs", "Ignorar permisos"], en: ["Apply directly in prod", "Validate in staging/VM and plan rollback", "Disable logs", "Ignore permissions"] },
    correctAnswer: "1",
    explanation: {
      es: "Staging reduce blast radius.",
      en: "Staging reduces blast radius.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 2,
  }
];

export const lesson85Quiz: Quiz = {
  id: "quiz-8-5",
  lessonId: "lesson-8-5",
  questions: [
    {
      id: "quiz-8-5-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Dónde documentar comandos clave de esta lección?",
        en: "Where should you document key commands from this lesson?",
      },
      options: {
        es: ["runbook/wiki del equipo", "Solo memoria", "Chat efímero", "Ningún sitio"],
        en: ["Team runbook/wiki", "Memory only", "Ephemeral chat", "Nowhere"],
      },
      correctAnswer: "0",
      explanation: { es: "Runbooks aceleran incident response.", en: "Runbooks speed incident response." },
      points: 5,
    },
    {
      id: "quiz-8-5-2",
      type: "TRUE_FALSE",
      question: {
        es: "Probar en un entorno no productivo reduce riesgo.",
        en: "Testing in a non-production environment reduces risk.",
      },
      correctAnswer: "true",
      explanation: { es: "Siempre valida en staging cuando sea posible.", en: "Always validate in staging when possible." },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson85: Lesson = {
  id: "lesson-8-5",
  moduleId: "level-8",
  slug: "snap-flatpak-appimage",
  title: { es: "Paquetes Universales: Snap, Flatpak, AppImage", en: "Universal Packages: Snap, Flatpak, AppImage" },
  description: { es: "Soluciones multiplataforma de empaquetado", en: "Cross-platform packaging solutions" },
  order: 5,
  duration: 30,
  contentBlocks: lesson85Content,
  exercises: lesson85Exercises,
  quiz: lesson85Quiz,
};
