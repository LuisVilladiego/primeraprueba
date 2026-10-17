import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson52Content: ContentBlock[] = [
  {
    id: "block-5-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Variables y Variables de Entorno", text: "Variables y Variables de Entorno — Declarar, usar y exportar variables\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Variables and Environment Variables", text: "Variables and Environment Variables — Declare, use and export variables\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-5-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Variables y Variables de Entorno**\n\nVariables locales vs exportadas: los hijos solo ven lo exportado. Parameter expansion (${VAR:-default}) evita scripts frágiles.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nNAME=\"pinguino\"\nexport PATH=\"$HOME/bin:$PATH\"\necho \"${NAME:?missing}\"\n```" },
      en: { title: "Key concepts", text: "**Variables and Environment Variables**\n\nLocal vs exported variables: children only see exports. Parameter expansion (${VAR:-default}) avoids brittle scripts.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nNAME=\"pinguino\"\nexport PATH=\"$HOME/bin:$PATH\"\necho \"${NAME:?missing}\"\n```" },
    },
  },
  {
    id: "block-5-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "NAME=\"pinguino\"\nexport PATH=\"$HOME/bin:$PATH\"\necho \"${NAME:?missing}\"", language: "bash" },
      en: { title: "Practice commands", code: "NAME=\"pinguino\"\nexport PATH=\"$HOME/bin:$PATH\"\necho \"${NAME:?missing}\"", language: "bash" },
    },
  },
  {
    id: "block-5-2-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Cita variables en doble comilla; usa readonly para constantes de despliegue." },
      en: { title: "Operational tip", text: "Double-quote variables; use readonly for deploy constants." },
    },
  },
  {
    id: "block-5-2-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson52Exercises: Exercise[] = [
  {
    id: "ex-5-2-1",
    lessonId: "lesson-5-2",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Variables y Variables de Entorno»?",
      en: "Which tool or idea is central to «Variables and Environment Variables»?",
    },
    options: { es: ["Solo variables environment en teoría", "Práctica de variables environment en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only variables environment in theory", "Hands-on variables environment on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica variables environment en entornos reales.",
      en: "This lesson applies variables environment in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-5-2-2",
    lessonId: "lesson-5-2",
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

export const lesson52Quiz: Quiz = {
  id: "quiz-5-2",
  lessonId: "lesson-5-2",
  questions: [
    {
      id: "quiz-5-2-1",
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
      id: "quiz-5-2-2",
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

export const lesson52: Lesson = {
  id: "lesson-5-2",
  moduleId: "level-5",
  slug: "variables-environment",
  title: { es: "Variables y Variables de Entorno", en: "Variables and Environment Variables" },
  description: { es: "Declarar, usar y exportar variables", en: "Declare, use and export variables" },
  order: 2,
  duration: 35,
  contentBlocks: lesson52Content,
  exercises: lesson52Exercises,
  quiz: lesson52Quiz,
};
