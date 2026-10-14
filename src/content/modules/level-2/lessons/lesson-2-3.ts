import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson23Content: ContentBlock[] = [
  {
    id: "block-2-3-1",
    type: "KEY_CONCEPT",
    order: 1,
    content: {
      es: {
        title: "Enlaces duros vs simbólicos",
        text: `**Enlace duro (hard link):** otro nombre para el **mismo inodo**. No cruza sistemas de archivos ni enlaza directorios fácilmente.

**Enlace simbólico (soft link):** puntero a una **ruta**. Puede apuntar a directorios y rutas inexistentes (enlace roto).

\`\`\`bash
ln archivo.txt hard.txt      # enlace duro
ln -s /etc/nginx nginx-link  # simbólico
ls -li archivo.txt hard.txt  # mismo número de inodo
\`\`\``,
      },
      en: {
        title: "Hard links vs symbolic links",
        text: `**Hard link:** another name for the **same inode**. Cannot cross filesystems or link directories easily.

**Symbolic link (soft link):** pointer to a **path**. Can point to directories and missing paths (broken link).

\`\`\`bash
ln file.txt hard.txt         # hard link
ln -s /etc/nginx nginx-link  # symbolic
ls -li file.txt hard.txt     # same inode number
\`\`\``,
      },
    },
  },
  {
    id: "block-2-3-2",
    type: "WARNING",
    order: 2,
    content: {
      es: {
        title: "Enlaces rotos",
        text: `Si borras el destino de un enlace simbólico, el enlace queda roto. \`ls -l\` lo muestra en rojo (según terminal).

\`readlink enlace\` muestra el destino.`,
      },
      en: {
        title: "Broken links",
        text: `If you delete a symlink target, the link breaks. \`ls -l\` may show it in red (depending on terminal).

\`readlink link\` shows the target.`,
      },
    },
  },
];

export const lesson23Exercises: Exercise[] = [
  {
    id: "ex-2-3-1",
    lessonId: "lesson-2-3",
    slug: "create-symlink",
    type: "COMMAND_COMPLETION",
    question: {
      es: "Crea un enlace simbólico llamado 'conf' que apunte a /etc/hosts",
      en: "Create a symbolic link named 'conf' pointing to /etc/hosts",
    },
    correctAnswer: "ln -s /etc/hosts conf",
    explanation: {
      es: "ln -s crea enlaces simbólicos; el orden es destino luego nombre del enlace.",
      en: "ln -s creates symbolic links; order is target then link name.",
    },
    hints: { es: ["Usa ln -s"], en: ["Use ln -s"] },
    order: 1,
  },
];

export const lesson23Quiz: Quiz = {
  id: "quiz-2-3",
  lessonId: "lesson-2-3",
  questions: [
    {
      id: "quiz-2-3-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué comparte un enlace duro con el archivo original?",
        en: "What does a hard link share with the original file?",
      },
      options: {
        es: ["Solo el nombre", "El mismo inodo", "Solo permisos", "Nada"],
        en: ["Only the name", "The same inode", "Only permissions", "Nothing"],
      },
      correctAnswer: "1",
      explanation: {
        es: "Varios nombres pueden referir el mismo inodo; el espacio se libera cuando no quedan enlaces.",
        en: "Multiple names can refer to the same inode; space is freed when no links remain.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson23: Lesson = {
  id: "lesson-2-3",
  moduleId: "level-2",
  slug: "links-hard-soft",
  title: {
    es: "Enlaces Duros y Simbólicos",
    en: "Hard and Symbolic Links",
  },
  description: {
    es: "Domina ln, inodos y cuándo usar cada tipo de enlace.",
    en: "Master ln, inodes, and when to use each link type.",
  },
  order: 3,
  duration: 35,
  contentBlocks: lesson23Content,
  exercises: lesson23Exercises,
  quiz: lesson23Quiz,
};
