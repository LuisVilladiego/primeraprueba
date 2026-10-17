import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson127Content: ContentBlock[] = [
  {
    id: "block-12-7-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Mejores Prácticas de Scripting", text: "Mejores Prácticas de Scripting — Estilo, seguridad, portabilidad y shellcheck\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Scripting Best Practices", text: "Scripting Best Practices — Style, security, portability and shellcheck\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-12-7-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Mejores Prácticas de Scripting**\n\nshellcheck; quote vars; [[ ]]; avoid eval; mktemp; readonly; functions; logging estructurado.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nshellcheck script.sh\n# quote vars, use [[ ]], avoid eval\n```" },
      en: { title: "Key concepts", text: "**Scripting Best Practices**\n\nshellcheck; quote vars; [[ ]]; avoid eval; mktemp; readonly; functions; structured logging.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nshellcheck script.sh\n# quote vars, use [[ ]], avoid eval\n```" },
    },
  },
  {
    id: "block-12-7-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "shellcheck script.sh\n# quote vars, use [[ ]], avoid eval", language: "bash" },
      en: { title: "Practice commands", code: "shellcheck script.sh\n# quote vars, use [[ ]], avoid eval", language: "bash" },
    },
  },
  {
    id: "block-12-7-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Versiona scripts en git, no copies sueltas en /root." },
      en: { title: "Operational tip", text: "Version scripts in git, not loose copies in /root." },
    },
  },
  {
    id: "block-12-7-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson127Exercises: Exercise[] = [
  {
    id: "ex-12-7-1",
    lessonId: "lesson-12-7",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Mejores Prácticas de Scripting»?",
      en: "Which tool or idea is central to «Scripting Best Practices»?",
    },
    options: { es: ["Solo best practices en teoría", "Práctica de best practices en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only best practices in theory", "Hands-on best practices on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica best practices en entornos reales.",
      en: "This lesson applies best practices in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-12-7-2",
    lessonId: "lesson-12-7",
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

export const lesson127Quiz: Quiz = {
  id: "quiz-12-7",
  lessonId: "lesson-12-7",
  questions: [
    {
      id: "quiz-12-7-1",
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
      id: "quiz-12-7-2",
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

export const lesson127: Lesson = {
  id: "lesson-12-7",
  moduleId: "level-12",
  slug: "best-practices",
  title: { es: "Mejores Prácticas de Scripting", en: "Scripting Best Practices" },
  description: { es: "Estilo, seguridad, portabilidad y shellcheck", en: "Style, security, portability and shellcheck" },
  order: 7,
  duration: 35,
  contentBlocks: lesson127Content,
  exercises: lesson127Exercises,
  quiz: lesson127Quiz,
};
