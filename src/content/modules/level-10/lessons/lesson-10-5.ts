import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson105Content: ContentBlock[] = [
  {
    id: "block-10-5-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Tareas Programadas: timers y cron", text: "Tareas Programadas: timers y cron — Programa tareas automáticas con systemd timers y crontab\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Scheduled Tasks: timers and cron", text: "Scheduled Tasks: timers and cron — Schedule automatic tasks with systemd timers and crontab\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-10-5-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Tareas Programadas: timers y cron**\n\nsystemd timers OnCalendar= reemplazan cron con dependencias; crontab -e usuario; /etc/cron.d system.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ncrontab -e\nsystemctl list-timers\n```" },
      en: { title: "Key concepts", text: "**Scheduled Tasks: timers and cron**\n\nsystemd timers OnCalendar= replace cron with deps; crontab -e user; /etc/cron.d system.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ncrontab -e\nsystemctl list-timers\n```" },
    },
  },
  {
    id: "block-10-5-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "crontab -e\nsystemctl list-timers", language: "bash" },
      en: { title: "Practice commands", code: "crontab -e\nsystemctl list-timers", language: "bash" },
    },
  },
  {
    id: "block-10-5-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Prefiere timers si necesitas RandomizedDelaySec y logs en journal." },
      en: { title: "Operational tip", text: "Prefer timers if you need RandomizedDelaySec and journal logs." },
    },
  },
  {
    id: "block-10-5-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson105Exercises: Exercise[] = [
  {
    id: "ex-10-5-1",
    lessonId: "lesson-10-5",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Tareas Programadas: timers y cron»?",
      en: "Which tool or idea is central to «Scheduled Tasks: timers and cron»?",
    },
    options: { es: ["Solo timers cron en teoría", "Práctica de timers cron en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only timers cron in theory", "Hands-on timers cron on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica timers cron en entornos reales.",
      en: "This lesson applies timers cron in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-10-5-2",
    lessonId: "lesson-10-5",
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

export const lesson105Quiz: Quiz = {
  id: "quiz-10-5",
  lessonId: "lesson-10-5",
  questions: [
    {
      id: "quiz-10-5-1",
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
      id: "quiz-10-5-2",
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

export const lesson105: Lesson = {
  id: "lesson-10-5",
  moduleId: "level-10",
  slug: "timers-cron",
  title: { es: "Tareas Programadas: timers y cron", en: "Scheduled Tasks: timers and cron" },
  description: { es: "Programa tareas automáticas con systemd timers y crontab", en: "Schedule automatic tasks with systemd timers and crontab" },
  order: 5,
  duration: 40,
  contentBlocks: lesson105Content,
  exercises: lesson105Exercises,
  quiz: lesson105Quiz,
};
