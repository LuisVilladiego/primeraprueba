import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson111Content: ContentBlock[] = [
  {
    id: "block-11-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Fundamentos de SSH", text: "Fundamentos de SSH — Conexión segura a servidores remotos\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "SSH Fundamentals", text: "SSH Fundamentals — Secure connection to remote servers\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-11-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Fundamentos de SSH**\n\nCliente ssh user@host -p port; verbose -vvv debug handshake; KnownHosts MITM protection.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nssh user@host\nssh -v user@host  # verbose debug\n```" },
      en: { title: "Key concepts", text: "**SSH Fundamentals**\n\nClient ssh user@host -p port; verbose -vvv debug handshake; KnownHosts MITM protection.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nssh user@host\nssh -v user@host  # verbose debug\n```" },
    },
  },
  {
    id: "block-11-1-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "ssh user@host\nssh -v user@host  # verbose debug", language: "bash" },
      en: { title: "Practice commands", code: "ssh user@host\nssh -v user@host  # verbose debug", language: "bash" },
    },
  },
  {
    id: "block-11-1-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "BatchMode=yes falla rápido en CI sin TTY." },
      en: { title: "Operational tip", text: "BatchMode=yes fails fast in CI without TTY." },
    },
  },
  {
    id: "block-11-1-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson111Exercises: Exercise[] = [
  {
    id: "ex-11-1-1",
    lessonId: "lesson-11-1",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Fundamentos de SSH»?",
      en: "Which tool or idea is central to «SSH Fundamentals»?",
    },
    options: { es: ["Solo ssh basics en teoría", "Práctica de ssh basics en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only ssh basics in theory", "Hands-on ssh basics on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica ssh basics en entornos reales.",
      en: "This lesson applies ssh basics in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-11-1-2",
    lessonId: "lesson-11-1",
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

export const lesson111Quiz: Quiz = {
  id: "quiz-11-1",
  lessonId: "lesson-11-1",
  questions: [
    {
      id: "quiz-11-1-1",
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
      id: "quiz-11-1-2",
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

export const lesson111: Lesson = {
  id: "lesson-11-1",
  moduleId: "level-11",
  slug: "ssh-basics",
  title: { es: "Fundamentos de SSH", en: "SSH Fundamentals" },
  description: { es: "Conexión segura a servidores remotos", en: "Secure connection to remote servers" },
  order: 1,
  duration: 35,
  contentBlocks: lesson111Content,
  exercises: lesson111Exercises,
  quiz: lesson111Quiz,
};
