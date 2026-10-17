import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson71Content: ContentBlock[] = [
  {
    id: "block-7-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Búsqueda de Texto con grep", text: "Búsqueda de Texto con grep — Encuentra patrones en archivos y streams\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Text Search with grep", text: "Text Search with grep — Find patterns in files and streams\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-7-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Búsqueda de Texto con grep**\n\ngrep filtra líneas; -R recursivo, -n número, -i ignore case; --color=auto resalta.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ngrep -RIn 'ERROR' /var/log\ngrep -E 'timeout|refused' app.log\n```" },
      en: { title: "Key concepts", text: "**Text Search with grep**\n\ngrep filters lines; -R recursive, -n line numbers, -i ignore case; --color=auto highlights.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ngrep -RIn 'ERROR' /var/log\ngrep -E 'timeout|refused' app.log\n```" },
    },
  },
  {
    id: "block-7-1-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "grep -RIn 'ERROR' /var/log\ngrep -E 'timeout|refused' app.log", language: "bash" },
      en: { title: "Practice commands", code: "grep -RIn 'ERROR' /var/log\ngrep -E 'timeout|refused' app.log", language: "bash" },
    },
  },
  {
    id: "block-7-1-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "rg/ag suelen ser más rápidos en repos grandes; grep sigue universal en minimal images." },
      en: { title: "Operational tip", text: "rg/ag are faster in big repos; grep stays universal on minimal images." },
    },
  },
  {
    id: "block-7-1-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson71Exercises: Exercise[] = [
  {
    id: "ex-7-1-1",
    lessonId: "lesson-7-1",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Búsqueda de Texto con grep»?",
      en: "Which tool or idea is central to «Text Search with grep»?",
    },
    options: { es: ["Solo grep basics en teoría", "Práctica de grep basics en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only grep basics in theory", "Hands-on grep basics on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica grep basics en entornos reales.",
      en: "This lesson applies grep basics in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-7-1-2",
    lessonId: "lesson-7-1",
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

export const lesson71Quiz: Quiz = {
  id: "quiz-7-1",
  lessonId: "lesson-7-1",
  questions: [
    {
      id: "quiz-7-1-1",
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
      id: "quiz-7-1-2",
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

export const lesson71: Lesson = {
  id: "lesson-7-1",
  moduleId: "level-7",
  slug: "grep-basics",
  title: { es: "Búsqueda de Texto con grep", en: "Text Search with grep" },
  description: { es: "Encuentra patrones en archivos y streams", en: "Find patterns in files and streams" },
  order: 1,
  duration: 35,
  contentBlocks: lesson71Content,
  exercises: lesson71Exercises,
  quiz: lesson71Quiz,
};
