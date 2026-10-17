import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson84Content: ContentBlock[] = [
  {
    id: "block-8-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Pacman en Arch Linux", text: "Pacman en Arch Linux — El gestor de paquetes de Arch y AUR\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Pacman on Arch Linux", text: "Pacman on Arch Linux — Arch package manager and AUR\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-8-4-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Pacman en Arch Linux**\n\npacman -Syu sincroniza; -Qi info; AUR helpers (yay) compilan PKGBUILDs de terceros.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nsudo pacman -Syu\nyay -S package  # AUR helper\n```" },
      en: { title: "Key concepts", text: "**Pacman on Arch Linux**\n\npacman -Syu syncs; -Qi info; AUR helpers (yay) build third-party PKGBUILDs.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nsudo pacman -Syu\nyay -S package  # AUR helper\n```" },
    },
  },
  {
    id: "block-8-4-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "sudo pacman -Syu\nyay -S package  # AUR helper", language: "bash" },
      en: { title: "Practice commands", code: "sudo pacman -Syu\nyay -S package  # AUR helper", language: "bash" },
    },
  },
  {
    id: "block-8-4-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Revisa PKGBUILD antes de instalar desde AUR." },
      en: { title: "Operational tip", text: "Review PKGBUILD before installing from AUR." },
    },
  },
  {
    id: "block-8-4-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson84Exercises: Exercise[] = [
  {
    id: "ex-8-4-1",
    lessonId: "lesson-8-4",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Pacman en Arch Linux»?",
      en: "Which tool or idea is central to «Pacman on Arch Linux»?",
    },
    options: { es: ["Solo pacman arch en teoría", "Práctica de pacman arch en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only pacman arch in theory", "Hands-on pacman arch on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica pacman arch en entornos reales.",
      en: "This lesson applies pacman arch in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-8-4-2",
    lessonId: "lesson-8-4",
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

export const lesson84Quiz: Quiz = {
  id: "quiz-8-4",
  lessonId: "lesson-8-4",
  questions: [
    {
      id: "quiz-8-4-1",
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
      id: "quiz-8-4-2",
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

export const lesson84: Lesson = {
  id: "lesson-8-4",
  moduleId: "level-8",
  slug: "pacman-arch",
  title: { es: "Pacman en Arch Linux", en: "Pacman on Arch Linux" },
  description: { es: "El gestor de paquetes de Arch y AUR", en: "Arch package manager and AUR" },
  order: 4,
  duration: 30,
  contentBlocks: lesson84Content,
  exercises: lesson84Exercises,
  quiz: lesson84Quiz,
};
