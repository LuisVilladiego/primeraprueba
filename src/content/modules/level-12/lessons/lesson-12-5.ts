import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson125Content: ContentBlock[] = [
  {
    id: "block-12-5-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Manejo de Señales con trap", text: "Manejo de Señales con trap — Captura señales y limpia recursos\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Signal Handling with trap", text: "Signal Handling with trap — Catch signals and clean up resources\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-12-5-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Manejo de Señales con trap**\n\ntrap handler on EXIT INT TERM; SIGKILL no interceptable; graceful shutdown cierra fds y flush.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ntrap 'echo cleanup; rm -f \"$tmp\"' EXIT INT TERM\n```" },
      en: { title: "Key concepts", text: "**Signal Handling with trap**\n\ntrap handler on EXIT INT TERM; SIGKILL not interceptable; graceful shutdown closes fds flush.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ntrap 'echo cleanup; rm -f \"$tmp\"' EXIT INT TERM\n```" },
    },
  },
  {
    id: "block-12-5-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "trap 'echo cleanup; rm -f \"$tmp\"' EXIT INT TERM", language: "bash" },
      en: { title: "Practice commands", code: "trap 'echo cleanup; rm -f \"$tmp\"' EXIT INT TERM", language: "bash" },
    },
  },
  {
    id: "block-12-5-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "systemd envía SIGTERM antes de SIGKILL tras TimeoutStopSec." },
      en: { title: "Operational tip", text: "systemd sends SIGTERM before SIGKILL after TimeoutStopSec." },
    },
  },
  {
    id: "block-12-5-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson125Exercises: Exercise[] = [
  {
    id: "ex-12-5-1",
    lessonId: "lesson-12-5",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Manejo de Señales con trap»?",
      en: "Which tool or idea is central to «Signal Handling with trap»?",
    },
    options: { es: ["Solo signal handling en teoría", "Práctica de signal handling en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only signal handling in theory", "Hands-on signal handling on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica signal handling en entornos reales.",
      en: "This lesson applies signal handling in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-12-5-2",
    lessonId: "lesson-12-5",
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

export const lesson125Quiz: Quiz = {
  id: "quiz-12-5",
  lessonId: "lesson-12-5",
  questions: [
    {
      id: "quiz-12-5-1",
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
      id: "quiz-12-5-2",
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

export const lesson125: Lesson = {
  id: "lesson-12-5",
  moduleId: "level-12",
  slug: "signal-handling",
  title: { es: "Manejo de Señales con trap", en: "Signal Handling with trap" },
  description: { es: "Captura señales y limpia recursos", en: "Catch signals and clean up resources" },
  order: 5,
  duration: 35,
  contentBlocks: lesson125Content,
  exercises: lesson125Exercises,
  quiz: lesson125Quiz,
};
