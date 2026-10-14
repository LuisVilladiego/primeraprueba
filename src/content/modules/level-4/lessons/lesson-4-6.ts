import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson46Content: ContentBlock[] = [
  {
    id: "block-4-6-1",
    type: "KEY_CONCEPT",
    order: 1,
    content: {
      es: {
        title: "free: RAM y swap",
        text: `\`\`\`bash
free -h
#               total   used   free   shared  buff/cache  available
# Mem:           15Gi   8.0Gi  500Mi  200Mi   7.0Gi       6.5Gi
# Swap:          2.0Gi  100Mi  1.9Gi
\`\`\`

- **available** (Mem): estimación de RAM usable para apps nuevas
- **buff/cache:** caché de disco — Linux **libera** bajo presión
- **Swap:** RAM en disco; mucho swap usado + **si** → lentitud

\`free -w\` muestra caché más detallada (slab, etc.).`,
      },
      en: {
        title: "free: RAM and swap",
        text: `\`\`\`bash
free -h
#               total   used   free   shared  buff/cache  available
# Mem:           15Gi   8.0Gi  500Mi  200Mi   7.0Gi       6.5Gi
# Swap:          2.0Gi  100Mi  1.9Gi
\`\`\`

- **available** (Mem): estimate of RAM for new apps
- **buff/cache:** disk cache — Linux **reclaims** under pressure
- **Swap:** disk-backed RAM; heavy swap + **si** → slowness

\`free -w\` shows wider cache breakdown (slab, etc.).`,
      },
    },
  },
  {
    id: "block-4-6-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "uptime y load average",
        text: `\`\`\`bash
uptime
# 14:30:01 up 10 days, 2 users, load average: 1.20, 0.95, 0.80
\`\`\`

Tres números = media móvil 1, 5, 15 min de procesos **runnable + uninterruptible**.

Regla práctica: si load > **número de CPUs** de forma sostenida, investiga con \`top\`, \`ps\`, \`vmstat\`.

\`nproc\` o \`lscpu\` para contar cores.`,
      },
      en: {
        title: "uptime and load average",
        text: `\`\`\`bash
uptime
# 14:30:01 up 10 days, 2 users, load average: 1.20, 0.95, 0.80
\`\`\`

Three numbers = 1, 5, 15 minute moving average of **runnable + uninterruptible** processes.

Rule of thumb: if load > **CPU count** sustained, investigate with \`top\`, \`ps\`, \`vmstat\`.

\`nproc\` or \`lscpu\` for core count.`,
      },
    },
  },
  {
    id: "block-4-6-3",
    type: "KEY_CONCEPT",
    order: 3,
    content: {
      es: {
        title: "vmstat: CPU, memoria, I/O",
        text: `\`\`\`bash
vmstat 1 5    # cada 1s, 5 muestras
\`\`\`

Columnas clave:

| Col | Significado |
|-----|-------------|
| r | runnable en cola |
| b | blocked (I/O) |
| si/so | swap in/out — **alerta** si altos |
| us/sy/id/wa | CPU user/sys/idle/iowait |
| bi/bo | blocks in/out (disco) |

**wa** alto + **b** alto → procesos esperando disco.`,
      },
      en: {
        title: "vmstat: CPU, memory, I/O",
        text: `\`\`\`bash
vmstat 1 5    # every 1s, 5 samples
\`\`\`

Key columns:

| Col | Meaning |
|-----|---------|
| r | runnable queue |
| b | blocked (I/O) |
| si/so | swap in/out — **alert** if high |
| us/sy/id/wa | CPU user/sys/idle/iowait |
| bi/bo | blocks in/out (disk) |

High **wa** + **b** → processes waiting on disk.`,
      },
    },
  },
  {
    id: "block-4-6-4",
    type: "TIP",
    order: 4,
    content: {
      es: {
        title: "OOM killer",
        text: `Si RAM + swap se agotan, el kernel activa **OOM killer** y mata procesos (score por RAM). Síntoma: procesos desaparecen misteriosamente.

Revisa \`dmesg | grep -i oom\` y considera límites **cgroups**, \`systemd MemoryMax\`, o más RAM.`,
      },
      en: {
        title: "OOM killer",
        text: `If RAM + swap exhaust, the kernel's **OOM killer** terminates processes (score by memory). Symptom: processes vanish mysteriously.

Check \`dmesg | grep -i oom\` and consider **cgroups**, \`systemd MemoryMax\`, or more RAM.`,
      },
    },
  },
  {
    id: "block-4-6-5",
    type: "CODE",
    order: 5,
    content: {
      es: {
        title: "Chequeo rápido de salud",
        language: "bash",
        code: `echo "CPUs: $(nproc)"
uptime
free -h | grep -E 'Mem|Swap'
vmstat 1 3`,
      },
      en: {
        title: "Quick health check",
        language: "bash",
        code: `echo "CPUs: $(nproc)"
uptime
free -h | grep -E 'Mem|Swap'
vmstat 1 3`,
      },
    },
  },
];

export const lesson46Exercises: Exercise[] = [
  {
    id: "ex-4-6-1",
    lessonId: "lesson-4-6",
    slug: "free-available",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "En free -h, ¿qué columna indica mejor RAM usable para nuevas apps?",
      en: "In free -h, which column best indicates RAM for new apps?",
    },
    options: {
      es: ["free", "used", "buff/cache", "available"],
      en: ["free", "used", "buff/cache", "available"],
    },
    correctAnswer: "3",
    explanation: {
      es: "available estima reclamable desde caché.",
      en: "available estimates reclaimable from cache.",
    },
    hints: { es: ["No confundir free con available"], en: ["Don't confuse free with available"] },
    order: 1,
  },
];

export const lesson46Quiz: Quiz = {
  id: "quiz-4-6",
  lessonId: "lesson-4-6",
  questions: [
    {
      id: "quiz-4-6-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "si/so altos en vmstat sugieren…",
        en: "High si/so in vmstat suggests…",
      },
      options: {
        es: ["CPU saturada", "Presión de memoria / swap activo", "Red lenta", "Muchos zombies"],
        en: ["CPU saturated", "Memory pressure / active swapping", "Slow network", "Many zombies"],
      },
      correctAnswer: "1",
      explanation: {
        es: "swap in/out = páginas movidas a disco.",
        en: "swap in/out = pages moved to disk.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson46: Lesson = {
  id: "lesson-4-6",
  moduleId: "level-4",
  slug: "system-resources",
  title: { es: "Recursos: free, uptime, vmstat", en: "Resources: free, uptime, vmstat" },
  description: {
    es: "Memoria, swap, load average y estadísticas.",
    en: "Memory, swap, load average, and statistics.",
  },
  order: 6,
  duration: 30,
  contentBlocks: lesson46Content,
  exercises: lesson46Exercises,
  quiz: lesson46Quiz,
};
