import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson72Content: ContentBlock[] = [
  {
    id: "block-7-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Introducción a Expresiones Regulares", text: "Introducción a Expresiones Regulares — Patrones básicos: ., *, +, ?, [], ^, $\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Introduction to Regular Expressions", text: "Introduction to Regular Expressions — Basic patterns: ., *, +, ?, [], ^, $\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-7-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Introducción a Expresiones Regulares**\n\nERE con grep -E: . * + ? [] () |; ancla ^ $; escapa metacaracteres en BRE/ERE según herramienta.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ngrep -E '^[0-9]{1,3}(\\.[0-9]{1,3}){3}$' ips.txt\ngrep -P '\\d+'  # if supported\n```" },
      en: { title: "Key concepts", text: "**Introduction to Regular Expressions**\n\nERE with grep -E: . * + ? [] () |; anchors ^ $; escape metachars per BRE/ERE tool.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ngrep -E '^[0-9]{1,3}(\\.[0-9]{1,3}){3}$' ips.txt\ngrep -P '\\d+'  # if supported\n```" },
    },
  },
  {
    id: "block-7-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "grep -E '^[0-9]{1,3}(\\.[0-9]{1,3}){3}$' ips.txt\ngrep -P '\\d+'  # if supported", language: "bash" },
      en: { title: "Practice commands", code: "grep -E '^[0-9]{1,3}(\\.[0-9]{1,3}){3}$' ips.txt\ngrep -P '\\d+'  # if supported", language: "bash" },
    },
  },
  {
    id: "block-7-2-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Prueba regex en echo sample | grep -E antes de aplicar sed -i." },
      en: { title: "Operational tip", text: "Test regex on echo sample | grep -E before sed -i." },
    },
  },
  {
    id: "block-7-2-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson72Exercises: Exercise[] = [
  {
    id: "ex-7-2-1",
    lessonId: "lesson-7-2",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Introducción a Expresiones Regulares»?",
      en: "Which tool or idea is central to «Introduction to Regular Expressions»?",
    },
    options: { es: ["Solo regex intro en teoría", "Práctica de regex intro en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only regex intro in theory", "Hands-on regex intro on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica regex intro en entornos reales.",
      en: "This lesson applies regex intro in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-7-2-2",
    lessonId: "lesson-7-2",
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

export const lesson72Quiz: Quiz = {
  id: "quiz-7-2",
  lessonId: "lesson-7-2",
  questions: [
    {
      id: "quiz-7-2-1",
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
      id: "quiz-7-2-2",
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

export const lesson72: Lesson = {
  id: "lesson-7-2",
  moduleId: "level-7",
  slug: "regex-intro",
  title: { es: "Introducción a Expresiones Regulares", en: "Introduction to Regular Expressions" },
  description: { es: "Patrones básicos: ., *, +, ?, [], ^, $", en: "Basic patterns: ., *, +, ?, [], ^, $" },
  order: 2,
  duration: 45,
  contentBlocks: lesson72Content,
  exercises: lesson72Exercises,
  quiz: lesson72Quiz,
};
