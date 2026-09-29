import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level2Lessons: Lesson[] = [
  {
    id: 'lesson-2-1',
    slug: 'filesystem-hierarchy',
    title: { es: 'Jerarquía del Sistema de Archivos', en: 'Filesystem Hierarchy' },
    description: { es: 'Comprende la estructura FHS y el propósito de cada directorio', en: 'Understand the FHS structure and purpose of each directory' },
    duration: 35,
    xpReward: 160,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-2-2',
    slug: 'file-types',
    title: { es: 'Tipos de Archivos en Linux', en: 'File Types in Linux' },
    description: { es: 'Archivos regulares, directorios, enlaces, dispositivos y más', en: 'Regular files, directories, links, devices and more' },
    duration: 30,
    xpReward: 140,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-2-3',
    slug: 'links-hard-soft',
    title: { es: 'Enlaces Duros y Simbólicos', en: 'Hard and Symbolic Links' },
    description: { es: 'Domina ln para crear enlaces y entender inodos', en: 'Master ln to create links and understand inodes' },
    duration: 35,
    xpReward: 150,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-2-4',
    slug: 'file-metadata',
    title: { es: 'Metadata de Archivos: stat, file', en: 'File Metadata: stat, file' },
    description: { es: 'Inspecciona información detallada sobre archivos', en: 'Inspect detailed information about files' },
    duration: 25,
    xpReward: 120,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-2-5',
    slug: 'disk-usage',
    title: { es: 'Uso de Disco: df, du', en: 'Disk Usage: df, du' },
    description: { es: 'Monitorea espacio en disco y tamaño de directorios', en: 'Monitor disk space and directory sizes' },
    duration: 30,
    xpReward: 130,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-2-6',
    slug: 'find-command',
    title: { es: 'Búsqueda Avanzada con find', en: 'Advanced Search with find' },
    description: { es: 'Encuentra archivos por nombre, tipo, tamaño, fecha y más', en: 'Find files by name, type, size, date and more' },
    duration: 40,
    xpReward: 180,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-2-7',
    slug: 'locate-updatedb',
    title: { es: 'Búsqueda Rápida: locate', en: 'Quick Search: locate' },
    description: { es: 'Busca archivos instantáneamente usando base de datos', en: 'Search files instantly using database' },
    duration: 20,
    xpReward: 100,
    order: 7,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level2Labs: Lab[] = [
  {
    id: 'lab-2-1',
    slug: 'explore-filesystem',
    title: { es: 'Exploración del Sistema de Archivos', en: 'Filesystem Exploration' },
    description: { es: 'Navega y documenta la estructura de directorios de tu sistema', en: 'Navigate and document your system directory structure' },
    difficulty: 'beginner',
    duration: 30,
    xpReward: 200,
    objectives: [
      { es: 'Listar contenido de directorios principales (/etc, /var, /usr)', en: 'List contents of main directories (/etc, /var, /usr)' },
      { es: 'Identificar tipos de archivos usando file', en: 'Identify file types using file' },
      { es: 'Encontrar archivos de configuración del sistema', en: 'Find system configuration files' },
      { es: 'Documentar el propósito de 5 directorios', en: 'Document the purpose of 5 directories' }
    ],
    tools: ['ls', 'file', 'tree', 'cat'],
    validationCriteria: [
      { type: 'COMMAND_EXECUTED', value: 'ls /etc' },
      { type: 'COMMAND_EXECUTED', value: 'file /bin/*' },
      { type: 'FILE_CREATED', value: 'filesystem_report.txt' }
    ]
  },
  {
    id: 'lab-2-2',
    slug: 'find-and-organize',
    title: { es: 'Buscar y Organizar Archivos', en: 'Find and Organize Files' },
    description: { es: 'Usa find para localizar y organizar archivos por tipo y fecha', en: 'Use find to locate and organize files by type and date' },
    difficulty: 'intermediate',
    duration: 40,
    xpReward: 300,
    objectives: [
      { es: 'Encontrar todos los archivos .conf en /etc', en: 'Find all .conf files in /etc' },
      { es: 'Buscar archivos modificados en los últimos 7 días', en: 'Find files modified in the last 7 days' },
      { es: 'Encontrar archivos mayores a 10MB', en: 'Find files larger than 10MB' },
      { es: 'Crear enlaces simbólicos a archivos importantes', en: 'Create symbolic links to important files' }
    ],
    tools: ['find', 'ln', 'du'],
    validationCriteria: [
      { type: 'COMMAND_EXECUTED', value: 'find /etc -name "*.conf"' },
      { type: 'COMMAND_EXECUTED', value: 'find -mtime -7' },
      { type: 'SYMLINK_EXISTS', value: 'link_created' }
    ]
  }
];

export const level2Exam: Exam = {
  passingScore: 80,
  timeLimit: 30,
  questions: [
    {
      id: 'exam-2-1',
      question: { es: '¿Qué directorio contiene archivos de configuración del sistema?', en: 'Which directory contains system configuration files?' },
      options: [
        { id: 'a', text: { es: '/bin', en: '/bin' } },
        { id: 'b', text: { es: '/etc', en: '/etc' } },
        { id: 'c', text: { es: '/var', en: '/var' } },
        { id: 'd', text: { es: '/usr', en: '/usr' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '/etc (Editable Text Configuration) contiene todos los archivos de configuración del sistema.', en: '/etc (Editable Text Configuration) contains all system configuration files.' }
    },
    {
      id: 'exam-2-2',
      question: { es: '¿Cuál es la diferencia principal entre un enlace duro y uno simbólico?', en: 'What is the main difference between a hard link and a symbolic link?' },
      options: [
        { id: 'a', text: { es: 'No hay diferencia', en: 'There is no difference' } },
        { id: 'b', text: { es: 'El enlace duro apunta al inodo, el simbólico apunta al nombre del archivo', en: 'Hard link points to inode, symbolic points to filename' } },
        { id: 'c', text: { es: 'El simbólico es más rápido', en: 'Symbolic is faster' } },
        { id: 'd', text: { es: 'El duro solo funciona con directorios', en: 'Hard only works with directories' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'Los enlaces duros comparten el mismo inodo que el archivo original, mientras que los simbólicos son punteros al nombre.', en: 'Hard links share the same inode as the original file, while symbolic links are pointers to the name.' }
    },
    {
      id: 'exam-2-3',
      question: { es: '¿Qué comando muestra el espacio libre en los sistemas de archivos montados?', en: 'Which command shows free space on mounted filesystems?' },
      options: [
        { id: 'a', text: { es: 'du', en: 'du' } },
        { id: 'b', text: { es: 'df', en: 'df' } },
        { id: 'c', text: { es: 'ls -l', en: 'ls -l' } },
        { id: 'd', text: { es: 'free', en: 'free' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'df (disk free) muestra el espacio usado y disponible en cada sistema de archivos montado.', en: 'df (disk free) shows used and available space on each mounted filesystem.' }
    },
    {
      id: 'exam-2-4',
      question: { es: '¿Qué opción de find busca archivos modificados en los últimos 3 días?', en: 'Which find option searches for files modified in the last 3 days?' },
      options: [
        { id: 'a', text: { es: '-mtime 3', en: '-mtime 3' } },
        { id: 'b', text: { es: '-mtime -3', en: '-mtime -3' } },
        { id: 'c', text: { es: '-mtime +3', en: '-mtime +3' } },
        { id: 'd', text: { es: '-time 3', en: '-time 3' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '-mtime -3 busca archivos modificados hace menos de 3 días. El signo - significa "menos que".', en: '-mtime -3 searches for files modified less than 3 days ago. The - sign means "less than".' }
    },
    {
      id: 'exam-2-5',
      question: { es: '¿Dónde se almacenan los archivos de log del sistema?', en: 'Where are system log files stored?' },
      options: [
        { id: 'a', text: { es: '/etc/log', en: '/etc/log' } },
        { id: 'b', text: { es: '/usr/log', en: '/usr/log' } },
        { id: 'c', text: { es: '/var/log', en: '/var/log' } },
        { id: 'd', text: { es: '/log', en: '/log' } }
      ],
      correctAnswer: 'c',
      explanation: { es: '/var/log contiene los archivos de registro del sistema y aplicaciones.', en: '/var/log contains system and application log files.' }
    },
    {
      id: 'exam-2-6',
      question: { es: '¿Qué tipo de archivo representa el carácter "l" al inicio de ls -l?', en: 'What file type does the character "l" at the start of ls -l represent?' },
      options: [
        { id: 'a', text: { es: 'Archivo regular', en: 'Regular file' } },
        { id: 'b', text: { es: 'Directorio', en: 'Directory' } },
        { id: 'c', text: { es: 'Enlace simbólico', en: 'Symbolic link' } },
        { id: 'd', text: { es: 'Dispositivo de bloque', en: 'Block device' } }
      ],
      correctAnswer: 'c',
      explanation: { es: '"l" indica un enlace simbólico (symbolic link). Los directorios usan "d" y los archivos regulares usan "-".', en: '"l" indicates a symbolic link. Directories use "d" and regular files use "-".' }
    },
    {
      id: 'exam-2-7',
      question: { es: '¿Cuál es el propósito del directorio /tmp?', en: 'What is the purpose of the /tmp directory?' },
      options: [
        { id: 'a', text: { es: 'Almacenar templates', en: 'Store templates' } },
        { id: 'b', text: { es: 'Archivos temporales que se borran al reiniciar', en: 'Temporary files deleted on reboot' } },
        { id: 'c', text: { es: 'Backups del sistema', en: 'System backups' } },
        { id: 'd', text: { es: 'Archivos de usuario', en: 'User files' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '/tmp es para archivos temporales. Cualquier usuario puede escribir aquí, pero el contenido se borra al reiniciar.', en: '/tmp is for temporary files. Any user can write here, but contents are deleted on reboot.' }
    },
    {
      id: 'exam-2-8',
      question: { es: '¿Qué comando determina el tipo real de un archivo independientemente de su extensión?', en: 'Which command determines the real type of a file regardless of its extension?' },
      options: [
        { id: 'a', text: { es: 'type', en: 'type' } },
        { id: 'b', text: { es: 'file', en: 'file' } },
        { id: 'c', text: { es: 'stat', en: 'stat' } },
        { id: 'd', text: { es: 'ls', en: 'ls' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'El comando file examina el contenido del archivo para determinar su tipo real, no se basa en la extensión.', en: 'The file command examines file contents to determine its real type, not based on extension.' }
    },
    {
      id: 'exam-2-9',
      question: { es: '¿Qué significa que locate sea más rápido que find?', en: 'What does it mean that locate is faster than find?' },
      options: [
        { id: 'a', text: { es: 'Usa menos memoria', en: 'Uses less memory' } },
        { id: 'b', text: { es: 'Busca en una base de datos pre-construida, no en el sistema de archivos real', en: 'Searches a pre-built database, not the actual filesystem' } },
        { id: 'c', text: { es: 'Es un comando más nuevo', en: 'It is a newer command' } },
        { id: 'd', text: { es: 'Solo busca en directorios específicos', en: 'Only searches specific directories' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'locate consulta una base de datos (actualizada por updatedb), mientras que find recorre el sistema de archivos en tiempo real.', en: 'locate queries a database (updated by updatedb), while find traverses the filesystem in real-time.' }
    },
    {
      id: 'exam-2-10',
      question: { es: '¿Qué directorio contiene los ejecutables esenciales del sistema?', en: 'Which directory contains essential system executables?' },
      options: [
        { id: 'a', text: { es: '/usr/bin', en: '/usr/bin' } },
        { id: 'b', text: { es: '/sbin', en: '/sbin' } },
        { id: 'c', text: { es: '/opt', en: '/opt' } },
        { id: 'd', text: { es: '/home', en: '/home' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '/sbin contiene binarios esenciales del sistema, generalmente necesarios para arrancar y reparar el sistema.', en: '/sbin contains essential system binaries, usually needed for booting and repairing the system.' }
    }
  ]
};

export const level2Skills: Skill[] = [
  { id: 'skill-fhs', name: { es: 'Jerarquía FHS', en: 'FHS Hierarchy' }, description: { es: 'Conocimiento de la estructura de directorios estándar', en: 'Knowledge of standard directory structure' }, icon: 'folder-tree' },
  { id: 'skill-links', name: { es: 'Enlaces', en: 'Links' }, description: { es: 'Crear y gestionar enlaces duros y simbólicos', en: 'Create and manage hard and symbolic links' }, icon: 'link' },
  { id: 'skill-find', name: { es: 'Búsqueda de archivos', en: 'File Search' }, description: { es: 'Encontrar archivos con criterios avanzados', en: 'Find files with advanced criteria' }, icon: 'search' },
  { id: 'skill-disk', name: { es: 'Gestión de disco', en: 'Disk Management' }, description: { es: 'Monitorear y analizar uso de disco', en: 'Monitor and analyze disk usage' }, icon: 'hard-drive' }
];

export const level2Module: Module = {
  id: 'level-2',
  slug: 'linux-filesystem',
  title: { es: 'Sistema de Archivos de Linux', en: 'Linux Filesystem' },
  description: { es: 'Comprende la estructura del sistema de archivos, tipos de archivos, enlaces y cómo buscar archivos eficientemente', en: 'Understand filesystem structure, file types, links and how to search files efficiently' },
  icon: 'folder-tree',
  color: '#22C55E',
  level: 2,
  order: 2,
  estimatedHours: 6,
  prerequisites: ['level-1'],
  skills: level2Skills,
  lessons: level2Lessons,
  labs: level2Labs,
  exam: level2Exam
};
