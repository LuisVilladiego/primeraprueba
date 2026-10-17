import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson151Content: ContentBlock[] = [
  {
    id: "block-15-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Introducción a Kubernetes", text: "Introducción a Kubernetes — Qué es K8s, arquitectura, casos de uso\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Introduction to Kubernetes", text: "Introduction to Kubernetes — What is K8s, architecture, use cases\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-15-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Introducción a Kubernetes**\n\nCluster orquesta contenedores; kubectl API; namespaces aíslan recursos; declarative desired state.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nkubectl cluster-info\nkubectl get nodes\n```" },
      en: { title: "Key concepts", text: "**Introduction to Kubernetes**\n\nCluster orchestrates containers; kubectl API; namespaces isolate resources; declarative desired state.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nkubectl cluster-info\nkubectl get nodes\n```" },
    },
  },
  {
    id: "block-15-1-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "kubectl cluster-info\nkubectl get nodes", language: "bash" },
      en: { title: "Practice commands", code: "kubectl cluster-info\nkubectl get nodes", language: "bash" },
    },
  },
  {
    id: "block-15-1-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Minikube/kind para labs locales; prod managed EKS/GKE/AKS." },
      en: { title: "Operational tip", text: "Minikube/kind for local labs; prod managed EKS/GKE/AKS." },
    },
  },
  {
    id: "block-15-1-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson151Exercises: Exercise[] = [
  {
    id: "ex-15-1-1",
    lessonId: "lesson-15-1",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Introducción a Kubernetes»?",
      en: "Which tool or idea is central to «Introduction to Kubernetes»?",
    },
    options: { es: ["Solo k8s intro en teoría", "Práctica de k8s intro en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only k8s intro in theory", "Hands-on k8s intro on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica k8s intro en entornos reales.",
      en: "This lesson applies k8s intro in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-15-1-2",
    lessonId: "lesson-15-1",
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

export const lesson151Quiz: Quiz = {
  id: "quiz-15-1",
  lessonId: "lesson-15-1",
  questions: [
    {
      id: "quiz-15-1-1",
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
      id: "quiz-15-1-2",
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

export const lesson151: Lesson = {
  id: "lesson-15-1",
  moduleId: "level-15",
  slug: "k8s-intro",
  title: { es: "Introducción a Kubernetes", en: "Introduction to Kubernetes" },
  description: { es: "Qué es K8s, arquitectura, casos de uso", en: "What is K8s, architecture, use cases" },
  order: 1,
  duration: 40,
  contentBlocks: lesson151Content,
  exercises: lesson151Exercises,
  quiz: lesson151Quiz,
};
