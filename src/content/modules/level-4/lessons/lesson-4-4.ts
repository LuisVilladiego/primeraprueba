import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson44Content: ContentBlock[] = [
  {
    id: "block-4-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Señales: IPC del kernel",
        text: `Las **señales** son notificaciones asíncronas al proceso: “termina”, “recarga config”, “pausa”. El proceso puede **capturarlas** (handler), **ignorarlas** (salvo SIGKILL/SIGSTOP) o dejar el comportamiento por defecto.

\`kill\` no solo “mata”: envía una señal. Por defecto **SIGTERM (15)**.`,
      },
      en: {
        title: "Signals: kernel IPC",
        text: `**Signals** are asynchronous notifications to a process: “exit”, “reload config”, “pause”. The process may **catch** them (handler), **ignore** them (except SIGKILL/SIGSTOP), or use default behavior.

\`kill\` doesn't only “kill”: it sends a signal. Default is **SIGTERM (15)**.`,
      },
    },
  },
  {
    id: "block-4-4-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "Señales que debes conocer",
        text: `| Señal | Número | Efecto típico |
|-------|--------|---------------|
| SIGHUP | 1 | Colgar terminal; muchos daemons **recargan config** |
| SIGINT | 2 | Interrupción (Ctrl+C) |
| SIGQUIT | 3 | Quit + core dump |
| SIGKILL | 9 | **Mata sin limpieza** — no capturable |
| SIGTERM | 15 | Terminación **graceful** (default kill) |
| SIGSTOP | 19 | Pausa — no capturable |
| SIGCONT | 18 | Reanuda tras STOP |
| SIGTSTP | 20 | Pausa desde terminal (Ctrl+Z) |

**Orden sano:** SIGTERM → esperar → SIGKILL si no responde.`,
      },
      en: {
        title: "Signals you must know",
        text: `| Signal | Number | Typical effect |
|--------|--------|----------------|
| SIGHUP | 1 | Hangup; many daemons **reload config** |
| SIGINT | 2 | Interrupt (Ctrl+C) |
| SIGQUIT | 3 | Quit + core dump |
| SIGKILL | 9 | **Kill without cleanup** — not catchable |
| SIGTERM | 15 | **Graceful** termination (default kill) |
| SIGSTOP | 19 | Pause — not catchable |
| SIGCONT | 18 | Resume after STOP |
| SIGTSTP | 20 | Terminal pause (Ctrl+Z) |

**Healthy order:** SIGTERM → wait → SIGKILL if unresponsive.`,
      },
    },
  },
  {
    id: "block-4-4-3",
    type: "CODE",
    order: 3,
    content: {
      es: {
        title: "kill, killall, pkill",
        language: "bash",
        code: `kill 1234              # SIGTERM al PID
kill -15 1234
kill -9 1234             # último recurso
kill -HUP 1234           # recargar (si el programa lo soporta)

killall nginx            # por nombre (cuidado: todos los nginx)
pkill -f 'gunicorn.*app' # patrón en cmdline

# Señal a job de la shell
kill %1
kill -STOP %2`,
      },
      en: {
        title: "kill, killall, pkill",
        language: "bash",
        code: `kill 1234              # SIGTERM to PID
kill -15 1234
kill -9 1234             # last resort
kill -HUP 1234           # reload (if supported)

killall nginx            # by name (careful: all nginx)
pkill -f 'gunicorn.*app' # pattern on cmdline

# Signal shell job
kill %1
kill -STOP %2`,
      },
    },
  },
  {
    id: "block-4-4-4",
    type: "KEY_CONCEPT",
    order: 4,
    content: {
      es: {
        title: "Graceful shutdown en producción",
        text: `Servicios bien hechos capturan SIGTERM para:

1. Dejar de aceptar conexiones nuevas
2. Terminar requests en curso
3. Cerrar archivos y liberar locks
4. Salir con código 0

**SIGKILL** no permite pasos 2–3 → riesgo de corrupción o conexiones colgadas.

Ejemplo: \`systemctl stop nginx\` envía SIGTERM y espera timeout antes de KILL.`,
      },
      en: {
        title: "Graceful shutdown in production",
        text: `Well-behaved services catch SIGTERM to:

1. Stop accepting new connections
2. Finish in-flight requests
3. Close files and release locks
4. Exit with code 0

**SIGKILL** skips steps 2–3 → risk of corruption or hung clients.

Example: \`systemctl stop nginx\` sends SIGTERM and waits before KILL.`,
      },
    },
  },
  {
    id: "block-4-4-5",
    type: "WARNING",
    order: 5,
    content: {
      es: {
        title: "kill -9 como muleta",
        text: `Abusar de SIGKILL oculta bugs (procesos que no manejan TERM) y deja recursos huérfanos (puertos en TIME_WAIT, archivos temp, locks en NFS).

Investiga **por qué** no termina: strace, logs, \`/proc/PID/stack\`, estado D (I/O bloqueado).`,
      },
      en: {
        title: "kill -9 as a crutch",
        text: `Overusing SIGKILL hides bugs (no TERM handling) and leaks resources (TIME_WAIT ports, temp files, NFS locks).

Investigate **why** it won't exit: strace, logs, \`/proc/PID/stack\`, D state (blocked I/O).`,
      },
    },
  },
];

export const lesson44Exercises: Exercise[] = [
  {
    id: "ex-4-4-1",
    lessonId: "lesson-4-4",
    slug: "default-signal",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "Señal por defecto de kill",
      en: "Default kill signal",
    },
    options: {
      es: ["SIGKILL", "SIGTERM", "SIGHUP", "SIGINT"],
      en: ["SIGKILL", "SIGTERM", "SIGHUP", "SIGINT"],
    },
    correctAnswer: "1",
    explanation: {
      es: "15 = SIGTERM.",
      en: "15 = SIGTERM.",
    },
    hints: { es: ["Graceful first"], en: ["Graceful first"] },
    order: 1,
  },
  {
    id: "ex-4-4-2",
    lessonId: "lesson-4-4",
    slug: "reload-nginx",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "Recargar config de nginx sin cortar conexiones (tradicional)",
      en: "Reload nginx config without dropping connections (traditional)",
    },
    options: {
      es: ["kill -9 nginx", "kill -HUP master_pid", "kill -STOP nginx", "kill -CONT nginx"],
      en: ["kill -9 nginx", "kill -HUP master_pid", "kill -STOP nginx", "kill -CONT nginx"],
    },
    correctAnswer: "1",
    explanation: {
      es: "SIGHUP al master; preferir systemctl reload hoy.",
      en: "SIGHUP to master; prefer systemctl reload today.",
    },
    hints: { es: ["HUP = hangup/reload"], en: ["HUP = hangup/reload"] },
    order: 2,
  },
];

export const lesson44Quiz: Quiz = {
  id: "quiz-4-4",
  lessonId: "lesson-4-4",
  questions: [
    {
      id: "quiz-4-4-1",
      type: "TRUE_FALSE",
      question: {
        es: "Un proceso puede capturar SIGKILL y limpiar antes de salir.",
        en: "A process can catch SIGKILL and clean up before exiting.",
      },
      correctAnswer: "false",
      explanation: {
        es: "SIGKILL y SIGSTOP no pueden capturarse.",
        en: "SIGKILL and SIGSTOP cannot be caught.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson44: Lesson = {
  id: "lesson-4-4",
  moduleId: "level-4",
  slug: "signals-kill",
  title: { es: "Señales y kill", en: "Signals and kill" },
  description: {
    es: "SIGTERM, SIGKILL, SIGINT y cuándo usar cada una.",
    en: "SIGTERM, SIGKILL, SIGINT, and when to use each.",
  },
  order: 4,
  duration: 35,
  contentBlocks: lesson44Content,
  exercises: lesson44Exercises,
  quiz: lesson44Quiz,
};
