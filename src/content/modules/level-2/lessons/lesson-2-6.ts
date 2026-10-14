import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson26Content: ContentBlock[] = [
  {
    id: "block-2-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "El comando find",
        text: `\`find\` recorre el árbol de directorios **en tiempo real**. Es más lento que \`locate\`, pero siempre refleja el estado actual del disco y admite criterios complejos y acciones (\`-exec\`, \`-delete\`).`,
      },
      en: {
        title: "The find command",
        text: `\`find\` walks the directory tree **in real time**. It is slower than \`locate\`, but always reflects current disk state and supports complex criteria and actions (\`-exec\`, \`-delete\`).`,
      },
    },
  },
  {
    id: "block-2-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "Sintaxis y búsqueda por nombre",
        text: `\`\`\`bash
find [ruta] [criterios] [acciones]

find . -name "archivo.txt"
find . -iname "*.PDF"           # sin distinguir mayúsculas
find /etc -name "*.conf"
find ~ -maxdepth 2 -name "*.sh" # limitar profundidad
\`\`\`

Comillas evitan que el shell expanda \`*\` antes de que \`find\` evalúe el patrón.`,
      },
      en: {
        title: "Syntax and name search",
        text: `\`\`\`bash
find [path] [criteria] [actions]

find . -name "file.txt"
find . -iname "*.PDF"           # case insensitive
find /etc -name "*.conf"
find ~ -maxdepth 2 -name "*.sh" # limit depth
\`\`\`

Quotes prevent the shell from expanding \`*\` before \`find\` evaluates the pattern.`,
      },
    },
  },
  {
    id: "block-2-6-3",
    type: "KEY_CONCEPT",
    order: 3,
    content: {
      es: {
        title: "Tipo, tamaño y fechas",
        text: `\`\`\`bash
find . -type f                  # solo archivos
find . -type d                  # solo directorios
find / -size +100M 2>/dev/null  # > 100 MB
find /var/log -mtime -7         # modificados < 7 días
find . -mtime +30               # más antiguos que 30 días
find . -user alice -group dev
\`\`\`

**mtime:** días enteros desde la última modificación. \`-mtime -3\` = menos de 3 días.`,
      },
      en: {
        title: "Type, size, and dates",
        text: `\`\`\`bash
find . -type f                  # files only
find . -type d                  # directories only
find / -size +100M 2>/dev/null  # > 100 MB
find /var/log -mtime -7         # modified within 7 days
find . -mtime +30               # older than 30 days
find . -user alice -group dev
\`\`\`

**mtime:** whole days since last modification. \`-mtime -3\` = less than 3 days ago.`,
      },
    },
  },
  {
    id: "block-2-6-4",
    type: "KEY_CONCEPT",
    order: 4,
    content: {
      es: {
        title: "Permisos y acciones",
        text: `\`\`\`bash
find . -perm 777                # permiso exacto (peligroso)
find /usr/bin -perm -4000       # archivos SUID
find . -empty                   # archivos/dirs vacíos

# Ejecutar comando por cada resultado (¡revisar antes!)
find . -name "*.bak" -exec rm {} \\;

# Alternativa más segura: preview con -print
find /tmp -type f -mtime +7 -print
\`\`\``,
      },
      en: {
        title: "Permissions and actions",
        text: `\`\`\`bash
find . -perm 777                # exact permission (risky)
find /usr/bin -perm -4000       # SUID files
find . -empty                   # empty files/dirs

# Run command per match (review first!)
find . -name "*.bak" -exec rm {} \\;

# Safer preview with -print
find /tmp -type f -mtime +7 -print
\`\`\``,
      },
    },
  },
  {
    id: "block-2-6-5",
    type: "WARNING",
    order: 5,
    content: {
      es: {
        title: "Precaución con -delete y -exec",
        text: `Siempre prueba primero con \`-print\` o pipe a head. Un \`find / -delete\` mal escrito puede destruir el sistema.

Combina con \`xargs\` para lotes: \`find . -name '*.log' -print0 | xargs -0 rm\``,
      },
      en: {
        title: "Care with -delete and -exec",
        text: `Always dry-run with \`-print\` or pipe to head. A badly written \`find / -delete\` can destroy the system.

Combine with \`xargs\` for batches: \`find . -name '*.log' -print0 | xargs -0 rm\``,
      },
    },
  },
];

export const lesson26Exercises: Exercise[] = [
  {
    id: "ex-2-6-1",
    lessonId: "lesson-2-6",
    slug: "find-mtime",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué find busca archivos modificados en los últimos 3 días?",
      en: "Which find finds files modified in the last 3 days?",
    },
    options: {
      es: ["-mtime 3", "-mtime -3", "-mtime +3", "-time 3"],
      en: ["-mtime 3", "-mtime -3", "-mtime +3", "-time 3"],
    },
    correctAnswer: "1",
    explanation: {
      es: "El signo - significa 'menos de N días'.",
      en: "The minus sign means 'less than N days'.",
    },
    hints: { es: ["mtime mide días desde modificación"], en: ["mtime measures days since modification"] },
    order: 1,
  },
  {
    id: "ex-2-6-2",
    lessonId: "lesson-2-6",
    slug: "find-conf",
    type: "COMMAND_COMPLETION",
    question: {
      es: "Encuentra todos los .conf bajo /etc",
      en: "Find all .conf files under /etc",
    },
    correctAnswer: 'find /etc -name "*.conf"',
    explanation: {
      es: "Comillas evitan que el shell expanda * antes de find.",
      en: "Quotes prevent the shell from expanding * before find runs.",
    },
    hints: { es: ["Usa -name con comillas"], en: ["Use -name with quotes"] },
    order: 2,
  },
  {
    id: "ex-2-6-3",
    lessonId: "lesson-2-6",
    slug: "find-type",
    type: "COMMAND_COMPLETION",
    question: {
      es: "Lista solo directorios en el directorio actual",
      en: "List only directories in the current directory",
    },
    correctAnswer: "find . -maxdepth 1 -type d",
    explanation: {
      es: "-type d filtra directorios; maxdepth 1 evita subcarpetas.",
      en: "-type d filters directories; maxdepth 1 skips subfolders.",
    },
    hints: { es: ["Combina -maxdepth 1 y -type d"], en: ["Combine -maxdepth 1 and -type d"] },
    order: 3,
  },
];

export const lesson26Quiz: Quiz = {
  id: "quiz-2-6",
  lessonId: "lesson-2-6",
  questions: [
    {
      id: "quiz-2-6-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué limita find al directorio actual sin subcarpetas?",
        en: "What limits find to the current directory without subfolders?",
      },
      options: {
        es: ["-depth 1", "-maxdepth 1", "-mindepth 0", "-level 1"],
        en: ["-depth 1", "-maxdepth 1", "-mindepth 0", "-level 1"],
      },
      correctAnswer: "1",
      explanation: {
        es: "-maxdepth 1 no desciende más de un nivel desde el punto de inicio.",
        en: "-maxdepth 1 does not go deeper than one level from the start path.",
      },
      points: 5,
    },
    {
      id: "quiz-2-6-2",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué criterio busca archivos mayores a 50 MB?",
        en: "Which criterion finds files larger than 50 MB?",
      },
      options: {
        es: ["-size 50M", "-size +50M", "-size -50M", "-bytes +50M"],
        en: ["-size 50M", "-size +50M", "-size -50M", "-bytes +50M"],
      },
      correctAnswer: "1",
      explanation: {
        es: "+50M significa estrictamente mayor que 50 megabytes.",
        en: "+50M means strictly greater than 50 megabytes.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson26: Lesson = {
  id: "lesson-2-6",
  moduleId: "level-2",
  slug: "find-command",
  title: {
    es: "Búsqueda Avanzada con find",
    en: "Advanced Search with find",
  },
  description: {
    es: "Encuentra archivos por nombre, tipo, tamaño, fecha y más.",
    en: "Find files by name, type, size, date, and more.",
  },
  order: 6,
  duration: 40,
  contentBlocks: lesson26Content,
  exercises: lesson26Exercises,
  quiz: lesson26Quiz,
};
