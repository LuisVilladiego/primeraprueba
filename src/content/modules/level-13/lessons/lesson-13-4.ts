import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson134Content: ContentBlock[] = [
  {
    id: "block-13-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Repositorios Remotos", text: "Repositorios Remotos — clone, fetch, pull, push, remote\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Remote Repositories", text: "Remote Repositories — clone, fetch, pull, push, remote\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-13-4-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Repositorios Remotos**\n\nremote origin; fetch trae objetos; push publica; upstream -u tracking branch.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ngit remote add origin git@github.com:org/repo.git\ngit push -u origin main\n```" },
      en: { title: "Key concepts", text: "**Remote Repositories**\n\nremote origin; fetch brings objects; push publishes; upstream -u tracking branch.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ngit remote add origin git@github.com:org/repo.git\ngit push -u origin main\n```" },
    },
  },
  {
    id: "block-13-4-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "git remote add origin git@github.com:org/repo.git\ngit push -u origin main", language: "bash" },
      en: { title: "Practice commands", code: "git remote add origin git@github.com:org/repo.git\ngit push -u origin main", language: "bash" },
    },
  },
  {
    id: "block-13-4-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "force push solo en branches personales." },
      en: { title: "Operational tip", text: "force push only on personal branches." },
    },
  },
  {
    id: "block-13-4-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson134Exercises: Exercise[] = [
  {
    id: "ex-13-4-1",
    lessonId: "lesson-13-4",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Repositorios Remotos»?",
      en: "Which tool or idea is central to «Remote Repositories»?",
    },
    options: { es: ["Solo git remote en teoría", "Práctica de git remote en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only git remote in theory", "Hands-on git remote on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica git remote en entornos reales.",
      en: "This lesson applies git remote in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-13-4-2",
    lessonId: "lesson-13-4",
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

export const lesson134Quiz: Quiz = {
  id: "quiz-13-4",
  lessonId: "lesson-13-4",
  questions: [
    {
      id: "quiz-13-4-1",
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
      id: "quiz-13-4-2",
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

export const lesson134: Lesson = {
  id: "lesson-13-4",
  moduleId: "level-13",
  slug: "git-remote",
  title: { es: "Repositorios Remotos", en: "Remote Repositories" },
  description: { es: "clone, fetch, pull, push, remote", en: "clone, fetch, pull, push, remote" },
  order: 4,
  duration: 35,
  contentBlocks: lesson134Content,
  exercises: lesson134Exercises,
  quiz: lesson134Quiz,
};
