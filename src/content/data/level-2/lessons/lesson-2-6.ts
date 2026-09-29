import type { Lesson } from '../../../../types';

export const lesson2_6: Lesson = {
  id: 'lesson-2-6',
  slug: 'find-command',
  title: {
    es: 'Búsqueda Avanzada con find',
    en: 'Advanced Search with find'
  },
  description: {
    es: 'Domina el comando más potente para encontrar archivos en Linux',
    en: 'Master the most powerful command to find files in Linux'
  },
  duration: 40,
  xpReward: 180,
  order: 6,
  content: [
    {
      type: 'TEXT',
      content: {
        es: `# El Comando find

\`find\` es el comando más versátil para buscar archivos en Linux. Puede buscar por nombre, tipo, tamaño, fecha, permisos, propietario y muchos más criterios. Además, puede ejecutar acciones sobre los archivos encontrados.

A diferencia de \`locate\` (que usa una base de datos), \`find\` recorre el sistema de archivos en tiempo real, lo que lo hace más lento pero siempre actualizado.`,
        en: `# The find Command

\`find\` is the most versatile command to search for files in Linux. It can search by name, type, size, date, permissions, owner and many more criteria. Additionally, it can execute actions on found files.

Unlike \`locate\` (which uses a database), \`find\` traverses the filesystem in real time, making it slower but always up-to-date.`
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Sintaxis Básica de find**

\`\`\`bash
find [ruta] [expresiones] [acciones]
\`\`\`

**Búsquedas simples por nombre:**
\`\`\`bash
find . -name "archivo.txt"        # Buscar por nombre exacto
find . -iname "archivo.txt"       # Ignorar mayúsculas/minúsculas
find / -name "*.conf"             # Buscar .conf en todo el sistema
find ~ -name "*.pdf"              # Buscar PDFs en home
\`\`\`

**Puntos de inicio comunes:**
\`\`\`bash
find .      # Directorio actual y subdirectorios
find ~      # Home del usuario
find /      # Todo el sistema (lento, requiere permisos)
find /etc   # Solo en /etc
find /home /tmp  # Múltiples directorios
\`\`\`

**Limitar profundidad:**
\`\`\`bash
find . -maxdepth 1 -name "*.txt"  # Solo directorio actual
find . -maxdepth 2 -name "*.txt"  # Actual + 1 nivel
find . -mindepth 2 -name "*.txt"  # Empezar desde nivel 2
\`\`\``,
        en: `**Basic find Syntax**

\`\`\`bash
find [path] [expressions] [actions]
\`\`\`

**Simple name searches:**
\`\`\`bash
find . -name "file.txt"           # Search by exact name
find . -iname "file.txt"          # Ignore case
find / -name "*.conf"             # Search .conf in entire system
find ~ -name "*.pdf"              # Search PDFs in home
\`\`\`

**Common starting points:**
\`\`\`bash
find .      # Current directory and subdirectories
find ~      # User's home
find /      # Entire system (slow, requires permissions)
find /etc   # Only in /etc
find /home /tmp  # Multiple directories
\`\`\`

**Limit depth:**
\`\`\`bash
find . -maxdepth 1 -name "*.txt"  # Only current directory
find . -maxdepth 2 -name "*.txt"  # Current + 1 level
find . -mindepth 2 -name "*.txt"  # Start from level 2
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Buscar por Tipo de Archivo**

La opción \`-type\` filtra por tipo de archivo:

| Tipo | Descripción |
|------|-------------|
| \`f\` | Archivo regular |
| \`d\` | Directorio |
| \`l\` | Enlace simbólico |
| \`b\` | Dispositivo de bloque |
| \`c\` | Dispositivo de caracteres |
| \`p\` | Pipe (FIFO) |
| \`s\` | Socket |

**Ejemplos:**
\`\`\`bash
find . -type f                    # Solo archivos regulares
find . -type d                    # Solo directorios
find . -type l                    # Solo enlaces simbólicos
find . -type f -name "*.py"       # Archivos Python
find /dev -type b                 # Dispositivos de bloque
\`\`\`

**Encontrar directorios vacíos o archivos vacíos:**
\`\`\`bash
find . -type f -empty             # Archivos vacíos (0 bytes)
find . -type d -empty             # Directorios vacíos
\`\`\``,
        en: `**Search by File Type**

The \`-type\` option filters by file type:

| Type | Description |
|------|-------------|
| \`f\` | Regular file |
| \`d\` | Directory |
| \`l\` | Symbolic link |
| \`b\` | Block device |
| \`c\` | Character device |
| \`p\` | Pipe (FIFO) |
| \`s\` | Socket |

**Examples:**
\`\`\`bash
find . -type f                    # Only regular files
find . -type d                    # Only directories
find . -type l                    # Only symbolic links
find . -type f -name "*.py"       # Python files
find /dev -type b                 # Block devices
\`\`\`

**Find empty directories or empty files:**
\`\`\`bash
find . -type f -empty             # Empty files (0 bytes)
find . -type d -empty             # Empty directories
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Buscar por Tamaño**

La opción \`-size\` permite filtrar por tamaño:

**Sufijos de tamaño:**
| Sufijo | Significado |
|--------|-------------|
| \`c\` | Bytes |
| \`k\` | Kilobytes (1024 bytes) |
| \`M\` | Megabytes |
| \`G\` | Gigabytes |

**Modificadores:**
| Símbolo | Significado |
|---------|-------------|
| (ninguno) | Exactamente ese tamaño |
| \`+\` | Mayor que |
| \`-\` | Menor que |

**Ejemplos:**
\`\`\`bash
find . -size 100c                 # Exactamente 100 bytes
find . -size +10M                 # Mayor que 10 MB
find . -size -1k                  # Menor que 1 KB
find . -size +100M -size -1G      # Entre 100MB y 1GB
find /var/log -size +50M          # Logs grandes
\`\`\`

**Encontrar archivos más grandes:**
\`\`\`bash
find / -type f -size +500M 2>/dev/null | head -20
# Archivos mayores a 500MB (ignorar errores de permisos)
\`\`\``,
        en: `**Search by Size**

The \`-size\` option allows filtering by size:

**Size suffixes:**
| Suffix | Meaning |
|--------|---------|
| \`c\` | Bytes |
| \`k\` | Kilobytes (1024 bytes) |
| \`M\` | Megabytes |
| \`G\` | Gigabytes |

**Modifiers:**
| Symbol | Meaning |
|--------|---------|
| (none) | Exactly that size |
| \`+\` | Greater than |
| \`-\` | Less than |

**Examples:**
\`\`\`bash
find . -size 100c                 # Exactly 100 bytes
find . -size +10M                 # Greater than 10 MB
find . -size -1k                  # Less than 1 KB
find . -size +100M -size -1G      # Between 100MB and 1GB
find /var/log -size +50M          # Large logs
\`\`\`

**Find largest files:**
\`\`\`bash
find / -type f -size +500M 2>/dev/null | head -20
# Files larger than 500MB (ignore permission errors)
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Buscar por Tiempo**

find puede buscar por tiempo de modificación, acceso o cambio:

**Opciones de tiempo (en días):**
| Opción | Significado |
|--------|-------------|
| \`-mtime\` | Tiempo de modificación del contenido |
| \`-atime\` | Tiempo de último acceso |
| \`-ctime\` | Tiempo de cambio de metadatos |

**Opciones de tiempo (en minutos):**
| Opción | Significado |
|--------|-------------|
| \`-mmin\` | Minutos desde modificación |
| \`-amin\` | Minutos desde acceso |
| \`-cmin\` | Minutos desde cambio |

**Modificadores:**
| Símbolo | Significado |
|---------|-------------|
| \`-n\` | Menos de n días/minutos |
| \`+n\` | Más de n días/minutos |
| \`n\` | Exactamente n días |

**Ejemplos:**
\`\`\`bash
find . -mtime -1                  # Modificados en últimas 24h
find . -mtime +30                 # No modificados en 30+ días
find . -mmin -60                  # Modificados en última hora
find /var/log -mtime +7 -name "*.log"  # Logs viejos
find . -newer archivo.txt         # Más nuevos que archivo.txt
\`\`\``,
        en: `**Search by Time**

find can search by modification, access or change time:

**Time options (in days):**
| Option | Meaning |
|--------|---------|
| \`-mtime\` | Content modification time |
| \`-atime\` | Last access time |
| \`-ctime\` | Metadata change time |

**Time options (in minutes):**
| Option | Meaning |
|--------|---------|
| \`-mmin\` | Minutes since modification |
| \`-amin\` | Minutes since access |
| \`-cmin\` | Minutes since change |

**Modifiers:**
| Symbol | Meaning |
|--------|---------|
| \`-n\` | Less than n days/minutes |
| \`+n\` | More than n days/minutes |
| \`n\` | Exactly n days |

**Examples:**
\`\`\`bash
find . -mtime -1                  # Modified in last 24h
find . -mtime +30                 # Not modified in 30+ days
find . -mmin -60                  # Modified in last hour
find /var/log -mtime +7 -name "*.log"  # Old logs
find . -newer file.txt            # Newer than file.txt
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Buscar por Permisos y Propietario**

**Por propietario:**
\`\`\`bash
find . -user juan                 # Archivos del usuario juan
find . -group developers          # Archivos del grupo developers
find . -uid 1000                  # Por UID numérico
find . -gid 1000                  # Por GID numérico
find . -nouser                    # Sin usuario válido
find . -nogroup                   # Sin grupo válido
\`\`\`

**Por permisos:**
\`\`\`bash
find . -perm 644                  # Permisos exactos 644
find . -perm -644                 # Al menos estos permisos
find . -perm /644                 # Cualquiera de estos permisos

# Ejemplos prácticos:
find . -perm -o+w                 # Escribibles por otros
find . -perm -u+x                 # Ejecutables por propietario
find /home -perm 777              # Permisos peligrosos
find . -perm -4000                # Archivos con SUID
find . -perm -2000                # Archivos con SGID
\`\`\``,
        en: `**Search by Permissions and Owner**

**By owner:**
\`\`\`bash
find . -user john                 # Files owned by john
find . -group developers          # Files of developers group
find . -uid 1000                  # By numeric UID
find . -gid 1000                  # By numeric GID
find . -nouser                    # Without valid user
find . -nogroup                   # Without valid group
\`\`\`

**By permissions:**
\`\`\`bash
find . -perm 644                  # Exact permissions 644
find . -perm -644                 # At least these permissions
find . -perm /644                 # Any of these permissions

# Practical examples:
find . -perm -o+w                 # Writable by others
find . -perm -u+x                 # Executable by owner
find /home -perm 777              # Dangerous permissions
find . -perm -4000                # Files with SUID
find . -perm -2000                # Files with SGID
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Ejecutar Acciones: -exec y -delete**

find no solo encuentra archivos, puede ejecutar comandos sobre ellos:

**-exec - Ejecutar comando:**
\`\`\`bash
find . -name "*.tmp" -exec rm {} \\;
#                           ↑     ↑
#                     archivo   fin del comando

find . -name "*.jpg" -exec cp {} /backup/ \\;
find . -type f -exec chmod 644 {} \\;
find . -name "*.log" -exec gzip {} \\;
\`\`\`

**Optimización con +:**
\`\`\`bash
find . -name "*.txt" -exec cat {} +
# Pasa múltiples archivos a un solo comando (más eficiente)
\`\`\`

**-delete - Eliminar directamente:**
\`\`\`bash
find . -name "*.tmp" -delete      # Más eficiente que -exec rm
find . -type f -empty -delete     # Eliminar archivos vacíos
\`\`\`

**⚠️ SIEMPRE prueba antes de -delete:**
\`\`\`bash
find . -name "*.tmp"              # Ver qué coincide
find . -name "*.tmp" -delete      # Solo después eliminar
\`\`\``,
        en: `**Execute Actions: -exec and -delete**

find doesn't just find files, it can execute commands on them:

**-exec - Execute command:**
\`\`\`bash
find . -name "*.tmp" -exec rm {} \\;
#                           ↑     ↑
#                      file   end of command

find . -name "*.jpg" -exec cp {} /backup/ \\;
find . -type f -exec chmod 644 {} \\;
find . -name "*.log" -exec gzip {} \\;
\`\`\`

**Optimization with +:**
\`\`\`bash
find . -name "*.txt" -exec cat {} +
# Passes multiple files to a single command (more efficient)
\`\`\`

**-delete - Delete directly:**
\`\`\`bash
find . -name "*.tmp" -delete      # More efficient than -exec rm
find . -type f -empty -delete     # Delete empty files
\`\`\`

**⚠️ ALWAYS test before -delete:**
\`\`\`bash
find . -name "*.tmp"              # See what matches
find . -name "*.tmp" -delete      # Only then delete
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Operadores Lógicos**

Combina múltiples condiciones:

**AND implícito:**
\`\`\`bash
find . -type f -name "*.txt"      # Archivo Y nombre .txt
find . -size +1M -mtime -7        # Grande Y reciente
\`\`\`

**OR explícito (-o):**
\`\`\`bash
find . -name "*.jpg" -o -name "*.png"   # JPG o PNG
find . \\( -name "*.jpg" -o -name "*.png" \\) -type f
#      ↑                                   ↑
#   Paréntesis necesitan escape
\`\`\`

**NOT (!):**
\`\`\`bash
find . ! -name "*.txt"            # NO .txt
find . -type f ! -name "*.log"    # Archivos que no son .log
find . ! -user root               # No pertenecen a root
\`\`\`

**Combinaciones complejas:**
\`\`\`bash
find . \\( -name "*.jpg" -o -name "*.png" \\) -size +1M
# Imágenes mayores a 1MB

find . -type f -name "*.log" ! -mtime -30
# Logs que no se han modificado en 30 días
\`\`\``,
        en: `**Logical Operators**

Combine multiple conditions:

**Implicit AND:**
\`\`\`bash
find . -type f -name "*.txt"      # File AND name .txt
find . -size +1M -mtime -7        # Large AND recent
\`\`\`

**Explicit OR (-o):**
\`\`\`bash
find . -name "*.jpg" -o -name "*.png"   # JPG or PNG
find . \\( -name "*.jpg" -o -name "*.png" \\) -type f
#      ↑                                   ↑
#   Parentheses need escaping
\`\`\`

**NOT (!):**
\`\`\`bash
find . ! -name "*.txt"            # NOT .txt
find . -type f ! -name "*.log"    # Files that are not .log
find . ! -user root               # Not owned by root
\`\`\`

**Complex combinations:**
\`\`\`bash
find . \\( -name "*.jpg" -o -name "*.png" \\) -size +1M
# Images larger than 1MB

find . -type f -name "*.log" ! -mtime -30
# Logs not modified in 30 days
\`\`\``
      }
    },
    {
      type: 'CODE',
      content: {
        es: `# Ejemplos prácticos de find

# Encontrar archivos de configuración modificados hoy
find /etc -type f -name "*.conf" -mtime 0

# Buscar scripts ejecutables en home
find ~ -type f -name "*.sh" -perm -u+x

# Encontrar y comprimir logs antiguos
find /var/log -name "*.log" -mtime +30 -exec gzip {} \\;

# Limpiar archivos temporales mayores a 7 días
find /tmp -type f -mtime +7 -delete

# Buscar archivos duplicados por tamaño
find . -type f -size +1M -exec md5sum {} + | sort | uniq -d

# Contar archivos por extensión
find . -type f -name "*.py" | wc -l

# Buscar archivos con permisos peligrosos
find / -type f -perm -o+w 2>/dev/null

# Encontrar los 10 archivos más grandes
find / -type f -exec du -h {} + 2>/dev/null | sort -rh | head -10`,
        en: `# Practical find examples

# Find configuration files modified today
find /etc -type f -name "*.conf" -mtime 0

# Search executable scripts in home
find ~ -type f -name "*.sh" -perm -u+x

# Find and compress old logs
find /var/log -name "*.log" -mtime +30 -exec gzip {} \\;

# Clean temporary files older than 7 days
find /tmp -type f -mtime +7 -delete

# Search duplicate files by size
find . -type f -size +1M -exec md5sum {} + | sort | uniq -d

# Count files by extension
find . -type f -name "*.py" | wc -l

# Search files with dangerous permissions
find / -type f -perm -o+w 2>/dev/null

# Find the 10 largest files
find / -type f -exec du -h {} + 2>/dev/null | sort -rh | head -10`
      }
    }
  ],
  exercises: [
    {
      id: 'ex-2-6-1',
      type: 'TERMINAL',
      title: { es: 'Buscar por Extensión', en: 'Search by Extension' },
      description: { es: 'Encuentra todos los archivos .sh en /usr', en: 'Find all .sh files in /usr' },
      hint: { es: 'find /usr -name "*.sh"', en: 'find /usr -name "*.sh"' },
      validation: { type: 'COMMAND_CONTAINS', expected: 'find' },
      xpReward: 20
    },
    {
      id: 'ex-2-6-2',
      type: 'TERMINAL',
      title: { es: 'Buscar Archivos Grandes', en: 'Search Large Files' },
      description: { es: 'Encuentra archivos mayores a 10MB en tu directorio home', en: 'Find files larger than 10MB in your home directory' },
      hint: { es: 'find ~ -type f -size +10M', en: 'find ~ -type f -size +10M' },
      validation: { type: 'COMMAND_CONTAINS', expected: '-size' },
      xpReward: 20
    },
    {
      id: 'ex-2-6-3',
      type: 'TERMINAL',
      title: { es: 'Buscar Archivos Recientes', en: 'Search Recent Files' },
      description: { es: 'Encuentra archivos modificados en las últimas 2 horas en el directorio actual', en: 'Find files modified in the last 2 hours in current directory' },
      hint: { es: 'find . -mmin -120', en: 'find . -mmin -120' },
      validation: { type: 'COMMAND_CONTAINS', expected: '-mmin' },
      xpReward: 25
    }
  ],
  quiz: {
    questions: [
      {
        id: 'q-2-6-1',
        question: { es: '¿Qué hace find . -size +100M?', en: 'What does find . -size +100M do?' },
        options: [
          { id: 'a', text: { es: 'Busca archivos de exactamente 100MB', en: 'Searches for files of exactly 100MB' } },
          { id: 'b', text: { es: 'Busca archivos mayores a 100MB', en: 'Searches for files larger than 100MB' } },
          { id: 'c', text: { es: 'Busca archivos menores a 100MB', en: 'Searches for files smaller than 100MB' } },
          { id: 'd', text: { es: 'Crea archivos de 100MB', en: 'Creates 100MB files' } }
        ],
        correctAnswer: 'b',
        explanation: { es: 'El signo + antes del tamaño indica "mayor que". Sin signo sería exactamente, y - sería menor que.', en: 'The + sign before size indicates "greater than". No sign would be exactly, and - would be less than.' }
      },
      {
        id: 'q-2-6-2',
        question: { es: '¿Para qué sirve {} en -exec?', en: 'What is {} used for in -exec?' },
        options: [
          { id: 'a', text: { es: 'Indica el fin del comando', en: 'Indicates end of command' } },
          { id: 'b', text: { es: 'Es reemplazado por cada archivo encontrado', en: 'Is replaced by each found file' } },
          { id: 'c', text: { es: 'Agrupa múltiples comandos', en: 'Groups multiple commands' } },
          { id: 'd', text: { es: 'Crea un directorio vacío', en: 'Creates an empty directory' } }
        ],
        correctAnswer: 'b',
        explanation: { es: '{} es un placeholder que find reemplaza con cada archivo encontrado al ejecutar el comando.', en: '{} is a placeholder that find replaces with each found file when executing the command.' }
      }
    ]
  }
};
