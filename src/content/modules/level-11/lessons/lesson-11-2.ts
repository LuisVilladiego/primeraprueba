import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson112Content: ContentBlock[] = [
  {
    id: "block-11-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Autenticación con Claves SSH", text: "Autenticación con Claves SSH — Genera y usa pares de claves públicas/privadas\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "SSH Key Authentication", text: "SSH Key Authentication — Generate and use public/private key pairs\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-11-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Autenticación con Claves SSH**\n\ned25519 preferido; ssh-keygen -t ed25519; ssh-copy-id instala pubkey; permisos ~/.ssh 700, keys 600.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nssh-keygen -t ed25519 -C \"dev@laptop\"\nssh-copy-id user@host\n```" },
      en: { title: "Key concepts", text: "**SSH Key Authentication**\n\nPrefer ed25519; ssh-keygen -t ed25519; ssh-copy-id installs pubkey; ~/.ssh 700, keys 600.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nssh-keygen -t ed25519 -C \"dev@laptop\"\nssh-copy-id user@host\n```" },
    },
  },
  {
    id: "block-11-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "ssh-keygen -t ed25519 -C \"dev@laptop\"\nssh-copy-id user@host", language: "bash" },
      en: { title: "Practice commands", code: "ssh-keygen -t ed25519 -C \"dev@laptop\"\nssh-copy-id user@host", language: "bash" },
    },
  },
  {
    id: "block-11-2-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Passphrase + ssh-agent equilibra seguridad y UX." },
      en: { title: "Operational tip", text: "Passphrase + ssh-agent balances security and UX." },
    },
  },
  {
    id: "block-11-2-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson112Exercises: Exercise[] = [
  {
    id: "ex-11-2-1",
    lessonId: "lesson-11-2",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Autenticación con Claves SSH»?",
      en: "Which tool or idea is central to «SSH Key Authentication»?",
    },
    options: { es: ["Solo ssh keys en teoría", "Práctica de ssh keys en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only ssh keys in theory", "Hands-on ssh keys on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica ssh keys en entornos reales.",
      en: "This lesson applies ssh keys in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-11-2-2",
    lessonId: "lesson-11-2",
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

export const lesson112Quiz: Quiz = {
  id: "quiz-11-2",
  lessonId: "lesson-11-2",
  questions: [
    {
      id: "quiz-11-2-1",
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
      id: "quiz-11-2-2",
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

export const lesson112: Lesson = {
  id: "lesson-11-2",
  moduleId: "level-11",
  slug: "ssh-keys",
  title: { es: "Autenticación con Claves SSH", en: "SSH Key Authentication" },
  description: { es: "Genera y usa pares de claves públicas/privadas", en: "Generate and use public/private key pairs" },
  order: 2,
  duration: 40,
  contentBlocks: lesson112Content,
  exercises: lesson112Exercises,
  quiz: lesson112Quiz,
};
