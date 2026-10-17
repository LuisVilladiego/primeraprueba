import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson97Content: ContentBlock[] = [
  {
    id: "block-9-7-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Archivos de Configuración de Red", text: "Archivos de Configuración de Red — /etc/hosts, /etc/resolv.conf, netplan\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Network Configuration Files", text: "Network Configuration Files — /etc/hosts, /etc/resolv.conf, netplan\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-9-7-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Archivos de Configuración de Red**\n\n/etc/resolv.conf nameservers; /etc/hosts overrides; netplan YAML en Ubuntu server.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ncat /etc/resolv.conf\ncat /etc/hosts\n```" },
      en: { title: "Key concepts", text: "**Network Configuration Files**\n\n/etc/resolv.conf nameservers; /etc/hosts overrides; netplan YAML on Ubuntu server.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ncat /etc/resolv.conf\ncat /etc/hosts\n```" },
    },
  },
  {
    id: "block-9-7-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "cat /etc/resolv.conf\ncat /etc/hosts", language: "bash" },
      en: { title: "Practice commands", code: "cat /etc/resolv.conf\ncat /etc/hosts", language: "bash" },
    },
  },
  {
    id: "block-9-7-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "systemd-resolved puede ser stub—lee man resolved.conf antes de editar." },
      en: { title: "Operational tip", text: "systemd-resolved may stub—read resolved.conf before editing." },
    },
  },
  {
    id: "block-9-7-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson97Exercises: Exercise[] = [
  {
    id: "ex-9-7-1",
    lessonId: "lesson-9-7",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Archivos de Configuración de Red»?",
      en: "Which tool or idea is central to «Network Configuration Files»?",
    },
    options: { es: ["Solo network config files en teoría", "Práctica de network config files en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only network config files in theory", "Hands-on network config files on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica network config files en entornos reales.",
      en: "This lesson applies network config files in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-9-7-2",
    lessonId: "lesson-9-7",
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

export const lesson97Quiz: Quiz = {
  id: "quiz-9-7",
  lessonId: "lesson-9-7",
  questions: [
    {
      id: "quiz-9-7-1",
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
      id: "quiz-9-7-2",
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

export const lesson97: Lesson = {
  id: "lesson-9-7",
  moduleId: "level-9",
  slug: "network-config-files",
  title: { es: "Archivos de Configuración de Red", en: "Network Configuration Files" },
  description: { es: "/etc/hosts, /etc/resolv.conf, netplan", en: "/etc/hosts, /etc/resolv.conf, netplan" },
  order: 7,
  duration: 30,
  contentBlocks: lesson97Content,
  exercises: lesson97Exercises,
  quiz: lesson97Quiz,
};
