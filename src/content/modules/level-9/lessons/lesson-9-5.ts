import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson95Content: ContentBlock[] = [
  {
    id: "block-9-5-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Puertos y Conexiones: ss, netstat", text: "Puertos y Conexiones: ss, netstat — Monitorea puertos abiertos y conexiones activas\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Ports and Connections: ss, netstat", text: "Ports and Connections: ss, netstat — Monitor open ports and active connections\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-9-5-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Puertos y Conexiones: ss, netstat**\n\nss -tulpn sockets listening; -n numeric; netstat legacy; lsof -i mapea PID→puerto.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nss -tulpn | grep ':22'\nsudo lsof -iTCP -sTCP:LISTEN\n```" },
      en: { title: "Key concepts", text: "**Ports and Connections: ss, netstat**\n\nss -tulpn listening sockets; -n numeric; netstat legacy; lsof -i maps PID→port.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nss -tulpn | grep ':22'\nsudo lsof -iTCP -sTCP:LISTEN\n```" },
    },
  },
  {
    id: "block-9-5-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "ss -tulpn | grep ':22'\nsudo lsof -iTCP -sTCP:LISTEN", language: "bash" },
      en: { title: "Practice commands", code: "ss -tulpn | grep ':22'\nsudo lsof -iTCP -sTCP:LISTEN", language: "bash" },
    },
  },
  {
    id: "block-9-5-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "ss más rápido en hosts con miles de conexiones." },
      en: { title: "Operational tip", text: "ss is faster on hosts with thousands of connections." },
    },
  },
  {
    id: "block-9-5-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson95Exercises: Exercise[] = [
  {
    id: "ex-9-5-1",
    lessonId: "lesson-9-5",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Puertos y Conexiones: ss, netstat»?",
      en: "Which tool or idea is central to «Ports and Connections: ss, netstat»?",
    },
    options: { es: ["Solo netstat ss en teoría", "Práctica de netstat ss en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only netstat ss in theory", "Hands-on netstat ss on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica netstat ss en entornos reales.",
      en: "This lesson applies netstat ss in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-9-5-2",
    lessonId: "lesson-9-5",
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

export const lesson95Quiz: Quiz = {
  id: "quiz-9-5",
  lessonId: "lesson-9-5",
  questions: [
    {
      id: "quiz-9-5-1",
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
      id: "quiz-9-5-2",
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

export const lesson95: Lesson = {
  id: "lesson-9-5",
  moduleId: "level-9",
  slug: "netstat-ss",
  title: { es: "Puertos y Conexiones: ss, netstat", en: "Ports and Connections: ss, netstat" },
  description: { es: "Monitorea puertos abiertos y conexiones activas", en: "Monitor open ports and active connections" },
  order: 5,
  duration: 35,
  contentBlocks: lesson95Content,
  exercises: lesson95Exercises,
  quiz: lesson95Quiz,
};
