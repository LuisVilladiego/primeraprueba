import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson73Content: ContentBlock[] = [
  {
    id: "block-7-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Transformar Texto con sed", text: "Transformar Texto con sed — Buscar, reemplazar y editar streams de texto\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Transform Text with sed", text: "Transform Text with sed — Search, replace and edit text streams\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-7-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Transformar Texto con sed**\n\nsed stream editor: s/// sustituye; -n suprime print; direcciones 1,10p; -i.ed backup extension.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nsed -n '1,10p' file\nsed 's/foo/bar/g' file > out\n```" },
      en: { title: "Key concepts", text: "**Transform Text with sed**\n\nsed stream editor: s/// substitutes; -n suppress; addresses 1,10p; -i.ed backup ext.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nsed -n '1,10p' file\nsed 's/foo/bar/g' file > out\n```" },
    },
  },
  {
    id: "block-7-3-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "sed -n '1,10p' file\nsed 's/foo/bar/g' file > out", language: "bash" },
      en: { title: "Practice commands", code: "sed -n '1,10p' file\nsed 's/foo/bar/g' file > out", language: "bash" },
    },
  },
  {
    id: "block-7-3-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Nunca sed -i en prod sin backup ni diff previo." },
      en: { title: "Operational tip", text: "Never sed -i in prod without backup and prior diff." },
    },
  },
  {
    id: "block-7-3-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson73Exercises: Exercise[] = [
  {
    id: "ex-7-3-1",
    lessonId: "lesson-7-3",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Transformar Texto con sed»?",
      en: "Which tool or idea is central to «Transform Text with sed»?",
    },
    options: { es: ["Solo sed basics en teoría", "Práctica de sed basics en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only sed basics in theory", "Hands-on sed basics on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica sed basics en entornos reales.",
      en: "This lesson applies sed basics in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-7-3-2",
    lessonId: "lesson-7-3",
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

export const lesson73Quiz: Quiz = {
  id: "quiz-7-3",
  lessonId: "lesson-7-3",
  questions: [
    {
      id: "quiz-7-3-1",
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
      id: "quiz-7-3-2",
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

export const lesson73: Lesson = {
  id: "lesson-7-3",
  moduleId: "level-7",
  slug: "sed-basics",
  title: { es: "Transformar Texto con sed", en: "Transform Text with sed" },
  description: { es: "Buscar, reemplazar y editar streams de texto", en: "Search, replace and edit text streams" },
  order: 3,
  duration: 40,
  contentBlocks: lesson73Content,
  exercises: lesson73Exercises,
  quiz: lesson73Quiz,
};
