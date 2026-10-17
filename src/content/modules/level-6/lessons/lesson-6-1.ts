import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson61Content: ContentBlock[] = [
  {
    id: "block-6-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Editor Nano: Básico y Práctico", text: "Editor Nano: Básico y Práctico — Edita archivos con el editor más amigable\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Nano Editor: Basic and Practical", text: "Nano Editor: Basic and Practical — Edit files with the friendliest editor\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-6-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Editor Nano: Básico y Práctico**\n\nnano es editor TUI simple: Ctrl+O guarda, Ctrl+W busca, Ctrl+K corta línea. Ideal en servidores sin GUI.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nnano /etc/ssh/sshd_config\n# Ctrl+O save, Ctrl+X exit\n```" },
      en: { title: "Key concepts", text: "**Nano Editor: Basic and Practical**\n\nnano is a simple TUI editor: Ctrl+O save, Ctrl+W search, Ctrl+K cut line. Great on headless servers.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nnano /etc/ssh/sshd_config\n# Ctrl+O save, Ctrl+X exit\n```" },
    },
  },
  {
    id: "block-6-1-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "nano /etc/ssh/sshd_config\n# Ctrl+O save, Ctrl+X exit", language: "bash" },
      en: { title: "Practice commands", code: "nano /etc/ssh/sshd_config\n# Ctrl+O save, Ctrl+X exit", language: "bash" },
    },
  },
  {
    id: "block-6-1-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "nano -l muestra números de línea; visudo suele usar nano o vim según update-alternatives." },
      en: { title: "Operational tip", text: "nano -l shows line numbers; visudo may use nano or vim via update-alternatives." },
    },
  },
  {
    id: "block-6-1-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson61Exercises: Exercise[] = [
  {
    id: "ex-6-1-1",
    lessonId: "lesson-6-1",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Editor Nano: Básico y Práctico»?",
      en: "Which tool or idea is central to «Nano Editor: Basic and Practical»?",
    },
    options: { es: ["Solo nano basics en teoría", "Práctica de nano basics en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only nano basics in theory", "Hands-on nano basics on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica nano basics en entornos reales.",
      en: "This lesson applies nano basics in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-6-1-2",
    lessonId: "lesson-6-1",
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

export const lesson61Quiz: Quiz = {
  id: "quiz-6-1",
  lessonId: "lesson-6-1",
  questions: [
    {
      id: "quiz-6-1-1",
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
      id: "quiz-6-1-2",
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

export const lesson61: Lesson = {
  id: "lesson-6-1",
  moduleId: "level-6",
  slug: "nano-basics",
  title: { es: "Editor Nano: Básico y Práctico", en: "Nano Editor: Basic and Practical" },
  description: { es: "Edita archivos con el editor más amigable", en: "Edit files with the friendliest editor" },
  order: 1,
  duration: 25,
  contentBlocks: lesson61Content,
  exercises: lesson61Exercises,
  quiz: lesson61Quiz,
};
