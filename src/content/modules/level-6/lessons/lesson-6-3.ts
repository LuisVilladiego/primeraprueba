import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson63Content: ContentBlock[] = [
  {
    id: "block-6-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Edición en Vim", text: "Edición en Vim — Insertar, borrar, copiar, pegar y deshacer\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Editing in Vim", text: "Editing in Vim — Insert, delete, copy, paste and undo\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-6-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Edición en Vim**\n\nOperadores + movimientos: dd elimina línea, yy yank, p pega; u deshace.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ndd   \" delete line\nyyP  \" yank and paste below\nu    \" undo\n```" },
      en: { title: "Key concepts", text: "**Editing in Vim**\n\nOperators + motions: dd deletes line, yy yanks, p puts; u undoes.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ndd   \" delete line\nyyP  \" yank and paste below\nu    \" undo\n```" },
    },
  },
  {
    id: "block-6-3-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "dd   \" delete line\nyyP  \" yank and paste below\nu    \" undo", language: "bash" },
      en: { title: "Practice commands", code: "dd   \" delete line\nyyP  \" yank and paste below\nu    \" undo", language: "bash" },
    },
  },
  {
    id: "block-6-3-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Usa . para repetir último cambio en Normal mode." },
      en: { title: "Operational tip", text: "Use . to repeat last Normal-mode change." },
    },
  },
  {
    id: "block-6-3-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson63Exercises: Exercise[] = [
  {
    id: "ex-6-3-1",
    lessonId: "lesson-6-3",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Edición en Vim»?",
      en: "Which tool or idea is central to «Editing in Vim»?",
    },
    options: { es: ["Solo vim editing en teoría", "Práctica de vim editing en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only vim editing in theory", "Hands-on vim editing on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica vim editing en entornos reales.",
      en: "This lesson applies vim editing in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-6-3-2",
    lessonId: "lesson-6-3",
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

export const lesson63Quiz: Quiz = {
  id: "quiz-6-3",
  lessonId: "lesson-6-3",
  questions: [
    {
      id: "quiz-6-3-1",
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
      id: "quiz-6-3-2",
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

export const lesson63: Lesson = {
  id: "lesson-6-3",
  moduleId: "level-6",
  slug: "vim-editing",
  title: { es: "Edición en Vim", en: "Editing in Vim" },
  description: { es: "Insertar, borrar, copiar, pegar y deshacer", en: "Insert, delete, copy, paste and undo" },
  order: 3,
  duration: 35,
  contentBlocks: lesson63Content,
  exercises: lesson63Exercises,
  quiz: lesson63Quiz,
};
