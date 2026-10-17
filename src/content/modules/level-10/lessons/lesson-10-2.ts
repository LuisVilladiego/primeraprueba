import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson102Content: ContentBlock[] = [
  {
    id: "block-10-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Control de Servicios con systemctl", text: "Control de Servicios con systemctl — start, stop, restart, enable, disable, status\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Service Control with systemctl", text: "Service Control with systemctl — start, stop, restart, enable, disable, status\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-10-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Control de Servicios con systemctl**\n\nstart/stop/restart/reload/status; enable --now persiste y arranca; is-active/is-enabled checks.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nsudo systemctl status ssh\nsudo systemctl restart nginx\n```" },
      en: { title: "Key concepts", text: "**Service Control with systemctl**\n\nstart/stop/restart/reload/status; enable --now persists and starts; is-active/is-enabled checks.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nsudo systemctl status ssh\nsudo systemctl restart nginx\n```" },
    },
  },
  {
    id: "block-10-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "sudo systemctl status ssh\nsudo systemctl restart nginx", language: "bash" },
      en: { title: "Practice commands", code: "sudo systemctl status ssh\nsudo systemctl restart nginx", language: "bash" },
    },
  },
  {
    id: "block-10-2-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "reload vs restart: reload relee config sin matar conexiones si la unidad lo soporta." },
      en: { title: "Operational tip", text: "reload vs restart: reload rereads config without killing connections when supported." },
    },
  },
  {
    id: "block-10-2-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson102Exercises: Exercise[] = [
  {
    id: "ex-10-2-1",
    lessonId: "lesson-10-2",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Control de Servicios con systemctl»?",
      en: "Which tool or idea is central to «Service Control with systemctl»?",
    },
    options: { es: ["Solo systemctl basics en teoría", "Práctica de systemctl basics en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only systemctl basics in theory", "Hands-on systemctl basics on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica systemctl basics en entornos reales.",
      en: "This lesson applies systemctl basics in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-10-2-2",
    lessonId: "lesson-10-2",
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

export const lesson102Quiz: Quiz = {
  id: "quiz-10-2",
  lessonId: "lesson-10-2",
  questions: [
    {
      id: "quiz-10-2-1",
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
      id: "quiz-10-2-2",
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

export const lesson102: Lesson = {
  id: "lesson-10-2",
  moduleId: "level-10",
  slug: "systemctl-basics",
  title: { es: "Control de Servicios con systemctl", en: "Service Control with systemctl" },
  description: { es: "start, stop, restart, enable, disable, status", en: "start, stop, restart, enable, disable, status" },
  order: 2,
  duration: 40,
  contentBlocks: lesson102Content,
  exercises: lesson102Exercises,
  quiz: lesson102Quiz,
};
