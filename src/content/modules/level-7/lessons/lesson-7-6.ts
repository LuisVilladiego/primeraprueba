import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson76Content: ContentBlock[] = [
  {
    id: "block-7-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "wc, tr y tee", text: "wc, tr y tee — Contar, transformar y duplicar streams\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "wc, tr and tee", text: "wc, tr and tee — Count, transform and duplicate streams\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-7-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**wc, tr y tee**\n\nwc -l/-w/-c cuenta; tr traduce caracteres; tee duplica stdout a archivo y terminal.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nwc -l access.log\ntr '[:lower:]' '[:upper:]' < in | tee out\n```" },
      en: { title: "Key concepts", text: "**wc, tr and tee**\n\nwc -l/-w/-c counts; tr translates chars; tee duplicates stdout to file and terminal.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nwc -l access.log\ntr '[:lower:]' '[:upper:]' < in | tee out\n```" },
    },
  },
  {
    id: "block-7-6-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "wc -l access.log\ntr '[:lower:]' '[:upper:]' < in | tee out", language: "bash" },
      en: { title: "Practice commands", code: "wc -l access.log\ntr '[:lower:]' '[:upper:]' < in | tee out", language: "bash" },
    },
  },
  {
    id: "block-7-6-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "tee -a append logs de instalación largos mientras ves progreso." },
      en: { title: "Operational tip", text: "tee -a appends long install logs while you watch progress." },
    },
  },
  {
    id: "block-7-6-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson76Exercises: Exercise[] = [
  {
    id: "ex-7-6-1",
    lessonId: "lesson-7-6",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «wc, tr y tee»?",
      en: "Which tool or idea is central to «wc, tr and tee»?",
    },
    options: { es: ["Solo wc tr tee en teoría", "Práctica de wc tr tee en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only wc tr tee in theory", "Hands-on wc tr tee on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica wc tr tee en entornos reales.",
      en: "This lesson applies wc tr tee in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-7-6-2",
    lessonId: "lesson-7-6",
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

export const lesson76Quiz: Quiz = {
  id: "quiz-7-6",
  lessonId: "lesson-7-6",
  questions: [
    {
      id: "quiz-7-6-1",
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
      id: "quiz-7-6-2",
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

export const lesson76: Lesson = {
  id: "lesson-7-6",
  moduleId: "level-7",
  slug: "wc-tr-tee",
  title: { es: "wc, tr y tee", en: "wc, tr and tee" },
  description: { es: "Contar, transformar y duplicar streams", en: "Count, transform and duplicate streams" },
  order: 6,
  duration: 25,
  contentBlocks: lesson76Content,
  exercises: lesson76Exercises,
  quiz: lesson76Quiz,
};
