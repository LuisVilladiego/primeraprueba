import type { Module, Lesson, Lab, Exam, Skill } from "@/types";

export const level3Module: Module = {
  id: "level-3",
  courseId: "linux-academy",
  slug: "permissions-users",
  level: 3,
  title: {
    es: "Permisos y Usuarios",
    en: "Permissions and Users",
  },
  description: {
    es: "Domina permisos rwx, usuarios y grupos, permisos especiales y elevación segura con sudo.",
    en: "Master rwx permissions, users and groups, special bits, and safe elevation with sudo.",
  },
  icon: "🔐",
  order: 3,
  lessons: [],
  labs: [],
  exam: null,
  project: null,
  passingScore: 80,
  prerequisites: ["level-2"],
  skills: ["unix-permissions", "user-management", "special-perms", "sudo"],
};

export const level3Lessons: Lesson[] = [
  {
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
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-3-2",
    moduleId: "level-3",
    slug: "chmod-command",
    title: {
      es: "Modificar Permisos con chmod",
      en: "Modify Permissions with chmod",
    },
    description: {
      es: "Domina chmod en modo simbólico y octal.",
      en: "Master chmod in symbolic and octal mode.",
    },
    order: 2,
    duration: 40,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
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
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
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
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
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
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
    id: "lesson-3-6",
    moduleId: "level-3",
    slug: "umask",
    title: {
      es: "Permisos por Defecto: umask",
      en: "Default Permissions: umask",
    },
    description: {
      es: "Configura los permisos predeterminados para nuevos archivos.",
      en: "Configure default permissions for new files.",
    },
    order: 6,
    duration: 25,
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
  {
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
    contentBlocks: [],
    exercises: [],
    quiz: null,
  },
];

export const level3Labs: Lab[] = [
  {
    id: "lab-3-1",
    moduleId: "level-3",
    slug: "secure-directory",
    title: {
      es: "Directorio compartido seguro",
      en: "Secure shared directory",
    },
    description: {
      es: "Configura un directorio de equipo con SGID y permisos de grupo.",
      en: "Set up a team directory with SGID and group permissions.",
    },
    objectives: {
      es: [
        "Crear grupo y añadir usuarios (simulado en tu home)",
        "Crear directorio compartido con chmod 2770",
        "Verificar que nuevos archivos heredan el grupo",
      ],
      en: [
        "Create a group and add users (simulated in your home)",
        "Create shared directory with chmod 2770",
        "Verify new files inherit the group",
      ],
    },
    prerequisites: {
      es: ["Lecciones 3-2 y 3-5"],
      en: ["Lessons 3-2 and 3-5"],
    },
    instructions: {
      es: [
        { step: 1, instruction: "mkdir -p ~/lab-shared && chmod 2770 ~/lab-shared", expectedResult: "Directorio con SGID" },
        { step: 2, instruction: "touch ~/lab-shared/prueba.txt && ls -l ~/lab-shared", expectedResult: "Archivo creado" },
        { step: 3, instruction: "Documenta permisos con stat -c '%a %n' ~/lab-shared", expectedResult: "Modo octal visible" },
      ],
      en: [
        { step: 1, instruction: "mkdir -p ~/lab-shared && chmod 2770 ~/lab-shared", expectedResult: "Directory with SGID" },
        { step: 2, instruction: "touch ~/lab-shared/test.txt && ls -l ~/lab-shared", expectedResult: "File created" },
        { step: 3, instruction: "Document permissions with stat -c '%a %n' ~/lab-shared", expectedResult: "Octal mode visible" },
      ],
    },
    hints: {
      es: ["2770 = SGID (2) + rwxrwx---"],
      en: ["2770 = SGID (2) + rwxrwx---"],
    },
    solution: {
      es: "El bit SGID en directorios hace que archivos nuevos hereden el grupo del directorio.",
      en: "SGID on directories makes new files inherit the directory's group.",
    },
    validationCriteria: [],
    difficulty: "INTERMEDIATE",
    estimatedTime: 35,
    order: 1,
  },
  {
    id: "lab-3-2",
    moduleId: "level-3",
    slug: "audit-permissions",
    title: {
      es: "Auditoría de permisos",
      en: "Permissions audit",
    },
    description: {
      es: "Encuentra permisos inseguros con find.",
      en: "Find insecure permissions with find.",
    },
    objectives: {
      es: [
        "Buscar archivos con permiso 777 en tu home",
        "Listar archivos SUID bajo /usr/bin",
        "Guardar hallazgos en audit_report.txt",
      ],
      en: [
        "Find 777 files in your home",
        "List SUID files under /usr/bin",
        "Save findings to audit_report.txt",
      ],
    },
    prerequisites: {
      es: ["Lección 3-5 y find del nivel 2"],
      en: ["Lesson 3-5 and find from level 2"],
    },
    instructions: {
      es: [
        { step: 1, instruction: "find ~ -perm 777 2>/dev/null", expectedResult: "Lista world-writable" },
        { step: 2, instruction: "find /usr/bin -perm -4000 2>/dev/null | head", expectedResult: "Binarios SUID" },
        { step: 3, instruction: "Redirige resumen a ~/audit_report.txt", expectedResult: "Informe creado" },
      ],
      en: [
        { step: 1, instruction: "find ~ -perm 777 2>/dev/null", expectedResult: "Lists world-writable" },
        { step: 2, instruction: "find /usr/bin -perm -4000 2>/dev/null | head", expectedResult: "SUID binaries" },
        { step: 3, instruction: "Redirect summary to ~/audit_report.txt", expectedResult: "Report created" },
      ],
    },
    hints: {
      es: ["-perm -4000 detecta SUID"],
      en: ["-perm -4000 detects SUID"],
    },
    solution: {
      es: "777 y SUID inesperados son señales de revisión de seguridad.",
      en: "777 and unexpected SUID are signals for security review.",
    },
    validationCriteria: [],
    difficulty: "INTERMEDIATE",
    estimatedTime: 40,
    order: 2,
  },
];

export const level3Exam: Exam = {
  id: "exam-level-3",
  moduleId: "level-3",
  title: {
    es: "Examen - Permisos y Usuarios",
    en: "Exam - Permissions and Users",
  },
  description: {
    es: "Evalúa permisos rwx, usuarios, permisos especiales, umask y sudo.",
    en: "Assess rwx permissions, users, special bits, umask, and sudo.",
  },
  questions: [
    {
      id: "q-3-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué significa 755 en octal?",
        en: "What does 755 mean in octal?",
      },
      options: {
        es: ["rwx r-x r-x", "rw- r-- r--", "rwx rwx rwx", "r-x r-x r-x"],
        en: ["rwx r-x r-x", "rw- r-- r--", "rwx rwx rwx", "r-x r-x r-x"],
      },
      correctAnswer: "0",
      explanation: {
        es: "7=rwx, 5=r-x para propietario, grupo y otros.",
        en: "7=rwx, 5=r-x for owner, group, and others.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "chmod",
    },
    {
      id: "q-3-2",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué hace el bit SUID en un ejecutable?",
        en: "What does SUID do on an executable?",
      },
      options: {
        es: [
          "Cualquiera puede ejecutarlo",
          "Se ejecuta con permisos del propietario del archivo",
          "Impide borrado",
          "Lo oculta",
        ],
        en: [
          "Anyone can run it",
          "Runs with file owner's permissions",
          "Prevents deletion",
          "Hides the file",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "SUID eleva privilegios al owner del binario (ej. passwd).",
        en: "SUID elevates to the binary owner's privileges (e.g. passwd).",
      },
      points: 10,
      difficulty: "INTERMEDIATE",
      category: "special",
    },
    {
      id: "q-3-3",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Cómo agregar un usuario al grupo developers?",
        en: "How to add a user to group developers?",
      },
      options: {
        es: [
          "groupadd user developers",
          "usermod -aG developers user",
          "addgroup user developers",
          "chmod developers user",
        ],
        en: [
          "groupadd user developers",
          "usermod -aG developers user",
          "addgroup user developers",
          "chmod developers user",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "usermod -aG añade grupo suplementario sin quitar otros.",
        en: "usermod -aG adds supplementary group without removing others.",
      },
      points: 10,
      difficulty: "INTERMEDIATE",
      category: "users",
    },
    {
      id: "q-3-4",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Diferencia principal entre sudo y su",
        en: "Main difference between sudo and su",
      },
      options: {
        es: [
          "Son iguales",
          "sudo ejecuta un comando; su cambia de usuario",
          "su es más seguro",
          "sudo pide contraseña de root",
        ],
        en: [
          "They are the same",
          "sudo runs a command; su switches user",
          "su is more secure",
          "sudo asks for root password",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "sudo es granular; su abre shell como otro usuario.",
        en: "sudo is granular; su opens a shell as another user.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "sudo",
    },
    {
      id: "q-3-5",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué hace umask 022?",
        en: "What does umask 022 do?",
      },
      options: {
        es: [
          "Pone permisos 022",
          "Resta bits del default (644 archivos, 755 dirs)",
          "Solo lectura",
          "Bloquea todo",
        ],
        en: [
          "Sets permissions to 022",
          "Subtracts bits from default (644 files, 755 dirs)",
          "Read only",
          "Blocks everything",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "Default 666/777 menos umask = permisos finales.",
        en: "Default 666/777 minus umask = final permissions.",
      },
      points: 10,
      difficulty: "INTERMEDIATE",
      category: "umask",
    },
    {
      id: "q-3-6",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Sticky bit en /tmp significa…",
        en: "Sticky bit on /tmp means…",
      },
      options: {
        es: [
          "Solo el propietario borra su archivo",
          "Nadie puede escribir",
          "Auto-borrado",
          "Solo root entra",
        ],
        en: [
          "Only owner deletes their file",
          "Nobody can write",
          "Auto-delete",
          "Only root enters",
        ],
      },
      correctAnswer: "0",
      explanation: {
        es: "t en directorios: borrar solo lo propio (o root).",
        en: "t on dirs: delete only your own files (or root).",
      },
      points: 10,
      difficulty: "INTERMEDIATE",
      category: "special",
    },
    {
      id: "q-3-7",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Dónde están las contraseñas hasheadas?",
        en: "Where are hashed passwords stored?",
      },
      options: {
        es: ["/etc/passwd", "/etc/shadow", "/etc/security", "/home/.passwords"],
        en: ["/etc/passwd", "/etc/shadow", "/etc/security", "/home/.passwords"],
      },
      correctAnswer: "1",
      explanation: {
        es: "/etc/shadow es legible solo por root.",
        en: "/etc/shadow is root-readable only.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "users",
    },
    {
      id: "q-3-8",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Comando que muestra grupos de un usuario",
        en: "Command showing a user's groups",
      },
      options: {
        es: ["usergroups", "groups", "id -g only", "showgroups"],
        en: ["usergroups", "groups", "id -g only", "showgroups"],
      },
      correctAnswer: "1",
      explanation: {
        es: "groups o id muestran primario y suplementarios.",
        en: "groups or id show primary and supplementary.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "users",
    },
    {
      id: "q-3-9",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "En chmod, u+x significa…",
        en: "In chmod, u+x means…",
      },
      options: {
        es: [
          "Quitar ejecución al usuario",
          "Agregar ejecución al propietario",
          "Ejecución para todos",
          "Agregar escritura",
        ],
        en: [
          "Remove execute for user",
          "Add execute for owner",
          "Execute for all",
          "Add write",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "u=user, + agrega, x=execute.",
        en: "u=user, + adds, x=execute.",
      },
      points: 10,
      difficulty: "BEGINNER",
      category: "chmod",
    },
    {
      id: "q-3-10",
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
      points: 10,
      difficulty: "INTERMEDIATE",
      category: "special",
    },
  ],
  timeLimit: 30,
  passingScore: 80,
  maxAttempts: null,
  shuffleQuestions: true,
};

export const level3Skills: Skill[] = [
  {
    id: "unix-permissions",
    slug: "unix-permissions",
    name: { es: "Permisos Unix", en: "Unix Permissions" },
    description: { es: "Leer y modificar rwx", en: "Read and modify rwx" },
    category: "security",
    icon: "🔒",
    relatedModules: ["level-3"],
    order: 1,
  },
  {
    id: "user-management",
    slug: "user-management",
    name: { es: "Usuarios y grupos", en: "Users and groups" },
    description: { es: "passwd, shadow, group", en: "passwd, shadow, group" },
    category: "security",
    icon: "👥",
    relatedModules: ["level-3"],
    order: 2,
  },
  {
    id: "special-perms",
    slug: "special-perms",
    name: { es: "Permisos especiales", en: "Special permissions" },
    description: { es: "SUID, SGID, sticky", en: "SUID, SGID, sticky" },
    category: "security",
    icon: "🛡️",
    relatedModules: ["level-3"],
    order: 3,
  },
  {
    id: "sudo",
    slug: "sudo",
    name: { es: "sudo", en: "sudo" },
    description: { es: "Elevación controlada", en: "Controlled elevation" },
    category: "security",
    icon: "🔑",
    relatedModules: ["level-3"],
    order: 4,
  },
];
