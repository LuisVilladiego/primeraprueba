import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson53Content: ContentBlock[] = [
  {
    id: "block-5-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Entrada de Usuario y Argumentos", text: "Entrada de Usuario y Argumentos — read, $1, $2, $@, $#, y shift\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "User Input and Arguments", text: "User Input and Arguments — read, $1, $2, $@, $#, and shift\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-5-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Entrada de Usuario y Argumentos**\n\n$@ preserva argumentos con espacios; read -r evita mangling de backslashes en input interactivo.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\necho \"Args: $#\"\nfor arg in \"$@\"; do echo \"$arg\"; done\nread -r -p \"Host: \" host\n```" },
      en: { title: "Key concepts", text: "**User Input and Arguments**\n\n$@ preserves spaced arguments; read -r avoids backslash mangling on interactive input.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\necho \"Args: $#\"\nfor arg in \"$@\"; do echo \"$arg\"; done\nread -r -p \"Host: \" host\n```" },
    },
  },
  {
    id: "block-5-3-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "echo \"Args: $#\"\nfor arg in \"$@\"; do echo \"$arg\"; done\nread -r -p \"Host: \" host", language: "bash" },
      en: { title: "Practice commands", code: "echo \"Args: $#\"\nfor arg in \"$@\"; do echo \"$arg\"; done\nread -r -p \"Host: \" host", language: "bash" },
    },
  },
  {
    id: "block-5-3-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Reenvía args con \"$@\" no con $*." },
      en: { title: "Operational tip", text: "Forward args with \"$@\" not $*." },
    },
  },
  {
    id: "block-5-3-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson53Exercises: Exercise[] = [
  {
    id: "ex-5-3-1",
    lessonId: "lesson-5-3",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Entrada de Usuario y Argumentos»?",
      en: "Which tool or idea is central to «User Input and Arguments»?",
    },
    options: { es: ["Solo user input arguments en teoría", "Práctica de user input arguments en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only user input arguments in theory", "Hands-on user input arguments on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica user input arguments en entornos reales.",
      en: "This lesson applies user input arguments in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-5-3-2",
    lessonId: "lesson-5-3",
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

export const lesson53Quiz: Quiz = {
  id: "quiz-5-3",
  lessonId: "lesson-5-3",
  questions: [
    {
      id: "quiz-5-3-1",
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
      id: "quiz-5-3-2",
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

export const lesson53: Lesson = {
  id: "lesson-5-3",
  moduleId: "level-5",
  slug: "user-input-arguments",
  title: { es: "Entrada de Usuario y Argumentos", en: "User Input and Arguments" },
  description: { es: "read, $1, $2, $@, $#, y shift", en: "read, $1, $2, $@, $#, and shift" },
  order: 3,
  duration: 30,
  contentBlocks: lesson53Content,
  exercises: lesson53Exercises,
  quiz: lesson53Quiz,
};
