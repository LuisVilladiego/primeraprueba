import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson65Content: ContentBlock[] = [
  {
    id: "block-6-5-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Vim Avanzado: Buffers, Windows, Tabs", text: "Vim Avanzado: Buffers, Windows, Tabs — Trabaja con múltiples archivos simultáneamente\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Advanced Vim: Buffers, Windows, Tabs", text: "Advanced Vim: Buffers, Windows, Tabs — Work with multiple files simultaneously\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-6-5-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Vim Avanzado: Buffers, Windows, Tabs**\n\nVentanas :split/:vsplit; tabs :tabe; buffers :bn/:bp; macros qaq...q@a.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\n:split file2\nCtrl+w w  \" cycle windows\n:tabe file3\n```" },
      en: { title: "Key concepts", text: "**Advanced Vim: Buffers, Windows, Tabs**\n\nWindows :split/:vsplit; tabs :tabe; buffers :bn/:bp; macros qaq...q@a.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\n:split file2\nCtrl+w w  \" cycle windows\n:tabe file3\n```" },
    },
  },
  {
    id: "block-6-5-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: ":split file2\nCtrl+w w  \" cycle windows\n:tabe file3", language: "bash" },
      en: { title: "Practice commands", code: ":split file2\nCtrl+w w  \" cycle windows\n:tabe file3", language: "bash" },
    },
  },
  {
    id: "block-6-5-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Ctrl+w h/j/k/l mueve foco entre splits sin ratón." },
      en: { title: "Operational tip", text: "Ctrl+w h/j/k/l moves focus between splits without a mouse." },
    },
  },
  {
    id: "block-6-5-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson65Exercises: Exercise[] = [
  {
    id: "ex-6-5-1",
    lessonId: "lesson-6-5",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Vim Avanzado: Buffers, Windows, Tabs»?",
      en: "Which tool or idea is central to «Advanced Vim: Buffers, Windows, Tabs»?",
    },
    options: { es: ["Solo vim advanced en teoría", "Práctica de vim advanced en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only vim advanced in theory", "Hands-on vim advanced on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica vim advanced en entornos reales.",
      en: "This lesson applies vim advanced in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-6-5-2",
    lessonId: "lesson-6-5",
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

export const lesson65Quiz: Quiz = {
  id: "quiz-6-5",
  lessonId: "lesson-6-5",
  questions: [
    {
      id: "quiz-6-5-1",
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
      id: "quiz-6-5-2",
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

export const lesson65: Lesson = {
  id: "lesson-6-5",
  moduleId: "level-6",
  slug: "vim-advanced",
  title: { es: "Vim Avanzado: Buffers, Windows, Tabs", en: "Advanced Vim: Buffers, Windows, Tabs" },
  description: { es: "Trabaja con múltiples archivos simultáneamente", en: "Work with multiple files simultaneously" },
  order: 5,
  duration: 35,
  contentBlocks: lesson65Content,
  exercises: lesson65Exercises,
  quiz: lesson65Quiz,
};
