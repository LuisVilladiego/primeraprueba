import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson92Content: ContentBlock[] = [
  {
    id: "block-9-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Interfaces de Red: ip, ifconfig", text: "Interfaces de Red: ip, ifconfig — Configura y administra interfaces de red\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Network Interfaces: ip, ifconfig", text: "Network Interfaces: ip, ifconfig — Configure and manage network interfaces\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-9-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Interfaces de Red: ip, ifconfig**\n\nip link/addr/route reemplaza ifconfig en modern Linux; nombres predictivos enp0s3.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nip link show\nsudo ip addr add 10.0.0.5/24 dev eth0\n```" },
      en: { title: "Key concepts", text: "**Network Interfaces: ip, ifconfig**\n\nip link/addr/route replaces ifconfig on modern Linux; predictable names enp0s3.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nip link show\nsudo ip addr add 10.0.0.5/24 dev eth0\n```" },
    },
  },
  {
    id: "block-9-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "ip link show\nsudo ip addr add 10.0.0.5/24 dev eth0", language: "bash" },
      en: { title: "Practice commands", code: "ip link show\nsudo ip addr add 10.0.0.5/24 dev eth0", language: "bash" },
    },
  },
  {
    id: "block-9-2-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Cambios con ip son volátiles hasta netplan/NetworkManager persista." },
      en: { title: "Operational tip", text: "ip changes are volatile until netplan/NetworkManager persists." },
    },
  },
  {
    id: "block-9-2-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson92Exercises: Exercise[] = [
  {
    id: "ex-9-2-1",
    lessonId: "lesson-9-2",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Interfaces de Red: ip, ifconfig»?",
      en: "Which tool or idea is central to «Network Interfaces: ip, ifconfig»?",
    },
    options: { es: ["Solo network interfaces en teoría", "Práctica de network interfaces en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only network interfaces in theory", "Hands-on network interfaces on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica network interfaces en entornos reales.",
      en: "This lesson applies network interfaces in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-9-2-2",
    lessonId: "lesson-9-2",
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

export const lesson92Quiz: Quiz = {
  id: "quiz-9-2",
  lessonId: "lesson-9-2",
  questions: [
    {
      id: "quiz-9-2-1",
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
      id: "quiz-9-2-2",
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

export const lesson92: Lesson = {
  id: "lesson-9-2",
  moduleId: "level-9",
  slug: "network-interfaces",
  title: { es: "Interfaces de Red: ip, ifconfig", en: "Network Interfaces: ip, ifconfig" },
  description: { es: "Configura y administra interfaces de red", en: "Configure and manage network interfaces" },
  order: 2,
  duration: 35,
  contentBlocks: lesson92Content,
  exercises: lesson92Exercises,
  quiz: lesson92Quiz,
};
