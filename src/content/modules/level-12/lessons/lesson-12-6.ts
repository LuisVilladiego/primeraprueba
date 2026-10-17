import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson126Content: ContentBlock[] = [
  {
    id: "block-12-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Parseo de Argumentos con getopts", text: "Parseo de Argumentos con getopts — Crea scripts con opciones -v, --help, etc.\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Argument Parsing with getopts", text: "Argument Parsing with getopts — Create scripts with -v, --help options, etc.\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-12-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Parseo de Argumentos con getopts**\n\ngetopts :abc: parse flags; OPTARG valor; shift tras loop; -- end of options convención.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nwhile getopts \":hv\" opt; do case $opt in v) verbose=1;; esac; done\n```" },
      en: { title: "Key concepts", text: "**Argument Parsing with getopts**\n\ngetopts :abc: parse flags; OPTARG value; shift after loop; -- end of options convention.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nwhile getopts \":hv\" opt; do case $opt in v) verbose=1;; esac; done\n```" },
    },
  },
  {
    id: "block-12-6-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "while getopts \":hv\" opt; do case $opt in v) verbose=1;; esac; done", language: "bash" },
      en: { title: "Practice commands", code: "while getopts \":hv\" opt; do case $opt in v) verbose=1;; esac; done", language: "bash" },
    },
  },
  {
    id: "block-12-6-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Leading : en optstring silencia errores builtin—valida tú." },
      en: { title: "Operational tip", text: "Leading : in optstring silences builtin errors—you validate." },
    },
  },
  {
    id: "block-12-6-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson126Exercises: Exercise[] = [
  {
    id: "ex-12-6-1",
    lessonId: "lesson-12-6",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Parseo de Argumentos con getopts»?",
      en: "Which tool or idea is central to «Argument Parsing with getopts»?",
    },
    options: { es: ["Solo getopts arguments en teoría", "Práctica de getopts arguments en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only getopts arguments in theory", "Hands-on getopts arguments on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica getopts arguments en entornos reales.",
      en: "This lesson applies getopts arguments in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-12-6-2",
    lessonId: "lesson-12-6",
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

export const lesson126Quiz: Quiz = {
  id: "quiz-12-6",
  lessonId: "lesson-12-6",
  questions: [
    {
      id: "quiz-12-6-1",
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
      id: "quiz-12-6-2",
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

export const lesson126: Lesson = {
  id: "lesson-12-6",
  moduleId: "level-12",
  slug: "getopts-arguments",
  title: { es: "Parseo de Argumentos con getopts", en: "Argument Parsing with getopts" },
  description: { es: "Crea scripts con opciones -v, --help, etc.", en: "Create scripts with -v, --help options, etc." },
  order: 6,
  duration: 40,
  contentBlocks: lesson126Content,
  exercises: lesson126Exercises,
  quiz: lesson126Quiz,
};
