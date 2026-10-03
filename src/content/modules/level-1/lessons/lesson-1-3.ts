import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson13Content: ContentBlock[] = [
  {
    id: "block-1-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Crear archivos y directorios",
        text: `Los comandos básicos para crear contenido en el sistema de archivos son:

- **touch** — crea archivos vacíos o actualiza su fecha de modificación
- **mkdir** — crea directorios

\`\`\`bash
touch nota.txt              # Crear archivo vacío
mkdir proyecto              # Crear directorio
mkdir -p a/b/c              # Crear toda la ruta (padres incluidos)
mkdir -p app/{src,tests}    # Varios directorios con expansión de llaves
\`\`\``,
      },
      en: {
        title: "Creating files and directories",
        text: `Basic commands to create content in the filesystem:

- **touch** — creates empty files or updates modification time
- **mkdir** — creates directories

\`\`\`bash
touch note.txt              # Create empty file
mkdir project               # Create directory
mkdir -p a/b/c              # Create full path (including parents)
mkdir -p app/{src,tests}    # Multiple dirs with brace expansion
\`\`\``,
      },
    },
  },
  {
    id: "block-1-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "Copiar y mover",
        text: `**cp** (copy) duplica archivos. **mv** (move) mueve o renombra.

\`\`\`bash
cp origen destino           # Copiar archivo
cp -r carpeta/ backup/      # Copiar directorio (recursivo)
mv viejo.txt nuevo.txt      # Renombrar
mv archivo.txt ~/Docs/      # Mover a otro directorio
\`\`\`

Opciones útiles de cp: \`-i\` (confirmar), \`-v\` (verbose), \`-a\` (preservar todo).`,
      },
      en: {
        title: "Copy and move",
        text: `**cp** (copy) duplicates files. **mv** (move) moves or renames.

\`\`\`bash
cp source destination       # Copy file
cp -r folder/ backup/       # Copy directory (recursive)
mv old.txt new.txt          # Rename
mv file.txt ~/Docs/         # Move to another directory
\`\`\`

Useful cp options: \`-i\` (confirm), \`-v\` (verbose), \`-a\` (preserve everything).`,
      },
    },
  },
  {
    id: "block-1-3-3",
    type: "WARNING",
    order: 3,
    content: {
      es: {
        title: "Eliminar con precaución: rm",
        text: `**rm** elimina archivos permanentemente (no hay papelera por defecto).

\`\`\`bash
rm archivo.txt              # Eliminar archivo
rm -r carpeta/              # Eliminar directorio y contenido
rm -i *.tmp                 # Preguntar antes de cada archivo
\`\`\`

⚠️ **NUNCA ejecutes:** \`rm -rf /\` — destruye todo el sistema.

Siempre verifica con \`ls\` antes de usar \`rm\`.`,
      },
      en: {
        title: "Delete with caution: rm",
        text: `**rm** deletes files permanently (no recycle bin by default).

\`\`\`bash
rm file.txt                 # Delete file
rm -r folder/               # Delete directory and contents
rm -i *.tmp                 # Ask before each file
\`\`\`

⚠️ **NEVER run:** \`rm -rf /\` — destroys the entire system.

Always verify with \`ls\` before using \`rm\`.`,
      },
    },
  },
];

export const lesson13Exercises: Exercise[] = [
  {
    id: "ex-1-3-1",
    lessonId: "lesson-1-3",
    slug: "create-structure",
    type: "COMMAND_COMPLETION",
    question: {
      es: "Crea la estructura proyecto/{src,docs} con un solo comando.",
      en: "Create the structure project/{src,docs} with a single command.",
    },
    correctAnswer: "mkdir -p proyecto/{src,docs}",
    explanation: {
      es: "mkdir -p crea directorios padre si no existen. La expansión {src,docs} crea ambos subdirectorios.",
      en: "mkdir -p creates parent directories if needed. Brace expansion {src,docs} creates both subdirectories.",
    },
    hints: {
      es: ["Usa mkdir -p con expansión de llaves {src,docs}"],
      en: ["Use mkdir -p with brace expansion {src,docs}"],
    },
    order: 1,
  },
  {
    id: "ex-1-3-2",
    lessonId: "lesson-1-3",
    slug: "copy-files",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué opción de cp es necesaria para copiar un directorio completo?",
      en: "Which cp option is required to copy an entire directory?",
    },
    options: {
      es: ["-f", "-r", "-v", "-p"],
      en: ["-f", "-r", "-v", "-p"],
    },
    correctAnswer: "1",
    explanation: {
      es: "La opción -r (recursive) copia directorios y todo su contenido.",
      en: "The -r (recursive) option copies directories and all their contents.",
    },
    hints: { es: ["Piensa en 'recursivo'"], en: ["Think 'recursive'"] },
    order: 2,
  },
];

export const lesson13Quiz: Quiz = {
  id: "quiz-1-3",
  lessonId: "lesson-1-3",
  questions: [
    {
      id: "quiz-1-3-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué hace mkdir -p?",
        en: "What does mkdir -p do?",
      },
      options: {
        es: [
          "Elimina directorios vacíos",
          "Crea directorios padres si no existen",
          "Muestra permisos",
          "Copia directorios",
        ],
        en: [
          "Removes empty directories",
          "Creates parent directories if they don't exist",
          "Shows permissions",
          "Copies directories",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "-p (parents) crea toda la ruta de directorios necesaria.",
        en: "-p (parents) creates the entire necessary directory path.",
      },
      points: 5,
    },
    {
      id: "quiz-1-3-2",
      type: "TRUE_FALSE",
      question: {
        es: "mv puede usarse para renombrar archivos.",
        en: "mv can be used to rename files.",
      },
      correctAnswer: "true",
      explanation: {
        es: "mv mueve o renombra: mv viejo.txt nuevo.txt cambia el nombre.",
        en: "mv moves or renames: mv old.txt new.txt changes the name.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson13: Lesson = {
  id: "lesson-1-3",
  moduleId: "level-1",
  slug: "file-operations",
  title: {
    es: "Operaciones con Archivos: touch, mkdir, cp, mv, rm",
    en: "File Operations: touch, mkdir, cp, mv, rm",
  },
  description: {
    es: "Crea, copia, mueve y elimina archivos y directorios desde la terminal.",
    en: "Create, copy, move and delete files and directories from the terminal.",
  },
  order: 3,
  duration: 25,
  contentBlocks: lesson13Content,
  exercises: lesson13Exercises,
  quiz: lesson13Quiz,
};
