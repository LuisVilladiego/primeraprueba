import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson101Content: ContentBlock[] = [
  {
    id: "block-10-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Introducción a systemd", text: "Introducción a systemd — Qué es systemd, units, y arquitectura básica\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Introduction to systemd", text: "Introduction to systemd — What is systemd, units, and basic architecture\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-10-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Introducción a systemd**\n\nsystemd unit types: service, socket, timer, target; PID1 reemplaza SysV init scripts.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nsystemctl list-units --type=service | head\nsystemctl get-default\n```" },
      en: { title: "Key concepts", text: "**Introduction to systemd**\n\nsystemd unit types: service, socket, timer, target; PID1 replaces SysV init.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nsystemctl list-units --type=service | head\nsystemctl get-default\n```" },
    },
  },
  {
    id: "block-10-1-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "systemctl list-units --type=service | head\nsystemctl get-default", language: "bash" },
      en: { title: "Practice commands", code: "systemctl list-units --type=service | head\nsystemctl get-default", language: "bash" },
    },
  },
  {
    id: "block-10-1-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "systemctl list-dependencies muestra árbol de arranque." },
      en: { title: "Operational tip", text: "systemctl list-dependencies shows boot tree." },
    },
  },
  {
    id: "block-10-1-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson101Exercises: Exercise[] = [
  {
    id: "ex-10-1-1",
    lessonId: "lesson-10-1",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Introducción a systemd»?",
      en: "Which tool or idea is central to «Introduction to systemd»?",
    },
    options: { es: ["Solo systemd intro en teoría", "Práctica de systemd intro en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only systemd intro in theory", "Hands-on systemd intro on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica systemd intro en entornos reales.",
      en: "This lesson applies systemd intro in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-10-1-2",
    lessonId: "lesson-10-1",
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

export const lesson101Quiz: Quiz = {
  id: "quiz-10-1",
  lessonId: "lesson-10-1",
  questions: [
    {
      id: "quiz-10-1-1",
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
      id: "quiz-10-1-2",
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

export const lesson101: Lesson = {
  id: "lesson-10-1",
  moduleId: "level-10",
  slug: "systemd-intro",
  title: { es: "Introducción a systemd", en: "Introduction to systemd" },
  description: { es: "Qué es systemd, units, y arquitectura básica", en: "What is systemd, units, and basic architecture" },
  order: 1,
  duration: 35,
  contentBlocks: lesson101Content,
  exercises: lesson101Exercises,
  quiz: lesson101Quiz,
};
