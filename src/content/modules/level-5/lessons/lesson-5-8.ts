import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson58Content: ContentBlock[] = [
  {
    id: "block-5-8-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Códigos de Salida y Manejo de Errores", text: "Códigos de Salida y Manejo de Errores — Controla el flujo basado en éxito o error\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Exit Codes and Error Handling", text: "Exit Codes and Error Handling — Control flow based on success or failure\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-5-8-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Códigos de Salida y Manejo de Errores**\n\ntrap EXIT limpia temporales; $? guarda el exit code del último comando foreground.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ncommand || { echo \"failed: $?\" >&2; exit 1; }\ntrap 'rm -f \"$tmp\"' EXIT\n```" },
      en: { title: "Key concepts", text: "**Exit Codes and Error Handling**\n\ntrap EXIT cleans temporaries; $? holds last foreground exit code.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ncommand || { echo \"failed: $?\" >&2; exit 1; }\ntrap 'rm -f \"$tmp\"' EXIT\n```" },
    },
  },
  {
    id: "block-5-8-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "command || { echo \"failed: $?\" >&2; exit 1; }\ntrap 'rm -f \"$tmp\"' EXIT", language: "bash" },
      en: { title: "Practice commands", code: "command || { echo \"failed: $?\" >&2; exit 1; }\ntrap 'rm -f \"$tmp\"' EXIT", language: "bash" },
    },
  },
  {
    id: "block-5-8-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Documenta códigos >100 para operadores y playbooks Ansible." },
      en: { title: "Operational tip", text: "Document codes >100 for operators and Ansible playbooks." },
    },
  },
  {
    id: "block-5-8-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson58Exercises: Exercise[] = [
  {
    id: "ex-5-8-1",
    lessonId: "lesson-5-8",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Códigos de Salida y Manejo de Errores»?",
      en: "Which tool or idea is central to «Exit Codes and Error Handling»?",
    },
    options: { es: ["Solo exit codes en teoría", "Práctica de exit codes en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only exit codes in theory", "Hands-on exit codes on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica exit codes en entornos reales.",
      en: "This lesson applies exit codes in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-5-8-2",
    lessonId: "lesson-5-8",
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

export const lesson58Quiz: Quiz = {
  id: "quiz-5-8",
  lessonId: "lesson-5-8",
  questions: [
    {
      id: "quiz-5-8-1",
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
      id: "quiz-5-8-2",
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

export const lesson58: Lesson = {
  id: "lesson-5-8",
  moduleId: "level-5",
  slug: "exit-codes",
  title: { es: "Códigos de Salida y Manejo de Errores", en: "Exit Codes and Error Handling" },
  description: { es: "Controla el flujo basado en éxito o error", en: "Control flow based on success or failure" },
  order: 8,
  duration: 25,
  contentBlocks: lesson58Content,
  exercises: lesson58Exercises,
  quiz: lesson58Quiz,
};
