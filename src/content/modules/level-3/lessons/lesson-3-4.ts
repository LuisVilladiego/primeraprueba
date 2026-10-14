import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson34Content: ContentBlock[] = [
  {
    id: "block-3-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "chown y chgrp",
        text: `**chown** cambia propietario (y opcionalmente grupo). **chgrp** solo cambia grupo.

Solo root puede dar archivos a otro usuario (excepto con capacidades especiales).

\`\`\`bash
chown alice documento.txt
chown alice:dev proyecto/ -R
chgrp developers *.log
\`\`\``,
      },
      en: {
        title: "chown and chgrp",
        text: `**chown** changes owner (and optionally group). **chgrp** changes group only.

Only root can give files to another user (except special capabilities).

\`\`\`bash
chown alice document.txt
chown alice:dev project/ -R
chgrp developers *.log
\`\`\``,
      },
    },
  },
  {
    id: "block-3-4-2",
    type: "TIP",
    order: 2,
    content: {
      es: {
        title: "Recursivo con cuidado",
        text: `\`chown -R\` en \`/\` o \`/etc\` puede romper el sistema. Limita el path y usa \`--reference\` para copiar ownership:

\`\`\`bash
chown --reference=plantilla.txt nuevo.txt
\`\`\``,
      },
      en: {
        title: "Recursive with care",
        text: `\`chown -R\` on \`/\` or \`/etc\` can break the system. Limit the path and use \`--reference\` to copy ownership:

\`\`\`bash
chown --reference=template.txt new.txt
\`\`\``,
      },
    },
  },
];

export const lesson34Exercises: Exercise[] = [
  {
    id: "ex-3-4-1",
    lessonId: "lesson-3-4",
    slug: "chown-user-group",
    type: "COMMAND_COMPLETION",
    question: {
      es: "Asigna propietario bob y grupo staff a archivo.dat",
      en: "Set owner bob and group staff on file.dat",
    },
    correctAnswer: ["chown bob:staff archivo.dat", "chown bob:staff file.dat"],
    explanation: {
      es: "Sintaxis user:group en chown.",
      en: "user:group syntax in chown.",
    },
    hints: { es: ["user:group"], en: ["user:group"] },
    order: 1,
  },
];

export const lesson34Quiz: Quiz = {
  id: "quiz-3-4",
  lessonId: "lesson-3-4",
  questions: [
    {
      id: "quiz-3-4-1",
      type: "TRUE_FALSE",
      question: {
        es: "Un usuario normal puede hacer chown de su archivo a otro usuario.",
        en: "A normal user can chown their file to another user.",
      },
      correctAnswer: "false",
      explanation: {
        es: "Cambiar propietario requiere privilegios de root.",
        en: "Changing owner requires root privileges.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson34: Lesson = {
  id: "lesson-3-4",
  moduleId: "level-3",
  slug: "chown-chgrp",
  title: {
    es: "Cambiar Propietario: chown y chgrp",
    en: "Change Owner: chown and chgrp",
  },
  description: {
    es: "Cambia el propietario y grupo de archivos.",
    en: "Change file owner and group.",
  },
  order: 4,
  duration: 25,
  contentBlocks: lesson34Content,
  exercises: lesson34Exercises,
  quiz: lesson34Quiz,
};
