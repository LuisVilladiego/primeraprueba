import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson136Content: ContentBlock[] = [
  {
    id: "block-13-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Git Avanzado", text: "Git Avanzado — stash, cherry-pick, reset, reflog\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Advanced Git", text: "Advanced Git — stash, cherry-pick, reset, reflog\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-13-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Git Avanzado**\n\nstash; cherry-pick; reflog recupera commits; bisect encuentra regresiones.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ngit stash push -m wip\ngit cherry-pick abc123\ngit reflog\n```" },
      en: { title: "Key concepts", text: "**Advanced Git**\n\nstash; cherry-pick; reflog recovers commits; bisect finds regressions.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ngit stash push -m wip\ngit cherry-pick abc123\ngit reflog\n```" },
    },
  },
  {
    id: "block-13-6-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "git stash push -m wip\ngit cherry-pick abc123\ngit reflog", language: "bash" },
      en: { title: "Practice commands", code: "git stash push -m wip\ngit cherry-pick abc123\ngit reflog", language: "bash" },
    },
  },
  {
    id: "block-13-6-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "reflog expira—no es backup permanente." },
      en: { title: "Operational tip", text: "reflog expires—not permanent backup." },
    },
  },
  {
    id: "block-13-6-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson136Exercises: Exercise[] = [
  {
    id: "ex-13-6-1",
    lessonId: "lesson-13-6",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Git Avanzado»?",
      en: "Which tool or idea is central to «Advanced Git»?",
    },
    options: { es: ["Solo git advanced en teoría", "Práctica de git advanced en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only git advanced in theory", "Hands-on git advanced on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica git advanced en entornos reales.",
      en: "This lesson applies git advanced in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-13-6-2",
    lessonId: "lesson-13-6",
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

export const lesson136Quiz: Quiz = {
  id: "quiz-13-6",
  lessonId: "lesson-13-6",
  questions: [
    {
      id: "quiz-13-6-1",
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
      id: "quiz-13-6-2",
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

export const lesson136: Lesson = {
  id: "lesson-13-6",
  moduleId: "level-13",
  slug: "git-advanced",
  title: { es: "Git Avanzado", en: "Advanced Git" },
  description: { es: "stash, cherry-pick, reset, reflog", en: "stash, cherry-pick, reset, reflog" },
  order: 6,
  duration: 40,
  contentBlocks: lesson136Content,
  exercises: lesson136Exercises,
  quiz: lesson136Quiz,
};
