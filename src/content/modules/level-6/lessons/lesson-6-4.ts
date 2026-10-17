import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson64Content: ContentBlock[] = [
  {
    id: "block-6-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Búsqueda y Reemplazo en Vim", text: "Búsqueda y Reemplazo en Vim — Encuentra y reemplaza texto eficientemente\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Search and Replace in Vim", text: "Search and Replace in Vim — Find and replace text efficiently\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-6-4-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Búsqueda y Reemplazo en Vim**\n\n:%s/old/new/g reemplaza global; flags c confirm, I case sensitive; n/N navega matches.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\n:%s/old/new/g\n/pattern then n/N\n```" },
      en: { title: "Key concepts", text: "**Search and Replace in Vim**\n\n:%s/old/new/g global replace; flags c confirm, I case; n/N navigate matches.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\n:%s/old/new/g\n/pattern then n/N\n```" },
    },
  },
  {
    id: "block-6-4-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: ":%s/old/new/g\n/pattern then n/N", language: "bash" },
      en: { title: "Practice commands", code: ":%s/old/new/g\n/pattern then n/N", language: "bash" },
    },
  },
  {
    id: "block-6-4-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Escapa / en patrones o usa otro delimitador :%s#old#new#g." },
      en: { title: "Operational tip", text: "Escape / in patterns or use another delimiter :%s#old#new#g." },
    },
  },
  {
    id: "block-6-4-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson64Exercises: Exercise[] = [
  {
    id: "ex-6-4-1",
    lessonId: "lesson-6-4",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Búsqueda y Reemplazo en Vim»?",
      en: "Which tool or idea is central to «Search and Replace in Vim»?",
    },
    options: { es: ["Solo vim search replace en teoría", "Práctica de vim search replace en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only vim search replace in theory", "Hands-on vim search replace on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica vim search replace en entornos reales.",
      en: "This lesson applies vim search replace in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-6-4-2",
    lessonId: "lesson-6-4",
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

export const lesson64Quiz: Quiz = {
  id: "quiz-6-4",
  lessonId: "lesson-6-4",
  questions: [
    {
      id: "quiz-6-4-1",
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
      id: "quiz-6-4-2",
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

export const lesson64: Lesson = {
  id: "lesson-6-4",
  moduleId: "level-6",
  slug: "vim-search-replace",
  title: { es: "Búsqueda y Reemplazo en Vim", en: "Search and Replace in Vim" },
  description: { es: "Encuentra y reemplaza texto eficientemente", en: "Find and replace text efficiently" },
  order: 4,
  duration: 30,
  contentBlocks: lesson64Content,
  exercises: lesson64Exercises,
  quiz: lesson64Quiz,
};
