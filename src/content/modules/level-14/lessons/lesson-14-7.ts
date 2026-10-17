import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson147Content: ContentBlock[] = [
  {
    id: "block-14-7-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Docker Compose", text: "Docker Compose — Orquesta múltiples contenedores con YAML\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Docker Compose", text: "Docker Compose — Orchestrate multiple containers with YAML\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-14-7-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Docker Compose**\n\ncompose YAML services networks volumes; up -d; depends_on orden; healthcheck readiness.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ndocker compose up -d\ndocker compose ps\n```" },
      en: { title: "Key concepts", text: "**Docker Compose**\n\ncompose YAML services networks volumes; up -d; depends_on order; healthcheck readiness.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ndocker compose up -d\ndocker compose ps\n```" },
    },
  },
  {
    id: "block-14-7-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "docker compose up -d\ndocker compose ps", language: "bash" },
      en: { title: "Practice commands", code: "docker compose up -d\ndocker compose ps", language: "bash" },
    },
  },
  {
    id: "block-14-7-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "compose v2 plugin integrado: docker compose no docker-compose bin viejo." },
      en: { title: "Operational tip", text: "compose v2 plugin integrated: docker compose not legacy docker-compose binary." },
    },
  },
  {
    id: "block-14-7-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson147Exercises: Exercise[] = [
  {
    id: "ex-14-7-1",
    lessonId: "lesson-14-7",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Docker Compose»?",
      en: "Which tool or idea is central to «Docker Compose»?",
    },
    options: { es: ["Solo docker compose en teoría", "Práctica de docker compose en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only docker compose in theory", "Hands-on docker compose on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica docker compose en entornos reales.",
      en: "This lesson applies docker compose in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-14-7-2",
    lessonId: "lesson-14-7",
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

export const lesson147Quiz: Quiz = {
  id: "quiz-14-7",
  lessonId: "lesson-14-7",
  questions: [
    {
      id: "quiz-14-7-1",
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
      id: "quiz-14-7-2",
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

export const lesson147: Lesson = {
  id: "lesson-14-7",
  moduleId: "level-14",
  slug: "docker-compose",
  title: { es: "Docker Compose", en: "Docker Compose" },
  description: { es: "Orquesta múltiples contenedores con YAML", en: "Orchestrate multiple containers with YAML" },
  order: 7,
  duration: 45,
  contentBlocks: lesson147Content,
  exercises: lesson147Exercises,
  quiz: lesson147Quiz,
};
