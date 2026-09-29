import type { Lesson } from '../../../../types';

export const lesson1_6: Lesson = {
  id: 'lesson-1-6',
  slug: 'wildcards-globbing',
  title: {
    es: 'Wildcards y Globbing: *, ?, []',
    en: 'Wildcards and Globbing: *, ?, []'
  },
  description: {
    es: 'Domina los patrones para seleccionar múltiples archivos de manera eficiente',
    en: 'Master patterns to select multiple files efficiently'
  },
  duration: 30,
  xpReward: 140,
  order: 6,
  content: [
    {
      type: 'TEXT',
      content: {
        es: `# Wildcards y Globbing

Los wildcards (comodines) son caracteres especiales que representan otros caracteres en nombres de archivos. El proceso de expandir estos patrones se llama "globbing" o "pathname expansion".

Esta es una de las características más poderosas de la terminal, permitiéndote operar en múltiples archivos con un solo comando.`,
        en: `# Wildcards and Globbing

Wildcards are special characters that represent other characters in filenames. The process of expanding these patterns is called "globbing" or "pathname expansion".

This is one of the most powerful features of the terminal, allowing you to operate on multiple files with a single command.`
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**El Asterisco (*) - Cero o Más Caracteres**

El \`*\` coincide con cualquier cantidad de caracteres (incluyendo ninguno).

**Ejemplos básicos:**
\`\`\`bash
ls *.txt            # Todos los archivos .txt
ls foto*            # Archivos que empiezan con "foto"
ls *2024*           # Archivos que contienen "2024"
ls *.tar.gz         # Archivos .tar.gz
\`\`\`

**Uso en comandos:**
\`\`\`bash
cp *.jpg fotos/           # Copiar todas las imágenes jpg
rm *.tmp                  # Eliminar archivos temporales
mv informe* documentos/   # Mover archivos que empiezan con "informe"
cat *.log                 # Ver contenido de todos los logs
\`\`\`

**Combinaciones:**
\`\`\`bash
ls */*                    # Archivos en subdirectorios inmediatos
ls proyecto/*.js          # Archivos .js en carpeta proyecto
ls **/*.py                # Recursivo (en bash con globstar activado)
\`\`\`

**⚠️ Nota:** \`*\` NO coincide con archivos ocultos (que empiezan con .)`,
        en: `**The Asterisk (*) - Zero or More Characters**

The \`*\` matches any number of characters (including none).

**Basic examples:**
\`\`\`bash
ls *.txt            # All .txt files
ls photo*           # Files starting with "photo"
ls *2024*           # Files containing "2024"
ls *.tar.gz         # .tar.gz files
\`\`\`

**Usage in commands:**
\`\`\`bash
cp *.jpg photos/          # Copy all jpg images
rm *.tmp                  # Delete temporary files
mv report* documents/     # Move files starting with "report"
cat *.log                 # View contents of all logs
\`\`\`

**Combinations:**
\`\`\`bash
ls */*                    # Files in immediate subdirectories
ls project/*.js           # .js files in project folder
ls **/*.py                # Recursive (in bash with globstar enabled)
\`\`\`

**⚠️ Note:** \`*\` does NOT match hidden files (starting with .)`
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**El Signo de Interrogación (?) - Un Carácter**

El \`?\` coincide con exactamente UN carácter cualquiera.

**Ejemplos:**
\`\`\`bash
ls foto?.jpg        # foto1.jpg, foto2.jpg, fotoA.jpg (no foto10.jpg)
ls ???.txt          # Archivos .txt con nombre de 3 caracteres
ls archivo?.txt     # archivo1.txt, archivoX.txt, etc.
ls ?????            # Archivos con nombres de exactamente 5 caracteres
\`\`\`

**Comparación con *:**
\`\`\`bash
# Si tienes: foto1.jpg, foto2.jpg, foto10.jpg, foto100.jpg

ls foto*.jpg        # Todos: foto1, foto2, foto10, foto100
ls foto?.jpg        # Solo: foto1, foto2 (un dígito)
ls foto??.jpg       # Solo: foto10 (dos dígitos)
ls foto???.jpg      # Solo: foto100 (tres dígitos)
\`\`\`

**Uso práctico:**
\`\`\`bash
# Renombrar archivos con patrón específico
mv cap??.pdf capitulo/    # cap01.pdf a cap99.pdf

# Buscar archivos de cierta longitud
ls -la ????????.txt       # Archivos .txt con nombre de 8 caracteres
\`\`\``,
        en: `**The Question Mark (?) - One Character**

The \`?\` matches exactly ONE character of any kind.

**Examples:**
\`\`\`bash
ls photo?.jpg       # photo1.jpg, photo2.jpg, photoA.jpg (not photo10.jpg)
ls ???.txt          # .txt files with 3-character names
ls file?.txt        # file1.txt, fileX.txt, etc.
ls ?????            # Files with exactly 5-character names
\`\`\`

**Comparison with *:**
\`\`\`bash
# If you have: photo1.jpg, photo2.jpg, photo10.jpg, photo100.jpg

ls photo*.jpg       # All: photo1, photo2, photo10, photo100
ls photo?.jpg       # Only: photo1, photo2 (one digit)
ls photo??.jpg      # Only: photo10 (two digits)
ls photo???.jpg     # Only: photo100 (three digits)
\`\`\`

**Practical usage:**
\`\`\`bash
# Rename files with specific pattern
mv ch??.pdf chapters/     # ch01.pdf to ch99.pdf

# Find files of certain length
ls -la ????????.txt       # .txt files with 8-character names
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Corchetes [] - Conjunto de Caracteres**

Los \`[]\` coinciden con UN carácter del conjunto especificado.

**Sintaxis:**
\`\`\`bash
[abc]       # a, b, o c
[a-z]       # Cualquier letra minúscula
[A-Z]       # Cualquier letra mayúscula
[0-9]       # Cualquier dígito
[a-zA-Z]    # Cualquier letra
[!abc]      # Cualquier carácter EXCEPTO a, b, c
[^abc]      # Lo mismo (sintaxis alternativa)
\`\`\`

**Ejemplos prácticos:**
\`\`\`bash
ls foto[123].jpg          # foto1.jpg, foto2.jpg, foto3.jpg
ls foto[1-5].jpg          # foto1.jpg hasta foto5.jpg
ls [A-Z]*.txt             # Archivos .txt que empiezan con mayúscula
ls *[0-9].log             # Logs que terminan en número
ls [!.]*.conf             # Archivos .conf no ocultos
\`\`\`

**Combinando con otros wildcards:**
\`\`\`bash
ls [a-z]*[0-9].txt        # Empieza minúscula, termina número
ls ???[0-9][0-9].pdf      # 3 chars + 2 dígitos + .pdf
ls [A-Z][a-z]*.sh         # CamelCase .sh scripts
\`\`\``,
        en: `**Brackets [] - Character Set**

\`[]\` matches ONE character from the specified set.

**Syntax:**
\`\`\`bash
[abc]       # a, b, or c
[a-z]       # Any lowercase letter
[A-Z]       # Any uppercase letter
[0-9]       # Any digit
[a-zA-Z]    # Any letter
[!abc]      # Any character EXCEPT a, b, c
[^abc]      # Same (alternative syntax)
\`\`\`

**Practical examples:**
\`\`\`bash
ls photo[123].jpg         # photo1.jpg, photo2.jpg, photo3.jpg
ls photo[1-5].jpg         # photo1.jpg through photo5.jpg
ls [A-Z]*.txt             # .txt files starting with uppercase
ls *[0-9].log             # Logs ending in number
ls [!.]*.conf             # Non-hidden .conf files
\`\`\`

**Combining with other wildcards:**
\`\`\`bash
ls [a-z]*[0-9].txt        # Starts lowercase, ends with number
ls ???[0-9][0-9].pdf      # 3 chars + 2 digits + .pdf
ls [A-Z][a-z]*.sh         # CamelCase .sh scripts
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Llaves {} - Expansión de Alternativas**

Las llaves \`{}\` NO son globbing (no coinciden con archivos existentes), sino expansión del shell. Generan todas las combinaciones posibles.

**Diferencia clave:**
\`\`\`bash
# Globbing: solo archivos que EXISTEN
ls *.txt                  # Solo muestra .txt que existen

# Brace expansion: GENERA texto
echo archivo{1,2,3}.txt   # archivo1.txt archivo2.txt archivo3.txt
# ↑ Genera los nombres aunque no existan
\`\`\`

**Sintaxis:**
\`\`\`bash
{a,b,c}           # a b c
{1..5}            # 1 2 3 4 5
{a..z}            # a b c ... z
{01..10}          # 01 02 03 ... 10 (con padding)
{1..10..2}        # 1 3 5 7 9 (step de 2)
\`\`\`

**Usos creativos:**
\`\`\`bash
# Crear múltiples archivos
touch archivo{1..10}.txt

# Backup rápido
cp config.yml{,.bak}      # Crea config.yml.bak

# Múltiples extensiones
ls imagen.{jpg,png,gif}

# Estructuras de proyecto
mkdir -p proyecto/{src,test,docs}/{main,util}
\`\`\``,
        en: `**Braces {} - Alternative Expansion**

Braces \`{}\` are NOT globbing (they don't match existing files), but shell expansion. They generate all possible combinations.

**Key difference:**
\`\`\`bash
# Globbing: only files that EXIST
ls *.txt                  # Only shows existing .txt

# Brace expansion: GENERATES text
echo file{1,2,3}.txt      # file1.txt file2.txt file3.txt
# ↑ Generates names even if they don't exist
\`\`\`

**Syntax:**
\`\`\`bash
{a,b,c}           # a b c
{1..5}            # 1 2 3 4 5
{a..z}            # a b c ... z
{01..10}          # 01 02 03 ... 10 (with padding)
{1..10..2}        # 1 3 5 7 9 (step of 2)
\`\`\`

**Creative uses:**
\`\`\`bash
# Create multiple files
touch file{1..10}.txt

# Quick backup
cp config.yml{,.bak}      # Creates config.yml.bak

# Multiple extensions
ls image.{jpg,png,gif}

# Project structures
mkdir -p project/{src,test,docs}/{main,util}
\`\`\``
      }
    },
    {
      type: 'WARNING',
      content: {
        es: `**⚠️ Cuidado con los Wildcards**

**El shell expande ANTES de ejecutar:**
\`\`\`bash
# Si tienes 1000 archivos .log:
rm *.log
# Se convierte en: rm archivo1.log archivo2.log ... (1000 argumentos)
\`\`\`

**Verificar antes de eliminar:**
\`\`\`bash
# SIEMPRE verifica qué archivos coinciden primero:
ls *.tmp                  # Ver qué coincide
rm *.tmp                  # Solo después de verificar

# O usa rm interactivo:
rm -i *.tmp               # Confirmar cada archivo
\`\`\`

**Cuidado con espacios en nombres:**
\`\`\`bash
# Si tienes "mi archivo.txt":
ls mi*.txt                # Funciona
rm mi*.txt                # Funciona

# Pero:
archivo="mi archivo.txt"
rm $archivo               # ¡Error! Se divide en "mi" y "archivo.txt"
rm "$archivo"             # Correcto: usa comillas
\`\`\``,
        en: `**⚠️ Be Careful with Wildcards**

**The shell expands BEFORE executing:**
\`\`\`bash
# If you have 1000 .log files:
rm *.log
# Becomes: rm file1.log file2.log ... (1000 arguments)
\`\`\`

**Verify before deleting:**
\`\`\`bash
# ALWAYS verify what files match first:
ls *.tmp                  # See what matches
rm *.tmp                  # Only after verifying

# Or use interactive rm:
rm -i *.tmp               # Confirm each file
\`\`\`

**Be careful with spaces in names:**
\`\`\`bash
# If you have "my file.txt":
ls my*.txt                # Works
rm my*.txt                # Works

# But:
file="my file.txt"
rm $file                  # Error! Splits into "my" and "file.txt"
rm "$file"                # Correct: use quotes
\`\`\``
      }
    },
    {
      type: 'DIAGRAM',
      content: {
        es: `**Referencia Rápida de Wildcards**

\`\`\`
┌──────────────┬─────────────────────────────────────────────┐
│   PATRÓN     │              COINCIDE CON                   │
├──────────────┼─────────────────────────────────────────────┤
│     *        │  Cualquier cadena (0+ caracteres)           │
│     ?        │  Exactamente un carácter                    │
│   [abc]      │  Un carácter: a, b o c                      │
│   [a-z]      │  Un carácter en rango: a hasta z            │
│   [!abc]     │  Un carácter que NO sea a, b ni c           │
│   [^abc]     │  Igual que [!abc]                           │
├──────────────┼─────────────────────────────────────────────┤
│  {a,b,c}     │  Expansión: genera a, b y c (no glob)       │
│  {1..5}      │  Secuencia: 1 2 3 4 5                       │
└──────────────┴─────────────────────────────────────────────┘

Ejemplos de Combinaciones:
┌─────────────────────┬───────────────────────────────────────┐
│  *.txt              │  Todos los .txt                       │
│  foto?.jpg          │  foto1.jpg, fotoX.jpg (1 char)        │
│  [A-Z]*.pdf         │  PDFs que empiezan con mayúscula      │
│  *[0-9][0-9].log    │  Logs terminando en 2 dígitos         │
│  {src,lib}/*.js     │  .js en src/ o lib/                   │
└─────────────────────┴───────────────────────────────────────┘
\`\`\``,
        en: `**Quick Wildcard Reference**

\`\`\`
┌──────────────┬─────────────────────────────────────────────┐
│   PATTERN    │              MATCHES                        │
├──────────────┼─────────────────────────────────────────────┤
│     *        │  Any string (0+ characters)                 │
│     ?        │  Exactly one character                      │
│   [abc]      │  One character: a, b or c                   │
│   [a-z]      │  One character in range: a to z             │
│   [!abc]     │  One character that is NOT a, b or c        │
│   [^abc]     │  Same as [!abc]                             │
├──────────────┼─────────────────────────────────────────────┤
│  {a,b,c}     │  Expansion: generates a, b and c (not glob) │
│  {1..5}      │  Sequence: 1 2 3 4 5                        │
└──────────────┴─────────────────────────────────────────────┘

Combination Examples:
┌─────────────────────┬───────────────────────────────────────┐
│  *.txt              │  All .txt files                       │
│  photo?.jpg         │  photo1.jpg, photoX.jpg (1 char)      │
│  [A-Z]*.pdf         │  PDFs starting with uppercase         │
│  *[0-9][0-9].log    │  Logs ending in 2 digits              │
│  {src,lib}/*.js     │  .js in src/ or lib/                  │
└─────────────────────┴───────────────────────────────────────┘
\`\`\``
      }
    }
  ],
  exercises: [
    {
      id: 'ex-1-6-1',
      type: 'TERMINAL',
      title: {
        es: 'Crear Archivos con Patrón',
        en: 'Create Files with Pattern'
      },
      description: {
        es: 'Usa brace expansion para crear 5 archivos: reporte1.txt hasta reporte5.txt',
        en: 'Use brace expansion to create 5 files: report1.txt through report5.txt'
      },
      hint: {
        es: 'touch reporte{1..5}.txt',
        en: 'touch report{1..5}.txt'
      },
      validation: {
        type: 'FILE_EXISTS',
        expected: 'reporte1.txt && reporte5.txt'
      },
      xpReward: 15
    },
    {
      id: 'ex-1-6-2',
      type: 'TERMINAL',
      title: {
        es: 'Listar con Wildcard',
        en: 'List with Wildcard'
      },
      description: {
        es: 'Lista solo los archivos reporte que terminan en un dígito usando el wildcard ?',
        en: 'List only report files that end in a digit using the ? wildcard'
      },
      hint: {
        es: 'ls reporte?.txt',
        en: 'ls report?.txt'
      },
      validation: {
        type: 'COMMAND_CONTAINS',
        expected: 'reporte?.txt'
      },
      xpReward: 15
    },
    {
      id: 'ex-1-6-3',
      type: 'TERMINAL',
      title: {
        es: 'Usar Rangos',
        en: 'Use Ranges'
      },
      description: {
        es: 'Lista solo reporte1.txt, reporte2.txt y reporte3.txt usando corchetes con rango',
        en: 'List only report1.txt, report2.txt and report3.txt using brackets with range'
      },
      hint: {
        es: 'ls reporte[1-3].txt',
        en: 'ls report[1-3].txt'
      },
      validation: {
        type: 'COMMAND_CONTAINS',
        expected: '[1-3]'
      },
      xpReward: 20
    }
  ],
  quiz: {
    questions: [
      {
        id: 'q-1-6-1',
        question: {
          es: '¿Qué patrón coincide con archivos de exactamente 4 caracteres más la extensión .txt?',
          en: 'What pattern matches files with exactly 4 characters plus the .txt extension?'
        },
        options: [
          { id: 'a', text: { es: '*.txt', en: '*.txt' } },
          { id: 'b', text: { es: '????.txt', en: '????.txt' } },
          { id: 'c', text: { es: '[4].txt', en: '[4].txt' } },
          { id: 'd', text: { es: '{4}.txt', en: '{4}.txt' } }
        ],
        correctAnswer: 'b',
        explanation: {
          es: 'Cada ? coincide con exactamente un carácter, así que ???? coincide con exactamente 4 caracteres.',
          en: 'Each ? matches exactly one character, so ???? matches exactly 4 characters.'
        }
      },
      {
        id: 'q-1-6-2',
        question: {
          es: '¿Cuál es la diferencia principal entre [abc] y {a,b,c}?',
          en: 'What is the main difference between [abc] and {a,b,c}?'
        },
        options: [
          { id: 'a', text: { es: 'Son exactamente iguales', en: 'They are exactly the same' } },
          { id: 'b', text: { es: '[abc] es globbing (archivos existentes), {a,b,c} genera texto', en: '[abc] is globbing (existing files), {a,b,c} generates text' } },
          { id: 'c', text: { es: '{a,b,c} solo funciona con números', en: '{a,b,c} only works with numbers' } },
          { id: 'd', text: { es: '[abc] es más rápido', en: '[abc] is faster' } }
        ],
        correctAnswer: 'b',
        explanation: {
          es: '[abc] coincide con archivos existentes, mientras que {a,b,c} genera las alternativas como texto antes de cualquier comando.',
          en: '[abc] matches existing files, while {a,b,c} generates the alternatives as text before any command.'
        }
      }
    ]
  }
};
