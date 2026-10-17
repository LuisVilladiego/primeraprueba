import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson55Content: ContentBlock[] = [
  {
    id: "block-5-5-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Test y Comparaciones", text: "Test y Comparaciones — Comparar strings, números y archivos\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Test and Comparisons", text: "Test and Comparisons — Compare strings, numbers and files\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-5-5-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Test y Comparaciones**\n\nUsa -eq/-ne para enteros; == dentro de [[ ]] para strings. -x comprueba ejecutable.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\n[[ \"$1\" == \"prod\" ]] && echo ok\n[[ $count -eq 0 ]] && exit 1\n[[ -x ./run.sh ]]\n```" },
      en: { title: "Key concepts", text: "**Test and Comparisons**\n\nUse -eq/-ne for integers; == in [[ ]] for strings. -x checks executable.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\n[[ \"$1\" == \"prod\" ]] && echo ok\n[[ $count -eq 0 ]] && exit 1\n[[ -x ./run.sh ]]\n```" },
    },
  },
  {
    id: "block-5-5-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "[[ \"$1\" == \"prod\" ]] && echo ok\n[[ $count -eq 0 ]] && exit 1\n[[ -x ./run.sh ]]", language: "bash" },
      en: { title: "Practice commands", code: "[[ \"$1\" == \"prod\" ]] && echo ok\n[[ $count -eq 0 ]] && exit 1\n[[ -x ./run.sh ]]", language: "bash" },
    },
  },
  {
    id: "block-5-5-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Comilla variables en [ ] legacy para evitar syntax errors." },
      en: { title: "Operational tip", text: "Quote variables in legacy [ ] to avoid syntax errors." },
    },
  },
  {
    id: "block-5-5-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson55Exercises: Exercise[] = [
  {
    id: "ex-5-5-1",
    lessonId: "lesson-5-5",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Test y Comparaciones»?",
      en: "Which tool or idea is central to «Test and Comparisons»?",
    },
    options: { es: ["Solo test comparisons en teoría", "Práctica de test comparisons en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only test comparisons in theory", "Hands-on test comparisons on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica test comparisons en entornos reales.",
      en: "This lesson applies test comparisons in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-5-5-2",
    lessonId: "lesson-5-5",
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

export const lesson55Quiz: Quiz = {
  id: "quiz-5-5",
  lessonId: "lesson-5-5",
  questions: [
    {
      id: "quiz-5-5-1",
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
      id: "quiz-5-5-2",
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

export const lesson55: Lesson = {
  id: "lesson-5-5",
  moduleId: "level-5",
  slug: "test-comparisons",
  title: { es: "Test y Comparaciones", en: "Test and Comparisons" },
  description: { es: "Comparar strings, números y archivos", en: "Compare strings, numbers and files" },
  order: 5,
  duration: 35,
  contentBlocks: lesson55Content,
  exercises: lesson55Exercises,
  quiz: lesson55Quiz,
};
