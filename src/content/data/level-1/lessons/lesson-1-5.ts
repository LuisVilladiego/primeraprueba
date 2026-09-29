import type { Lesson } from '../../../../types';

export const lesson1_5: Lesson = {
  id: 'lesson-1-5',
  slug: 'getting-help',
  title: {
    es: 'Obteniendo Ayuda: man, --help, info',
    en: 'Getting Help: man, --help, info'
  },
  description: {
    es: 'Aprende a encontrar documentación y ayuda para cualquier comando de Linux',
    en: 'Learn to find documentation and help for any Linux command'
  },
  duration: 25,
  xpReward: 120,
  order: 5,
  content: [
    {
      type: 'TEXT',
      content: {
        es: `# Sistema de Ayuda en Linux

Linux tiene un sistema de documentación increíblemente completo integrado directamente en el sistema. No necesitas internet para aprender sobre cualquier comando - toda la información está disponible localmente.

Dominar estas herramientas de ayuda te convertirá en un usuario autosuficiente capaz de resolver problemas y aprender nuevos comandos por tu cuenta.`,
        en: `# Help System in Linux

Linux has an incredibly comprehensive documentation system built directly into the system. You don't need internet to learn about any command - all information is available locally.

Mastering these help tools will turn you into a self-sufficient user capable of solving problems and learning new commands on your own.`
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**man - El Manual de Linux**

\`man\` (manual) es la fuente principal de documentación en Linux. Casi todo comando tiene una página de manual.

**Uso básico:**
\`\`\`bash
man ls              # Ver manual de ls
man 5 passwd        # Ver sección 5 de passwd (formato de archivo)
man -k keyword      # Buscar páginas que contengan keyword
man -f comando      # Descripción corta (igual que whatis)
\`\`\`

**Secciones del manual:**
| Sección | Contenido |
|---------|-----------|
| 1 | Comandos de usuario |
| 2 | Llamadas al sistema (kernel) |
| 3 | Funciones de biblioteca (C) |
| 4 | Archivos especiales (/dev) |
| 5 | Formatos de archivo (/etc/passwd) |
| 6 | Juegos |
| 7 | Miscelánea |
| 8 | Comandos de administración (root) |

**Ejemplo de secciones múltiples:**
\`\`\`bash
man passwd          # Sección 1: el comando passwd
man 5 passwd        # Sección 5: formato del archivo /etc/passwd
\`\`\``,
        en: `**man - The Linux Manual**

\`man\` (manual) is the primary source of documentation in Linux. Almost every command has a manual page.

**Basic usage:**
\`\`\`bash
man ls              # View ls manual
man 5 passwd        # View section 5 of passwd (file format)
man -k keyword      # Search pages containing keyword
man -f command      # Short description (same as whatis)
\`\`\`

**Manual sections:**
| Section | Content |
|---------|---------|
| 1 | User commands |
| 2 | System calls (kernel) |
| 3 | Library functions (C) |
| 4 | Special files (/dev) |
| 5 | File formats (/etc/passwd) |
| 6 | Games |
| 7 | Miscellaneous |
| 8 | Administration commands (root) |

**Example of multiple sections:**
\`\`\`bash
man passwd          # Section 1: the passwd command
man 5 passwd        # Section 5: format of /etc/passwd file
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Estructura de una Página man**

Las páginas de manual siguen una estructura estándar:

\`\`\`
NOMBRE
    Nombre del comando y descripción breve

SINOPSIS
    Cómo usar el comando (sintaxis)
    [] = opcional, ... = puede repetirse, | = o

DESCRIPCIÓN
    Explicación detallada de qué hace

OPCIONES
    Lista de todas las opciones/flags disponibles

EJEMPLOS
    Casos de uso comunes (no siempre presente)

ARCHIVOS
    Archivos de configuración relacionados

VER TAMBIÉN
    Comandos y páginas relacionadas

AUTOR
    Quien escribió el comando/documentación
\`\`\`

**Navegación en man (usa less internamente):**
| Tecla | Acción |
|-------|--------|
| \`Espacio\` | Siguiente página |
| \`b\` | Página anterior |
| \`/texto\` | Buscar texto |
| \`n\` | Siguiente coincidencia |
| \`q\` | Salir |`,
        en: `**Structure of a man Page**

Manual pages follow a standard structure:

\`\`\`
NAME
    Command name and brief description

SYNOPSIS
    How to use the command (syntax)
    [] = optional, ... = can repeat, | = or

DESCRIPTION
    Detailed explanation of what it does

OPTIONS
    List of all available options/flags

EXAMPLES
    Common use cases (not always present)

FILES
    Related configuration files

SEE ALSO
    Related commands and pages

AUTHOR
    Who wrote the command/documentation
\`\`\`

**Navigation in man (uses less internally):**
| Key | Action |
|-----|--------|
| \`Space\` | Next page |
| \`b\` | Previous page |
| \`/text\` | Search text |
| \`n\` | Next match |
| \`q\` | Quit |`
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**--help: Ayuda Rápida**

La mayoría de comandos soportan \`--help\` (o \`-h\`) para mostrar ayuda resumida.

\`\`\`bash
ls --help           # Ayuda de ls
grep --help         # Ayuda de grep
docker --help       # Ayuda de docker
git commit --help   # Ayuda de subcomandos
\`\`\`

**Ventajas sobre man:**
- Más rápido y conciso
- Muestra solo las opciones más importantes
- Útil para recordar sintaxis rápidamente

**Desventajas:**
- Menos detallado
- Sin ejemplos extensos
- No todas las opciones documentadas

**Comparación:**
\`\`\`bash
# --help: resumen rápido
ls --help | head -20

# man: documentación completa
man ls
\`\`\``,
        en: `**--help: Quick Help**

Most commands support \`--help\` (or \`-h\`) to show summarized help.

\`\`\`bash
ls --help           # ls help
grep --help         # grep help
docker --help       # docker help
git commit --help   # Subcommand help
\`\`\`

**Advantages over man:**
- Faster and more concise
- Shows only the most important options
- Useful for quickly remembering syntax

**Disadvantages:**
- Less detailed
- No extensive examples
- Not all options documented

**Comparison:**
\`\`\`bash
# --help: quick summary
ls --help | head -20

# man: complete documentation
man ls
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Otros Recursos de Ayuda**

**whatis - Descripción de una línea:**
\`\`\`bash
whatis ls           # ls (1) - list directory contents
whatis passwd       # Muestra todas las secciones disponibles
\`\`\`

**apropos - Buscar comandos por palabra clave:**
\`\`\`bash
apropos copy        # Todos los comandos relacionados con "copy"
apropos "list files"
apropos -s 1 network  # Solo buscar en sección 1
\`\`\`

**info - Documentación extendida (GNU):**
\`\`\`bash
info coreutils      # Documentación GNU detallada
info bash           # Manual completo de Bash
\`\`\`
info usa navegación diferente a man (teclas de Emacs).

**type - Qué tipo de comando es:**
\`\`\`bash
type ls             # ls is aliased to 'ls --color=auto'
type cd             # cd is a shell builtin
type python         # python is /usr/bin/python
\`\`\`

**which - Ubicación del ejecutable:**
\`\`\`bash
which python        # /usr/bin/python
which -a python     # Todas las ubicaciones
\`\`\``,
        en: `**Other Help Resources**

**whatis - One-line description:**
\`\`\`bash
whatis ls           # ls (1) - list directory contents
whatis passwd       # Shows all available sections
\`\`\`

**apropos - Search commands by keyword:**
\`\`\`bash
apropos copy        # All commands related to "copy"
apropos "list files"
apropos -s 1 network  # Only search in section 1
\`\`\`

**info - Extended documentation (GNU):**
\`\`\`bash
info coreutils      # Detailed GNU documentation
info bash           # Complete Bash manual
\`\`\`
info uses different navigation than man (Emacs keys).

**type - What type of command is it:**
\`\`\`bash
type ls             # ls is aliased to 'ls --color=auto'
type cd             # cd is a shell builtin
type python         # python is /usr/bin/python
\`\`\`

**which - Location of executable:**
\`\`\`bash
which python        # /usr/bin/python
which -a python     # All locations
\`\`\``
      }
    },
    {
      type: 'TIP',
      content: {
        es: `**Estrategia para Aprender Comandos Nuevos**

1. **Primero:** \`comando --help\` para ver uso básico
2. **Si necesitas más:** \`man comando\` para documentación completa
3. **Para buscar comando:** \`apropos palabra_clave\`
4. **Para entender qué es:** \`type comando\` y \`whatis comando\`

**Recursos online (cuando tengas internet):**
- \`tldr comando\` - Ejemplos prácticos simplificados (instalar con npm/pip)
- explainshell.com - Explica comandos complejos visualmente
- man7.org/linux/man-pages - Páginas man online

**Crea tu propia documentación:**
\`\`\`bash
# Guardar ayuda para referencia offline
man ls > ~/docs/man-ls.txt
ls --help > ~/docs/ls-help.txt
\`\`\``,
        en: `**Strategy for Learning New Commands**

1. **First:** \`command --help\` to see basic usage
2. **If you need more:** \`man command\` for complete documentation
3. **To search for command:** \`apropos keyword\`
4. **To understand what it is:** \`type command\` and \`whatis command\`

**Online resources (when you have internet):**
- \`tldr command\` - Simplified practical examples (install with npm/pip)
- explainshell.com - Explains complex commands visually
- man7.org/linux/man-pages - Online man pages

**Create your own documentation:**
\`\`\`bash
# Save help for offline reference
man ls > ~/docs/man-ls.txt
ls --help > ~/docs/ls-help.txt
\`\`\``
      }
    },
    {
      type: 'CODE',
      content: {
        es: `# Ejercicios prácticos con el sistema de ayuda

# 1. Ver la página de manual de un comando
man cp

# 2. Buscar la opción para copiar recursivamente
man cp | grep -A 2 "recursive"

# 3. Encontrar comandos relacionados con comprimir
apropos compress
apropos archive

# 4. Ver qué tipo de comando es echo
type echo

# 5. Buscar en man por palabra clave
man -k "file system"

# 6. Ver solo la sinopsis de un comando
man ls | head -20

# 7. Guardar toda la ayuda de un comando
man bash > ~/bash-manual.txt`,
        en: `# Practical exercises with the help system

# 1. View the manual page for a command
man cp

# 2. Search for the option to copy recursively
man cp | grep -A 2 "recursive"

# 3. Find commands related to compressing
apropos compress
apropos archive

# 4. See what type of command echo is
type echo

# 5. Search man by keyword
man -k "file system"

# 6. View only the synopsis of a command
man ls | head -20

# 7. Save all help for a command
man bash > ~/bash-manual.txt`
      }
    }
  ],
  exercises: [
    {
      id: 'ex-1-5-1',
      type: 'TERMINAL',
      title: {
        es: 'Encontrar Comandos',
        en: 'Find Commands'
      },
      description: {
        es: 'Usa apropos para encontrar comandos relacionados con "directory"',
        en: 'Use apropos to find commands related to "directory"'
      },
      hint: {
        es: 'apropos directory',
        en: 'apropos directory'
      },
      validation: {
        type: 'COMMAND_CONTAINS',
        expected: 'apropos'
      },
      xpReward: 15
    },
    {
      id: 'ex-1-5-2',
      type: 'TERMINAL',
      title: {
        es: 'Identificar Tipo de Comando',
        en: 'Identify Command Type'
      },
      description: {
        es: 'Usa type para determinar si "cd" es un comando interno del shell o un programa externo',
        en: 'Use type to determine if "cd" is a shell builtin or an external program'
      },
      hint: {
        es: 'type cd',
        en: 'type cd'
      },
      validation: {
        type: 'COMMAND_OUTPUT',
        expected: 'builtin'
      },
      xpReward: 15
    },
    {
      id: 'ex-1-5-3',
      type: 'TERMINAL',
      title: {
        es: 'Leer Manual',
        en: 'Read Manual'
      },
      description: {
        es: 'Consulta la ayuda rápida de mkdir y encuentra la opción para crear directorios padres',
        en: 'Check the quick help for mkdir and find the option to create parent directories'
      },
      hint: {
        es: 'mkdir --help y busca "parent"',
        en: 'mkdir --help and look for "parent"'
      },
      validation: {
        type: 'COMMAND_CONTAINS',
        expected: '--help'
      },
      xpReward: 20
    }
  ],
  quiz: {
    questions: [
      {
        id: 'q-1-5-1',
        question: {
          es: '¿Qué comando usarías para buscar todos los comandos relacionados con "network"?',
          en: 'What command would you use to search for all commands related to "network"?'
        },
        options: [
          { id: 'a', text: { es: 'man network', en: 'man network' } },
          { id: 'b', text: { es: 'apropos network', en: 'apropos network' } },
          { id: 'c', text: { es: 'help network', en: 'help network' } },
          { id: 'd', text: { es: 'find network', en: 'find network' } }
        ],
        correctAnswer: 'b',
        explanation: {
          es: 'apropos busca en las descripciones de todas las páginas de manual por la palabra clave indicada.',
          en: 'apropos searches through all manual page descriptions for the indicated keyword.'
        }
      },
      {
        id: 'q-1-5-2',
        question: {
          es: '¿Qué sección del manual contiene información sobre formatos de archivo como /etc/passwd?',
          en: 'Which manual section contains information about file formats like /etc/passwd?'
        },
        options: [
          { id: 'a', text: { es: 'Sección 1', en: 'Section 1' } },
          { id: 'b', text: { es: 'Sección 3', en: 'Section 3' } },
          { id: 'c', text: { es: 'Sección 5', en: 'Section 5' } },
          { id: 'd', text: { es: 'Sección 8', en: 'Section 8' } }
        ],
        correctAnswer: 'c',
        explanation: {
          es: 'La sección 5 del manual contiene documentación sobre formatos de archivos de configuración.',
          en: 'Manual section 5 contains documentation about configuration file formats.'
        }
      }
    ]
  }
};
