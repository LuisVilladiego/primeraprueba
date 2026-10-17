import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson93Content: ContentBlock[] = [
  {
    id: "block-9-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Herramientas de Conectividad: ping, traceroute", text: "Herramientas de Conectividad: ping, traceroute — Diagnostica problemas de conectividad\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Connectivity Tools: ping, traceroute", text: "Connectivity Tools: ping, traceroute — Diagnose connectivity problems\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-9-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Herramientas de Conectividad: ping, traceroute**\n\nping ICMP reachability; traceroute/tracepath muestra hops; mtr combina ambos interactivo.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nping -c 4 1.1.1.1\ntraceroute example.com\n```" },
      en: { title: "Key concepts", text: "**Connectivity Tools: ping, traceroute**\n\nping ICMP reachability; traceroute/tracepath shows hops; mtr combines interactively.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nping -c 4 1.1.1.1\ntraceroute example.com\n```" },
    },
  },
  {
    id: "block-9-3-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "ping -c 4 1.1.1.1\ntraceroute example.com", language: "bash" },
      en: { title: "Practice commands", code: "ping -c 4 1.1.1.1\ntraceroute example.com", language: "bash" },
    },
  },
  {
    id: "block-9-3-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Firewall puede bloquear ICMP pero TCP/443 aún funciona—no confíes solo en ping." },
      en: { title: "Operational tip", text: "Firewalls may block ICMP while TCP/443 works—do not rely on ping alone." },
    },
  },
  {
    id: "block-9-3-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson93Exercises: Exercise[] = [
  {
    id: "ex-9-3-1",
    lessonId: "lesson-9-3",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Herramientas de Conectividad: ping, traceroute»?",
      en: "Which tool or idea is central to «Connectivity Tools: ping, traceroute»?",
    },
    options: { es: ["Solo connectivity tools en teoría", "Práctica de connectivity tools en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only connectivity tools in theory", "Hands-on connectivity tools on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica connectivity tools en entornos reales.",
      en: "This lesson applies connectivity tools in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-9-3-2",
    lessonId: "lesson-9-3",
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

export const lesson93Quiz: Quiz = {
  id: "quiz-9-3",
  lessonId: "lesson-9-3",
  questions: [
    {
      id: "quiz-9-3-1",
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
      id: "quiz-9-3-2",
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

export const lesson93: Lesson = {
  id: "lesson-9-3",
  moduleId: "level-9",
  slug: "connectivity-tools",
  title: { es: "Herramientas de Conectividad: ping, traceroute", en: "Connectivity Tools: ping, traceroute" },
  description: { es: "Diagnostica problemas de conectividad", en: "Diagnose connectivity problems" },
  order: 3,
  duration: 30,
  contentBlocks: lesson93Content,
  exercises: lesson93Exercises,
  quiz: lesson93Quiz,
};
