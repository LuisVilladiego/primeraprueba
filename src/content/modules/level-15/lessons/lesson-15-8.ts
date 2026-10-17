import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson158Content: ContentBlock[] = [
  {
    id: "block-15-8-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Introducción a Helm", text: "Introducción a Helm — El gestor de paquetes de Kubernetes\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Introduction to Helm", text: "Introduction to Helm — The Kubernetes package manager\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-15-8-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Introducción a Helm**\n\nCharts = plantillas K8s; `values.yaml` parametriza; `helm upgrade --install` es idempotente. **IaC**: complementa Terraform (red/nodos) + Helm (apps). PostgreSQL en cluster: chart bitnami/postgresql + PVC.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install mydb bitnami/postgresql\n```" },
      en: { title: "Key concepts", text: "**Introduction to Helm**\n\nCharts = K8s templates; `values.yaml` parameterizes; `helm upgrade --install` is idempotent. **IaC**: complements Terraform (network/nodes) + Helm (apps). PostgreSQL in cluster: bitnami/postgresql chart + PVC.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install mydb bitnami/postgresql\n```" },
    },
  },
  {
    id: "block-15-8-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install mydb bitnami/postgresql", language: "bash" },
      en: { title: "Practice commands", code: "helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install mydb bitnami/postgresql", language: "bash" },
    },
  },
  {
    id: "block-15-8-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "helm template render offline antes de apply." },
      en: { title: "Operational tip", text: "helm template offline render before apply." },
    },
  },
  {
    id: "block-15-8-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson158Exercises: Exercise[] = [
  {
    id: "ex-15-8-1",
    lessonId: "lesson-15-8",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Introducción a Helm»?",
      en: "Which tool or idea is central to «Introduction to Helm»?",
    },
    options: { es: ["Solo helm basics en teoría", "Práctica de helm basics en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only helm basics in theory", "Hands-on helm basics on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica helm basics en entornos reales.",
      en: "This lesson applies helm basics in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-15-8-2",
    lessonId: "lesson-15-8",
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

export const lesson158Quiz: Quiz = {
  id: "quiz-15-8",
  lessonId: "lesson-15-8",
  questions: [
    {
      id: "quiz-15-8-1",
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
      id: "quiz-15-8-2",
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

export const lesson158: Lesson = {
  id: "lesson-15-8",
  moduleId: "level-15",
  slug: "helm-basics",
  title: { es: "Introducción a Helm", en: "Introduction to Helm" },
  description: { es: "El gestor de paquetes de Kubernetes", en: "The Kubernetes package manager" },
  order: 8,
  duration: 35,
  contentBlocks: lesson158Content,
  exercises: lesson158Exercises,
  quiz: lesson158Quiz,
};
