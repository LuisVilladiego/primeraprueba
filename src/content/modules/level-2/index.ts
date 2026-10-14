import type { Module, Lesson, Lab, Exam, Skill } from "@/types";

export const level2Module: Module = {
  id: "level-2",
  courseId: "linux-academy",
  slug: "linux-filesystem",
  level: 2,
  title: {
    es: "Sistema de Archivos de Linux",
    en: "Linux Filesystem",
  },
  description: {
    es: "Comprende la estructura FHS, tipos de archivos, enlaces, metadata y búsqueda eficiente.",
    en: "Understand FHS layout, file types, links, metadata, and efficient file search.",
  },
  icon: "📂",
  order: 2,
  lessons: [],
  labs: [],
  exam: null,
  project: null,
  passingScore: 80,
  prerequisites: ["level-1"],
  skills: ["fhs-hierarchy", "file-links", "file-search", "disk-usage"],
};

export const level2Lessons: Lesson[] = [
  {
    id: "lesson-2-1",
    moduleId: "level-2",
    slug: "filesystem-hierarchy",
    title: {
      es: "Jerarquía del Sistema de Archivos",
      en: "Filesystem Hierarchy",
    },
    description: {
      es: "Comprende la estructura FHS y el propósito de cada directorio principal.",
      en: "Understand the FHS structure and the purpose of each main directory.",
    },
    order: 1,
    duration: 35,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-2-2",
    moduleId: "level-2",
    slug: "file-types",
    title: {
      es: "Tipos de Archivos en Linux",
      en: "File Types in Linux",
    },
    description: {
      es: "Archivos regulares, directorios, enlaces, dispositivos y más.",
      en: "Regular files, directories, links, devices, and more.",
    },
    order: 2,
    duration: 30,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-2-3",
    moduleId: "level-2",
    slug: "links-hard-soft",
    title: {
      es: "Enlaces Duros y Simbólicos",
      en: "Hard and Symbolic Links",
    },
    description: {
      es: "Domina ln, inodos y cuándo usar cada tipo de enlace.",
      en: "Master ln, inodes, and when to use each link type.",
    },
    order: 3,
    duration: 35,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-2-4",
    moduleId: "level-2",
    slug: "file-metadata",
    title: {
      es: "Metadata de Archivos: stat, file",
      en: "File Metadata: stat, file",
    },
    description: {
      es: "Inspecciona inodos, tamaños y fechas con stat y file.",
      en: "Inspect inodes, sizes, and timestamps with stat and file.",
    },
    order: 4,
    duration: 25,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-2-5",
    moduleId: "level-2",
    slug: "disk-usage",
    title: {
      es: "Uso de Disco: df, du",
      en: "Disk Usage: df, du",
    },
    description: {
      es: "Monitorea espacio en disco y el tamaño de directorios.",
      en: "Monitor disk space and directory sizes.",
    },
    order: 5,
    duration: 30,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
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
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-2-7",
    moduleId: "level-2",
    slug: "locate-updatedb",
    title: {
      es: "Búsqueda Rápida: locate",
      en: "Quick Search: locate",
    },
    description: {
      es: "Busca archivos al instante usando una base de datos indexada.",
      en: "Search files instantly using an indexed database.",
    },
    order: 7,
    duration: 20,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
];

export const level2Labs: Lab[] = [
  {
    id: "lab-2-1",
    moduleId: "level-2",
    slug: "explore-filesystem",
    title: {
      es: "Exploración del Sistema de Archivos",
      en: "Filesystem Exploration",
    },
    description: {
      es: "Navega y documenta la estructura de directorios de tu sistema.",
      en: "Navigate and document your system directory structure.",
    },
    objectives: {
      es: [
        "Listar /etc, /var y /usr con ls",
        "Identificar tipos con file",
        "Localizar al menos 3 archivos .conf",
        "Anotar el propósito de 5 directorios FHS",
      ],
      en: [
        "List /etc, /var, and /usr with ls",
        "Identify types with file",
        "Find at least 3 .conf files",
        "Note the purpose of 5 FHS directories",
      ],
    },
    prerequisites: {
      es: ["Lecciones 2-1 y 2-2"],
      en: ["Lessons 2-1 and 2-2"],
    },
    instructions: {
      es: [
        { step: 1, instruction: "Ejecuta ls -la /etc | head", expectedResult: "Ves configs del sistema" },
        { step: 2, instruction: "Ejecuta file /bin/ls", expectedResult: "Muestra ejecutable ELF" },
        { step: 3, instruction: "Lista /var/log con ls", expectedResult: "Ves logs del sistema" },
        { step: 4, instruction: "Crea filesystem_notes.txt con 5 directorios y su uso", expectedResult: "Archivo de notas creado" },
      ],
      en: [
        { step: 1, instruction: "Run ls -la /etc | head", expectedResult: "You see system configs" },
        { step: 2, instruction: "Run file /bin/ls", expectedResult: "Shows ELF executable" },
        { step: 3, instruction: "List /var/log with ls", expectedResult: "You see system logs" },
        { step: 4, instruction: "Create filesystem_notes.txt with 5 directories and their use", expectedResult: "Notes file created" },
      ],
    },
    hints: {
      es: ["Usa cat /etc/os-release para contexto de la distro"],
      en: ["Use cat /etc/os-release for distro context"],
    },
    solution: {
      es: "Debes poder explicar /etc, /var, /home, /tmp y /usr con ejemplos concretos.",
      en: "You should explain /etc, /var, /home, /tmp, and /usr with concrete examples.",
    },
    validationCriteria: [],
    difficulty: "BEGINNER",
    estimatedTime: 30,
    order: 1,
  },
  {
    id: "lab-2-2",
    moduleId: "level-2",
    slug: "find-and-organize",
    title: {
      es: "Buscar y Organizar Archivos",
      en: "Find and Organize Files",
    },
    description: {
      es: "Usa find y ln para localizar archivos y crear enlaces.",
      en: "Use find and ln to locate files and create links.",
    },
    objectives: {
      es: [
        "Encontrar *.conf en /etc con find",
        "Buscar archivos modificados en 7 días",
        "Crear un enlace simbólico a un archivo de config",
      ],
      en: [
        "Find *.conf in /etc with find",
        "Search files modified within 7 days",
        "Create a symbolic link to a config file",
      ],
    },
    prerequisites: {
      es: ["Lecciones 2-3 y 2-6"],
      en: ["Lessons 2-3 and 2-6"],
    },
    instructions: {
      es: [
        { step: 1, instruction: 'find /etc -name "*.conf" | head', expectedResult: "Lista configs" },
        { step: 2, instruction: "find ~ -mtime -7 -type f 2>/dev/null | head", expectedResult: "Archivos recientes" },
        { step: 3, instruction: "ln -s /etc/hosts ~/hosts-link", expectedResult: "Enlace creado" },
        { step: 4, instruction: "ls -l ~/hosts-link", expectedResult: "Muestra enlace simbólico" },
      ],
      en: [
        { step: 1, instruction: 'find /etc -name "*.conf" | head', expectedResult: "Lists configs" },
        { step: 2, instruction: "find ~ -mtime -7 -type f 2>/dev/null | head", expectedResult: "Recent files" },
        { step: 3, instruction: "ln -s /etc/hosts ~/hosts-link", expectedResult: "Link created" },
        { step: 4, instruction: "ls -l ~/hosts-link", expectedResult: "Shows symbolic link" },
      ],
    },
    hints: {
      es: ["Redirige stderr a /dev/null si hay permisos denegados"],
      en: ["Redirect stderr to /dev/null if permission denied"],
    },
    solution: {
      es: "Combina find con criterios -name y -mtime; verifica enlaces con readlink.",
      en: "Combine find with -name and -mtime; verify links with readlink.",
    },
    validationCriteria: [],
    difficulty: "INTERMEDIATE",
    estimatedTime: 40,
    order: 2,
  },
];

export const level2Exam: Exam = {
  id: "exam-level-2",
  moduleId: "level-2",
  title: {
    es: "Examen - Sistema de Archivos de Linux",
    en: "Exam - Linux Filesystem",
  },
  description: {
    es: "Evalúa tu conocimiento de FHS, enlaces, uso de disco y búsqueda de archivos.",
    en: "Assess your knowledge of FHS, links, disk usage, and file search.",
  },
  questions: [
    {
      id: "q-2-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué directorio contiene archivos de configuración del sistema?",
        en: "Which directory contains system configuration files?",
      },
      options: {
        es: ["/bin", "/etc", "/var", "/usr"],
        en: ["/bin", "/etc", "/var", "/usr"],
      },
      correctAnswer: "1",
      explanation: {
        es: "/etc almacena configuración editable en texto.",
        en: "/etc stores editable text configuration.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "fhs",
    },
    {
      id: "q-2-2",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Cuál es la diferencia principal entre enlace duro y simbólico?",
        en: "What is the main difference between hard and symbolic links?",
      },
      options: {
        es: [
          "No hay diferencia",
          "El duro comparte inodo; el simbólico apunta a una ruta",
          "El simbólico es más rápido",
          "El duro solo funciona con directorios",
        ],
        en: [
          "There is no difference",
          "Hard shares inode; symbolic points to a path",
          "Symbolic is faster",
          "Hard only works on directories",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "Los enlaces duros son alias del mismo inodo; los simbólicos son punteros por nombre.",
        en: "Hard links are aliases to the same inode; symlinks are pointers by path.",
      },
      points: 10,
      difficulty: "INTERMEDIATE",
      category: "links",
    },
    {
      id: "q-2-3",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué comando muestra espacio libre en sistemas de archivos montados?",
        en: "Which command shows free space on mounted filesystems?",
      },
      options: {
        es: ["du", "df", "ls -l", "free"],
        en: ["du", "df", "ls -l", "free"],
      },
      correctAnswer: "1",
      explanation: {
        es: "df reporta uso por partición montada; du mide directorios.",
        en: "df reports usage per mounted partition; du measures directories.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "disk",
    },
    {
      id: "q-2-4",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué opción de find busca archivos modificados en los últimos 3 días?",
        en: "Which find option finds files modified in the last 3 days?",
      },
      options: {
        es: ["-mtime 3", "-mtime -3", "-mtime +3", "-time 3"],
        en: ["-mtime 3", "-mtime -3", "-mtime +3", "-time 3"],
      },
      correctAnswer: "1",
      explanation: {
        es: "-mtime -3 significa menos de 3 días desde la modificación.",
        en: "-mtime -3 means less than 3 days since modification.",
      },
      points: 10,
      difficulty: "INTERMEDIATE",
      category: "find",
    },
    {
      id: "q-2-5",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Dónde se almacenan los logs del sistema?",
        en: "Where are system logs stored?",
      },
      options: {
        es: ["/etc/log", "/usr/log", "/var/log", "/log"],
        en: ["/etc/log", "/usr/log", "/var/log", "/log"],
      },
      correctAnswer: "2",
      explanation: {
        es: "/var/log concentra logs de sistema y aplicaciones.",
        en: "/var/log holds system and application logs.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "fhs",
    },
    {
      id: "q-2-6",
      type: "MULTIPLE_CHOICE",
      question: {
        es: '¿Qué tipo representa "l" al inicio de ls -l?',
        en: 'What type does "l" at the start of ls -l represent?',
      },
      options: {
        es: ["Archivo regular", "Directorio", "Enlace simbólico", "Dispositivo de bloque"],
        en: ["Regular file", "Directory", "Symbolic link", "Block device"],
      },
      correctAnswer: "2",
      explanation: {
        es: "l = link (simbólico); d = directorio; - = archivo regular.",
        en: "l = link (symbolic); d = directory; - = regular file.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "types",
    },
    {
      id: "q-2-7",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Cuál es el propósito de /tmp?",
        en: "What is the purpose of /tmp?",
      },
      options: {
        es: [
          "Plantillas del sistema",
          "Archivos temporales (a menudo borrados al reiniciar)",
          "Backups",
          "Home de usuarios",
        ],
        en: [
          "System templates",
          "Temporary files (often cleared on reboot)",
          "Backups",
          "User homes",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "/tmp es escribible por usuarios para datos temporales.",
        en: "/tmp is world-writable for temporary data.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "fhs",
    },
    {
      id: "q-2-8",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué comando determina el tipo real de un archivo?",
        en: "Which command determines a file's real type?",
      },
      options: {
        es: ["type", "file", "stat", "ls"],
        en: ["type", "file", "stat", "ls"],
      },
      correctAnswer: "1",
      explanation: {
        es: "file analiza magic bytes del contenido.",
        en: "file analyzes content magic bytes.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "metadata",
    },
    {
      id: "q-2-9",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Por qué locate es más rápido que find?",
        en: "Why is locate faster than find?",
      },
      options: {
        es: [
          "Usa menos memoria",
          "Consulta una base preindexada, no recorre el disco en vivo",
          "Es más nuevo",
          "Solo busca en /home",
        ],
        en: [
          "Uses less memory",
          "Queries a pre-built index, not live disk traversal",
          "It is newer",
          "Only searches /home",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "updatedb construye la base; find recorre el árbol en tiempo real.",
        en: "updatedb builds the index; find walks the tree live.",
      },
      points: 10,
      difficulty: "INTERMEDIATE",
      category: "search",
    },
    {
      id: "q-2-10",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué directorio contiene binarios esenciales del sistema (administración)?",
        en: "Which directory contains essential system administration binaries?",
      },
      options: {
        es: ["/usr/bin", "/sbin", "/opt", "/home"],
        en: ["/usr/bin", "/sbin", "/opt", "/home"],
      },
      correctAnswer: "1",
      explanation: {
        es: "/sbin tiene herramientas de arranque y administración del sistema.",
        en: "/sbin holds boot and system administration tools.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "fhs",
    },
  ],
  timeLimit: 30,
  passingScore: 80,
  maxAttempts: null,
  shuffleQuestions: true,
};

export const level2Skills: Skill[] = [
  {
    id: "fhs-hierarchy",
    slug: "fhs-hierarchy",
    name: { es: "Jerarquía FHS", en: "FHS Hierarchy" },
    description: {
      es: "Conocer /etc, /var, /usr, /home y directorios clave",
      en: "Know /etc, /var, /usr, /home and key directories",
    },
    category: "filesystem",
    icon: "🗂️",
    relatedModules: ["level-2"],
    order: 1,
  },
  {
    id: "file-links",
    slug: "file-links",
    name: { es: "Enlaces", en: "Links" },
    description: {
      es: "Crear y diagnosticar enlaces duros y simbólicos",
      en: "Create and troubleshoot hard and symbolic links",
    },
    category: "filesystem",
    icon: "🔗",
    relatedModules: ["level-2"],
    order: 2,
  },
  {
    id: "file-search",
    slug: "file-search",
    name: { es: "Búsqueda de archivos", en: "File search" },
    description: {
      es: "find, locate y criterios avanzados",
      en: "find, locate, and advanced criteria",
    },
    category: "filesystem",
    icon: "🔍",
    relatedModules: ["level-2"],
    order: 3,
  },
  {
    id: "disk-usage",
    slug: "disk-usage",
    name: { es: "Uso de disco", en: "Disk usage" },
    description: {
      es: "Monitorear espacio con df y du",
      en: "Monitor space with df and du",
    },
    category: "filesystem",
    icon: "💾",
    relatedModules: ["level-2"],
    order: 4,
  },
];
