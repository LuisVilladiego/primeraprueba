import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson33Content: ContentBlock[] = [
  {
    id: "block-3-3-1",
    type: "KEY_CONCEPT",
    order: 1,
    content: {
      es: {
        title: "/etc/passwd y /etc/group",
        text: `\`/etc/passwd\` — una línea por usuario (legible por todos):

\`\`\`
usuario:x:1000:1000:Nombre:/home/usuario:/bin/bash
\`\`\`

Campos: login, x (password en shadow), UID, GID primario, GECOS, home, shell.

\`/etc/group\` — grupos y miembros:

\`\`\`
developers:x:1001:alice,bob
\`\`\``,
      },
      en: {
        title: "/etc/passwd and /etc/group",
        text: `\`/etc/passwd\` — one line per user (world-readable):

\`\`\`
user:x:1000:1000:Name:/home/user:/bin/bash
\`\`\`

Fields: login, x (password in shadow), UID, primary GID, GECOS, home, shell.

\`/etc/group\` — groups and members:

\`\`\`
developers:x:1001:alice,bob
\`\`\``,
      },
    },
  },
  {
    id: "block-3-3-2",
    type: "TEXT",
    order: 2,
    content: {
      es: {
        title: "Comandos útiles",
        text: `\`\`\`bash
id                    # UID, GID, grupos
id alice
groups bob
whoami
getent passwd alice   # consulta NSS (LDAP también)
\`\`\`

Administración (root): \`useradd\`, \`usermod\`, \`userdel\`, \`groupadd\`, \`groupdel\`.`,
      },
      en: {
        title: "Useful commands",
        text: `\`\`\`bash
id                    # UID, GID, groups
id alice
groups bob
whoami
getent passwd alice   # NSS lookup (LDAP too)
\`\`\`

Administration (root): \`useradd\`, \`usermod\`, \`userdel\`, \`groupadd\`, \`groupdel\`.`,
      },
    },
  },
  {
    id: "block-3-3-3",
    type: "WARNING",
    order: 3,
    content: {
      es: {
        title: "/etc/shadow",
        text: `Las contraseñas hasheadas viven en **/etc/shadow** (solo root). Nunca edites passwd/shadow a mano sin \`vipw\`/\`vigr\` — puedes bloquear el sistema.`,
      },
      en: {
        title: "/etc/shadow",
        text: `Hashed passwords live in **/etc/shadow** (root only). Never edit passwd/shadow by hand without \`vipw\`/\`vigr\` — you can lock yourself out.`,
      },
    },
  },
];

export const lesson33Exercises: Exercise[] = [
  {
    id: "ex-3-3-1",
    lessonId: "lesson-3-3",
    slug: "add-group",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "Añadir usuario carlos al grupo web sin quitar otros grupos",
      en: "Add user carlos to group web without removing other groups",
    },
    options: {
      es: [
        "usermod web carlos",
        "usermod -aG web carlos",
        "groupadd carlos web",
        "chmod web carlos",
      ],
      en: [
        "usermod web carlos",
        "usermod -aG web carlos",
        "groupadd carlos web",
        "chmod web carlos",
      ],
    },
    correctAnswer: "1",
    explanation: {
      es: "-a append, -G grupo suplementario.",
      en: "-a append, -G supplementary group.",
    },
    hints: { es: ["Siempre -a con -G"], en: ["Always use -a with -G"] },
    order: 1,
  },
];

export const lesson33Quiz: Quiz = {
  id: "quiz-3-3",
  lessonId: "lesson-3-3",
  questions: [
    {
      id: "quiz-3-3-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Dónde están las contraseñas encriptadas?",
        en: "Where are encrypted passwords stored?",
      },
      options: {
        es: ["/etc/passwd", "/etc/shadow", "/etc/group", "/var/log/auth"],
        en: ["/etc/passwd", "/etc/shadow", "/etc/group", "/var/log/auth"],
      },
      correctAnswer: "1",
      explanation: {
        es: "shadow es restringido a root.",
        en: "shadow is restricted to root.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson33: Lesson = {
  id: "lesson-3-3",
  moduleId: "level-3",
  slug: "users-groups",
  title: {
    es: "Usuarios y Grupos",
    en: "Users and Groups",
  },
  description: {
    es: "Gestiona usuarios y grupos en el sistema.",
    en: "Manage users and groups on the system.",
  },
  order: 3,
  duration: 35,
  contentBlocks: lesson33Content,
  exercises: lesson33Exercises,
  quiz: lesson33Quiz,
};
