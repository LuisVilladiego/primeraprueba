import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson54Content: ContentBlock[] = [
  {
    id: "block-5-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Condicionales: if, elif, else", text: "Condicionales: if, elif, else — Toma decisiones en tus scripts\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Conditionals: if, elif, else", text: "Conditionals: if, elif, else — Make decisions in your scripts\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-5-4-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Condicionales: if, elif, else**\n\n[[ ]] no hace word splitting ni pathname expansion; ideal para tests con variables de usuario.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nif [[ -f /etc/os-release ]]; then\n  . /etc/os-release\n  echo \"$ID\"\nfi\n```" },
      en: { title: "Key concepts", text: "**Conditionals: if, elif, else**\n\n[[ ]] skips word splitting and pathname expansion; ideal for user-supplied variables.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nif [[ -f /etc/os-release ]]; then\n  . /etc/os-release\n  echo \"$ID\"\nfi\n```" },
    },
  },
  {
    id: "block-5-4-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "if [[ -f /etc/os-release ]]; then\n  . /etc/os-release\n  echo \"$ID\"\nfi", language: "bash" },
      en: { title: "Practice commands", code: "if [[ -f /etc/os-release ]]; then\n  . /etc/os-release\n  echo \"$ID\"\nfi", language: "bash" },
    },
  },
  {
    id: "block-5-4-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "source (.) archivos de config en lugar de parsear manualmente." },
      en: { title: "Operational tip", text: "source (.) config files instead of hand parsing." },
    },
  },
  {
    id: "block-5-4-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson54Exercises: Exercise[] = [
  {
    id: "ex-5-4-1",
    lessonId: "lesson-5-4",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Condicionales: if, elif, else»?",
      en: "Which tool or idea is central to «Conditionals: if, elif, else»?",
    },
    options: { es: ["Solo conditionals en teoría", "Práctica de conditionals en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only conditionals in theory", "Hands-on conditionals on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica conditionals en entornos reales.",
      en: "This lesson applies conditionals in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-5-4-2",
    lessonId: "lesson-5-4",
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

export const lesson54Quiz: Quiz = {
  id: "quiz-5-4",
  lessonId: "lesson-5-4",
  questions: [
    {
      id: "quiz-5-4-1",
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
      id: "quiz-5-4-2",
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

export const lesson54: Lesson = {
  id: "lesson-5-4",
  moduleId: "level-5",
  slug: "conditionals",
  title: { es: "Condicionales: if, elif, else", en: "Conditionals: if, elif, else" },
  description: { es: "Toma decisiones en tus scripts", en: "Make decisions in your scripts" },
  order: 4,
  duration: 40,
  contentBlocks: lesson54Content,
  exercises: lesson54Exercises,
  quiz: lesson54Quiz,
};
