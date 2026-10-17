import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson104Content: ContentBlock[] = [
  {
    id: "block-10-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Logs con journalctl", text: "Logs con journalctl — Consulta logs del sistema y servicios\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Logs with journalctl", text: "Logs with journalctl — Query system and service logs\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-10-4-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Logs con journalctl**\n\njournalctl -u unit -f follow; -b boot actual; -p err priority; --since time filter.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\njournalctl -u nginx -n 50 --no-pager\njournalctl -p err -b\n```" },
      en: { title: "Key concepts", text: "**Logs with journalctl**\n\njournalctl -u unit -f follow; -b this boot; -p err priority; --since time filter.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\njournalctl -u nginx -n 50 --no-pager\njournalctl -p err -b\n```" },
    },
  },
  {
    id: "block-10-4-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "journalctl -u nginx -n 50 --no-pager\njournalctl -p err -b", language: "bash" },
      en: { title: "Practice commands", code: "journalctl -u nginx -n 50 --no-pager\njournalctl -p err -b", language: "bash" },
    },
  },
  {
    id: "block-10-4-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Persistent journal requiere Storage=persistent en journald.conf." },
      en: { title: "Operational tip", text: "Persistent journal needs Storage=persistent in journald.conf." },
    },
  },
  {
    id: "block-10-4-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson104Exercises: Exercise[] = [
  {
    id: "ex-10-4-1",
    lessonId: "lesson-10-4",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Logs con journalctl»?",
      en: "Which tool or idea is central to «Logs with journalctl»?",
    },
    options: { es: ["Solo journalctl en teoría", "Práctica de journalctl en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only journalctl in theory", "Hands-on journalctl on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica journalctl en entornos reales.",
      en: "This lesson applies journalctl in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-10-4-2",
    lessonId: "lesson-10-4",
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

export const lesson104Quiz: Quiz = {
  id: "quiz-10-4",
  lessonId: "lesson-10-4",
  questions: [
    {
      id: "quiz-10-4-1",
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
      id: "quiz-10-4-2",
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

export const lesson104: Lesson = {
  id: "lesson-10-4",
  moduleId: "level-10",
  slug: "journalctl",
  title: { es: "Logs con journalctl", en: "Logs with journalctl" },
  description: { es: "Consulta logs del sistema y servicios", en: "Query system and service logs" },
  order: 4,
  duration: 35,
  contentBlocks: lesson104Content,
  exercises: lesson104Exercises,
  quiz: lesson104Quiz,
};
