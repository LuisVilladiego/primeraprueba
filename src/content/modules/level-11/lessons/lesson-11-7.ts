import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson117Content: ContentBlock[] = [
  {
    id: "block-11-7-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Hardening Básico de Seguridad", text: "Hardening Básico de Seguridad — Mejores prácticas para asegurar servidores\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Basic Security Hardening", text: "Basic Security Hardening — Best practices to secure servers\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-11-7-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Hardening Básico de Seguridad**\n\nfail2ban jails; deshabilitar root login SSH; sudo vs su; SUID audit find -perm -4000.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nsudo fail2ban-client status sshd\nfind /etc -perm -4000 -type f 2>/dev/null\n```" },
      en: { title: "Key concepts", text: "**Basic Security Hardening**\n\nfail2ban jails; disable root SSH login; sudo vs su; SUID audit find -perm -4000.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nsudo fail2ban-client status sshd\nfind /etc -perm -4000 -type f 2>/dev/null\n```" },
    },
  },
  {
    id: "block-11-7-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "sudo fail2ban-client status sshd\nfind /etc -perm -4000 -type f 2>/dev/null", language: "bash" },
      en: { title: "Practice commands", code: "sudo fail2ban-client status sshd\nfind /etc -perm -4000 -type f 2>/dev/null", language: "bash" },
    },
  },
  {
    id: "block-11-7-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Aplica CIS benchmarks gradualmente con rollback plan." },
      en: { title: "Operational tip", text: "Apply CIS benchmarks gradually with rollback plan." },
    },
  },
  {
    id: "block-11-7-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson117Exercises: Exercise[] = [
  {
    id: "ex-11-7-1",
    lessonId: "lesson-11-7",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Hardening Básico de Seguridad»?",
      en: "Which tool or idea is central to «Basic Security Hardening»?",
    },
    options: { es: ["Solo security hardening en teoría", "Práctica de security hardening en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only security hardening in theory", "Hands-on security hardening on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica security hardening en entornos reales.",
      en: "This lesson applies security hardening in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-11-7-2",
    lessonId: "lesson-11-7",
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

export const lesson117Quiz: Quiz = {
  id: "quiz-11-7",
  lessonId: "lesson-11-7",
  questions: [
    {
      id: "quiz-11-7-1",
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
      id: "quiz-11-7-2",
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

export const lesson117: Lesson = {
  id: "lesson-11-7",
  moduleId: "level-11",
  slug: "security-hardening",
  title: { es: "Hardening Básico de Seguridad", en: "Basic Security Hardening" },
  description: { es: "Mejores prácticas para asegurar servidores", en: "Best practices to secure servers" },
  order: 7,
  duration: 40,
  contentBlocks: lesson117Content,
  exercises: lesson117Exercises,
  quiz: lesson117Quiz,
};
