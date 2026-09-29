import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson11Content: ContentBlock[] = [
  {
    id: "block-1-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "¿Qué es la Terminal?",
        text: `La **terminal** (también llamada consola o línea de comandos) es una interfaz de texto que te permite comunicarte directamente con el sistema operativo escribiendo comandos.

A diferencia de las interfaces gráficas donde haces clic en íconos, en la terminal escribes instrucciones que el sistema ejecuta inmediatamente.

**¿Por qué aprender la terminal?**
- Es más rápida una vez que la dominas
- Permite automatizar tareas repetitivas
- Es la única forma de administrar servidores remotos
- Muchas herramientas DevOps solo funcionan desde terminal
- El 90% de los servidores del mundo usan Linux sin interfaz gráfica`,
      },
      en: {
        title: "What is the Terminal?",
        text: `The **terminal** (also called console or command line) is a text interface that allows you to communicate directly with the operating system by typing commands.

Unlike graphical interfaces where you click on icons, in the terminal you write instructions that the system executes immediately.

**Why learn the terminal?**
- It's faster once you master it
- It allows automating repetitive tasks
- It's the only way to manage remote servers
- Many DevOps tools only work from terminal
- 90% of the world's servers use Linux without a graphical interface`,
      },
    },
  },
  {
    id: "block-1-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "Terminal vs Shell vs Consola",
        text: `Estos términos se usan indistintamente, pero tienen diferencias:

**Terminal (Emulador de terminal)**: La aplicación que muestra la ventana de texto. Ejemplos: GNOME Terminal, iTerm2, Windows Terminal.

**Shell**: El programa que interpreta y ejecuta tus comandos. Ejemplos:
- **Bash** (Bourne Again Shell) - El más común en Linux
- **Zsh** - Popular por sus características avanzadas
- **Fish** - Amigable para principiantes

**Consola**: Originalmente el hardware físico. Hoy se usa como sinónimo de terminal.

En la práctica, cuando alguien dice "abre la terminal", se refiere a abrir un emulador de terminal que ejecuta un shell.`,
      },
      en: {
        title: "Terminal vs Shell vs Console",
        text: `These terms are used interchangeably, but they have differences:

**Terminal (Terminal emulator)**: The application that displays the text window. Examples: GNOME Terminal, iTerm2, Windows Terminal.

**Shell**: The program that interprets and executes your commands. Examples:
- **Bash** (Bourne Again Shell) - The most common in Linux
- **Zsh** - Popular for its advanced features
- **Fish** - Beginner-friendly

**Console**: Originally the physical hardware. Today used as a synonym for terminal.

In practice, when someone says "open the terminal", they mean opening a terminal emulator running a shell.`,
      },
    },
  },
  {
    id: "block-1-1-3",
    type: "TEXT",
    order: 3,
    content: {
      es: {
        title: "El Prompt",
        text: `Cuando abres la terminal, ves el **prompt** - una línea que indica que el sistema está esperando tu comando:

\`\`\`bash
usuario@computador:~$
\`\`\`

Cada parte tiene un significado:
- **usuario**: Tu nombre de usuario
- **@**: Separador
- **computador**: Nombre del equipo (hostname)
- **~**: Directorio actual (~ significa tu carpeta home)
- **$**: Indica usuario normal (# indica root/administrador)

El prompt puede variar según la configuración, pero siempre termina esperando tu entrada.`,
      },
      en: {
        title: "The Prompt",
        text: `When you open the terminal, you see the **prompt** - a line indicating the system is waiting for your command:

\`\`\`bash
user@computer:~$
\`\`\`

Each part has a meaning:
- **user**: Your username
- **@**: Separator
- **computer**: Machine name (hostname)
- **~**: Current directory (~ means your home folder)
- **$**: Indicates normal user (# indicates root/administrator)

The prompt may vary depending on configuration, but always ends waiting for your input.`,
      },
    },
  },
  {
    id: "block-1-1-4",
    type: "CODE",
    order: 4,
    content: {
      es: {
        title: "Tu Primer Comando",
        language: "bash",
        code: `# Escribe 'echo' seguido de un mensaje
$ echo "¡Hola Linux!"
¡Hola Linux!

# El comando 'date' muestra la fecha y hora actual
$ date
mar 29 sep 2026 01:30:45 UTC

# El comando 'whoami' muestra tu nombre de usuario
$ whoami
usuario

# El comando 'hostname' muestra el nombre del equipo
$ hostname
mi-computador`,
        explanation: "echo imprime texto en pantalla. Es útil para mostrar mensajes en scripts y verificar variables.",
      },
      en: {
        title: "Your First Command",
        language: "bash",
        code: `# Type 'echo' followed by a message
$ echo "Hello Linux!"
Hello Linux!

# The 'date' command shows current date and time
$ date
Tue Sep 29 2026 01:30:45 UTC

# The 'whoami' command shows your username
$ whoami
user

# The 'hostname' command shows machine name
$ hostname
my-computer`,
        explanation: "echo prints text on screen. It's useful for displaying messages in scripts and checking variables.",
      },
    },
  },
  {
    id: "block-1-1-5",
    type: "TEXT",
    order: 5,
    content: {
      es: {
        title: "Anatomía de un Comando",
        text: `Los comandos de Linux siguen una estructura consistente:

\`\`\`
comando [opciones] [argumentos]
\`\`\`

**Comando**: La acción que quieres realizar (ls, cd, cp, etc.)

**Opciones** (flags): Modifican el comportamiento del comando
- Formato corto: \`-a\`, \`-l\`, \`-h\`
- Formato largo: \`--all\`, \`--long\`, \`--human-readable\`
- Se pueden combinar: \`-la\` es igual a \`-l -a\`

**Argumentos**: Los datos sobre los que actúa el comando (archivos, directorios, texto)

**Ejemplos:**
\`\`\`bash
ls -la /home          # comando: ls, opciones: -la, argumento: /home
cp -r origen destino  # comando: cp, opción: -r, argumentos: origen y destino
\`\`\``,
      },
      en: {
        title: "Anatomy of a Command",
        text: `Linux commands follow a consistent structure:

\`\`\`
command [options] [arguments]
\`\`\`

**Command**: The action you want to perform (ls, cd, cp, etc.)

**Options** (flags): Modify the command's behavior
- Short format: \`-a\`, \`-l\`, \`-h\`
- Long format: \`--all\`, \`--long\`, \`--human-readable\`
- Can be combined: \`-la\` equals \`-l -a\`

**Arguments**: The data the command acts on (files, directories, text)

**Examples:**
\`\`\`bash
ls -la /home          # command: ls, options: -la, argument: /home
cp -r source dest     # command: cp, option: -r, arguments: source and dest
\`\`\``,
      },
    },
  },
  {
    id: "block-1-1-6",
    type: "TIP",
    order: 6,
    content: {
      es: {
        title: "Atajos esenciales para empezar",
        text: `Memoriza estos atajos desde el primer día:

| Atajo | Acción |
|-------|--------|
| **Tab** | Autocompletar comandos y rutas |
| **↑ / ↓** | Navegar por el historial de comandos |
| **Ctrl + C** | Cancelar el comando actual |
| **Ctrl + L** | Limpiar la pantalla (igual que \`clear\`) |
| **Ctrl + A** | Ir al inicio de la línea |
| **Ctrl + E** | Ir al final de la línea |

Tab es tu mejor amigo. Úsalo constantemente para evitar errores de escritura.`,
      },
      en: {
        title: "Essential shortcuts to start",
        text: `Memorize these shortcuts from day one:

| Shortcut | Action |
|----------|--------|
| **Tab** | Autocomplete commands and paths |
| **↑ / ↓** | Navigate command history |
| **Ctrl + C** | Cancel current command |
| **Ctrl + L** | Clear screen (same as \`clear\`) |
| **Ctrl + A** | Go to line start |
| **Ctrl + E** | Go to line end |

Tab is your best friend. Use it constantly to avoid typing errors.`,
      },
    },
  },
  {
    id: "block-1-1-7",
    type: "WARNING",
    order: 7,
    content: {
      es: {
        title: "Cuidado con los espacios y mayúsculas",
        text: `Linux es **sensible a mayúsculas** y los **espacios importan**:

\`\`\`bash
# Estos son DIFERENTES archivos:
archivo.txt
Archivo.txt
ARCHIVO.txt

# Esto está MAL (el espacio rompe el comando):
cd mi carpeta     # Error: intenta ir a "mi" y luego a "carpeta"

# Esto está BIEN:
cd "mi carpeta"   # Usa comillas para nombres con espacios
cd mi\\ carpeta   # O escapa el espacio con \\
\`\`\`

Recomendación: Evita espacios en nombres de archivos. Usa guiones o guiones bajos: \`mi-carpeta\` o \`mi_carpeta\`.`,
      },
      en: {
        title: "Watch out for spaces and case",
        text: `Linux is **case-sensitive** and **spaces matter**:

\`\`\`bash
# These are DIFFERENT files:
file.txt
File.txt
FILE.txt

# This is WRONG (space breaks the command):
cd my folder     # Error: tries to go to "my" then "folder"

# This is RIGHT:
cd "my folder"   # Use quotes for names with spaces
cd my\\ folder   # Or escape the space with \\
\`\`\`

Recommendation: Avoid spaces in file names. Use dashes or underscores: \`my-folder\` or \`my_folder\`.`,
      },
    },
  },
  {
    id: "block-1-1-8",
    type: "TEXT",
    order: 8,
    content: {
      es: {
        title: "Resumen",
        text: `En esta lección aprendiste:

✅ La **terminal** es una interfaz de texto para ejecutar comandos

✅ El **shell** (como Bash) interpreta y ejecuta tus comandos

✅ El **prompt** indica que el sistema espera tu entrada

✅ Los comandos tienen estructura: \`comando [opciones] [argumentos]\`

✅ Linux es sensible a mayúsculas y los espacios importan

✅ Tab es tu mejor amigo para autocompletar

En la siguiente lección aprenderás a navegar por el sistema de archivos con pwd, cd y ls.`,
      },
      en: {
        title: "Summary",
        text: `In this lesson you learned:

✅ The **terminal** is a text interface for executing commands

✅ The **shell** (like Bash) interprets and executes your commands

✅ The **prompt** indicates the system is waiting for your input

✅ Commands have structure: \`command [options] [arguments]\`

✅ Linux is case-sensitive and spaces matter

✅ Tab is your best friend for autocompletion

In the next lesson you'll learn to navigate the file system with pwd, cd and ls.`,
      },
    },
  },
];

export const lesson11Exercises: Exercise[] = [
  {
    id: "ex-1-1-1",
    lessonId: "lesson-1-1",
    slug: "first-echo",
    type: "TERMINAL",
    question: {
      es: "Escribe un comando que imprima 'Hola Mundo' en la terminal.",
      en: "Write a command that prints 'Hello World' in the terminal.",
    },
    expectedCommand: "echo",
    expectedOutput: {
      es: "Hola Mundo",
      en: "Hello World",
    },
    hints: {
      es: ["Usa el comando echo seguido del texto entre comillas"],
      en: ["Use the echo command followed by text in quotes"],
    },
    order: 1,
  },
  {
    id: "ex-1-1-2",
    lessonId: "lesson-1-1",
    slug: "identify-parts",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "En el comando 'ls -la /home', ¿cuál es la opción?",
      en: "In the command 'ls -la /home', what is the option?",
    },
    options: {
      es: ["ls", "-la", "/home", "Ninguna de las anteriores"],
      en: ["ls", "-la", "/home", "None of the above"],
    },
    correctAnswer: "1",
    explanation: {
      es: "-la es la opción (combinación de -l y -a). ls es el comando y /home es el argumento.",
      en: "-la is the option (combination of -l and -a). ls is the command and /home is the argument.",
    },
    hints: {
      es: ["Las opciones empiezan con guión (-)"],
      en: ["Options start with a dash (-)"],
    },
    order: 2,
  },
  {
    id: "ex-1-1-3",
    lessonId: "lesson-1-1",
    slug: "username",
    type: "TERMINAL",
    question: {
      es: "¿Qué comando muestra tu nombre de usuario actual?",
      en: "What command shows your current username?",
    },
    expectedCommand: "whoami",
    hints: {
      es: ["El comando tiene que ver con 'quién soy'"],
      en: ["The command has to do with 'who am I'"],
    },
    order: 3,
  },
];

export const lesson11Quiz: Quiz = {
  id: "quiz-1-1",
  lessonId: "lesson-1-1",
  questions: [
    {
      id: "quiz-1-1-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué programa interpreta y ejecuta los comandos que escribes en la terminal?",
        en: "What program interprets and executes the commands you type in the terminal?",
      },
      options: {
        es: ["El terminal", "El kernel", "El shell", "El prompt"],
        en: ["The terminal", "The kernel", "The shell", "The prompt"],
      },
      correctAnswer: "2",
      explanation: {
        es: "El shell (como Bash) es el intérprete de comandos. El terminal solo muestra la interfaz de texto.",
        en: "The shell (like Bash) is the command interpreter. The terminal only displays the text interface.",
      },
      points: 5,
    },
    {
      id: "quiz-1-1-2",
      type: "TRUE_FALSE",
      question: {
        es: "En Linux, 'Archivo.txt' y 'archivo.txt' son el mismo archivo.",
        en: "In Linux, 'File.txt' and 'file.txt' are the same file.",
      },
      correctAnswer: "false",
      explanation: {
        es: "Linux es sensible a mayúsculas (case-sensitive). Archivo.txt y archivo.txt son archivos diferentes.",
        en: "Linux is case-sensitive. File.txt and file.txt are different files.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson11: Lesson = {
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
  contentBlocks: lesson11Content,
  exercises: lesson11Exercises,
  quiz: lesson11Quiz,
};
