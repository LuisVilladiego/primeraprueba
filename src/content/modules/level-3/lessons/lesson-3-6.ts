import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson36Content: ContentBlock[] = [
  {
    id: "block-3-6-1",
    type: "KEY_CONCEPT",
    order: 1,
    content: {
      es: {
        title: "umask",
        text: `\`umask\` define qué bits **quitar** al crear archivos:

- Default archivos: **666**
- Default directorios: **777**
- Permiso final = default **menos** umask

\`\`\`bash
umask          # ej. 0022
umask 027        # más restrictivo para otros
touch f && ls -l f   # 644 con umask 022
mkdir d && ls -ld d  # 755 con umask 022
\`\`\`

Persistencia: \`~/.bashrc\`, \`/etc/profile\`.`,
      },
      en: {
        title: "umask",
        text: `\`umask\` sets which bits to **mask off** when creating files:

- Default files: **666**
- Default directories: **777**
- Final mode = default **minus** umask

\`\`\`bash
umask          # e.g. 0022
umask 027        # more restrictive for others
touch f && ls -l f   # 644 with umask 022
mkdir d && ls -ld d  # 755 with umask 022
\`\`\`

Persistence: \`~/.bashrc\`, \`/etc/profile\`.`,
      },
    },
  },
  {
    id: "block-3-6-2",
    type: "TIP",
    order: 2,
    content: {
      es: {
        title: "Calcular permisos",
        text: `umask 022 → archivos 666-022=644, dirs 777-022=755

umask 077 → solo propietario (600 / 700)

En scripts: \`umask 077\` antes de crear secretos.`,
      },
      en: {
        title: "Calculate permissions",
        text: `umask 022 → files 666-022=644, dirs 777-022=755

umask 077 → owner only (600 / 700)

In scripts: \`umask 077\` before creating secrets.`,
      },
    },
  },
];

export const lesson36Exercises: Exercise[] = [
  {
    id: "ex-3-6-1",
    lessonId: "lesson-3-6",
    slug: "umask-result",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "Con umask 022, ¿permiso típico de archivo nuevo?",
      en: "With umask 022, typical new file permission?",
    },
    options: {
      es: ["755", "644", "600", "777"],
      en: ["755", "644", "600", "777"],
    },
    correctAnswer: "1",
    explanation: {
      es: "666 - 022 = 644.",
      en: "666 - 022 = 644.",
    },
    hints: { es: ["Resta de 666"], en: ["Subtract from 666"] },
    order: 1,
  },
];

export const lesson36Quiz: Quiz = {
  id: "quiz-3-6",
  lessonId: "lesson-3-6",
  questions: [
    {
      id: "quiz-3-6-1",
      type: "TRUE_FALSE",
      question: {
        es: "umask resta permisos del valor por defecto al crear archivos.",
        en: "umask subtracts permissions from the default when creating files.",
      },
      correctAnswer: "true",
      explanation: {
        es: "No establece el modo directamente; enmascara bits.",
        en: "It masks bits rather than setting mode directly.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson36: Lesson = {
  id: "lesson-3-6",
  moduleId: "level-3",
  slug: "umask",
  title: {
    es: "Permisos por Defecto: umask",
    en: "Default Permissions: umask",
  },
  description: {
    es: "Configura los permisos predeterminados para nuevos archivos.",
    en: "Configure default permissions for new files.",
  },
  order: 6,
  duration: 25,
  contentBlocks: lesson36Content,
  exercises: lesson36Exercises,
  quiz: lesson36Quiz,
};
