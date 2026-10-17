import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson74Content: ContentBlock[] = [
  {
    id: "block-7-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Procesamiento con awk", text: "Procesamiento con awk — Procesa datos estructurados por columnas\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Processing with awk", text: "Processing with awk — Process column-structured data\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-7-4-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Procesamiento con awk**\n\nawk procesa columnas: $0 línea, $1..NF campos, -F delimitador; END{} agrega totales.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nawk '{sum+=$3} END {print sum}' metrics.txt\nawk -F, '{print $2}' data.csv\n```" },
      en: { title: "Key concepts", text: "**Processing with awk**\n\nawk processes columns: $0 line, $1..NF fields, -F separator; END{} aggregates totals.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nawk '{sum+=$3} END {print sum}' metrics.txt\nawk -F, '{print $2}' data.csv\n```" },
    },
  },
  {
    id: "block-7-4-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "awk '{sum+=$3} END {print sum}' metrics.txt\nawk -F, '{print $2}' data.csv", language: "bash" },
      en: { title: "Practice commands", code: "awk '{sum+=$3} END {print sum}' metrics.txt\nawk -F, '{print $2}' data.csv", language: "bash" },
    },
  },
  {
    id: "block-7-4-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Prefiere awk para CSV simple; usa csvkit/python para CSV con comillas embebidas." },
      en: { title: "Operational tip", text: "Prefer awk for simple CSV; csvkit/python for quoted CSV." },
    },
  },
  {
    id: "block-7-4-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson74Exercises: Exercise[] = [
  {
    id: "ex-7-4-1",
    lessonId: "lesson-7-4",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Procesamiento con awk»?",
      en: "Which tool or idea is central to «Processing with awk»?",
    },
    options: { es: ["Solo awk basics en teoría", "Práctica de awk basics en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only awk basics in theory", "Hands-on awk basics on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica awk basics en entornos reales.",
      en: "This lesson applies awk basics in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-7-4-2",
    lessonId: "lesson-7-4",
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

export const lesson74Quiz: Quiz = {
  id: "quiz-7-4",
  lessonId: "lesson-7-4",
  questions: [
    {
      id: "quiz-7-4-1",
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
      id: "quiz-7-4-2",
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

export const lesson74: Lesson = {
  id: "lesson-7-4",
  moduleId: "level-7",
  slug: "awk-basics",
  title: { es: "Procesamiento con awk", en: "Processing with awk" },
  description: { es: "Procesa datos estructurados por columnas", en: "Process column-structured data" },
  order: 4,
  duration: 45,
  contentBlocks: lesson74Content,
  exercises: lesson74Exercises,
  quiz: lesson74Quiz,
};
