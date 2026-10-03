import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson15Content: ContentBlock[] = [
  {
    id: "block-1-5-1",
    type: "KEY_CONCEPT",
    order: 1,
    content: {
      es: {
        title: "man — el manual de Linux",
        text: `\`man\` (manual) es la documentación integrada del sistema.

\`\`\`bash
man ls                      # Manual completo de ls
man -k network              # Buscar por palabra clave (apropos)
whatis passwd               # Descripción de una línea
\`\`\`

**Secciones del manual:**
1 = Comandos de usuario | 5 = Formatos de archivo | 8 = Admin

Dentro de man: \`/texto\` buscar, \`n\` siguiente, \`q\` salir.`,
      },
      en: {
        title: "man — the Linux manual",
        text: `\`man\` (manual) is the built-in system documentation.

\`\`\`bash
man ls                      # Full ls manual
man -k network              # Search by keyword (apropos)
whatis passwd               # One-line description
\`\`\`

**Manual sections:**
1 = User commands | 5 = File formats | 8 = Admin

Inside man: \`/text\` search, \`n\` next, \`q\` quit.`,
      },
    },
  },
  {
    id: "block-1-5-2",
    type: "TIP",
    order: 2,
    content: {
      es: {
        title: "Ayuda rápida con --help",
        text: `Casi todo comando soporta \`--help\` para un resumen rápido:

\`\`\`bash
ls --help                   # Resumen de opciones
mkdir --help
git commit --help
\`\`\`

**Estrategia:** primero \`--help\`, si necesitas más detalle usa \`man\`.`,
      },
      en: {
        title: "Quick help with --help",
        text: `Almost every command supports \`--help\` for a quick summary:

\`\`\`bash
ls --help                   # Options summary
mkdir --help
git commit --help
\`\`\`

**Strategy:** first \`--help\`, if you need more detail use \`man\`.`,
      },
    },
  },
];

export const lesson15Exercises: Exercise[] = [
  {
    id: "ex-1-5-1",
    lessonId: "lesson-1-5",
    slug: "find-commands",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué comando busca páginas de manual por palabra clave?",
      en: "What command searches manual pages by keyword?",
    },
    options: {
      es: ["man search", "apropos", "help", "find man"],
      en: ["man search", "apropos", "help", "find man"],
    },
    correctAnswer: "1",
    explanation: {
      es: "apropos (o man -k) busca en las descripciones de todas las páginas man.",
      en: "apropos (or man -k) searches all man page descriptions.",
    },
    hints: { es: ["También funciona: man -k palabra"], en: ["Also works: man -k word"] },
    order: 1,
  },
];

export const lesson15Quiz: Quiz = {
  id: "quiz-1-5",
  lessonId: "lesson-1-5",
  questions: [
    {
      id: "quiz-1-5-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué sección del manual documenta formatos de archivo como /etc/passwd?",
        en: "Which manual section documents file formats like /etc/passwd?",
      },
      options: {
        es: ["Sección 1", "Sección 3", "Sección 5", "Sección 8"],
        en: ["Section 1", "Section 3", "Section 5", "Section 8"],
      },
      correctAnswer: "2",
      explanation: {
        es: "La sección 5 contiene formatos de archivos de configuración.",
        en: "Section 5 contains configuration file formats.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson15: Lesson = {
  id: "lesson-1-5",
  moduleId: "level-1",
  slug: "getting-help",
  title: {
    es: "Obtener Ayuda: man, --help, whatis",
    en: "Getting Help: man, --help, whatis",
  },
  description: {
    es: "Descubre cómo encontrar documentación y ayuda para cualquier comando.",
    en: "Discover how to find documentation and help for any command.",
  },
  order: 5,
  duration: 15,
  contentBlocks: lesson15Content,
  exercises: lesson15Exercises,
  quiz: lesson15Quiz,
};
