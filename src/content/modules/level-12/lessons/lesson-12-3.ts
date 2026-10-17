import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson123Content: ContentBlock[] = [
  {
    id: "block-12-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Debugging de Scripts", text: "Debugging de Scripts — set -x, set -e, trap y técnicas de depuración\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Script Debugging", text: "Script Debugging — set -x, set -e, trap and debugging techniques\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-12-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Debugging de Scripts**\n\nbash -x trace; PS4 custom prompt; set -v muestra lectura de líneas; errexit nounset pipefail combo.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nbash -x script.sh\nset -euo pipefail\n```" },
      en: { title: "Key concepts", text: "**Script Debugging**\n\nbash -x trace; PS4 custom prompt; set -v shows read lines; errexit nounset pipefail combo.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nbash -x script.sh\nset -euo pipefail\n```" },
    },
  },
  {
    id: "block-12-3-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "bash -x script.sh\nset -euo pipefail", language: "bash" },
      en: { title: "Practice commands", code: "bash -x script.sh\nset -euo pipefail", language: "bash" },
    },
  },
  {
    id: "block-12-3-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Reproduce con bash -x en mismo shell options que prod." },
      en: { title: "Operational tip", text: "Reproduce with bash -x using same shell options as prod." },
    },
  },
  {
    id: "block-12-3-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson123Exercises: Exercise[] = [
  {
    id: "ex-12-3-1",
    lessonId: "lesson-12-3",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Debugging de Scripts»?",
      en: "Which tool or idea is central to «Script Debugging»?",
    },
    options: { es: ["Solo debugging scripts en teoría", "Práctica de debugging scripts en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only debugging scripts in theory", "Hands-on debugging scripts on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica debugging scripts en entornos reales.",
      en: "This lesson applies debugging scripts in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-12-3-2",
    lessonId: "lesson-12-3",
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

export const lesson123Quiz: Quiz = {
  id: "quiz-12-3",
  lessonId: "lesson-12-3",
  questions: [
    {
      id: "quiz-12-3-1",
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
      id: "quiz-12-3-2",
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

export const lesson123: Lesson = {
  id: "lesson-12-3",
  moduleId: "level-12",
  slug: "debugging-scripts",
  title: { es: "Debugging de Scripts", en: "Script Debugging" },
  description: { es: "set -x, set -e, trap y técnicas de depuración", en: "set -x, set -e, trap and debugging techniques" },
  order: 3,
  duration: 35,
  contentBlocks: lesson123Content,
  exercises: lesson123Exercises,
  quiz: lesson123Quiz,
};
