import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson91Content: ContentBlock[] = [
  {
    id: "block-9-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Fundamentos de Redes", text: "Fundamentos de Redes — IP, subredes, puertos, protocolos TCP/UDP\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Networking Basics", text: "Networking Basics — IP, subnets, ports, TCP/UDP protocols\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-9-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Fundamentos de Redes**\n\nTCP/IP: IP + máscara + gateway; puertos identifican servicios; UDP vs TCP confiabilidad.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nip -4 addr\nss -tuln | head\n```" },
      en: { title: "Key concepts", text: "**Networking Basics**\n\nTCP/IP: IP + mask + gateway; ports identify services; UDP vs TCP reliability.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nip -4 addr\nss -tuln | head\n```" },
    },
  },
  {
    id: "block-9-1-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "ip -4 addr\nss -tuln | head", language: "bash" },
      en: { title: "Practice commands", code: "ip -4 addr\nss -tuln | head", language: "bash" },
    },
  },
  {
    id: "block-9-1-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Tabla rutas: ip route; default via gateway en la misma L2/L3." },
      en: { title: "Operational tip", text: "Routing table: ip route; default via gateway on correct L2/L3." },
    },
  },
  {
    id: "block-9-1-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson91Exercises: Exercise[] = [
  {
    id: "ex-9-1-1",
    lessonId: "lesson-9-1",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Fundamentos de Redes»?",
      en: "Which tool or idea is central to «Networking Basics»?",
    },
    options: { es: ["Solo networking basics en teoría", "Práctica de networking basics en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only networking basics in theory", "Hands-on networking basics on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica networking basics en entornos reales.",
      en: "This lesson applies networking basics in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-9-1-2",
    lessonId: "lesson-9-1",
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

export const lesson91Quiz: Quiz = {
  id: "quiz-9-1",
  lessonId: "lesson-9-1",
  questions: [
    {
      id: "quiz-9-1-1",
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
      id: "quiz-9-1-2",
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

export const lesson91: Lesson = {
  id: "lesson-9-1",
  moduleId: "level-9",
  slug: "networking-basics",
  title: { es: "Fundamentos de Redes", en: "Networking Basics" },
  description: { es: "IP, subredes, puertos, protocolos TCP/UDP", en: "IP, subnets, ports, TCP/UDP protocols" },
  order: 1,
  duration: 40,
  contentBlocks: lesson91Content,
  exercises: lesson91Exercises,
  quiz: lesson91Quiz,
};
