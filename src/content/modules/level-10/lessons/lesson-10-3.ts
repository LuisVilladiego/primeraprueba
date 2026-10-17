import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson103Content: ContentBlock[] = [
  {
    id: "block-10-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Archivos de Servicio .service", text: "Archivos de Servicio .service — Crea y configura tus propios servicios\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Service Files .service", text: "Service Files .service — Create and configure your own services\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-10-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Archivos de Servicio .service**\n\nUnit files en `/etc/systemd/system`; secciones [Unit] [Service] [Install]; `ExecStart=` obligatorio. **Nginx/Apache** se gestionan igual: `systemctl enable --now nginx`, logs con `journalctl -u nginx`. Reverse proxy + TLS suele vivir en `/etc/nginx/sites-available/`.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nsudo systemctl daemon-reload\nsudo systemctl enable --now myapp.service\n```" },
      en: { title: "Key concepts", text: "**Service Files .service**\n\nUnit files under `/etc/systemd/system`; [Unit] [Service] [Install]; `ExecStart=` required. **Nginx/Apache** use the same model: `systemctl enable --now nginx`, logs via `journalctl -u nginx`. Reverse proxy + TLS usually live under `/etc/nginx/sites-available/`.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nsudo systemctl daemon-reload\nsudo systemctl enable --now myapp.service\n```" },
    },
  },
  {
    id: "block-10-3-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "sudo systemctl daemon-reload\nsudo systemctl enable --now myapp.service", language: "bash" },
      en: { title: "Practice commands", code: "sudo systemctl daemon-reload\nsudo systemctl enable --now myapp.service", language: "bash" },
    },
  },
  {
    id: "block-10-3-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Tras editar: daemon-reload siempre antes de restart." },
      en: { title: "Operational tip", text: "After edits: always daemon-reload before restart." },
    },
  },
  {
    id: "block-10-3-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson103Exercises: Exercise[] = [
  {
    id: "ex-10-3-1",
    lessonId: "lesson-10-3",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Archivos de Servicio .service»?",
      en: "Which tool or idea is central to «Service Files .service»?",
    },
    options: { es: ["Solo service files en teoría", "Práctica de service files en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only service files in theory", "Hands-on service files on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica service files en entornos reales.",
      en: "This lesson applies service files in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-10-3-2",
    lessonId: "lesson-10-3",
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

export const lesson103Quiz: Quiz = {
  id: "quiz-10-3",
  lessonId: "lesson-10-3",
  questions: [
    {
      id: "quiz-10-3-1",
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
      id: "quiz-10-3-2",
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

export const lesson103: Lesson = {
  id: "lesson-10-3",
  moduleId: "level-10",
  slug: "service-files",
  title: { es: "Archivos de Servicio .service", en: "Service Files .service" },
  description: { es: "Crea y configura tus propios servicios", en: "Create and configure your own services" },
  order: 3,
  duration: 45,
  contentBlocks: lesson103Content,
  exercises: lesson103Exercises,
  quiz: lesson103Quiz,
};
