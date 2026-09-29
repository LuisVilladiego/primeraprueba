import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level10Lessons: Lesson[] = [
  {
    id: 'lesson-10-1',
    slug: 'systemd-intro',
    title: { es: 'Introducción a systemd', en: 'Introduction to systemd' },
    description: { es: 'Qué es systemd, units, y arquitectura básica', en: 'What is systemd, units, and basic architecture' },
    duration: 35,
    xpReward: 160,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-10-2',
    slug: 'systemctl-basics',
    title: { es: 'Control de Servicios con systemctl', en: 'Service Control with systemctl' },
    description: { es: 'start, stop, restart, enable, disable, status', en: 'start, stop, restart, enable, disable, status' },
    duration: 40,
    xpReward: 180,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-10-3',
    slug: 'service-files',
    title: { es: 'Archivos de Servicio .service', en: 'Service Files .service' },
    description: { es: 'Crea y configura tus propios servicios', en: 'Create and configure your own services' },
    duration: 45,
    xpReward: 200,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-10-4',
    slug: 'journalctl',
    title: { es: 'Logs con journalctl', en: 'Logs with journalctl' },
    description: { es: 'Consulta logs del sistema y servicios', en: 'Query system and service logs' },
    duration: 35,
    xpReward: 160,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-10-5',
    slug: 'timers-cron',
    title: { es: 'Tareas Programadas: timers y cron', en: 'Scheduled Tasks: timers and cron' },
    description: { es: 'Programa tareas automáticas con systemd timers y crontab', en: 'Schedule automatic tasks with systemd timers and crontab' },
    duration: 40,
    xpReward: 180,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-10-6',
    slug: 'boot-targets',
    title: { es: 'Targets y Boot', en: 'Targets and Boot' },
    description: { es: 'Niveles de ejecución, targets y proceso de arranque', en: 'Runlevels, targets and boot process' },
    duration: 30,
    xpReward: 140,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level10Labs: Lab[] = [
  {
    id: 'lab-10-1',
    slug: 'create-service',
    title: { es: 'Crear un Servicio Personalizado', en: 'Create a Custom Service' },
    description: { es: 'Crea un servicio systemd desde cero', en: 'Create a systemd service from scratch' },
    difficulty: 'intermediate',
    duration: 50,
    xpReward: 450,
    objectives: [
      { es: 'Escribir el script del servicio', en: 'Write the service script' },
      { es: 'Crear el archivo .service', en: 'Create the .service file' },
      { es: 'Habilitar e iniciar el servicio', en: 'Enable and start the service' },
      { es: 'Verificar logs del servicio', en: 'Verify service logs' }
    ],
    tools: ['systemctl', 'journalctl'],
    validationCriteria: [
      { type: 'FILE_CREATED', value: '/etc/systemd/system/mi-servicio.service' },
      { type: 'SERVICE_RUNNING', value: 'mi-servicio' },
      { type: 'COMMAND_EXECUTED', value: 'systemctl status mi-servicio' }
    ]
  },
  {
    id: 'lab-10-2',
    slug: 'scheduled-tasks',
    title: { es: 'Configurar Tareas Programadas', en: 'Configure Scheduled Tasks' },
    description: { es: 'Implementa backup automatizado con cron o timer', en: 'Implement automated backup with cron or timer' },
    difficulty: 'intermediate',
    duration: 40,
    xpReward: 380,
    objectives: [
      { es: 'Crear script de backup', en: 'Create backup script' },
      { es: 'Configurar crontab o systemd timer', en: 'Configure crontab or systemd timer' },
      { es: 'Verificar ejecución programada', en: 'Verify scheduled execution' },
      { es: 'Revisar logs de ejecución', en: 'Review execution logs' }
    ],
    tools: ['crontab', 'systemctl'],
    validationCriteria: [
      { type: 'CRON_ENTRY_EXISTS', value: 'backup' },
      { type: 'FILE_CREATED', value: 'backup.sh' }
    ]
  }
];

export const level10Exam: Exam = {
  passingScore: 80,
  timeLimit: 25,
  questions: [
    {
      id: 'exam-10-1',
      question: { es: '¿Qué hace "systemctl enable nginx"?', en: 'What does "systemctl enable nginx" do?' },
      options: [
        { id: 'a', text: { es: 'Inicia nginx inmediatamente', en: 'Starts nginx immediately' } },
        { id: 'b', text: { es: 'Configura nginx para iniciar en el boot', en: 'Configures nginx to start on boot' } },
        { id: 'c', text: { es: 'Instala nginx', en: 'Installs nginx' } },
        { id: 'd', text: { es: 'Muestra el estado de nginx', en: 'Shows nginx status' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'enable crea un symlink para que el servicio inicie automáticamente. start lo inicia ahora.', en: 'enable creates a symlink so the service starts automatically. start starts it now.' }
    },
    {
      id: 'exam-10-2',
      question: { es: '¿Cómo ves los últimos logs de un servicio?', en: 'How do you view the latest logs of a service?' },
      options: [
        { id: 'a', text: { es: 'systemctl logs nginx', en: 'systemctl logs nginx' } },
        { id: 'b', text: { es: 'journalctl -u nginx -f', en: 'journalctl -u nginx -f' } },
        { id: 'c', text: { es: 'cat /var/log/nginx', en: 'cat /var/log/nginx' } },
        { id: 'd', text: { es: 'showlog nginx', en: 'showlog nginx' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'journalctl -u filtra por unidad, -f sigue en tiempo real (como tail -f).', en: 'journalctl -u filters by unit, -f follows in real time (like tail -f).' }
    },
    {
      id: 'exam-10-3',
      question: { es: '¿Dónde se colocan los archivos .service personalizados?', en: 'Where are custom .service files placed?' },
      options: [
        { id: 'a', text: { es: '/usr/lib/systemd/system/', en: '/usr/lib/systemd/system/' } },
        { id: 'b', text: { es: '/etc/systemd/system/', en: '/etc/systemd/system/' } },
        { id: 'c', text: { es: '/var/systemd/', en: '/var/systemd/' } },
        { id: 'd', text: { es: '/home/services/', en: '/home/services/' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '/etc/systemd/system/ es para servicios creados por el admin. /usr/lib/systemd/system/ es para paquetes.', en: '/etc/systemd/system/ is for admin-created services. /usr/lib/systemd/system/ is for packages.' }
    },
    {
      id: 'exam-10-4',
      question: { es: '¿Qué comando recarga la configuración de systemd?', en: 'What command reloads systemd configuration?' },
      options: [
        { id: 'a', text: { es: 'systemctl refresh', en: 'systemctl refresh' } },
        { id: 'b', text: { es: 'systemctl reload', en: 'systemctl reload' } },
        { id: 'c', text: { es: 'systemctl daemon-reload', en: 'systemctl daemon-reload' } },
        { id: 'd', text: { es: 'systemd restart', en: 'systemd restart' } }
      ],
      correctAnswer: 'c',
      explanation: { es: 'daemon-reload recarga los archivos de unidad. reload recarga la config de un servicio específico.', en: 'daemon-reload reloads unit files. reload reloads config of a specific service.' }
    },
    {
      id: 'exam-10-5',
      question: { es: '¿Cómo editas el crontab del usuario actual?', en: 'How do you edit the current user crontab?' },
      options: [
        { id: 'a', text: { es: 'cron edit', en: 'cron edit' } },
        { id: 'b', text: { es: 'crontab -e', en: 'crontab -e' } },
        { id: 'c', text: { es: 'vi /etc/crontab', en: 'vi /etc/crontab' } },
        { id: 'd', text: { es: 'edit cron', en: 'edit cron' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'crontab -e edita el crontab del usuario. -l lista, -r elimina.', en: 'crontab -e edits user crontab. -l lists, -r removes.' }
    },
    {
      id: 'exam-10-6',
      question: { es: '¿Qué significa "0 5 * * * /script.sh" en cron?', en: 'What does "0 5 * * * /script.sh" mean in cron?' },
      options: [
        { id: 'a', text: { es: 'Cada 5 minutos', en: 'Every 5 minutes' } },
        { id: 'b', text: { es: 'A las 5:00 AM todos los días', en: 'At 5:00 AM every day' } },
        { id: 'c', text: { es: 'El día 5 de cada mes', en: 'On the 5th of each month' } },
        { id: 'd', text: { es: 'Cada 5 horas', en: 'Every 5 hours' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'Formato: minuto hora día-mes mes día-semana. 0 5 * * * = minuto 0, hora 5, todos los días.', en: 'Format: minute hour day-month month day-week. 0 5 * * * = minute 0, hour 5, every day.' }
    },
    {
      id: 'exam-10-7',
      question: { es: '¿Qué target de systemd es el equivalente al runlevel 3?', en: 'What systemd target is equivalent to runlevel 3?' },
      options: [
        { id: 'a', text: { es: 'graphical.target', en: 'graphical.target' } },
        { id: 'b', text: { es: 'multi-user.target', en: 'multi-user.target' } },
        { id: 'c', text: { es: 'rescue.target', en: 'rescue.target' } },
        { id: 'd', text: { es: 'emergency.target', en: 'emergency.target' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'multi-user.target = runlevel 3 (multiusuario sin GUI). graphical.target = runlevel 5 (con GUI).', en: 'multi-user.target = runlevel 3 (multiuser without GUI). graphical.target = runlevel 5 (with GUI).' }
    }
  ]
};

export const level10Skills: Skill[] = [
  { id: 'skill-systemd', name: { es: 'systemd', en: 'systemd' }, description: { es: 'Gestión de servicios con systemd', en: 'Service management with systemd' }, icon: 'settings' },
  { id: 'skill-journalctl', name: { es: 'Logs', en: 'Logs' }, description: { es: 'Consultar logs con journalctl', en: 'Query logs with journalctl' }, icon: 'file-text' },
  { id: 'skill-cron', name: { es: 'Tareas Programadas', en: 'Scheduled Tasks' }, description: { es: 'Automatizar tareas con cron y timers', en: 'Automate tasks with cron and timers' }, icon: 'clock' },
  { id: 'skill-boot', name: { es: 'Proceso de Arranque', en: 'Boot Process' }, description: { es: 'Entender y configurar el boot', en: 'Understand and configure boot' }, icon: 'power' }
];

export const level10Module: Module = {
  id: 'level-10',
  slug: 'services-systemd',
  title: { es: 'Servicios y systemd', en: 'Services and systemd' },
  description: { es: 'Domina la gestión de servicios, logs del sistema y tareas programadas con systemd y cron', en: 'Master service management, system logs and scheduled tasks with systemd and cron' },
  icon: 'settings',
  color: '#6366F1',
  level: 10,
  order: 10,
  estimatedHours: 7,
  prerequisites: ['level-9'],
  skills: level10Skills,
  lessons: level10Lessons,
  labs: level10Labs,
  exam: level10Exam
};
