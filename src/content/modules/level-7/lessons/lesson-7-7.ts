import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson77Content: ContentBlock[] = [
  {
    id: "block-7-7-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Pipes y Redirección Avanzada", text: "Pipes y Redirección Avanzada — Combina herramientas con |, >, >>, 2>&1\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Pipes and Advanced Redirection", text: "Pipes and Advanced Redirection — Combine tools with |, >, >>, 2>&1\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-7-7-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Pipes y Redirección Avanzada**\n\nstdout 1>, stderr 2>, 2>&1 merge; pipes conectan stdout→stdin; here-docs <<EOF.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ncmd 2>&1 | tee full.log\ncmd >out 2>err\n```" },
      en: { title: "Key concepts", text: "**Pipes and Advanced Redirection**\n\nstdout 1>, stderr 2>, 2>&1 merge; pipes connect stdout→stdin; here-docs <<EOF.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ncmd 2>&1 | tee full.log\ncmd >out 2>err\n```" },
    },
  },
  {
    id: "block-7-7-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "cmd 2>&1 | tee full.log\ncmd >out 2>err", language: "bash" },
      en: { title: "Practice commands", code: "cmd 2>&1 | tee full.log\ncmd >out 2>err", language: "bash" },
    },
  },
  {
    id: "block-7-7-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Orden importa: cmd 2>&1 | tee log captura ambos streams." },
      en: { title: "Operational tip", text: "Order matters: cmd 2>&1 | tee log captures both streams." },
    },
  },
  {
    id: "block-7-7-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson77Exercises: Exercise[] = [
  {
    id: "ex-7-7-1",
    lessonId: "lesson-7-7",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Pipes y Redirección Avanzada»?",
      en: "Which tool or idea is central to «Pipes and Advanced Redirection»?",
    },
    options: { es: ["Solo pipes redirection en teoría", "Práctica de pipes redirection en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only pipes redirection in theory", "Hands-on pipes redirection on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica pipes redirection en entornos reales.",
      en: "This lesson applies pipes redirection in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-7-7-2",
    lessonId: "lesson-7-7",
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

export const lesson77Quiz: Quiz = {
  id: "quiz-7-7",
  lessonId: "lesson-7-7",
  questions: [
    {
      id: "quiz-7-7-1",
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
      id: "quiz-7-7-2",
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

export const lesson77: Lesson = {
  id: "lesson-7-7",
  moduleId: "level-7",
  slug: "pipes-redirection",
  title: { es: "Pipes y Redirección Avanzada", en: "Pipes and Advanced Redirection" },
  description: { es: "Combina herramientas con |, >, >>, 2>&1", en: "Combine tools with |, >, >>, 2>&1" },
  order: 7,
  duration: 35,
  contentBlocks: lesson77Content,
  exercises: lesson77Exercises,
  quiz: lesson77Quiz,
};
