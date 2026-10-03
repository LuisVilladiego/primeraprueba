import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson17Content: ContentBlock[] = [
  {
    id: "block-1-7-1",
    type: "KEY_CONCEPT",
    order: 1,
    content: {
      es: {
        title: "Historial de comandos",
        text: `El shell guarda todos los comandos que ejecutas.

\`\`\`bash
history                     # Ver historial numerado
history 20                  # Últimos 20 comandos
history | grep ssh          # Buscar comandos con "ssh"
\`\`\`

**Navegación:**
- ↑ / ↓ — comandos anteriores/siguientes
- **Ctrl+R** — búsqueda interactiva hacia atrás
- **Alt+.** — insertar último argumento`,
      },
      en: {
        title: "Command history",
        text: `The shell saves all commands you execute.

\`\`\`bash
history                     # View numbered history
history 20                  # Last 20 commands
history | grep ssh          # Search commands with "ssh"
\`\`\`

**Navigation:**
- ↑ / ↓ — previous/next commands
- **Ctrl+R** — interactive backward search
- **Alt+.** — insert last argument`,
      },
    },
  },
  {
    id: "block-1-7-2",
    type: "TIP",
    order: 2,
    content: {
      es: {
        title: "Expansión del historial",
        text: `\`\`\`bash
!!                          # Repetir último comando
sudo !!                      # Ejecutar último comando con sudo
!$                          # Último argumento del comando anterior
!ssh                        # Último comando que empezó con "ssh"
^viejo^nuevo                # Sustituir en último comando
\`\`\`

Ejemplo: \`mkdir proyecto && cd !$\` — crea y entra al directorio.`,
      },
      en: {
        title: "History expansion",
        text: `\`\`\`bash
!!                          # Repeat last command
sudo !!                      # Run last command with sudo
!$                          # Last argument of previous command
!ssh                        # Last command starting with "ssh"
^old^new                    # Substitute in last command
\`\`\`

Example: \`mkdir project && cd !$\` — creates and enters the directory.`,
      },
    },
  },
];

export const lesson17Exercises: Exercise[] = [
  {
    id: "ex-1-7-1",
    lessonId: "lesson-1-7",
    slug: "sudo-repeat",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué hace el comando sudo !!?",
      en: "What does the command sudo !! do?",
    },
    options: {
      es: [
        "Muestra el historial",
        "Ejecuta el último comando con privilegios de root",
        "Borra el historial",
        "Busca comandos sudo",
      ],
      en: [
        "Shows history",
        "Runs the last command with root privileges",
        "Clears history",
        "Searches for sudo commands",
      ],
    },
    correctAnswer: "1",
    explanation: {
      es: "!! se expande al último comando; sudo lo ejecuta como root.",
      en: "!! expands to the last command; sudo runs it as root.",
    },
    hints: { es: ["!! = último comando"], en: ["!! = last command"] },
    order: 1,
  },
];

export const lesson17Quiz: Quiz = {
  id: "quiz-1-7",
  lessonId: "lesson-1-7",
  questions: [
    {
      id: "quiz-1-7-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué atajo busca en el historial de forma interactiva?",
        en: "What shortcut searches history interactively?",
      },
      options: {
        es: ["Ctrl+H", "Ctrl+R", "Ctrl+F", "Ctrl+S"],
        en: ["Ctrl+H", "Ctrl+R", "Ctrl+F", "Ctrl+S"],
      },
      correctAnswer: "1",
      explanation: {
        es: "Ctrl+R activa reverse-i-search en el historial.",
        en: "Ctrl+R activates reverse-i-search in history.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson17: Lesson = {
  id: "lesson-1-7",
  moduleId: "level-1",
  slug: "command-history",
  title: {
    es: "Historial y Atajos de Terminal",
    en: "History and Terminal Shortcuts",
  },
  description: {
    es: "Trabaja más rápido con el historial de comandos y atajos de teclado esenciales.",
    en: "Work faster with command history and essential keyboard shortcuts.",
  },
  order: 7,
  duration: 15,
  contentBlocks: lesson17Content,
  exercises: lesson17Exercises,
  quiz: lesson17Quiz,
};
