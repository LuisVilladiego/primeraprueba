import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level12Lessons: Lesson[] = [
  {
    id: 'lesson-12-1',
    slug: 'advanced-variables',
    title: { es: 'Variables Avanzadas', en: 'Advanced Variables' },
    description: { es: 'Arrays, manipulación de strings, expansión de parámetros', en: 'Arrays, string manipulation, parameter expansion' },
    duration: 45,
    xpReward: 200,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-12-2',
    slug: 'regex-in-bash',
    title: { es: 'Expresiones Regulares en Bash', en: 'Regular Expressions in Bash' },
    description: { es: 'Usa regex con [[ =~ ]] y otras herramientas', en: 'Use regex with [[ =~ ]] and other tools' },
    duration: 40,
    xpReward: 180,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-12-3',
    slug: 'debugging-scripts',
    title: { es: 'Debugging de Scripts', en: 'Script Debugging' },
    description: { es: 'set -x, set -e, trap y técnicas de depuración', en: 'set -x, set -e, trap and debugging techniques' },
    duration: 35,
    xpReward: 160,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-12-4',
    slug: 'subshells-processes',
    title: { es: 'Subshells y Sustitución de Procesos', en: 'Subshells and Process Substitution' },
    description: { es: '$(), <(), >() y gestión de subprocesos', en: '$(), <(), >() and subprocess management' },
    duration: 40,
    xpReward: 180,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-12-5',
    slug: 'signal-handling',
    title: { es: 'Manejo de Señales con trap', en: 'Signal Handling with trap' },
    description: { es: 'Captura señales y limpia recursos', en: 'Catch signals and clean up resources' },
    duration: 35,
    xpReward: 160,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-12-6',
    slug: 'getopts-arguments',
    title: { es: 'Parseo de Argumentos con getopts', en: 'Argument Parsing with getopts' },
    description: { es: 'Crea scripts con opciones -v, --help, etc.', en: 'Create scripts with -v, --help options, etc.' },
    duration: 40,
    xpReward: 180,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-12-7',
    slug: 'best-practices',
    title: { es: 'Mejores Prácticas de Scripting', en: 'Scripting Best Practices' },
    description: { es: 'Estilo, seguridad, portabilidad y shellcheck', en: 'Style, security, portability and shellcheck' },
    duration: 35,
    xpReward: 160,
    order: 7,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level12Labs: Lab[] = [
  {
    id: 'lab-12-1',
    slug: 'automation-tool',
    title: { es: 'Herramienta de Automatización', en: 'Automation Tool' },
    description: { es: 'Crea una herramienta CLI completa con opciones', en: 'Create a complete CLI tool with options' },
    difficulty: 'advanced',
    duration: 60,
    xpReward: 550,
    objectives: [
      { es: 'Implementar parseo de argumentos', en: 'Implement argument parsing' },
      { es: 'Agregar manejo de errores robusto', en: 'Add robust error handling' },
      { es: 'Incluir logging y modo verbose', en: 'Include logging and verbose mode' },
      { es: 'Crear help y documentación', en: 'Create help and documentation' }
    ],
    tools: ['getopts', 'trap', 'set'],
    validationCriteria: [
      { type: 'FILE_CREATED', value: 'mytool.sh' },
      { type: 'SCRIPT_HAS_HELP', value: '--help' },
      { type: 'SCRIPT_HANDLES_ERRORS', value: 'set -e' }
    ]
  }
];

export const level12Exam: Exam = {
  passingScore: 80,
  timeLimit: 30,
  questions: [
    {
      id: 'exam-12-1',
      question: { es: '¿Qué hace set -e en un script?', en: 'What does set -e do in a script?' },
      options: [
        { id: 'a', text: { es: 'Habilita modo de edición', en: 'Enables edit mode' } },
        { id: 'b', text: { es: 'Sale inmediatamente si un comando falla', en: 'Exits immediately if a command fails' } },
        { id: 'c', text: { es: 'Muestra errores en stderr', en: 'Shows errors in stderr' } },
        { id: 'd', text: { es: 'Ejecuta en modo interactivo', en: 'Runs in interactive mode' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'set -e termina el script si cualquier comando retorna código no-cero (error).', en: 'set -e terminates the script if any command returns non-zero code (error).' }
    },
    {
      id: 'exam-12-2',
      question: { es: '¿Qué hace set -x?', en: 'What does set -x do?' },
      options: [
        { id: 'a', text: { es: 'Sale del script', en: 'Exits the script' } },
        { id: 'b', text: { es: 'Muestra cada comando antes de ejecutarlo (debug)', en: 'Shows each command before executing (debug)' } },
        { id: 'c', text: { es: 'Ejecuta en modo exclusivo', en: 'Runs in exclusive mode' } },
        { id: 'd', text: { es: 'Expande variables automáticamente', en: 'Auto-expands variables' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'set -x imprime cada comando con su expansión antes de ejecutarlo, útil para debugging.', en: 'set -x prints each command with its expansion before executing, useful for debugging.' }
    },
    {
      id: 'exam-12-3',
      question: { es: '¿Cómo declaras un array en bash?', en: 'How do you declare an array in bash?' },
      options: [
        { id: 'a', text: { es: 'array = (a b c)', en: 'array = (a b c)' } },
        { id: 'b', text: { es: 'array=(a b c)', en: 'array=(a b c)' } },
        { id: 'c', text: { es: 'declare array a b c', en: 'declare array a b c' } },
        { id: 'd', text: { es: '[array] = a, b, c', en: '[array] = a, b, c' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'Sin espacios alrededor del =. ${array[0]} accede al primer elemento, ${array[@]} a todos.', en: 'No spaces around =. ${array[0]} accesses first element, ${array[@]} all of them.' }
    },
    {
      id: 'exam-12-4',
      question: { es: '¿Qué hace trap \'rm temp\' EXIT?', en: 'What does trap \'rm temp\' EXIT do?' },
      options: [
        { id: 'a', text: { es: 'Elimina temp inmediatamente', en: 'Deletes temp immediately' } },
        { id: 'b', text: { es: 'Ejecuta rm temp cuando el script termina', en: 'Runs rm temp when script terminates' } },
        { id: 'c', text: { es: 'Previene que temp sea eliminado', en: 'Prevents temp from being deleted' } },
        { id: 'd', text: { es: 'Crea un archivo temp', en: 'Creates a temp file' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'trap ejecuta comandos al recibir señales. EXIT se activa cuando el script termina normalmente o por error.', en: 'trap runs commands when signals are received. EXIT triggers when script ends normally or by error.' }
    },
    {
      id: 'exam-12-5',
      question: { es: '¿Qué es $(comando)?', en: 'What is $(command)?' },
      options: [
        { id: 'a', text: { es: 'Variable llamada comando', en: 'Variable called command' } },
        { id: 'b', text: { es: 'Sustitución de comando: ejecuta y captura salida', en: 'Command substitution: executes and captures output' } },
        { id: 'c', text: { es: 'Comentario', en: 'Comment' } },
        { id: 'd', text: { es: 'Expresión matemática', en: 'Math expression' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '$(cmd) ejecuta cmd y es reemplazado por su salida. Ejemplo: fecha=$(date)', en: '$(cmd) executes cmd and is replaced by its output. Example: date=$(date)' }
    },
    {
      id: 'exam-12-6',
      question: { es: '¿Qué expansión de parámetro obtiene la longitud de una variable?', en: 'What parameter expansion gets the length of a variable?' },
      options: [
        { id: 'a', text: { es: '${var.length}', en: '${var.length}' } },
        { id: 'b', text: { es: '${#var}', en: '${#var}' } },
        { id: 'c', text: { es: '${len(var)}', en: '${len(var)}' } },
        { id: 'd', text: { es: '${var:length}', en: '${var:length}' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '${#var} retorna el número de caracteres en var. Para arrays, ${#arr[@]} retorna número de elementos.', en: '${#var} returns number of characters in var. For arrays, ${#arr[@]} returns number of elements.' }
    },
    {
      id: 'exam-12-7',
      question: { es: '¿Qué herramienta analiza scripts bash buscando errores?', en: 'What tool analyzes bash scripts looking for errors?' },
      options: [
        { id: 'a', text: { es: 'bashlint', en: 'bashlint' } },
        { id: 'b', text: { es: 'shellcheck', en: 'shellcheck' } },
        { id: 'c', text: { es: 'bashanalyze', en: 'bashanalyze' } },
        { id: 'd', text: { es: 'scriptlint', en: 'scriptlint' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'shellcheck es la herramienta estándar para análisis estático de scripts shell, detectando errores comunes.', en: 'shellcheck is the standard tool for static analysis of shell scripts, detecting common errors.' }
    }
  ]
};

export const level12Skills: Skill[] = [
  { id: 'skill-arrays', name: { es: 'Arrays', en: 'Arrays' }, description: { es: 'Manipular arrays en bash', en: 'Manipulate arrays in bash' }, icon: 'list' },
  { id: 'skill-debugging', name: { es: 'Debugging', en: 'Debugging' }, description: { es: 'Depurar scripts complejos', en: 'Debug complex scripts' }, icon: 'bug' },
  { id: 'skill-robust', name: { es: 'Scripts Robustos', en: 'Robust Scripts' }, description: { es: 'Manejo de errores y señales', en: 'Error and signal handling' }, icon: 'shield' },
  { id: 'skill-cli', name: { es: 'CLI Tools', en: 'CLI Tools' }, description: { es: 'Crear herramientas de línea de comandos', en: 'Create command line tools' }, icon: 'terminal' }
];

export const level12Module: Module = {
  id: 'level-12',
  slug: 'advanced-scripting',
  title: { es: 'Scripting Avanzado', en: 'Advanced Scripting' },
  description: { es: 'Técnicas avanzadas de bash: arrays, regex, debugging, manejo de señales y mejores prácticas', en: 'Advanced bash techniques: arrays, regex, debugging, signal handling and best practices' },
  icon: 'code',
  color: '#7C3AED',
  level: 12,
  order: 12,
  estimatedHours: 9,
  prerequisites: ['level-11'],
  skills: level12Skills,
  lessons: level12Lessons,
  labs: level12Labs,
  exam: level12Exam
};
