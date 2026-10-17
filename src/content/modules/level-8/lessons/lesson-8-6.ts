import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson86Content: ContentBlock[] = [
  {
    id: "block-8-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Compilar desde Código Fuente", text: "Compilar desde Código Fuente — configure, make, make install\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Compile from Source", text: "Compile from Source — configure, make, make install\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-8-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Compilar desde Código Fuente**\n\n./configure && make && make install; check logs config.log; DESTDIR para empaquetado.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\n./configure --prefix=/usr/local\nmake -j$(nproc)\nsudo make install\n```" },
      en: { title: "Key concepts", text: "**Compile from Source**\n\n./configure && make && make install; check config.log; DESTDIR for packaging.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\n./configure --prefix=/usr/local\nmake -j$(nproc)\nsudo make install\n```" },
    },
  },
  {
    id: "block-8-6-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "./configure --prefix=/usr/local\nmake -j$(nproc)\nsudo make install", language: "bash" },
      en: { title: "Practice commands", code: "./configure --prefix=/usr/local\nmake -j$(nproc)\nsudo make install", language: "bash" },
    },
  },
  {
    id: "block-8-6-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Usa checkinstall o empaqueta para no mezclar archivos sueltos en /usr/local." },
      en: { title: "Operational tip", text: "Use checkinstall or package to avoid stray /usr/local files." },
    },
  },
  {
    id: "block-8-6-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson86Exercises: Exercise[] = [
  {
    id: "ex-8-6-1",
    lessonId: "lesson-8-6",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Compilar desde Código Fuente»?",
      en: "Which tool or idea is central to «Compile from Source»?",
    },
    options: { es: ["Solo compile from source en teoría", "Práctica de compile from source en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only compile from source in theory", "Hands-on compile from source on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica compile from source en entornos reales.",
      en: "This lesson applies compile from source in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-8-6-2",
    lessonId: "lesson-8-6",
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

export const lesson86Quiz: Quiz = {
  id: "quiz-8-6",
  lessonId: "lesson-8-6",
  questions: [
    {
      id: "quiz-8-6-1",
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
      id: "quiz-8-6-2",
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

export const lesson86: Lesson = {
  id: "lesson-8-6",
  moduleId: "level-8",
  slug: "compile-from-source",
  title: { es: "Compilar desde Código Fuente", en: "Compile from Source" },
  description: { es: "configure, make, make install", en: "configure, make, make install" },
  order: 6,
  duration: 40,
  contentBlocks: lesson86Content,
  exercises: lesson86Exercises,
  quiz: lesson86Quiz,
};
