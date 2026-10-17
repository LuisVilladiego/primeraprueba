import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson154Content: ContentBlock[] = [
  {
    id: "block-15-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Pods y Deployments", text: "Pods y Deployments — La unidad básica y cómo escalar aplicaciones\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Pods and Deployments", text: "Pods and Deployments — The basic unit and how to scale applications\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-15-4-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Pods y Deployments**\n\nPod unidad mínima; Deployment ReplicaSet rolling updates; probes liveness/readiness.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nkubectl create deployment web --image=nginx\nkubectl scale deployment web --replicas=3\n```" },
      en: { title: "Key concepts", text: "**Pods and Deployments**\n\nPod smallest unit; Deployment ReplicaSet rolling updates; liveness/readiness probes.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nkubectl create deployment web --image=nginx\nkubectl scale deployment web --replicas=3\n```" },
    },
  },
  {
    id: "block-15-4-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "kubectl create deployment web --image=nginx\nkubectl scale deployment web --replicas=3", language: "bash" },
      en: { title: "Practice commands", code: "kubectl create deployment web --image=nginx\nkubectl scale deployment web --replicas=3", language: "bash" },
    },
  },
  {
    id: "block-15-4-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Un Pod no se repara—se reemplaza." },
      en: { title: "Operational tip", text: "Pods aren't repaired—they're replaced." },
    },
  },
  {
    id: "block-15-4-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson154Exercises: Exercise[] = [
  {
    id: "ex-15-4-1",
    lessonId: "lesson-15-4",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Pods y Deployments»?",
      en: "Which tool or idea is central to «Pods and Deployments»?",
    },
    options: { es: ["Solo pods deployments en teoría", "Práctica de pods deployments en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only pods deployments in theory", "Hands-on pods deployments on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica pods deployments en entornos reales.",
      en: "This lesson applies pods deployments in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-15-4-2",
    lessonId: "lesson-15-4",
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

export const lesson154Quiz: Quiz = {
  id: "quiz-15-4",
  lessonId: "lesson-15-4",
  questions: [
    {
      id: "quiz-15-4-1",
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
      id: "quiz-15-4-2",
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

export const lesson154: Lesson = {
  id: "lesson-15-4",
  moduleId: "level-15",
  slug: "pods-deployments",
  title: { es: "Pods y Deployments", en: "Pods and Deployments" },
  description: { es: "La unidad básica y cómo escalar aplicaciones", en: "The basic unit and how to scale applications" },
  order: 4,
  duration: 50,
  contentBlocks: lesson154Content,
  exercises: lesson154Exercises,
  quiz: lesson154Quiz,
};
