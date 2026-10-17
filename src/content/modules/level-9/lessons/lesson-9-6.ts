import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson96Content: ContentBlock[] = [
  {
    id: "block-9-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Transferencia de Datos: curl, wget", text: "Transferencia de Datos: curl, wget — Descarga archivos y trabaja con APIs\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Data Transfer: curl, wget", text: "Data Transfer: curl, wget — Download files and work with APIs\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-9-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Transferencia de Datos: curl, wget**\n\ncurl -fsSL sigue redirects fail silent; headers -I; wget recursive mirror; APIs JSON con jq.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ncurl -fsSL https://example.com/health\nwget -qO- https://example.com\n```" },
      en: { title: "Key concepts", text: "**Data Transfer: curl, wget**\n\ncurl -fsSL follows redirects fail silent; headers -I; wget recursive mirror; JSON APIs with jq.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ncurl -fsSL https://example.com/health\nwget -qO- https://example.com\n```" },
    },
  },
  {
    id: "block-9-6-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "curl -fsSL https://example.com/health\nwget -qO- https://example.com", language: "bash" },
      en: { title: "Practice commands", code: "curl -fsSL https://example.com/health\nwget -qO- https://example.com", language: "bash" },
    },
  },
  {
    id: "block-9-6-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Nunca curl | bash sin revisar script; usa checksums firmados." },
      en: { title: "Operational tip", text: "Never curl | bash without review; use signed checksums." },
    },
  },
  {
    id: "block-9-6-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson96Exercises: Exercise[] = [
  {
    id: "ex-9-6-1",
    lessonId: "lesson-9-6",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Transferencia de Datos: curl, wget»?",
      en: "Which tool or idea is central to «Data Transfer: curl, wget»?",
    },
    options: { es: ["Solo curl wget en teoría", "Práctica de curl wget en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only curl wget in theory", "Hands-on curl wget on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica curl wget en entornos reales.",
      en: "This lesson applies curl wget in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-9-6-2",
    lessonId: "lesson-9-6",
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

export const lesson96Quiz: Quiz = {
  id: "quiz-9-6",
  lessonId: "lesson-9-6",
  questions: [
    {
      id: "quiz-9-6-1",
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
      id: "quiz-9-6-2",
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

export const lesson96: Lesson = {
  id: "lesson-9-6",
  moduleId: "level-9",
  slug: "curl-wget",
  title: { es: "Transferencia de Datos: curl, wget", en: "Data Transfer: curl, wget" },
  description: { es: "Descarga archivos y trabaja con APIs", en: "Download files and work with APIs" },
  order: 6,
  duration: 35,
  contentBlocks: lesson96Content,
  exercises: lesson96Exercises,
  quiz: lesson96Quiz,
};
