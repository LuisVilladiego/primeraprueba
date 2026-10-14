import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson26Content: ContentBlock[] = [
  {
    id: "block-2-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "find en profundidad",
        text: `\`find\` recorre el árbol en tiempo real (siempre actualizado, más lento que locate).

\`\`\`bash
find [ruta] [criterios] [acciones]
find /etc -name "*.conf"
find . -maxdepth 2 -type f
find ~ -size +10M
find /var/log -mtime -7    # modificados < 7 días
\`\`\``,
      },
      en: {
        title: "find in depth",
        text: `\`find\` walks the tree in real time (always up to date, slower than locate).

\`\`\`bash
find [path] [criteria] [actions]
find /etc -name "*.conf"
find . -maxdepth 2 -type f
find ~ -size +10M
find /var/log -mtime -7    # modified within 7 days
\`\`\``,
      },
    },
  },
  {
    id: "block-2-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "Criterios frecuentes",
        text: `| Opción | Significado |
|--------|-------------|
| \`-name\` / \`-iname\` | Patrón de nombre |
| \`-type f\` / \`-type d\` | Archivo / directorio |
| \`-size +10M\` | Mayor a 10 MB |
| \`-mtime -3\` | Modificado hace menos de 3 días |
| \`-user alice\` | Propietario |

**Acciones:** \`-delete\`, \`-exec cmd {} \\;\` (¡con cuidado!)`,
      },
      en: {
        title: "Common criteria",
        text: `| Option | Meaning |
|--------|---------|
| \`-name\` / \`-iname\` | Name pattern |
| \`-type f\` / \`-type d\` | File / directory |
| \`-size +10M\` | Larger than 10 MB |
| \`-mtime -3\` | Modified less than 3 days ago |
| \`-user alice\` | Owner |

**Actions:** \`-delete\`, \`-exec cmd {} \\;\` (use with care!)`,
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
