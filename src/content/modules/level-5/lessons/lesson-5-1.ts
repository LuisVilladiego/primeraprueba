import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson51Content: ContentBlock[] = [
  {
    id: "block-5-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: { title: "Introducción al Shell Scripting", text: "Introducción al Shell Scripting — Qué es un script, shebang, y tu primer script\n\nEn producción combinarás estos conceptos con permisos, logs y rollback. Practica en una VM antes de tocar servidores críticos." },
      en: { title: "Introduction to Shell Scripting", text: "Introduction to Shell Scripting — What is a script, shebang, and your first script\n\nIn production you combine these ideas with permissions, logs, and rollback. Practice in a VM before touching critical servers." },
    },
  },
  {
    id: "block-5-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: { title: "Conceptos clave", text: "**Introducción al Shell Scripting**\n\nUn script Bash combina shebang, permisos de ejecución y convenciones de fail-fast. En CI/CD el exit code del script decide si el pipeline continúa.\n\n| Área | Detalle |\n|------|---------|\n| Objetivo | Aplicar en servidores y CI |\n| Salida | Revisa exit code con echo $? |\n| Logs | Redirige stderr si depuras |\n\n```bash\n#!/bin/bash\nset -euo pipefail\nchmod +x deploy.sh\n./deploy.sh\n```" },
      en: { title: "Key concepts", text: "**Introduction to Shell Scripting**\n\nA Bash script combines shebang, execute permission, and fail-fast conventions. In CI/CD the script exit code gates the pipeline.\n\n| Area | Detail |\n|------|--------|\n| Goal | Apply on servers and CI |\n| Output | Check exit code with echo $? |\n| Logs | Redirect stderr when debugging |\n\n```bash\n#!/bin/bash\nset -euo pipefail\nchmod +x deploy.sh\n./deploy.sh\n```" },
    },
  },
  {
    id: "block-5-1-3",
    type: "CODE",
    order: 3,
    content: {
      es: { title: "Comandos de práctica", code: "#!/bin/bash\nset -euo pipefail\nchmod +x deploy.sh\n./deploy.sh", language: "bash" },
      en: { title: "Practice commands", code: "#!/bin/bash\nset -euo pipefail\nchmod +x deploy.sh\n./deploy.sh", language: "bash" },
    },
  },
  {
    id: "block-5-1-4",
    type: "TIP",
    order: 4,
    content: {
      es: { title: "Tip operacional", text: "Ejecuta shellcheck en cada PR; desactiva set -u temporalmente si procesas variables opcionales de entorno legacy." },
      en: { title: "Operational tip", text: "Run shellcheck on every PR; temporarily disable set -u when ingesting legacy optional env vars." },
    },
  },
  {
    id: "block-5-1-5",
    type: "WARNING",
    order: 5,
    content: {
      es: { title: "Seguridad", text: "Evita ejecutar scripts o comandos destructivos como root sin revisar. Usa `--dry-run` cuando exista y prueba en staging." },
      en: { title: "Safety", text: "Avoid running destructive scripts or commands as root without review. Use `--dry-run` when available and test in staging." },
    },
  },
];

export const lesson51Exercises: Exercise[] = [
  {
    id: "ex-5-1-1",
    lessonId: "lesson-5-1",
    slug: "core-concept",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué hace set -e?",
      en: "What does set -e do?",
    },
    options: { es: ["Ignora errores", "Sale ante comando con exit != 0", "Desactiva pipes", "Solo root"], en: ["Ignores errors", "Exit on non-zero command", "Disables pipes", "Root only"] },
    correctAnswer: "1",
    explanation: {
      es: "Fail-fast evita estados corruptos a mitad de script.",
      en: "Fail-fast avoids half-applied state.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 1,
  },
  {
    id: "ex-5-1-2",
    lessonId: "lesson-5-1",
    slug: "production-practice",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "Shebang típico para Bash",
      en: "Typical shebang for Bash",
    },
    options: { es: ["#!/bin/sh", "#!/bin/bash", "#!/python", "#!/dash"], en: ["#!/bin/sh", "#!/bin/bash", "#!/python", "#!/dash"] },
    correctAnswer: "1",
    explanation: {
      es: "Bash soporta [[ ]] y arrays.",
      en: "Bash supports [[ ]] and arrays.",
    },
    hints: { es: ["Repasa KEY_CONCEPT"], en: ["Review KEY_CONCEPT"] },
    order: 2,
  }
];

export const lesson51Quiz: Quiz = {
  id: "quiz-5-1",
  lessonId: "lesson-5-1",
  questions: [
    {
      id: "quiz-5-1-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿pipefail?",
        en: "What is pipefail?",
      },
      options: {
        es: ["Oculta stderr", "Fallo en cualquier etapa del pipe", "Cierra stdin", "Alias de set -x"],
        en: ["Hides stderr", "Failure in any pipeline stage", "Closes stdin", "Alias for set -x"],
      },
      correctAnswer: "1",
      explanation: { es: "Sin pipefail solo cuenta el último comando.", en: "Without pipefail only the last command counts." },
      points: 5,
    },
    {
      id: "quiz-5-1-2",
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

export const lesson51: Lesson = {
  id: "lesson-5-1",
  moduleId: "level-5",
  slug: "shell-scripting-intro",
  title: { es: "Introducción al Shell Scripting", en: "Introduction to Shell Scripting" },
  description: { es: "Qué es un script, shebang, y tu primer script", en: "What is a script, shebang, and your first script" },
  order: 1,
  duration: 35,
  contentBlocks: lesson51Content,
  exercises: lesson51Exercises,
  quiz: lesson51Quiz,
};
