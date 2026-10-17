import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson142Content: ContentBlock[] = [
  {
    id: "block-14-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Imágenes de Docker", text: "Imágenes de Docker — pull, build, tag, push, Docker Hub\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Docker Images", text: "Docker Images — pull, build, tag, push, Docker Hub\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-14-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Imágenes de Docker**\n\npull/tag/push; layers cache; docker build context; multi-stage reduce tamaño final.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ndocker pull nginx:alpine\ndocker images\ndocker tag myapp:1.0 registry/myapp:1.0\n```" },
      en: { title: "Key concepts", text: "**Docker Images**\n\npull/tag/push; layer cache; docker build context; multi-stage shrinks final image.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ndocker pull nginx:alpine\ndocker images\ndocker tag myapp:1.0 registry/myapp:1.0\n```" },
    },
  },
  {
    id: "block-14-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "docker pull nginx:alpine\ndocker images\ndocker tag myapp:1.0 registry/myapp:1.0", language: "bash" },
      en: { title: "Practice commands", code: "docker pull nginx:alpine\ndocker images\ndocker tag myapp:1.0 registry/myapp:1.0", language: "bash" },
    },
  },
  {
    id: "block-14-2-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Escanea imágenes con trivy/grype en CI." },
      en: { title: "Operational tip", text: "Scan images with trivy/grype in CI." },
    },
  },
  {
    id: "block-14-2-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson142Exercises: Exercise[] = [
  {
    id: "ex-14-2-1",
    lessonId: "lesson-14-2",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Imágenes de Docker»?",
      en: "Which tool or idea is central to «Docker Images»?",
    },
    options: { es: ["Solo docker images en teoría", "Práctica de docker images en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only docker images in theory", "Hands-on docker images on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica docker images en entornos reales.",
      en: "This lesson applies docker images in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-14-2-2",
    lessonId: "lesson-14-2",
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

export const lesson142Quiz: Quiz = {
  id: "quiz-14-2",
  lessonId: "lesson-14-2",
  questions: [
    {
      id: "quiz-14-2-1",
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
      id: "quiz-14-2-2",
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

export const lesson142: Lesson = {
  id: "lesson-14-2",
  moduleId: "level-14",
  slug: "docker-images",
  title: { es: "Imágenes de Docker", en: "Docker Images" },
  description: { es: "pull, build, tag, push, Docker Hub", en: "pull, build, tag, push, Docker Hub" },
  order: 2,
  duration: 40,
  contentBlocks: lesson142Content,
  exercises: lesson142Exercises,
  quiz: lesson142Quiz,
};
