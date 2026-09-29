import type { Lesson } from '../../../../types';

export const lesson2_1: Lesson = {
  id: 'lesson-2-1',
  slug: 'filesystem-hierarchy',
  title: {
    es: 'Jerarquía del Sistema de Archivos (FHS)',
    en: 'Filesystem Hierarchy Standard (FHS)'
  },
  description: {
    es: 'Comprende la estructura de directorios estándar de Linux y el propósito de cada ubicación',
    en: 'Understand the standard Linux directory structure and the purpose of each location'
  },
  duration: 35,
  xpReward: 160,
  order: 1,
  content: [
    {
      type: 'TEXT',
      content: {
        es: `# Jerarquía del Sistema de Archivos (FHS)

En Linux, todo es un archivo. El Filesystem Hierarchy Standard (FHS) define la estructura de directorios estándar utilizada por todas las distribuciones Linux. Conocer esta estructura es fundamental para administrar sistemas y encontrar archivos de configuración, logs y ejecutables.

A diferencia de Windows con sus letras de unidad (C:, D:), Linux tiene una única raíz (/) desde donde cuelga todo el sistema de archivos.`,
        en: `# Filesystem Hierarchy Standard (FHS)

In Linux, everything is a file. The Filesystem Hierarchy Standard (FHS) defines the standard directory structure used by all Linux distributions. Knowing this structure is fundamental for system administration and finding configuration files, logs and executables.

Unlike Windows with its drive letters (C:, D:), Linux has a single root (/) from which the entire filesystem hangs.`
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**La Raíz del Sistema: /**

El directorio raíz \`/\` es el punto de partida de todo el sistema de archivos. Todos los demás directorios y archivos están contenidos aquí, directa o indirectamente.

**Directorios principales de primer nivel:**

\`\`\`
/
├── bin/     → Binarios esenciales de usuario
├── boot/    → Archivos de arranque
├── dev/     → Archivos de dispositivos
├── etc/     → Configuración del sistema
├── home/    → Directorios de usuarios
├── lib/     → Bibliotecas compartidas
├── media/   → Puntos de montaje removibles
├── mnt/     → Puntos de montaje temporales
├── opt/     → Software opcional
├── proc/    → Sistema de archivos virtual del kernel
├── root/    → Home del superusuario
├── run/     → Datos de runtime
├── sbin/    → Binarios del sistema
├── srv/     → Datos de servicios
├── sys/     → Sistema de archivos virtual del kernel
├── tmp/     → Archivos temporales
├── usr/     → Recursos de usuarios (programas)
└── var/     → Datos variables
\`\`\``,
        en: `**The System Root: /**

The root directory \`/\` is the starting point of the entire filesystem. All other directories and files are contained here, directly or indirectly.

**Main first-level directories:**

\`\`\`
/
├── bin/     → Essential user binaries
├── boot/    → Boot files
├── dev/     → Device files
├── etc/     → System configuration
├── home/    → User directories
├── lib/     → Shared libraries
├── media/   → Removable mount points
├── mnt/     → Temporary mount points
├── opt/     → Optional software
├── proc/    → Virtual filesystem for kernel
├── root/    → Superuser's home
├── run/     → Runtime data
├── sbin/    → System binaries
├── srv/     → Service data
├── sys/     → Virtual filesystem for kernel
├── tmp/     → Temporary files
├── usr/     → User resources (programs)
└── var/     → Variable data
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**/bin y /sbin - Binarios Esenciales**

**\`/bin\` - Binarios de usuario:**
Contiene comandos esenciales que todos los usuarios pueden ejecutar, necesarios incluso en modo de rescate:
- \`ls\`, \`cp\`, \`mv\`, \`rm\`, \`cat\`, \`mkdir\`
- \`bash\`, \`sh\` (shells)
- \`grep\`, \`sed\`, \`awk\`

**\`/sbin\` - Binarios del sistema:**
Comandos de administración que normalmente requieren privilegios de root:
- \`fdisk\`, \`mkfs\` (manejo de discos)
- \`ifconfig\`, \`ip\` (red)
- \`init\`, \`shutdown\`, \`reboot\`
- \`mount\`, \`umount\`

**Nota moderna:** En distribuciones recientes, \`/bin\` y \`/sbin\` son enlaces simbólicos a \`/usr/bin\` y \`/usr/sbin\`:
\`\`\`bash
ls -la /bin
# lrwxrwxrwx 1 root root 7 /bin -> usr/bin
\`\`\``,
        en: `**/bin and /sbin - Essential Binaries**

**\`/bin\` - User binaries:**
Contains essential commands all users can run, needed even in rescue mode:
- \`ls\`, \`cp\`, \`mv\`, \`rm\`, \`cat\`, \`mkdir\`
- \`bash\`, \`sh\` (shells)
- \`grep\`, \`sed\`, \`awk\`

**\`/sbin\` - System binaries:**
Administration commands that normally require root privileges:
- \`fdisk\`, \`mkfs\` (disk management)
- \`ifconfig\`, \`ip\` (network)
- \`init\`, \`shutdown\`, \`reboot\`
- \`mount\`, \`umount\`

**Modern note:** In recent distributions, \`/bin\` and \`/sbin\` are symbolic links to \`/usr/bin\` and \`/usr/sbin\`:
\`\`\`bash
ls -la /bin
# lrwxrwxrwx 1 root root 7 /bin -> usr/bin
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**/etc - Configuración del Sistema**

\`/etc\` (Editable Text Configuration) contiene TODA la configuración del sistema en archivos de texto.

**Archivos importantes:**
\`\`\`
/etc/
├── passwd          → Información de usuarios
├── shadow          → Contraseñas encriptadas
├── group           → Definición de grupos
├── hostname        → Nombre del equipo
├── hosts           → Mapeo local de nombres a IPs
├── fstab           → Sistemas de archivos a montar
├── sudoers         → Configuración de sudo
├── ssh/            → Configuración SSH
│   └── sshd_config
├── nginx/          → Config del servidor web
├── systemd/        → Configuración de servicios
└── apt/            → Config del gestor de paquetes (Debian)
    └── sources.list
\`\`\`

**Explorar configuración:**
\`\`\`bash
ls /etc/*.conf      # Archivos de configuración
cat /etc/os-release # Información de la distribución
cat /etc/hostname   # Nombre del equipo
\`\`\``,
        en: `**/etc - System Configuration**

\`/etc\` (Editable Text Configuration) contains ALL system configuration in text files.

**Important files:**
\`\`\`
/etc/
├── passwd          → User information
├── shadow          → Encrypted passwords
├── group           → Group definitions
├── hostname        → Computer name
├── hosts           → Local name to IP mapping
├── fstab           → Filesystems to mount
├── sudoers         → Sudo configuration
├── ssh/            → SSH configuration
│   └── sshd_config
├── nginx/          → Web server config
├── systemd/        → Service configuration
└── apt/            → Package manager config (Debian)
    └── sources.list
\`\`\`

**Explore configuration:**
\`\`\`bash
ls /etc/*.conf      # Configuration files
cat /etc/os-release # Distribution information
cat /etc/hostname   # Computer name
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**/var - Datos Variables**

\`/var\` contiene datos que cambian frecuentemente durante la operación normal:

\`\`\`
/var/
├── log/            → Archivos de registro
│   ├── syslog      → Log general del sistema
│   ├── auth.log    → Autenticación
│   ├── kern.log    → Mensajes del kernel
│   └── nginx/      → Logs de aplicaciones
├── cache/          → Caché de aplicaciones
├── lib/            → Estado de aplicaciones
│   └── apt/        → Paquetes descargados
├── mail/           → Correo local
├── spool/          → Colas de impresión, cron
├── tmp/            → Temporales persistentes
└── www/            → Archivos web (Apache/Nginx)
\`\`\`

**Comandos útiles:**
\`\`\`bash
ls -la /var/log/               # Ver todos los logs
tail -f /var/log/syslog        # Seguir log en tiempo real
du -sh /var/cache/*            # Tamaño de cachés
\`\`\``,
        en: `**/var - Variable Data**

\`/var\` contains data that changes frequently during normal operation:

\`\`\`
/var/
├── log/            → Log files
│   ├── syslog      → General system log
│   ├── auth.log    → Authentication
│   ├── kern.log    → Kernel messages
│   └── nginx/      → Application logs
├── cache/          → Application cache
├── lib/            → Application state
│   └── apt/        → Downloaded packages
├── mail/           → Local mail
├── spool/          → Print, cron queues
├── tmp/            → Persistent temporaries
└── www/            → Web files (Apache/Nginx)
\`\`\`

**Useful commands:**
\`\`\`bash
ls -la /var/log/               # View all logs
tail -f /var/log/syslog        # Follow log in real time
du -sh /var/cache/*            # Cache sizes
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**/usr - Recursos de Usuario**

\`/usr\` (Unix System Resources) contiene la mayoría de los programas y datos de solo lectura:

\`\`\`
/usr/
├── bin/            → Programas de usuario (la mayoría)
├── sbin/           → Programas de administración
├── lib/            → Bibliotecas
├── lib64/          → Bibliotecas 64-bit
├── include/        → Headers de C/C++
├── local/          → Software instalado localmente
│   ├── bin/
│   ├── lib/
│   └── share/
├── share/          → Datos compartidos
│   ├── doc/        → Documentación
│   ├── man/        → Páginas de manual
│   └── icons/      → Iconos
└── src/            → Código fuente (kernel)
\`\`\`

**¿Por qué /usr/local?**
\`/usr/local\` es para software compilado manualmente o no gestionado por el gestor de paquetes. Tiene su propia estructura bin/lib/share.`,
        en: `**/usr - User Resources**

\`/usr\` (Unix System Resources) contains most read-only programs and data:

\`\`\`
/usr/
├── bin/            → User programs (most of them)
├── sbin/           → Administration programs
├── lib/            → Libraries
├── lib64/          → 64-bit libraries
├── include/        → C/C++ headers
├── local/          → Locally installed software
│   ├── bin/
│   ├── lib/
│   └── share/
├── share/          → Shared data
│   ├── doc/        → Documentation
│   ├── man/        → Manual pages
│   └── icons/      → Icons
└── src/            → Source code (kernel)
\`\`\`

**Why /usr/local?**
\`/usr/local\` is for manually compiled software or not managed by the package manager. It has its own bin/lib/share structure.`
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**/home y /root - Directorios de Usuario**

**\`/home\` - Usuarios regulares:**
Cada usuario tiene su directorio personal en /home:
\`\`\`
/home/
├── usuario1/
│   ├── Documents/
│   ├── Downloads/
│   ├── .bashrc       → Configuración de bash
│   ├── .ssh/         → Claves SSH
│   └── .config/      → Config de aplicaciones
└── usuario2/
\`\`\`

**\`/root\` - Superusuario:**
El directorio home del usuario root está separado por seguridad:
\`\`\`bash
# /root está en la partición raíz
# /home puede estar en otra partición
# Si /home no monta, root aún puede acceder
\`\`\`

**Variable HOME:**
\`\`\`bash
echo $HOME           # /home/tu_usuario
cd ~                 # Ir a home
cd ~/Documents       # Subdir del home
\`\`\``,
        en: `**/home and /root - User Directories**

**\`/home\` - Regular users:**
Each user has their personal directory in /home:
\`\`\`
/home/
├── user1/
│   ├── Documents/
│   ├── Downloads/
│   ├── .bashrc       → Bash configuration
│   ├── .ssh/         → SSH keys
│   └── .config/      → Application config
└── user2/
\`\`\`

**\`/root\` - Superuser:**
The root user's home directory is separate for security:
\`\`\`bash
# /root is on the root partition
# /home can be on another partition
# If /home doesn't mount, root can still access
\`\`\`

**HOME variable:**
\`\`\`bash
echo $HOME           # /home/your_user
cd ~                 # Go to home
cd ~/Documents       # Home subdir
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**/dev, /proc, /sys - Sistemas Virtuales**

Estos directorios no contienen archivos reales en disco:

**\`/dev\` - Dispositivos:**
Cada dispositivo de hardware tiene un archivo:
\`\`\`bash
/dev/sda            # Primer disco SATA
/dev/sda1           # Primera partición
/dev/null           # "Agujero negro" (descarta datos)
/dev/zero           # Fuente de ceros
/dev/random         # Generador de números aleatorios
/dev/tty            # Terminal actual
\`\`\`

**\`/proc\` - Información del kernel:**
Sistema de archivos virtual con información de procesos y sistema:
\`\`\`bash
cat /proc/cpuinfo   # Información de CPU
cat /proc/meminfo   # Información de memoria
ls /proc/1234       # Información del proceso 1234
\`\`\`

**\`/sys\` - Configuración del kernel:**
Interfaz para configurar el hardware y kernel en tiempo real:
\`\`\`bash
cat /sys/class/net/eth0/address  # MAC de interfaz de red
\`\`\``,
        en: `**/dev, /proc, /sys - Virtual Systems**

These directories don't contain real files on disk:

**\`/dev\` - Devices:**
Each hardware device has a file:
\`\`\`bash
/dev/sda            # First SATA disk
/dev/sda1           # First partition
/dev/null           # "Black hole" (discards data)
/dev/zero           # Source of zeros
/dev/random         # Random number generator
/dev/tty            # Current terminal
\`\`\`

**\`/proc\` - Kernel information:**
Virtual filesystem with process and system info:
\`\`\`bash
cat /proc/cpuinfo   # CPU information
cat /proc/meminfo   # Memory information
ls /proc/1234       # Process 1234 information
\`\`\`

**\`/sys\` - Kernel configuration:**
Interface to configure hardware and kernel in real time:
\`\`\`bash
cat /sys/class/net/eth0/address  # Network interface MAC
\`\`\``
      }
    },
    {
      type: 'TIP',
      content: {
        es: `**Trucos para Recordar la Estructura**

**Acrónimos útiles:**
- **/etc** = Editable Text Configuration
- **/var** = Variable (datos que cambian)
- **/usr** = Unix System Resources
- **/opt** = Optional (software adicional)
- **/tmp** = Temporary

**Regla general:**
- **Configuración** → /etc
- **Logs** → /var/log
- **Programas** → /usr/bin o /usr/local/bin
- **Tu stuff** → /home/usuario
- **Datos de servicios** → /var o /srv

**Comando tree:**
\`\`\`bash
# Visualizar estructura (instalar si no existe)
sudo apt install tree
tree -L 2 /         # 2 niveles desde raíz
tree -d /etc        # Solo directorios
\`\`\``,
        en: `**Tips to Remember the Structure**

**Useful acronyms:**
- **/etc** = Editable Text Configuration
- **/var** = Variable (data that changes)
- **/usr** = Unix System Resources
- **/opt** = Optional (additional software)
- **/tmp** = Temporary

**General rule:**
- **Configuration** → /etc
- **Logs** → /var/log
- **Programs** → /usr/bin or /usr/local/bin
- **Your stuff** → /home/user
- **Service data** → /var or /srv

**tree command:**
\`\`\`bash
# Visualize structure (install if not present)
sudo apt install tree
tree -L 2 /         # 2 levels from root
tree -d /etc        # Directories only
\`\`\``
      }
    }
  ],
  exercises: [
    {
      id: 'ex-2-1-1',
      type: 'TERMINAL',
      title: { es: 'Explorar Directorios Principales', en: 'Explore Main Directories' },
      description: { es: 'Lista el contenido del directorio /etc y cuenta cuántos archivos .conf hay', en: 'List the contents of /etc directory and count how many .conf files there are' },
      hint: { es: 'ls /etc/*.conf | wc -l', en: 'ls /etc/*.conf | wc -l' },
      validation: { type: 'COMMAND_CONTAINS', expected: '/etc' },
      xpReward: 20
    },
    {
      id: 'ex-2-1-2',
      type: 'TERMINAL',
      title: { es: 'Ver Información del Sistema', en: 'View System Information' },
      description: { es: 'Usa /proc para ver información sobre tu CPU', en: 'Use /proc to view information about your CPU' },
      hint: { es: 'cat /proc/cpuinfo', en: 'cat /proc/cpuinfo' },
      validation: { type: 'COMMAND_OUTPUT', expected: 'model name' },
      xpReward: 15
    },
    {
      id: 'ex-2-1-3',
      type: 'TERMINAL',
      title: { es: 'Verificar Distribución', en: 'Check Distribution' },
      description: { es: 'Lee el archivo que contiene información de tu distribución Linux', en: 'Read the file that contains your Linux distribution information' },
      hint: { es: 'cat /etc/os-release', en: 'cat /etc/os-release' },
      validation: { type: 'COMMAND_CONTAINS', expected: 'os-release' },
      xpReward: 15
    }
  ],
  quiz: {
    questions: [
      {
        id: 'q-2-1-1',
        question: { es: '¿Dónde se almacena la configuración del servidor SSH?', en: 'Where is SSH server configuration stored?' },
        options: [
          { id: 'a', text: { es: '/var/ssh', en: '/var/ssh' } },
          { id: 'b', text: { es: '/etc/ssh', en: '/etc/ssh' } },
          { id: 'c', text: { es: '/usr/ssh', en: '/usr/ssh' } },
          { id: 'd', text: { es: '/home/ssh', en: '/home/ssh' } }
        ],
        correctAnswer: 'b',
        explanation: { es: 'Toda la configuración del sistema va en /etc. SSH específicamente en /etc/ssh/', en: 'All system configuration goes in /etc. SSH specifically in /etc/ssh/' }
      },
      {
        id: 'q-2-1-2',
        question: { es: '¿Qué directorio contiene archivos de dispositivos como /dev/sda?', en: 'Which directory contains device files like /dev/sda?' },
        options: [
          { id: 'a', text: { es: '/device', en: '/device' } },
          { id: 'b', text: { es: '/hardware', en: '/hardware' } },
          { id: 'c', text: { es: '/dev', en: '/dev' } },
          { id: 'd', text: { es: '/sys', en: '/sys' } }
        ],
        correctAnswer: 'c',
        explanation: { es: '/dev contiene archivos especiales que representan dispositivos de hardware.', en: '/dev contains special files that represent hardware devices.' }
      }
    ]
  }
};
