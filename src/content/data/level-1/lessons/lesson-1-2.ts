import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson12Content: ContentBlock[] = [
  {
    id: "block-1-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "El Sistema de Archivos Linux",
        text: `En Linux, todo se organiza en una estructura de árbol que comienza en la **raíz** (\`/\`). A diferencia de Windows que tiene letras de unidad (C:, D:), Linux tiene un único árbol de directorios.

\`\`\`
/                    ← Raíz (root)
├── home/            ← Directorios de usuarios
│   └── usuario/     ← Tu carpeta personal
├── etc/             ← Configuración del sistema
├── var/             ← Datos variables (logs, cache)
├── usr/             ← Programas y utilidades
└── tmp/             ← Archivos temporales
\`\`\`

Los tres comandos más importantes para navegar son:
- **pwd** - Muestra dónde estás (Print Working Directory)
- **ls** - Lista el contenido del directorio
- **cd** - Cambia de directorio (Change Directory)`,
      },
      en: {
        title: "The Linux File System",
        text: `In Linux, everything is organized in a tree structure starting at the **root** (\`/\`). Unlike Windows that has drive letters (C:, D:), Linux has a single directory tree.

\`\`\`
/                    ← Root
├── home/            ← User directories
│   └── user/        ← Your personal folder
├── etc/             ← System configuration
├── var/             ← Variable data (logs, cache)
├── usr/             ← Programs and utilities
└── tmp/             ← Temporary files
\`\`\`

The three most important commands for navigation are:
- **pwd** - Shows where you are (Print Working Directory)
- **ls** - Lists directory contents
- **cd** - Changes directory (Change Directory)`,
      },
    },
  },
  {
    id: "block-1-2-2",
    type: "CODE",
    order: 2,
    content: {
      es: {
        title: "pwd - ¿Dónde estoy?",
        language: "bash",
        code: `# pwd (Print Working Directory) muestra tu ubicación actual
$ pwd
/home/usuario

# Siempre muestra la ruta COMPLETA desde la raíz
$ cd /etc
$ pwd
/etc

$ cd /var/log
$ pwd
/var/log`,
        explanation: "pwd es útil para confirmar tu ubicación antes de ejecutar comandos que afectan archivos.",
      },
      en: {
        title: "pwd - Where am I?",
        language: "bash",
        code: `# pwd (Print Working Directory) shows your current location
$ pwd
/home/user

# Always shows the FULL path from root
$ cd /etc
$ pwd
/etc

$ cd /var/log
$ pwd
/var/log`,
        explanation: "pwd is useful to confirm your location before running commands that affect files.",
      },
    },
  },
  {
    id: "block-1-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: {
        title: "ls - ¿Qué hay aquí?",
        language: "bash",
        code: `# ls básico - lista archivos y directorios
$ ls
Documentos  Descargas  Imágenes  Música

# ls -l - formato largo con detalles
$ ls -l
drwxr-xr-x 2 usuario usuario 4096 sep 29 01:30 Documentos
drwxr-xr-x 2 usuario usuario 4096 sep 29 01:30 Descargas

# ls -a - muestra archivos ocultos (empiezan con .)
$ ls -a
.  ..  .bashrc  .config  Documentos  Descargas

# ls -la - combina -l y -a (muy común)
$ ls -la

# ls -lh - tamaños legibles (human-readable)
$ ls -lh
-rw-r--r-- 1 usuario usuario 1.5K sep 29 01:30 archivo.txt

# Listar un directorio específico
$ ls /etc
$ ls -la /var/log`,
        explanation: "ls -la es probablemente el comando que más usarás. Memorízalo.",
      },
      en: {
        title: "ls - What's here?",
        language: "bash",
        code: `# Basic ls - lists files and directories
$ ls
Documents  Downloads  Images  Music

# ls -l - long format with details
$ ls -l
drwxr-xr-x 2 user user 4096 Sep 29 01:30 Documents
drwxr-xr-x 2 user user 4096 Sep 29 01:30 Downloads

# ls -a - shows hidden files (start with .)
$ ls -a
.  ..  .bashrc  .config  Documents  Downloads

# ls -la - combines -l and -a (very common)
$ ls -la

# ls -lh - human-readable sizes
$ ls -lh
-rw-r--r-- 1 user user 1.5K Sep 29 01:30 file.txt

# List a specific directory
$ ls /etc
$ ls -la /var/log`,
        explanation: "ls -la is probably the command you'll use the most. Memorize it.",
      },
    },
  },
  {
    id: "block-1-2-4",
    type: "KEY_CONCEPT",
    order: 4,
    content: {
      es: {
        title: "Rutas Absolutas vs Relativas",
        text: `Hay dos formas de especificar ubicaciones:

**Ruta Absoluta**: Empieza desde la raíz (\`/\`)
\`\`\`bash
/home/usuario/documentos/archivo.txt
/etc/nginx/nginx.conf
/var/log/syslog
\`\`\`

**Ruta Relativa**: Empieza desde tu directorio actual
\`\`\`bash
./archivo.txt          # archivo en directorio actual
../carpeta/archivo.txt # subir un nivel, luego bajar
documentos/informe.pdf # bajar a documentos
\`\`\`

**Símbolos especiales:**
| Símbolo | Significado |
|---------|-------------|
| \`/\` | Directorio raíz |
| \`~\` | Tu directorio home (/home/usuario) |
| \`.\` | Directorio actual |
| \`..\` | Directorio padre (un nivel arriba) |
| \`-\` | Directorio anterior (con cd) |`,
      },
      en: {
        title: "Absolute vs Relative Paths",
        text: `There are two ways to specify locations:

**Absolute Path**: Starts from root (\`/\`)
\`\`\`bash
/home/user/documents/file.txt
/etc/nginx/nginx.conf
/var/log/syslog
\`\`\`

**Relative Path**: Starts from your current directory
\`\`\`bash
./file.txt              # file in current directory
../folder/file.txt      # go up one level, then down
documents/report.pdf    # go down to documents
\`\`\`

**Special symbols:**
| Symbol | Meaning |
|--------|---------|
| \`/\` | Root directory |
| \`~\` | Your home directory (/home/user) |
| \`.\` | Current directory |
| \`..\` | Parent directory (one level up) |
| \`-\` | Previous directory (with cd) |`,
      },
    },
  },
  {
    id: "block-1-2-5",
    type: "CODE",
    order: 5,
    content: {
      es: {
        title: "cd - Moverse entre directorios",
        language: "bash",
        code: `# cd (Change Directory) cambia tu ubicación

# Ir a un directorio específico (ruta absoluta)
$ cd /var/log
$ pwd
/var/log

# Ir a tu home (tres formas equivalentes)
$ cd
$ cd ~
$ cd /home/usuario

# Subir un nivel (directorio padre)
$ cd ..

# Subir dos niveles
$ cd ../..

# Volver al directorio anterior
$ cd -
/home/usuario    # Muestra a dónde volviste

# Usar rutas relativas
$ cd documentos/proyectos

# Combinar: subir y luego bajar
$ cd ../descargas`,
        explanation: "cd sin argumentos siempre te lleva a tu home. cd - es muy útil para alternar entre dos directorios.",
      },
      en: {
        title: "cd - Moving between directories",
        language: "bash",
        code: `# cd (Change Directory) changes your location

# Go to a specific directory (absolute path)
$ cd /var/log
$ pwd
/var/log

# Go to your home (three equivalent ways)
$ cd
$ cd ~
$ cd /home/user

# Go up one level (parent directory)
$ cd ..

# Go up two levels
$ cd ../..

# Return to previous directory
$ cd -
/home/user    # Shows where you returned

# Use relative paths
$ cd documents/projects

# Combine: go up then down
$ cd ../downloads`,
        explanation: "cd without arguments always takes you home. cd - is very useful for alternating between two directories.",
      },
    },
  },
  {
    id: "block-1-2-6",
    type: "TIP",
    order: 6,
    content: {
      es: {
        title: "Usa Tab para autocompletar",
        text: `Tab es el atajo más importante en la terminal:

\`\`\`bash
# Escribe las primeras letras y presiona Tab
$ cd /ho[TAB]
$ cd /home/

# Si hay múltiples opciones, Tab dos veces muestra todas
$ cd /home/[TAB][TAB]
usuario1/  usuario2/  shared/

# Funciona con comandos también
$ sys[TAB][TAB]
sysctl  systemctl  systemd-analyze
\`\`\`

**Beneficios:**
- Evita errores de escritura
- Ahorra tiempo
- Confirma que el archivo/directorio existe`,
      },
      en: {
        title: "Use Tab to autocomplete",
        text: `Tab is the most important shortcut in the terminal:

\`\`\`bash
# Type the first letters and press Tab
$ cd /ho[TAB]
$ cd /home/

# If there are multiple options, Tab twice shows all
$ cd /home/[TAB][TAB]
user1/  user2/  shared/

# Works with commands too
$ sys[TAB][TAB]
sysctl  systemctl  systemd-analyze
\`\`\`

**Benefits:**
- Avoids typos
- Saves time
- Confirms the file/directory exists`,
      },
    },
  },
  {
    id: "block-1-2-7",
    type: "TEXT",
    order: 7,
    content: {
      es: {
        title: "Resumen",
        text: `En esta lección aprendiste:

✅ **pwd** muestra tu directorio actual (Print Working Directory)

✅ **ls** lista contenidos (-l detalles, -a ocultos, -h legible)

✅ **cd** cambia de directorio (cd ~ va a home, cd .. sube, cd - vuelve)

✅ **Rutas absolutas** empiezan con / desde la raíz

✅ **Rutas relativas** empiezan desde tu posición actual

✅ **Tab** autocompleta y evita errores

Estos tres comandos (pwd, ls, cd) los usarás cientos de veces al día. En la siguiente lección aprenderás a crear, copiar, mover y eliminar archivos.`,
      },
      en: {
        title: "Summary",
        text: `In this lesson you learned:

✅ **pwd** shows your current directory (Print Working Directory)

✅ **ls** lists contents (-l details, -a hidden, -h readable)

✅ **cd** changes directory (cd ~ goes home, cd .. goes up, cd - returns)

✅ **Absolute paths** start with / from root

✅ **Relative paths** start from your current position

✅ **Tab** autocompletes and prevents errors

These three commands (pwd, ls, cd) you'll use hundreds of times a day. In the next lesson you'll learn to create, copy, move and delete files.`,
      },
    },
  },
];

export const lesson12Exercises: Exercise[] = [
  {
    id: "ex-1-2-1",
    lessonId: "lesson-1-2",
    slug: "navigate-to-etc",
    type: "TERMINAL",
    question: {
      es: "Navega al directorio /etc y muestra su contenido.",
      en: "Navigate to the /etc directory and show its contents.",
    },
    expectedCommand: "cd /etc && ls",
    hints: {
      es: ["Usa cd para cambiar de directorio, luego ls para listar"],
      en: ["Use cd to change directory, then ls to list"],
    },
    order: 1,
  },
  {
    id: "ex-1-2-2",
    lessonId: "lesson-1-2",
    slug: "list-hidden",
    type: "TERMINAL",
    question: {
      es: "Lista todos los archivos de tu directorio home, incluyendo los ocultos.",
      en: "List all files in your home directory, including hidden ones.",
    },
    expectedCommand: "ls -la ~",
    hints: {
      es: ["Usa ls con la opción -a para ver ocultos y ~ para home"],
      en: ["Use ls with -a option to see hidden and ~ for home"],
    },
    order: 2,
  },
  {
    id: "ex-1-2-3",
    lessonId: "lesson-1-2",
    slug: "relative-path",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "Si estás en /home/usuario/documentos, ¿cuál es la ruta relativa a /home/usuario/descargas?",
      en: "If you're in /home/user/documents, what's the relative path to /home/user/downloads?",
    },
    options: {
      es: ["/home/usuario/descargas", "../descargas", "./descargas", "descargas"],
      en: ["/home/user/downloads", "../downloads", "./downloads", "downloads"],
    },
    correctAnswer: "1",
    explanation: {
      es: "../descargas sube un nivel (..) al directorio padre (usuario) y luego baja a descargas.",
      en: "../downloads goes up one level (..) to parent directory (user) and then down to downloads.",
    },
    hints: {
      es: [".. significa subir un nivel"],
      en: [".. means go up one level"],
    },
    order: 3,
  },
];

export const lesson12Quiz: Quiz = {
  id: "quiz-1-2",
  lessonId: "lesson-1-2",
  questions: [
    {
      id: "quiz-1-2-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué comando te lleva directamente a tu directorio home?",
        en: "What command takes you directly to your home directory?",
      },
      options: {
        es: ["cd /", "cd home", "cd ~", "cd ."],
        en: ["cd /", "cd home", "cd ~", "cd ."],
      },
      correctAnswer: "2",
      explanation: {
        es: "cd ~ te lleva a tu home. cd sin argumentos hace lo mismo. cd / te lleva a la raíz, no a home.",
        en: "cd ~ takes you home. cd without arguments does the same. cd / takes you to root, not home.",
      },
      points: 5,
    },
    {
      id: "quiz-1-2-2",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué opción de ls muestra los tamaños de archivo en formato legible (KB, MB, GB)?",
        en: "What ls option shows file sizes in readable format (KB, MB, GB)?",
      },
      options: {
        es: ["-s", "-h", "-r", "-t"],
        en: ["-s", "-h", "-r", "-t"],
      },
      correctAnswer: "1",
      explanation: {
        es: "-h (human-readable) muestra tamaños como 1.5K, 2.3M, 4.2G en lugar de bytes.",
        en: "-h (human-readable) shows sizes like 1.5K, 2.3M, 4.2G instead of bytes.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson12: Lesson = {
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
  contentBlocks: lesson12Content,
  exercises: lesson12Exercises,
  quiz: lesson12Quiz,
};
