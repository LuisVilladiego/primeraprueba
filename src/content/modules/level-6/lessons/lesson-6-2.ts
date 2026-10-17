import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson62Content: ContentBlock[] = [
  {
    id: "block-6-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Introducción a Vim", text: "Introducción a Vim — Modos, navegación básica y comandos esenciales\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Introduction to Vim", text: "Introduction to Vim — Modes, basic navigation and essential commands\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-6-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Introducción a Vim**\n\nModos Normal/Insert/Command-line: ESC vuelve a Normal; i inserta; :wq guarda y sale.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nvim file.txt\n# Normal: h j k l  |  i insert  |  :wq save quit\n```" },
      en: { title: "Key concepts", text: "**Introduction to Vim**\n\nNormal/Insert/Command-line modes: ESC to Normal; i insert; :wq save quit.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nvim file.txt\n# Normal: h j k l  |  i insert  |  :wq save quit\n```" },
    },
  },
  {
    id: "block-6-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "vim file.txt\n# Normal: h j k l  |  i insert  |  :wq save quit", language: "bash" },
      en: { title: "Practice commands", code: "vim file.txt\n# Normal: h j k l  |  i insert  |  :wq save quit", language: "bash" },
    },
  },
  {
    id: "block-6-2-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "vim +N file abre en línea N; útil para saltar a errores de compilador." },
      en: { title: "Operational tip", text: "vim +N file opens at line N; handy for compiler error jumps." },
    },
  },
  {
    id: "block-6-2-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson62Exercises: Exercise[] = [
  {
    id: "ex-6-2-1",
    lessonId: "lesson-6-2",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Introducción a Vim»?",
      en: "Which tool or idea is central to «Introduction to Vim»?",
    },
    options: { es: ["Solo vim intro en teoría", "Práctica de vim intro en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only vim intro in theory", "Hands-on vim intro on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica vim intro en entornos reales.",
      en: "This lesson applies vim intro in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-6-2-2",
    lessonId: "lesson-6-2",
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

export const lesson62Quiz: Quiz = {
  id: "quiz-6-2",
  lessonId: "lesson-6-2",
  questions: [
    {
      id: "quiz-6-2-1",
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
      id: "quiz-6-2-2",
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

export const lesson62: Lesson = {
  id: "lesson-6-2",
  moduleId: "level-6",
  slug: "vim-intro",
  title: { es: "Introducción a Vim", en: "Introduction to Vim" },
  description: { es: "Modos, navegación básica y comandos esenciales", en: "Modes, basic navigation and essential commands" },
  order: 2,
  duration: 40,
  contentBlocks: lesson62Content,
  exercises: lesson62Exercises,
  quiz: lesson62Quiz,
};
