import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson106Content: ContentBlock[] = [
  {
    id: "block-10-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Targets y Boot", text: "Targets y Boot — Niveles de ejecución, targets y proceso de arranque\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Targets and Boot", text: "Targets and Boot — Runlevels, targets and boot process\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-10-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Targets y Boot**\n\nTargets multi-user.graphical; isolate cambia target; get-default/set-default persisten.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nsystemctl get-default\nsystemctl isolate multi-user.target\n```" },
      en: { title: "Key concepts", text: "**Targets and Boot**\n\nTargets multi-user.graphical; isolate switches target; get-default/set-default persist.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nsystemctl get-default\nsystemctl isolate multi-user.target\n```" },
    },
  },
  {
    id: "block-10-6-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "systemctl get-default\nsystemctl isolate multi-user.target", language: "bash" },
      en: { title: "Practice commands", code: "systemctl get-default\nsystemctl isolate multi-user.target", language: "bash" },
    },
  },
  {
    id: "block-10-6-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "rescue/emergency targets para mantenimiento sin red completa." },
      en: { title: "Operational tip", text: "rescue/emergency targets for maintenance with limited networking." },
    },
  },
  {
    id: "block-10-6-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson106Exercises: Exercise[] = [
  {
    id: "ex-10-6-1",
    lessonId: "lesson-10-6",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Targets y Boot»?",
      en: "Which tool or idea is central to «Targets and Boot»?",
    },
    options: { es: ["Solo boot targets en teoría", "Práctica de boot targets en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only boot targets in theory", "Hands-on boot targets on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica boot targets en entornos reales.",
      en: "This lesson applies boot targets in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-10-6-2",
    lessonId: "lesson-10-6",
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

export const lesson106Quiz: Quiz = {
  id: "quiz-10-6",
  lessonId: "lesson-10-6",
  questions: [
    {
      id: "quiz-10-6-1",
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
      id: "quiz-10-6-2",
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

export const lesson106: Lesson = {
  id: "lesson-10-6",
  moduleId: "level-10",
  slug: "boot-targets",
  title: { es: "Targets y Boot", en: "Targets and Boot" },
  description: { es: "Niveles de ejecución, targets y proceso de arranque", en: "Runlevels, targets and boot process" },
  order: 6,
  duration: 30,
  contentBlocks: lesson106Content,
  exercises: lesson106Exercises,
  quiz: lesson106Quiz,
};
