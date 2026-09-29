import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level3Lessons: Lesson[] = [
  {
    id: 'lesson-3-1',
    slug: 'understanding-permissions',
    title: { es: 'Entendiendo los Permisos de Linux', en: 'Understanding Linux Permissions' },
    description: { es: 'Aprende el sistema rwx y cómo leer permisos con ls -l', en: 'Learn the rwx system and how to read permissions with ls -l' },
    duration: 35,
    xpReward: 160,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-3-2',
    slug: 'chmod-command',
    title: { es: 'Modificar Permisos con chmod', en: 'Modify Permissions with chmod' },
    description: { es: 'Domina chmod en modo simbólico y octal', en: 'Master chmod in symbolic and octal mode' },
    duration: 40,
    xpReward: 180,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-3-3',
    slug: 'users-groups',
    title: { es: 'Usuarios y Grupos', en: 'Users and Groups' },
    description: { es: 'Gestiona usuarios y grupos en el sistema', en: 'Manage users and groups in the system' },
    duration: 35,
    xpReward: 150,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-3-4',
    slug: 'chown-chgrp',
    title: { es: 'Cambiar Propietario: chown y chgrp', en: 'Change Owner: chown and chgrp' },
    description: { es: 'Cambia el propietario y grupo de archivos', en: 'Change file owner and group' },
    duration: 25,
    xpReward: 120,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-3-5',
    slug: 'special-permissions',
    title: { es: 'Permisos Especiales: SUID, SGID, Sticky', en: 'Special Permissions: SUID, SGID, Sticky' },
    description: { es: 'Entiende y usa los permisos especiales de Linux', en: 'Understand and use special Linux permissions' },
    duration: 35,
    xpReward: 170,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-3-6',
    slug: 'umask',
    title: { es: 'Permisos por Defecto: umask', en: 'Default Permissions: umask' },
    description: { es: 'Configura los permisos predeterminados para nuevos archivos', en: 'Configure default permissions for new files' },
    duration: 25,
    xpReward: 120,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-3-7',
    slug: 'sudo-su',
    title: { es: 'Elevación de Privilegios: sudo y su', en: 'Privilege Escalation: sudo and su' },
    description: { es: 'Ejecuta comandos como root de forma segura', en: 'Execute commands as root safely' },
    duration: 30,
    xpReward: 140,
    order: 7,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level3Labs: Lab[] = [
  {
    id: 'lab-3-1',
    slug: 'secure-directory',
    title: { es: 'Crear Directorio Compartido Seguro', en: 'Create Secure Shared Directory' },
    description: { es: 'Configura un directorio compartido con permisos de grupo apropiados', en: 'Set up a shared directory with appropriate group permissions' },
    difficulty: 'intermediate',
    duration: 35,
    xpReward: 300,
    objectives: [
      { es: 'Crear un grupo para el equipo', en: 'Create a group for the team' },
      { es: 'Configurar directorio con SGID', en: 'Configure directory with SGID' },
      { es: 'Establecer permisos correctos', en: 'Set correct permissions' },
      { es: 'Probar acceso con diferentes usuarios', en: 'Test access with different users' }
    ],
    tools: ['groupadd', 'usermod', 'chmod', 'chown'],
    validationCriteria: [
      { type: 'GROUP_EXISTS', value: 'team' },
      { type: 'PERMISSION_SET', value: '2770' },
      { type: 'DIRECTORY_EXISTS', value: '/shared' }
    ]
  },
  {
    id: 'lab-3-2',
    slug: 'audit-permissions',
    title: { es: 'Auditoría de Permisos del Sistema', en: 'System Permissions Audit' },
    description: { es: 'Encuentra y corrige permisos inseguros en el sistema', en: 'Find and fix insecure permissions in the system' },
    difficulty: 'intermediate',
    duration: 40,
    xpReward: 350,
    objectives: [
      { es: 'Encontrar archivos con permisos 777', en: 'Find files with 777 permissions' },
      { es: 'Identificar archivos SUID sospechosos', en: 'Identify suspicious SUID files' },
      { es: 'Encontrar archivos sin propietario', en: 'Find files without owner' },
      { es: 'Documentar hallazgos de seguridad', en: 'Document security findings' }
    ],
    tools: ['find', 'chmod', 'stat'],
    validationCriteria: [
      { type: 'COMMAND_EXECUTED', value: 'find -perm 777' },
      { type: 'COMMAND_EXECUTED', value: 'find -perm -4000' },
      { type: 'FILE_CREATED', value: 'audit_report.txt' }
    ]
  }
];

export const level3Exam: Exam = {
  passingScore: 80,
  timeLimit: 30,
  questions: [
    {
      id: 'exam-3-1',
      question: { es: '¿Qué significa el permiso 755 en notación octal?', en: 'What does permission 755 mean in octal notation?' },
      options: [
        { id: 'a', text: { es: 'rwx r-x r-x', en: 'rwx r-x r-x' } },
        { id: 'b', text: { es: 'rw- r-- r--', en: 'rw- r-- r--' } },
        { id: 'c', text: { es: 'rwx rwx rwx', en: 'rwx rwx rwx' } },
        { id: 'd', text: { es: 'r-x r-x r-x', en: 'r-x r-x r-x' } }
      ],
      correctAnswer: 'a',
      explanation: { es: '7=rwx (4+2+1), 5=r-x (4+0+1). El propietario tiene todos los permisos, grupo y otros pueden leer y ejecutar.', en: '7=rwx (4+2+1), 5=r-x (4+0+1). Owner has all permissions, group and others can read and execute.' }
    },
    {
      id: 'exam-3-2',
      question: { es: '¿Qué hace el bit SUID en un ejecutable?', en: 'What does the SUID bit do on an executable?' },
      options: [
        { id: 'a', text: { es: 'Permite que cualquiera lo ejecute', en: 'Allows anyone to execute it' } },
        { id: 'b', text: { es: 'Se ejecuta con los permisos del propietario del archivo', en: 'Executes with file owner permissions' } },
        { id: 'c', text: { es: 'Impide que se elimine', en: 'Prevents deletion' } },
        { id: 'd', text: { es: 'Lo hace invisible', en: 'Makes it invisible' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'SUID permite que el archivo se ejecute con los privilegios del propietario, no del usuario que lo ejecuta.', en: 'SUID allows the file to execute with owner privileges, not the executing user.' }
    },
    {
      id: 'exam-3-3',
      question: { es: '¿Qué comando agrega un usuario al grupo "developers"?', en: 'What command adds a user to the "developers" group?' },
      options: [
        { id: 'a', text: { es: 'groupadd usuario developers', en: 'groupadd user developers' } },
        { id: 'b', text: { es: 'usermod -aG developers usuario', en: 'usermod -aG developers user' } },
        { id: 'c', text: { es: 'addgroup usuario developers', en: 'addgroup user developers' } },
        { id: 'd', text: { es: 'chmod developers usuario', en: 'chmod developers user' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'usermod -aG agrega (-a) el usuario al grupo suplementario (-G) sin eliminar otros grupos.', en: 'usermod -aG adds (-a) the user to supplementary group (-G) without removing other groups.' }
    },
    {
      id: 'exam-3-4',
      question: { es: '¿Cuál es la diferencia entre sudo y su?', en: 'What is the difference between sudo and su?' },
      options: [
        { id: 'a', text: { es: 'Son exactamente iguales', en: 'They are exactly the same' } },
        { id: 'b', text: { es: 'sudo ejecuta un comando como root, su cambia al usuario root', en: 'sudo executes a command as root, su changes to root user' } },
        { id: 'c', text: { es: 'su es más seguro que sudo', en: 'su is more secure than sudo' } },
        { id: 'd', text: { es: 'sudo requiere la contraseña de root', en: 'sudo requires root password' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'sudo ejecuta comandos específicos con privilegios elevados. su cambia completamente al usuario root (o cualquier otro).', en: 'sudo executes specific commands with elevated privileges. su completely changes to root user (or any other).' }
    },
    {
      id: 'exam-3-5',
      question: { es: '¿Qué hace umask 022?', en: 'What does umask 022 do?' },
      options: [
        { id: 'a', text: { es: 'Establece permisos 022 en nuevos archivos', en: 'Sets permissions 022 on new files' } },
        { id: 'b', text: { es: 'Resta 022 de los permisos por defecto', en: 'Subtracts 022 from default permissions' } },
        { id: 'c', text: { es: 'Solo permite lectura', en: 'Only allows reading' } },
        { id: 'd', text: { es: 'Bloquea todos los permisos', en: 'Blocks all permissions' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'umask resta permisos del default (666 archivos, 777 dirs). 022 resulta en 644 para archivos y 755 para directorios.', en: 'umask subtracts permissions from default (666 files, 777 dirs). 022 results in 644 for files and 755 for directories.' }
    },
    {
      id: 'exam-3-6',
      question: { es: '¿Qué hace el sticky bit en un directorio como /tmp?', en: 'What does the sticky bit do on a directory like /tmp?' },
      options: [
        { id: 'a', text: { es: 'Cualquiera puede crear archivos, pero solo el propietario puede eliminarlos', en: 'Anyone can create files, but only owner can delete them' } },
        { id: 'b', text: { es: 'Nadie puede crear archivos', en: 'No one can create files' } },
        { id: 'c', text: { es: 'Los archivos se eliminan automáticamente', en: 'Files are automatically deleted' } },
        { id: 'd', text: { es: 'Solo root puede acceder', en: 'Only root can access' } }
      ],
      correctAnswer: 'a',
      explanation: { es: 'El sticky bit (t) permite que todos escriban pero solo el propietario (o root) puede eliminar sus propios archivos.', en: 'The sticky bit (t) allows everyone to write but only the owner (or root) can delete their own files.' }
    },
    {
      id: 'exam-3-7',
      question: { es: '¿Dónde se almacenan las contraseñas encriptadas de los usuarios?', en: 'Where are encrypted user passwords stored?' },
      options: [
        { id: 'a', text: { es: '/etc/passwd', en: '/etc/passwd' } },
        { id: 'b', text: { es: '/etc/shadow', en: '/etc/shadow' } },
        { id: 'c', text: { es: '/etc/security', en: '/etc/security' } },
        { id: 'd', text: { es: '/home/.passwords', en: '/home/.passwords' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '/etc/shadow contiene las contraseñas encriptadas y solo root puede leerlo. /etc/passwd contiene info de usuarios sin contraseñas.', en: '/etc/shadow contains encrypted passwords and only root can read it. /etc/passwd contains user info without passwords.' }
    },
    {
      id: 'exam-3-8',
      question: { es: '¿Qué comando muestra los grupos a los que pertenece un usuario?', en: 'What command shows the groups a user belongs to?' },
      options: [
        { id: 'a', text: { es: 'usergroups usuario', en: 'usergroups user' } },
        { id: 'b', text: { es: 'groups usuario', en: 'groups user' } },
        { id: 'c', text: { es: 'id -g usuario', en: 'id -g user' } },
        { id: 'd', text: { es: 'showgroups usuario', en: 'showgroups user' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'El comando groups muestra todos los grupos (primario y suplementarios) de un usuario.', en: 'The groups command shows all groups (primary and supplementary) of a user.' }
    },
    {
      id: 'exam-3-9',
      question: { es: 'Con chmod, ¿qué significa u+x?', en: 'With chmod, what does u+x mean?' },
      options: [
        { id: 'a', text: { es: 'Quitar ejecución al usuario', en: 'Remove execute from user' } },
        { id: 'b', text: { es: 'Agregar ejecución al usuario (propietario)', en: 'Add execute to user (owner)' } },
        { id: 'c', text: { es: 'Agregar ejecución a todos', en: 'Add execute to everyone' } },
        { id: 'd', text: { es: 'Agregar escritura al usuario', en: 'Add write to user' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'u=user (propietario), +=agregar, x=execute. Por tanto u+x agrega permiso de ejecución al propietario.', en: 'u=user (owner), +=add, x=execute. Therefore u+x adds execute permission to owner.' }
    },
    {
      id: 'exam-3-10',
      question: { es: '¿Cómo se representa SUID en notación octal?', en: 'How is SUID represented in octal notation?' },
      options: [
        { id: 'a', text: { es: '1000', en: '1000' } },
        { id: 'b', text: { es: '2000', en: '2000' } },
        { id: 'c', text: { es: '4000', en: '4000' } },
        { id: 'd', text: { es: '7000', en: '7000' } }
      ],
      correctAnswer: 'c',
      explanation: { es: 'SUID=4000, SGID=2000, Sticky=1000. Por ejemplo, chmod 4755 establece SUID + rwxr-xr-x.', en: 'SUID=4000, SGID=2000, Sticky=1000. For example, chmod 4755 sets SUID + rwxr-xr-x.' }
    }
  ]
};

export const level3Skills: Skill[] = [
  { id: 'skill-permissions', name: { es: 'Permisos Unix', en: 'Unix Permissions' }, description: { es: 'Leer y modificar permisos rwx', en: 'Read and modify rwx permissions' }, icon: 'lock' },
  { id: 'skill-users', name: { es: 'Gestión de Usuarios', en: 'User Management' }, description: { es: 'Crear y administrar usuarios y grupos', en: 'Create and manage users and groups' }, icon: 'users' },
  { id: 'skill-special-perms', name: { es: 'Permisos Especiales', en: 'Special Permissions' }, description: { es: 'Usar SUID, SGID y Sticky bit', en: 'Use SUID, SGID and Sticky bit' }, icon: 'shield' },
  { id: 'skill-sudo', name: { es: 'Elevación de Privilegios', en: 'Privilege Escalation' }, description: { es: 'Usar sudo de forma segura', en: 'Use sudo safely' }, icon: 'key' }
];

export const level3Module: Module = {
  id: 'level-3',
  slug: 'permissions-users',
  title: { es: 'Permisos y Usuarios', en: 'Permissions and Users' },
  description: { es: 'Domina el sistema de permisos de Linux, gestión de usuarios y grupos, y elevación de privilegios', en: 'Master the Linux permission system, user and group management, and privilege escalation' },
  icon: 'shield',
  color: '#F59E0B',
  level: 3,
  order: 3,
  estimatedHours: 7,
  prerequisites: ['level-2'],
  skills: level3Skills,
  lessons: level3Lessons,
  labs: level3Labs,
  exam: level3Exam
};
