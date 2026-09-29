import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level9Lessons: Lesson[] = [
  {
    id: 'lesson-9-1',
    slug: 'networking-basics',
    title: { es: 'Fundamentos de Redes', en: 'Networking Basics' },
    description: { es: 'IP, subredes, puertos, protocolos TCP/UDP', en: 'IP, subnets, ports, TCP/UDP protocols' },
    duration: 40,
    xpReward: 180,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-9-2',
    slug: 'network-interfaces',
    title: { es: 'Interfaces de Red: ip, ifconfig', en: 'Network Interfaces: ip, ifconfig' },
    description: { es: 'Configura y administra interfaces de red', en: 'Configure and manage network interfaces' },
    duration: 35,
    xpReward: 160,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-9-3',
    slug: 'connectivity-tools',
    title: { es: 'Herramientas de Conectividad: ping, traceroute', en: 'Connectivity Tools: ping, traceroute' },
    description: { es: 'Diagnostica problemas de conectividad', en: 'Diagnose connectivity problems' },
    duration: 30,
    xpReward: 140,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-9-4',
    slug: 'dns-tools',
    title: { es: 'DNS: nslookup, dig, host', en: 'DNS: nslookup, dig, host' },
    description: { es: 'Consulta y diagnostica DNS', en: 'Query and diagnose DNS' },
    duration: 30,
    xpReward: 140,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-9-5',
    slug: 'netstat-ss',
    title: { es: 'Puertos y Conexiones: ss, netstat', en: 'Ports and Connections: ss, netstat' },
    description: { es: 'Monitorea puertos abiertos y conexiones activas', en: 'Monitor open ports and active connections' },
    duration: 35,
    xpReward: 160,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-9-6',
    slug: 'curl-wget',
    title: { es: 'Transferencia de Datos: curl, wget', en: 'Data Transfer: curl, wget' },
    description: { es: 'Descarga archivos y trabaja con APIs', en: 'Download files and work with APIs' },
    duration: 35,
    xpReward: 160,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-9-7',
    slug: 'network-config-files',
    title: { es: 'Archivos de Configuración de Red', en: 'Network Configuration Files' },
    description: { es: '/etc/hosts, /etc/resolv.conf, netplan', en: '/etc/hosts, /etc/resolv.conf, netplan' },
    duration: 30,
    xpReward: 140,
    order: 7,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level9Labs: Lab[] = [
  {
    id: 'lab-9-1',
    slug: 'network-troubleshooting',
    title: { es: 'Troubleshooting de Red', en: 'Network Troubleshooting' },
    description: { es: 'Diagnostica y resuelve problemas comunes de red', en: 'Diagnose and solve common network problems' },
    difficulty: 'intermediate',
    duration: 45,
    xpReward: 400,
    objectives: [
      { es: 'Verificar configuración de interfaces', en: 'Verify interface configuration' },
      { es: 'Diagnosticar problemas de DNS', en: 'Diagnose DNS problems' },
      { es: 'Verificar conectividad con hosts remotos', en: 'Verify connectivity with remote hosts' },
      { es: 'Identificar puertos en uso', en: 'Identify ports in use' }
    ],
    tools: ['ip', 'ping', 'dig', 'ss', 'traceroute'],
    validationCriteria: [
      { type: 'COMMAND_EXECUTED', value: 'ip addr' },
      { type: 'COMMAND_EXECUTED', value: 'dig' },
      { type: 'COMMAND_EXECUTED', value: 'ss -tuln' }
    ]
  }
];

export const level9Exam: Exam = {
  passingScore: 75,
  timeLimit: 25,
  questions: [
    {
      id: 'exam-9-1',
      question: { es: '¿Qué muestra "ip addr"?', en: 'What does "ip addr" show?' },
      options: [
        { id: 'a', text: { es: 'Tabla de rutas', en: 'Routing table' } },
        { id: 'b', text: { es: 'Interfaces de red con sus direcciones IP', en: 'Network interfaces with their IP addresses' } },
        { id: 'c', text: { es: 'Conexiones activas', en: 'Active connections' } },
        { id: 'd', text: { es: 'Puertos abiertos', en: 'Open ports' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'ip addr muestra todas las interfaces de red con sus IPs, MACs y estados.', en: 'ip addr shows all network interfaces with their IPs, MACs and states.' }
    },
    {
      id: 'exam-9-2',
      question: { es: '¿Qué hace ping?', en: 'What does ping do?' },
      options: [
        { id: 'a', text: { es: 'Envía paquetes ICMP Echo para probar conectividad', en: 'Sends ICMP Echo packets to test connectivity' } },
        { id: 'b', text: { es: 'Muestra puertos abiertos', en: 'Shows open ports' } },
        { id: 'c', text: { es: 'Configura la red', en: 'Configures network' } },
        { id: 'd', text: { es: 'Descarga archivos', en: 'Downloads files' } }
      ],
      correctAnswer: 'a',
      explanation: { es: 'ping envía paquetes ICMP Echo Request y espera Echo Reply, midiendo latencia y pérdida de paquetes.', en: 'ping sends ICMP Echo Request packets and waits for Echo Reply, measuring latency and packet loss.' }
    },
    {
      id: 'exam-9-3',
      question: { es: '¿Cuál es la diferencia entre TCP y UDP?', en: 'What is the difference between TCP and UDP?' },
      options: [
        { id: 'a', text: { es: 'TCP es más rápido', en: 'TCP is faster' } },
        { id: 'b', text: { es: 'TCP garantiza entrega ordenada, UDP no', en: 'TCP guarantees ordered delivery, UDP does not' } },
        { id: 'c', text: { es: 'UDP es más seguro', en: 'UDP is more secure' } },
        { id: 'd', text: { es: 'No hay diferencia', en: 'There is no difference' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'TCP establece conexión y garantiza entrega ordenada. UDP es más rápido pero sin garantías (usado en streaming, DNS).', en: 'TCP establishes connection and guarantees ordered delivery. UDP is faster but without guarantees (used in streaming, DNS).' }
    },
    {
      id: 'exam-9-4',
      question: { es: '¿Qué archivo configura los servidores DNS?', en: 'What file configures DNS servers?' },
      options: [
        { id: 'a', text: { es: '/etc/hosts', en: '/etc/hosts' } },
        { id: 'b', text: { es: '/etc/resolv.conf', en: '/etc/resolv.conf' } },
        { id: 'c', text: { es: '/etc/dns.conf', en: '/etc/dns.conf' } },
        { id: 'd', text: { es: '/etc/network', en: '/etc/network' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '/etc/resolv.conf contiene nameserver con las IPs de los servidores DNS a usar.', en: '/etc/resolv.conf contains nameserver with DNS server IPs to use.' }
    },
    {
      id: 'exam-9-5',
      question: { es: '¿Qué comando muestra puertos TCP en escucha?', en: 'What command shows listening TCP ports?' },
      options: [
        { id: 'a', text: { es: 'ss -tuln', en: 'ss -tuln' } },
        { id: 'b', text: { es: 'port -l', en: 'port -l' } },
        { id: 'c', text: { es: 'show ports', en: 'show ports' } },
        { id: 'd', text: { es: 'netinfo', en: 'netinfo' } }
      ],
      correctAnswer: 'a',
      explanation: { es: 'ss -tuln: t=TCP, u=UDP, l=listening, n=numérico. También funciona netstat -tuln.', en: 'ss -tuln: t=TCP, u=UDP, l=listening, n=numeric. Also works netstat -tuln.' }
    },
    {
      id: 'exam-9-6',
      question: { es: '¿Cuál es el puerto por defecto de SSH?', en: 'What is the default SSH port?' },
      options: [
        { id: 'a', text: { es: '80', en: '80' } },
        { id: 'b', text: { es: '443', en: '443' } },
        { id: 'c', text: { es: '22', en: '22' } },
        { id: 'd', text: { es: '21', en: '21' } }
      ],
      correctAnswer: 'c',
      explanation: { es: 'SSH usa puerto 22 por defecto. 80=HTTP, 443=HTTPS, 21=FTP.', en: 'SSH uses port 22 by default. 80=HTTP, 443=HTTPS, 21=FTP.' }
    }
  ]
};

export const level9Skills: Skill[] = [
  { id: 'skill-ip', name: { es: 'Configuración IP', en: 'IP Configuration' }, description: { es: 'Configurar interfaces de red', en: 'Configure network interfaces' }, icon: 'network' },
  { id: 'skill-diagnostics', name: { es: 'Diagnóstico', en: 'Diagnostics' }, description: { es: 'Troubleshoot problemas de red', en: 'Troubleshoot network problems' }, icon: 'activity' },
  { id: 'skill-dns', name: { es: 'DNS', en: 'DNS' }, description: { es: 'Consultar y configurar DNS', en: 'Query and configure DNS' }, icon: 'globe' },
  { id: 'skill-transfer', name: { es: 'Transferencia', en: 'Transfer' }, description: { es: 'Descargar y subir datos', en: 'Download and upload data' }, icon: 'download' }
];

export const level9Module: Module = {
  id: 'level-9',
  slug: 'networking-basics',
  title: { es: 'Redes Básicas', en: 'Basic Networking' },
  description: { es: 'Aprende los fundamentos de redes, herramientas de diagnóstico y configuración de red en Linux', en: 'Learn networking fundamentals, diagnostic tools and network configuration in Linux' },
  icon: 'wifi',
  color: '#06B6D4',
  level: 9,
  order: 9,
  estimatedHours: 6,
  prerequisites: ['level-8'],
  skills: level9Skills,
  lessons: level9Lessons,
  labs: level9Labs,
  exam: level9Exam
};
