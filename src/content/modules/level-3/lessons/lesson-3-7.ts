import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson37Content: ContentBlock[] = [
  {
    id: "block-3-7-1",
    type: "KEY_CONCEPT",
    order: 1,
    content: {
      es: {
        title: "sudo vs su",
        text: `**su** — cambia de usuario (shell completa):

\`\`\`bash
su -              # shell login como root
su - alice        # como alice
\`\`\`

**sudo** — ejecuta **un comando** con privilegios (auditable):

\`\`\`bash
sudo apt update
sudo -u www-data touch /var/www/index.html
sudo -i           # shell root vía sudo
\`\`\`

sudo usa **tu contraseña** (o NOPASSWD en sudoers), no la de root.`,
      },
      en: {
        title: "sudo vs su",
        text: `**su** — switch user (full shell):

\`\`\`bash
su -              # login shell as root
su - alice        # as alice
\`\`\`

**sudo** — run **one command** with elevated privileges (audited):

\`\`\`bash
sudo apt update
sudo -u www-data touch /var/www/index.html
sudo -i           # root shell via sudo
\`\`\`

sudo uses **your password** (or NOPASSWD in sudoers), not root's.`,
      },
    },
  },
  {
    id: "block-3-7-2",
    type: "TEXT",
    order: 2,
    content: {
      es: {
        title: "/etc/sudoers",
        text: `Edita solo con \`visudo\` (valida sintaxis):

\`\`\`
# usuario ALL=(ALL:ALL) ALL
%wheel ALL=(ALL) ALL
deploy ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx
\`\`\`

Principio de **mínimo privilegio**: concede solo comandos necesarios.`,
      },
      en: {
        title: "/etc/sudoers",
        text: `Edit only with \`visudo\` (syntax check):

\`\`\`
# user ALL=(ALL:ALL) ALL
%wheel ALL=(ALL) ALL
deploy ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx
\`\`\`

**Least privilege**: grant only required commands.`,
      },
    },
  },
  {
    id: "block-3-7-3",
    type: "TIP",
    order: 3,
    content: {
      es: {
        title: "Buenas prácticas",
        text: `- Prefiere \`sudo comando\` sobre \`su -\` prolongado
- Revisa \`/var/log/auth.log\` tras incidentes
- No compartas cuentas root; usa cuentas personales + sudo`,
      },
      en: {
        title: "Best practices",
        text: `- Prefer \`sudo command\` over long \`su -\` sessions
- Check \`/var/log/auth.log\` after incidents
- Don't share root; use personal accounts + sudo`,
      },
    },
  },
];

export const lesson37Exercises: Exercise[] = [
  {
    id: "ex-3-7-1",
    lessonId: "lesson-3-7",
    slug: "sudo-edit",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Cómo editar sudoers de forma segura?",
      en: "How to edit sudoers safely?",
    },
    options: {
      es: ["nano /etc/sudoers", "visudo", "sudoedit /etc/sudoers.raw", "echo >> /etc/sudoers"],
      en: ["nano /etc/sudoers", "visudo", "sudoedit /etc/sudoers.raw", "echo >> /etc/sudoers"],
    },
    correctAnswer: "1",
    explanation: {
      es: "visudo bloquea si la sintaxis es inválida.",
      en: "visudo prevents saving invalid syntax.",
    },
    hints: { es: ["Comando dedicado"], en: ["Dedicated command"] },
    order: 1,
  },
];

export const lesson37Quiz: Quiz = {
  id: "quiz-3-7",
  lessonId: "lesson-3-7",
  questions: [
    {
      id: "quiz-3-7-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Ventaja principal de sudo sobre su para administración diaria",
        en: "Main advantage of sudo over su for daily admin",
      },
      options: {
        es: [
          "No pide contraseña",
          "Comandos granulares y auditables",
          "Más rápido siempre",
          "Funciona sin root",
        ],
        en: [
          "Never asks password",
          "Granular, auditable commands",
          "Always faster",
          "Works without root",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "sudo deja rastro por usuario y comando.",
        en: "sudo leaves a trail per user and command.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson37: Lesson = {
  id: "lesson-3-7",
  moduleId: "level-3",
  slug: "sudo-su",
  title: {
    es: "Elevación de Privilegios: sudo y su",
    en: "Privilege Escalation: sudo and su",
  },
  description: {
    es: "Ejecuta comandos como root de forma segura.",
    en: "Run commands as root safely.",
  },
  order: 7,
  duration: 30,
  contentBlocks: lesson37Content,
  exercises: lesson37Exercises,
  quiz: lesson37Quiz,
};
