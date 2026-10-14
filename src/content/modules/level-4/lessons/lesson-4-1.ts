import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson41Content: ContentBlock[] = [
  {
    id: "block-4-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "¿Qué es un proceso?",
        text: `Un **proceso** es un programa **en ejecución**: tiene memoria propia, descriptores de archivo abiertos, variables de entorno y un hilo de control (al menos uno).

El kernel asigna un **PID** (Process ID) único mientras vive. Cuando termina, el PID puede reutilizarse; por eso siempre conviene identificar también **comando + usuario + hora de inicio**.

Todo lo que “pasa” en el sistema — servicios, shells, navegadores en Linux, cron — son procesos.`,
      },
      en: {
        title: "What is a process?",
        text: `A **process** is a program **in execution**: it has its own memory, open file descriptors, environment variables, and at least one thread of control.

The kernel assigns a unique **PID** (Process ID) for its lifetime. When it exits, the PID may be reused; so identify processes by **command + user + start time** too.

Everything “happening” on the system — services, shells, browsers on Linux, cron — are processes.`,
      },
    },
  },
  {
    id: "block-4-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "PID, PPID y árbol de procesos",
        text: `Cada proceso tiene un **PPID** (parent PID). El init/systemd (PID 1) es ancestro de casi todo.

\`\`\`bash
ps -ef | head
pstree -p              # árbol con PIDs
pstree -p $(echo $$)   # desde tu shell actual
\`\`\`

**Fork:** el padre crea un hijo (copia del espacio de direcciones con COW). **Exec:** el hijo reemplaza su imagen por otro programa (\`execve\`).

Tu shell lanza comandos: shell → fork → hijo → exec del binario.`,
      },
      en: {
        title: "PID, PPID and process tree",
        text: `Each process has a **PPID** (parent PID). init/systemd (PID 1) is the ancestor of almost everything.

\`\`\`bash
ps -ef | head
pstree -p              # tree with PIDs
pstree -p $(echo $$)   # from your current shell
\`\`\`

**Fork:** parent creates child (copy-on-write address space). **Exec:** child replaces its image with another program (\`execve\`).

Your shell runs commands: shell → fork → child → exec of the binary.`,
      },
    },
  },
  {
    id: "block-4-1-3",
    type: "KEY_CONCEPT",
    order: 3,
    content: {
      es: {
        title: "Estados de un proceso",
        text: `Estados típicos (vistos en \`ps\` columna STAT):

| Letra | Significado |
|-------|-------------|
| R | Running / runnable |
| S | Sleeping (interrumpible) |
| D | Disk sleep (I/O, no interrumpible) |
| T | Stopped (señal SIGTSTP) |
| Z | **Zombie** — terminó, padre no recogió exit status |
| I | Idle (kernel threads) |

**Zombie:** no consume CPU, pero ocupa slot en la tabla de procesos. Muchos zombies → agotar PIDs. Solución: arreglar el **proceso padre** (reiniciar servicio o matar padre huérfano).`,
      },
      en: {
        title: "Process states",
        text: `Typical states (see \`ps\` STAT column):

| Letter | Meaning |
|--------|---------|
| R | Running / runnable |
| S | Sleeping (interruptible) |
| D | Disk sleep (uninterruptible I/O) |
| T | Stopped (SIGTSTP) |
| Z | **Zombie** — exited, parent did not reap |
| I | Idle (kernel threads) |

**Zombie:** no CPU use, but holds a process table slot. Many zombies → PID exhaustion. Fix the **parent** (restart service or kill negligent parent).`,
      },
    },
  },
  {
    id: "block-4-1-4",
    type: "KEY_CONCEPT",
    order: 4,
    content: {
      es: {
        title: "/proc: el proceso como archivos",
        text: `Cada PID tiene \`/proc/PID/\`:

\`\`\`bash
cat /proc/self/cmdline   # argv del proceso actual
ls -l /proc/self/fd      # archivos abiertos
cat /proc/self/environ | tr '\\0' '\\n'
cat /proc/self/status | grep -E 'Name|VmRSS|Threads'
\`\`\`

Esto es oro para debugging: ver **qué ejecutó realmente**, qué sockets/archivos tiene abiertos y cuánta RAM usa (VmRSS).`,
      },
      en: {
        title: "/proc: process as files",
        text: `Each PID has \`/proc/PID/\`:

\`\`\`bash
cat /proc/self/cmdline   # current process argv
ls -l /proc/self/fd      # open files
cat /proc/self/environ | tr '\\0' '\\n'
cat /proc/self/status | grep -E 'Name|VmRSS|Threads'
\`\`\`

Gold for debugging: see **what actually ran**, open sockets/files, and RAM use (VmRSS).`,
      },
    },
  },
  {
    id: "block-4-1-5",
    type: "TIP",
    order: 5,
    content: {
      es: {
        title: "Threads vs procesos",
        text: `Un proceso puede tener **varios hilos** (threads) compartiendo memoria. En \`ps\`, \`top\` y \`/proc/PID/status\` verás **Threads**.

\`htop\` puede mostrar hilos con F2 → Display options → Tree view / hide threads según prefieras.`,
      },
      en: {
        title: "Threads vs processes",
        text: `A process can have **multiple threads** sharing memory. In \`ps\`, \`top\`, and \`/proc/PID/status\` you'll see **Threads**.

\`htop\` can show threads via F2 → Display options → tree view / hide threads as you prefer.`,
      },
    },
  },
  {
    id: "block-4-1-6",
    type: "WARNING",
    order: 6,
    content: {
      es: {
        title: "Orfandad y daemons",
        text: `Si el padre muere antes que el hijo, el hijo es **adoptado** por PID 1. Los **daemons** suelen hacer double-fork para desacoplarse de la terminal.

No confundas “proceso en background” con daemon: un daemon está diseñado para vivir sin sesión interactiva.`,
      },
      en: {
        title: "Orphans and daemons",
        text: `If the parent dies first, the child is **adopted** by PID 1. **Daemons** often double-fork to detach from the terminal.

Don't confuse “background process” with daemon: a daemon is meant to live without an interactive session.`,
      },
    },
  },
];

export const lesson41Exercises: Exercise[] = [
  {
    id: "ex-4-1-1",
    lessonId: "lesson-4-1",
    slug: "ppid",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué es el PPID?",
      en: "What is the PPID?",
    },
    options: {
      es: ["ID del proceso hijo", "ID del proceso padre", "Prioridad", "Puerto"],
      en: ["Child process ID", "Parent process ID", "Priority", "Port"],
    },
    correctAnswer: "1",
    explanation: {
      es: "PPID enlaza el árbol de procesos.",
      en: "PPID links the process tree.",
    },
    hints: { es: ["Parent Process ID"], en: ["Parent Process ID"] },
    order: 1,
  },
  {
    id: "ex-4-1-2",
    lessonId: "lesson-4-1",
    slug: "zombie-state",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué letra en STAT indica zombie?",
      en: "Which STAT letter indicates zombie?",
    },
    options: {
      es: ["R", "S", "Z", "D"],
      en: ["R", "S", "Z", "D"],
    },
    correctAnswer: "2",
    explanation: {
      es: "Z = zombie (defunct).",
      en: "Z = zombie (defunct).",
    },
    hints: { es: ["Zombie"], en: ["Zombie"] },
    order: 2,
  },
];

export const lesson41Quiz: Quiz = {
  id: "quiz-4-1",
  lessonId: "lesson-4-1",
  questions: [
    {
      id: "quiz-4-1-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Quién suele ser el ancestro de casi todos los procesos?",
        en: "Who is usually the ancestor of almost all processes?",
      },
      options: {
        es: ["PID 0", "PID 1 (systemd/init)", "Tu shell", "kernel"],
        en: ["PID 0", "PID 1 (systemd/init)", "Your shell", "kernel"],
      },
      correctAnswer: "1",
      explanation: {
        es: "PID 1 adopta huérfanos y arranca el sistema.",
        en: "PID 1 adopts orphans and bootstraps the system.",
      },
      points: 5,
    },
    {
      id: "quiz-4-1-2",
      type: "TRUE_FALSE",
      question: {
        es: "Un zombie consume mucha CPU mientras espera al padre.",
        en: "A zombie uses lots of CPU while waiting for its parent.",
      },
      correctAnswer: "false",
      explanation: {
        es: "Ya terminó; solo queda la entrada en la tabla de procesos.",
        en: "It already exited; only the process table entry remains.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson41: Lesson = {
  id: "lesson-4-1",
  moduleId: "level-4",
  slug: "understanding-processes",
  title: { es: "Entendiendo los Procesos", en: "Understanding Processes" },
  description: {
    es: "PID, PPID, árbol de procesos, estados y /proc.",
    en: "PID, PPID, process tree, states, and /proc.",
  },
  order: 1,
  duration: 35,
  contentBlocks: lesson41Content,
  exercises: lesson41Exercises,
  quiz: lesson41Quiz,
};
