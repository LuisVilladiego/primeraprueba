import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson14Content: ContentBlock[] = [
  {
    id: "block-1-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Ver contenido de archivos",
        text: `Linux ofrece varias herramientas según lo que necesites:

| Comando | Uso |
|---------|-----|
| **cat** | Mostrar archivo completo (ideal para archivos pequeños) |
| **less** | Navegar archivos grandes (q para salir) |
| **head** | Primeras líneas (default: 10) |
| **tail** | Últimas líneas (default: 10) |

\`\`\`bash
cat archivo.txt             # Todo el contenido
head -n 5 archivo.txt       # Primeras 5 líneas
tail -n 20 log.txt          # Últimas 20 líneas
tail -f log.txt             # Seguir en tiempo real
\`\`\``,
      },
      en: {
        title: "Viewing file contents",
        text: `Linux offers several tools depending on what you need:

| Command | Use |
|---------|-----|
| **cat** | Show entire file (ideal for small files) |
| **less** | Navigate large files (q to quit) |
| **head** | First lines (default: 10) |
| **tail** | Last lines (default: 10) |

\`\`\`bash
cat file.txt                # Full content
head -n 5 file.txt          # First 5 lines
tail -n 20 log.txt          # Last 20 lines
tail -f log.txt             # Follow in real time
\`\`\``,
      },
    },
  },
  {
    id: "block-1-4-2",
    type: "TIP",
    order: 2,
    content: {
      es: {
        title: "Cuándo usar cada herramienta",
        text: `- **cat** → archivos pequeños o concatenar varios
- **less** → logs largos, man pages, explorar
- **head/tail** → previsualizar inicio/fin
- **tail -f** → monitorear logs en vivo (Ctrl+C para salir)

Para extraer líneas 10-20: \`head -n 20 archivo | tail -n 11\``,
      },
      en: {
        title: "When to use each tool",
        text: `- **cat** → small files or concatenate several
- **less** → long logs, man pages, explore
- **head/tail** → preview start/end
- **tail -f** → monitor live logs (Ctrl+C to quit)

To extract lines 10-20: \`head -n 20 file | tail -n 11\``,
      },
    },
  },
];

export const lesson14Exercises: Exercise[] = [
  {
    id: "ex-1-4-1",
    lessonId: "lesson-1-4",
    slug: "tail-log",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué comando monitorea un log en tiempo real?",
      en: "What command monitors a log in real time?",
    },
    options: {
      es: ["cat -f log.txt", "tail -f log.txt", "less -f log.txt", "watch log.txt"],
      en: ["cat -f log.txt", "tail -f log.txt", "less -f log.txt", "watch log.txt"],
    },
    correctAnswer: "1",
    explanation: {
      es: "tail -f sigue el archivo y muestra nuevas líneas al agregarse.",
      en: "tail -f follows the file and shows new lines as they're added.",
    },
    hints: { es: ["La opción -f significa 'follow'"], en: ["The -f option means 'follow'"] },
    order: 1,
  },
];

export const lesson14Quiz: Quiz = {
  id: "quiz-1-4",
  lessonId: "lesson-1-4",
  questions: [
    {
      id: "quiz-1-4-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Cuál es la ventaja principal de less sobre cat?",
        en: "What is the main advantage of less over cat?",
      },
      options: {
        es: [
          "Es más rápido",
          "Permite navegar sin cargar todo en memoria",
          "Muestra colores",
          "Puede editar archivos",
        ],
        en: [
          "It's faster",
          "Allows navigating without loading everything into memory",
          "Shows colors",
          "Can edit files",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "less carga el archivo por partes, ideal para archivos grandes.",
        en: "less loads the file in parts, ideal for large files.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson14: Lesson = {
  id: "lesson-1-4",
  moduleId: "level-1",
  slug: "viewing-files",
  title: {
    es: "Visualizar Archivos: cat, less, head, tail",
    en: "Viewing Files: cat, less, head, tail",
  },
  description: {
    es: "Aprende diferentes formas de ver el contenido de archivos de texto.",
    en: "Learn different ways to view the content of text files.",
  },
  order: 4,
  duration: 15,
  contentBlocks: lesson14Content,
  exercises: lesson14Exercises,
  quiz: lesson14Quiz,
};
