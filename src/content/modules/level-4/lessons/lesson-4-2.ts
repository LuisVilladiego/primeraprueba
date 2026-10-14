import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson42Content: ContentBlock[] = [
  {
    id: "block-4-2-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "ps: instantánea del sistema",
        text: `\`ps\` muestra una **foto** de procesos en un momento (a diferencia de \`top\`, que refresca). Es ideal para scripts, auditorías y pipelines.

Dos familias de opciones (BSD vs UNIX — no mezclar en la misma línea):

- **BSD:** \`ps aux\`, \`ps u\`
- **UNIX:** \`ps -ef\`, \`ps -eo pid,user,cmd\``,
      },
      en: {
        title: "ps: system snapshot",
        text: `\`ps\` shows a **snapshot** of processes at one moment (unlike refreshing \`top\`). Ideal for scripts, audits, and pipelines.

Two option families (BSD vs UNIX — don't mix on one line):

- **BSD:** \`ps aux\`, \`ps u\`
- **UNIX:** \`ps -ef\`, \`ps -eo pid,user,cmd\``,
      },
    },
  },
  {
    id: "block-4-2-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "Decodificar ps aux",
        text: `\`\`\`bash
ps aux
# USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND
\`\`\`

| Campo | Significado |
|-------|-------------|
| %CPU / %MEM | Uso relativo (instantáneo) |
| VSZ | Tamaño virtual (KB) |
| RSS | RAM residente aproximada |
| TTY | ? = sin terminal (daemon) |
| STAT | Estado + flags |
| TIME | CPU acumulada |

\`\`\`bash
ps -ef    # UID, PID, PPID, STIME, CMD (estilo UNIX)
\`\`\``,
      },
      en: {
        title: "Decoding ps aux",
        text: `\`\`\`bash
ps aux
# USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND
\`\`\`

| Field | Meaning |
|-------|---------|
| %CPU / %MEM | Relative use (snapshot) |
| VSZ | Virtual size (KB) |
| RSS | Approx resident RAM |
| TTY | ? = no terminal (daemon) |
| STAT | State + flags |
| TIME | Cumulative CPU |

\`\`\`bash
ps -ef    # UID, PID, PPID, STIME, CMD (UNIX style)
\`\`\``,
      },
    },
  },
  {
    id: "block-4-2-3",
    type: "CODE",
    order: 3,
    content: {
      es: {
        title: "Filtrar y ordenar",
        language: "bash",
        code: `# Procesos de un usuario
ps -u www-data -f

# Buscar por nombre
ps aux | grep '[n]ginx'    # truco: [n] evita matchear el grep

# Top CPU / memoria
ps aux --sort=-%cpu | head -6
ps aux --sort=-%mem | head -6

# Formato personalizado
ps -eo pid,ppid,user,stat,pcpu,pmem,cmd --sort=-pcpu | head

# Árbol de hijos de PID 1234
ps --forest -o pid,ppid,cmd -g $(ps -o sid= -p 1234) 2>/dev/null`,
      },
      en: {
        title: "Filter and sort",
        language: "bash",
        code: `# Processes for one user
ps -u www-data -f

# Search by name
ps aux | grep '[n]ginx'    # [n] avoids matching grep itself

# Top CPU / memory
ps aux --sort=-%cpu | head -6
ps aux --sort=-%mem | head -6

# Custom format
ps -eo pid,ppid,user,stat,pcpu,pmem,cmd --sort=-pcpu | head

# Child tree for PID 1234
ps --forest -o pid,ppid,cmd -g $(ps -o sid= -p 1234) 2>/dev/null`,
      },
    },
  },
  {
    id: "block-4-2-4",
    type: "TIP",
    order: 4,
    content: {
      es: {
        title: "ps en scripts",
        text: `Usa \`-o\` con lista explícita de columnas para parsing estable:

\`\`\`bash
if ps -p "$PID" -o comm= | grep -qx nginx; then
  echo "nginx sigue vivo"
fi
\`\`\`

Evita depender del ancho de \`ps aux\` en diferentes distros.`,
      },
      en: {
        title: "ps in scripts",
        text: `Use \`-o\` with an explicit column list for stable parsing:

\`\`\`bash
if ps -p "$PID" -o comm= | grep -qx nginx; then
  echo "nginx still running"
fi
\`\`\`

Don't rely on \`ps aux\` column width across distros.`,
      },
    },
  },
  {
    id: "block-4-2-5",
    type: "KEY_CONCEPT",
    order: 5,
    content: {
      es: {
        title: "pgrep y pidof",
        text: `Alternativas orientadas a nombre:

\`\`\`bash
pgrep -a nginx          # PID + comando
pgrep -u www-data nginx
pidof nginx             # PIDs separados por espacio
\`\`\`

Útiles en scripts de deploy/reload antes de enviar señales.`,
      },
      en: {
        title: "pgrep and pidof",
        text: `Name-oriented alternatives:

\`\`\`bash
pgrep -a nginx          # PID + command
pgrep -u www-data nginx
pidof nginx             # space-separated PIDs
\`\`\`

Handy in deploy/reload scripts before sending signals.`,
      },
    },
  },
];

export const lesson42Exercises: Exercise[] = [
  {
    id: "ex-4-2-1",
    lessonId: "lesson-4-2",
    slug: "ps-aux-meaning",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "En ps aux, ¿qué significa la 'x'?",
      en: "In ps aux, what does 'x' mean?",
    },
    options: {
      es: ["eXecute only root", "incluir procesos sin tty", "eXtended memory", "eXport JSON"],
      en: ["eXecute only root", "include processes without tty", "eXtended memory", "eXport JSON"],
    },
    correctAnswer: "1",
    explanation: {
      es: "x = procesos sin terminal controladora (daemons).",
      en: "x = processes with no controlling terminal (daemons).",
    },
    hints: { es: ["Daemons muestran TTY ?"], en: ["Daemons show TTY ?"] },
    order: 1,
  },
  {
    id: "ex-4-2-2",
    lessonId: "lesson-4-2",
    slug: "sort-cpu",
    type: "COMMAND_COMPLETION",
    question: {
      es: "Lista procesos ordenados por CPU descendente (primeros 10)",
      en: "List processes sorted by CPU descending (first 10)",
    },
    correctAnswer: "ps aux --sort=-%cpu | head -10",
    explanation: {
      es: "--sort=-%cpu ordena por columna CPU.",
      en: "--sort=-%cpu sorts by CPU column.",
    },
    hints: { es: ["Usa head para limitar"], en: ["Use head to limit"] },
    order: 2,
  },
];

export const lesson42Quiz: Quiz = {
  id: "quiz-4-2",
  lessonId: "lesson-4-2",
  questions: [
    {
      id: "quiz-4-2-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué comando muestra PPID explícitamente en formato estándar?",
        en: "Which command shows PPID explicitly in standard format?",
      },
      options: {
        es: ["ps aux", "ps -ef", "free -h", "uptime"],
        en: ["ps aux", "ps -ef", "free -h", "uptime"],
      },
      correctAnswer: "1",
      explanation: {
        es: "ps -ef incluye PPID en la salida.",
        en: "ps -ef includes PPID in output.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson42: Lesson = {
  id: "lesson-4-2",
  moduleId: "level-4",
  slug: "ps-command",
  title: { es: "Monitoreo con ps", en: "Monitoring with ps" },
  description: {
    es: "Lista, filtra y formatea procesos con ps.",
    en: "List, filter, and format processes with ps.",
  },
  order: 2,
  duration: 35,
  contentBlocks: lesson42Content,
  exercises: lesson42Exercises,
  quiz: lesson42Quiz,
};
