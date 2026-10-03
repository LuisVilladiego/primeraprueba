import type { Module, Lesson, Lab, Exam, Skill } from "@/types";

export const level1Module: Module = {
  id: "level-1",
  courseId: "linux-academy",
  slug: "terminal-basics",
  level: 1,
  title: {
    es: "La Terminal y Comandos Básicos",
    en: "Terminal and Basic Commands",
  },
  description: {
    es: "Domina la terminal de Linux. Aprende navegación, manipulación de archivos y los comandos más esenciales que usarás a diario.",
    en: "Master the Linux terminal. Learn navigation, file manipulation and the most essential commands you'll use daily.",
  },
  icon: "💻",
  order: 1,
  lessons: [],
  labs: [],
  exam: null,
  project: null,
  passingScore: 80,
  prerequisites: ["level-0"],
  skills: [
    "terminal-navigation",
    "file-commands",
    "command-syntax",
    "man-pages",
    "tab-completion",
  ],
};

export const level1Lessons: Lesson[] = [
  {
    id: "lesson-1-1",
    moduleId: "level-1",
    slug: "intro-to-terminal",
    title: {
      es: "Introducción a la Terminal",
      en: "Introduction to the Terminal",
    },
    description: {
      es: "Conoce qué es la terminal, el shell, y cómo abrir y usar tu primera sesión de terminal.",
      en: "Learn what the terminal is, the shell, and how to open and use your first terminal session.",
    },
    order: 1,
    duration: 15,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-1-2",
    moduleId: "level-1",
    slug: "navigation-commands",
    title: {
      es: "Navegación: pwd, cd, ls",
      en: "Navigation: pwd, cd, ls",
    },
    description: {
      es: "Aprende a moverte por el sistema de archivos con los comandos pwd, cd y ls.",
      en: "Learn to move through the file system with pwd, cd and ls commands.",
    },
    order: 2,
    duration: 20,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
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
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
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
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
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
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
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
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
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
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
];

export const level1Labs: Lab[] = [
  {
    id: "lab-1-1",
    moduleId: "level-1",
    slug: "navigate-filesystem",
    title: {
      es: "Navega por el sistema de archivos",
      en: "Navigate the file system",
    },
    description: {
      es: "Practica la navegación usando pwd, cd y ls en diferentes directorios del sistema.",
      en: "Practice navigation using pwd, cd and ls in different system directories.",
    },
    objectives: {
      es: [
        "Identificar tu directorio actual con pwd",
        "Navegar a /etc, /var, /home usando cd",
        "Listar contenidos con diferentes opciones de ls",
        "Usar rutas absolutas y relativas",
      ],
      en: [
        "Identify your current directory with pwd",
        "Navigate to /etc, /var, /home using cd",
        "List contents with different ls options",
        "Use absolute and relative paths",
      ],
    },
    prerequisites: {
      es: ["Haber completado las lecciones 1-2"],
      en: ["Having completed lessons 1-2"],
    },
    instructions: {
      es: [
        { step: 1, instruction: "Abre la terminal y ejecuta pwd", expectedResult: "Muestra tu directorio home" },
        { step: 2, instruction: "Navega a /etc con cd /etc", expectedResult: "Cambias al directorio /etc" },
        { step: 3, instruction: "Lista el contenido con ls -la", expectedResult: "Ves archivos ocultos y permisos" },
        { step: 4, instruction: "Vuelve a tu home con cd ~", expectedResult: "Regresas a tu directorio personal" },
        { step: 5, instruction: "Crea un directorio llamado 'practica' con mkdir practica", expectedResult: "Se crea el directorio" },
      ],
      en: [
        { step: 1, instruction: "Open terminal and run pwd", expectedResult: "Shows your home directory" },
        { step: 2, instruction: "Navigate to /etc with cd /etc", expectedResult: "You change to /etc directory" },
        { step: 3, instruction: "List contents with ls -la", expectedResult: "You see hidden files and permissions" },
        { step: 4, instruction: "Return home with cd ~", expectedResult: "You return to your personal directory" },
        { step: 5, instruction: "Create a directory called 'practice' with mkdir practice", expectedResult: "Directory is created" },
      ],
    },
    hints: {
      es: [
        "cd sin argumentos te lleva a tu home",
        "cd .. te lleva al directorio padre",
        "cd - te lleva al directorio anterior",
      ],
      en: [
        "cd without arguments takes you home",
        "cd .. takes you to parent directory",
        "cd - takes you to previous directory",
      ],
    },
    solution: {
      es: "Debes poder navegar fluidamente entre directorios y listar su contenido con diferentes opciones.",
      en: "You should be able to navigate fluidly between directories and list their contents with different options.",
    },
    validationCriteria: [],
    difficulty: "BEGINNER",
    estimatedTime: 15,
    order: 1,
  },
  {
    id: "lab-1-2",
    moduleId: "level-1",
    slug: "file-manipulation",
    title: {
      es: "Manipulación de archivos",
      en: "File manipulation",
    },
    description: {
      es: "Practica crear, copiar, mover y eliminar archivos y directorios.",
      en: "Practice creating, copying, moving and deleting files and directories.",
    },
    objectives: {
      es: [
        "Crear archivos vacíos con touch",
        "Crear directorios con mkdir",
        "Copiar archivos y directorios con cp",
        "Mover y renombrar con mv",
        "Eliminar archivos y directorios con rm",
      ],
      en: [
        "Create empty files with touch",
        "Create directories with mkdir",
        "Copy files and directories with cp",
        "Move and rename with mv",
        "Delete files and directories with rm",
      ],
    },
    prerequisites: {
      es: ["Haber completado la lección 3"],
      en: ["Having completed lesson 3"],
    },
    instructions: {
      es: [
        { step: 1, instruction: "Crea un directorio 'proyecto' y entra en él", expectedResult: "Directorio creado" },
        { step: 2, instruction: "Crea tres archivos: archivo1.txt, archivo2.txt, archivo3.txt", expectedResult: "Tres archivos creados" },
        { step: 3, instruction: "Crea un subdirectorio 'backup'", expectedResult: "Subdirectorio creado" },
        { step: 4, instruction: "Copia archivo1.txt a backup/", expectedResult: "Archivo copiado" },
        { step: 5, instruction: "Renombra archivo2.txt a importante.txt", expectedResult: "Archivo renombrado" },
        { step: 6, instruction: "Elimina archivo3.txt", expectedResult: "Archivo eliminado" },
      ],
      en: [
        { step: 1, instruction: "Create a directory 'project' and enter it", expectedResult: "Directory created" },
        { step: 2, instruction: "Create three files: file1.txt, file2.txt, file3.txt", expectedResult: "Three files created" },
        { step: 3, instruction: "Create a subdirectory 'backup'", expectedResult: "Subdirectory created" },
        { step: 4, instruction: "Copy file1.txt to backup/", expectedResult: "File copied" },
        { step: 5, instruction: "Rename file2.txt to important.txt", expectedResult: "File renamed" },
        { step: 6, instruction: "Delete file3.txt", expectedResult: "File deleted" },
      ],
    },
    hints: {
      es: [
        "touch archivo1.txt archivo2.txt archivo3.txt crea los tres a la vez",
        "cp -r copia directorios recursivamente",
        "rm -r elimina directorios con contenido",
      ],
      en: [
        "touch file1.txt file2.txt file3.txt creates all three at once",
        "cp -r copies directories recursively",
        "rm -r deletes directories with content",
      ],
    },
    solution: {
      es: "Al finalizar debes tener: proyecto/archivo1.txt, proyecto/importante.txt, proyecto/backup/archivo1.txt",
      en: "At the end you should have: project/file1.txt, project/important.txt, project/backup/file1.txt",
    },
    validationCriteria: [],
    difficulty: "BEGINNER",
    estimatedTime: 20,
    order: 2,
  },
];

export const level1Exam: Exam = {
  id: "exam-level-1",
  moduleId: "level-1",
  title: {
    es: "Examen - Terminal y Comandos Básicos",
    en: "Exam - Terminal and Basic Commands",
  },
  description: {
    es: "Demuestra tu dominio de la terminal Linux y los comandos básicos de navegación y manipulación de archivos.",
    en: "Demonstrate your mastery of the Linux terminal and basic navigation and file manipulation commands.",
  },
  questions: [
    {
      id: "q-1-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué comando muestra tu directorio de trabajo actual?",
        en: "What command shows your current working directory?",
      },
      options: {
        es: ["cd", "pwd", "ls", "dir"],
        en: ["cd", "pwd", "ls", "dir"],
      },
      correctAnswer: "1",
      explanation: {
        es: "pwd (print working directory) muestra la ruta completa del directorio actual.",
        en: "pwd (print working directory) shows the full path of the current directory.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "navigation",
    },
    {
      id: "q-1-2",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué significa el símbolo ~ en la terminal?",
        en: "What does the ~ symbol mean in the terminal?",
      },
      options: {
        es: ["El directorio raíz /", "Tu directorio home", "El directorio actual", "El directorio anterior"],
        en: ["The root directory /", "Your home directory", "The current directory", "The previous directory"],
      },
      correctAnswer: "1",
      explanation: {
        es: "~ es un atajo que representa tu directorio home, por ejemplo /home/usuario.",
        en: "~ is a shortcut that represents your home directory, for example /home/user.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "navigation",
    },
    {
      id: "q-1-3",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué opción de ls muestra archivos ocultos?",
        en: "What ls option shows hidden files?",
      },
      options: {
        es: ["-l", "-h", "-a", "-r"],
        en: ["-l", "-h", "-a", "-r"],
      },
      correctAnswer: "2",
      explanation: {
        es: "ls -a muestra todos los archivos, incluyendo los ocultos que empiezan con punto.",
        en: "ls -a shows all files, including hidden ones that start with a dot.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "listing",
    },
    {
      id: "q-1-4",
      type: "TRUE_FALSE",
      question: {
        es: "El comando 'rm -r directorio' elimina un directorio y todo su contenido.",
        en: "The command 'rm -r directory' deletes a directory and all its contents.",
      },
      correctAnswer: "true",
      explanation: {
        es: "La opción -r (recursive) permite que rm elimine directorios y su contenido.",
        en: "The -r (recursive) option allows rm to delete directories and their contents.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "file-operations",
    },
    {
      id: "q-1-5",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Cuál es la diferencia entre 'cp archivo.txt copia.txt' y 'mv archivo.txt copia.txt'?",
        en: "What is the difference between 'cp file.txt copy.txt' and 'mv file.txt copy.txt'?",
      },
      options: {
        es: [
          "No hay diferencia",
          "cp crea una copia, mv mueve/renombra (el original desaparece)",
          "mv crea una copia, cp mueve el archivo",
          "cp es más rápido que mv",
        ],
        en: [
          "No difference",
          "cp creates a copy, mv moves/renames (original disappears)",
          "mv creates a copy, cp moves the file",
          "cp is faster than mv",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "cp (copy) duplica el archivo, mv (move) lo mueve o renombra, eliminando el original.",
        en: "cp (copy) duplicates the file, mv (move) moves or renames it, removing the original.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "file-operations",
    },
    {
      id: "q-1-6",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué comando crea un archivo vacío?",
        en: "What command creates an empty file?",
      },
      options: {
        es: ["create", "new", "touch", "make"],
        en: ["create", "new", "touch", "make"],
      },
      correctAnswer: "2",
      explanation: {
        es: "touch crea un archivo vacío o actualiza la fecha de modificación si ya existe.",
        en: "touch creates an empty file or updates the modification date if it already exists.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "file-operations",
    },
    {
      id: "q-1-7",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Para ver las últimas 20 líneas de un archivo de log, usarías:",
        en: "To see the last 20 lines of a log file, you would use:",
      },
      options: {
        es: ["head -20 archivo.log", "tail -20 archivo.log", "cat -20 archivo.log", "less -20 archivo.log"],
        en: ["head -20 file.log", "tail -20 file.log", "cat -20 file.log", "less -20 file.log"],
      },
      correctAnswer: "1",
      explanation: {
        es: "tail muestra las últimas líneas de un archivo. head muestra las primeras.",
        en: "tail shows the last lines of a file. head shows the first ones.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "viewing",
    },
    {
      id: "q-1-8",
      type: "TRUE_FALSE",
      question: {
        es: "El comodín * coincide con cualquier secuencia de caracteres, incluyendo ninguno.",
        en: "The wildcard * matches any sequence of characters, including none.",
      },
      correctAnswer: "true",
      explanation: {
        es: "* es un comodín que coincide con cero o más caracteres. *.txt coincide con todos los archivos .txt",
        en: "* is a wildcard that matches zero or more characters. *.txt matches all .txt files",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "wildcards",
    },
    {
      id: "q-1-9",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué comando usas para ver la documentación completa de 'ls'?",
        en: "What command do you use to see the complete documentation for 'ls'?",
      },
      options: {
        es: ["help ls", "ls --help", "man ls", "info ls"],
        en: ["help ls", "ls --help", "man ls", "info ls"],
      },
      correctAnswer: "2",
      explanation: {
        es: "man (manual) muestra la documentación completa. --help muestra un resumen rápido.",
        en: "man (manual) shows complete documentation. --help shows a quick summary.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "help",
    },
    {
      id: "q-1-10",
      type: "SCENARIO",
      question: {
        es: "Estás en /home/usuario/documentos y quieres ir a /home/usuario/proyectos. ¿Cuál es la forma más corta?",
        en: "You're in /home/user/documents and want to go to /home/user/projects. What's the shortest way?",
      },
      options: {
        es: [
          "cd /home/usuario/proyectos",
          "cd ../proyectos",
          "cd ~/proyectos",
          "Todas son igualmente cortas",
        ],
        en: [
          "cd /home/user/projects",
          "cd ../projects",
          "cd ~/projects",
          "All are equally short",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "cd ../proyectos usa una ruta relativa: sube un nivel (..) y entra a proyectos.",
        en: "cd ../projects uses a relative path: goes up one level (..) and enters projects.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "navigation",
    },
    {
      id: "q-1-11",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué tecla completa automáticamente nombres de archivos y comandos?",
        en: "What key auto-completes file and command names?",
      },
      options: {
        es: ["Enter", "Tab", "Escape", "Ctrl"],
        en: ["Enter", "Tab", "Escape", "Ctrl"],
      },
      correctAnswer: "1",
      explanation: {
        es: "Tab es el autocompletado. Presiona dos veces para ver todas las opciones disponibles.",
        en: "Tab is auto-complete. Press twice to see all available options.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "shortcuts",
    },
    {
      id: "q-1-12",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué comando crea la estructura de directorios 'proyecto/src/components' en un solo paso?",
        en: "What command creates the directory structure 'project/src/components' in one step?",
      },
      options: {
        es: [
          "mkdir proyecto/src/components",
          "mkdir -p proyecto/src/components",
          "mkdir -r proyecto/src/components",
          "mkdir --all proyecto/src/components",
        ],
        en: [
          "mkdir project/src/components",
          "mkdir -p project/src/components",
          "mkdir -r project/src/components",
          "mkdir --all project/src/components",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "mkdir -p (parents) crea todos los directorios padres necesarios si no existen.",
        en: "mkdir -p (parents) creates all necessary parent directories if they don't exist.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "file-operations",
    },
    {
      id: "q-1-13",
      type: "TRUE_FALSE",
      question: {
        es: "Ctrl+C termina el comando o proceso que está ejecutándose en la terminal.",
        en: "Ctrl+C terminates the command or process running in the terminal.",
      },
      correctAnswer: "true",
      explanation: {
        es: "Ctrl+C envía la señal SIGINT que interrumpe el proceso actual.",
        en: "Ctrl+C sends the SIGINT signal that interrupts the current process.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "shortcuts",
    },
    {
      id: "q-1-14",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Para seguir en tiempo real un archivo de log que se está actualizando, usarías:",
        en: "To follow a log file in real-time as it's being updated, you would use:",
      },
      options: {
        es: ["cat -f archivo.log", "tail -f archivo.log", "watch archivo.log", "less -f archivo.log"],
        en: ["cat -f file.log", "tail -f file.log", "watch file.log", "less -f file.log"],
      },
      correctAnswer: "1",
      explanation: {
        es: "tail -f (follow) muestra las últimas líneas y continúa mostrando nuevas líneas a medida que se agregan.",
        en: "tail -f (follow) shows the last lines and continues showing new lines as they are added.",
      },
      points: 5,
      difficulty: "INTERMEDIATE",
      category: "viewing",
    },
    {
      id: "q-1-15",
      type: "SCENARIO",
      question: {
        es: "Quieres eliminar todos los archivos .tmp de un directorio. ¿Qué comando usas?",
        en: "You want to delete all .tmp files from a directory. What command do you use?",
      },
      options: {
        es: ["rm .tmp", "rm *.tmp", "delete *.tmp", "rm -tmp"],
        en: ["rm .tmp", "rm *.tmp", "delete *.tmp", "rm -tmp"],
      },
      correctAnswer: "1",
      explanation: {
        es: "rm *.tmp usa el comodín * para coincidir con cualquier nombre de archivo que termine en .tmp",
        en: "rm *.tmp uses the wildcard * to match any filename ending in .tmp",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "wildcards",
    },
  ],
  timeLimit: null,
  passingScore: 80,
  maxAttempts: null,
  shuffleQuestions: true,
};

export const level1Skills: Skill[] = [
  {
    id: "terminal-navigation",
    slug: "terminal-navigation",
    name: { es: "Navegación en terminal", en: "Terminal navigation" },
    description: { es: "Moverse eficientemente por el sistema de archivos", en: "Moving efficiently through the file system" },
    category: "terminal",
    icon: "🧭",
    relatedModules: ["level-1"],
    order: 1,
  },
  {
    id: "file-commands",
    slug: "file-commands",
    name: { es: "Comandos de archivos", en: "File commands" },
    description: { es: "Crear, copiar, mover y eliminar archivos", en: "Create, copy, move and delete files" },
    category: "terminal",
    icon: "📄",
    relatedModules: ["level-1"],
    order: 2,
  },
  {
    id: "command-syntax",
    slug: "command-syntax",
    name: { es: "Sintaxis de comandos", en: "Command syntax" },
    description: { es: "Entender opciones, argumentos y flags", en: "Understanding options, arguments and flags" },
    category: "terminal",
    icon: "⌨️",
    relatedModules: ["level-1"],
    order: 3,
  },
  {
    id: "man-pages",
    slug: "man-pages",
    name: { es: "Páginas man", en: "Man pages" },
    description: { es: "Encontrar ayuda y documentación", en: "Finding help and documentation" },
    category: "terminal",
    icon: "📚",
    relatedModules: ["level-1"],
    order: 4,
  },
  {
    id: "tab-completion",
    slug: "tab-completion",
    name: { es: "Autocompletado", en: "Tab completion" },
    description: { es: "Usar Tab para completar comandos y rutas", en: "Using Tab to complete commands and paths" },
    category: "terminal",
    icon: "⚡",
    relatedModules: ["level-1"],
    order: 5,
  },
];
