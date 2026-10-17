import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson83Content: ContentBlock[] = [
  {
    id: "block-8-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "DNF en Fedora/RHEL", text: "DNF en Fedora/RHEL — dnf, yum, rpm para sistemas Red Hat\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "DNF on Fedora/RHEL", text: "DNF on Fedora/RHEL — dnf, yum, rpm for Red Hat systems\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-8-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**DNF en Fedora/RHEL**\n\ndnf install/remove; repolist; rpm -qi consulta metadatos RPM instalados.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nsudo dnf install -y htop\nrpm -qi htop\n```" },
      en: { title: "Key concepts", text: "**DNF on Fedora/RHEL**\n\ndnf install/remove; repolist; rpm -qi queries installed RPM metadata.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nsudo dnf install -y htop\nrpm -qi htop\n```" },
    },
  },
  {
    id: "block-8-3-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "sudo dnf install -y htop\nrpm -qi htop", language: "bash" },
      en: { title: "Practice commands", code: "sudo dnf install -y htop\nrpm -qi htop", language: "bash" },
    },
  },
  {
    id: "block-8-3-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "dnf history undo revierte transacciones recientes." },
      en: { title: "Operational tip", text: "dnf history undo rolls back recent transactions." },
    },
  },
  {
    id: "block-8-3-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson83Exercises: Exercise[] = [
  {
    id: "ex-8-3-1",
    lessonId: "lesson-8-3",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «DNF en Fedora/RHEL»?",
      en: "Which tool or idea is central to «DNF on Fedora/RHEL»?",
    },
    options: { es: ["Solo dnf fedora en teoría", "Práctica de dnf fedora en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only dnf fedora in theory", "Hands-on dnf fedora on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica dnf fedora en entornos reales.",
      en: "This lesson applies dnf fedora in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-8-3-2",
    lessonId: "lesson-8-3",
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

export const lesson83Quiz: Quiz = {
  id: "quiz-8-3",
  lessonId: "lesson-8-3",
  questions: [
    {
      id: "quiz-8-3-1",
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
      id: "quiz-8-3-2",
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

export const lesson83: Lesson = {
  id: "lesson-8-3",
  moduleId: "level-8",
  slug: "dnf-fedora",
  title: { es: "DNF en Fedora/RHEL", en: "DNF on Fedora/RHEL" },
  description: { es: "dnf, yum, rpm para sistemas Red Hat", en: "dnf, yum, rpm for Red Hat systems" },
  order: 3,
  duration: 35,
  contentBlocks: lesson83Content,
  exercises: lesson83Exercises,
  quiz: lesson83Quiz,
};
