import type { Lesson } from '../../../../types';

export const lesson1_7: Lesson = {
  id: 'lesson-1-7',
  slug: 'command-history',
  title: {
    es: 'Historial de Comandos: history, !!, flechas',
    en: 'Command History: history, !!, arrows'
  },
  description: {
    es: 'Aprende a navegar y reutilizar comandos anteriores eficientemente',
    en: 'Learn to navigate and reuse previous commands efficiently'
  },
  duration: 25,
  xpReward: 120,
  order: 7,
  content: [
    {
      type: 'TEXT',
      content: {
        es: `# Historial de Comandos

El shell guarda un registro de todos los comandos que ejecutas. Aprender a navegar y reutilizar este historial te hará mucho más productivo, evitando escribir los mismos comandos una y otra vez.

Bash y otros shells mantienen el historial en un archivo (generalmente ~/.bash_history) que persiste entre sesiones.`,
        en: `# Command History

The shell keeps a record of all commands you execute. Learning to navigate and reuse this history will make you much more productive, avoiding typing the same commands over and over.

Bash and other shells maintain history in a file (usually ~/.bash_history) that persists between sessions.`
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Navegación con Teclas de Flecha**

La forma más básica de acceder al historial:

| Tecla | Acción |
|-------|--------|
| \`↑\` (Flecha arriba) | Comando anterior |
| \`↓\` (Flecha abajo) | Comando siguiente |
| \`Ctrl+P\` | Igual que ↑ |
| \`Ctrl+N\` | Igual que ↓ |

**Búsqueda incremental (Ctrl+R):**
\`\`\`bash
# Presiona Ctrl+R y escribe parte del comando
(reverse-i-search)\`git\`: git commit -m "mensaje anterior"

# Ctrl+R de nuevo: siguiente coincidencia
# Enter: ejecutar comando encontrado
# Ctrl+G o Esc: cancelar búsqueda
# Flechas: editar comando antes de ejecutar
\`\`\`

**Búsqueda hacia adelante:**
\`\`\`bash
Ctrl+S    # Buscar hacia adelante (puede requerir: stty -ixon)
\`\`\``,
        en: `**Navigation with Arrow Keys**

The most basic way to access history:

| Key | Action |
|-----|--------|
| \`↑\` (Up arrow) | Previous command |
| \`↓\` (Down arrow) | Next command |
| \`Ctrl+P\` | Same as ↑ |
| \`Ctrl+N\` | Same as ↓ |

**Incremental search (Ctrl+R):**
\`\`\`bash
# Press Ctrl+R and type part of the command
(reverse-i-search)\`git\`: git commit -m "previous message"

# Ctrl+R again: next match
# Enter: execute found command
# Ctrl+G or Esc: cancel search
# Arrows: edit command before executing
\`\`\`

**Forward search:**
\`\`\`bash
Ctrl+S    # Search forward (may require: stty -ixon)
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**El Comando history**

\`history\` muestra la lista numerada de comandos ejecutados.

**Uso básico:**
\`\`\`bash
history              # Ver todo el historial
history 20           # Últimos 20 comandos
history | less       # Navegar historial largo
history | grep ssh   # Buscar comandos con "ssh"
\`\`\`

**Gestión del historial:**
\`\`\`bash
history -c           # Borrar historial de la sesión actual
history -w           # Escribir historial al archivo
history -r           # Leer historial del archivo
history -d 123       # Eliminar entrada número 123
\`\`\`

**Variables de configuración:**
\`\`\`bash
echo $HISTSIZE       # Número de comandos en memoria (default: 500-1000)
echo $HISTFILESIZE   # Tamaño del archivo de historial
echo $HISTFILE       # Ubicación del archivo (~/.bash_history)
echo $HISTCONTROL    # Controla duplicados y espacios
\`\`\``,
        en: `**The history Command**

\`history\` shows the numbered list of executed commands.

**Basic usage:**
\`\`\`bash
history              # View entire history
history 20           # Last 20 commands
history | less       # Navigate long history
history | grep ssh   # Search commands with "ssh"
\`\`\`

**History management:**
\`\`\`bash
history -c           # Clear current session history
history -w           # Write history to file
history -r           # Read history from file
history -d 123       # Delete entry number 123
\`\`\`

**Configuration variables:**
\`\`\`bash
echo $HISTSIZE       # Number of commands in memory (default: 500-1000)
echo $HISTFILESIZE   # History file size
echo $HISTFILE       # File location (~/.bash_history)
echo $HISTCONTROL    # Controls duplicates and spaces
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Expansión del Historial: !, !!, !n**

Los caracteres especiales de expansión del historial son muy poderosos:

**Ejecutar comandos anteriores:**
\`\`\`bash
!!                   # Ejecutar el ÚLTIMO comando
!-1                  # Lo mismo que !!
!-2                  # El penúltimo comando
!n                   # Comando número n del historial
!-n                  # n comandos atrás
\`\`\`

**El más útil - sudo !!:**
\`\`\`bash
apt update           # Error: permiso denegado
sudo !!              # Se expande a: sudo apt update
\`\`\`

**Buscar y ejecutar:**
\`\`\`bash
!ssh                 # Último comando que EMPIEZA con "ssh"
!?config             # Último comando que CONTIENE "config"
!git:p               # Mostrar sin ejecutar (print)
\`\`\`

**Modificadores:**
\`\`\`bash
!!:s/old/new         # Sustituir en último comando
^old^new             # Atajo para lo anterior
!!:p                 # Mostrar sin ejecutar
\`\`\``,
        en: `**History Expansion: !, !!, !n**

History expansion special characters are very powerful:

**Execute previous commands:**
\`\`\`bash
!!                   # Execute the LAST command
!-1                  # Same as !!
!-2                  # Second to last command
!n                   # Command number n from history
!-n                  # n commands back
\`\`\`

**The most useful - sudo !!:**
\`\`\`bash
apt update           # Error: permission denied
sudo !!              # Expands to: sudo apt update
\`\`\`

**Search and execute:**
\`\`\`bash
!ssh                 # Last command STARTING with "ssh"
!?config             # Last command CONTAINING "config"
!git:p               # Show without executing (print)
\`\`\`

**Modifiers:**
\`\`\`bash
!!:s/old/new         # Substitute in last command
^old^new             # Shortcut for the above
!!:p                 # Show without executing
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Reutilizar Argumentos: !$, !^, !***

Puedes extraer partes específicas del comando anterior:

\`\`\`bash
!$                   # Último argumento del comando anterior
!^                   # Primer argumento
!*                   # Todos los argumentos
!:n                  # Argumento número n (0 = comando)
!:n-m                # Argumentos del n al m
\`\`\`

**Ejemplos prácticos:**
\`\`\`bash
# Crear directorio y entrar
mkdir /ruta/muy/larga/nuevo_directorio
cd !$                # cd /ruta/muy/larga/nuevo_directorio

# Editar y luego ver archivo
vim config.yaml
cat !$               # cat config.yaml

# Copiar múltiples archivos, luego listarlos
cp archivo1.txt archivo2.txt archivo3.txt destino/
ls !*                # ls archivo1.txt archivo2.txt archivo3.txt destino/
\`\`\`

**Atajo Alt+.**
\`\`\`bash
# Alt+. (o Esc+.) inserta el último argumento del comando anterior
# Presionar repetidamente cicla por argumentos anteriores
mkdir nuevo_proyecto
cd [Alt+.]           # Inserta: nuevo_proyecto
\`\`\``,
        en: `**Reusing Arguments: !$, !^, !***

You can extract specific parts from the previous command:

\`\`\`bash
!$                   # Last argument of previous command
!^                   # First argument
!*                   # All arguments
!:n                  # Argument number n (0 = command)
!:n-m                # Arguments from n to m
\`\`\`

**Practical examples:**
\`\`\`bash
# Create directory and enter
mkdir /very/long/path/new_directory
cd !$                # cd /very/long/path/new_directory

# Edit and then view file
vim config.yaml
cat !$               # cat config.yaml

# Copy multiple files, then list them
cp file1.txt file2.txt file3.txt destination/
ls !*                # ls file1.txt file2.txt file3.txt destination/
\`\`\`

**Alt+. Shortcut**
\`\`\`bash
# Alt+. (or Esc+.) inserts the last argument from previous command
# Pressing repeatedly cycles through previous arguments
mkdir new_project
cd [Alt+.]           # Inserts: new_project
\`\`\``
      }
    },
    {
      type: 'TIP',
      content: {
        es: `**Configuración Recomendada del Historial**

Añade estas líneas a tu \`~/.bashrc\`:

\`\`\`bash
# Historial más grande
HISTSIZE=10000
HISTFILESIZE=20000

# Ignorar duplicados y comandos que empiezan con espacio
HISTCONTROL=ignoreboth

# Añadir al historial, no sobrescribir
shopt -s histappend

# Guardar comandos multilínea en una sola entrada
shopt -s cmdhist

# Guardar historial inmediatamente (no solo al cerrar)
PROMPT_COMMAND='history -a'

# Timestamp en historial
HISTTIMEFORMAT="%F %T "

# Ignorar comandos específicos
HISTIGNORE="ls:cd:exit:clear:history"
\`\`\`

Después de editar, ejecuta \`source ~/.bashrc\` para aplicar.`,
        en: `**Recommended History Configuration**

Add these lines to your \`~/.bashrc\`:

\`\`\`bash
# Larger history
HISTSIZE=10000
HISTFILESIZE=20000

# Ignore duplicates and commands starting with space
HISTCONTROL=ignoreboth

# Append to history, don't overwrite
shopt -s histappend

# Save multiline commands in single entry
shopt -s cmdhist

# Save history immediately (not just on close)
PROMPT_COMMAND='history -a'

# Timestamp in history
HISTTIMEFORMAT="%F %T "

# Ignore specific commands
HISTIGNORE="ls:cd:exit:clear:history"
\`\`\`

After editing, run \`source ~/.bashrc\` to apply.`
      }
    },
    {
      type: 'DIAGRAM',
      content: {
        es: `**Referencia Rápida del Historial**

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    NAVEGACIÓN                                │
├─────────────────────────────────────────────────────────────┤
│  ↑ / Ctrl+P      │  Comando anterior                        │
│  ↓ / Ctrl+N      │  Comando siguiente                       │
│  Ctrl+R          │  Buscar hacia atrás                      │
│  Alt+.           │  Insertar último argumento               │
├─────────────────────────────────────────────────────────────┤
│                    EXPANSIÓN                                 │
├─────────────────────────────────────────────────────────────┤
│  !!              │  Último comando completo                 │
│  !n              │  Comando número n                        │
│  !-n             │  n comandos atrás                        │
│  !texto          │  Último que empieza con "texto"          │
│  !?texto         │  Último que contiene "texto"             │
├─────────────────────────────────────────────────────────────┤
│                    ARGUMENTOS                                │
├─────────────────────────────────────────────────────────────┤
│  !$              │  Último argumento                        │
│  !^              │  Primer argumento                        │
│  !*              │  Todos los argumentos                    │
│  !:n             │  Argumento número n                      │
├─────────────────────────────────────────────────────────────┤
│                    MODIFICADORES                             │
├─────────────────────────────────────────────────────────────┤
│  !!:p            │  Mostrar sin ejecutar                    │
│  !!:s/x/y        │  Sustituir x por y                       │
│  ^x^y            │  Atajo de sustitución                    │
└─────────────────────────────────────────────────────────────┘
\`\`\``,
        en: `**Quick History Reference**

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    NAVIGATION                                │
├─────────────────────────────────────────────────────────────┤
│  ↑ / Ctrl+P      │  Previous command                        │
│  ↓ / Ctrl+N      │  Next command                            │
│  Ctrl+R          │  Search backward                         │
│  Alt+.           │  Insert last argument                    │
├─────────────────────────────────────────────────────────────┤
│                    EXPANSION                                 │
├─────────────────────────────────────────────────────────────┤
│  !!              │  Last complete command                   │
│  !n              │  Command number n                        │
│  !-n             │  n commands back                         │
│  !text           │  Last starting with "text"               │
│  !?text          │  Last containing "text"                  │
├─────────────────────────────────────────────────────────────┤
│                    ARGUMENTS                                 │
├─────────────────────────────────────────────────────────────┤
│  !$              │  Last argument                           │
│  !^              │  First argument                          │
│  !*              │  All arguments                           │
│  !:n             │  Argument number n                       │
├─────────────────────────────────────────────────────────────┤
│                    MODIFIERS                                 │
├─────────────────────────────────────────────────────────────┤
│  !!:p            │  Show without executing                  │
│  !!:s/x/y        │  Substitute x for y                      │
│  ^x^y            │  Substitution shortcut                   │
└─────────────────────────────────────────────────────────────┘
\`\`\``
      }
    }
  ],
  exercises: [
    {
      id: 'ex-1-7-1',
      type: 'TERMINAL',
      title: {
        es: 'Ver el Historial',
        en: 'View History'
      },
      description: {
        es: 'Muestra los últimos 10 comandos de tu historial',
        en: 'Display the last 10 commands from your history'
      },
      hint: {
        es: 'history 10',
        en: 'history 10'
      },
      validation: {
        type: 'COMMAND_CONTAINS',
        expected: 'history'
      },
      xpReward: 10
    },
    {
      id: 'ex-1-7-2',
      type: 'TERMINAL',
      title: {
        es: 'Buscar en el Historial',
        en: 'Search History'
      },
      description: {
        es: 'Busca en tu historial todos los comandos que contienen "ls"',
        en: 'Search your history for all commands containing "ls"'
      },
      hint: {
        es: 'history | grep ls',
        en: 'history | grep ls'
      },
      validation: {
        type: 'COMMAND_CONTAINS',
        expected: 'grep'
      },
      xpReward: 15
    },
    {
      id: 'ex-1-7-3',
      type: 'TERMINAL',
      title: {
        es: 'Reutilizar Argumento',
        en: 'Reuse Argument'
      },
      description: {
        es: 'Crea un archivo llamado "prueba_historial.txt" con touch, luego usa !$ para ver su contenido con cat',
        en: 'Create a file called "history_test.txt" with touch, then use !$ to view its contents with cat'
      },
      hint: {
        es: 'touch prueba_historial.txt && cat !$',
        en: 'touch history_test.txt && cat !$'
      },
      validation: {
        type: 'COMMAND_CONTAINS',
        expected: '!$'
      },
      xpReward: 20
    }
  ],
  quiz: {
    questions: [
      {
        id: 'q-1-7-1',
        question: {
          es: '¿Qué hace el comando "sudo !!"?',
          en: 'What does the command "sudo !!" do?'
        },
        options: [
          { id: 'a', text: { es: 'Muestra el último comando', en: 'Shows the last command' } },
          { id: 'b', text: { es: 'Ejecuta el último comando con privilegios de superusuario', en: 'Executes the last command with superuser privileges' } },
          { id: 'c', text: { es: 'Borra el historial', en: 'Clears history' } },
          { id: 'd', text: { es: 'Busca comandos sudo', en: 'Searches for sudo commands' } }
        ],
        correctAnswer: 'b',
        explanation: {
          es: '!! se expande al último comando ejecutado, así que sudo !! lo ejecuta de nuevo con privilegios de root.',
          en: '!! expands to the last executed command, so sudo !! runs it again with root privileges.'
        }
      },
      {
        id: 'q-1-7-2',
        question: {
          es: '¿Qué atajo de teclado busca en el historial de forma interactiva?',
          en: 'What keyboard shortcut searches history interactively?'
        },
        options: [
          { id: 'a', text: { es: 'Ctrl+H', en: 'Ctrl+H' } },
          { id: 'b', text: { es: 'Ctrl+F', en: 'Ctrl+F' } },
          { id: 'c', text: { es: 'Ctrl+R', en: 'Ctrl+R' } },
          { id: 'd', text: { es: 'Ctrl+S', en: 'Ctrl+S' } }
        ],
        correctAnswer: 'c',
        explanation: {
          es: 'Ctrl+R activa la búsqueda incremental hacia atrás en el historial (reverse-i-search).',
          en: 'Ctrl+R activates the incremental backward search in history (reverse-i-search).'
        }
      }
    ]
  }
};
