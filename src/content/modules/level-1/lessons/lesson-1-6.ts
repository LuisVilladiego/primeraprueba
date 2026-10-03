import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson16Content: ContentBlock[] = [
  {
    id: "block-1-6-1",
    type: "KEY_CONCEPT",
    order: 1,
    content: {
      es: {
        title: "Wildcards (comodines)",
        text: `Los wildcards expanden patrones a múltiples archivos:

| Patrón | Significado |
|--------|-------------|
| \`*\` | Cero o más caracteres |
| \`?\` | Exactamente un carácter |
| \`[abc]\` | Un carácter del conjunto |
| \`[a-z]\` | Un carácter en el rango |
| \`{a,b,c}\` | Expansión (no glob): genera a, b, c |

\`\`\`bash
ls *.txt                    # Todos los .txt
ls foto?.jpg                # foto1.jpg, fotoA.jpg (1 char)
ls [A-Z]*.pdf               # PDFs que empiezan con mayúscula
touch file{1..5}.txt        # file1.txt ... file5.txt
\`\`\``,
      },
      en: {
        title: "Wildcards",
        text: `Wildcards expand patterns to multiple files:

| Pattern | Meaning |
|---------|---------|
| \`*\` | Zero or more characters |
| \`?\` | Exactly one character |
| \`[abc]\` | One character from the set |
| \`[a-z]\` | One character in range |
| \`{a,b,c}\` | Expansion (not glob): generates a, b, c |

\`\`\`bash
ls *.txt                    # All .txt files
ls photo?.jpg               # photo1.jpg, photoA.jpg (1 char)
ls [A-Z]*.pdf               # PDFs starting with uppercase
touch file{1..5}.txt        # file1.txt ... file5.txt
\`\`\``,
      },
    },
  },
  {
    id: "block-1-6-2",
    type: "WARNING",
    order: 2,
    content: {
      es: {
        title: "Precaución con rm y wildcards",
        text: `El shell expande wildcards **antes** de ejecutar el comando.

\`\`\`bash
ls *.tmp                    # Siempre verifica primero
rm *.tmp                    # Luego elimina
\`\`\`

Un \`rm *\` mal ejecutado puede ser desastroso. Usa \`rm -i\` para confirmación.`,
      },
      en: {
        title: "Caution with rm and wildcards",
        text: `The shell expands wildcards **before** running the command.

\`\`\`bash
ls *.tmp                    # Always verify first
rm *.tmp                    # Then delete
\`\`\`

A mistyped \`rm *\` can be disastrous. Use \`rm -i\` for confirmation.`,
      },
    },
  },
];

export const lesson16Exercises: Exercise[] = [
  {
    id: "ex-1-6-1",
    lessonId: "lesson-1-6",
    slug: "wildcard-match",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué patrón coincide con archivos de exactamente 4 caracteres + .txt?",
      en: "What pattern matches files with exactly 4 characters + .txt?",
    },
    options: {
      es: ["*.txt", "????.txt", "[4].txt", "{4}.txt"],
      en: ["*.txt", "????.txt", "[4].txt", "{4}.txt"],
    },
    correctAnswer: "1",
    explanation: {
      es: "Cada ? coincide con exactamente un carácter.",
      en: "Each ? matches exactly one character.",
    },
    hints: { es: ["? = un carácter"], en: ["? = one character"] },
    order: 1,
  },
];

export const lesson16Quiz: Quiz = {
  id: "quiz-1-6",
  lessonId: "lesson-1-6",
  questions: [
    {
      id: "quiz-1-6-1",
      type: "TRUE_FALSE",
      question: {
        es: "El comodín * coincide con archivos ocultos (que empiezan con .).",
        en: "The * wildcard matches hidden files (starting with .).",
      },
      correctAnswer: "false",
      explanation: {
        es: "* no coincide con archivos ocultos. Usa ls -a o .* explícitamente.",
        en: "* does not match hidden files. Use ls -a or .* explicitly.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson16: Lesson = {
  id: "lesson-1-6",
  moduleId: "level-1",
  slug: "wildcards-globbing",
  title: {
    es: "Comodines y Globbing",
    en: "Wildcards and Globbing",
  },
  description: {
    es: "Usa *, ?, y [] para trabajar con múltiples archivos de forma eficiente.",
    en: "Use *, ?, and [] to work with multiple files efficiently.",
  },
  order: 6,
  duration: 15,
  contentBlocks: lesson16Content,
  exercises: lesson16Exercises,
  quiz: lesson16Quiz,
};
