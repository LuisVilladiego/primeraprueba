import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson145Content: ContentBlock[] = [
  {
    id: "block-14-5-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Volúmenes y Persistencia", text: "Volúmenes y Persistencia — Volumes, bind mounts, tmpfs\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Volumes and Persistence", text: "Volumes and Persistence — Volumes, bind mounts, tmpfs\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-14-5-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Volúmenes y Persistencia**\n\nVolumes managed vs bind mounts; datos fuera del container writable layer; backup volumen aparte.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\ndocker volume create pgdata\ndocker run -v pgdata:/var/lib/postgresql/data postgres\n```" },
      en: { title: "Key concepts", text: "**Volumes and Persistence**\n\nManaged volumes vs bind mounts; data outside container writable layer; backup volumes separately.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\ndocker volume create pgdata\ndocker run -v pgdata:/var/lib/postgresql/data postgres\n```" },
    },
  },
  {
    id: "block-14-5-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "docker volume create pgdata\ndocker run -v pgdata:/var/lib/postgresql/data postgres", language: "bash" },
      en: { title: "Practice commands", code: "docker volume create pgdata\ndocker run -v pgdata:/var/lib/postgresql/data postgres", language: "bash" },
    },
  },
  {
    id: "block-14-5-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Named volumes sobreviven docker rm container." },
      en: { title: "Operational tip", text: "Named volumes survive docker rm container." },
    },
  },
  {
    id: "block-14-5-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson145Exercises: Exercise[] = [
  {
    id: "ex-14-5-1",
    lessonId: "lesson-14-5",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Volúmenes y Persistencia»?",
      en: "Which tool or idea is central to «Volumes and Persistence»?",
    },
    options: { es: ["Solo docker volumes en teoría", "Práctica de docker volumes en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only docker volumes in theory", "Hands-on docker volumes on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica docker volumes en entornos reales.",
      en: "This lesson applies docker volumes in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-14-5-2",
    lessonId: "lesson-14-5",
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

export const lesson145Quiz: Quiz = {
  id: "quiz-14-5",
  lessonId: "lesson-14-5",
  questions: [
    {
      id: "quiz-14-5-1",
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
      id: "quiz-14-5-2",
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

export const lesson145: Lesson = {
  id: "lesson-14-5",
  moduleId: "level-14",
  slug: "docker-volumes",
  title: { es: "Volúmenes y Persistencia", en: "Volumes and Persistence" },
  description: { es: "Volumes, bind mounts, tmpfs", en: "Volumes, bind mounts, tmpfs" },
  order: 5,
  duration: 35,
  contentBlocks: lesson145Content,
  exercises: lesson145Exercises,
  quiz: lesson145Quiz,
};
