import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson132Content: ContentBlock[] = [
  {
    id: "block-13-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Comandos Básicos de Git", text: "Comandos Básicos de Git — init, add, commit, status, log, diff\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Basic Git Commands", text: "Basic Git Commands — init, add, commit, status, log, diff\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-13-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Comandos Básicos de Git**\n\nstatus; add -p staging parcial; commit mensajes imperativos; log --oneline --graph.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ngit status\ngit add -p\ngit commit -m \"feat: add healthcheck\"\n```" },
      en: { title: "Key concepts", text: "**Basic Git Commands**\n\nstatus; add -p partial staging; imperative commits; log --oneline --graph.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ngit status\ngit add -p\ngit commit -m \"feat: add healthcheck\"\n```" },
    },
  },
  {
    id: "block-13-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "git status\ngit add -p\ngit commit -m \"feat: add healthcheck\"", language: "bash" },
      en: { title: "Practice commands", code: "git status\ngit add -p\ngit commit -m \"feat: add healthcheck\"", language: "bash" },
    },
  },
  {
    id: "block-13-2-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Nunca commit credentials—usa git-secrets o hooks." },
      en: { title: "Operational tip", text: "Never commit credentials—use git-secrets or hooks." },
    },
  },
  {
    id: "block-13-2-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson132Exercises: Exercise[] = [
  {
    id: "ex-13-2-1",
    lessonId: "lesson-13-2",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Comandos Básicos de Git»?",
      en: "Which tool or idea is central to «Basic Git Commands»?",
    },
    options: { es: ["Solo git basics en teoría", "Práctica de git basics en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only git basics in theory", "Hands-on git basics on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica git basics en entornos reales.",
      en: "This lesson applies git basics in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-13-2-2",
    lessonId: "lesson-13-2",
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

export const lesson132Quiz: Quiz = {
  id: "quiz-13-2",
  lessonId: "lesson-13-2",
  questions: [
    {
      id: "quiz-13-2-1",
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
      id: "quiz-13-2-2",
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

export const lesson132: Lesson = {
  id: "lesson-13-2",
  moduleId: "level-13",
  slug: "git-basics",
  title: { es: "Comandos Básicos de Git", en: "Basic Git Commands" },
  description: { es: "init, add, commit, status, log, diff", en: "init, add, commit, status, log, diff" },
  order: 2,
  duration: 40,
  contentBlocks: lesson132Content,
  exercises: lesson132Exercises,
  quiz: lesson132Quiz,
};
