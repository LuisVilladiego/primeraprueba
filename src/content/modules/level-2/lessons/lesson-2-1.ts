import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson21Content: ContentBlock[] = [
  {
    id: "block-2-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Filesystem Hierarchy Standard (FHS)",
        text: `En Linux todo cuelga de una única raíz \`/\`. El **FHS** define dónde viven configuraciones, logs, programas y datos de usuario.

A diferencia de Windows (C:, D:…), no hay letras de unidad: montajes aparecen como subdirectorios bajo \`/\`.`,
      },
      en: {
        title: "Filesystem Hierarchy Standard (FHS)",
        text: `In Linux everything hangs from a single root \`/\`. The **FHS** defines where configs, logs, programs, and user data live.

Unlike Windows (C:, D:…), there are no drive letters: mounts appear as subdirectories under \`/\`.`,
      },
    },
  },
  {
    id: "block-2-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "Directorios que debes memorizar",
        text: `| Ruta | Propósito |
|------|-----------|
| **/etc** | Configuración del sistema (texto) |
| **/var** | Datos variables (logs en /var/log) |
| **/home** | Directorios personales de usuarios |
| **/tmp** | Temporales (se limpian al reiniciar) |
| **/usr** | Programas y datos de solo lectura |
| **/bin**, **/sbin** | Binarios esenciales (usuario / sistema) |
| **/dev** | Dispositivos |
| **/proc**, **/sys** | Interfaces virtuales del kernel |

\`\`\`bash
ls /etc/*.conf    # configs comunes
ls -la /var/log   # logs del sistema
cat /etc/os-release
\`\`\``,
      },
      en: {
        title: "Directories you should memorize",
        text: `| Path | Purpose |
|------|---------|
| **/etc** | System configuration (text) |
| **/var** | Variable data (logs in /var/log) |
| **/home** | User home directories |
| **/tmp** | Temporary (often cleared on reboot) |
| **/usr** | Programs and read-only data |
| **/bin**, **/sbin** | Essential binaries (user / system) |
| **/dev** | Devices |
| **/proc**, **/sys** | Virtual kernel interfaces |

\`\`\`bash
ls /etc/*.conf    # common configs
ls -la /var/log   # system logs
cat /etc/os-release
\`\`\``,
      },
    },
  },
];

export const lesson21Exercises: Exercise[] = [
  {
    id: "ex-2-1-1",
    lessonId: "lesson-2-1",
    slug: "config-dir",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué directorio contiene la configuración del sistema?",
      en: "Which directory contains system configuration?",
    },
    options: {
      es: ["/bin", "/etc", "/var", "/opt"],
      en: ["/bin", "/etc", "/var", "/opt"],
    },
    correctAnswer: "1",
    explanation: {
      es: "/etc almacena archivos de configuración editables en texto.",
      en: "/etc stores editable text configuration files.",
    },
    hints: { es: ["Piensa en 'Editable Text Configuration'"], en: ["Think 'Editable Text Configuration'"] },
    order: 1,
  },
];

export const lesson21Quiz: Quiz = {
  id: "quiz-2-1",
  lessonId: "lesson-2-1",
  questions: [
    {
      id: "quiz-2-1-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Dónde se guardan normalmente los logs del sistema?",
        en: "Where are system logs usually stored?",
      },
      options: {
        es: ["/etc/log", "/usr/log", "/var/log", "/log"],
        en: ["/etc/log", "/usr/log", "/var/log", "/log"],
      },
      correctAnswer: "2",
      explanation: {
        es: "/var/log concentra syslog, auth.log y logs de servicios.",
        en: "/var/log holds syslog, auth.log, and service logs.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson21: Lesson = {
  id: "lesson-2-1",
  moduleId: "level-2",
  slug: "filesystem-hierarchy",
  title: {
    es: "Jerarquía del Sistema de Archivos",
    en: "Filesystem Hierarchy",
  },
  description: {
    es: "Comprende la estructura FHS y el propósito de cada directorio principal.",
    en: "Understand the FHS structure and the purpose of each main directory.",
  },
  order: 1,
  duration: 35,
  contentBlocks: lesson21Content,
  exercises: lesson21Exercises,
  quiz: lesson21Quiz,
};
