import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson152Content: ContentBlock[] = [
  {
    id: "block-15-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Arquitectura de Kubernetes", text: "Arquitectura de Kubernetes — Master, nodes, etcd, API server, kubelet\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Kubernetes Architecture", text: "Kubernetes Architecture — Master, nodes, etcd, API server, kubelet\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-15-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Arquitectura de Kubernetes**\n\nControl plane API etcd scheduler controllers; worker kubelet kube-proxy; CNI networking.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\n# control plane: API server, etcd, scheduler, controllers\n# worker: kubelet, kube-proxy\n```" },
      en: { title: "Key concepts", text: "**Kubernetes Architecture**\n\nControl plane API etcd scheduler controllers; worker kubelet kube-proxy; CNI networking.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\n# control plane: API server, etcd, scheduler, controllers\n# worker: kubelet, kube-proxy\n```" },
    },
  },
  {
    id: "block-15-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "# control plane: API server, etcd, scheduler, controllers\n# worker: kubelet, kube-proxy", language: "bash" },
      en: { title: "Practice commands", code: "# control plane: API server, etcd, scheduler, controllers\n# worker: kubelet, kube-proxy", language: "bash" },
    },
  },
  {
    id: "block-15-2-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "etcd backup es crítico para DR del cluster." },
      en: { title: "Operational tip", text: "etcd backup is critical for cluster DR." },
    },
  },
  {
    id: "block-15-2-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson152Exercises: Exercise[] = [
  {
    id: "ex-15-2-1",
    lessonId: "lesson-15-2",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Arquitectura de Kubernetes»?",
      en: "Which tool or idea is central to «Kubernetes Architecture»?",
    },
    options: { es: ["Solo k8s architecture en teoría", "Práctica de k8s architecture en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only k8s architecture in theory", "Hands-on k8s architecture on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica k8s architecture en entornos reales.",
      en: "This lesson applies k8s architecture in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-15-2-2",
    lessonId: "lesson-15-2",
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

export const lesson152Quiz: Quiz = {
  id: "quiz-15-2",
  lessonId: "lesson-15-2",
  questions: [
    {
      id: "quiz-15-2-1",
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
      id: "quiz-15-2-2",
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

export const lesson152: Lesson = {
  id: "lesson-15-2",
  moduleId: "level-15",
  slug: "k8s-architecture",
  title: { es: "Arquitectura de Kubernetes", en: "Kubernetes Architecture" },
  description: { es: "Master, nodes, etcd, API server, kubelet", en: "Master, nodes, etcd, API server, kubelet" },
  order: 2,
  duration: 45,
  contentBlocks: lesson152Content,
  exercises: lesson152Exercises,
  quiz: lesson152Quiz,
};
