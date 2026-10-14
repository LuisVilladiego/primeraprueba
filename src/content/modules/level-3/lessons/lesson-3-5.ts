import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson35Content: ContentBlock[] = [
  {
    id: "block-3-5-1",
    type: "KEY_CONCEPT",
    order: 1,
    content: {
      es: {
        title: "SUID, SGID, Sticky",
        text: `Bits especiales (cuarto dígito octal):

| Bit | Octal | Efecto |
|-----|-------|--------|
| **SUID** | 4000 | Ejecutable corre como **propietario** del archivo |
| **SGID** | 2000 | En dirs: archivos nuevos heredan **grupo** del dir |
| **Sticky** | 1000 | En dirs: solo owner/root borra archivos (ej. /tmp) |

\`\`\`bash
chmod 4755 /usr/bin/passwd   # SUID + rwxr-xr-x
chmod 2770 /srv/compartido   # SGID + rwxrwx---
chmod 1777 /tmp              # sticky + rwxrwxrwx
ls -l /usr/bin/passwd        # -rwsr-xr-x
\`\`\``,
      },
      en: {
        title: "SUID, SGID, Sticky",
        text: `Special bits (fourth octal digit):

| Bit | Octal | Effect |
|-----|-------|--------|
| **SUID** | 4000 | Executable runs as file **owner** |
| **SGID** | 2000 | On dirs: new files inherit dir **group** |
| **Sticky** | 1000 | On dirs: only owner/root deletes files (e.g. /tmp) |

\`\`\`bash
chmod 4755 /usr/bin/passwd   # SUID + rwxr-xr-x
chmod 2770 /srv/shared       # SGID + rwxrwx---
chmod 1777 /tmp              # sticky + rwxrwxrwx
ls -l /usr/bin/passwd        # -rwsr-xr-x
\`\`\``,
      },
    },
  },
  {
    id: "block-3-5-2",
    type: "WARNING",
    order: 2,
    content: {
      es: {
        title: "Riesgo SUID",
        text: `Binarios SUID son un vector de escalada. Audita con:

\`\`\`bash
find / -perm -4000 -type f 2>/dev/null
\`\`\`

Elimina SUID innecesario en scripts propios.`,
      },
      en: {
        title: "SUID risk",
        text: `SUID binaries are a privilege escalation vector. Audit with:

\`\`\`bash
find / -perm -4000 -type f 2>/dev/null
\`\`\`

Remove unnecessary SUID on your own scripts.`,
      },
    },
  },
];

export const lesson35Exercises: Exercise[] = [
  {
    id: "ex-3-5-1",
    lessonId: "lesson-3-5",
    slug: "suid-octal",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "Valor octal del bit SUID",
      en: "Octal value of SUID bit",
    },
    options: {
      es: ["1000", "2000", "4000", "7000"],
      en: ["1000", "2000", "4000", "7000"],
    },
    correctAnswer: "2",
    explanation: {
      es: "SUID=4000, SGID=2000, sticky=1000.",
      en: "SUID=4000, SGID=2000, sticky=1000.",
    },
    hints: { es: ["4 = setuid"], en: ["4 = setuid"] },
    order: 1,
  },
];

export const lesson35Quiz: Quiz = {
  id: "quiz-3-5",
  lessonId: "lesson-3-5",
  questions: [
    {
      id: "quiz-3-5-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Sticky bit en directorio permite…",
        en: "Sticky bit on a directory allows…",
      },
      options: {
        es: [
          "Borrar solo tus archivos",
          "Ejecutar como root",
          "Herencia de grupo",
          "Lectura global",
        ],
        en: [
          "Delete only your own files",
          "Run as root",
          "Group inheritance",
          "Global read",
        ],
      },
      correctAnswer: "0",
      explanation: {
        es: "Clásico en /tmp: todos crean, solo owner borra.",
        en: "Classic on /tmp: everyone creates, only owner deletes.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson35: Lesson = {
  id: "lesson-3-5",
  moduleId: "level-3",
  slug: "special-permissions",
  title: {
    es: "Permisos Especiales: SUID, SGID, Sticky",
    en: "Special Permissions: SUID, SGID, Sticky",
  },
  description: {
    es: "Entiende y usa los permisos especiales de Linux.",
    en: "Understand and use special Linux permissions.",
  },
  order: 5,
  duration: 35,
  contentBlocks: lesson35Content,
  exercises: lesson35Exercises,
  quiz: lesson35Quiz,
};
