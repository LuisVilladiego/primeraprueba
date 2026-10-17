import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson157Content: ContentBlock[] = [
  {
    id: "block-15-7-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Volúmenes y Almacenamiento", text: "Volúmenes y Almacenamiento — PersistentVolumes, PersistentVolumeClaims, StorageClasses\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Volumes and Storage", text: "Volumes and Storage — PersistentVolumes, PersistentVolumeClaims, StorageClasses\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-15-7-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Volúmenes y Almacenamiento**\n\nPVC requests storage class; PV provisioner; StatefulSet stable network ID + volumes.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\nkubectl get pvc\nkubectl describe pv\n```" },
      en: { title: "Key concepts", text: "**Volumes and Storage**\n\nPVC requests storage class; PV provisioner; StatefulSet stable network ID + volumes.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\nkubectl get pvc\nkubectl describe pv\n```" },
    },
  },
  {
    id: "block-15-7-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "kubectl get pvc\nkubectl describe pv", language: "bash" },
      en: { title: "Practice commands", code: "kubectl get pvc\nkubectl describe pv", language: "bash" },
    },
  },
  {
    id: "block-15-7-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Revisa access modes RWO vs RWX antes de apps multi-writer." },
      en: { title: "Operational tip", text: "Check RWO vs RWX access modes before multi-writer apps." },
    },
  },
  {
    id: "block-15-7-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson157Exercises: Exercise[] = [
  {
    id: "ex-15-7-1",
    lessonId: "lesson-15-7",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué herramienta o idea es central en «Volúmenes y Almacenamiento»?",
      en: "Which tool or idea is central to «Volumes and Storage»?",
    },
    options: { es: ["Solo volumes storage en teoría", "Práctica de volumes storage en shell/Linux", "Compilar kernel", "Formatear disco"], en: ["Only volumes storage in theory", "Hands-on volumes storage on Linux/shell", "Build kernel", "Format disk"] },
    correctAnswer: "1",
    explanation: {
      es: "La lección aplica volumes storage en entornos reales.",
      en: "This lesson applies volumes storage in real environments.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-15-7-2",
    lessonId: "lesson-15-7",
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

export const lesson157Quiz: Quiz = {
  id: "quiz-15-7",
  lessonId: "lesson-15-7",
  questions: [
    {
      id: "quiz-15-7-1",
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
      id: "quiz-15-7-2",
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

export const lesson157: Lesson = {
  id: "lesson-15-7",
  moduleId: "level-15",
  slug: "volumes-storage",
  title: { es: "Volúmenes y Almacenamiento", en: "Volumes and Storage" },
  description: { es: "PersistentVolumes, PersistentVolumeClaims, StorageClasses", en: "PersistentVolumes, PersistentVolumeClaims, StorageClasses" },
  order: 7,
  duration: 40,
  contentBlocks: lesson157Content,
  exercises: lesson157Exercises,
  quiz: lesson157Quiz,
};
