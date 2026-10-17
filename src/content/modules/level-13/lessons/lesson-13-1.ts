import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson131Content: ContentBlock[] = [
  {
    id: "block-13-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Introducción a Git", text: "Introducción a Git — Control de versiones, repositorios, commits\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Introduction to Git", text: "Introduction to Git — Version control, repositories, commits\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-13-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Introducción a Git**\n\ngit init; .git/objects; working tree vs index vs HEAD; config user.name/email local/global.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ngit init\ngit config user.email \"you@example.com\"\n```" },
      en: { title: "Key concepts", text: "**Introduction to Git**\n\ngit init; .git/objects; working tree vs index vs HEAD; config user.name/email local/global.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ngit init\ngit config user.email \"you@example.com\"\n```" },
    },
  },
  {
    id: "block-13-1-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "git init\ngit config user.email \"you@example.com\"", language: "bash" },
      en: { title: "Practice commands", code: "git init\ngit config user.email \"you@example.com\"", language: "bash" },
    },
  },
  {
    id: "block-13-1-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: ".gitignore temprano evita commits de secretos y node_modules." },
      en: { title: "Operational tip", text: "Early .gitignore avoids committing secrets and node_modules." },
    },
  },
  {
    id: "block-13-1-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson131Exercises: Exercise[] = [
  {
    id: "ex-13-1-1",
    lessonId: "lesson-13-1",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Introducción a Git»?",
      en: "Which tool or idea is central to «Introduction to Git»?",
    },
    options: { es: ["Solo git intro en teoría", "Práctica de git intro en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only git intro in theory", "Hands-on git intro on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica git intro en entornos reales.",
      en: "This lesson applies git intro in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-13-1-2",
    lessonId: "lesson-13-1",
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

export const lesson131Quiz: Quiz = {
  id: "quiz-13-1",
  lessonId: "lesson-13-1",
  questions: [
    {
      id: "quiz-13-1-1",
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
      id: "quiz-13-1-2",
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

export const lesson131: Lesson = {
  id: "lesson-13-1",
  moduleId: "level-13",
  slug: "git-intro",
  title: { es: "Introducción a Git", en: "Introduction to Git" },
  description: { es: "Control de versiones, repositorios, commits", en: "Version control, repositories, commits" },
  order: 1,
  duration: 35,
  contentBlocks: lesson131Content,
  exercises: lesson131Exercises,
  quiz: lesson131Quiz,
};
