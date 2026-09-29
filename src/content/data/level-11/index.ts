import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level11Lessons: Lesson[] = [
  {
    id: 'lesson-11-1',
    slug: 'ssh-basics',
    title: { es: 'Fundamentos de SSH', en: 'SSH Fundamentals' },
    description: { es: 'Conexión segura a servidores remotos', en: 'Secure connection to remote servers' },
    duration: 35,
    xpReward: 160,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-11-2',
    slug: 'ssh-keys',
    title: { es: 'Autenticación con Claves SSH', en: 'SSH Key Authentication' },
    description: { es: 'Genera y usa pares de claves públicas/privadas', en: 'Generate and use public/private key pairs' },
    duration: 40,
    xpReward: 180,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-11-3',
    slug: 'ssh-config',
    title: { es: 'Configuración de SSH', en: 'SSH Configuration' },
    description: { es: '~/.ssh/config y /etc/ssh/sshd_config', en: '~/.ssh/config and /etc/ssh/sshd_config' },
    duration: 35,
    xpReward: 160,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-11-4',
    slug: 'scp-rsync',
    title: { es: 'Transferencia de Archivos: scp y rsync', en: 'File Transfer: scp and rsync' },
    description: { es: 'Copia archivos de forma segura entre sistemas', en: 'Copy files securely between systems' },
    duration: 35,
    xpReward: 160,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-11-5',
    slug: 'ssh-tunneling',
    title: { es: 'SSH Tunneling y Port Forwarding', en: 'SSH Tunneling and Port Forwarding' },
    description: { es: 'Crea túneles seguros para acceder a servicios', en: 'Create secure tunnels to access services' },
    duration: 40,
    xpReward: 180,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-11-6',
    slug: 'firewall-basics',
    title: { es: 'Firewall: iptables y ufw', en: 'Firewall: iptables and ufw' },
    description: { es: 'Controla el tráfico de red con reglas de firewall', en: 'Control network traffic with firewall rules' },
    duration: 45,
    xpReward: 200,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-11-7',
    slug: 'security-hardening',
    title: { es: 'Hardening Básico de Seguridad', en: 'Basic Security Hardening' },
    description: { es: 'Mejores prácticas para asegurar servidores', en: 'Best practices to secure servers' },
    duration: 40,
    xpReward: 180,
    order: 7,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level11Labs: Lab[] = [
  {
    id: 'lab-11-1',
    slug: 'ssh-setup',
    title: { es: 'Configuración Completa de SSH', en: 'Complete SSH Setup' },
    description: { es: 'Configura acceso SSH seguro con claves', en: 'Configure secure SSH access with keys' },
    difficulty: 'intermediate',
    duration: 45,
    xpReward: 400,
    objectives: [
      { es: 'Generar par de claves SSH', en: 'Generate SSH key pair' },
      { es: 'Configurar authorized_keys', en: 'Configure authorized_keys' },
      { es: 'Deshabilitar login con contraseña', en: 'Disable password login' },
      { es: 'Configurar ~/.ssh/config', en: 'Configure ~/.ssh/config' }
    ],
    tools: ['ssh-keygen', 'ssh-copy-id', 'ssh'],
    validationCriteria: [
      { type: 'FILE_EXISTS', value: '~/.ssh/id_rsa.pub' },
      { type: 'SSH_KEY_AUTH', value: 'enabled' }
    ]
  },
  {
    id: 'lab-11-2',
    slug: 'server-hardening',
    title: { es: 'Hardening de Servidor', en: 'Server Hardening' },
    description: { es: 'Implementa medidas básicas de seguridad', en: 'Implement basic security measures' },
    difficulty: 'advanced',
    duration: 55,
    xpReward: 500,
    objectives: [
      { es: 'Configurar firewall básico', en: 'Configure basic firewall' },
      { es: 'Asegurar configuración SSH', en: 'Secure SSH configuration' },
      { es: 'Configurar fail2ban', en: 'Configure fail2ban' },
      { es: 'Auditar permisos de archivos sensibles', en: 'Audit sensitive file permissions' }
    ],
    tools: ['ufw', 'fail2ban', 'ssh', 'chmod'],
    validationCriteria: [
      { type: 'FIREWALL_ACTIVE', value: 'ufw' },
      { type: 'SERVICE_RUNNING', value: 'fail2ban' }
    ]
  }
];

export const level11Exam: Exam = {
  passingScore: 80,
  timeLimit: 30,
  questions: [
    {
      id: 'exam-11-1',
      question: { es: '¿Qué hace ssh-keygen?', en: 'What does ssh-keygen do?' },
      options: [
        { id: 'a', text: { es: 'Genera un par de claves pública/privada', en: 'Generates a public/private key pair' } },
        { id: 'b', text: { es: 'Inicia el servicio SSH', en: 'Starts the SSH service' } },
        { id: 'c', text: { es: 'Conecta a un servidor', en: 'Connects to a server' } },
        { id: 'd', text: { es: 'Elimina claves existentes', en: 'Deletes existing keys' } }
      ],
      correctAnswer: 'a',
      explanation: { es: 'ssh-keygen crea pares de claves. Por defecto id_rsa (privada) e id_rsa.pub (pública).', en: 'ssh-keygen creates key pairs. By default id_rsa (private) and id_rsa.pub (public).' }
    },
    {
      id: 'exam-11-2',
      question: { es: '¿Dónde se colocan las claves públicas autorizadas?', en: 'Where are authorized public keys placed?' },
      options: [
        { id: 'a', text: { es: '~/.ssh/id_rsa', en: '~/.ssh/id_rsa' } },
        { id: 'b', text: { es: '~/.ssh/authorized_keys', en: '~/.ssh/authorized_keys' } },
        { id: 'c', text: { es: '/etc/ssh/keys', en: '/etc/ssh/keys' } },
        { id: 'd', text: { es: '~/.ssh/config', en: '~/.ssh/config' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'authorized_keys contiene las claves públicas de usuarios que pueden conectarse.', en: 'authorized_keys contains public keys of users who can connect.' }
    },
    {
      id: 'exam-11-3',
      question: { es: '¿Cuál es la diferencia entre scp y rsync?', en: 'What is the difference between scp and rsync?' },
      options: [
        { id: 'a', text: { es: 'rsync puede hacer transferencias incrementales', en: 'rsync can do incremental transfers' } },
        { id: 'b', text: { es: 'scp es más seguro', en: 'scp is more secure' } },
        { id: 'c', text: { es: 'scp es más rápido', en: 'scp is faster' } },
        { id: 'd', text: { es: 'No hay diferencia', en: 'There is no difference' } }
      ],
      correctAnswer: 'a',
      explanation: { es: 'rsync solo transfiere diferencias, ideal para sincronizar grandes directorios. scp copia todo cada vez.', en: 'rsync only transfers differences, ideal for syncing large directories. scp copies everything each time.' }
    },
    {
      id: 'exam-11-4',
      question: { es: '¿Qué hace "ssh -L 8080:localhost:80 server"?', en: 'What does "ssh -L 8080:localhost:80 server" do?' },
      options: [
        { id: 'a', text: { es: 'Abre el puerto 8080 en el servidor', en: 'Opens port 8080 on the server' } },
        { id: 'b', text: { es: 'Crea un túnel: accede al puerto 80 del server via localhost:8080', en: 'Creates a tunnel: access server port 80 via localhost:8080' } },
        { id: 'c', text: { es: 'Bloquea el puerto 80', en: 'Blocks port 80' } },
        { id: 'd', text: { es: 'Lista puertos abiertos', en: 'Lists open ports' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '-L local:remote crea un túnel local. El puerto 8080 local redirige al 80 del servidor.', en: '-L local:remote creates a local tunnel. Local port 8080 redirects to server port 80.' }
    },
    {
      id: 'exam-11-5',
      question: { es: '¿Qué comando habilita el firewall ufw?', en: 'What command enables ufw firewall?' },
      options: [
        { id: 'a', text: { es: 'ufw start', en: 'ufw start' } },
        { id: 'b', text: { es: 'ufw enable', en: 'ufw enable' } },
        { id: 'c', text: { es: 'ufw activate', en: 'ufw activate' } },
        { id: 'd', text: { es: 'systemctl start ufw', en: 'systemctl start ufw' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'ufw enable activa el firewall. ufw disable lo desactiva. ufw status muestra reglas.', en: 'ufw enable activates the firewall. ufw disable deactivates it. ufw status shows rules.' }
    },
    {
      id: 'exam-11-6',
      question: { es: '¿Cómo permites SSH en ufw?', en: 'How do you allow SSH in ufw?' },
      options: [
        { id: 'a', text: { es: 'ufw add ssh', en: 'ufw add ssh' } },
        { id: 'b', text: { es: 'ufw allow ssh', en: 'ufw allow ssh' } },
        { id: 'c', text: { es: 'ufw open 22', en: 'ufw open 22' } },
        { id: 'd', text: { es: 'ufw permit ssh', en: 'ufw permit ssh' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'ufw allow ssh o ufw allow 22 permiten conexiones SSH. Siempre haz esto antes de enable.', en: 'ufw allow ssh or ufw allow 22 permit SSH connections. Always do this before enable.' }
    },
    {
      id: 'exam-11-7',
      question: { es: '¿Qué permisos debe tener ~/.ssh/authorized_keys?', en: 'What permissions should ~/.ssh/authorized_keys have?' },
      options: [
        { id: 'a', text: { es: '777', en: '777' } },
        { id: 'b', text: { es: '644', en: '644' } },
        { id: 'c', text: { es: '600', en: '600' } },
        { id: 'd', text: { es: '755', en: '755' } }
      ],
      correctAnswer: 'c',
      explanation: { es: '600 (solo lectura/escritura para propietario). SSH rechaza claves con permisos demasiado abiertos.', en: '600 (read/write only for owner). SSH rejects keys with permissions too open.' }
    },
    {
      id: 'exam-11-8',
      question: { es: '¿Qué hace fail2ban?', en: 'What does fail2ban do?' },
      options: [
        { id: 'a', text: { es: 'Encripta archivos', en: 'Encrypts files' } },
        { id: 'b', text: { es: 'Bloquea IPs después de intentos fallidos de login', en: 'Blocks IPs after failed login attempts' } },
        { id: 'c', text: { es: 'Detecta virus', en: 'Detects viruses' } },
        { id: 'd', text: { es: 'Acelera conexiones', en: 'Speeds up connections' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'fail2ban monitorea logs y bloquea IPs con muchos intentos fallidos, protegiendo contra fuerza bruta.', en: 'fail2ban monitors logs and blocks IPs with many failed attempts, protecting against brute force.' }
    }
  ]
};

export const level11Skills: Skill[] = [
  { id: 'skill-ssh', name: { es: 'SSH', en: 'SSH' }, description: { es: 'Conexiones seguras remotas', en: 'Secure remote connections' }, icon: 'terminal' },
  { id: 'skill-keys', name: { es: 'Claves SSH', en: 'SSH Keys' }, description: { es: 'Autenticación sin contraseña', en: 'Passwordless authentication' }, icon: 'key' },
  { id: 'skill-firewall', name: { es: 'Firewall', en: 'Firewall' }, description: { es: 'Control de tráfico de red', en: 'Network traffic control' }, icon: 'shield' },
  { id: 'skill-hardening', name: { es: 'Hardening', en: 'Hardening' }, description: { es: 'Asegurar servidores', en: 'Secure servers' }, icon: 'lock' }
];

export const level11Module: Module = {
  id: 'level-11',
  slug: 'ssh-security',
  title: { es: 'SSH y Seguridad', en: 'SSH and Security' },
  description: { es: 'Domina SSH, transferencia segura de archivos, firewall y hardening básico de servidores', en: 'Master SSH, secure file transfer, firewall and basic server hardening' },
  icon: 'shield',
  color: '#DC2626',
  level: 11,
  order: 11,
  estimatedHours: 8,
  prerequisites: ['level-10'],
  skills: level11Skills,
  lessons: level11Lessons,
  labs: level11Labs,
  exam: level11Exam
};
