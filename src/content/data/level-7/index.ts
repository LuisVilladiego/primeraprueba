import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level7Lessons: Lesson[] = [
  {
    id: 'lesson-7-1',
    slug: 'grep-basics',
    title: { es: 'Búsqueda de Texto con grep', en: 'Text Search with grep' },
    description: { es: 'Encuentra patrones en archivos y streams', en: 'Find patterns in files and streams' },
    duration: 35,
    xpReward: 160,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-7-2',
    slug: 'regex-intro',
    title: { es: 'Introducción a Expresiones Regulares', en: 'Introduction to Regular Expressions' },
    description: { es: 'Patrones básicos: ., *, +, ?, [], ^, $', en: 'Basic patterns: ., *, +, ?, [], ^, $' },
    duration: 45,
    xpReward: 200,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-7-3',
    slug: 'sed-basics',
    title: { es: 'Transformar Texto con sed', en: 'Transform Text with sed' },
    description: { es: 'Buscar, reemplazar y editar streams de texto', en: 'Search, replace and edit text streams' },
    duration: 40,
    xpReward: 180,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-7-4',
    slug: 'awk-basics',
    title: { es: 'Procesamiento con awk', en: 'Processing with awk' },
    description: { es: 'Procesa datos estructurados por columnas', en: 'Process column-structured data' },
    duration: 45,
    xpReward: 200,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-7-5',
    slug: 'cut-sort-uniq',
    title: { es: 'cut, sort y uniq', en: 'cut, sort and uniq' },
    description: { es: 'Herramientas clásicas de procesamiento de texto', en: 'Classic text processing tools' },
    duration: 30,
    xpReward: 140,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-7-6',
    slug: 'wc-tr-tee',
    title: { es: 'wc, tr y tee', en: 'wc, tr and tee' },
    description: { es: 'Contar, transformar y duplicar streams', en: 'Count, transform and duplicate streams' },
    duration: 25,
    xpReward: 120,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-7-7',
    slug: 'pipes-redirection',
    title: { es: 'Pipes y Redirección Avanzada', en: 'Pipes and Advanced Redirection' },
    description: { es: 'Combina herramientas con |, >, >>, 2>&1', en: 'Combine tools with |, >, >>, 2>&1' },
    duration: 35,
    xpReward: 170,
    order: 7,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level7Labs: Lab[] = [
  {
    id: 'lab-7-1',
    slug: 'log-analyzer',
    title: { es: 'Analizador de Logs', en: 'Log Analyzer' },
    description: { es: 'Procesa logs de servidor para extraer estadísticas', en: 'Process server logs to extract statistics' },
    difficulty: 'intermediate',
    duration: 50,
    xpReward: 450,
    objectives: [
      { es: 'Contar errores por tipo', en: 'Count errors by type' },
      { es: 'Extraer IPs más frecuentes', en: 'Extract most frequent IPs' },
      { es: 'Filtrar por rango de fechas', en: 'Filter by date range' },
      { es: 'Generar reporte de resumen', en: 'Generate summary report' }
    ],
    tools: ['grep', 'awk', 'sort', 'uniq', 'cut'],
    validationCriteria: [
      { type: 'COMMAND_EXECUTED', value: 'grep ERROR' },
      { type: 'COMMAND_EXECUTED', value: 'awk' },
      { type: 'FILE_CREATED', value: 'report.txt' }
    ]
  },
  {
    id: 'lab-7-2',
    slug: 'data-pipeline',
    title: { es: 'Pipeline de Datos', en: 'Data Pipeline' },
    description: { es: 'Construye un pipeline de transformación de CSV', en: 'Build a CSV transformation pipeline' },
    difficulty: 'advanced',
    duration: 55,
    xpReward: 500,
    objectives: [
      { es: 'Limpiar datos con caracteres especiales', en: 'Clean data with special characters' },
      { es: 'Normalizar formato de fechas', en: 'Normalize date format' },
      { es: 'Agregar datos por categoría', en: 'Aggregate data by category' },
      { es: 'Exportar resultado limpio', en: 'Export clean result' }
    ],
    tools: ['sed', 'awk', 'tr', 'sort', 'uniq'],
    validationCriteria: [
      { type: 'COMMAND_EXECUTED', value: 'sed' },
      { type: 'FILE_CREATED', value: 'clean_data.csv' }
    ]
  }
];

export const level7Exam: Exam = {
  passingScore: 80,
  timeLimit: 30,
  questions: [
    {
      id: 'exam-7-1',
      question: { es: '¿Qué hace "grep -i error log.txt"?', en: 'What does "grep -i error log.txt" do?' },
      options: [
        { id: 'a', text: { es: 'Busca "error" exacto', en: 'Searches for exact "error"' } },
        { id: 'b', text: { es: 'Busca "error" ignorando mayúsculas/minúsculas', en: 'Searches for "error" ignoring case' } },
        { id: 'c', text: { es: 'Invierte la búsqueda', en: 'Inverts the search' } },
        { id: 'd', text: { es: 'Busca de forma interactiva', en: 'Searches interactively' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '-i (ignore case) hace la búsqueda insensible a mayúsculas. Encontrará Error, ERROR, error, etc.', en: '-i (ignore case) makes the search case-insensitive. It will find Error, ERROR, error, etc.' }
    },
    {
      id: 'exam-7-2',
      question: { es: 'En regex, ¿qué significa el patrón ^Error?', en: 'In regex, what does the pattern ^Error mean?' },
      options: [
        { id: 'a', text: { es: 'Contiene "Error"', en: 'Contains "Error"' } },
        { id: 'b', text: { es: 'La línea empieza con "Error"', en: 'The line starts with "Error"' } },
        { id: 'c', text: { es: 'La línea termina con "Error"', en: 'The line ends with "Error"' } },
        { id: 'd', text: { es: 'No contiene "Error"', en: 'Does not contain "Error"' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '^ ancla el patrón al inicio de línea. $ ancla al final. ^Error$ coincide con líneas que solo contienen "Error".', en: '^ anchors the pattern to line start. $ anchors to end. ^Error$ matches lines containing only "Error".' }
    },
    {
      id: 'exam-7-3',
      question: { es: '¿Qué hace "sed \'s/foo/bar/g\' archivo"?', en: 'What does "sed \'s/foo/bar/g\' file" do?' },
      options: [
        { id: 'a', text: { es: 'Reemplaza la primera ocurrencia de foo por bar', en: 'Replaces first occurrence of foo with bar' } },
        { id: 'b', text: { es: 'Reemplaza todas las ocurrencias de foo por bar', en: 'Replaces all occurrences of foo with bar' } },
        { id: 'c', text: { es: 'Busca foo o bar', en: 'Searches for foo or bar' } },
        { id: 'd', text: { es: 'Elimina foo y bar', en: 'Deletes foo and bar' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 's/old/new/ sustituye. Sin g solo la primera por línea, con g (global) todas las ocurrencias.', en: 's/old/new/ substitutes. Without g only first per line, with g (global) all occurrences.' }
    },
    {
      id: 'exam-7-4',
      question: { es: '¿Qué hace "awk \'{print $2}\' archivo"?', en: 'What does "awk \'{print $2}\' file" do?' },
      options: [
        { id: 'a', text: { es: 'Imprime la línea 2', en: 'Prints line 2' } },
        { id: 'b', text: { es: 'Imprime la segunda columna de cada línea', en: 'Prints the second column of each line' } },
        { id: 'c', text: { es: 'Imprime 2 caracteres', en: 'Prints 2 characters' } },
        { id: 'd', text: { es: 'Imprime cada 2 líneas', en: 'Prints every 2 lines' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'En awk, $1 es la primera columna, $2 la segunda, etc. $0 es la línea completa. Columnas separadas por espacios.', en: 'In awk, $1 is first column, $2 second, etc. $0 is entire line. Columns separated by spaces.' }
    },
    {
      id: 'exam-7-5',
      question: { es: '¿Qué hace "sort -n"?', en: 'What does "sort -n" do?' },
      options: [
        { id: 'a', text: { es: 'Ordena en orden inverso', en: 'Sorts in reverse order' } },
        { id: 'b', text: { es: 'Ordena numéricamente', en: 'Sorts numerically' } },
        { id: 'c', text: { es: 'Ordena por nombre', en: 'Sorts by name' } },
        { id: 'd', text: { es: 'No ordena duplicados', en: 'Does not sort duplicates' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '-n ordena numéricamente (2 < 10). Sin -n, ordenaría alfabéticamente (10 < 2). -r invierte.', en: '-n sorts numerically (2 < 10). Without -n, it would sort alphabetically (10 < 2). -r reverses.' }
    },
    {
      id: 'exam-7-6',
      question: { es: '¿Qué hace "uniq -c"?', en: 'What does "uniq -c" do?' },
      options: [
        { id: 'a', text: { es: 'Elimina duplicados', en: 'Removes duplicates' } },
        { id: 'b', text: { es: 'Cuenta ocurrencias de líneas consecutivas iguales', en: 'Counts occurrences of consecutive equal lines' } },
        { id: 'c', text: { es: 'Solo muestra líneas únicas', en: 'Only shows unique lines' } },
        { id: 'd', text: { es: 'Muestra solo duplicados', en: 'Shows only duplicates' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'uniq -c prefija cada línea con su conteo. Requiere entrada ordenada para contar correctamente.', en: 'uniq -c prefixes each line with its count. Requires sorted input to count correctly.' }
    },
    {
      id: 'exam-7-7',
      question: { es: '¿Qué hace el pipe | ?', en: 'What does the pipe | do?' },
      options: [
        { id: 'a', text: { es: 'Ejecuta comandos en paralelo', en: 'Runs commands in parallel' } },
        { id: 'b', text: { es: 'Pasa la salida de un comando como entrada al siguiente', en: 'Passes output of one command as input to the next' } },
        { id: 'c', text: { es: 'Guarda la salida en un archivo', en: 'Saves output to a file' } },
        { id: 'd', text: { es: 'Ejecuta el segundo comando si el primero falla', en: 'Runs second command if first fails' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'El pipe conecta stdout del primer comando con stdin del segundo, permitiendo encadenar herramientas.', en: 'The pipe connects stdout of first command with stdin of second, allowing tool chaining.' }
    },
    {
      id: 'exam-7-8',
      question: { es: '¿Qué redirección combina stdout y stderr?', en: 'What redirection combines stdout and stderr?' },
      options: [
        { id: 'a', text: { es: '> archivo', en: '> file' } },
        { id: 'b', text: { es: '2> archivo', en: '2> file' } },
        { id: 'c', text: { es: '&> archivo o 2>&1', en: '&> file or 2>&1' } },
        { id: 'd', text: { es: '>> archivo', en: '>> file' } }
      ],
      correctAnswer: 'c',
      explanation: { es: '&> redirige ambos streams. 2>&1 redirige stderr (2) a donde apunte stdout (1).', en: '&> redirects both streams. 2>&1 redirects stderr (2) to where stdout (1) points.' }
    }
  ]
};

export const level7Skills: Skill[] = [
  { id: 'skill-grep', name: { es: 'grep', en: 'grep' }, description: { es: 'Buscar patrones en texto', en: 'Search patterns in text' }, icon: 'search' },
  { id: 'skill-regex', name: { es: 'Expresiones Regulares', en: 'Regular Expressions' }, description: { es: 'Patrones de búsqueda avanzados', en: 'Advanced search patterns' }, icon: 'regex' },
  { id: 'skill-sed-awk', name: { es: 'sed/awk', en: 'sed/awk' }, description: { es: 'Transformar y procesar texto', en: 'Transform and process text' }, icon: 'file-text' },
  { id: 'skill-pipes', name: { es: 'Pipes', en: 'Pipes' }, description: { es: 'Encadenar comandos', en: 'Chain commands' }, icon: 'git-merge' }
];

export const level7Module: Module = {
  id: 'level-7',
  slug: 'text-processing',
  title: { es: 'Procesamiento de Texto', en: 'Text Processing' },
  description: { es: 'Domina grep, sed, awk y herramientas de procesamiento de texto para manipular datos eficientemente', en: 'Master grep, sed, awk and text processing tools to manipulate data efficiently' },
  icon: 'file-text',
  color: '#14B8A6',
  level: 7,
  order: 7,
  estimatedHours: 8,
  prerequisites: ['level-6'],
  skills: level7Skills,
  lessons: level7Lessons,
  labs: level7Labs,
  exam: level7Exam
};
