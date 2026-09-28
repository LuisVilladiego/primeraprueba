import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson05Content: ContentBlock[] = [
  {
    id: "block-0-5-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Introducción",
        text: `Existen dos formas principales de interactuar con un computador: la interfaz gráfica (GUI) y la línea de comandos (CLI). Cada una tiene sus ventajas, y aprender CLI es fundamental para la administración de sistemas Linux.

En esta lección aprenderás:
- Qué es una interfaz gráfica (GUI)
- Qué es la línea de comandos (CLI)
- Ventajas y desventajas de cada una
- Por qué CLI es esencial para DevOps y administración de sistemas`,
      },
      en: {
        title: "Introduction",
        text: `There are two main ways to interact with a computer: the graphical interface (GUI) and the command line (CLI). Each has its advantages, and learning CLI is fundamental for Linux system administration.

In this lesson you will learn:
- What a graphical interface (GUI) is
- What the command line (CLI) is
- Advantages and disadvantages of each
- Why CLI is essential for DevOps and system administration`,
      },
    },
  },
  {
    id: "block-0-5-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "GUI - Interfaz Gráfica de Usuario",
        text: `La **GUI (Graphical User Interface)** es la forma visual de interactuar con el computador:

- Ventanas, iconos, menús, botones
- Usar el mouse para hacer clic y arrastrar
- Ver el contenido visualmente
- Intuitiva para principiantes

**Ejemplos:**
- El escritorio de Windows, macOS
- Explorador de archivos
- Navegadores web
- Aplicaciones de oficina`,
      },
      en: {
        title: "GUI - Graphical User Interface",
        text: `The **GUI (Graphical User Interface)** is the visual way to interact with the computer:

- Windows, icons, menus, buttons
- Using the mouse to click and drag
- View content visually
- Intuitive for beginners

**Examples:**
- Windows, macOS desktop
- File explorer
- Web browsers
- Office applications`,
      },
    },
  },
  {
    id: "block-0-5-3",
    type: "KEY_CONCEPT",
    order: 3,
    content: {
      es: {
        title: "CLI - Línea de Comandos",
        text: `La **CLI (Command Line Interface)** es la forma de interactuar escribiendo comandos de texto:

- Escribes comandos y el sistema responde con texto
- No hay botones ni menús gráficos
- Más difícil de aprender al principio
- Extremadamente poderosa una vez dominada

**Ejemplos:**
- Terminal en Linux/macOS
- PowerShell/CMD en Windows
- SSH para conexiones remotas`,
      },
      en: {
        title: "CLI - Command Line Interface",
        text: `The **CLI (Command Line Interface)** is the way to interact by typing text commands:

- You type commands and the system responds with text
- No buttons or graphical menus
- Harder to learn at first
- Extremely powerful once mastered

**Examples:**
- Terminal in Linux/macOS
- PowerShell/CMD in Windows
- SSH for remote connections`,
      },
    },
  },
  {
    id: "block-0-5-4",
    type: "TEXT",
    order: 4,
    content: {
      es: {
        title: "Comparación: GUI vs CLI",
        text: `| Aspecto | GUI | CLI |
|---------|-----|-----|
| **Facilidad inicial** | Fácil | Difícil |
| **Velocidad (experto)** | Más lenta | Más rápida |
| **Automatización** | Limitada | Excelente |
| **Uso de recursos** | Alto | Bajo |
| **Acceso remoto** | Complejo | Simple |
| **Documentación** | Difícil de registrar | Fácil de documentar |
| **Repetir tareas** | Manual | Scripteable |`,
      },
      en: {
        title: "Comparison: GUI vs CLI",
        text: `| Aspect | GUI | CLI |
|--------|-----|-----|
| **Initial ease** | Easy | Difficult |
| **Speed (expert)** | Slower | Faster |
| **Automation** | Limited | Excellent |
| **Resource usage** | High | Low |
| **Remote access** | Complex | Simple |
| **Documentation** | Hard to record | Easy to document |
| **Repeat tasks** | Manual | Scriptable |`,
      },
    },
  },
  {
    id: "block-0-5-5",
    type: "TEXT",
    order: 5,
    content: {
      es: {
        title: "¿Por qué aprender CLI?",
        text: `**1. Servidores no tienen GUI**
La mayoría de servidores Linux funcionan sin interfaz gráfica para ahorrar recursos.

**2. Automatización**
Puedes escribir scripts que ejecuten cientos de comandos automáticamente.

**3. Acceso remoto**
Conectarte a un servidor remoto vía SSH es mucho más simple que usar escritorio remoto.

**4. Más control**
Muchas opciones avanzadas solo están disponibles via CLI.

**5. Velocidad**
Un experto en CLI puede hacer tareas mucho más rápido que con GUI.

**6. Reproducibilidad**
Puedes documentar exactamente qué comandos ejecutaste y repetirlos.`,
      },
      en: {
        title: "Why learn CLI?",
        text: `**1. Servers don't have GUI**
Most Linux servers run without a graphical interface to save resources.

**2. Automation**
You can write scripts that execute hundreds of commands automatically.

**3. Remote access**
Connecting to a remote server via SSH is much simpler than using remote desktop.

**4. More control**
Many advanced options are only available via CLI.

**5. Speed**
A CLI expert can do tasks much faster than with GUI.

**6. Reproducibility**
You can document exactly what commands you ran and repeat them.`,
      },
    },
  },
  {
    id: "block-0-5-6",
    type: "CODE",
    order: 6,
    content: {
      es: {
        title: "Ejemplo: Crear 100 archivos",
        code: `# Con CLI (1 segundo)
for i in {1..100}; do touch archivo_$i.txt; done

# Con GUI: 
# Clic derecho → Nuevo archivo → Nombrar → Repetir 100 veces...`,
        language: "bash",
      },
      en: {
        title: "Example: Create 100 files",
        code: `# With CLI (1 second)
for i in {1..100}; do touch file_$i.txt; done

# With GUI:
# Right click → New file → Name → Repeat 100 times...`,
        language: "bash",
      },
    },
  },
  {
    id: "block-0-5-7",
    type: "TIP",
    order: 7,
    content: {
      es: {
        title: "No es GUI vs CLI",
        text: `En la práctica, usarás **ambas**. La clave es saber cuándo usar cada una:

- **Usa GUI** para: navegación casual, edición de fotos/video, navegación web
- **Usa CLI** para: administración de servidores, automatización, desarrollo, DevOps

Los profesionales de Linux dominan CLI pero también usan GUI cuando tiene sentido.`,
      },
      en: {
        title: "It's not GUI vs CLI",
        text: `In practice, you'll use **both**. The key is knowing when to use each:

- **Use GUI** for: casual browsing, photo/video editing, web browsing
- **Use CLI** for: server administration, automation, development, DevOps

Linux professionals master CLI but also use GUI when it makes sense.`,
      },
    },
  },
  {
    id: "block-0-5-8",
    type: "TEXT",
    order: 8,
    content: {
      es: {
        title: "Resumen",
        text: `En esta lección aprendiste:

✅ **GUI** es visual e intuitiva, pero limitada para automatización

✅ **CLI** usa comandos de texto, es más poderosa y permite automatizar

✅ Los servidores Linux generalmente no tienen GUI

✅ CLI permite **automatización**, **acceso remoto** y **documentación** superiores

✅ En la práctica, usarás ambas según la situación`,
      },
      en: {
        title: "Summary",
        text: `In this lesson you learned:

✅ **GUI** is visual and intuitive, but limited for automation

✅ **CLI** uses text commands, is more powerful and allows automation

✅ Linux servers generally don't have GUI

✅ CLI enables superior **automation**, **remote access** and **documentation**

✅ In practice, you'll use both depending on the situation`,
      },
    },
  },
];

export const lesson05Exercises: Exercise[] = [
  {
    id: "ex-0-5-1",
    lessonId: "lesson-0-5",
    slug: "cli-advantage",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Cuál es una ventaja principal de CLI sobre GUI?",
      en: "What is a main advantage of CLI over GUI?",
    },
    options: {
      es: [
        "Es más fácil de aprender",
        "Tiene más colores",
        "Permite automatización mediante scripts",
        "Usa más memoria",
      ],
      en: [
        "It's easier to learn",
        "It has more colors",
        "It allows automation through scripts",
        "It uses more memory",
      ],
    },
    correctAnswer: "2",
    explanation: {
      es: "La CLI permite escribir scripts que automatizan tareas repetitivas, algo difícil con GUI.",
      en: "CLI allows writing scripts that automate repetitive tasks, something difficult with GUI.",
    },
    hints: {
      es: ["Piensa en cómo repetirías una tarea 1000 veces"],
      en: ["Think about how you would repeat a task 1000 times"],
    },
    order: 1,
  },
  {
    id: "ex-0-5-2",
    lessonId: "lesson-0-5",
    slug: "servers-no-gui",
    type: "TRUE_FALSE",
    question: {
      es: "La mayoría de los servidores Linux funcionan sin interfaz gráfica.",
      en: "Most Linux servers run without a graphical interface.",
    },
    correctAnswer: "true",
    explanation: {
      es: "Los servidores suelen no tener GUI para ahorrar recursos y mejorar la seguridad.",
      en: "Servers usually don't have GUI to save resources and improve security.",
    },
    hints: {
      es: ["Los servidores optimizan recursos al máximo"],
      en: ["Servers optimize resources to the maximum"],
    },
    order: 2,
  },
  {
    id: "ex-0-5-3",
    lessonId: "lesson-0-5",
    slug: "ssh-connection",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué protocolo usarías típicamente para conectarte a un servidor Linux remoto?",
      en: "What protocol would you typically use to connect to a remote Linux server?",
    },
    options: {
      es: ["HTTP", "FTP", "SSH", "SMTP"],
      en: ["HTTP", "FTP", "SSH", "SMTP"],
    },
    correctAnswer: "2",
    explanation: {
      es: "SSH (Secure Shell) es el protocolo estándar para conectarse de forma segura a servidores remotos.",
      en: "SSH (Secure Shell) is the standard protocol for securely connecting to remote servers.",
    },
    hints: {
      es: ["Es un protocolo de 'Shell' seguro"],
      en: ["It's a 'Secure Shell' protocol"],
    },
    order: 3,
  },
];

export const lesson05Quiz: Quiz = {
  id: "quiz-0-5",
  lessonId: "lesson-0-5",
  questions: [
    {
      id: "quiz-0-5-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Cuándo es más apropiado usar CLI en lugar de GUI?",
        en: "When is it more appropriate to use CLI instead of GUI?",
      },
      options: {
        es: [
          "Para editar una foto",
          "Para automatizar la creación de 1000 usuarios",
          "Para navegar casualmente por internet",
          "Para ver un video",
        ],
        en: [
          "To edit a photo",
          "To automate creation of 1000 users",
          "To casually browse the internet",
          "To watch a video",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "Las tareas repetitivas y de administración masiva son ideales para CLI y scripts.",
        en: "Repetitive and mass administration tasks are ideal for CLI and scripts.",
      },
      points: 5,
    },
    {
      id: "quiz-0-5-2",
      type: "TRUE_FALSE",
      question: {
        es: "Un profesional de Linux solo debe usar CLI y nunca GUI.",
        en: "A Linux professional should only use CLI and never GUI.",
      },
      correctAnswer: "false",
      explanation: {
        es: "Los profesionales usan ambas herramientas según la situación y eficiencia requerida.",
        en: "Professionals use both tools depending on the situation and required efficiency.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson05: Lesson = {
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
  contentBlocks: lesson05Content,
  exercises: lesson05Exercises,
  quiz: lesson05Quiz,
};
