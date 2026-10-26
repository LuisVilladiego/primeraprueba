import type { Module, Lesson, Lab, Exam, Skill } from "@/types";

export const level0Module: Module = {
  id: "level-0",
  courseId: "linux-academy",
  slug: "fundamentals",
  level: 0,
  title: {
    es: "Fundamentos de Computación",
    en: "Computing Fundamentals",
  },
  description: {
    es: "Antes de aprender Linux, necesitas entender cómo funciona un computador y un sistema operativo. Este nivel te dará los conceptos fundamentales.",
    en: "Before learning Linux, you need to understand how a computer and operating system work. This level will give you the fundamental concepts.",
  },
  icon: "🎯",
  order: 0,
  lessons: [],
  labs: [],
  exam: null,
  project: null,
  passingScore: 80,
  prerequisites: [],
  skills: [
    "hardware-basics",
    "os-concepts",
    "process-basics",
    "filesystem-concepts",
    "cli-vs-gui",
    "linux-history",
    "os-comparison",
  ],
};

export const level0Lessons: Lesson[] = [
  {
    id: "lesson-0-1",
    moduleId: "level-0",
    slug: "what-is-a-computer",
    title: {
      es: "¿Qué es un Computador?",
      en: "What is a Computer?",
    },
    description: {
      es: "Entiende los componentes básicos de hardware y software que forman un computador moderno.",
      en: "Understand the basic hardware and software components that make up a modern computer.",
    },
    order: 1,
    duration: 15,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-0-2",
    moduleId: "level-0",
    slug: "what-is-an-operating-system",
    title: {
      es: "¿Qué es un Sistema Operativo?",
      en: "What is an Operating System?",
    },
    description: {
      es: "Aprende qué es un sistema operativo, qué hace y por qué es esencial para usar un computador.",
      en: "Learn what an operating system is, what it does, and why it's essential for using a computer.",
    },
    order: 2,
    duration: 20,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-0-3",
    moduleId: "level-0",
    slug: "processes-and-memory",
    title: {
      es: "Procesos y Memoria",
      en: "Processes and Memory",
    },
    description: {
      es: "Descubre cómo el sistema operativo gestiona los programas en ejecución y la memoria del sistema.",
      en: "Discover how the operating system manages running programs and system memory.",
    },
    order: 3,
    duration: 20,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-0-4",
    moduleId: "level-0",
    slug: "storage-and-files",
    title: {
      es: "Almacenamiento y Archivos",
      en: "Storage and Files",
    },
    description: {
      es: "Comprende cómo se almacenan los datos en el disco y cómo se organizan en archivos y carpetas.",
      en: "Understand how data is stored on disk and how it's organized into files and folders.",
    },
    order: 4,
    duration: 15,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-0-5",
    moduleId: "level-0",
    slug: "user-interfaces",
    title: {
      es: "Interfaces de Usuario: CLI vs GUI",
      en: "User Interfaces: CLI vs GUI",
    },
    description: {
      es: "Conoce las diferencias entre la interfaz gráfica y la línea de comandos, y por qué aprender CLI es importante.",
      en: "Learn the differences between graphical interface and command line, and why learning CLI is important.",
    },
    order: 5,
    duration: 15,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-0-6",
    moduleId: "level-0",
    slug: "linux-history",
    title: {
      es: "Historia de Linux",
      en: "History of Linux",
    },
    description: {
      es: "Conoce los orígenes de UNIX, GNU, el kernel Linux y las distribuciones más populares.",
      en: "Learn about the origins of UNIX, GNU, the Linux kernel, and the most popular distributions.",
    },
    order: 6,
    duration: 20,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-0-7",
    moduleId: "level-0",
    slug: "linux-vs-windows-vs-macos",
    title: {
      es: "Linux vs Windows vs macOS",
      en: "Linux vs Windows vs macOS",
    },
    description: {
      es: "Compara los tres sistemas operativos más populares y entiende cuándo usar cada uno.",
      en: "Compare the three most popular operating systems and understand when to use each one.",
    },
    order: 7,
    duration: 15,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
];

export const level0Labs: Lab[] = [
  {
    id: "lab-0-1",
    moduleId: "level-0",
    slug: "identify-components",
    title: {
      es: "Identifica los componentes del sistema",
      en: "Identify system components",
    },
    description: {
      es: "Explora tu computador y aprende a identificar sus componentes de hardware y software.",
      en: "Explore your computer and learn to identify its hardware and software components.",
    },
    objectives: {
      es: [
        "Identificar los componentes de hardware de tu computador",
        "Ver información del sistema operativo",
        "Entender qué programas están instalados",
      ],
      en: [
        "Identify the hardware components of your computer",
        "View operating system information",
        "Understand what programs are installed",
      ],
    },
    prerequisites: {
      es: ["Haber completado las lecciones 1-4"],
      en: ["Having completed lessons 1-4"],
    },
    instructions: {
      es: [
        { step: 1, instruction: "Abre la información del sistema en tu computador", expectedResult: "Ventana de información del sistema visible" },
        { step: 2, instruction: "Identifica el procesador (CPU)", expectedResult: "Nombre y velocidad del CPU" },
        { step: 3, instruction: "Identifica la cantidad de memoria RAM", expectedResult: "Cantidad de RAM en GB" },
        { step: 4, instruction: "Identifica el almacenamiento disponible", expectedResult: "Capacidad del disco en GB/TB" },
        { step: 5, instruction: "Identifica el sistema operativo", expectedResult: "Nombre y versión del SO" },
      ],
      en: [
        { step: 1, instruction: "Open system information on your computer", expectedResult: "System information window visible" },
        { step: 2, instruction: "Identify the processor (CPU)", expectedResult: "CPU name and speed" },
        { step: 3, instruction: "Identify the amount of RAM memory", expectedResult: "Amount of RAM in GB" },
        { step: 4, instruction: "Identify available storage", expectedResult: "Disk capacity in GB/TB" },
        { step: 5, instruction: "Identify the operating system", expectedResult: "OS name and version" },
      ],
    },
    hints: {
      es: [
        "En Windows: Configuración > Sistema > Acerca de",
        "En macOS: Menú Apple > Acerca de esta Mac",
        "En Linux: Usa el comando 'neofetch' o revisa /etc/os-release",
      ],
      en: [
        "On Windows: Settings > System > About",
        "On macOS: Apple Menu > About This Mac",
        "On Linux: Use the 'neofetch' command or check /etc/os-release",
      ],
    },
    solution: {
      es: "Debes poder identificar: CPU (ej: Intel Core i7), RAM (ej: 16 GB), Almacenamiento (ej: 512 GB SSD), y Sistema Operativo (ej: Windows 11, macOS Ventura, Ubuntu 22.04).",
      en: "You should be able to identify: CPU (e.g., Intel Core i7), RAM (e.g., 16 GB), Storage (e.g., 512 GB SSD), and Operating System (e.g., Windows 11, macOS Ventura, Ubuntu 22.04).",
    },
    validationCriteria: [],
    difficulty: "BEGINNER",
    estimatedTime: 15,
    order: 1,
  },
  {
    id: "lab-0-2",
    moduleId: "level-0",
    slug: "task-manager",
    title: {
      es: "Explora el administrador de tareas",
      en: "Explore the task manager",
    },
    description: {
      es: "Aprende a usar el administrador de tareas para ver procesos, uso de CPU y memoria.",
      en: "Learn to use the task manager to view processes, CPU and memory usage.",
    },
    objectives: {
      es: [
        "Abrir el administrador de tareas",
        "Identificar procesos en ejecución",
        "Ver el uso de CPU y memoria",
        "Entender qué aplicaciones consumen más recursos",
      ],
      en: [
        "Open the task manager",
        "Identify running processes",
        "View CPU and memory usage",
        "Understand which applications consume more resources",
      ],
    },
    prerequisites: {
      es: ["Haber completado la lección sobre procesos y memoria"],
      en: ["Having completed the lesson on processes and memory"],
    },
    instructions: {
      es: [
        { step: 1, instruction: "Abre el administrador de tareas", expectedResult: "Ventana del administrador visible" },
        { step: 2, instruction: "Identifica 3 procesos que reconozcas", expectedResult: "Lista de procesos conocidos" },
        { step: 3, instruction: "Observa el uso de CPU actual", expectedResult: "Porcentaje de uso de CPU" },
        { step: 4, instruction: "Observa el uso de memoria actual", expectedResult: "Porcentaje o cantidad de RAM usada" },
        { step: 5, instruction: "Identifica qué proceso usa más CPU", expectedResult: "Nombre del proceso con mayor uso" },
      ],
      en: [
        { step: 1, instruction: "Open the task manager", expectedResult: "Task manager window visible" },
        { step: 2, instruction: "Identify 3 processes you recognize", expectedResult: "List of known processes" },
        { step: 3, instruction: "Observe current CPU usage", expectedResult: "CPU usage percentage" },
        { step: 4, instruction: "Observe current memory usage", expectedResult: "RAM usage percentage or amount" },
        { step: 5, instruction: "Identify which process uses the most CPU", expectedResult: "Name of the process with highest usage" },
      ],
    },
    hints: {
      es: [
        "En Windows: Ctrl + Shift + Esc",
        "En macOS: Monitor de Actividad",
        "En Linux: htop o gnome-system-monitor",
      ],
      en: [
        "On Windows: Ctrl + Shift + Esc",
        "On macOS: Activity Monitor",
        "On Linux: htop or gnome-system-monitor",
      ],
    },
    solution: {
      es: "Debes poder ver una lista de procesos, el porcentaje de CPU y memoria en uso, e identificar qué aplicaciones consumen más recursos.",
      en: "You should be able to see a list of processes, CPU and memory usage percentage, and identify which applications consume more resources.",
    },
    validationCriteria: [],
    difficulty: "BEGINNER",
    estimatedTime: 15,
    order: 2,
  },
];

export const level0Exam: Exam = {
  id: "exam-level-0",
  moduleId: "level-0",
  title: {
    es: "Examen Final - Fundamentos de Computación",
    en: "Final Exam - Computing Fundamentals",
  },
  description: {
    es: "Demuestra tu comprensión de los conceptos básicos de computación, hardware, sistemas operativos y la historia de Linux.",
    en: "Demonstrate your understanding of basic computing concepts, hardware, operating systems, and Linux history.",
  },
  questions: [
    {
      id: "q-0-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Cuál de los siguientes es un componente de HARDWARE?",
        en: "Which of the following is a HARDWARE component?",
      },
      options: {
        es: ["Sistema Operativo", "Procesador (CPU)", "Navegador Web", "Base de Datos"],
        en: ["Operating System", "Processor (CPU)", "Web Browser", "Database"],
      },
      correctAnswer: "1",
      explanation: {
        es: "El procesador (CPU) es un componente físico del computador, mientras que los demás son software.",
        en: "The processor (CPU) is a physical component of the computer, while the others are software.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "hardware",
    },
    {
      id: "q-0-2",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Cuál es la función principal de la memoria RAM?",
        en: "What is the main function of RAM memory?",
      },
      options: {
        es: [
          "Almacenar datos permanentemente",
          "Almacenar datos temporalmente mientras el computador está encendido",
          "Procesar instrucciones",
          "Mostrar gráficos en pantalla",
        ],
        en: [
          "Store data permanently",
          "Temporarily store data while the computer is on",
          "Process instructions",
          "Display graphics on screen",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "La RAM es memoria volátil que almacena datos temporalmente. Cuando apagas el computador, los datos en RAM se pierden.",
        en: "RAM is volatile memory that temporarily stores data. When you turn off the computer, data in RAM is lost.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "hardware",
    },
    {
      id: "q-0-3",
      type: "TRUE_FALSE",
      question: {
        es: "El kernel es la parte del sistema operativo que interactúa directamente con el hardware.",
        en: "The kernel is the part of the operating system that interacts directly with the hardware.",
      },
      correctAnswer: "true",
      explanation: {
        es: "Correcto. El kernel es el núcleo del sistema operativo y es responsable de comunicarse con el hardware.",
        en: "Correct. The kernel is the core of the operating system and is responsible for communicating with the hardware.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "os-concepts",
    },
    {
      id: "q-0-4",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué es un proceso en el contexto de sistemas operativos?",
        en: "What is a process in the context of operating systems?",
      },
      options: {
        es: [
          "Un archivo almacenado en el disco",
          "Un programa que está siendo ejecutado",
          "Una conexión de red",
          "Un dispositivo de hardware",
        ],
        en: [
          "A file stored on disk",
          "A program that is being executed",
          "A network connection",
          "A hardware device",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "Un proceso es una instancia de un programa en ejecución. Tiene su propio espacio de memoria y recursos asignados.",
        en: "A process is an instance of a running program. It has its own memory space and assigned resources.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "processes",
    },
    {
      id: "q-0-5",
      type: "TRUE_FALSE",
      question: {
        es: "Los datos en un SSD se mantienen incluso cuando el computador está apagado.",
        en: "Data on an SSD is retained even when the computer is off.",
      },
      correctAnswer: "true",
      explanation: {
        es: "Correcto. El almacenamiento (SSD o HDD) es no volátil, lo que significa que los datos persisten sin energía.",
        en: "Correct. Storage (SSD or HDD) is non-volatile, meaning data persists without power.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "storage",
    },
    {
      id: "q-0-6",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Cuál es la principal ventaja de la línea de comandos (CLI) sobre la interfaz gráfica (GUI)?",
        en: "What is the main advantage of the command line (CLI) over the graphical interface (GUI)?",
      },
      options: {
        es: [
          "Es más fácil de usar para principiantes",
          "Permite automatización y mayor control",
          "Muestra imágenes y videos",
          "Requiere menos memoria",
        ],
        en: [
          "It's easier to use for beginners",
          "It allows automation and greater control",
          "It displays images and videos",
          "It requires less memory",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "La CLI permite automatizar tareas mediante scripts, acceder a funciones avanzadas y trabajar más eficientemente en servidores.",
        en: "The CLI allows automating tasks through scripts, accessing advanced functions, and working more efficiently on servers.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "cli-gui",
    },
    {
      id: "q-0-7",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Quién creó el kernel Linux?",
        en: "Who created the Linux kernel?",
      },
      options: {
        es: ["Richard Stallman", "Linus Torvalds", "Bill Gates", "Steve Jobs"],
        en: ["Richard Stallman", "Linus Torvalds", "Bill Gates", "Steve Jobs"],
      },
      correctAnswer: "1",
      explanation: {
        es: "Linus Torvalds creó el kernel Linux en 1991. Richard Stallman fundó el proyecto GNU.",
        en: "Linus Torvalds created the Linux kernel in 1991. Richard Stallman founded the GNU project.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "linux-history",
    },
    {
      id: "q-0-8",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué significa GNU?",
        en: "What does GNU stand for?",
      },
      options: {
        es: [
          "General Network Utility",
          "GNU's Not Unix",
          "Global Network Universal",
          "Graphical Network Unit",
        ],
        en: [
          "General Network Utility",
          "GNU's Not Unix",
          "Global Network Universal",
          "Graphical Network Unit",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "GNU es un acrónimo recursivo que significa 'GNU's Not Unix'. Es un proyecto de software libre iniciado por Richard Stallman.",
        en: "GNU is a recursive acronym meaning 'GNU's Not Unix'. It's a free software project started by Richard Stallman.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "linux-history",
    },
    {
      id: "q-0-9",
      type: "TRUE_FALSE",
      question: {
        es: "Linux es el sistema operativo más usado en servidores web.",
        en: "Linux is the most used operating system on web servers.",
      },
      correctAnswer: "true",
      explanation: {
        es: "Correcto. Más del 90% de los servidores web en Internet utilizan Linux.",
        en: "Correct. More than 90% of web servers on the Internet use Linux.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "linux-history",
    },
    {
      id: "q-0-10",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Cuál de estas NO es una distribución de Linux?",
        en: "Which of these is NOT a Linux distribution?",
      },
      options: {
        es: ["Ubuntu", "Fedora", "macOS", "Debian"],
        en: ["Ubuntu", "Fedora", "macOS", "Debian"],
      },
      correctAnswer: "2",
      explanation: {
        es: "macOS es el sistema operativo de Apple, basado en Darwin/BSD, no en Linux. Ubuntu, Fedora y Debian son distribuciones de Linux.",
        en: "macOS is Apple's operating system, based on Darwin/BSD, not Linux. Ubuntu, Fedora, and Debian are Linux distributions.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "linux-history",
    },
    {
      id: "q-0-11",
      type: "SCENARIO",
      question: {
        es: "Tu computador está funcionando muy lento. Abres el administrador de tareas y ves que la CPU está al 100% de uso. ¿Qué deberías hacer primero?",
        en: "Your computer is running very slow. You open the task manager and see that the CPU is at 100% usage. What should you do first?",
      },
      options: {
        es: [
          "Apagar inmediatamente el computador",
          "Identificar qué proceso está usando más CPU y evaluar si es necesario",
          "Instalar más RAM",
          "Formatear el disco duro",
        ],
        en: [
          "Immediately turn off the computer",
          "Identify which process is using the most CPU and evaluate if it's necessary",
          "Install more RAM",
          "Format the hard drive",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "Primero debes identificar qué proceso consume los recursos. Puede ser un programa legítimo trabajando o un problema que necesita atención.",
        en: "First you should identify which process is consuming resources. It could be a legitimate program working or a problem that needs attention.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "troubleshooting",
    },
    {
      id: "q-0-12",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Cuál es la diferencia principal entre un SSD y un HDD?",
        en: "What is the main difference between an SSD and an HDD?",
      },
      options: {
        es: [
          "El SSD usa partes mecánicas, el HDD usa memoria flash",
          "El SSD usa memoria flash y es más rápido, el HDD usa discos magnéticos",
          "No hay diferencia, son lo mismo",
          "El HDD es siempre más pequeño que el SSD",
        ],
        en: [
          "SSD uses mechanical parts, HDD uses flash memory",
          "SSD uses flash memory and is faster, HDD uses magnetic disks",
          "There's no difference, they're the same",
          "HDD is always smaller than SSD",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "El SSD (Solid State Drive) usa memoria flash sin partes móviles, lo que lo hace más rápido y resistente. El HDD usa discos magnéticos que giran.",
        en: "SSD (Solid State Drive) uses flash memory with no moving parts, making it faster and more durable. HDD uses spinning magnetic disks.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "hardware",
    },
    {
      id: "q-0-13",
      type: "TRUE_FALSE",
      question: {
        es: "Un sistema operativo es necesario para que un computador pueda ejecutar programas.",
        en: "An operating system is necessary for a computer to run programs.",
      },
      correctAnswer: "true",
      explanation: {
        es: "El sistema operativo gestiona los recursos del hardware y proporciona servicios esenciales para que los programas puedan ejecutarse.",
        en: "The operating system manages hardware resources and provides essential services for programs to run.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "os-concepts",
    },
    {
      id: "q-0-14",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Cuál es el orden cronológico correcto, del más antiguo al más reciente?",
        en: "Which is the correct chronological order, from oldest to most recent?",
      },
      options: {
        es: [
          "UNIX, proyecto GNU, kernel Linux, Ubuntu",
          "Ubuntu, kernel Linux, GNU, UNIX",
          "Kernel Linux, UNIX, Ubuntu, GNU",
          "GNU, Ubuntu, UNIX, kernel Linux",
        ],
        en: [
          "UNIX, GNU project, Linux kernel, Ubuntu",
          "Ubuntu, Linux kernel, GNU, UNIX",
          "Linux kernel, UNIX, Ubuntu, GNU",
          "GNU, Ubuntu, UNIX, Linux kernel",
        ],
      },
      correctAnswer: "0",
      explanation: {
        es: "UNIX (1969) → GNU (1983) → Linux kernel (1991) → Ubuntu (2004)",
        en: "UNIX (1969) → GNU (1983) → Linux kernel (1991) → Ubuntu (2004)",
      },
      points: 10,
      difficulty: "INTERMEDIATE",
      category: "linux-history",
    },
    {
      id: "q-0-15",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Por qué Linux es popular en servidores?",
        en: "Why is Linux popular on servers?",
      },
      options: {
        es: [
          "Porque es el único sistema operativo que existe",
          "Por su estabilidad, seguridad, y ser de código abierto",
          "Porque tiene mejor interfaz gráfica que Windows",
          "Porque es el más fácil de usar",
        ],
        en: [
          "Because it's the only operating system that exists",
          "For its stability, security, and being open source",
          "Because it has a better graphical interface than Windows",
          "Because it's the easiest to use",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "Linux es popular en servidores por su estabilidad, seguridad, eficiencia, y porque es de código abierto, permitiendo personalización sin costos de licencia.",
        en: "Linux is popular on servers for its stability, security, efficiency, and because it's open source, allowing customization without license costs.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "linux-history",
    },
    {
      id: "q-0-16",
      type: "SCENARIO",
      question: {
        es: "Necesitas administrar un servidor remoto que no tiene monitor ni teclado conectados. ¿Qué tipo de interfaz usarías?",
        en: "You need to manage a remote server that has no monitor or keyboard connected. What type of interface would you use?",
      },
      options: {
        es: [
          "Interfaz gráfica (GUI) local",
          "Línea de comandos (CLI) a través de SSH",
          "Pantalla táctil",
          "Control por voz",
        ],
        en: [
          "Local graphical interface (GUI)",
          "Command line (CLI) through SSH",
          "Touch screen",
          "Voice control",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "Para administrar servidores remotos, se usa la línea de comandos a través de SSH, que permite conexión segura sin necesidad de interfaz gráfica.",
        en: "To manage remote servers, the command line through SSH is used, which allows secure connection without needing a graphical interface.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "cli-gui",
    },
    {
      id: "q-0-17",
      type: "TRUE_FALSE",
      question: {
        es: "Un proceso puede tener múltiples hilos (threads) ejecutándose al mismo tiempo.",
        en: "A process can have multiple threads running at the same time.",
      },
      correctAnswer: "true",
      explanation: {
        es: "Correcto. Los hilos son subprocesos dentro de un proceso que comparten el mismo espacio de memoria y pueden ejecutarse en paralelo.",
        en: "Correct. Threads are sub-processes within a process that share the same memory space and can run in parallel.",
      },
      points: 5,
      difficulty: "INTERMEDIATE",
      category: "processes",
    },
    {
      id: "q-0-18",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué componente del computador ejecuta las instrucciones de los programas?",
        en: "What component of the computer executes program instructions?",
      },
      options: {
        es: ["RAM", "Disco duro", "CPU", "Tarjeta de red"],
        en: ["RAM", "Hard drive", "CPU", "Network card"],
      },
      correctAnswer: "2",
      explanation: {
        es: "La CPU (Central Processing Unit) es el 'cerebro' del computador que ejecuta las instrucciones de los programas.",
        en: "The CPU (Central Processing Unit) is the 'brain' of the computer that executes program instructions.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "hardware",
    },
    {
      id: "q-0-19",
      type: "TRUE_FALSE",
      question: {
        es: "Windows, macOS y Linux son todos sistemas operativos de código abierto.",
        en: "Windows, macOS, and Linux are all open source operating systems.",
      },
      correctAnswer: "false",
      explanation: {
        es: "Solo Linux es completamente de código abierto. Windows es propietario de Microsoft y macOS es propietario de Apple.",
        en: "Only Linux is completely open source. Windows is proprietary to Microsoft and macOS is proprietary to Apple.",
      },
      points: 5,
      difficulty: "BEGINNER",
      category: "os-comparison",
    },
    {
      id: "q-0-20",
      type: "SCENARIO",
      question: {
        es: "Estás trabajando y el computador se congela completamente. El mouse y el teclado no responden. ¿Cuál es la explicación más probable?",
        en: "You're working and the computer freezes completely. The mouse and keyboard don't respond. What is the most likely explanation?",
      },
      options: {
        es: [
          "El disco duro está lleno",
          "Un proceso está consumiendo todos los recursos del sistema",
          "La pantalla está rota",
          "El navegador web tiene muchas pestañas abiertas",
        ],
        en: [
          "The hard drive is full",
          "A process is consuming all system resources",
          "The screen is broken",
          "The web browser has too many tabs open",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "Cuando un computador se congela completamente, generalmente un proceso está consumiendo todos los recursos de CPU o memoria, impidiendo que el sistema responda.",
        en: "When a computer freezes completely, usually a process is consuming all CPU or memory resources, preventing the system from responding.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "troubleshooting",
    },
  ],
  timeLimit: null,
  passingScore: 80,
  maxAttempts: null,
  shuffleQuestions: true,
};

export const level0Skills: Skill[] = [
  {
    id: "hardware-basics",
    slug: "hardware-basics",
    name: { es: "Hardware básico", en: "Basic hardware" },
    description: { es: "Conocimiento de componentes físicos del computador", en: "Knowledge of physical computer components" },
    category: "fundamentals",
    icon: "🖥️",
    relatedModules: ["level-0"],
    order: 1,
  },
  {
    id: "os-concepts",
    slug: "os-concepts",
    name: { es: "Conceptos de SO", en: "OS concepts" },
    description: { es: "Comprensión de qué es y cómo funciona un sistema operativo", en: "Understanding of what an operating system is and how it works" },
    category: "fundamentals",
    icon: "⚙️",
    relatedModules: ["level-0"],
    order: 2,
  },
  {
    id: "process-basics",
    slug: "process-basics",
    name: { es: "Procesos básicos", en: "Basic processes" },
    description: { es: "Entendimiento de procesos y gestión de memoria", en: "Understanding of processes and memory management" },
    category: "fundamentals",
    icon: "🔄",
    relatedModules: ["level-0"],
    order: 3,
  },
  {
    id: "filesystem-concepts",
    slug: "filesystem-concepts",
    name: { es: "Conceptos de filesystem", en: "Filesystem concepts" },
    description: { es: "Comprensión de almacenamiento y organización de archivos", en: "Understanding of storage and file organization" },
    category: "fundamentals",
    icon: "📁",
    relatedModules: ["level-0"],
    order: 4,
  },
  {
    id: "cli-vs-gui",
    slug: "cli-vs-gui",
    name: { es: "CLI vs GUI", en: "CLI vs GUI" },
    description: { es: "Conocimiento de interfaces de usuario", en: "Knowledge of user interfaces" },
    category: "fundamentals",
    icon: "💻",
    relatedModules: ["level-0"],
    order: 5,
  },
  {
    id: "linux-history",
    slug: "linux-history",
    name: { es: "Historia de Linux", en: "Linux history" },
    description: { es: "Conocimiento de los orígenes y evolución de Linux", en: "Knowledge of Linux origins and evolution" },
    category: "fundamentals",
    icon: "📜",
    relatedModules: ["level-0"],
    order: 6,
  },
];
