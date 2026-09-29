import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson02Content: ContentBlock[] = [
  {
    id: "block-0-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Introducción",
        text: `Un sistema operativo es el software más importante de tu computador. Sin él, el hardware sería inútil: no podrías escribir documentos, navegar por internet, ni ejecutar ningún programa.

En esta lección aprenderás:
- Qué es exactamente un sistema operativo
- Qué funciones cumple
- Cómo se estructura internamente
- Por qué es esencial para todo lo que haces en un computador`,
      },
      en: {
        title: "Introduction",
        text: `An operating system is the most important software on your computer. Without it, the hardware would be useless: you couldn't write documents, browse the internet, or run any program.

In this lesson you will learn:
- What exactly an operating system is
- What functions it performs
- How it's structured internally
- Why it's essential for everything you do on a computer`,
      },
    },
  },
  {
    id: "block-0-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "¿Qué es un Sistema Operativo?",
        text: `Un **Sistema Operativo (SO)** es el software que actúa como intermediario entre el hardware del computador y los programas que usas.

Piensa en el SO como el gerente de un edificio de oficinas:
- Gestiona los recursos (electricidad, agua, espacios)
- Coordina a los trabajadores (programas)
- Establece las reglas de uso
- Se asegura de que todo funcione sin conflictos`,
      },
      en: {
        title: "What is an Operating System?",
        text: `An **Operating System (OS)** is the software that acts as an intermediary between the computer's hardware and the programs you use.

Think of the OS as the manager of an office building:
- Manages resources (electricity, water, spaces)
- Coordinates workers (programs)
- Establishes usage rules
- Ensures everything works without conflicts`,
      },
    },
  },
  {
    id: "block-0-2-3",
    type: "DIAGRAM",
    order: 3,
    content: {
      es: {
        title: "Capas del Sistema",
        diagramData: {
          type: "tree",
          nodes: [
            {
              id: "layers",
              label: "Arquitectura del Sistema",
              children: [
                { id: "apps", label: "Aplicaciones", description: "Navegador, editor, juegos..." },
                { id: "os", label: "Sistema Operativo", description: "Windows, Linux, macOS" },
                { id: "kernel", label: "Kernel", description: "Núcleo del SO" },
                { id: "drivers", label: "Drivers", description: "Controladores de hardware" },
                { id: "hardware", label: "Hardware", description: "CPU, RAM, Disco, etc." },
              ],
            },
          ],
        },
      },
      en: {
        title: "System Layers",
        diagramData: {
          type: "tree",
          nodes: [
            {
              id: "layers",
              label: "System Architecture",
              children: [
                { id: "apps", label: "Applications", description: "Browser, editor, games..." },
                { id: "os", label: "Operating System", description: "Windows, Linux, macOS" },
                { id: "kernel", label: "Kernel", description: "OS core" },
                { id: "drivers", label: "Drivers", description: "Hardware controllers" },
                { id: "hardware", label: "Hardware", description: "CPU, RAM, Disk, etc." },
              ],
            },
          ],
        },
      },
    },
  },
  {
    id: "block-0-2-4",
    type: "TEXT",
    order: 4,
    content: {
      es: {
        title: "Funciones Principales del Sistema Operativo",
        text: `El sistema operativo tiene varias responsabilidades críticas:

**1. Gestión de Procesos**
Controla qué programas se ejecutan, cuándo y cuántos recursos reciben.

**2. Gestión de Memoria**
Asigna RAM a los programas y se asegura de que no interfieran entre sí.

**3. Gestión de Almacenamiento**
Organiza los archivos en el disco, controla lectura/escritura.

**4. Gestión de Dispositivos**
Comunica con impresoras, teclados, mouse, pantallas, etc.

**5. Seguridad**
Controla quién puede acceder a qué recursos.

**6. Interfaz de Usuario**
Proporciona la forma de interactuar con el sistema (GUI o CLI).`,
      },
      en: {
        title: "Main Functions of the Operating System",
        text: `The operating system has several critical responsibilities:

**1. Process Management**
Controls which programs run, when, and how many resources they receive.

**2. Memory Management**
Allocates RAM to programs and ensures they don't interfere with each other.

**3. Storage Management**
Organizes files on disk, controls reading/writing.

**4. Device Management**
Communicates with printers, keyboards, mouse, screens, etc.

**5. Security**
Controls who can access what resources.

**6. User Interface**
Provides the way to interact with the system (GUI or CLI).`,
      },
    },
  },
  {
    id: "block-0-2-5",
    type: "KEY_CONCEPT",
    order: 5,
    content: {
      es: {
        title: "El Kernel: El Corazón del Sistema",
        text: `El **Kernel** es el núcleo del sistema operativo. Es la parte que se comunica directamente con el hardware.

**Funciones del Kernel:**
- Gestionar la CPU y decidir qué proceso se ejecuta
- Controlar el acceso a la memoria RAM
- Manejar los dispositivos de entrada/salida
- Proporcionar servicios básicos a los programas

En Linux, el kernel fue creado por Linus Torvalds y es de código abierto.`,
      },
      en: {
        title: "The Kernel: The Heart of the System",
        text: `The **Kernel** is the core of the operating system. It's the part that communicates directly with the hardware.

**Kernel Functions:**
- Manage the CPU and decide which process runs
- Control access to RAM memory
- Handle input/output devices
- Provide basic services to programs

In Linux, the kernel was created by Linus Torvalds and is open source.`,
      },
    },
  },
  {
    id: "block-0-2-6",
    type: "TEXT",
    order: 6,
    content: {
      es: {
        title: "Espacio de Usuario vs Espacio de Kernel",
        text: `El sistema operativo divide la memoria en dos espacios:

**Espacio de Kernel (Kernel Space)**
- Donde se ejecuta el kernel y los drivers
- Acceso total al hardware
- Si algo falla aquí, el sistema se cuelga

**Espacio de Usuario (User Space)**
- Donde se ejecutan tus programas
- Acceso restringido al hardware
- Si un programa falla, solo ese programa se cierra

Esta separación es fundamental para la **estabilidad** y **seguridad** del sistema.`,
      },
      en: {
        title: "User Space vs Kernel Space",
        text: `The operating system divides memory into two spaces:

**Kernel Space**
- Where the kernel and drivers run
- Full access to hardware
- If something fails here, the system crashes

**User Space**
- Where your programs run
- Restricted hardware access
- If a program fails, only that program closes

This separation is fundamental for system **stability** and **security**.`,
      },
    },
  },
  {
    id: "block-0-2-7",
    type: "TIP",
    order: 7,
    content: {
      es: {
        title: "¿Por qué importa esto para Linux?",
        text: `Cuando administras un servidor Linux, necesitas entender:
- Cómo el kernel gestiona los recursos
- Cómo cargar/descargar módulos del kernel
- Cómo los procesos interactúan con el sistema
- Cómo diagnosticar problemas a nivel de sistema`,
      },
      en: {
        title: "Why does this matter for Linux?",
        text: `When administering a Linux server, you need to understand:
- How the kernel manages resources
- How to load/unload kernel modules
- How processes interact with the system
- How to diagnose system-level problems`,
      },
    },
  },
  {
    id: "block-0-2-8",
    type: "TEXT",
    order: 8,
    content: {
      es: {
        title: "Resumen",
        text: `En esta lección aprendiste:

✅ El **Sistema Operativo** es el software que gestiona el hardware y permite ejecutar programas

✅ Sus funciones principales son: gestión de procesos, memoria, almacenamiento, dispositivos y seguridad

✅ El **Kernel** es el núcleo que se comunica directamente con el hardware

✅ El sistema se divide en **espacio de kernel** (privilegiado) y **espacio de usuario** (restringido)

✅ Esta arquitectura proporciona estabilidad y seguridad`,
      },
      en: {
        title: "Summary",
        text: `In this lesson you learned:

✅ The **Operating System** is the software that manages hardware and allows programs to run

✅ Its main functions are: process, memory, storage, device, and security management

✅ The **Kernel** is the core that communicates directly with hardware

✅ The system is divided into **kernel space** (privileged) and **user space** (restricted)

✅ This architecture provides stability and security`,
      },
    },
  },
];

export const lesson02Exercises: Exercise[] = [
  {
    id: "ex-0-2-1",
    lessonId: "lesson-0-2",
    slug: "os-function",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Cuál es la función principal de un sistema operativo?",
      en: "What is the main function of an operating system?",
    },
    options: {
      es: [
        "Solo mostrar gráficos en pantalla",
        "Actuar como intermediario entre el hardware y los programas",
        "Conectarse a internet",
        "Almacenar archivos",
      ],
      en: [
        "Only display graphics on screen",
        "Act as an intermediary between hardware and programs",
        "Connect to the internet",
        "Store files",
      ],
    },
    correctAnswer: "1",
    explanation: {
      es: "El sistema operativo gestiona el hardware y proporciona servicios para que los programas puedan ejecutarse.",
      en: "The operating system manages hardware and provides services so programs can run.",
    },
    hints: {
      es: ["Piensa en el SO como un gerente que coordina todo"],
      en: ["Think of the OS as a manager that coordinates everything"],
    },
    order: 1,
  },
  {
    id: "ex-0-2-2",
    lessonId: "lesson-0-2",
    slug: "kernel-definition",
    type: "TRUE_FALSE",
    question: {
      es: "El kernel es la parte del sistema operativo que se comunica directamente con el hardware.",
      en: "The kernel is the part of the operating system that communicates directly with the hardware.",
    },
    correctAnswer: "true",
    explanation: {
      es: "Correcto. El kernel es el núcleo del SO y tiene acceso directo al hardware.",
      en: "Correct. The kernel is the core of the OS and has direct access to hardware.",
    },
    hints: {
      es: ["El kernel es el 'corazón' del sistema operativo"],
      en: ["The kernel is the 'heart' of the operating system"],
    },
    order: 2,
  },
  {
    id: "ex-0-2-3",
    lessonId: "lesson-0-2",
    slug: "user-space",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "Si un programa en el espacio de usuario falla, ¿qué sucede?",
      en: "If a program in user space fails, what happens?",
    },
    options: {
      es: [
        "Todo el sistema se reinicia",
        "Solo ese programa se cierra",
        "El kernel se corrompe",
        "Se borra el disco duro",
      ],
      en: [
        "The entire system restarts",
        "Only that program closes",
        "The kernel gets corrupted",
        "The hard drive gets erased",
      ],
    },
    correctAnswer: "1",
    explanation: {
      es: "La separación entre espacio de usuario y kernel protege al sistema. Si un programa falla, solo ese programa se ve afectado.",
      en: "The separation between user space and kernel protects the system. If a program fails, only that program is affected.",
    },
    hints: {
      es: ["El espacio de usuario está aislado del kernel"],
      en: ["User space is isolated from the kernel"],
    },
    order: 3,
  },
];

export const lesson02Quiz: Quiz = {
  id: "quiz-0-2",
  lessonId: "lesson-0-2",
  questions: [
    {
      id: "quiz-0-2-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué parte del sistema operativo gestiona qué programas se ejecutan y cuándo?",
        en: "Which part of the operating system manages which programs run and when?",
      },
      options: {
        es: ["Gestor de archivos", "Gestor de procesos", "Interfaz gráfica", "Navegador web"],
        en: ["File manager", "Process manager", "Graphical interface", "Web browser"],
      },
      correctAnswer: "1",
      explanation: {
        es: "El gestor de procesos es responsable de controlar la ejecución de programas.",
        en: "The process manager is responsible for controlling program execution.",
      },
      points: 5,
    },
    {
      id: "quiz-0-2-2",
      type: "TRUE_FALSE",
      question: {
        es: "Los drivers (controladores) permiten que el sistema operativo se comunique con dispositivos específicos.",
        en: "Drivers allow the operating system to communicate with specific devices.",
      },
      correctAnswer: "true",
      explanation: {
        es: "Los drivers son el puente entre el sistema operativo y cada dispositivo de hardware.",
        en: "Drivers are the bridge between the operating system and each hardware device.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson02: Lesson = {
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
  contentBlocks: lesson02Content,
  exercises: lesson02Exercises,
  quiz: lesson02Quiz,
};
