import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson156Content: ContentBlock[] = [
  {
    id: "block-15-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "ConfigMaps y Secrets", text: "ConfigMaps y Secrets — Gestiona configuración y datos sensibles\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "ConfigMaps and Secrets", text: "ConfigMaps and Secrets — Manage configuration and sensitive data\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-15-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**ConfigMaps y Secrets**\n\nConfigMap config no secreta; Secret base64 not encryption at rest by default; mount env or volume.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nkubectl create configmap app-config --from-literal=LOG_LEVEL=debug\n```" },
      en: { title: "Key concepts", text: "**ConfigMaps and Secrets**\n\nConfigMap non-secret config; Secret base64 not encryption at rest by default; mount env or volume.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nkubectl create configmap app-config --from-literal=LOG_LEVEL=debug\n```" },
    },
  },
  {
    id: "block-15-6-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "kubectl create configmap app-config --from-literal=LOG_LEVEL=debug", language: "bash" },
      en: { title: "Practice commands", code: "kubectl create configmap app-config --from-literal=LOG_LEVEL=debug", language: "bash" },
    },
  },
  {
    id: "block-15-6-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Usa SealedSecrets/External Secrets en prod." },
      en: { title: "Operational tip", text: "Use SealedSecrets/External Secrets in prod." },
    },
  },
  {
    id: "block-15-6-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson156Exercises: Exercise[] = [
  {
    id: "ex-15-6-1",
    lessonId: "lesson-15-6",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «ConfigMaps y Secrets»?",
      en: "Which tool or idea is central to «ConfigMaps and Secrets»?",
    },
    options: { es: ["Solo configmaps secrets en teoría", "Práctica de configmaps secrets en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only configmaps secrets in theory", "Hands-on configmaps secrets on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica configmaps secrets en entornos reales.",
      en: "This lesson applies configmaps secrets in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-15-6-2",
    lessonId: "lesson-15-6",
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

export const lesson156Quiz: Quiz = {
  id: "quiz-15-6",
  lessonId: "lesson-15-6",
  questions: [
    {
      id: "quiz-15-6-1",
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
      id: "quiz-15-6-2",
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

export const lesson156: Lesson = {
  id: "lesson-15-6",
  moduleId: "level-15",
  slug: "configmaps-secrets",
  title: { es: "ConfigMaps y Secrets", en: "ConfigMaps and Secrets" },
  description: { es: "Gestiona configuración y datos sensibles", en: "Manage configuration and sensitive data" },
  order: 6,
  duration: 35,
  contentBlocks: lesson156Content,
  exercises: lesson156Exercises,
  quiz: lesson156Quiz,
};
