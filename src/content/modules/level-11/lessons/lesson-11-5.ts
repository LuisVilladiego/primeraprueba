import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson115Content: ContentBlock[] = [
  {
    id: "block-11-5-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "SSH Tunneling y Port Forwarding", text: "SSH Tunneling y Port Forwarding — Crea túneles seguros para acceder a servicios\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "SSH Tunneling and Port Forwarding", text: "SSH Tunneling and Port Forwarding — Create secure tunnels to access services\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-11-5-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**SSH Tunneling y Port Forwarding**\n\n-L local forward; -R remote reverse; -D SOCKS proxy; -N no command solo tunnel.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nssh -L 8080:localhost:80 user@bastion\nssh -D 1080 user@host  # SOCKS\n```" },
      en: { title: "Key concepts", text: "**SSH Tunneling and Port Forwarding**\n\n-L local forward; -R remote reverse; -D SOCKS proxy; -N no command tunnel only.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nssh -L 8080:localhost:80 user@bastion\nssh -D 1080 user@host  # SOCKS\n```" },
    },
  },
  {
    id: "block-11-5-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "ssh -L 8080:localhost:80 user@bastion\nssh -D 1080 user@host  # SOCKS", language: "bash" },
      en: { title: "Practice commands", code: "ssh -L 8080:localhost:80 user@bastion\nssh -D 1080 user@host  # SOCKS", language: "bash" },
    },
  },
  {
    id: "block-11-5-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "GatewayPorts y AllowTcpForwarding controlan hardening servidor." },
      en: { title: "Operational tip", text: "GatewayPorts and AllowTcpForwarding control server hardening." },
    },
  },
  {
    id: "block-11-5-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson115Exercises: Exercise[] = [
  {
    id: "ex-11-5-1",
    lessonId: "lesson-11-5",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «SSH Tunneling y Port Forwarding»?",
      en: "Which tool or idea is central to «SSH Tunneling and Port Forwarding»?",
    },
    options: { es: ["Solo ssh tunneling en teoría", "Práctica de ssh tunneling en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only ssh tunneling in theory", "Hands-on ssh tunneling on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica ssh tunneling en entornos reales.",
      en: "This lesson applies ssh tunneling in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-11-5-2",
    lessonId: "lesson-11-5",
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

export const lesson115Quiz: Quiz = {
  id: "quiz-11-5",
  lessonId: "lesson-11-5",
  questions: [
    {
      id: "quiz-11-5-1",
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
      id: "quiz-11-5-2",
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

export const lesson115: Lesson = {
  id: "lesson-11-5",
  moduleId: "level-11",
  slug: "ssh-tunneling",
  title: { es: "SSH Tunneling y Port Forwarding", en: "SSH Tunneling and Port Forwarding" },
  description: { es: "Crea túneles seguros para acceder a servicios", en: "Create secure tunnels to access services" },
  order: 5,
  duration: 40,
  contentBlocks: lesson115Content,
  exercises: lesson115Exercises,
  quiz: lesson115Quiz,
};
