import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson32Content: ContentBlock[] = [
  {
    id: "block-3-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "chmod",
        text: `\`chmod\` cambia permisos. Dos estilos:

1. **Simbólico:** \`chmod u+x,g-w,o=r\`
2. **Octal:** \`chmod 644 archivo\`

Solo el propietario o root pueden cambiar permisos (salvo capacidades especiales).`,
      },
      en: {
        title: "chmod",
        text: `\`chmod\` changes permissions. Two styles:

1. **Symbolic:** \`chmod u+x,g-w,o=r\`
2. **Octal:** \`chmod 644 file\`

Only the owner or root can change permissions (except special capabilities).`,
      },
    },
  },
  {
    id: "block-3-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "Modo simbólico",
        text: `| Símbolo | Significado |
|---------|-------------|
| u,g,o,a | user, group, others, all |
| +,-,= | agregar, quitar, asignar exacto |
| r,w,x | permisos |

\`\`\`bash
chmod a+x script.sh      # ejecutable para todos
chmod o-rwx secreto.txt  # quitar todo a otros
chmod u=rw,go=r file     # rw-r--r--
chmod -R g+w proyecto/   # recursivo en directorio
\`\`\``,
      },
      en: {
        title: "Symbolic mode",
        text: `| Symbol | Meaning |
|--------|---------|
| u,g,o,a | user, group, others, all |
| +,-,= | add, remove, set exactly |
| r,w,x | permissions |

\`\`\`bash
chmod a+x script.sh      # executable for all
chmod o-rwx secret.txt   # remove all for others
chmod u=rw,go=r file     # rw-r--r--
chmod -R g+w project/    # recursive on directory
\`\`\``,
      },
    },
  },
  {
    id: "block-3-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: {
        title: "Modo octal",
        language: "bash",
        code: `# Archivo privado
chmod 600 id_rsa

# Script público
chmod 755 deploy.sh

# Directorio compartido grupo
chmod 770 /srv/shared

# Solo lectura para otros
chmod 644 informe.pdf`,
      },
      en: {
        title: "Octal mode",
        language: "bash",
        code: `# Private file
chmod 600 id_rsa

# Public script
chmod 755 deploy.sh

# Group shared directory
chmod 770 /srv/shared

# Read-only for others
chmod 644 report.pdf`,
      },
    },
  },
];

export const lesson32Exercises: Exercise[] = [
  {
    id: "ex-3-2-1",
    lessonId: "lesson-3-2",
    slug: "chmod-octal",
    type: "COMMAND_COMPLETION",
    question: {
      es: "Comando octal para rw------- (solo propietario lee/escribe)",
      en: "Octal chmod for rw------- (owner read/write only)",
    },
    correctAnswer: "chmod 600",
    explanation: {
      es: "6=rw-, 0=--- para grupo y otros.",
      en: "6=rw-, 0=--- for group and others.",
    },
    hints: { es: ["600 es estándar para claves SSH"], en: ["600 is standard for SSH keys"] },
    order: 1,
  },
  {
    id: "ex-3-2-2",
    lessonId: "lesson-3-2",
    slug: "chmod-symbolic",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué hace chmod u+x?",
      en: "What does chmod u+x do?",
    },
    options: {
      es: ["Quita x al usuario", "Añade x al propietario", "Añade x a todos", "Solo root"],
      en: ["Removes x from user", "Adds x for owner", "Adds x for all", "Root only"],
    },
    correctAnswer: "1",
    explanation: {
      es: "u=owner, +x agrega ejecución.",
      en: "u=owner, +x adds execute.",
    },
    hints: { es: ["u = user/owner"], en: ["u = user/owner"] },
    order: 2,
  },
];

export const lesson32Quiz: Quiz = {
  id: "quiz-3-2",
  lessonId: "lesson-3-2",
  questions: [
    {
      id: "quiz-3-2-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Permiso octal para rwxrwx---",
        en: "Octal permission for rwxrwx---",
      },
      options: {
        es: ["770", "777", "760", "750"],
        en: ["770", "777", "760", "750"],
      },
      correctAnswer: "0",
      explanation: {
        es: "7+7+0 = 770.",
        en: "7+7+0 = 770.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson32: Lesson = {
  id: "lesson-3-2",
  moduleId: "level-3",
  slug: "chmod-command",
  title: {
    es: "Modificar Permisos con chmod",
    en: "Modify Permissions with chmod",
  },
  description: {
    es: "Domina chmod en modo simbólico y octal.",
    en: "Master chmod in symbolic and octal mode.",
  },
  order: 2,
  duration: 40,
  contentBlocks: lesson32Content,
  exercises: lesson32Exercises,
  quiz: lesson32Quiz,
};
