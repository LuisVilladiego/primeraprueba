import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson113Content: ContentBlock[] = [
  {
    id: "block-11-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Configuración de SSH", text: "Configuración de SSH — ~/.ssh/config y /etc/ssh/sshd_config\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "SSH Configuration", text: "SSH Configuration — ~/.ssh/config and /etc/ssh/sshd_config\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-11-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Configuración de SSH**\n\n~/.ssh/config Host aliases, IdentityFile, ProxyJump bastion, StrictHostKeyChecking policy.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nHost prod\n  HostName 10.0.0.10\n  User deploy\n  IdentityFile ~/.ssh/id_ed25519\n```" },
      en: { title: "Key concepts", text: "**SSH Configuration**\n\n~/.ssh/config Host aliases, IdentityFile, ProxyJump bastion, StrictHostKeyChecking policy.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nHost prod\n  HostName 10.0.0.10\n  User deploy\n  IdentityFile ~/.ssh/id_ed25519\n```" },
    },
  },
  {
    id: "block-11-3-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "Host prod\n  HostName 10.0.0.10\n  User deploy\n  IdentityFile ~/.ssh/id_ed25519", language: "bash" },
      en: { title: "Practice commands", code: "Host prod\n  HostName 10.0.0.10\n  User deploy\n  IdentityFile ~/.ssh/id_ed25519", language: "bash" },
    },
  },
  {
    id: "block-11-3-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Match blocks aplican reglas por host pattern." },
      en: { title: "Operational tip", text: "Match blocks apply rules by host pattern." },
    },
  },
  {
    id: "block-11-3-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson113Exercises: Exercise[] = [
  {
    id: "ex-11-3-1",
    lessonId: "lesson-11-3",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Configuración de SSH»?",
      en: "Which tool or idea is central to «SSH Configuration»?",
    },
    options: { es: ["Solo ssh config en teoría", "Práctica de ssh config en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only ssh config in theory", "Hands-on ssh config on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica ssh config en entornos reales.",
      en: "This lesson applies ssh config in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-11-3-2",
    lessonId: "lesson-11-3",
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

export const lesson113Quiz: Quiz = {
  id: "quiz-11-3",
  lessonId: "lesson-11-3",
  questions: [
    {
      id: "quiz-11-3-1",
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
      id: "quiz-11-3-2",
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

export const lesson113: Lesson = {
  id: "lesson-11-3",
  moduleId: "level-11",
  slug: "ssh-config",
  title: { es: "Configuración de SSH", en: "SSH Configuration" },
  description: { es: "~/.ssh/config y /etc/ssh/sshd_config", en: "~/.ssh/config and /etc/ssh/sshd_config" },
  order: 3,
  duration: 35,
  contentBlocks: lesson113Content,
  exercises: lesson113Exercises,
  quiz: lesson113Quiz,
};
