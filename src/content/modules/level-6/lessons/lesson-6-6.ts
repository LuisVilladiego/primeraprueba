import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson66Content: ContentBlock[] = [
  {
    id: "block-6-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Configuración de Vim: .vimrc", text: "Configuración de Vim: .vimrc — Personaliza Vim con tu archivo de configuración\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Vim Configuration: .vimrc", text: "Vim Configuration: .vimrc — Customize Vim with your configuration file\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-6-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Configuración de Vim: .vimrc**\n\n~/.vimrc persiste set number, relativenumber, syntax on, tabstop expandtab.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\necho 'set number relativenumber' >> ~/.vimrc\necho 'syntax on' >> ~/.vimrc\n```" },
      en: { title: "Key concepts", text: "**Vim Configuration: .vimrc**\n\n~/.vimrc persists set number, relativenumber, syntax on, tabstop expandtab.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\necho 'set number relativenumber' >> ~/.vimrc\necho 'syntax on' >> ~/.vimrc\n```" },
    },
  },
  {
    id: "block-6-6-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "echo 'set number relativenumber' >> ~/.vimrc\necho 'syntax on' >> ~/.vimrc", language: "bash" },
      en: { title: "Practice commands", code: "echo 'set number relativenumber' >> ~/.vimrc\necho 'syntax on' >> ~/.vimrc", language: "bash" },
    },
  },
  {
    id: "block-6-6-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Packaging: /etc/vim/vimrc.local para defaults de equipo." },
      en: { title: "Operational tip", text: "Packaging: /etc/vim/vimrc.local for team defaults." },
    },
  },
  {
    id: "block-6-6-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson66Exercises: Exercise[] = [
  {
    id: "ex-6-6-1",
    lessonId: "lesson-6-6",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Configuración de Vim: .vimrc»?",
      en: "Which tool or idea is central to «Vim Configuration: .vimrc»?",
    },
    options: { es: ["Solo vimrc config en teoría", "Práctica de vimrc config en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only vimrc config in theory", "Hands-on vimrc config on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica vimrc config en entornos reales.",
      en: "This lesson applies vimrc config in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-6-6-2",
    lessonId: "lesson-6-6",
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

export const lesson66Quiz: Quiz = {
  id: "quiz-6-6",
  lessonId: "lesson-6-6",
  questions: [
    {
      id: "quiz-6-6-1",
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
      id: "quiz-6-6-2",
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

export const lesson66: Lesson = {
  id: "lesson-6-6",
  moduleId: "level-6",
  slug: "vimrc-config",
  title: { es: "Configuración de Vim: .vimrc", en: "Vim Configuration: .vimrc" },
  description: { es: "Personaliza Vim con tu archivo de configuración", en: "Customize Vim with your configuration file" },
  order: 6,
  duration: 30,
  contentBlocks: lesson66Content,
  exercises: lesson66Exercises,
  quiz: lesson66Quiz,
};
