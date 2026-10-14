import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson22Content: ContentBlock[] = [
  {
    id: "block-2-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Tipos de archivos en Linux",
        text: `Con \`ls -l\`, el **primer carácter** indica el tipo:

| Char | Tipo |
|------|------|
| \`-\` | Archivo regular |
| \`d\` | Directorio |
| \`l\` | Enlace simbólico |
| \`b\` / \`c\` | Dispositivo bloque / carácter |
| \`p\` | Tubería (pipe) |
| \`s\` | Socket |

\`\`\`bash
ls -l /dev/null    # crw-...
ls -ld /etc        # drwx...
\`\`\``,
      },
      en: {
        title: "File types in Linux",
        text: `With \`ls -l\`, the **first character** shows the type:

| Char | Type |
|------|------|
| \`-\` | Regular file |
| \`d\` | Directory |
| \`l\` | Symbolic link |
| \`b\` / \`c\` | Block / character device |
| \`p\` | Named pipe |
| \`s\` | Socket |

\`\`\`bash
ls -l /dev/null    # crw-...
ls -ld /etc        # drwx...
\`\`\``,
      },
    },
  },
  {
    id: "block-2-2-2",
    type: "TIP",
    order: 2,
    content: {
      es: {
        title: "Comando file",
        text: `La extensión no define el tipo real. Usa \`file\`:

\`\`\`bash
file documento.pdf
file script.sh
file /bin/ls
\`\`\`

Detecta MIME, ejecutables, enlaces, etc.`,
      },
      en: {
        title: "The file command",
        text: `Extensions don't define the real type. Use \`file\`:

\`\`\`bash
file document.pdf
file script.sh
file /bin/ls
\`\`\`

It detects MIME, executables, links, and more.`,
      },
    },
  },
];

export const lesson22Exercises: Exercise[] = [
  {
    id: "ex-2-2-1",
    lessonId: "lesson-2-2",
    slug: "symlink-char",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué letra en ls -l indica un enlace simbólico?",
      en: "Which letter in ls -l indicates a symbolic link?",
    },
    options: {
      es: ["s", "l", "d", "-"],
      en: ["s", "l", "d", "-"],
    },
    correctAnswer: "1",
    explanation: {
      es: "La 'l' (link) marca enlaces simbólicos; 'd' es directorio.",
      en: "'l' (link) marks symbolic links; 'd' is directory.",
    },
    hints: { es: ["No confundir con socket (s)"], en: ["Don't confuse with socket (s)"] },
    order: 1,
  },
];

export const lesson22Quiz: Quiz = {
  id: "quiz-2-2",
  lessonId: "lesson-2-2",
  questions: [
    {
      id: "quiz-2-2-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué comando determina el tipo real de un archivo?",
        en: "Which command determines a file's real type?",
      },
      options: {
        es: ["type", "file", "stat", "mime"],
        en: ["type", "file", "stat", "mime"],
      },
      correctAnswer: "1",
      explanation: {
        es: "file inspecciona el contenido, no solo el nombre.",
        en: "file inspects content, not just the name.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson22: Lesson = {
  id: "lesson-2-2",
  moduleId: "level-2",
  slug: "file-types",
  title: {
    es: "Tipos de Archivos en Linux",
    en: "File Types in Linux",
  },
  description: {
    es: "Archivos regulares, directorios, enlaces, dispositivos y más.",
    en: "Regular files, directories, links, devices, and more.",
  },
  order: 2,
  duration: 30,
  contentBlocks: lesson22Content,
  exercises: lesson22Exercises,
  quiz: lesson22Quiz,
};
