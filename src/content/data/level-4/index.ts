import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level4Lessons: Lesson[] = [
  {
    id: 'lesson-4-1',
    slug: 'understanding-processes',
    title: { es: 'Entendiendo los Procesos', en: 'Understanding Processes' },
    description: { es: 'Qué son los procesos, PIDs, y el árbol de procesos', en: 'What are processes, PIDs, and the process tree' },
    duration: 30,
    xpReward: 140,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-4-2',
    slug: 'ps-command',
    title: { es: 'Monitoreo con ps', en: 'Monitoring with ps' },
    description: { es: 'Lista y filtra procesos con el comando ps', en: 'List and filter processes with ps command' },
    duration: 30,
    xpReward: 140,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-4-3',
    slug: 'top-htop',
    title: { es: 'Monitoreo en Tiempo Real: top y htop', en: 'Real-time Monitoring: top and htop' },
    description: { es: 'Monitorea recursos y procesos interactivamente', en: 'Monitor resources and processes interactively' },
    duration: 35,
    xpReward: 160,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-4-4',
    slug: 'signals-kill',
    title: { es: 'Señales y kill', en: 'Signals and kill' },
    description: { es: 'Envía señales a procesos para controlarlos', en: 'Send signals to processes to control them' },
    duration: 30,
    xpReward: 150,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-4-5',
    slug: 'background-foreground',
    title: { es: 'Procesos en Background y Foreground', en: 'Background and Foreground Processes' },
    description: { es: 'Controla jobs con &, bg, fg y nohup', en: 'Control jobs with &, bg, fg and nohup' },
    duration: 30,
    xpReward: 140,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-4-6',
    slug: 'system-resources',
    title: { es: 'Recursos del Sistema: free, uptime, vmstat', en: 'System Resources: free, uptime, vmstat' },
    description: { es: 'Monitorea memoria, CPU y estadísticas del sistema', en: 'Monitor memory, CPU and system statistics' },
    duration: 25,
    xpReward: 120,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-4-7',
    slug: 'process-priority',
    title: { es: 'Prioridad de Procesos: nice y renice', en: 'Process Priority: nice and renice' },
    description: { es: 'Ajusta la prioridad de ejecución de procesos', en: 'Adjust process execution priority' },
    duration: 25,
    xpReward: 120,
    order: 7,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level4Labs: Lab[] = [
  {
    id: 'lab-4-1',
    slug: 'process-detective',
    title: { es: 'Detective de Procesos', en: 'Process Detective' },
    description: { es: 'Investiga qué procesos consumen más recursos', en: 'Investigate which processes consume most resources' },
    difficulty: 'intermediate',
    duration: 35,
    xpReward: 280,
    objectives: [
      { es: 'Identificar los 5 procesos que más CPU usan', en: 'Identify top 5 CPU-consuming processes' },
      { es: 'Encontrar procesos que más memoria consumen', en: 'Find most memory-consuming processes' },
      { es: 'Identificar procesos zombie si existen', en: 'Identify zombie processes if any' },
      { es: 'Documentar hallazgos', en: 'Document findings' }
    ],
    tools: ['ps', 'top', 'htop', 'grep'],
    validationCriteria: [
      { type: 'COMMAND_EXECUTED', value: 'ps aux --sort' },
      { type: 'COMMAND_EXECUTED', value: 'top -b -n 1' },
      { type: 'FILE_CREATED', value: 'process_report.txt' }
    ]
  },
  {
    id: 'lab-4-2',
    slug: 'process-control',
    title: { es: 'Control de Procesos', en: 'Process Control' },
    description: { es: 'Practica enviando señales y controlando procesos', en: 'Practice sending signals and controlling processes' },
    difficulty: 'intermediate',
    duration: 40,
    xpReward: 320,
    objectives: [
      { es: 'Ejecutar un proceso en background', en: 'Run a process in background' },
      { es: 'Moverlo a foreground y viceversa', en: 'Move it to foreground and back' },
      { es: 'Pausar y reanudar un proceso', en: 'Pause and resume a process' },
      { es: 'Terminar procesos con diferentes señales', en: 'Terminate processes with different signals' }
    ],
    tools: ['&', 'bg', 'fg', 'jobs', 'kill', 'nohup'],
    validationCriteria: [
      { type: 'COMMAND_EXECUTED', value: 'bg' },
      { type: 'COMMAND_EXECUTED', value: 'fg' },
      { type: 'COMMAND_EXECUTED', value: 'kill -STOP' }
    ]
  }
];

export const level4Exam: Exam = {
  passingScore: 80,
  timeLimit: 25,
  questions: [
    {
      id: 'exam-4-1',
      question: { es: '¿Qué señal envía kill por defecto?', en: 'What signal does kill send by default?' },
      options: [
        { id: 'a', text: { es: 'SIGKILL (9)', en: 'SIGKILL (9)' } },
        { id: 'b', text: { es: 'SIGTERM (15)', en: 'SIGTERM (15)' } },
        { id: 'c', text: { es: 'SIGHUP (1)', en: 'SIGHUP (1)' } },
        { id: 'd', text: { es: 'SIGINT (2)', en: 'SIGINT (2)' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'kill envía SIGTERM (15) por defecto, que pide al proceso terminar limpiamente. SIGKILL (9) fuerza la terminación.', en: 'kill sends SIGTERM (15) by default, which asks the process to terminate cleanly. SIGKILL (9) forces termination.' }
    },
    {
      id: 'exam-4-2',
      question: { es: '¿Qué hace el comando "command &"?', en: 'What does the command "command &" do?' },
      options: [
        { id: 'a', text: { es: 'Ejecuta el comando como root', en: 'Runs the command as root' } },
        { id: 'b', text: { es: 'Ejecuta el comando en background', en: 'Runs the command in background' } },
        { id: 'c', text: { es: 'Repite el comando', en: 'Repeats the command' } },
        { id: 'd', text: { es: 'Pausa el comando', en: 'Pauses the command' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'El & al final ejecuta el proceso en segundo plano, liberando la terminal.', en: 'The & at the end runs the process in background, freeing the terminal.' }
    },
    {
      id: 'exam-4-3',
      question: { es: '¿Qué muestra "ps aux"?', en: 'What does "ps aux" show?' },
      options: [
        { id: 'a', text: { es: 'Solo procesos del usuario actual', en: 'Only current user processes' } },
        { id: 'b', text: { es: 'Todos los procesos del sistema con detalles', en: 'All system processes with details' } },
        { id: 'c', text: { es: 'Solo procesos en background', en: 'Only background processes' } },
        { id: 'd', text: { es: 'Procesos ordenados por CPU', en: 'Processes sorted by CPU' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'a=todos los usuarios, u=formato orientado a usuario, x=incluir procesos sin terminal.', en: 'a=all users, u=user-oriented format, x=include processes without terminal.' }
    },
    {
      id: 'exam-4-4',
      question: { es: '¿Cuál es la diferencia entre SIGTERM y SIGKILL?', en: 'What is the difference between SIGTERM and SIGKILL?' },
      options: [
        { id: 'a', text: { es: 'SIGTERM puede ignorarse, SIGKILL no', en: 'SIGTERM can be ignored, SIGKILL cannot' } },
        { id: 'b', text: { es: 'Son exactamente iguales', en: 'They are exactly the same' } },
        { id: 'c', text: { es: 'SIGKILL es más lento', en: 'SIGKILL is slower' } },
        { id: 'd', text: { es: 'SIGTERM requiere sudo', en: 'SIGTERM requires sudo' } }
      ],
      correctAnswer: 'a',
      explanation: { es: 'SIGTERM permite al proceso hacer limpieza antes de terminar. SIGKILL termina inmediatamente sin posibilidad de ignorar.', en: 'SIGTERM allows the process to clean up before terminating. SIGKILL terminates immediately without possibility of ignoring.' }
    },
    {
      id: 'exam-4-5',
      question: { es: '¿Qué comando muestra información de memoria?', en: 'What command shows memory information?' },
      options: [
        { id: 'a', text: { es: 'mem', en: 'mem' } },
        { id: 'b', text: { es: 'free', en: 'free' } },
        { id: 'c', text: { es: 'memory', en: 'memory' } },
        { id: 'd', text: { es: 'ram', en: 'ram' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'free muestra la memoria total, usada y disponible del sistema. Usa free -h para formato legible.', en: 'free shows total, used and available system memory. Use free -h for human-readable format.' }
    },
    {
      id: 'exam-4-6',
      question: { es: '¿Qué es un proceso zombie?', en: 'What is a zombie process?' },
      options: [
        { id: 'a', text: { es: 'Un proceso que consume mucha memoria', en: 'A process that consumes lots of memory' } },
        { id: 'b', text: { es: 'Un proceso que terminó pero su padre no leyó su exit status', en: 'A process that finished but parent hasn\'t read its exit status' } },
        { id: 'c', text: { es: 'Un proceso en background', en: 'A background process' } },
        { id: 'd', text: { es: 'Un proceso de root', en: 'A root process' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'Un zombie es un proceso terminado cuyo padre no ha llamado wait(). Aparece como Z en ps.', en: 'A zombie is a terminated process whose parent hasn\'t called wait(). It appears as Z in ps.' }
    },
    {
      id: 'exam-4-7',
      question: { es: '¿Cómo pausas un proceso en foreground?', en: 'How do you pause a foreground process?' },
      options: [
        { id: 'a', text: { es: 'Ctrl+C', en: 'Ctrl+C' } },
        { id: 'b', text: { es: 'Ctrl+Z', en: 'Ctrl+Z' } },
        { id: 'c', text: { es: 'Ctrl+D', en: 'Ctrl+D' } },
        { id: 'd', text: { es: 'Ctrl+P', en: 'Ctrl+P' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'Ctrl+Z envía SIGTSTP que pausa el proceso. Ctrl+C envía SIGINT que lo termina.', en: 'Ctrl+Z sends SIGTSTP which pauses the process. Ctrl+C sends SIGINT which terminates it.' }
    },
    {
      id: 'exam-4-8',
      question: { es: '¿Qué hace nohup?', en: 'What does nohup do?' },
      options: [
        { id: 'a', text: { es: 'Ejecuta comandos más rápido', en: 'Runs commands faster' } },
        { id: 'b', text: { es: 'Permite que el proceso continúe después de cerrar la terminal', en: 'Allows process to continue after closing terminal' } },
        { id: 'c', text: { es: 'Ejecuta comandos sin output', en: 'Runs commands without output' } },
        { id: 'd', text: { es: 'Previene que el proceso use CPU', en: 'Prevents process from using CPU' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'nohup (no hang up) hace que el proceso ignore SIGHUP, permitiendo que continúe aunque cierres la sesión.', en: 'nohup (no hang up) makes the process ignore SIGHUP, allowing it to continue even if you close the session.' }
    }
  ]
};

export const level4Skills: Skill[] = [
  { id: 'skill-processes', name: { es: 'Gestión de Procesos', en: 'Process Management' }, description: { es: 'Monitorear y controlar procesos', en: 'Monitor and control processes' }, icon: 'activity' },
  { id: 'skill-signals', name: { es: 'Señales Unix', en: 'Unix Signals' }, description: { es: 'Enviar señales a procesos', en: 'Send signals to processes' }, icon: 'zap' },
  { id: 'skill-resources', name: { es: 'Recursos del Sistema', en: 'System Resources' }, description: { es: 'Monitorear CPU, memoria y disco', en: 'Monitor CPU, memory and disk' }, icon: 'cpu' },
  { id: 'skill-jobs', name: { es: 'Control de Jobs', en: 'Job Control' }, description: { es: 'Background, foreground y nohup', en: 'Background, foreground and nohup' }, icon: 'layers' }
];

export const level4Module: Module = {
  id: 'level-4',
  slug: 'processes-system',
  title: { es: 'Procesos y Sistema', en: 'Processes and System' },
  description: { es: 'Aprende a monitorear, controlar y gestionar procesos y recursos del sistema', en: 'Learn to monitor, control and manage processes and system resources' },
  icon: 'activity',
  color: '#EF4444',
  level: 4,
  order: 4,
  estimatedHours: 6,
  prerequisites: ['level-3'],
  skills: level4Skills,
  lessons: level4Lessons,
  labs: level4Labs,
  exam: level4Exam
};
