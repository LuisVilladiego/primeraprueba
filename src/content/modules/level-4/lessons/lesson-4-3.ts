import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson43Content: ContentBlock[] = [
  {
    id: "block-4-3-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Monitoreo interactivo",
        text: `\`top\` refresca la tabla de procesos cada pocos segundos. Ves **carga**, **CPU**, **memoria** y qué procesos dominan el sistema **ahora**.

\`htop\` es la versión mejorada: colores, scroll, árbol, matar con F9, filtros. En servidores sin TTY, \`top -b -n 1\` genera una instantánea batch.`,
      },
      en: {
        title: "Interactive monitoring",
        text: `\`top\` refreshes the process table every few seconds. You see **load**, **CPU**, **memory**, and which processes dominate **right now**.

\`htop\` is the enhanced version: colors, scroll, tree, F9 kill, filters. On headless servers, \`top -b -n 1\` gives a batch snapshot.`,
      },
    },
  },
  {
    id: "block-4-3-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "Leer la cabecera de top",
        text: `\`\`\`
top - 14:02:01 up 5 days, load average: 0.52, 0.48, 0.45
Tasks: 220 total, 1 running, 219 sleeping, 0 zombie
%Cpu(s): 12.3 us,  2.1 sy,  0.0 ni, 84.0 id,  1.6 wa
MiB Mem: 15923.4 total, 2048.2 free, 8192.1 used, 5683.1 buff/cache
\`\`\`

- **load average:** cola de ejecución (1/5/15 min). Compara con **número de CPUs** (\`nproc\`).
- **us/sy:** usuario vs kernel. **wa** alto → cuello de botella en **disco I/O**.
- **buff/cache:** Linux usa RAM libre para caché; **available** (en \`free\`) es lo realmente usable.`,
      },
      en: {
        title: "Reading top's header",
        text: `\`\`\`
top - 14:02:01 up 5 days, load average: 0.52, 0.48, 0.45
Tasks: 220 total, 1 running, 219 sleeping, 0 zombie
%Cpu(s): 12.3 us,  2.1 sy,  0.0 ni, 84.0 id,  1.6 wa
MiB Mem: 15923.4 total, 2048.2 free, 8192.1 used, 5683.1 buff/cache
\`\`\`

- **load average:** run queue (1/5/15 min). Compare to **CPU count** (\`nproc\`).
- **us/sy:** user vs kernel. High **wa** → **disk I/O** bottleneck.
- **buff/cache:** Linux uses free RAM for cache; **available** (in \`free\`) is what's really usable.`,
      },
    },
  },
  {
    id: "block-4-3-3",
    type: "KEY_CONCEPT",
    order: 3,
    content: {
      es: {
        title: "Atajos esenciales en top",
        text: `| Tecla | Acción |
|-------|--------|
| P | ordenar por CPU |
| M | ordenar por memoria |
| T | ordenar por tiempo CPU |
| 1 | mostrar cada CPU |
| c | mostrar ruta completa del comando |
| k | matar proceso (pide señal) |
| q | salir |

En **htop:** F6 ordenar, F4 filtrar, F5 árbol, F9 señal, F10 salir.`,
      },
      en: {
        title: "Essential top shortcuts",
        text: `| Key | Action |
|-----|--------|
| P | sort by CPU |
| M | sort by memory |
| T | sort by CPU time |
| 1 | show each CPU |
| c | full command path |
| k | kill process (asks signal) |
| q | quit |

In **htop:** F6 sort, F4 filter, F5 tree, F9 signal, F10 quit.`,
      },
    },
  },
  {
    id: "block-4-3-4",
    type: "CODE",
    order: 4,
    content: {
      es: {
        title: "top batch para logs",
        language: "bash",
        code: `# Una instantánea en cron
top -b -n 1 -o %CPU | head -20 >> /var/log/top-snapshot.log

# htop no batch nativo; usa top -b o instala/atop para histórico`,
      },
      en: {
        title: "Batch top for logs",
        language: "bash",
        code: `# Single snapshot in cron
top -b -n 1 -o %CPU | head -20 >> /var/log/top-snapshot.log

# htop lacks native batch; use top -b or atop for history`,
      },
    },
  },
  {
    id: "block-4-3-5",
    type: "TIP",
    order: 5,
    content: {
      es: {
        title: "Cuándo top miente un poco",
        text: `%CPU en top es **desde el último intervalo**, no el promedio histórico. Un pico breve puede verse como 200% en multi-core (varios hilos).

Para tendencias usa **vmstat 1**, **sar** (sysstat) o métricas del hypervisor/cloud.`,
      },
      en: {
        title: "When top misleads slightly",
        text: `%CPU in top is **since the last interval**, not lifetime average. A brief spike can show 200% on multi-core (multiple threads).

For trends use **vmstat 1**, **sar** (sysstat), or cloud/hypervisor metrics.`,
      },
    },
  },
];

export const lesson43Exercises: Exercise[] = [
  {
    id: "ex-4-3-1",
    lessonId: "lesson-4-3",
    slug: "load-vs-cpu",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "Load average 8.0 en máquina con 4 CPUs suele indicar…",
      en: "Load average 8.0 on a 4-CPU machine usually means…",
    },
    options: {
      es: ["Sistema ocioso", "Cola de ejecución alta (~2× CPUs)", "RAM llena", "Red caída"],
      en: ["Idle system", "High run queue (~2× CPUs)", "RAM full", "Network down"],
    },
    correctAnswer: "1",
    explanation: {
      es: "Load ≈ procesos runnable; compara con cores.",
      en: "Load ≈ runnable processes; compare to cores.",
    },
    hints: { es: ["nproc"], en: ["nproc"] },
    order: 1,
  },
];

export const lesson43Quiz: Quiz = {
  id: "quiz-4-3",
  lessonId: "lesson-4-3",
  questions: [
    {
      id: "quiz-4-3-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Alto %wa en top sugiere…",
        en: "High %wa in top suggests…",
      },
      options: {
        es: ["CPU user alto", "Espera por I/O de disco", "Muchos zombies", "Poco swap"],
        en: ["High user CPU", "Waiting on disk I/O", "Many zombies", "Little swap"],
      },
      correctAnswer: "1",
      explanation: {
        es: "wa = iowait.",
        en: "wa = iowait.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson43: Lesson = {
  id: "lesson-4-3",
  moduleId: "level-4",
  slug: "top-htop",
  title: { es: "top y htop en Tiempo Real", en: "top and htop in Real Time" },
  description: {
    es: "CPU, memoria, load average e interacción en vivo.",
    en: "CPU, memory, load average, and live interaction.",
  },
  order: 3,
  duration: 40,
  contentBlocks: lesson43Content,
  exercises: lesson43Exercises,
  quiz: lesson43Quiz,
};
