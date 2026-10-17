import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson124Content: ContentBlock[] = [
  {
    id: "block-12-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Subshells y Sustitución de Procesos", text: "Subshells y Sustitución de Procesos — $(), <(), >() y gestión de subprocesos\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Subshells and Process Substitution", text: "Subshells and Process Substitution — $(), <(), >() and subprocess management\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-12-4-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Subshells y Sustitución de Procesos**\n\n( ) subshell aísla cwd y vars; process substitution <(cmd) sin archivo temp; $$ vs $BASHPID.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ndiff <(sort a) <(sort b)\n( cd /tmp && pwd )\n```" },
      en: { title: "Key concepts", text: "**Subshells and Process Substitution**\n\n( ) subshell isolates cwd/vars; process substitution <(cmd) without temp file; $$ vs $BASHPID.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ndiff <(sort a) <(sort b)\n( cd /tmp && pwd )\n```" },
    },
  },
  {
    id: "block-12-4-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "diff <(sort a) <(sort b)\n( cd /tmp && pwd )", language: "bash" },
      en: { title: "Practice commands", code: "diff <(sort a) <(sort b)\n( cd /tmp && pwd )", language: "bash" },
    },
  },
  {
    id: "block-12-4-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Pipe while crea subshell—vars no persisten fuera." },
      en: { title: "Operational tip", text: "Pipe while creates subshell—vars don't persist outside." },
    },
  },
  {
    id: "block-12-4-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson124Exercises: Exercise[] = [
  {
    id: "ex-12-4-1",
    lessonId: "lesson-12-4",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Subshells y Sustitución de Procesos»?",
      en: "Which tool or idea is central to «Subshells and Process Substitution»?",
    },
    options: { es: ["Solo subshells processes en teoría", "Práctica de subshells processes en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only subshells processes in theory", "Hands-on subshells processes on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica subshells processes en entornos reales.",
      en: "This lesson applies subshells processes in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-12-4-2",
    lessonId: "lesson-12-4",
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

export const lesson124Quiz: Quiz = {
  id: "quiz-12-4",
  lessonId: "lesson-12-4",
  questions: [
    {
      id: "quiz-12-4-1",
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
      id: "quiz-12-4-2",
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

export const lesson124: Lesson = {
  id: "lesson-12-4",
  moduleId: "level-12",
  slug: "subshells-processes",
  title: { es: "Subshells y Sustitución de Procesos", en: "Subshells and Process Substitution" },
  description: { es: "$(), <(), >() y gestión de subprocesos", en: "$(), <(), >() and subprocess management" },
  order: 4,
  duration: 40,
  contentBlocks: lesson124Content,
  exercises: lesson124Exercises,
  quiz: lesson124Quiz,
};
