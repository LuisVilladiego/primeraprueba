import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level5Lessons: Lesson[] = [
  {
    id: 'lesson-5-1',
    slug: 'shell-scripting-intro',
    title: { es: 'Introducción al Shell Scripting', en: 'Introduction to Shell Scripting' },
    description: { es: 'Qué es un script, shebang, y tu primer script', en: 'What is a script, shebang, and your first script' },
    duration: 35,
    xpReward: 150,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-5-2',
    slug: 'variables-environment',
    title: { es: 'Variables y Variables de Entorno', en: 'Variables and Environment Variables' },
    description: { es: 'Declarar, usar y exportar variables', en: 'Declare, use and export variables' },
    duration: 35,
    xpReward: 160,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-5-3',
    slug: 'user-input-arguments',
    title: { es: 'Entrada de Usuario y Argumentos', en: 'User Input and Arguments' },
    description: { es: 'read, $1, $2, $@, $#, y shift', en: 'read, $1, $2, $@, $#, and shift' },
    duration: 30,
    xpReward: 140,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-5-4',
    slug: 'conditionals',
    title: { es: 'Condicionales: if, elif, else', en: 'Conditionals: if, elif, else' },
    description: { es: 'Toma decisiones en tus scripts', en: 'Make decisions in your scripts' },
    duration: 40,
    xpReward: 180,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-5-5',
    slug: 'test-comparisons',
    title: { es: 'Test y Comparaciones', en: 'Test and Comparisons' },
    description: { es: 'Comparar strings, números y archivos', en: 'Compare strings, numbers and files' },
    duration: 35,
    xpReward: 160,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-5-6',
    slug: 'loops',
    title: { es: 'Bucles: for, while, until', en: 'Loops: for, while, until' },
    description: { es: 'Repite acciones automáticamente', en: 'Repeat actions automatically' },
    duration: 40,
    xpReward: 180,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-5-7',
    slug: 'functions',
    title: { es: 'Funciones en Bash', en: 'Functions in Bash' },
    description: { es: 'Crea código reutilizable con funciones', en: 'Create reusable code with functions' },
    duration: 35,
    xpReward: 160,
    order: 7,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-5-8',
    slug: 'exit-codes',
    title: { es: 'Códigos de Salida y Manejo de Errores', en: 'Exit Codes and Error Handling' },
    description: { es: 'Controla el flujo basado en éxito o error', en: 'Control flow based on success or failure' },
    duration: 25,
    xpReward: 130,
    order: 8,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level5Labs: Lab[] = [
  {
    id: 'lab-5-1',
    slug: 'backup-script',
    title: { es: 'Script de Backup Automatizado', en: 'Automated Backup Script' },
    description: { es: 'Crea un script que haga backup de directorios importantes', en: 'Create a script that backs up important directories' },
    difficulty: 'intermediate',
    duration: 45,
    xpReward: 400,
    objectives: [
      { es: 'Aceptar directorio de origen como argumento', en: 'Accept source directory as argument' },
      { es: 'Crear archivo tar.gz con fecha en el nombre', en: 'Create tar.gz file with date in name' },
      { es: 'Validar que el directorio existe', en: 'Validate directory exists' },
      { es: 'Mostrar mensaje de éxito o error', en: 'Show success or error message' }
    ],
    tools: ['tar', 'date', 'if', 'test'],
    validationCriteria: [
      { type: 'FILE_CREATED', value: 'backup.sh' },
      { type: 'FILE_EXECUTABLE', value: 'backup.sh' },
      { type: 'SCRIPT_RUNS', value: 'backup.sh /tmp/test' }
    ]
  },
  {
    id: 'lab-5-2',
    slug: 'system-report',
    title: { es: 'Generador de Reportes del Sistema', en: 'System Report Generator' },
    description: { es: 'Script que genera un reporte completo del estado del sistema', en: 'Script that generates a complete system status report' },
    difficulty: 'intermediate',
    duration: 50,
    xpReward: 450,
    objectives: [
      { es: 'Recopilar información de CPU, memoria, disco', en: 'Collect CPU, memory, disk information' },
      { es: 'Listar usuarios conectados', en: 'List connected users' },
      { es: 'Mostrar procesos que más recursos usan', en: 'Show most resource-intensive processes' },
      { es: 'Guardar reporte en archivo con timestamp', en: 'Save report to file with timestamp' }
    ],
    tools: ['free', 'df', 'ps', 'who', 'date', 'functions'],
    validationCriteria: [
      { type: 'FILE_CREATED', value: 'system_report.sh' },
      { type: 'FILE_EXECUTABLE', value: 'system_report.sh' },
      { type: 'OUTPUT_CONTAINS', value: 'Memory' }
    ]
  }
];

export const level5Exam: Exam = {
  passingScore: 80,
  timeLimit: 35,
  questions: [
    {
      id: 'exam-5-1',
      question: { es: '¿Qué hace la línea #!/bin/bash al inicio de un script?', en: 'What does the line #!/bin/bash at the start of a script do?' },
      options: [
        { id: 'a', text: { es: 'Es un comentario', en: 'It is a comment' } },
        { id: 'b', text: { es: 'Indica qué intérprete debe ejecutar el script', en: 'Indicates which interpreter should run the script' } },
        { id: 'c', text: { es: 'Define una variable', en: 'Defines a variable' } },
        { id: 'd', text: { es: 'Inicia el modo debug', en: 'Starts debug mode' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'El shebang (#!) seguido de la ruta del intérprete indica al sistema qué programa usar para ejecutar el script.', en: 'The shebang (#!) followed by the interpreter path tells the system which program to use to run the script.' }
    },
    {
      id: 'exam-5-2',
      question: { es: '¿Cómo se accede al segundo argumento pasado a un script?', en: 'How do you access the second argument passed to a script?' },
      options: [
        { id: 'a', text: { es: '$1', en: '$1' } },
        { id: 'b', text: { es: '$2', en: '$2' } },
        { id: 'c', text: { es: 'arg[2]', en: 'arg[2]' } },
        { id: 'd', text: { es: '${args[2]}', en: '${args[2]}' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '$0 es el nombre del script, $1 es el primer argumento, $2 el segundo, etc.', en: '$0 is the script name, $1 is the first argument, $2 the second, etc.' }
    },
    {
      id: 'exam-5-3',
      question: { es: '¿Cuál es la sintaxis correcta para un if en bash?', en: 'What is the correct syntax for an if in bash?' },
      options: [
        { id: 'a', text: { es: 'if (condition) { }', en: 'if (condition) { }' } },
        { id: 'b', text: { es: 'if [ condition ]; then ... fi', en: 'if [ condition ]; then ... fi' } },
        { id: 'c', text: { es: 'if condition: ... end', en: 'if condition: ... end' } },
        { id: 'd', text: { es: 'if condition then end if', en: 'if condition then end if' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'La sintaxis de bash usa [ ] para tests, ; o nueva línea antes de then, y fi para cerrar.', en: 'Bash syntax uses [ ] for tests, ; or newline before then, and fi to close.' }
    },
    {
      id: 'exam-5-4',
      question: { es: '¿Qué operador compara si dos números son iguales en test?', en: 'What operator compares if two numbers are equal in test?' },
      options: [
        { id: 'a', text: { es: '==', en: '==' } },
        { id: 'b', text: { es: '-eq', en: '-eq' } },
        { id: 'c', text: { es: 'equals', en: 'equals' } },
        { id: 'd', text: { es: ':=', en: ':=' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'Para números: -eq (equal), -ne (not equal), -lt (less than), -gt (greater than). == es para strings.', en: 'For numbers: -eq (equal), -ne (not equal), -lt (less than), -gt (greater than). == is for strings.' }
    },
    {
      id: 'exam-5-5',
      question: { es: '¿Qué hace "for i in *.txt; do echo $i; done"?', en: 'What does "for i in *.txt; do echo $i; done" do?' },
      options: [
        { id: 'a', text: { es: 'Crea archivos txt', en: 'Creates txt files' } },
        { id: 'b', text: { es: 'Lista cada archivo .txt uno por línea', en: 'Lists each .txt file one per line' } },
        { id: 'c', text: { es: 'Elimina archivos txt', en: 'Deletes txt files' } },
        { id: 'd', text: { es: 'Muestra el contenido de los txt', en: 'Shows txt contents' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'El for itera sobre el glob *.txt, asignando cada nombre a $i y ejecutando echo.', en: 'The for iterates over the glob *.txt, assigning each name to $i and executing echo.' }
    },
    {
      id: 'exam-5-6',
      question: { es: '¿Cómo defines una función en bash?', en: 'How do you define a function in bash?' },
      options: [
        { id: 'a', text: { es: 'function nombre() { }', en: 'function name() { }' } },
        { id: 'b', text: { es: 'def nombre(): ...', en: 'def name(): ...' } },
        { id: 'c', text: { es: 'func nombre { }', en: 'func name { }' } },
        { id: 'd', text: { es: 'Ambas A y "nombre() { }" son válidas', en: 'Both A and "name() { }" are valid' } }
      ],
      correctAnswer: 'd',
      explanation: { es: 'Bash acepta tanto "function nombre() { }" como "nombre() { }" para definir funciones.', en: 'Bash accepts both "function name() { }" and "name() { }" to define functions.' }
    },
    {
      id: 'exam-5-7',
      question: { es: '¿Qué significa $? en bash?', en: 'What does $? mean in bash?' },
      options: [
        { id: 'a', text: { es: 'El número de argumentos', en: 'The number of arguments' } },
        { id: 'b', text: { es: 'El código de salida del último comando', en: 'The exit code of the last command' } },
        { id: 'c', text: { es: 'El PID del proceso actual', en: 'The current process PID' } },
        { id: 'd', text: { es: 'Todos los argumentos', en: 'All arguments' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '$? contiene el código de retorno del comando anterior. 0 = éxito, otro valor = error.', en: '$? contains the return code of the previous command. 0 = success, other value = error.' }
    },
    {
      id: 'exam-5-8',
      question: { es: '¿Qué test verifica si un archivo existe?', en: 'What test checks if a file exists?' },
      options: [
        { id: 'a', text: { es: '[ -f archivo ]', en: '[ -f file ]' } },
        { id: 'b', text: { es: '[ -e archivo ]', en: '[ -e file ]' } },
        { id: 'c', text: { es: '[ -d archivo ]', en: '[ -d file ]' } },
        { id: 'd', text: { es: 'Tanto -f como -e funcionan', en: 'Both -f and -e work' } }
      ],
      correctAnswer: 'd',
      explanation: { es: '-e verifica existencia de cualquier tipo, -f verifica que existe Y es archivo regular, -d que es directorio.', en: '-e checks existence of any type, -f checks exists AND is regular file, -d that it is a directory.' }
    },
    {
      id: 'exam-5-9',
      question: { es: '¿Cómo exportas una variable para que esté disponible en subprocesos?', en: 'How do you export a variable to be available in subprocesses?' },
      options: [
        { id: 'a', text: { es: 'global VAR=valor', en: 'global VAR=value' } },
        { id: 'b', text: { es: 'export VAR=valor', en: 'export VAR=value' } },
        { id: 'c', text: { es: 'public VAR=valor', en: 'public VAR=value' } },
        { id: 'd', text: { es: 'VAR=valor --export', en: 'VAR=value --export' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'export convierte la variable en variable de entorno, disponible para procesos hijos.', en: 'export converts the variable to an environment variable, available to child processes.' }
    },
    {
      id: 'exam-5-10',
      question: { es: '¿Qué hace "read -p \'Nombre: \' nombre"?', en: 'What does "read -p \'Name: \' name" do?' },
      options: [
        { id: 'a', text: { es: 'Lee un archivo llamado nombre', en: 'Reads a file called name' } },
        { id: 'b', text: { es: 'Muestra "Nombre:" y guarda la entrada del usuario en $nombre', en: 'Shows "Name:" and stores user input in $name' } },
        { id: 'c', text: { es: 'Imprime el valor de nombre', en: 'Prints the value of name' } },
        { id: 'd', text: { es: 'Pausa el script', en: 'Pauses the script' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'read -p muestra el prompt especificado y guarda lo que el usuario escribe en la variable indicada.', en: 'read -p displays the specified prompt and stores what the user types in the indicated variable.' }
    }
  ]
};

export const level5Skills: Skill[] = [
  { id: 'skill-scripting', name: { es: 'Shell Scripting', en: 'Shell Scripting' }, description: { es: 'Escribir scripts de bash', en: 'Write bash scripts' }, icon: 'file-code' },
  { id: 'skill-variables', name: { es: 'Variables', en: 'Variables' }, description: { es: 'Usar variables locales y de entorno', en: 'Use local and environment variables' }, icon: 'variable' },
  { id: 'skill-flow-control', name: { es: 'Control de Flujo', en: 'Flow Control' }, description: { es: 'Condicionales y bucles', en: 'Conditionals and loops' }, icon: 'git-branch' },
  { id: 'skill-functions', name: { es: 'Funciones', en: 'Functions' }, description: { es: 'Crear funciones reutilizables', en: 'Create reusable functions' }, icon: 'code' }
];

export const level5Module: Module = {
  id: 'level-5',
  slug: 'shell-scripting-basics',
  title: { es: 'Scripting Básico', en: 'Basic Scripting' },
  description: { es: 'Aprende a automatizar tareas escribiendo scripts de bash con variables, condicionales, bucles y funciones', en: 'Learn to automate tasks by writing bash scripts with variables, conditionals, loops and functions' },
  icon: 'terminal',
  color: '#8B5CF6',
  level: 5,
  order: 5,
  estimatedHours: 8,
  prerequisites: ['level-4'],
  skills: level5Skills,
  lessons: level5Lessons,
  labs: level5Labs,
  exam: level5Exam
};
