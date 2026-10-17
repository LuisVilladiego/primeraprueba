import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson57Content: ContentBlock[] = [
  {
    id: "block-5-7-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Funciones en Bash", text: "Funciones en Bash — Crea código reutilizable con funciones\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Functions in Bash", text: "Functions in Bash — Create reusable code with functions\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-5-7-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Funciones en Bash**\n\nlocal limita scope; return 0-255; el exit code default es el del último comando en la función.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nlog() { echo \"[$(date +%T)] $*\" >&2; }\nbackup_dir() { tar czf \"$1.tgz\" \"$1\"; }\n```" },
      en: { title: "Key concepts", text: "**Functions in Bash**\n\nlocal limits scope; return 0-255; default exit is the last command in the function.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nlog() { echo \"[$(date +%T)] $*\" >&2; }\nbackup_dir() { tar czf \"$1.tgz\" \"$1\"; }\n```" },
    },
  },
  {
    id: "block-5-7-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "log() { echo \"[$(date +%T)] $*\" >&2; }\nbackup_dir() { tar czf \"$1.tgz\" \"$1\"; }", language: "bash" },
      en: { title: "Practice commands", code: "log() { echo \"[$(date +%T)] $*\" >&2; }\nbackup_dir() { tar czf \"$1.tgz\" \"$1\"; }", language: "bash" },
    },
  },
  {
    id: "block-5-7-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Log a stderr con >&2 para no romper pipelines en stdout." },
      en: { title: "Operational tip", text: "Log to stderr with >&2 so stdout pipelines stay clean." },
    },
  },
  {
    id: "block-5-7-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson57Exercises: Exercise[] = [
  {
    id: "ex-5-7-1",
    lessonId: "lesson-5-7",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Funciones en Bash»?",
      en: "Which tool or idea is central to «Functions in Bash»?",
    },
    options: { es: ["Solo functions en teoría", "Práctica de functions en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only functions in theory", "Hands-on functions on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica functions en entornos reales.",
      en: "This lesson applies functions in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-5-7-2",
    lessonId: "lesson-5-7",
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

export const lesson57Quiz: Quiz = {
  id: "quiz-5-7",
  lessonId: "lesson-5-7",
  questions: [
    {
      id: "quiz-5-7-1",
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
      id: "quiz-5-7-2",
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

export const lesson57: Lesson = {
  id: "lesson-5-7",
  moduleId: "level-5",
  slug: "functions",
  title: { es: "Funciones en Bash", en: "Functions in Bash" },
  description: { es: "Crea código reutilizable con funciones", en: "Create reusable code with functions" },
  order: 7,
  duration: 35,
  contentBlocks: lesson57Content,
  exercises: lesson57Exercises,
  quiz: lesson57Quiz,
};
