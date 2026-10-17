import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson146Content: ContentBlock[] = [
  {
    id: "block-14-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Redes en Docker", text: "Redes en Docker — Bridge, host, overlay, port mapping\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Docker Networking", text: "Docker Networking — Bridge, host, overlay, port mapping\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-14-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Redes en Docker**\n\nbridge default; user-defined networks DNS por nombre; publish ports -p host:container.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ndocker network create appnet\ndocker run --network appnet --name api myapi\n```" },
      en: { title: "Key concepts", text: "**Docker Networking**\n\nbridge default; user-defined networks DNS by name; publish ports -p host:container.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ndocker network create appnet\ndocker run --network appnet --name api myapi\n```" },
    },
  },
  {
    id: "block-14-6-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "docker network create appnet\ndocker run --network appnet --name api myapi", language: "bash" },
      en: { title: "Practice commands", code: "docker network create appnet\ndocker run --network appnet --name api myapi", language: "bash" },
    },
  },
  {
    id: "block-14-6-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "host network mode rompe aislamiento—úsalo con cuidado." },
      en: { title: "Operational tip", text: "host network mode breaks isolation—use carefully." },
    },
  },
  {
    id: "block-14-6-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson146Exercises: Exercise[] = [
  {
    id: "ex-14-6-1",
    lessonId: "lesson-14-6",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Redes en Docker»?",
      en: "Which tool or idea is central to «Docker Networking»?",
    },
    options: { es: ["Solo docker networking en teoría", "Práctica de docker networking en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only docker networking in theory", "Hands-on docker networking on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica docker networking en entornos reales.",
      en: "This lesson applies docker networking in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-14-6-2",
    lessonId: "lesson-14-6",
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

export const lesson146Quiz: Quiz = {
  id: "quiz-14-6",
  lessonId: "lesson-14-6",
  questions: [
    {
      id: "quiz-14-6-1",
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
      id: "quiz-14-6-2",
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

export const lesson146: Lesson = {
  id: "lesson-14-6",
  moduleId: "level-14",
  slug: "docker-networking",
  title: { es: "Redes en Docker", en: "Docker Networking" },
  description: { es: "Bridge, host, overlay, port mapping", en: "Bridge, host, overlay, port mapping" },
  order: 6,
  duration: 40,
  contentBlocks: lesson146Content,
  exercises: lesson146Exercises,
  quiz: lesson146Quiz,
};
