import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson153Content: ContentBlock[] = [
  {
    id: "block-15-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "kubectl: Comandos Básicos", text: "kubectl: Comandos Básicos — get, describe, create, apply, delete\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "kubectl: Basic Commands", text: "kubectl: Basic Commands — get, describe, create, apply, delete\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-15-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**kubectl: Comandos Básicos**\n\nkubectl get/describe/logs exec; apply -f manifest; context/namespace -n; --dry-run=client -o yaml.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nkubectl get all -A\nkubectl apply -f deployment.yaml\n```" },
      en: { title: "Key concepts", text: "**kubectl: Basic Commands**\n\nkubectl get/describe/logs exec; apply -f manifest; context/namespace -n; --dry-run=client -o yaml.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nkubectl get all -A\nkubectl apply -f deployment.yaml\n```" },
    },
  },
  {
    id: "block-15-3-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "kubectl get all -A\nkubectl apply -f deployment.yaml", language: "bash" },
      en: { title: "Practice commands", code: "kubectl get all -A\nkubectl apply -f deployment.yaml", language: "bash" },
    },
  },
  {
    id: "block-15-3-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "kubectx/kubens aceleran cambios de entorno." },
      en: { title: "Operational tip", text: "kubectx/kubens speed environment switching." },
    },
  },
  {
    id: "block-15-3-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson153Exercises: Exercise[] = [
  {
    id: "ex-15-3-1",
    lessonId: "lesson-15-3",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «kubectl: Comandos Básicos»?",
      en: "Which tool or idea is central to «kubectl: Basic Commands»?",
    },
    options: { es: ["Solo kubectl basics en teoría", "Práctica de kubectl basics en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only kubectl basics in theory", "Hands-on kubectl basics on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica kubectl basics en entornos reales.",
      en: "This lesson applies kubectl basics in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-15-3-2",
    lessonId: "lesson-15-3",
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

export const lesson153Quiz: Quiz = {
  id: "quiz-15-3",
  lessonId: "lesson-15-3",
  questions: [
    {
      id: "quiz-15-3-1",
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
      id: "quiz-15-3-2",
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

export const lesson153: Lesson = {
  id: "lesson-15-3",
  moduleId: "level-15",
  slug: "kubectl-basics",
  title: { es: "kubectl: Comandos Básicos", en: "kubectl: Basic Commands" },
  description: { es: "get, describe, create, apply, delete", en: "get, describe, create, apply, delete" },
  order: 3,
  duration: 40,
  contentBlocks: lesson153Content,
  exercises: lesson153Exercises,
  quiz: lesson153Quiz,
};
