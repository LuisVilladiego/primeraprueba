import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson75Content: ContentBlock[] = [
  {
    id: "block-7-5-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "cut, sort y uniq", text: "cut, sort y uniq — Herramientas clásicas de procesamiento de texto\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "cut, sort and uniq", text: "cut, sort and uniq — Classic text processing tools\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-7-5-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**cut, sort y uniq**\n\ncut extrae campos; sort ordena; uniq -c cuenta líneas consecutivas (sort antes!).\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ncut -d: -f1 /etc/passwd | sort | uniq -c | sort -nr | head\n```" },
      en: { title: "Key concepts", text: "**cut, sort and uniq**\n\ncut extracts fields; sort orders; uniq -c counts consecutive duplicates (sort first!).\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ncut -d: -f1 /etc/passwd | sort | uniq -c | sort -nr | head\n```" },
    },
  },
  {
    id: "block-7-5-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "cut -d: -f1 /etc/passwd | sort | uniq -c | sort -nr | head", language: "bash" },
      en: { title: "Practice commands", code: "cut -d: -f1 /etc/passwd | sort | uniq -c | sort -nr | head", language: "bash" },
    },
  },
  {
    id: "block-7-5-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "sort -t: -k3 -n ordena /etc/passwd por UID numérico." },
      en: { title: "Operational tip", text: "sort -t: -k3 -n sorts /etc/passwd by numeric UID." },
    },
  },
  {
    id: "block-7-5-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson75Exercises: Exercise[] = [
  {
    id: "ex-7-5-1",
    lessonId: "lesson-7-5",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «cut, sort y uniq»?",
      en: "Which tool or idea is central to «cut, sort and uniq»?",
    },
    options: { es: ["Solo cut sort uniq en teoría", "Práctica de cut sort uniq en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only cut sort uniq in theory", "Hands-on cut sort uniq on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica cut sort uniq en entornos reales.",
      en: "This lesson applies cut sort uniq in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-7-5-2",
    lessonId: "lesson-7-5",
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

export const lesson75Quiz: Quiz = {
  id: "quiz-7-5",
  lessonId: "lesson-7-5",
  questions: [
    {
      id: "quiz-7-5-1",
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
      id: "quiz-7-5-2",
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

export const lesson75: Lesson = {
  id: "lesson-7-5",
  moduleId: "level-7",
  slug: "cut-sort-uniq",
  title: { es: "cut, sort y uniq", en: "cut, sort and uniq" },
  description: { es: "Herramientas clásicas de procesamiento de texto", en: "Classic text processing tools" },
  order: 5,
  duration: 30,
  contentBlocks: lesson75Content,
  exercises: lesson75Exercises,
  quiz: lesson75Quiz,
};
