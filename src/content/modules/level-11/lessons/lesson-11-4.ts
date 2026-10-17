import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson114Content: ContentBlock[] = [
  {
    id: "block-11-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Transferencia de Archivos: scp y rsync", text: "Transferencia de Archivos: scp y rsync — Copia archivos de forma segura entre sistemas\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "File Transfer: scp and rsync", text: "File Transfer: scp and rsync — Copy files securely between systems\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-11-4-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Transferencia de Archivos: scp y rsync**\n\nscp copia puntual; rsync -avz delta sync; --delete espeja destino; -e ssh tunnel transport.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nscp file user@host:/tmp/\nrsync -avz --delete ./site/ user@host:/var/www/\n```" },
      en: { title: "Key concepts", text: "**File Transfer: scp and rsync**\n\nscp point copy; rsync -avz delta sync; --delete mirrors dest; -e ssh tunnel transport.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nscp file user@host:/tmp/\nrsync -avz --delete ./site/ user@host:/var/www/\n```" },
    },
  },
  {
    id: "block-11-4-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "scp file user@host:/tmp/\nrsync -avz --delete ./site/ user@host:/var/www/", language: "bash" },
      en: { title: "Practice commands", code: "scp file user@host:/tmp/\nrsync -avz --delete ./site/ user@host:/var/www/", language: "bash" },
    },
  },
  {
    id: "block-11-4-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "rsync --dry-run antes de --delete en prod." },
      en: { title: "Operational tip", text: "rsync --dry-run before --delete in prod." },
    },
  },
  {
    id: "block-11-4-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson114Exercises: Exercise[] = [
  {
    id: "ex-11-4-1",
    lessonId: "lesson-11-4",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Transferencia de Archivos: scp y rsync»?",
      en: "Which tool or idea is central to «File Transfer: scp and rsync»?",
    },
    options: { es: ["Solo scp rsync en teoría", "Práctica de scp rsync en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only scp rsync in theory", "Hands-on scp rsync on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica scp rsync en entornos reales.",
      en: "This lesson applies scp rsync in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-11-4-2",
    lessonId: "lesson-11-4",
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

export const lesson114Quiz: Quiz = {
  id: "quiz-11-4",
  lessonId: "lesson-11-4",
  questions: [
    {
      id: "quiz-11-4-1",
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
      id: "quiz-11-4-2",
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

export const lesson114: Lesson = {
  id: "lesson-11-4",
  moduleId: "level-11",
  slug: "scp-rsync",
  title: { es: "Transferencia de Archivos: scp y rsync", en: "File Transfer: scp and rsync" },
  description: { es: "Copia archivos de forma segura entre sistemas", en: "Copy files securely between systems" },
  order: 4,
  duration: 35,
  contentBlocks: lesson114Content,
  exercises: lesson114Exercises,
  quiz: lesson114Quiz,
};
