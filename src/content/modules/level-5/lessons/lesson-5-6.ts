import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson56Content: ContentBlock[] = [
  {
    id: "block-5-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Bucles: for, while, until", text: "Bucles: for, while, until — Repite acciones automáticamente\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Loops: for, while, until", text: "Loops: for, while, until — Repeat actions automatically\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-5-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Bucles: for, while, until**\n\nfor/while/until; combina nullglob con globs para evitar literales *.log sin matches.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nfor f in /var/log/*.log; do gzip -9 \"$f\"; done\nwhile read -r line; do echo \"$line\"; done\n```" },
      en: { title: "Key concepts", text: "**Loops: for, while, until**\n\nfor/while/until; combine nullglob with globs to avoid literal *.log with no matches.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nfor f in /var/log/*.log; do gzip -9 \"$f\"; done\nwhile read -r line; do echo \"$line\"; done\n```" },
    },
  },
  {
    id: "block-5-6-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "for f in /var/log/*.log; do gzip -9 \"$f\"; done\nwhile read -r line; do echo \"$line\"; done", language: "bash" },
      en: { title: "Practice commands", code: "for f in /var/log/*.log; do gzip -9 \"$f\"; done\nwhile read -r line; do echo \"$line\"; done", language: "bash" },
    },
  },
  {
    id: "block-5-6-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "while read -r < file evita subshell del pipe si necesitas contadores fuera." },
      en: { title: "Operational tip", text: "while read -r < file avoids pipe subshell if you need outer counters." },
    },
  },
  {
    id: "block-5-6-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson56Exercises: Exercise[] = [
  {
    id: "ex-5-6-1",
    lessonId: "lesson-5-6",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Bucles: for, while, until»?",
      en: "Which tool or idea is central to «Loops: for, while, until»?",
    },
    options: { es: ["Solo loops en teoría", "Práctica de loops en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only loops in theory", "Hands-on loops on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica loops en entornos reales.",
      en: "This lesson applies loops in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-5-6-2",
    lessonId: "lesson-5-6",
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

export const lesson56Quiz: Quiz = {
  id: "quiz-5-6",
  lessonId: "lesson-5-6",
  questions: [
    {
      id: "quiz-5-6-1",
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
      id: "quiz-5-6-2",
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

export const lesson56: Lesson = {
  id: "lesson-5-6",
  moduleId: "level-5",
  slug: "loops",
  title: { es: "Bucles: for, while, until", en: "Loops: for, while, until" },
  description: { es: "Repite acciones automáticamente", en: "Repeat actions automatically" },
  order: 6,
  duration: 40,
  contentBlocks: lesson56Content,
  exercises: lesson56Exercises,
  quiz: lesson56Quiz,
};
