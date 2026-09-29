import type { Lesson } from '../../../../types';

export const lesson1_4: Lesson = {
  id: 'lesson-1-4',
  slug: 'viewing-files',
  title: {
    es: 'Visualización de Archivos: cat, less, head, tail',
    en: 'Viewing Files: cat, less, head, tail'
  },
  description: {
    es: 'Domina las diferentes formas de ver y explorar el contenido de archivos',
    en: 'Master the different ways to view and explore file contents'
  },
  duration: 30,
  xpReward: 140,
  order: 4,
  content: [
    {
      type: 'TEXT',
      content: {
        es: `# Visualización de Archivos en la Terminal

Una de las tareas más comunes en Linux es ver el contenido de archivos. Ya sea revisar logs, leer configuraciones o inspeccionar código, necesitas herramientas eficientes para navegar por archivos de cualquier tamaño.

Linux ofrece varias herramientas, cada una optimizada para diferentes situaciones.`,
        en: `# Viewing Files in the Terminal

One of the most common tasks in Linux is viewing file contents. Whether reviewing logs, reading configurations or inspecting code, you need efficient tools to navigate files of any size.

Linux offers several tools, each optimized for different situations.`
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**cat - Concatenar y Mostrar**

El comando \`cat\` (concatenate) muestra el contenido completo de uno o más archivos.

**Uso básico:**
\`\`\`bash
cat archivo.txt              # Mostrar contenido
cat archivo1.txt archivo2.txt  # Concatenar y mostrar varios
cat -n archivo.txt           # Mostrar con números de línea
cat -b archivo.txt           # Numerar solo líneas no vacías
cat -s archivo.txt           # Reducir múltiples líneas vacías a una
cat -A archivo.txt           # Mostrar caracteres especiales
\`\`\`

**Usos creativos de cat:**
\`\`\`bash
# Crear archivo rápido (Ctrl+D para terminar)
cat > nuevo.txt
Escribo contenido aquí
Ctrl+D

# Añadir contenido a archivo existente
cat >> archivo.txt
Más contenido
Ctrl+D

# Concatenar archivos en uno nuevo
cat parte1.txt parte2.txt > completo.txt
\`\`\`

**⚠️ Limitación:** cat muestra TODO el archivo. No es ideal para archivos grandes.`,
        en: `**cat - Concatenate and Display**

The \`cat\` (concatenate) command displays the complete contents of one or more files.

**Basic usage:**
\`\`\`bash
cat file.txt                 # Display content
cat file1.txt file2.txt      # Concatenate and display several
cat -n file.txt              # Display with line numbers
cat -b file.txt              # Number only non-empty lines
cat -s file.txt              # Reduce multiple empty lines to one
cat -A file.txt              # Show special characters
\`\`\`

**Creative uses of cat:**
\`\`\`bash
# Create file quickly (Ctrl+D to finish)
cat > new.txt
I write content here
Ctrl+D

# Append content to existing file
cat >> file.txt
More content
Ctrl+D

# Concatenate files into a new one
cat part1.txt part2.txt > complete.txt
\`\`\`

**⚠️ Limitation:** cat shows the ENTIRE file. Not ideal for large files.`
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**less - El Paginador Interactivo**

\`less\` es la herramienta ideal para archivos grandes. Permite navegar hacia adelante y atrás, buscar texto y más.

**Iniciar less:**
\`\`\`bash
less archivo.txt             # Abrir archivo
less +G archivo.txt          # Abrir al final del archivo
less +/patrón archivo.txt    # Abrir y buscar patrón
less -N archivo.txt          # Mostrar números de línea
\`\`\`

**Navegación dentro de less:**
| Tecla | Acción |
|-------|--------|
| \`Espacio\`, \`f\`, \`Page Down\` | Avanzar una página |
| \`b\`, \`Page Up\` | Retroceder una página |
| \`j\`, \`↓\`, \`Enter\` | Bajar una línea |
| \`k\`, \`↑\` | Subir una línea |
| \`g\`, \`Home\` | Ir al inicio |
| \`G\`, \`End\` | Ir al final |
| \`/texto\` | Buscar hacia adelante |
| \`?texto\` | Buscar hacia atrás |
| \`n\` | Siguiente coincidencia |
| \`N\` | Coincidencia anterior |
| \`q\` | Salir |
| \`h\` | Ayuda |

**Trucos avanzados:**
\`\`\`bash
# Seguir archivo en tiempo real (como tail -f)
less +F /var/log/syslog

# Abrir múltiples archivos
less archivo1.txt archivo2.txt
# Usar :n (siguiente) y :p (anterior) para navegar
\`\`\``,
        en: `**less - The Interactive Pager**

\`less\` is the ideal tool for large files. It allows navigating forward and backward, searching text and more.

**Starting less:**
\`\`\`bash
less file.txt                # Open file
less +G file.txt             # Open at end of file
less +/pattern file.txt      # Open and search pattern
less -N file.txt             # Show line numbers
\`\`\`

**Navigation inside less:**
| Key | Action |
|-----|--------|
| \`Space\`, \`f\`, \`Page Down\` | Forward one page |
| \`b\`, \`Page Up\` | Back one page |
| \`j\`, \`↓\`, \`Enter\` | Down one line |
| \`k\`, \`↑\` | Up one line |
| \`g\`, \`Home\` | Go to start |
| \`G\`, \`End\` | Go to end |
| \`/text\` | Search forward |
| \`?text\` | Search backward |
| \`n\` | Next match |
| \`N\` | Previous match |
| \`q\` | Quit |
| \`h\` | Help |

**Advanced tricks:**
\`\`\`bash
# Follow file in real time (like tail -f)
less +F /var/log/syslog

# Open multiple files
less file1.txt file2.txt
# Use :n (next) and :p (previous) to navigate
\`\`\``
      }
    },
    {
      type: 'TIP',
      content: {
        es: `**"less is more"**

El nombre \`less\` es un juego de palabras. Existía un paginador llamado \`more\` que solo permitía avanzar. \`less\` se creó como mejora: "less is more than more" (menos es más que más).

\`more\` todavía existe pero \`less\` es superior en casi todos los aspectos. Puedes usar \`more\` si solo necesitas avanzar rápidamente por un archivo.`,
        en: `**"less is more"**

The name \`less\` is a play on words. There was a pager called \`more\` that only allowed moving forward. \`less\` was created as an improvement: "less is more than more".

\`more\` still exists but \`less\` is superior in almost every aspect. You can use \`more\` if you only need to quickly advance through a file.`
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**head - Ver el Inicio**

\`head\` muestra las primeras líneas de un archivo (por defecto 10).

**Sintaxis:**
\`\`\`bash
head archivo.txt             # Primeras 10 líneas
head -n 5 archivo.txt        # Primeras 5 líneas
head -n -5 archivo.txt       # Todo EXCEPTO las últimas 5 líneas
head -c 100 archivo.txt      # Primeros 100 bytes
head archivo1.txt archivo2.txt  # Cabecera de múltiples archivos
\`\`\`

**Casos de uso comunes:**
\`\`\`bash
# Ver estructura de CSV
head -n 1 datos.csv          # Solo encabezados

# Previsualizar archivo grande
head -n 20 log_gigante.log

# Combinar con otros comandos
ls -la | head -n 5           # Solo primeros 5 resultados
\`\`\``,
        en: `**head - View the Beginning**

\`head\` displays the first lines of a file (default 10).

**Syntax:**
\`\`\`bash
head file.txt                # First 10 lines
head -n 5 file.txt           # First 5 lines
head -n -5 file.txt          # Everything EXCEPT last 5 lines
head -c 100 file.txt         # First 100 bytes
head file1.txt file2.txt     # Header of multiple files
\`\`\`

**Common use cases:**
\`\`\`bash
# View CSV structure
head -n 1 data.csv           # Only headers

# Preview large file
head -n 20 huge_log.log

# Combine with other commands
ls -la | head -n 5           # Only first 5 results
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**tail - Ver el Final**

\`tail\` muestra las últimas líneas de un archivo (por defecto 10). Es especialmente útil para logs.

**Sintaxis básica:**
\`\`\`bash
tail archivo.txt             # Últimas 10 líneas
tail -n 20 archivo.txt       # Últimas 20 líneas
tail -n +5 archivo.txt       # Desde la línea 5 hasta el final
tail -c 100 archivo.txt      # Últimos 100 bytes
\`\`\`

**La opción estrella: -f (follow)**
\`\`\`bash
tail -f /var/log/syslog      # Seguir archivo en tiempo real
tail -F /var/log/app.log     # Seguir incluso si el archivo se recrea
tail -f -n 50 archivo.log    # Mostrar últimas 50 y seguir
\`\`\`

**Monitoreo avanzado:**
\`\`\`bash
# Seguir múltiples archivos
tail -f /var/log/*.log

# Seguir con timestamps
tail -f log.txt | while read línea; do
  echo "$(date): $línea"
done

# Terminar tail -f con timeout
timeout 60 tail -f archivo.log  # Solo seguir 60 segundos
\`\`\``,
        en: `**tail - View the End**

\`tail\` displays the last lines of a file (default 10). It's especially useful for logs.

**Basic syntax:**
\`\`\`bash
tail file.txt                # Last 10 lines
tail -n 20 file.txt          # Last 20 lines
tail -n +5 file.txt          # From line 5 to the end
tail -c 100 file.txt         # Last 100 bytes
\`\`\`

**The star option: -f (follow)**
\`\`\`bash
tail -f /var/log/syslog      # Follow file in real time
tail -F /var/log/app.log     # Follow even if file is recreated
tail -f -n 50 file.log       # Show last 50 and follow
\`\`\`

**Advanced monitoring:**
\`\`\`bash
# Follow multiple files
tail -f /var/log/*.log

# Follow with timestamps
tail -f log.txt | while read line; do
  echo "$(date): $line"
done

# Terminate tail -f with timeout
timeout 60 tail -f file.log  # Only follow for 60 seconds
\`\`\``
      }
    },
    {
      type: 'DIAGRAM',
      content: {
        es: `**Cuándo Usar Cada Herramienta**

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                   ARCHIVO A VISUALIZAR                       │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
              ┌─────────────────────────┐
              │   ¿Qué necesitas ver?   │
              └─────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
   ┌──────────┐     ┌──────────────┐   ┌──────────┐
   │ TODO el  │     │ NAVEGAR por  │   │ PARTE    │
   │ archivo  │     │ archivo      │   │ específica│
   │ pequeño  │     │ grande       │   │          │
   └──────────┘     └──────────────┘   └──────────┘
         │                 │                 │
         ▼                 ▼                 │
      ┌─────┐          ┌──────┐             │
      │ cat │          │ less │        ┌────┴────┐
      └─────┘          └──────┘        ▼         ▼
                                   ┌──────┐  ┌──────┐
                                   │ head │  │ tail │
                                   │inicio│  │ final│
                                   └──────┘  └──────┘
                                                 │
                                                 ▼
                                          ¿En tiempo real?
                                                 │
                                            ┌────┴────┐
                                            ▼         ▼
                                         tail -f   less +F
\`\`\``,
        en: `**When to Use Each Tool**

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    FILE TO VISUALIZE                         │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
              ┌─────────────────────────┐
              │   What do you need      │
              │       to see?           │
              └─────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
   ┌──────────┐     ┌──────────────┐   ┌──────────┐
   │ ENTIRE   │     │ NAVIGATE     │   │ SPECIFIC │
   │ small    │     │ large        │   │ PART     │
   │ file     │     │ file         │   │          │
   └──────────┘     └──────────────┘   └──────────┘
         │                 │                 │
         ▼                 ▼                 │
      ┌─────┐          ┌──────┐             │
      │ cat │          │ less │        ┌────┴────┐
      └─────┘          └──────┘        ▼         ▼
                                   ┌──────┐  ┌──────┐
                                   │ head │  │ tail │
                                   │start │  │ end  │
                                   └──────┘  └──────┘
                                                 │
                                                 ▼
                                          Real time?
                                                 │
                                            ┌────┴────┐
                                            ▼         ▼
                                         tail -f   less +F
\`\`\``
      }
    },
    {
      type: 'CODE',
      content: {
        es: `# Ejemplos prácticos combinados

# Ver primeras y últimas líneas de un log
head -n 5 app.log && echo "---" && tail -n 5 app.log

# Extraer rango de líneas (líneas 10-20)
head -n 20 archivo.txt | tail -n 11

# Monitorear log buscando errores
tail -f /var/log/app.log | grep --line-buffered "ERROR"

# Ver archivo con syntax highlighting (si tienes bat instalado)
# bat archivo.py

# Comparar inicio de dos archivos
diff <(head archivo1.txt) <(head archivo2.txt)

# Contar líneas mientras visualizas
cat -n archivo.txt | tail -n 1  # Muestra total de líneas`,
        en: `# Practical combined examples

# View first and last lines of a log
head -n 5 app.log && echo "---" && tail -n 5 app.log

# Extract range of lines (lines 10-20)
head -n 20 file.txt | tail -n 11

# Monitor log searching for errors
tail -f /var/log/app.log | grep --line-buffered "ERROR"

# View file with syntax highlighting (if you have bat installed)
# bat file.py

# Compare beginning of two files
diff <(head file1.txt) <(head file2.txt)

# Count lines while viewing
cat -n file.txt | tail -n 1  # Shows total lines`
      }
    }
  ],
  exercises: [
    {
      id: 'ex-1-4-1',
      type: 'TERMINAL',
      title: {
        es: 'Crear y Ver Archivo',
        en: 'Create and View File'
      },
      description: {
        es: 'Crea un archivo llamado "lista.txt" con los números del 1 al 20 (uno por línea), luego usa head para ver solo los primeros 5',
        en: 'Create a file called "list.txt" with numbers 1 to 20 (one per line), then use head to view only the first 5'
      },
      hint: {
        es: 'Usa seq 1 20 > lista.txt para crear el archivo, luego head -n 5 lista.txt',
        en: 'Use seq 1 20 > list.txt to create the file, then head -n 5 list.txt'
      },
      validation: {
        type: 'COMMAND_OUTPUT',
        expected: '1\n2\n3\n4\n5'
      },
      xpReward: 15
    },
    {
      id: 'ex-1-4-2',
      type: 'TERMINAL',
      title: {
        es: 'Extraer Rango de Líneas',
        en: 'Extract Range of Lines'
      },
      description: {
        es: 'Del archivo lista.txt anterior, extrae solo las líneas 8 a 12 combinando head y tail',
        en: 'From the previous list.txt file, extract only lines 8 to 12 combining head and tail'
      },
      hint: {
        es: 'head -n 12 lista.txt | tail -n 5',
        en: 'head -n 12 list.txt | tail -n 5'
      },
      validation: {
        type: 'COMMAND_OUTPUT',
        expected: '8\n9\n10\n11\n12'
      },
      xpReward: 20
    },
    {
      id: 'ex-1-4-3',
      type: 'TERMINAL',
      title: {
        es: 'Ver con Números de Línea',
        en: 'View with Line Numbers'
      },
      description: {
        es: 'Muestra el contenido de lista.txt con números de línea usando cat',
        en: 'Display the contents of list.txt with line numbers using cat'
      },
      hint: {
        es: 'Usa la opción -n de cat',
        en: 'Use the -n option of cat'
      },
      validation: {
        type: 'COMMAND_CONTAINS',
        expected: '-n'
      },
      xpReward: 15
    }
  ],
  quiz: {
    questions: [
      {
        id: 'q-1-4-1',
        question: {
          es: '¿Qué comando usarías para monitorear un archivo de log en tiempo real?',
          en: 'What command would you use to monitor a log file in real time?'
        },
        options: [
          { id: 'a', text: { es: 'cat -f archivo.log', en: 'cat -f file.log' } },
          { id: 'b', text: { es: 'head -f archivo.log', en: 'head -f file.log' } },
          { id: 'c', text: { es: 'tail -f archivo.log', en: 'tail -f file.log' } },
          { id: 'd', text: { es: 'less archivo.log', en: 'less file.log' } }
        ],
        correctAnswer: 'c',
        explanation: {
          es: 'tail -f sigue el archivo y muestra nuevas líneas a medida que se añaden, ideal para monitoreo en tiempo real.',
          en: 'tail -f follows the file and shows new lines as they are added, ideal for real-time monitoring.'
        }
      },
      {
        id: 'q-1-4-2',
        question: {
          es: '¿Cuál es la principal ventaja de less sobre cat para archivos grandes?',
          en: 'What is the main advantage of less over cat for large files?'
        },
        options: [
          { id: 'a', text: { es: 'less es más rápido', en: 'less is faster' } },
          { id: 'b', text: { es: 'less permite navegar y buscar sin cargar todo en memoria', en: 'less allows navigating and searching without loading everything into memory' } },
          { id: 'c', text: { es: 'less muestra colores', en: 'less shows colors' } },
          { id: 'd', text: { es: 'less puede editar archivos', en: 'less can edit files' } }
        ],
        correctAnswer: 'b',
        explanation: {
          es: 'less carga el archivo por partes, permitiendo navegar hacia adelante/atrás y buscar texto eficientemente.',
          en: 'less loads the file in parts, allowing forward/backward navigation and efficient text searching.'
        }
      }
    ]
  }
};
