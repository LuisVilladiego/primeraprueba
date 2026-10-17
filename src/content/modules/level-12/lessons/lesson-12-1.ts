import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson121Content: ContentBlock[] = [
  {
    id: "block-12-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Variables Avanzadas", text: "Variables Avanzadas — Arrays, manipulación de strings, expansión de parámetros\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Advanced Variables", text: "Advanced Variables — Arrays, string manipulation, parameter expansion\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-12-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Variables Avanzadas**\n\nArrays arr=(a b); ${arr[@]} expansión; ${#arr[@]} length; asociativos declare -A en bash 4+.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\narr=(a b c)\necho \"${arr[@]}\"\necho \"${#arr[@]}\"\n```" },
      en: { title: "Key concepts", text: "**Advanced Variables**\n\nArrays arr=(a b); ${arr[@]} expansion; ${#arr[@]} length; associative declare -A bash 4+.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\narr=(a b c)\necho \"${arr[@]}\"\necho \"${#arr[@]}\"\n```" },
    },
  },
  {
    id: "block-12-1-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "arr=(a b c)\necho \"${arr[@]}\"\necho \"${#arr[@]}\"", language: "bash" },
      en: { title: "Practice commands", code: "arr=(a b c)\necho \"${arr[@]}\"\necho \"${#arr[@]}\"", language: "bash" },
    },
  },
  {
    id: "block-12-1-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "IFS controla split en read y expansions—cítalo temporalmente." },
      en: { title: "Operational tip", text: "IFS controls split in read and expansions—quote temporarily." },
    },
  },
  {
    id: "block-12-1-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson121Exercises: Exercise[] = [
  {
    id: "ex-12-1-1",
    lessonId: "lesson-12-1",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Variables Avanzadas»?",
      en: "Which tool or idea is central to «Advanced Variables»?",
    },
    options: { es: ["Solo advanced variables en teoría", "Práctica de advanced variables en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only advanced variables in theory", "Hands-on advanced variables on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica advanced variables en entornos reales.",
      en: "This lesson applies advanced variables in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-12-1-2",
    lessonId: "lesson-12-1",
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

export const lesson121Quiz: Quiz = {
  id: "quiz-12-1",
  lessonId: "lesson-12-1",
  questions: [
    {
      id: "quiz-12-1-1",
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
      id: "quiz-12-1-2",
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

export const lesson121: Lesson = {
  id: "lesson-12-1",
  moduleId: "level-12",
  slug: "advanced-variables",
  title: { es: "Variables Avanzadas", en: "Advanced Variables" },
  description: { es: "Arrays, manipulación de strings, expansión de parámetros", en: "Arrays, string manipulation, parameter expansion" },
  order: 1,
  duration: 45,
  contentBlocks: lesson121Content,
  exercises: lesson121Exercises,
  quiz: lesson121Quiz,
};
