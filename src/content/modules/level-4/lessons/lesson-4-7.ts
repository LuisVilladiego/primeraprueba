import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson47Content: ContentBlock[] = [
  {
    id: "block-4-7-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Niceness y scheduling",
        text: `Linux reparte CPU entre procesos **runnable** con el planificador CFS. **Niceness** (-20 a 19) inclina la balanza: valores **más bajos** = **más** CPU (más “agresivo”).

Default niceness = **0**. Usuario normal solo puede **subir** niceness (ser más “nice”, ceder CPU). Valores **negativos** suelen requerir root o CAP_SYS_NICE.`,
      },
      en: {
        title: "Niceness and scheduling",
        text: `Linux shares CPU among **runnable** processes with the CFS scheduler. **Niceness** (-20 to 19) tilts the scale: **lower** values = **more** CPU (more “aggressive”).

Default niceness = **0**. Normal users can only **increase** niceness (be nicer, yield CPU). **Negative** values usually need root or CAP_SYS_NICE.`,
      },
    },
  },
  {
    id: "block-4-7-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "nice y renice",
        text: `\`\`\`bash
nice -n 10 gzip huge.log      # lanza con menor prioridad
nice -n 19 tar czf backup.tar.gz /data

renice +5 -p 1234             # cede CPU al PID 1234
renice -n -5 -p 1234          # más CPU (root)

ps -o pid,ni,cmd -p 1234      # NI = niceness actual
\`\`\`

**Batch nocturno:** nice 19 en backups para no afectar producción diurna.`,
      },
      en: {
        title: "nice and renice",
        text: `\`\`\`bash
nice -n 10 gzip huge.log      # start with lower priority
nice -n 19 tar czf backup.tar.gz /data

renice +5 -p 1234             # yield CPU to PID 1234
renice -n -5 -p 1234          # more CPU (root)

ps -o pid,ni,cmd -p 1234      # NI = current niceness
\`\`\`

**Nightly batch:** nice 19 on backups to avoid hurting daytime production.`,
      },
    },
  },
  {
    id: "block-4-7-3",
    type: "KEY_CONCEPT",
    order: 3,
    content: {
      es: {
        title: "Nice vs realtime",
        text: `**Niceness** afecta **CFS** (timesharing normal). Prioridades **realtime** (FIFO/RR) son otro mundo (audio, control industrial) y pueden **starve** el resto del sistema — no jugar sin saber.

Para servidores web/DB, casi siempre basta **nice/renice** y límites **cgroups/systemd** (\`CPUQuota\`).`,
      },
      en: {
        title: "Nice vs realtime",
        text: `**Niceness** affects **CFS** (normal timesharing). **Realtime** priorities (FIFO/RR) are a different world (audio, industrial control) and can **starve** the system — don't touch without expertise.

For web/DB servers, **nice/renice** and **cgroups/systemd** limits (\`CPUQuota\`) are usually enough.`,
      },
    },
  },
  {
    id: "block-4-7-4",
    type: "TIP",
    order: 4,
    content: {
      es: {
        title: "ionice (bonus)",
        text: `Prioridad de **disco I/O** es independiente de CPU:

\`\`\`bash
ionice -c2 -n7 dd if=/dev/zero of=test.img bs=1M count=1024
\`\`\`

Útil cuando un backup satura el disco y afecta latencia de la app.`,
      },
      en: {
        title: "ionice (bonus)",
        text: `**Disk I/O** priority is separate from CPU:

\`\`\`bash
ionice -c2 -n7 dd if=/dev/zero of=test.img bs=1M count=1024
\`\`\`

Useful when backup saturates disk and hurts app latency.`,
      },
    },
  },
  {
    id: "block-4-7-5",
    type: "WARNING",
    order: 5,
    content: {
      es: {
        title: "renice -20 sin criterio",
        text: `Dar máxima prioridad CPU a un proceso sin control puede **ahogar** sshd, systemd o la base de datos. Mide antes (top), aplica cambios pequeños, revierte si empeora latencia.`,
      },
      en: {
        title: "renice -20 without reason",
        text: `Max CPU priority without control can **starve** sshd, systemd, or the database. Measure first (top), apply small changes, revert if latency worsens.`,
      },
    },
  },
];

export const lesson47Exercises: Exercise[] = [
  {
    id: "ex-4-7-1",
    lessonId: "lesson-4-7",
    slug: "lower-nice",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué niceness suele dar MÁS tiempo de CPU?",
      en: "Which niceness usually gets MORE CPU time?",
    },
    options: {
      es: ["19", "10", "0", "-5"],
      en: ["19", "10", "0", "-5"],
    },
    correctAnswer: "3",
    explanation: {
      es: "Menor número = más prioridad (con permisos).",
      en: "Lower number = higher priority (with privileges).",
    },
    hints: { es: ["Negativo es más agresivo"], en: ["Negative is more aggressive"] },
    order: 1,
  },
];

export const lesson47Quiz: Quiz = {
  id: "quiz-4-7",
  lessonId: "lesson-4-7",
  questions: [
    {
      id: "quiz-4-7-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Usuario normal sin root puede…",
        en: "Normal user without root can…",
      },
      options: {
        es: [
          "renice -10 a cualquier proceso",
          "nice -n 15 para lanzar proceso más deferente",
          "Cambiar prioridad realtime",
          "ionice solo root siempre",
        ],
        en: [
          "renice -10 any process",
          "nice -n 15 to start a more deferential process",
          "Change realtime priority",
          "ionice always root only",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "Puede aumentar niceness (ceder); bajar suele estar restringido.",
        en: "Can increase niceness (yield); lowering is usually restricted.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson47: Lesson = {
  id: "lesson-4-7",
  moduleId: "level-4",
  slug: "process-priority",
  title: { es: "Prioridad: nice y renice", en: "Priority: nice and renice" },
  description: {
    es: "Niceness, scheduling y fair share de CPU.",
    en: "Niceness, scheduling, and CPU fair share.",
  },
  order: 7,
  duration: 30,
  contentBlocks: lesson47Content,
  exercises: lesson47Exercises,
  quiz: lesson47Quiz,
};
