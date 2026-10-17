import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson116Content: ContentBlock[] = [
  {
    id: "block-11-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Firewall: iptables y ufw", text: "Firewall: iptables y ufw — Controla el tráfico de red con reglas de firewall\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Firewall: iptables and ufw", text: "Firewall: iptables and ufw — Control network traffic with firewall rules\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-11-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Firewall: iptables y ufw**\n\nufw/nftables/iptables capas; allow/deny por puerto; default deny inbound es baseline.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nsudo ufw allow OpenSSH\nsudo ufw enable\nsudo ufw status verbose\n```" },
      en: { title: "Key concepts", text: "**Firewall: iptables and ufw**\n\nufw/nftables/iptables layers; allow/deny by port; default deny inbound baseline.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nsudo ufw allow OpenSSH\nsudo ufw enable\nsudo ufw status verbose\n```" },
    },
  },
  {
    id: "block-11-6-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "sudo ufw allow OpenSSH\nsudo ufw enable\nsudo ufw status verbose", language: "bash" },
      en: { title: "Practice commands", code: "sudo ufw allow OpenSSH\nsudo ufw enable\nsudo ufw status verbose", language: "bash" },
    },
  },
  {
    id: "block-11-6-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Abre solo lo necesario; documenta reglas en infra-as-code." },
      en: { title: "Operational tip", text: "Open only what's needed; document rules in infra-as-code." },
    },
  },
  {
    id: "block-11-6-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson116Exercises: Exercise[] = [
  {
    id: "ex-11-6-1",
    lessonId: "lesson-11-6",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Firewall: iptables y ufw»?",
      en: "Which tool or idea is central to «Firewall: iptables and ufw»?",
    },
    options: { es: ["Solo firewall basics en teoría", "Práctica de firewall basics en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only firewall basics in theory", "Hands-on firewall basics on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica firewall basics en entornos reales.",
      en: "This lesson applies firewall basics in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-11-6-2",
    lessonId: "lesson-11-6",
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

export const lesson116Quiz: Quiz = {
  id: "quiz-11-6",
  lessonId: "lesson-11-6",
  questions: [
    {
      id: "quiz-11-6-1",
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
      id: "quiz-11-6-2",
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

export const lesson116: Lesson = {
  id: "lesson-11-6",
  moduleId: "level-11",
  slug: "firewall-basics",
  title: { es: "Firewall: iptables y ufw", en: "Firewall: iptables and ufw" },
  description: { es: "Controla el tráfico de red con reglas de firewall", en: "Control network traffic with firewall rules" },
  order: 6,
  duration: 45,
  contentBlocks: lesson116Content,
  exercises: lesson116Exercises,
  quiz: lesson116Quiz,
};
