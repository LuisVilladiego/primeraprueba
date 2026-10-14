import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson45Content: ContentBlock[] = [
  {
    id: "block-4-5-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Job control en la shell",
        text: `Bash puede ejecutar **jobs**: procesos ligados a tu sesión de terminal. Puedes lanzarlos en **foreground** (bloquean la shell) o **background** (devuelven el prompt).

El kernel mantiene una **process group** y una **session**; la shell es el **session leader** y controla quién recibe Ctrl+C / Ctrl+Z.`,
      },
      en: {
        title: "Shell job control",
        text: `Bash can run **jobs**: processes tied to your terminal session. Run them in **foreground** (block the shell) or **background** (return the prompt).

The kernel keeps a **process group** and **session**; the shell is the **session leader** and decides who gets Ctrl+C / Ctrl+Z.`,
      },
    },
  },
  {
    id: "block-4-5-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "& , jobs, fg, bg",
        text: `\`\`\`bash
sleep 300 &           # background; imprime [1] PID
jobs                  # lista jobs de la shell
jobs -l               # con PID

sleep 200             # foreground
# Ctrl+Z → detenido → [2]+ Stopped
bg %2                 # continúa en background
fg %1                 # trae job 1 a foreground

kill %1               # señal al job número 1
\`\`\`

**%1** es el **job spec**, no confundir con PID (aunque jobs -l muestra ambos).`,
      },
      en: {
        title: "& , jobs, fg, bg",
        text: `\`\`\`bash
sleep 300 &           # background; prints [1] PID
jobs                  # list shell jobs
jobs -l               # with PID

sleep 200             # foreground
# Ctrl+Z → stopped → [2]+ Stopped
bg %2                 # continue in background
fg %1                 # bring job 1 to foreground

kill %1               # signal job number 1
\`\`\`

**%1** is the **job spec**, not the PID (though jobs -l shows both).`,
      },
    },
  },
  {
    id: "block-4-5-3",
    type: "KEY_CONCEPT",
    order: 3,
    content: {
      es: {
        title: "nohup, disown y screen/tmux",
        text: `Al cerrar terminal, el kernel envía **SIGHUP** a la session. Los procesos foreground mueren; los background también suelen morir.

\`\`\`bash
nohup long_task.sh >out.log 2>&1 &
disown -h %1          # quita job de la tabla → no recibe SIGHUP de shell
\`\`\`

Para sesiones persistentes: **tmux** o **screen** (recomendado en servidores).`,
      },
      en: {
        title: "nohup, disown and screen/tmux",
        text: `Closing the terminal sends **SIGHUP** to the session. Foreground processes die; background often dies too.

\`\`\`bash
nohup long_task.sh >out.log 2>&1 &
disown -h %1          # remove from job table → no SIGHUP from shell
\`\`\`

For persistent sessions: **tmux** or **screen** (recommended on servers).`,
      },
    },
  },
  {
    id: "block-4-5-4",
    type: "CODE",
    order: 4,
    content: {
      es: {
        title: "Redirección con jobs largos",
        language: "bash",
        code: `# Evitar que nohup.out crezca sin control
nohup ./backup.sh >> /var/log/backup.log 2>&1 &

# Ver si sigue vivo tras logout/login
ps -u "$USER" -o pid,cmd | grep backup.sh`,
      },
      en: {
        title: "Redirection with long jobs",
        language: "bash",
        code: `# Avoid uncontrolled nohup.out growth
nohup ./backup.sh >> /var/log/backup.log 2>&1 &

# Check if still alive after logout/login
ps -u "$USER" -o pid,cmd | grep backup.sh`,
      },
    },
  },
  {
    id: "block-4-5-5",
    type: "TIP",
    order: 5,
    content: {
      es: {
        title: "Ctrl+C vs Ctrl+Z",
        text: `- **Ctrl+C** → SIGINT → suele **terminar** el proceso foreground
- **Ctrl+Z** → SIGTSTP → **pausa** y devuelve control a la shell

Si pausas por error, \`fg\` o \`bg\` para continuar; no dejes jobs stopped olvidados (ocupan recursos).`,
      },
      en: {
        title: "Ctrl+C vs Ctrl+Z",
        text: `- **Ctrl+C** → SIGINT → usually **terminates** foreground process
- **Ctrl+Z** → SIGTSTP → **pauses** and returns control to shell

If you pause by mistake, \`fg\` or \`bg\` to continue; don't leave stopped jobs forgotten (they hold resources).`,
      },
    },
  },
];

export const lesson45Exercises: Exercise[] = [
  {
    id: "ex-4-5-1",
    lessonId: "lesson-4-5",
    slug: "nohup-purpose",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "Principal beneficio de nohup",
      en: "Main benefit of nohup",
    },
    options: {
      es: ["Más CPU", "Ignorar SIGHUP al cerrar terminal", "Ejecutar como root", "Sin logs"],
      en: ["More CPU", "Ignore SIGHUP on terminal close", "Run as root", "No logs"],
    },
    correctAnswer: "1",
    explanation: {
      es: "no hang up — sobrevive al cierre de sesión.",
      en: "no hang up — survives session disconnect.",
    },
    hints: { es: ["HUP"], en: ["HUP"] },
    order: 1,
  },
];

export const lesson45Quiz: Quiz = {
  id: "quiz-4-5",
  lessonId: "lesson-4-5",
  questions: [
    {
      id: "quiz-4-5-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Tras Ctrl+Z, ¿cómo reanudar en background?",
        en: "After Ctrl+Z, how to resume in background?",
      },
      options: {
        es: ["fg", "bg", "jobs -k", "disown"],
        en: ["fg", "bg", "jobs -k", "disown"],
      },
      correctAnswer: "1",
      explanation: {
        es: "bg continúa el job detenido en segundo plano.",
        en: "bg continues the stopped job in background.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson45: Lesson = {
  id: "lesson-4-5",
  moduleId: "level-4",
  slug: "background-foreground",
  title: { es: "Background y Foreground", en: "Background and Foreground" },
  description: {
    es: "jobs, bg, fg, nohup y control desde la shell.",
    en: "jobs, bg, fg, nohup, and shell job control.",
  },
  order: 5,
  duration: 35,
  contentBlocks: lesson45Content,
  exercises: lesson45Exercises,
  quiz: lesson45Quiz,
};
