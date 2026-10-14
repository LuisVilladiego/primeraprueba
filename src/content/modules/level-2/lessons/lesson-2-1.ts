import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson21Content: ContentBlock[] = [
  {
    id: "block-2-1-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Filesystem Hierarchy Standard (FHS)",
        text: `En Linux **todo es un archivo** y todo cuelga de una única raíz \`/\`. El FHS define dónde viven configuraciones, logs, programas y datos de usuario.

A diferencia de Windows (C:, D:…), los montajes aparecen como subdirectorios bajo \`/\`. Conocer FHS es clave para administración y troubleshooting.`,
      },
      en: {
        title: "Filesystem Hierarchy Standard (FHS)",
        text: `In Linux **everything is a file** and everything hangs from a single root \`/\`. FHS defines where configs, logs, programs, and user data live.

Unlike Windows (C:, D:…), mounts appear as subdirectories under \`/\`. Knowing FHS is essential for administration and troubleshooting.`,
      },
    },
  },
  {
    id: "block-2-1-2",
    type: "KEY_CONCEPT",
    order: 2,
    content: {
      es: {
        title: "Árbol desde la raíz",
        text: `\`\`\`
/
├── bin/     → Binarios esenciales de usuario
├── sbin/    → Binarios de administración del sistema
├── etc/     → Configuración (texto)
├── var/     → Datos variables (logs, colas)
├── home/    → Directorios de usuarios
├── usr/     → Programas y recursos de solo lectura
├── tmp/     → Temporales
├── dev/     → Dispositivos
├── proc/    → Info del kernel (virtual)
└── sys/     → Config del kernel (virtual)
\`\`\``,
      },
      en: {
        title: "Tree from root",
        text: `\`\`\`
/
├── bin/     → Essential user binaries
├── sbin/    → System administration binaries
├── etc/     → Configuration (text)
├── var/     → Variable data (logs, queues)
├── home/    → User home directories
├── usr/     → Programs and read-only resources
├── tmp/     → Temporary files
├── dev/     → Devices
├── proc/    → Kernel info (virtual)
└── sys/     → Kernel config (virtual)
\`\`\``,
      },
    },
  },
  {
    id: "block-2-1-3",
    type: "KEY_CONCEPT",
    order: 3,
    content: {
      es: {
        title: "/etc — configuración del sistema",
        text: `\`/etc\` (Editable Text Configuration) concentra la configuración en archivos de texto:

\`\`\`
/etc/passwd, /etc/shadow, /etc/group   → usuarios
/etc/hostname, /etc/hosts              → red local
/etc/fstab                             → montajes
/etc/ssh/sshd_config                   → SSH
/etc/nginx/, /etc/systemd/             → servicios
\`\`\`

\`\`\`bash
ls /etc/*.conf
cat /etc/os-release
cat /etc/hostname
\`\`\``,
      },
      en: {
        title: "/etc — system configuration",
        text: `\`/etc\` (Editable Text Configuration) holds configuration as text files:

\`\`\`
/etc/passwd, /etc/shadow, /etc/group   → users
/etc/hostname, /etc/hosts              → local network
/etc/fstab                             → mounts
/etc/ssh/sshd_config                   → SSH
/etc/nginx/, /etc/systemd/             → services
\`\`\`

\`\`\`bash
ls /etc/*.conf
cat /etc/os-release
cat /etc/hostname
\`\`\``,
      },
    },
  },
  {
    id: "block-2-1-4",
    type: "KEY_CONCEPT",
    order: 4,
    content: {
      es: {
        title: "/var — datos que cambian",
        text: `\`/var\` almacena datos que crecen o rotan durante la operación:

- **/var/log** — syslog, auth.log, logs de apps
- **/var/cache** — cachés (apt, etc.)
- **/var/lib** — estado de aplicaciones
- **/var/spool** — colas (cron, mail)
- **/var/www** — contenido web en algunas distros

\`\`\`bash
ls -la /var/log
tail -f /var/log/syslog
du -sh /var/cache/*
\`\`\``,
      },
      en: {
        title: "/var — data that changes",
        text: `\`/var\` stores data that grows or rotates during operation:

- **/var/log** — syslog, auth.log, app logs
- **/var/cache** — caches (apt, etc.)
- **/var/lib** — application state
- **/var/spool** — queues (cron, mail)
- **/var/www** — web content on some distros

\`\`\`bash
ls -la /var/log
tail -f /var/log/syslog
du -sh /var/cache/*
\`\`\``,
      },
    },
  },
  {
    id: "block-2-1-5",
    type: "KEY_CONCEPT",
    order: 5,
    content: {
      es: {
        title: "/usr, /home y /root",
        text: `**/usr** — la mayoría de programas (\`/usr/bin\`, \`/usr/sbin\`, man pages en \`/usr/share/man\`). Software compilado a mano suele ir a **/usr/local**.

**/home/usuario** — documentos, \`.bashrc\`, \`.ssh\`, \`.config\`.

**/root** — home del superusuario, separado de \`/home\` por seguridad (root puede entrar aunque \`/home\` no monte).

\`\`\`bash
echo $HOME
which ls    # suele ser /usr/bin/ls
\`\`\``,
      },
      en: {
        title: "/usr, /home and /root",
        text: `**/usr** — most programs (\`/usr/bin\`, \`/usr/sbin\`, man pages in \`/usr/share/man\`). Hand-built software often lives in **/usr/local**.

**/home/user** — documents, \`.bashrc\`, \`.ssh\`, \`.config\`.

**/root** — superuser home, separate from \`/home\` for security (root can log in even if \`/home\` fails to mount).

\`\`\`bash
echo $HOME
which ls    # often /usr/bin/ls
\`\`\``,
      },
    },
  },
  {
    id: "block-2-1-6",
    type: "KEY_CONCEPT",
    order: 6,
    content: {
      es: {
        title: "/dev, /proc y /sys",
        text: `Sistemas **virtuales** (no son archivos “reales” en disco):

| Ruta | Rol |
|------|-----|
| /dev/sda, /dev/null | Representación de discos y dispositivos |
| /proc/cpuinfo, /proc/PID | Procesos y hardware visto por el kernel |
| /sys/class/net/... | Parámetros de hardware en tiempo real |

\`\`\`bash
cat /proc/cpuinfo
cat /proc/meminfo
ls /dev/sda*
\`\`\``,
      },
      en: {
        title: "/dev, /proc and /sys",
        text: `**Virtual** filesystems (not “real” files on disk):

| Path | Role |
|------|------|
| /dev/sda, /dev/null | Disks and device representation |
| /proc/cpuinfo, /proc/PID | Processes and hardware as seen by the kernel |
| /sys/class/net/... | Real-time hardware parameters |

\`\`\`bash
cat /proc/cpuinfo
cat /proc/meminfo
ls /dev/sda*
\`\`\``,
      },
    },
  },
  {
    id: "block-2-1-7",
    type: "TIP",
    order: 7,
    content: {
      es: {
        title: "Mnemotécnicos FHS",
        text: `- **Config** → /etc
- **Logs** → /var/log
- **Programas** → /usr/bin, /usr/local/bin
- **Tus archivos** → /home
- **Temporales** → /tmp

Visualiza con \`tree -L 2 /\` (instala \`tree\` si hace falta).`,
      },
      en: {
        title: "FHS mnemonics",
        text: `- **Config** → /etc
- **Logs** → /var/log
- **Programs** → /usr/bin, /usr/local/bin
- **Your files** → /home
- **Temporary** → /tmp

Visualize with \`tree -L 2 /\` (install \`tree\` if needed).`,
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
  {
    id: "ex-2-1-2",
    lessonId: "lesson-2-1",
    slug: "cpuinfo",
    type: "COMMAND_COMPLETION",
    question: {
      es: "Comando para ver información de la CPU vía /proc",
      en: "Command to view CPU information via /proc",
    },
    correctAnswer: "cat /proc/cpuinfo",
    explanation: {
      es: "/proc es un filesystem virtual con datos del kernel.",
      en: "/proc is a virtual filesystem with kernel data.",
    },
    hints: { es: ["Usa cat sobre un archivo en /proc"], en: ["Use cat on a file under /proc"] },
    order: 2,
  },
  {
    id: "ex-2-1-3",
    lessonId: "lesson-2-1",
    slug: "os-release",
    type: "COMMAND_COMPLETION",
    question: {
      es: "Archivo en /etc que identifica tu distribución Linux",
      en: "/etc file that identifies your Linux distribution",
    },
    correctAnswer: "cat /etc/os-release",
    explanation: {
      es: "os-release contiene NAME, VERSION_ID y metadatos de la distro.",
      en: "os-release contains NAME, VERSION_ID, and distro metadata.",
    },
    hints: { es: ["Nombre del archivo: os-release"], en: ["Filename: os-release"] },
    order: 3,
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
    {
      id: "quiz-2-1-2",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Dónde está la configuración del servidor SSH?",
        en: "Where is SSH server configuration stored?",
      },
      options: {
        es: ["/var/ssh", "/etc/ssh", "/usr/ssh", "/home/ssh"],
        en: ["/var/ssh", "/etc/ssh", "/usr/ssh", "/home/ssh"],
      },
      correctAnswer: "1",
      explanation: {
        es: "Toda config de sistema vive bajo /etc; SSH en /etc/ssh/.",
        en: "All system config lives under /etc; SSH in /etc/ssh/.",
      },
      points: 5,
    },
    {
      id: "quiz-2-1-3",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué directorio contiene /dev/sda?",
        en: "Which directory contains /dev/sda?",
      },
      options: {
        es: ["/device", "/hardware", "/dev", "/sys"],
        en: ["/device", "/hardware", "/dev", "/sys"],
      },
      correctAnswer: "2",
      explanation: {
        es: "/dev expone dispositivos como archivos especiales.",
        en: "/dev exposes devices as special files.",
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
