import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level6Lessons: Lesson[] = [
  {
    id: 'lesson-6-1',
    slug: 'nano-basics',
    title: { es: 'Editor Nano: Básico y Práctico', en: 'Nano Editor: Basic and Practical' },
    description: { es: 'Edita archivos con el editor más amigable', en: 'Edit files with the friendliest editor' },
    duration: 25,
    xpReward: 100,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-6-2',
    slug: 'vim-intro',
    title: { es: 'Introducción a Vim', en: 'Introduction to Vim' },
    description: { es: 'Modos, navegación básica y comandos esenciales', en: 'Modes, basic navigation and essential commands' },
    duration: 40,
    xpReward: 180,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-6-3',
    slug: 'vim-editing',
    title: { es: 'Edición en Vim', en: 'Editing in Vim' },
    description: { es: 'Insertar, borrar, copiar, pegar y deshacer', en: 'Insert, delete, copy, paste and undo' },
    duration: 35,
    xpReward: 160,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-6-4',
    slug: 'vim-search-replace',
    title: { es: 'Búsqueda y Reemplazo en Vim', en: 'Search and Replace in Vim' },
    description: { es: 'Encuentra y reemplaza texto eficientemente', en: 'Find and replace text efficiently' },
    duration: 30,
    xpReward: 140,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-6-5',
    slug: 'vim-advanced',
    title: { es: 'Vim Avanzado: Buffers, Windows, Tabs', en: 'Advanced Vim: Buffers, Windows, Tabs' },
    description: { es: 'Trabaja con múltiples archivos simultáneamente', en: 'Work with multiple files simultaneously' },
    duration: 35,
    xpReward: 170,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-6-6',
    slug: 'vimrc-config',
    title: { es: 'Configuración de Vim: .vimrc', en: 'Vim Configuration: .vimrc' },
    description: { es: 'Personaliza Vim con tu archivo de configuración', en: 'Customize Vim with your configuration file' },
    duration: 30,
    xpReward: 150,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level6Labs: Lab[] = [
  {
    id: 'lab-6-1',
    slug: 'vim-challenge',
    title: { es: 'Desafío Vim', en: 'Vim Challenge' },
    description: { es: 'Completa tareas de edición usando solo Vim', en: 'Complete editing tasks using only Vim' },
    difficulty: 'intermediate',
    duration: 40,
    xpReward: 350,
    objectives: [
      { es: 'Abrir, editar y guardar archivos', en: 'Open, edit and save files' },
      { es: 'Navegar eficientemente con teclas vim', en: 'Navigate efficiently with vim keys' },
      { es: 'Usar búsqueda y reemplazo', en: 'Use search and replace' },
      { es: 'Copiar líneas entre archivos', en: 'Copy lines between files' }
    ],
    tools: ['vim'],
    validationCriteria: [
      { type: 'FILE_MODIFIED', value: 'challenge.txt' },
      { type: 'CONTENT_MATCHES', value: 'expected_result.txt' }
    ]
  }
];

export const level6Exam: Exam = {
  passingScore: 75,
  timeLimit: 20,
  questions: [
    {
      id: 'exam-6-1',
      question: { es: '¿Cuáles son los tres modos principales de Vim?', en: 'What are the three main modes of Vim?' },
      options: [
        { id: 'a', text: { es: 'Edición, Lectura, Ejecución', en: 'Edit, Read, Execute' } },
        { id: 'b', text: { es: 'Normal, Insertar, Comando (Command-line)', en: 'Normal, Insert, Command (Command-line)' } },
        { id: 'c', text: { es: 'Texto, Binario, Hexadecimal', en: 'Text, Binary, Hexadecimal' } },
        { id: 'd', text: { es: 'Usuario, Root, Sistema', en: 'User, Root, System' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'Normal para navegación, Insert para escribir, Command-line (con :) para comandos como guardar/salir.', en: 'Normal for navigation, Insert for typing, Command-line (with :) for commands like save/quit.' }
    },
    {
      id: 'exam-6-2',
      question: { es: '¿Cómo sales de Vim sin guardar?', en: 'How do you exit Vim without saving?' },
      options: [
        { id: 'a', text: { es: ':exit', en: ':exit' } },
        { id: 'b', text: { es: ':q!', en: ':q!' } },
        { id: 'c', text: { es: 'Ctrl+C', en: 'Ctrl+C' } },
        { id: 'd', text: { es: 'Esc+Exit', en: 'Esc+Exit' } }
      ],
      correctAnswer: 'b',
      explanation: { es: ':q! fuerza la salida sin guardar. :q solo funciona si no hay cambios, :wq guarda y sale.', en: ':q! forces exit without saving. :q only works if no changes, :wq saves and exits.' }
    },
    {
      id: 'exam-6-3',
      question: { es: '¿Qué tecla te lleva del modo Normal al modo Insertar en Vim?', en: 'What key takes you from Normal mode to Insert mode in Vim?' },
      options: [
        { id: 'a', text: { es: 'Esc', en: 'Esc' } },
        { id: 'b', text: { es: 'i', en: 'i' } },
        { id: 'c', text: { es: 'Enter', en: 'Enter' } },
        { id: 'd', text: { es: ':', en: ':' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'i inserta antes del cursor, a después, I al inicio de línea, A al final, o para nueva línea.', en: 'i inserts before cursor, a after, I at line start, A at end, o for new line.' }
    },
    {
      id: 'exam-6-4',
      question: { es: '¿Cómo buscas la palabra "error" en Vim?', en: 'How do you search for the word "error" in Vim?' },
      options: [
        { id: 'a', text: { es: 'Ctrl+F error', en: 'Ctrl+F error' } },
        { id: 'b', text: { es: '/error', en: '/error' } },
        { id: 'c', text: { es: ':find error', en: ':find error' } },
        { id: 'd', text: { es: 'search error', en: 'search error' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '/patrón busca hacia adelante, ?patrón hacia atrás. n siguiente coincidencia, N anterior.', en: '/pattern searches forward, ?pattern backward. n next match, N previous.' }
    },
    {
      id: 'exam-6-5',
      question: { es: '¿Qué hace dd en modo Normal de Vim?', en: 'What does dd do in Vim Normal mode?' },
      options: [
        { id: 'a', text: { es: 'Deshacer', en: 'Undo' } },
        { id: 'b', text: { es: 'Elimina la línea actual', en: 'Deletes the current line' } },
        { id: 'c', text: { es: 'Duplica la línea', en: 'Duplicates the line' } },
        { id: 'd', text: { es: 'Baja dos líneas', en: 'Goes down two lines' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'dd corta la línea completa. d es delete, se duplica para operar en toda la línea. yy copia.', en: 'dd cuts the entire line. d is delete, doubled to operate on whole line. yy copies.' }
    },
    {
      id: 'exam-6-6',
      question: { es: '¿Cómo guardas en Nano?', en: 'How do you save in Nano?' },
      options: [
        { id: 'a', text: { es: 'Ctrl+S', en: 'Ctrl+S' } },
        { id: 'b', text: { es: 'Ctrl+O', en: 'Ctrl+O' } },
        { id: 'c', text: { es: ':w', en: ':w' } },
        { id: 'd', text: { es: 'F2', en: 'F2' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'Ctrl+O (WriteOut) guarda, Ctrl+X sale. Nano muestra los atajos en la parte inferior.', en: 'Ctrl+O (WriteOut) saves, Ctrl+X exits. Nano shows shortcuts at the bottom.' }
    }
  ]
};

export const level6Skills: Skill[] = [
  { id: 'skill-vim', name: { es: 'Vim', en: 'Vim' }, description: { es: 'Editar archivos con Vim', en: 'Edit files with Vim' }, icon: 'edit' },
  { id: 'skill-nano', name: { es: 'Nano', en: 'Nano' }, description: { es: 'Editor amigable para principiantes', en: 'Beginner-friendly editor' }, icon: 'file-text' },
  { id: 'skill-config', name: { es: 'Configuración', en: 'Configuration' }, description: { es: 'Personalizar editores', en: 'Customize editors' }, icon: 'settings' }
];

export const level6Module: Module = {
  id: 'level-6',
  slug: 'text-editors',
  title: { es: 'Editores de Texto', en: 'Text Editors' },
  description: { es: 'Domina Vim y Nano para editar archivos directamente en la terminal', en: 'Master Vim and Nano to edit files directly in the terminal' },
  icon: 'edit',
  color: '#EC4899',
  level: 6,
  order: 6,
  estimatedHours: 5,
  prerequisites: ['level-5'],
  skills: level6Skills,
  lessons: level6Lessons,
  labs: level6Labs,
  exam: level6Exam
};
