import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level8Lessons: Lesson[] = [
  {
    id: 'lesson-8-1',
    slug: 'package-managers-intro',
    title: { es: 'Introducción a Gestores de Paquetes', en: 'Introduction to Package Managers' },
    description: { es: 'Qué son los paquetes, repositorios y dependencias', en: 'What are packages, repositories and dependencies' },
    duration: 25,
    xpReward: 110,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-8-2',
    slug: 'apt-debian',
    title: { es: 'APT en Debian/Ubuntu', en: 'APT on Debian/Ubuntu' },
    description: { es: 'apt, apt-get, apt-cache, dpkg', en: 'apt, apt-get, apt-cache, dpkg' },
    duration: 40,
    xpReward: 180,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-8-3',
    slug: 'dnf-fedora',
    title: { es: 'DNF en Fedora/RHEL', en: 'DNF on Fedora/RHEL' },
    description: { es: 'dnf, yum, rpm para sistemas Red Hat', en: 'dnf, yum, rpm for Red Hat systems' },
    duration: 35,
    xpReward: 160,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-8-4',
    slug: 'pacman-arch',
    title: { es: 'Pacman en Arch Linux', en: 'Pacman on Arch Linux' },
    description: { es: 'El gestor de paquetes de Arch y AUR', en: 'Arch package manager and AUR' },
    duration: 30,
    xpReward: 140,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-8-5',
    slug: 'snap-flatpak-appimage',
    title: { es: 'Paquetes Universales: Snap, Flatpak, AppImage', en: 'Universal Packages: Snap, Flatpak, AppImage' },
    description: { es: 'Soluciones multiplataforma de empaquetado', en: 'Cross-platform packaging solutions' },
    duration: 30,
    xpReward: 140,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-8-6',
    slug: 'compile-from-source',
    title: { es: 'Compilar desde Código Fuente', en: 'Compile from Source' },
    description: { es: 'configure, make, make install', en: 'configure, make, make install' },
    duration: 40,
    xpReward: 180,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level8Labs: Lab[] = [
  {
    id: 'lab-8-1',
    slug: 'package-management',
    title: { es: 'Gestión Completa de Paquetes', en: 'Complete Package Management' },
    description: { es: 'Instala, actualiza, elimina y busca paquetes', en: 'Install, update, remove and search packages' },
    difficulty: 'intermediate',
    duration: 40,
    xpReward: 350,
    objectives: [
      { es: 'Actualizar lista de paquetes y sistema', en: 'Update package list and system' },
      { es: 'Buscar e instalar un paquete', en: 'Search and install a package' },
      { es: 'Ver información de paquetes instalados', en: 'View installed package information' },
      { es: 'Limpiar caché de paquetes', en: 'Clean package cache' }
    ],
    tools: ['apt', 'dpkg'],
    validationCriteria: [
      { type: 'COMMAND_EXECUTED', value: 'apt update' },
      { type: 'COMMAND_EXECUTED', value: 'apt install' },
      { type: 'COMMAND_EXECUTED', value: 'apt search' }
    ]
  }
];

export const level8Exam: Exam = {
  passingScore: 75,
  timeLimit: 25,
  questions: [
    {
      id: 'exam-8-1',
      question: { es: '¿Qué hace "sudo apt update"?', en: 'What does "sudo apt update" do?' },
      options: [
        { id: 'a', text: { es: 'Actualiza todos los paquetes instalados', en: 'Updates all installed packages' } },
        { id: 'b', text: { es: 'Actualiza la lista de paquetes disponibles', en: 'Updates the list of available packages' } },
        { id: 'c', text: { es: 'Instala actualizaciones de seguridad', en: 'Installs security updates' } },
        { id: 'd', text: { es: 'Actualiza apt a la última versión', en: 'Updates apt to latest version' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'update descarga la lista de paquetes de los repositorios. upgrade instala las actualizaciones.', en: 'update downloads package list from repositories. upgrade installs the updates.' }
    },
    {
      id: 'exam-8-2',
      question: { es: '¿Cuál es la diferencia entre apt y apt-get?', en: 'What is the difference between apt and apt-get?' },
      options: [
        { id: 'a', text: { es: 'apt es más nuevo y tiene mejor UX, apt-get es más para scripts', en: 'apt is newer with better UX, apt-get is more for scripts' } },
        { id: 'b', text: { es: 'apt-get es más nuevo', en: 'apt-get is newer' } },
        { id: 'c', text: { es: 'apt solo funciona en Ubuntu', en: 'apt only works on Ubuntu' } },
        { id: 'd', text: { es: 'No hay diferencia', en: 'There is no difference' } }
      ],
      correctAnswer: 'a',
      explanation: { es: 'apt combina apt-get y apt-cache con salida más amigable. apt-get tiene salida estable para scripts.', en: 'apt combines apt-get and apt-cache with friendlier output. apt-get has stable output for scripts.' }
    },
    {
      id: 'exam-8-3',
      question: { es: '¿Qué comando busca un paquete en Debian/Ubuntu?', en: 'What command searches for a package in Debian/Ubuntu?' },
      options: [
        { id: 'a', text: { es: 'apt find nginx', en: 'apt find nginx' } },
        { id: 'b', text: { es: 'apt search nginx', en: 'apt search nginx' } },
        { id: 'c', text: { es: 'apt lookup nginx', en: 'apt lookup nginx' } },
        { id: 'd', text: { es: 'apt query nginx', en: 'apt query nginx' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'apt search busca en nombres y descripciones. apt show muestra detalles de un paquete específico.', en: 'apt search searches in names and descriptions. apt show displays details for a specific package.' }
    },
    {
      id: 'exam-8-4',
      question: { es: '¿Qué es dnf?', en: 'What is dnf?' },
      options: [
        { id: 'a', text: { es: 'El gestor de paquetes de Debian', en: 'The Debian package manager' } },
        { id: 'b', text: { es: 'El sucesor de yum en Fedora/RHEL', en: 'The successor to yum on Fedora/RHEL' } },
        { id: 'c', text: { es: 'Un tipo de archivo de paquete', en: 'A type of package file' } },
        { id: 'd', text: { es: 'Un comando de red', en: 'A network command' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'dnf (Dandified YUM) es el gestor de paquetes moderno de Fedora y RHEL 8+, reemplazando a yum.', en: 'dnf (Dandified YUM) is the modern package manager for Fedora and RHEL 8+, replacing yum.' }
    },
    {
      id: 'exam-8-5',
      question: { es: '¿Cuál es el formato de paquete en Debian/Ubuntu?', en: 'What is the package format in Debian/Ubuntu?' },
      options: [
        { id: 'a', text: { es: '.rpm', en: '.rpm' } },
        { id: 'b', text: { es: '.deb', en: '.deb' } },
        { id: 'c', text: { es: '.pkg', en: '.pkg' } },
        { id: 'd', text: { es: '.tar.gz', en: '.tar.gz' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '.deb es el formato de Debian/Ubuntu. .rpm es de Red Hat/Fedora. dpkg maneja archivos .deb directamente.', en: '.deb is the Debian/Ubuntu format. .rpm is Red Hat/Fedora. dpkg handles .deb files directly.' }
    },
    {
      id: 'exam-8-6',
      question: { es: '¿Qué comando instala un archivo .deb local?', en: 'What command installs a local .deb file?' },
      options: [
        { id: 'a', text: { es: 'apt install archivo.deb', en: 'apt install file.deb' } },
        { id: 'b', text: { es: 'dpkg -i archivo.deb', en: 'dpkg -i file.deb' } },
        { id: 'c', text: { es: 'Ambas A y B funcionan', en: 'Both A and B work' } },
        { id: 'd', text: { es: 'install archivo.deb', en: 'install file.deb' } }
      ],
      correctAnswer: 'c',
      explanation: { es: 'dpkg -i es el método tradicional. apt install ./archivo.deb también funciona y resuelve dependencias automáticamente.', en: 'dpkg -i is traditional. apt install ./file.deb also works and resolves dependencies automatically.' }
    },
    {
      id: 'exam-8-7',
      question: { es: '¿Qué es una ventaja de Flatpak/Snap sobre paquetes tradicionales?', en: 'What is an advantage of Flatpak/Snap over traditional packages?' },
      options: [
        { id: 'a', text: { es: 'Son más pequeños', en: 'They are smaller' } },
        { id: 'b', text: { es: 'Funcionan igual en diferentes distribuciones', en: 'They work the same across different distributions' } },
        { id: 'c', text: { es: 'Son más rápidos', en: 'They are faster' } },
        { id: 'd', text: { es: 'No necesitan internet', en: 'They don\'t need internet' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'Flatpak/Snap empaquetan dependencias, permitiendo que la misma aplicación funcione en Ubuntu, Fedora, etc.', en: 'Flatpak/Snap bundle dependencies, allowing the same app to work on Ubuntu, Fedora, etc.' }
    }
  ]
};

export const level8Skills: Skill[] = [
  { id: 'skill-apt', name: { es: 'APT', en: 'APT' }, description: { es: 'Gestión de paquetes Debian/Ubuntu', en: 'Debian/Ubuntu package management' }, icon: 'package' },
  { id: 'skill-dnf', name: { es: 'DNF/YUM', en: 'DNF/YUM' }, description: { es: 'Gestión de paquetes Red Hat', en: 'Red Hat package management' }, icon: 'package' },
  { id: 'skill-compile', name: { es: 'Compilación', en: 'Compilation' }, description: { es: 'Compilar software desde fuente', en: 'Compile software from source' }, icon: 'wrench' },
  { id: 'skill-universal', name: { es: 'Paquetes Universales', en: 'Universal Packages' }, description: { es: 'Snap, Flatpak, AppImage', en: 'Snap, Flatpak, AppImage' }, icon: 'box' }
];

export const level8Module: Module = {
  id: 'level-8',
  slug: 'package-management',
  title: { es: 'Gestión de Paquetes', en: 'Package Management' },
  description: { es: 'Domina la instalación de software con APT, DNF, Pacman y formatos universales', en: 'Master software installation with APT, DNF, Pacman and universal formats' },
  icon: 'package',
  color: '#F97316',
  level: 8,
  order: 8,
  estimatedHours: 5,
  prerequisites: ['level-7'],
  skills: level8Skills,
  lessons: level8Lessons,
  labs: level8Labs,
  exam: level8Exam
};
