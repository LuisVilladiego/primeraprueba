import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson31Content: ContentBlock[] = [
  {
    id: "block-3-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Modelo de permisos Unix",
        text: `Linux controla **quién puede leer, escribir y ejecutar** cada archivo. Los permisos se aplican a tres categorías:

- **u** (user) — propietario
- **g** (group) — grupo del archivo
- **o** (others) — resto de usuarios

Tres acciones: **r** read (4), **w** write (2), **x** execute (1).`,
      },
      en: {
        title: "Unix permission model",
        text: `Linux controls **who can read, write, and execute** each file. Permissions apply to three categories:

- **u** (user) — owner
- **g** (group) — file's group
- **o** (others) — everyone else

Three actions: **r** read (4), **w** write (2), **x** execute (1).`,
      },
    },
  },
  {
    id: "block-3-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "Leer ls -l",
        text: `\`\`\`bash
-rwxr-xr-- 1 alice dev 4096 Oct 14 10:00 script.sh
│└┬┘└┬┘└┬┘
│ u  g  o
\`\`\`

| Campo | Significado |
|-------|-------------|
| \`-\` inicial | Tipo (archivo; \`d\` directorio, \`l\` enlace) |
| \`rwx\` | Permisos propietario |
| \`r-x\` | Permisos grupo |
| \`r--\` | Permisos otros |
| \`alice\` | Propietario |
| \`dev\` | Grupo |

**x en directorios** = permiso para **entrar** (cd) y listar si también hay r.`,
      },
      en: {
        title: "Reading ls -l",
        text: `\`\`\`bash
-rwxr-xr-- 1 alice dev 4096 Oct 14 10:00 script.sh
│└┬┘└┬┘└┬┘
│ u  g  o
\`\`\`

| Field | Meaning |
|-------|---------|
| Leading \`-\` | Type (file; \`d\` dir, \`l\` link) |
| \`rwx\` | Owner permissions |
| \`r-x\` | Group permissions |
| \`r--\` | Others permissions |
| \`alice\` | Owner |
| \`dev\` | Group |

**x on directories** = permission to **enter** (cd) and list if r is also set.`,
      },
    },
  },
  {
    id: "block-3-1-3",
    type: "TIP",
    order: 3,
    content: {
      es: {
        title: "Octal rápido",
        text: `Suma: r=4, w=2, x=1

- 7 = rwx
- 6 = rw-
- 5 = r-x
- 4 = r--

\`644\` = rw-r--r-- (archivo típico)
\`755\` = rwxr-xr-x (script o directorio ejecutable)`,
      },
      en: {
        title: "Quick octal",
        text: `Sum: r=4, w=2, x=1

- 7 = rwx
- 6 = rw-
- 5 = r-x
- 4 = r--

\`644\` = rw-r--r-- (typical file)
\`755\` = rwxr-xr-x (script or executable directory)`,
      },
    },
  },
];

export const lesson31Exercises: Exercise[] = [
  {
    id: "ex-3-1-1",
    lessonId: "lesson-3-1",
    slug: "read-perms",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "En -rw-r-----, ¿qué puede hacer el grupo?",
      en: "In -rw-r-----, what can the group do?",
    },
    options: {
      es: ["Leer y escribir", "Solo leer", "Ejecutar", "Nada"],
      en: ["Read and write", "Read only", "Execute", "Nothing"],
    },
    correctAnswer: "1",
    explanation: {
      es: "r-- del grupo = solo lectura.",
      en: "Group r-- = read only.",
    },
    hints: { es: ["Mira el trío del medio"], en: ["Look at the middle triplet"] },
    order: 1,
  },
];

export const lesson31Quiz: Quiz = {
  id: "quiz-3-1",
  lessonId: "lesson-3-1",
  questions: [
    {
      id: "quiz-3-1-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué valor octal es rwxr-xr-x?",
        en: "What octal value is rwxr-xr-x?",
      },
      options: {
        es: ["644", "755", "777", "700"],
        en: ["644", "755", "777", "700"],
      },
      correctAnswer: "1",
      explanation: {
        es: "7+5+5 = 755.",
        en: "7+5+5 = 755.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson31: Lesson = {
  id: "lesson-3-1",
  moduleId: "level-3",
  slug: "understanding-permissions",
  title: {
    es: "Entendiendo los Permisos de Linux",
    en: "Understanding Linux Permissions",
  },
  description: {
    es: "Aprende el sistema rwx y cómo leer permisos con ls -l.",
    en: "Learn the rwx system and how to read permissions with ls -l.",
  },
  order: 1,
  duration: 35,
  contentBlocks: lesson31Content,
  exercises: lesson31Exercises,
  quiz: lesson31Quiz,
};
