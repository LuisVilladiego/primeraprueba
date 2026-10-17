import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson133Content: ContentBlock[] = [
  {
    id: "block-13-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Ramas en Git", text: "Ramas en Git — branch, checkout, merge, rebase\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Git Branches", text: "Git Branches — branch, checkout, merge, rebase\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-13-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Ramas en Git**\n\nbranch es puntero móvil; switch -c crea; merge fast-forward vs 3-way; rebase reescribe historia.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ngit switch -c feature/login\ngit merge main\n```" },
      en: { title: "Key concepts", text: "**Git Branches**\n\nbranch is mobile pointer; switch -c create; merge FF vs 3-way; rebase rewrites history.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ngit switch -c feature/login\ngit merge main\n```" },
    },
  },
  {
    id: "block-13-3-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "git switch -c feature/login\ngit merge main", language: "bash" },
      en: { title: "Practice commands", code: "git switch -c feature/login\ngit merge main", language: "bash" },
    },
  },
  {
    id: "block-13-3-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Protege main con PR reviews y CI verde." },
      en: { title: "Operational tip", text: "Protect main with PR reviews and green CI." },
    },
  },
  {
    id: "block-13-3-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson133Exercises: Exercise[] = [
  {
    id: "ex-13-3-1",
    lessonId: "lesson-13-3",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Ramas en Git»?",
      en: "Which tool or idea is central to «Git Branches»?",
    },
    options: { es: ["Solo git branches en teoría", "Práctica de git branches en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only git branches in theory", "Hands-on git branches on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica git branches en entornos reales.",
      en: "This lesson applies git branches in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-13-3-2",
    lessonId: "lesson-13-3",
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

export const lesson133Quiz: Quiz = {
  id: "quiz-13-3",
  lessonId: "lesson-13-3",
  questions: [
    {
      id: "quiz-13-3-1",
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
      id: "quiz-13-3-2",
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

export const lesson133: Lesson = {
  id: "lesson-13-3",
  moduleId: "level-13",
  slug: "git-branches",
  title: { es: "Ramas en Git", en: "Git Branches" },
  description: { es: "branch, checkout, merge, rebase", en: "branch, checkout, merge, rebase" },
  order: 3,
  duration: 45,
  contentBlocks: lesson133Content,
  exercises: lesson133Exercises,
  quiz: lesson133Quiz,
};
