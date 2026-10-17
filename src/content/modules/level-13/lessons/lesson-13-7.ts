import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson137Content: ContentBlock[] = [
  {
    id: "block-13-7-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Flujos de Trabajo con Git", text: "Flujos de Trabajo con Git — GitFlow, trunk-based, feature branches\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Git Workflows", text: "Git Workflows — GitFlow, trunk-based, feature branches\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-13-7-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Flujos de Trabajo con Git**\n\nTrunk-based (ramas cortas + main) vs GitFlow (develop/release). **CI/CD**: GitHub Actions/GitLab CI ejecutan `npm test`, `docker build`, deploy en cada push/PR. Protege `main` con reviews y checks verdes. Tags semver (`v1.2.0`) disparan releases.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\n# .github/workflows/ci.yml (ejemplo)\n# on: [push, pull_request]\n# jobs: test -> build -> deploy staging\n```" },
      en: { title: "Key concepts", text: "**Git Workflows**\n\nTrunk-based (short branches + main) vs GitFlow (develop/release). **CI/CD**: GitHub Actions/GitLab CI run `npm test`, `docker build`, deploy on push/PR. Protect `main` with reviews and green checks. Semver tags (`v1.2.0`) trigger releases.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\n# .github/workflows/ci.yml (ejemplo)\n# on: [push, pull_request]\n# jobs: test -> build -> deploy staging\n```" },
    },
  },
  {
    id: "block-13-7-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "# trunk-based: short-lived branches\n# GitFlow: develop + release branches", language: "bash" },
      en: { title: "Practice commands", code: "# trunk-based: short-lived branches\n# GitFlow: develop + release branches", language: "bash" },
    },
  },
  {
    id: "block-13-7-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Conventional Commits ayuda changelogs automáticos." },
      en: { title: "Operational tip", text: "Conventional Commits help automated changelogs." },
    },
  },
  {
    id: "block-13-7-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson137Exercises: Exercise[] = [
  {
    id: "ex-13-7-1",
    lessonId: "lesson-13-7",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Flujos de Trabajo con Git»?",
      en: "Which tool or idea is central to «Git Workflows»?",
    },
    options: { es: ["Solo git workflows en teoría", "Práctica de git workflows en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only git workflows in theory", "Hands-on git workflows on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica git workflows en entornos reales.",
      en: "This lesson applies git workflows in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-13-7-2",
    lessonId: "lesson-13-7",
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

export const lesson137Quiz: Quiz = {
  id: "quiz-13-7",
  lessonId: "lesson-13-7",
  questions: [
    {
      id: "quiz-13-7-1",
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
      id: "quiz-13-7-2",
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

export const lesson137: Lesson = {
  id: "lesson-13-7",
  moduleId: "level-13",
  slug: "git-workflows",
  title: { es: "Flujos de Trabajo con Git", en: "Git Workflows" },
  description: { es: "GitFlow, trunk-based, feature branches", en: "GitFlow, trunk-based, feature branches" },
  order: 7,
  duration: 30,
  contentBlocks: lesson137Content,
  exercises: lesson137Exercises,
  quiz: lesson137Quiz,
};
