import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson81Content: ContentBlock[] = [
  {
    id: "block-8-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Introducción a Gestores de Paquetes", text: "Introducción a Gestores de Paquetes — Qué son los paquetes, repositorios y dependencias\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Introduction to Package Managers", text: "Introduction to Package Managers — What are packages, repositories and dependencies\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-8-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Introducción a Gestores de Paquetes**\n\nDistros usan apt/dnf/pacman/snap/flatpak; cada uno resuelve dependencias y firmas distinto.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\napt-cache policy nginx\ndnf repolist\n```" },
      en: { title: "Key concepts", text: "**Introduction to Package Managers**\n\nDistros use apt/dnf/pacman/snap/flatpak; each resolves deps and signatures differently.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\napt-cache policy nginx\ndnf repolist\n```" },
    },
  },
  {
    id: "block-8-1-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "apt-cache policy nginx\ndnf repolist", language: "bash" },
      en: { title: "Practice commands", code: "apt-cache policy nginx\ndnf repolist", language: "bash" },
    },
  },
  {
    id: "block-8-1-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Documenta mirror interno y pinning en servidores regulados." },
      en: { title: "Operational tip", text: "Document internal mirrors and pinning on regulated servers." },
    },
  },
  {
    id: "block-8-1-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson81Exercises: Exercise[] = [
  {
    id: "ex-8-1-1",
    lessonId: "lesson-8-1",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Introducción a Gestores de Paquetes»?",
      en: "Which tool or idea is central to «Introduction to Package Managers»?",
    },
    options: { es: ["Solo package managers intro en teoría", "Práctica de package managers intro en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only package managers intro in theory", "Hands-on package managers intro on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica package managers intro en entornos reales.",
      en: "This lesson applies package managers intro in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-8-1-2",
    lessonId: "lesson-8-1",
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

export const lesson81Quiz: Quiz = {
  id: "quiz-8-1",
  lessonId: "lesson-8-1",
  questions: [
    {
      id: "quiz-8-1-1",
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
      id: "quiz-8-1-2",
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

export const lesson81: Lesson = {
  id: "lesson-8-1",
  moduleId: "level-8",
  slug: "package-managers-intro",
  title: { es: "Introducción a Gestores de Paquetes", en: "Introduction to Package Managers" },
  description: { es: "Qué son los paquetes, repositorios y dependencias", en: "What are packages, repositories and dependencies" },
  order: 1,
  duration: 25,
  contentBlocks: lesson81Content,
  exercises: lesson81Exercises,
  quiz: lesson81Quiz,
};
