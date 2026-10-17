import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson155Content: ContentBlock[] = [
  {
    id: "block-15-5-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Services y Networking", text: "Services y Networking — ClusterIP, NodePort, LoadBalancer, Ingress\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Services and Networking", text: "Services and Networking — ClusterIP, NodePort, LoadBalancer, Ingress\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-15-5-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Services y Networking**\n\nService ClusterIP NodePort LoadBalancer; selectors label pods; kube-proxy iptables/IPVS.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nkubectl expose deployment web --port=80 --type=NodePort\n```" },
      en: { title: "Key concepts", text: "**Services and Networking**\n\nService ClusterIP NodePort LoadBalancer; selectors label pods; kube-proxy iptables/IPVS.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nkubectl expose deployment web --port=80 --type=NodePort\n```" },
    },
  },
  {
    id: "block-15-5-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "kubectl expose deployment web --port=80 --type=NodePort", language: "bash" },
      en: { title: "Practice commands", code: "kubectl expose deployment web --port=80 --type=NodePort", language: "bash" },
    },
  },
  {
    id: "block-15-5-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Ingress expone HTTP con controlador (nginx, traefik)." },
      en: { title: "Operational tip", text: "Ingress exposes HTTP with controller (nginx, traefik)." },
    },
  },
  {
    id: "block-15-5-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson155Exercises: Exercise[] = [
  {
    id: "ex-15-5-1",
    lessonId: "lesson-15-5",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Services y Networking»?",
      en: "Which tool or idea is central to «Services and Networking»?",
    },
    options: { es: ["Solo services networking en teoría", "Práctica de services networking en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only services networking in theory", "Hands-on services networking on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica services networking en entornos reales.",
      en: "This lesson applies services networking in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-15-5-2",
    lessonId: "lesson-15-5",
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

export const lesson155Quiz: Quiz = {
  id: "quiz-15-5",
  lessonId: "lesson-15-5",
  questions: [
    {
      id: "quiz-15-5-1",
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
      id: "quiz-15-5-2",
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

export const lesson155: Lesson = {
  id: "lesson-15-5",
  moduleId: "level-15",
  slug: "services-networking",
  title: { es: "Services y Networking", en: "Services and Networking" },
  description: { es: "ClusterIP, NodePort, LoadBalancer, Ingress", en: "ClusterIP, NodePort, LoadBalancer, Ingress" },
  order: 5,
  duration: 45,
  contentBlocks: lesson155Content,
  exercises: lesson155Exercises,
  quiz: lesson155Quiz,
};
