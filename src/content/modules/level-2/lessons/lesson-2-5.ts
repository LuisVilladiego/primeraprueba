import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson25Content: ContentBlock[] = [
  {
    id: "block-2-5-1",
    type: "KEY_CONCEPT",
    order: 1,
    content: {
      es: {
        title: "df vs du",
        text: `**df** — espacio en **sistemas de archivos montados** (particiones):

\`\`\`bash
df -h              # human-readable
df -h /            # solo raíz
\`\`\`

**du** — espacio usado por **directorios/archivos**:

\`\`\`bash
du -sh /var/log    # resumen de un path
du -h --max-depth=1 ~   # por subcarpeta en home
\`\`\`

Regla: df para “¿me quedo sin disco?”; du para “¿qué carpeta pesa?”`,
      },
      en: {
        title: "df vs du",
        text: `**df** — space on **mounted filesystems** (partitions):

\`\`\`bash
df -h              # human-readable
df -h /            # root only
\`\`\`

**du** — space used by **directories/files**:

\`\`\`bash
du -sh /var/log    # summary for a path
du -h --max-depth=1 ~   # per subfolder in home
\`\`\`

Rule: df for “running out of disk?”; du for “which folder is heavy?”`,
      },
    },
  },
];

export const lesson25Exercises: Exercise[] = [
  {
    id: "ex-2-5-1",
    lessonId: "lesson-2-5",
    slug: "disk-free",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué comando muestra espacio libre en particiones montadas?",
      en: "Which command shows free space on mounted partitions?",
    },
    options: {
      es: ["du", "df", "free", "ls -lh"],
      en: ["du", "df", "free", "ls -lh"],
    },
    correctAnswer: "1",
    explanation: {
      es: "df (disk free) reporta uso por filesystem; du mide directorios.",
      en: "df (disk free) reports usage per filesystem; du measures directories.",
    },
    hints: { es: ["free es para RAM"], en: ["free is for RAM"] },
    order: 1,
  },
];

export const lesson25Quiz: Quiz = {
  id: "quiz-2-5",
  lessonId: "lesson-2-5",
  questions: [
    {
      id: "quiz-2-5-1",
      type: "COMMAND_COMPLETION",
      question: {
        es: "Muestra el tamaño total del directorio actual en formato legible.",
        en: "Show total size of the current directory in human-readable form.",
      },
      correctAnswer: "du -sh .",
      explanation: {
        es: "-s resume; -h usa KB/MB/GB.",
        en: "-s summarizes; -h uses KB/MB/GB.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson25: Lesson = {
  id: "lesson-2-5",
  moduleId: "level-2",
  slug: "disk-usage",
  title: {
    es: "Uso de Disco: df, du",
    en: "Disk Usage: df, du",
  },
  description: {
    es: "Monitorea espacio en disco y el tamaño de directorios.",
    en: "Monitor disk space and directory sizes.",
  },
  order: 5,
  duration: 30,
  contentBlocks: lesson25Content,
  exercises: lesson25Exercises,
  quiz: lesson25Quiz,
};
