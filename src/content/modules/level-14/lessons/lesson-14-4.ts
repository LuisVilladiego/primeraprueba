import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson144Content: ContentBlock[] = [
  {
    id: "block-14-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Creando Dockerfiles", text: "Creando Dockerfiles — FROM, RUN, COPY, EXPOSE, CMD, ENTRYPOINT\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Creating Dockerfiles", text: "Creating Dockerfiles — FROM, RUN, COPY, EXPOSE, CMD, ENTRYPOINT\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-14-4-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Creando Dockerfiles**\n\nFROM WORKDIR COPY RUN CMD; orden capas para cache; .dockerignore; USER non-root final.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nFROM node:20-alpine\nWORKDIR /app\nCOPY . .\nRUN npm ci && npm run build\nCMD [\"node\",\"dist/main.js\"]\n```" },
      en: { title: "Key concepts", text: "**Creating Dockerfiles**\n\nFROM WORKDIR COPY RUN CMD; layer order for cache; .dockerignore; non-root USER.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nFROM node:20-alpine\nWORKDIR /app\nCOPY . .\nRUN npm ci && npm run build\nCMD [\"node\",\"dist/main.js\"]\n```" },
    },
  },
  {
    id: "block-14-4-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "FROM node:20-alpine\nWORKDIR /app\nCOPY . .\nRUN npm ci && npm run build\nCMD [\"node\",\"dist/main.js\"]", language: "bash" },
      en: { title: "Practice commands", code: "FROM node:20-alpine\nWORKDIR /app\nCOPY . .\nRUN npm ci && npm run build\nCMD [\"node\",\"dist/main.js\"]", language: "bash" },
    },
  },
  {
    id: "block-14-4-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Pin base image digests para reproducibilidad." },
      en: { title: "Operational tip", text: "Pin base image digests for reproducibility." },
    },
  },
  {
    id: "block-14-4-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson144Exercises: Exercise[] = [
  {
    id: "ex-14-4-1",
    lessonId: "lesson-14-4",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Creando Dockerfiles»?",
      en: "Which tool or idea is central to «Creating Dockerfiles»?",
    },
    options: { es: ["Solo dockerfile en teoría", "Práctica de dockerfile en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only dockerfile in theory", "Hands-on dockerfile on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica dockerfile en entornos reales.",
      en: "This lesson applies dockerfile in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-14-4-2",
    lessonId: "lesson-14-4",
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

export const lesson144Quiz: Quiz = {
  id: "quiz-14-4",
  lessonId: "lesson-14-4",
  questions: [
    {
      id: "quiz-14-4-1",
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
      id: "quiz-14-4-2",
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

export const lesson144: Lesson = {
  id: "lesson-14-4",
  moduleId: "level-14",
  slug: "dockerfile",
  title: { es: "Creando Dockerfiles", en: "Creating Dockerfiles" },
  description: { es: "FROM, RUN, COPY, EXPOSE, CMD, ENTRYPOINT", en: "FROM, RUN, COPY, EXPOSE, CMD, ENTRYPOINT" },
  order: 4,
  duration: 50,
  contentBlocks: lesson144Content,
  exercises: lesson144Exercises,
  quiz: lesson144Quiz,
};
