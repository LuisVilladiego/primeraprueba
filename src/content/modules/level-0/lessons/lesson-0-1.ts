import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson01Content: ContentBlock[] = [
  {
    id: "block-0-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Introducción",
        text: `Antes de aprender a usar Linux, es fundamental entender qué es un computador y cómo funciona. Un computador es una máquina electrónica diseñada para procesar información siguiendo instrucciones específicas.

En esta lección aprenderás:
- Qué componentes forman un computador
- La diferencia entre hardware y software
- Cómo estos componentes trabajan juntos`,
      },
      en: {
        title: "Introduction",
        text: `Before learning to use Linux, it's essential to understand what a computer is and how it works. A computer is an electronic machine designed to process information following specific instructions.

In this lesson you will learn:
- What components make up a computer
- The difference between hardware and software
- How these components work together`,
      },
    },
  },
  {
    id: "block-0-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "Hardware vs Software",
        text: `**Hardware** es todo lo que puedes tocar físicamente: el teclado, la pantalla, el procesador, la memoria RAM.

**Software** son los programas y datos que se ejecutan en el hardware: el sistema operativo, las aplicaciones, los archivos.

El hardware sin software es como un instrumento musical sin músico: tiene potencial pero no hace nada por sí solo.`,
      },
      en: {
        title: "Hardware vs Software",
        text: `**Hardware** is everything you can physically touch: the keyboard, the screen, the processor, the RAM memory.

**Software** is the programs and data that run on the hardware: the operating system, applications, files.

Hardware without software is like a musical instrument without a musician: it has potential but does nothing on its own.`,
      },
    },
  },
  {
    id: "block-0-1-3",
    type: "DIAGRAM",
    order: 3,
    content: {
      es: {
        title: "Componentes principales del computador",
        diagramData: {
          type: "tree",
          nodes: [
            {
              id: "computer",
              label: "Computador",
              children: [
                {
                  id: "hardware",
                  label: "Hardware",
                  description: "Componentes físicos",
                  children: [
                    { id: "cpu", label: "CPU", description: "Procesador - El cerebro" },
                    { id: "ram", label: "RAM", description: "Memoria temporal" },
                    { id: "storage", label: "Almacenamiento", description: "SSD/HDD" },
                    { id: "motherboard", label: "Placa madre", description: "Conecta todo" },
                    { id: "io", label: "Periféricos", description: "Teclado, mouse, pantalla" },
                  ],
                },
                {
                  id: "software",
                  label: "Software",
                  description: "Programas y datos",
                  children: [
                    { id: "os", label: "Sistema Operativo", description: "Windows, Linux, macOS" },
                    { id: "apps", label: "Aplicaciones", description: "Navegador, editores" },
                    { id: "data", label: "Datos", description: "Archivos, documentos" },
                  ],
                },
              ],
            },
          ],
        },
      },
      en: {
        title: "Main computer components",
        diagramData: {
          type: "tree",
          nodes: [
            {
              id: "computer",
              label: "Computer",
              children: [
                {
                  id: "hardware",
                  label: "Hardware",
                  description: "Physical components",
                  children: [
                    { id: "cpu", label: "CPU", description: "Processor - The brain" },
                    { id: "ram", label: "RAM", description: "Temporary memory" },
                    { id: "storage", label: "Storage", description: "SSD/HDD" },
                    { id: "motherboard", label: "Motherboard", description: "Connects everything" },
                    { id: "io", label: "Peripherals", description: "Keyboard, mouse, screen" },
                  ],
                },
                {
                  id: "software",
                  label: "Software",
                  description: "Programs and data",
                  children: [
                    { id: "os", label: "Operating System", description: "Windows, Linux, macOS" },
                    { id: "apps", label: "Applications", description: "Browser, editors" },
                    { id: "data", label: "Data", description: "Files, documents" },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  },
  {
    id: "block-0-1-4",
    type: "TEXT",
    order: 4,
    content: {
      es: {
        title: "El Procesador (CPU)",
        text: `La **CPU** (Central Processing Unit o Unidad Central de Procesamiento) es el "cerebro" del computador. Ejecuta todas las instrucciones de los programas.

**Características importantes:**
- **Velocidad (GHz)**: Cuántas operaciones puede realizar por segundo
- **Núcleos**: Múltiples "cerebros" trabajando en paralelo
- **Arquitectura**: x86_64 (Intel/AMD) o ARM (móviles, Apple Silicon)

Cuando abres un programa, la CPU lee sus instrucciones y las ejecuta una por una (o varias en paralelo si tiene múltiples núcleos).`,
      },
      en: {
        title: "The Processor (CPU)",
        text: `The **CPU** (Central Processing Unit) is the "brain" of the computer. It executes all program instructions.

**Important characteristics:**
- **Speed (GHz)**: How many operations it can perform per second
- **Cores**: Multiple "brains" working in parallel
- **Architecture**: x86_64 (Intel/AMD) or ARM (mobile, Apple Silicon)

When you open a program, the CPU reads its instructions and executes them one by one (or several in parallel if it has multiple cores).`,
      },
    },
  },
  {
    id: "block-0-1-5",
    type: "TEXT",
    order: 5,
    content: {
      es: {
        title: "Memoria RAM",
        text: `La **RAM** (Random Access Memory) es la memoria de trabajo del computador. Almacena temporalmente los datos que la CPU necesita acceder rápidamente.

**Características:**
- **Volátil**: Los datos se pierden al apagar el computador
- **Rápida**: Mucho más rápida que el disco duro
- **Limitada**: Típicamente 8GB, 16GB, 32GB o 64GB

Cuando abres un programa, se carga desde el disco a la RAM para que la CPU pueda acceder rápidamente a sus datos.`,
      },
      en: {
        title: "RAM Memory",
        text: `**RAM** (Random Access Memory) is the computer's working memory. It temporarily stores data that the CPU needs to access quickly.

**Characteristics:**
- **Volatile**: Data is lost when the computer is turned off
- **Fast**: Much faster than the hard drive
- **Limited**: Typically 8GB, 16GB, 32GB or 64GB

When you open a program, it loads from the disk into RAM so the CPU can quickly access its data.`,
      },
    },
  },
  {
    id: "block-0-1-6",
    type: "TEXT",
    order: 6,
    content: {
      es: {
        title: "Almacenamiento",
        text: `El **almacenamiento** guarda los datos de forma permanente, incluso cuando el computador está apagado.

**Tipos de almacenamiento:**

| Tipo | Descripción | Velocidad | Durabilidad |
|------|-------------|-----------|-------------|
| **HDD** | Discos magnéticos giratorios | Lento | Media |
| **SSD** | Memoria flash, sin partes móviles | Rápido | Alta |
| **NVMe** | SSD conectado directamente al CPU | Muy rápido | Alta |

El sistema operativo, tus programas y archivos se guardan aquí.`,
      },
      en: {
        title: "Storage",
        text: `**Storage** saves data permanently, even when the computer is off.

**Types of storage:**

| Type | Description | Speed | Durability |
|------|-------------|-------|------------|
| **HDD** | Spinning magnetic disks | Slow | Medium |
| **SSD** | Flash memory, no moving parts | Fast | High |
| **NVMe** | SSD connected directly to CPU | Very fast | High |

The operating system, your programs and files are stored here.`,
      },
    },
  },
  {
    id: "block-0-1-7",
    type: "TIP",
    order: 7,
    content: {
      es: {
        title: "¿Por qué importa esto para Linux?",
        text: `Entender estos componentes te ayudará a:
- Diagnosticar problemas de rendimiento
- Elegir hardware compatible
- Configurar correctamente tu sistema
- Entender mensajes de error relacionados con hardware`,
      },
      en: {
        title: "Why does this matter for Linux?",
        text: `Understanding these components will help you:
- Diagnose performance issues
- Choose compatible hardware
- Configure your system correctly
- Understand hardware-related error messages`,
      },
    },
  },
  {
    id: "block-0-1-8",
    type: "TEXT",
    order: 8,
    content: {
      es: {
        title: "Resumen",
        text: `En esta lección aprendiste:

✅ Un computador está compuesto por **hardware** (físico) y **software** (programas)

✅ La **CPU** es el procesador que ejecuta instrucciones

✅ La **RAM** es memoria temporal rápida para datos en uso

✅ El **almacenamiento** (SSD/HDD) guarda datos permanentemente

✅ Todos estos componentes trabajan juntos coordinados por el sistema operativo`,
      },
      en: {
        title: "Summary",
        text: `In this lesson you learned:

✅ A computer is made up of **hardware** (physical) and **software** (programs)

✅ The **CPU** is the processor that executes instructions

✅ **RAM** is fast temporary memory for data in use

✅ **Storage** (SSD/HDD) saves data permanently

✅ All these components work together coordinated by the operating system`,
      },
    },
  },
];

export const lesson01Exercises: Exercise[] = [
  {
    id: "ex-0-1-1",
    lessonId: "lesson-0-1",
    slug: "identify-hardware-software",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Cuál de los siguientes es un componente de SOFTWARE?",
      en: "Which of the following is a SOFTWARE component?",
    },
    options: {
      es: ["Teclado", "Memoria RAM", "Sistema Operativo", "Procesador"],
      en: ["Keyboard", "RAM Memory", "Operating System", "Processor"],
    },
    correctAnswer: "2",
    explanation: {
      es: "El Sistema Operativo es software - es un programa que controla el hardware. Los demás son componentes físicos (hardware).",
      en: "The Operating System is software - it's a program that controls the hardware. The others are physical components (hardware).",
    },
    hints: {
      es: ["El software son los programas que no puedes tocar físicamente"],
      en: ["Software are programs you can't physically touch"],
    },
    order: 1,
  },
  {
    id: "ex-0-1-2",
    lessonId: "lesson-0-1",
    slug: "ram-function",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué sucede con los datos en la RAM cuando apagas el computador?",
      en: "What happens to data in RAM when you turn off the computer?",
    },
    options: {
      es: [
        "Se guardan automáticamente en el disco",
        "Se pierden porque la RAM es volátil",
        "Se comprimen para ocupar menos espacio",
        "Permanecen intactos hasta que los borres",
      ],
      en: [
        "They are automatically saved to disk",
        "They are lost because RAM is volatile",
        "They are compressed to take less space",
        "They remain intact until you delete them",
      ],
    },
    correctAnswer: "1",
    explanation: {
      es: "La RAM es memoria volátil, lo que significa que necesita energía para mantener los datos. Al apagar, los datos se pierden.",
      en: "RAM is volatile memory, which means it needs power to maintain data. When powered off, data is lost.",
    },
    hints: {
      es: ["La RAM necesita electricidad constante para funcionar"],
      en: ["RAM needs constant electricity to work"],
    },
    order: 2,
  },
  {
    id: "ex-0-1-3",
    lessonId: "lesson-0-1",
    slug: "cpu-role",
    type: "TRUE_FALSE",
    question: {
      es: "La CPU es responsable de ejecutar las instrucciones de los programas.",
      en: "The CPU is responsible for executing program instructions.",
    },
    correctAnswer: "true",
    explanation: {
      es: "Correcto. La CPU (Central Processing Unit) es el 'cerebro' del computador que procesa y ejecuta todas las instrucciones.",
      en: "Correct. The CPU (Central Processing Unit) is the computer's 'brain' that processes and executes all instructions.",
    },
    hints: {
      es: ["CPU significa Unidad Central de Procesamiento"],
      en: ["CPU stands for Central Processing Unit"],
    },
    order: 3,
  },
];

export const lesson01Quiz: Quiz = {
  id: "quiz-0-1",
  lessonId: "lesson-0-1",
  questions: [
    {
      id: "quiz-0-1-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Si tu computador tiene 16GB de RAM y abres muchos programas, ¿qué puede suceder?",
        en: "If your computer has 16GB of RAM and you open many programs, what can happen?",
      },
      options: {
        es: [
          "El computador explota",
          "El sistema se vuelve lento porque la RAM se llena",
          "Los programas se guardan automáticamente",
          "La CPU se apaga",
        ],
        en: [
          "The computer explodes",
          "The system becomes slow because RAM fills up",
          "Programs are automatically saved",
          "The CPU turns off",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "Cuando la RAM se llena, el sistema usa el disco como memoria virtual, lo cual es mucho más lento.",
        en: "When RAM fills up, the system uses the disk as virtual memory, which is much slower.",
      },
      points: 5,
    },
    {
      id: "quiz-0-1-2",
      type: "TRUE_FALSE",
      question: {
        es: "Un SSD es más rápido que un HDD porque no tiene partes mecánicas móviles.",
        en: "An SSD is faster than an HDD because it has no moving mechanical parts.",
      },
      correctAnswer: "true",
      explanation: {
        es: "Los SSD usan memoria flash que accede a los datos electrónicamente, mientras que los HDD deben esperar a que el disco gire hasta la posición correcta.",
        en: "SSDs use flash memory that accesses data electronically, while HDDs must wait for the disk to spin to the correct position.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson01: Lesson = {
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
  contentBlocks: lesson01Content,
  exercises: lesson01Exercises,
  quiz: lesson01Quiz,
};
