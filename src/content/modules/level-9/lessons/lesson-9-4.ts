import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson94Content: ContentBlock[] = [
  {
    id: "block-9-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "DNS: nslookup, dig, host", text: "DNS: nslookup, dig, host — Consulta y diagnostica DNS\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "DNS: nslookup, dig, host", text: "DNS: nslookup, dig, host — Query and diagnose DNS\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-9-4-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**DNS: nslookup, dig, host**\n\ndig +trace +short; @server fuerza resolver; registros A/AAAA/MX/TXT/CNAME.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ndig +short example.com A\ndig @8.8.8.8 example.com MX\n```" },
      en: { title: "Key concepts", text: "**DNS: nslookup, dig, host**\n\ndig +trace +short; @server forces resolver; A/AAAA/MX/TXT/CNAME records.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ndig +short example.com A\ndig @8.8.8.8 example.com MX\n```" },
    },
  },
  {
    id: "block-9-4-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "dig +short example.com A\ndig @8.8.8.8 example.com MX", language: "bash" },
      en: { title: "Practice commands", code: "dig +short example.com A\ndig @8.8.8.8 example.com MX", language: "bash" },
    },
  },
  {
    id: "block-9-4-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Compara dig @1.1.1.1 vs resolver local para separar client vs authoritative issues." },
      en: { title: "Operational tip", text: "Compare dig @1.1.1.1 vs local resolver to split client vs auth issues." },
    },
  },
  {
    id: "block-9-4-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson94Exercises: Exercise[] = [
  {
    id: "ex-9-4-1",
    lessonId: "lesson-9-4",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «DNS: nslookup, dig, host»?",
      en: "Which tool or idea is central to «DNS: nslookup, dig, host»?",
    },
    options: { es: ["Solo dns tools en teoría", "Práctica de dns tools en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only dns tools in theory", "Hands-on dns tools on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica dns tools en entornos reales.",
      en: "This lesson applies dns tools in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-9-4-2",
    lessonId: "lesson-9-4",
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

export const lesson94Quiz: Quiz = {
  id: "quiz-9-4",
  lessonId: "lesson-9-4",
  questions: [
    {
      id: "quiz-9-4-1",
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
      id: "quiz-9-4-2",
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

export const lesson94: Lesson = {
  id: "lesson-9-4",
  moduleId: "level-9",
  slug: "dns-tools",
  title: { es: "DNS: nslookup, dig, host", en: "DNS: nslookup, dig, host" },
  description: { es: "Consulta y diagnostica DNS", en: "Query and diagnose DNS" },
  order: 4,
  duration: 30,
  contentBlocks: lesson94Content,
  exercises: lesson94Exercises,
  quiz: lesson94Quiz,
};
