import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson143Content: ContentBlock[] = [
  {
    id: "block-14-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Contenedores de Docker", text: "Contenedores de Docker — run, exec, logs, stop, rm\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Docker Containers", text: "Docker Containers — run, exec, logs, stop, rm\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-14-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Contenedores de Docker**\n\nrun -d --name -p publish; exec interactive; logs -f; restart policies unless-stopped.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ndocker run -d --name web -p 8080:80 nginx\ndocker logs -f web\n```" },
      en: { title: "Key concepts", text: "**Docker Containers**\n\nrun -d --name -p publish; exec interactive; logs -f; restart unless-stopped policies.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ndocker run -d --name web -p 8080:80 nginx\ndocker logs -f web\n```" },
    },
  },
  {
    id: "block-14-3-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "docker run -d --name web -p 8080:80 nginx\ndocker logs -f web", language: "bash" },
      en: { title: "Practice commands", code: "docker run -d --name web -p 8080:80 nginx\ndocker logs -f web", language: "bash" },
    },
  },
  {
    id: "block-14-3-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Limita --memory y --cpus en prod." },
      en: { title: "Operational tip", text: "Set --memory and --cpus limits in prod." },
    },
  },
  {
    id: "block-14-3-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson143Exercises: Exercise[] = [
  {
    id: "ex-14-3-1",
    lessonId: "lesson-14-3",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Contenedores de Docker»?",
      en: "Which tool or idea is central to «Docker Containers»?",
    },
    options: { es: ["Solo docker containers en teoría", "Práctica de docker containers en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only docker containers in theory", "Hands-on docker containers on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica docker containers en entornos reales.",
      en: "This lesson applies docker containers in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-14-3-2",
    lessonId: "lesson-14-3",
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

export const lesson143Quiz: Quiz = {
  id: "quiz-14-3",
  lessonId: "lesson-14-3",
  questions: [
    {
      id: "quiz-14-3-1",
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
      id: "quiz-14-3-2",
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

export const lesson143: Lesson = {
  id: "lesson-14-3",
  moduleId: "level-14",
  slug: "docker-containers",
  title: { es: "Contenedores de Docker", en: "Docker Containers" },
  description: { es: "run, exec, logs, stop, rm", en: "run, exec, logs, stop, rm" },
  order: 3,
  duration: 45,
  contentBlocks: lesson143Content,
  exercises: lesson143Exercises,
  quiz: lesson143Quiz,
};
