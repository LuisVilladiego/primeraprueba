import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson24Content: ContentBlock[] = [
  {
    id: "block-2-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "stat y metadata",
        text: `\`stat\` muestra inodo, tamaño, permisos, fechas de acceso/modificación y más:

\`\`\`bash
stat /etc/passwd
stat -c '%n %s bytes' *.txt   # formato personalizado
\`\`\`

Complementa a \`ls -l\` con detalle completo en una sola salida.`,
      },
      en: {
        title: "stat and metadata",
        text: `\`stat\` shows inode, size, permissions, access/modify times, and more:

\`\`\`bash
stat /etc/passwd
stat -c '%n %s bytes' *.txt   # custom format
\`\`\`

It complements \`ls -l\` with full detail in one view.`,
      },
    },
  },
  {
    id: "block-2-4-2",
    type: "TIP",
    order: 2,
    content: {
      es: {
        title: "Tres fechas importantes",
        text: `- **atime**: último acceso (lectura)
- **mtime**: último cambio de contenido
- **ctime**: cambio de metadata (permisos, propietario)

\`touch\` puede actualizar atime/mtime; útil para pruebas y builds.`,
      },
      en: {
        title: "Three important timestamps",
        text: `- **atime**: last access (read)
- **mtime**: last content change
- **ctime**: metadata change (permissions, owner)

\`touch\` can update atime/mtime; useful for tests and builds.`,
      },
    },
  },
];

export const lesson24Exercises: Exercise[] = [
  {
    id: "ex-2-4-1",
    lessonId: "lesson-2-4",
    slug: "inode-number",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué opción de ls muestra el número de inodo?",
      en: "Which ls option shows the inode number?",
    },
    options: {
      es: ["-l", "-i", "-a", "-h"],
      en: ["-l", "-i", "-a", "-h"],
    },
    correctAnswer: "1",
    explanation: {
      es: "ls -i lista el inodo junto al nombre; útil con enlaces duros.",
      en: "ls -i lists inode with name; useful with hard links.",
    },
    hints: { es: ["i = inode"], en: ["i = inode"] },
    order: 1,
  },
];

export const lesson24Quiz: Quiz = {
  id: "quiz-2-4",
  lessonId: "lesson-2-4",
  questions: [
    {
      id: "quiz-2-4-1",
      type: "TRUE_FALSE",
      question: {
        es: "mtime cambia cuando modificas el contenido del archivo.",
        en: "mtime changes when you modify file content.",
      },
      correctAnswer: "true",
      explanation: {
        es: "mtime (modification time) refleja cambios en los datos del archivo.",
        en: "mtime (modification time) reflects changes to file data.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson24: Lesson = {
  id: "lesson-2-4",
  moduleId: "level-2",
  slug: "file-metadata",
  title: {
    es: "Metadata de Archivos: stat, file",
    en: "File Metadata: stat, file",
  },
  description: {
    es: "Inspecciona inodos, tamaños y fechas con stat y file.",
    en: "Inspect inodes, sizes, and timestamps with stat and file.",
  },
  order: 4,
  duration: 25,
  contentBlocks: lesson24Content,
  exercises: lesson24Exercises,
  quiz: lesson24Quiz,
};
