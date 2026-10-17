import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson122Content: ContentBlock[] = [
  {
    id: "block-12-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Expresiones Regulares en Bash", text: "Expresiones Regulares en Bash — Usa regex con [[ =~ ]] y otras herramientas\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Regular Expressions in Bash", text: "Regular Expressions in Bash — Use regex with [[ =~ ]] and other tools\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-12-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Expresiones Regulares en Bash**\n\n[[ string =~ regex ]] con BASH_REMATCH capture groups; no uses grep dentro de if innecesario.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\n[[ \"abc123\" =~ ^[a-z]+[0-9]+$ ]] && echo match\n```" },
      en: { title: "Key concepts", text: "**Regular Expressions in Bash**\n\n[[ string =~ regex ]] with BASH_REMATCH capture groups; avoid pointless grep in if.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\n[[ \"abc123\" =~ ^[a-z]+[0-9]+$ ]] && echo match\n```" },
    },
  },
  {
    id: "block-12-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "[[ \"abc123\" =~ ^[a-z]+[0-9]+$ ]] && echo match", language: "bash" },
      en: { title: "Practice commands", code: "[[ \"abc123\" =~ ^[a-z]+[0-9]+$ ]] && echo match", language: "bash" },
    },
  },
  {
    id: "block-12-2-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Ancla ^$ para validación completa de input." },
      en: { title: "Operational tip", text: "Anchor ^$ for full input validation." },
    },
  },
  {
    id: "block-12-2-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson122Exercises: Exercise[] = [
  {
    id: "ex-12-2-1",
    lessonId: "lesson-12-2",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Expresiones Regulares en Bash»?",
      en: "Which tool or idea is central to «Regular Expressions in Bash»?",
    },
    options: { es: ["Solo regex in bash en teoría", "Práctica de regex in bash en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only regex in bash in theory", "Hands-on regex in bash on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica regex in bash en entornos reales.",
      en: "This lesson applies regex in bash in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-12-2-2",
    lessonId: "lesson-12-2",
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

export const lesson122Quiz: Quiz = {
  id: "quiz-12-2",
  lessonId: "lesson-12-2",
  questions: [
    {
      id: "quiz-12-2-1",
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
      id: "quiz-12-2-2",
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

export const lesson122: Lesson = {
  id: "lesson-12-2",
  moduleId: "level-12",
  slug: "regex-in-bash",
  title: { es: "Expresiones Regulares en Bash", en: "Regular Expressions in Bash" },
  description: { es: "Usa regex con [[ =~ ]] y otras herramientas", en: "Use regex with [[ =~ ]] and other tools" },
  order: 2,
  duration: 40,
  contentBlocks: lesson122Content,
  exercises: lesson122Exercises,
  quiz: lesson122Quiz,
};
