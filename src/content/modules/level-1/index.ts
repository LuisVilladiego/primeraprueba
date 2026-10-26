import type { Module, Lab, Exam } from "@/types";
import { level1Lessons } from "./lessons";

export { level1Lessons };

export const level1Module: Module = {
  id: "level-1",
  courseId: "linux-academy",
  slug: "linux-fundamentals",
  level: 1,
  title: {
    es: "Linux Fundamentals",
    en: "Linux Fundamentals",
  },
  description: {
    es: "Domina la terminal: navega el sistema, entiende el árbol de directorios y manipula archivos con precisión. Las lecciones de texto, pipes y regex siguen en camino.",
    en: "Master the terminal: navigate the system, understand the directory tree, and manipulate files with precision. Text, pipes, and regex lessons are still on the way.",
  },
  icon: "🐧",
  order: 1,
  lessons: level1Lessons,
  labs: [],
  exam: null,
  project: null,
  passingScore: 80,
  prerequisites: ["level-0"],
  skills: ["terminal", "navigation", "fhs", "file-ops", "file-view", "find"],
};

export const level1Labs: Lab[] = [
  {
    id: "lab-1-1",
    moduleId: "level-1",
    slug: "explore-your-system",
    title: {
      es: "Explora tu sistema",
      en: "Explore your system",
    },
    description: {
      es: "Usa la terminal real para situarte, listar la raíz y reconocer directorios del FHS.",
      en: "Use the real terminal to locate yourself, list the root, and recognize FHS directories.",
    },
    objectives: {
      es: [
        "Saber en qué directorio empieza tu sesión",
        "Listar / y reconocer al menos seis carpetas del FHS",
        "Volver a tu home sin escribir la ruta completa",
      ],
      en: [
        "Know which directory your session starts in",
        "List / and recognize at least six FHS folders",
        "Return home without typing the full path",
      ],
    },
    prerequisites: {
      es: ["Lecciones 1.1, 1.2 y 1.3"],
      en: ["Lessons 1.1, 1.2, and 1.3"],
    },
    instructions: {
      es: [
        { step: 1, instruction: "Abre la terminal de la app y ejecuta pwd", expectedResult: "Una ruta absoluta, normalmente dentro de /home" },
        { step: 2, instruction: "Ejecuta ls /", expectedResult: "Ves bin, etc, home, usr, var y otras carpetas" },
        { step: 3, instruction: "Entra a /etc con una ruta absoluta y confirma con pwd", expectedResult: "pwd imprime /etc" },
        { step: 4, instruction: "Lee el nombre de tu distribución: cat /etc/os-release", expectedResult: "Aparece NAME= o PRETTY_NAME=" },
        { step: 5, instruction: "Vuelve al home con cd sin argumentos y compruébalo", expectedResult: "pwd muestra tu carpeta personal" },
      ],
      en: [
        { step: 1, instruction: "Open the app terminal and run pwd", expectedResult: "An absolute path, usually under /home" },
        { step: 2, instruction: "Run ls /", expectedResult: "You see bin, etc, home, usr, var, and other folders" },
        { step: 3, instruction: "Enter /etc with an absolute path and confirm with pwd", expectedResult: "pwd prints /etc" },
        { step: 4, instruction: "Read your distribution name: cat /etc/os-release", expectedResult: "NAME= or PRETTY_NAME= appears" },
        { step: 5, instruction: "Return home with cd and no arguments, then check", expectedResult: "pwd shows your home folder" },
      ],
    },
    hints: {
      es: [
        "cd /etc es absoluto porque empieza por /",
        "cd solo, sin ruta, equivale a cd ~",
        "Si te pierdes: pwd, luego cd ~",
      ],
      en: [
        "cd /etc is absolute because it starts with /",
        "cd alone, with no path, is the same as cd ~",
        "If you get lost: pwd, then cd ~",
      ],
    },
    solution: {
      es: "pwd inicial en tu home, ls / con el árbol FHS, pwd en /etc, os-release leído, y pwd final de nuevo en el home.",
      en: "Initial pwd in your home, ls / showing the FHS tree, pwd in /etc, os-release read, and final pwd back in home.",
    },
    validationCriteria: [],
    difficulty: "BEGINNER",
    estimatedTime: 20,
    order: 1,
  },
  {
    id: "lab-1-2",
    moduleId: "level-1",
    slug: "project-tree",
    title: {
      es: "Crea una estructura de proyecto",
      en: "Create a project tree",
    },
    description: {
      es: "Construye un árbol de directorios de desarrollo y comprueba que cada archivo está donde debe.",
      en: "Build a development directory tree and verify that each file is where it belongs.",
    },
    objectives: {
      es: [
        "Crear padres anidados con un solo mkdir",
        "Añadir archivos con touch",
        "Renombrar con mv y localizar el resultado con find",
      ],
      en: [
        "Create nested parents with a single mkdir",
        "Add files with touch",
        "Rename with mv and locate the result with find",
      ],
    },
    prerequisites: {
      es: ["Lecciones 1.4, 1.5 y 1.6"],
      en: ["Lessons 1.4, 1.5, and 1.6"],
    },
    instructions: {
      es: [
        { step: 1, instruction: "Crea ~/practica-linux/app/{src,docs,tests}", expectedResult: "mkdir no imprime error" },
        { step: 2, instruction: "Crea src/main.sh, docs/notas.txt y un README.md en la raíz de app", expectedResult: "Tres archivos nuevos" },
        { step: 3, instruction: "Renombra docs/notas.txt a docs/README.md", expectedResult: "El nombre viejo ya no existe" },
        { step: 4, instruction: "Desde ~/practica-linux ejecuta find app -type f", expectedResult: "Ves main.sh, docs/README.md y README.md" },
        { step: 5, instruction: "Mira el tipo de main.sh con file", expectedResult: "file lo describe como texto o script" },
      ],
      en: [
        { step: 1, instruction: "Create ~/linux-practice/app/{src,docs,tests}", expectedResult: "mkdir prints no error" },
        { step: 2, instruction: "Create src/main.sh, docs/notes.txt, and a README.md at the app root", expectedResult: "Three new files" },
        { step: 3, instruction: "Rename docs/notes.txt to docs/README.md", expectedResult: "The old name no longer exists" },
        { step: 4, instruction: "From ~/linux-practice run find app -type f", expectedResult: "You see main.sh, docs/README.md, and README.md" },
        { step: 5, instruction: "Check the type of main.sh with file", expectedResult: "file describes it as text or a script" },
      ],
    },
    hints: {
      es: [
        "mkdir -p crea toda la cadena",
        "mv origen destino renombra si el destino es otro nombre en la misma carpeta",
        "find app -type f no entra en explicar permisos: solo lista archivos",
      ],
      en: [
        "mkdir -p creates the whole chain",
        "mv source destination renames when the destination is another name in the same folder",
        "find app -type f does not explain permissions: it only lists files",
      ],
    },
    solution: {
      es: "Árbol app/src, app/docs y app/tests; archivos main.sh, docs/README.md y README.md; find los lista; file confirma que main.sh es texto.",
      en: "Tree app/src, app/docs, and app/tests; files main.sh, docs/README.md, and README.md; find lists them; file confirms main.sh is text.",
    },
    validationCriteria: [],
    difficulty: "BEGINNER",
    estimatedTime: 25,
    order: 2,
  },
];

export const level1Exam: Exam = {
  id: "exam-level-1",
  moduleId: "level-1",
  title: {
    es: "Examen — Linux Fundamentals (parte 1)",
    en: "Exam — Linux Fundamentals (part 1)",
  },
  description: {
    es: "Comprueba navegación, FHS y manipulación de archivos. Cubre las lecciones 1.1 a 1.6.",
    en: "Checks navigation, the FHS, and file manipulation. Covers lessons 1.1 through 1.6.",
  },
  passingScore: 80,
  timeLimit: null,
  maxAttempts: null,
  shuffleQuestions: true,
  questions: [
    {
      id: "q-1-e-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué pieza lee la línea que escribes y lanza el programa?",
        en: "Which piece reads the line you type and launches the program?",
      },
      options: {
        es: ["El emulador de terminal", "El shell", "El sistema de archivos", "systemd"],
        en: ["The terminal emulator", "The shell", "The filesystem", "systemd"],
      },
      correctAnswer: "1",
      explanation: {
        es: "La terminal solo muestra texto. El shell interpreta la línea.",
        en: "The terminal only displays text. The shell interprets the line.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "terminal",
    },
    {
      id: "q-1-e-2",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Estás en /var/log. ¿Qué comando te lleva a /var?",
        en: "You are in /var/log. Which command takes you to /var?",
      },
      options: {
        es: ["cd /", "cd ..", "cd ~", "ls .."],
        en: ["cd /", "cd ..", "cd ~", "ls .."],
      },
      correctAnswer: "1",
      explanation: {
        es: ".. es el padre. El padre de /var/log es /var.",
        en: ".. is the parent. The parent of /var/log is /var.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "navigation",
    },
    {
      id: "q-1-e-3",
      type: "TRUE_FALSE",
      question: {
        es: "cd /etc usa una ruta absoluta.",
        en: "cd /etc uses an absolute path.",
      },
      correctAnswer: "true",
      explanation: {
        es: "Empieza en /. No depende del directorio actual.",
        en: "It starts at /. It does not depend on the current directory.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "navigation",
    },
    {
      id: "q-1-e-4",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Dónde buscarías la configuración del sistema en texto?",
        en: "Where would you look for system configuration as text?",
      },
      options: {
        es: ["/tmp", "/etc", "/proc", "/mnt"],
        en: ["/tmp", "/etc", "/proc", "/mnt"],
      },
      correctAnswer: "1",
      explanation: {
        es: "/etc guarda la configuración. /proc es virtual y /tmp es temporal.",
        en: "/etc holds configuration. /proc is virtual and /tmp is temporary.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "fhs",
    },
    {
      id: "q-1-e-5",
      type: "SCENARIO",
      question: {
        es: "Quieres quitar una carpeta de pruebas y todo lo que hay dentro. ¿Cuál es la opción más prudente si no estás seguro del contenido?",
        en: "You want to remove a practice folder and everything inside. What is the most careful option if you are not sure of the contents?",
      },
      options: {
        es: [
          "rm -rf /",
          "Listar con ls, y si es la carpeta correcta usar rm -r sobre esa ruta concreta",
          "rmdir aunque tenga archivos",
          "mv la carpeta a /etc",
        ],
        en: [
          "rm -rf /",
          "List with ls, and if it is the right folder use rm -r on that exact path",
          "rmdir even if it has files",
          "mv the folder to /etc",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "Primero miras. rm -r sobre la ruta exacta borra ese árbol. rm -rf / es catastrófico. rmdir no borra carpetas con contenido.",
        en: "Look first. rm -r on the exact path deletes that tree. rm -rf / is catastrophic. rmdir does not remove folders that still have contents.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "files",
    },
    {
      id: "q-1-e-6",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Un archivo de log tiene miles de líneas y quieres ver solo el principio. ¿Qué usas?",
        en: "A log file has thousands of lines and you only want the beginning. What do you use?",
      },
      options: {
        es: ["tail", "head", "rm", "which"],
        en: ["tail", "head", "rm", "which"],
      },
      correctAnswer: "1",
      explanation: {
        es: "head muestra el inicio. tail muestra el final.",
        en: "head shows the start. tail shows the end.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "view",
    },
    {
      id: "q-1-e-7",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué comando encuentra archivos por nombre recorriendo directorios en el momento?",
        en: "Which command finds files by name by walking directories at that moment?",
      },
      options: {
        es: ["which", "find", "stat", "cd"],
        en: ["which", "find", "stat", "cd"],
      },
      correctAnswer: "1",
      explanation: {
        es: "find recorre el árbol ahora. which solo busca ejecutables en el PATH.",
        en: "find walks the tree now. which only searches executables on PATH.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "find",
    },
    {
      id: "q-1-e-8",
      type: "TRUE_FALSE",
      question: {
        es: "/root y / son el mismo directorio.",
        en: "/root and / are the same directory.",
      },
      correctAnswer: "false",
      explanation: {
        es: "/ es la raíz del sistema. /root es el home del administrador.",
        en: "/ is the system root. /root is the administrator's home.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "fhs",
    },
  ],
};
