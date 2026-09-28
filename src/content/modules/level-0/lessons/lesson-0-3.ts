import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson03Content: ContentBlock[] = [
  {
    id: "block-0-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Introducción",
        text: `Cada vez que abres una aplicación, el sistema operativo crea un proceso. Entender cómo funcionan los procesos y cómo se gestiona la memoria es fundamental para administrar sistemas Linux.

En esta lección aprenderás:
- Qué es un proceso y cómo se crea
- Cómo el sistema operativo gestiona la memoria
- La diferencia entre RAM y memoria virtual
- Por qué un sistema puede volverse lento`,
      },
      en: {
        title: "Introduction",
        text: `Every time you open an application, the operating system creates a process. Understanding how processes work and how memory is managed is fundamental for administering Linux systems.

In this lesson you will learn:
- What a process is and how it's created
- How the operating system manages memory
- The difference between RAM and virtual memory
- Why a system can become slow`,
      },
    },
  },
  {
    id: "block-0-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "¿Qué es un Proceso?",
        text: `Un **proceso** es un programa en ejecución. Cuando haces doble clic en un programa, el sistema:

1. Lee el programa del disco
2. Lo carga en la memoria RAM
3. Crea un proceso con un identificador único (PID)
4. Comienza a ejecutar las instrucciones

Un programa puede generar múltiples procesos, y un proceso puede tener múltiples hilos (threads).`,
      },
      en: {
        title: "What is a Process?",
        text: `A **process** is a running program. When you double-click a program, the system:

1. Reads the program from disk
2. Loads it into RAM memory
3. Creates a process with a unique identifier (PID)
4. Starts executing instructions

A program can generate multiple processes, and a process can have multiple threads.`,
      },
    },
  },
  {
    id: "block-0-3-3",
    type: "DIAGRAM",
    order: 3,
    content: {
      es: {
        title: "Ciclo de Vida de un Proceso",
        diagramData: {
          type: "flowchart",
          nodes: [
            { id: "new", label: "Nuevo", description: "Proceso creado" },
            { id: "ready", label: "Listo", description: "Esperando CPU" },
            { id: "running", label: "Ejecutando", description: "Usando la CPU" },
            { id: "waiting", label: "Esperando", description: "Esperando I/O" },
            { id: "terminated", label: "Terminado", description: "Proceso finalizado" },
          ],
          connections: [
            { from: "new", to: "ready" },
            { from: "ready", to: "running" },
            { from: "running", to: "waiting" },
            { from: "waiting", to: "ready" },
            { from: "running", to: "terminated" },
          ],
        },
      },
      en: {
        title: "Process Life Cycle",
        diagramData: {
          type: "flowchart",
          nodes: [
            { id: "new", label: "New", description: "Process created" },
            { id: "ready", label: "Ready", description: "Waiting for CPU" },
            { id: "running", label: "Running", description: "Using the CPU" },
            { id: "waiting", label: "Waiting", description: "Waiting for I/O" },
            { id: "terminated", label: "Terminated", description: "Process finished" },
          ],
          connections: [
            { from: "new", to: "ready" },
            { from: "ready", to: "running" },
            { from: "running", to: "waiting" },
            { from: "waiting", to: "ready" },
            { from: "running", to: "terminated" },
          ],
        },
      },
    },
  },
  {
    id: "block-0-3-4",
    type: "TEXT",
    order: 4,
    content: {
      es: {
        title: "El Scheduler (Planificador)",
        text: `La CPU solo puede ejecutar un proceso a la vez (por núcleo). El **scheduler** es la parte del kernel que decide qué proceso se ejecuta en cada momento.

**Cómo funciona:**
- Divide el tiempo de CPU en pequeños fragmentos (time slices)
- Alterna entre procesos tan rápido que parece que todos se ejecutan simultáneamente
- Prioriza procesos según su importancia

Esto se llama **multitarea** y es lo que permite tener múltiples programas abiertos al mismo tiempo.`,
      },
      en: {
        title: "The Scheduler",
        text: `The CPU can only execute one process at a time (per core). The **scheduler** is the part of the kernel that decides which process runs at any given moment.

**How it works:**
- Divides CPU time into small fragments (time slices)
- Alternates between processes so fast it seems they all run simultaneously
- Prioritizes processes according to their importance

This is called **multitasking** and is what allows having multiple programs open at the same time.`,
      },
    },
  },
  {
    id: "block-0-3-5",
    type: "KEY_CONCEPT",
    order: 5,
    content: {
      es: {
        title: "Gestión de Memoria",
        text: `Cada proceso necesita memoria para:
- Su código ejecutable
- Sus datos (variables, estructuras)
- La pila (stack) para llamadas a funciones
- El heap para memoria dinámica

El sistema operativo asigna memoria a cada proceso y **los aísla** para que no puedan acceder a la memoria de otros procesos.`,
      },
      en: {
        title: "Memory Management",
        text: `Each process needs memory for:
- Its executable code
- Its data (variables, structures)
- The stack for function calls
- The heap for dynamic memory

The operating system assigns memory to each process and **isolates them** so they cannot access other processes' memory.`,
      },
    },
  },
  {
    id: "block-0-3-6",
    type: "TEXT",
    order: 6,
    content: {
      es: {
        title: "Memoria Virtual",
        text: `¿Qué pasa si necesitas más RAM de la que tienes físicamente? El sistema usa **memoria virtual**.

**Cómo funciona:**
1. El sistema reserva espacio en el disco (swap)
2. Cuando la RAM se llena, mueve datos poco usados al disco
3. Cuando se necesitan, los trae de vuelta a la RAM

**Consecuencias:**
- Permite ejecutar más programas de los que cabrían en RAM
- Pero el disco es MUCHO más lento que la RAM
- Por eso un sistema con poca RAM se vuelve lento`,
      },
      en: {
        title: "Virtual Memory",
        text: `What happens if you need more RAM than you physically have? The system uses **virtual memory**.

**How it works:**
1. The system reserves space on disk (swap)
2. When RAM fills up, it moves rarely used data to disk
3. When needed, it brings them back to RAM

**Consequences:**
- Allows running more programs than would fit in RAM
- But disk is MUCH slower than RAM
- That's why a system with low RAM becomes slow`,
      },
    },
  },
  {
    id: "block-0-3-7",
    type: "WARNING",
    order: 7,
    content: {
      es: {
        title: "Cuidado con la memoria",
        text: `Cuando un sistema:
- Está constantemente usando swap (thrashing)
- Los procesos se vuelven lentos
- El disco tiene actividad constante

**Posibles causas:**
- Muy poca RAM para las aplicaciones abiertas
- Un proceso tiene una fuga de memoria (memory leak)
- Demasiados procesos ejecutándose

En Linux, puedes usar comandos como \`free\`, \`top\` o \`htop\` para monitorear la memoria.`,
      },
      en: {
        title: "Memory Warning",
        text: `When a system:
- Is constantly using swap (thrashing)
- Processes become slow
- Disk has constant activity

**Possible causes:**
- Too little RAM for open applications
- A process has a memory leak
- Too many processes running

In Linux, you can use commands like \`free\`, \`top\` or \`htop\` to monitor memory.`,
      },
    },
  },
  {
    id: "block-0-3-8",
    type: "TEXT",
    order: 8,
    content: {
      es: {
        title: "Resumen",
        text: `En esta lección aprendiste:

✅ Un **proceso** es un programa en ejecución con su propio espacio de memoria

✅ El **scheduler** decide qué proceso usa la CPU en cada momento

✅ Cada proceso pasa por estados: nuevo, listo, ejecutando, esperando, terminado

✅ La **memoria virtual** usa el disco cuando la RAM no es suficiente

✅ Un sistema lento puede indicar problemas de memoria`,
      },
      en: {
        title: "Summary",
        text: `In this lesson you learned:

✅ A **process** is a running program with its own memory space

✅ The **scheduler** decides which process uses the CPU at any given moment

✅ Each process goes through states: new, ready, running, waiting, terminated

✅ **Virtual memory** uses disk when RAM is not enough

✅ A slow system may indicate memory problems`,
      },
    },
  },
];

export const lesson03Exercises: Exercise[] = [
  {
    id: "ex-0-3-1",
    lessonId: "lesson-0-3",
    slug: "process-definition",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué es un proceso?",
      en: "What is a process?",
    },
    options: {
      es: [
        "Un archivo guardado en el disco",
        "Un programa en ejecución",
        "Un tipo de memoria RAM",
        "Una conexión de red",
      ],
      en: [
        "A file saved on disk",
        "A running program",
        "A type of RAM memory",
        "A network connection",
      ],
    },
    correctAnswer: "1",
    explanation: {
      es: "Un proceso es una instancia de un programa que está siendo ejecutada por el sistema.",
      en: "A process is an instance of a program being executed by the system.",
    },
    hints: {
      es: ["Un programa en el disco es solo código; necesita ejecutarse para ser un proceso"],
      en: ["A program on disk is just code; it needs to run to become a process"],
    },
    order: 1,
  },
  {
    id: "ex-0-3-2",
    lessonId: "lesson-0-3",
    slug: "scheduler-function",
    type: "TRUE_FALSE",
    question: {
      es: "El scheduler permite que múltiples procesos parezcan ejecutarse simultáneamente.",
      en: "The scheduler allows multiple processes to appear to run simultaneously.",
    },
    correctAnswer: "true",
    explanation: {
      es: "El scheduler alterna entre procesos tan rápido que parece que todos corren al mismo tiempo.",
      en: "The scheduler alternates between processes so fast it seems they all run at the same time.",
    },
    hints: {
      es: ["Piensa en cómo puedes tener varios programas abiertos a la vez"],
      en: ["Think about how you can have several programs open at once"],
    },
    order: 2,
  },
  {
    id: "ex-0-3-3",
    lessonId: "lesson-0-3",
    slug: "virtual-memory",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Por qué un computador se vuelve lento cuando usa mucha memoria virtual?",
      en: "Why does a computer become slow when using a lot of virtual memory?",
    },
    options: {
      es: [
        "Porque la CPU se apaga",
        "Porque el disco es mucho más lento que la RAM",
        "Porque la pantalla se congela",
        "Porque el internet se desconecta",
      ],
      en: [
        "Because the CPU turns off",
        "Because disk is much slower than RAM",
        "Because the screen freezes",
        "Because the internet disconnects",
      ],
    },
    correctAnswer: "1",
    explanation: {
      es: "La memoria virtual usa el disco duro, que es miles de veces más lento que la RAM.",
      en: "Virtual memory uses the hard drive, which is thousands of times slower than RAM.",
    },
    hints: {
      es: ["Compara la velocidad de un SSD con la RAM"],
      en: ["Compare the speed of an SSD with RAM"],
    },
    order: 3,
  },
];

export const lesson03Quiz: Quiz = {
  id: "quiz-0-3",
  lessonId: "lesson-0-3",
  questions: [
    {
      id: "quiz-0-3-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué identificador único recibe cada proceso cuando se crea?",
        en: "What unique identifier does each process receive when created?",
      },
      options: {
        es: ["UUID", "PID", "MAC", "IP"],
        en: ["UUID", "PID", "MAC", "IP"],
      },
      correctAnswer: "1",
      explanation: {
        es: "PID (Process ID) es el identificador único de cada proceso en el sistema.",
        en: "PID (Process ID) is the unique identifier of each process in the system.",
      },
      points: 5,
    },
    {
      id: "quiz-0-3-2",
      type: "TRUE_FALSE",
      question: {
        es: "Los procesos pueden acceder libremente a la memoria de otros procesos.",
        en: "Processes can freely access other processes' memory.",
      },
      correctAnswer: "false",
      explanation: {
        es: "El sistema operativo aísla la memoria de cada proceso por seguridad y estabilidad.",
        en: "The operating system isolates each process's memory for security and stability.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson03: Lesson = {
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
  contentBlocks: lesson03Content,
  exercises: lesson03Exercises,
  quiz: lesson03Quiz,
};
