import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson82Content: ContentBlock[] = [
  {
    id: "block-8-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "APT en Debian/Ubuntu", text: "APT en Debian/Ubuntu — apt, apt-get, apt-cache, dpkg\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "APT on Debian/Ubuntu", text: "APT on Debian/Ubuntu — apt, apt-get, apt-cache, dpkg\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-8-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**APT en Debian/Ubuntu**\n\napt update refresca índices; install/remove/purge; apt-cache policy muestra prioridades pinning.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nsudo apt update\nsudo apt install -y curl\napt show curl\n```" },
      en: { title: "Key concepts", text: "**APT on Debian/Ubuntu**\n\napt update refreshes indexes; install/remove/purge; apt-cache policy shows pinning.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nsudo apt update\nsudo apt install -y curl\napt show curl\n```" },
    },
  },
  {
    id: "block-8-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "sudo apt update\nsudo apt install -y curl\napt show curl", language: "bash" },
      en: { title: "Practice commands", code: "sudo apt update\nsudo apt install -y curl\napt show curl", language: "bash" },
    },
  },
  {
    id: "block-8-2-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "DEBIAN_FRONTEND=noninteractive evita prompts en CI." },
      en: { title: "Operational tip", text: "DEBIAN_FRONTEND=noninteractive avoids CI prompts." },
    },
  },
  {
    id: "block-8-2-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson82Exercises: Exercise[] = [
  {
    id: "ex-8-2-1",
    lessonId: "lesson-8-2",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «APT en Debian/Ubuntu»?",
      en: "Which tool or idea is central to «APT on Debian/Ubuntu»?",
    },
    options: { es: ["Solo apt debian en teoría", "Práctica de apt debian en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only apt debian in theory", "Hands-on apt debian on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica apt debian en entornos reales.",
      en: "This lesson applies apt debian in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-8-2-2",
    lessonId: "lesson-8-2",
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

export const lesson82Quiz: Quiz = {
  id: "quiz-8-2",
  lessonId: "lesson-8-2",
  questions: [
    {
      id: "quiz-8-2-1",
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
      id: "quiz-8-2-2",
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

export const lesson82: Lesson = {
  id: "lesson-8-2",
  moduleId: "level-8",
  slug: "apt-debian",
  title: { es: "APT en Debian/Ubuntu", en: "APT on Debian/Ubuntu" },
  description: { es: "apt, apt-get, apt-cache, dpkg", en: "apt, apt-get, apt-cache, dpkg" },
  order: 2,
  duration: 40,
  contentBlocks: lesson82Content,
  exercises: lesson82Exercises,
  quiz: lesson82Quiz,
};
