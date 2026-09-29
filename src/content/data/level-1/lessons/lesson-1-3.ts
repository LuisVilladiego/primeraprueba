import type { Lesson } from '../../../../types';

export const lesson1_3: Lesson = {
  id: 'lesson-1-3',
  slug: 'file-operations',
  title: {
    es: 'Operaciones con Archivos: touch, mkdir, cp, mv, rm',
    en: 'File Operations: touch, mkdir, cp, mv, rm'
  },
  description: {
    es: 'Aprende a crear, copiar, mover y eliminar archivos y directorios',
    en: 'Learn to create, copy, move and delete files and directories'
  },
  duration: 35,
  xpReward: 150,
  order: 3,
  content: [
    {
      type: 'TEXT',
      content: {
        es: `# Operaciones con Archivos y Directorios

La capacidad de manipular archivos y directorios desde la terminal es una habilidad fundamental en Linux. En esta lección aprenderás los comandos esenciales para crear, copiar, mover y eliminar archivos y carpetas.

Estos comandos son la base de la administración de sistemas y te permitirán organizar tu trabajo de manera eficiente.`,
        en: `# File and Directory Operations

The ability to manipulate files and directories from the terminal is a fundamental skill in Linux. In this lesson you'll learn the essential commands to create, copy, move and delete files and folders.

These commands are the foundation of system administration and will allow you to organize your work efficiently.`
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Creando Archivos con touch**

El comando \`touch\` tiene dos funciones principales:
1. **Crear archivos vacíos** - Si el archivo no existe, lo crea
2. **Actualizar timestamps** - Si existe, actualiza la fecha de modificación

**Sintaxis básica:**
\`\`\`bash
touch archivo.txt           # Crear un archivo vacío
touch archivo1 archivo2     # Crear múltiples archivos
touch -a archivo.txt        # Solo actualizar tiempo de acceso
touch -m archivo.txt        # Solo actualizar tiempo de modificación
touch -t 202401011200 file  # Establecer fecha específica (YYYYMMDDhhmm)
\`\`\`

**Usos prácticos:**
- Crear archivos de configuración vacíos
- "Tocar" archivos para triggear scripts que monitorean cambios
- Crear archivos placeholder antes de editarlos`,
        en: `**Creating Files with touch**

The \`touch\` command has two main functions:
1. **Create empty files** - If the file doesn't exist, it creates it
2. **Update timestamps** - If it exists, updates the modification date

**Basic syntax:**
\`\`\`bash
touch file.txt              # Create an empty file
touch file1 file2           # Create multiple files
touch -a file.txt           # Only update access time
touch -m file.txt           # Only update modification time
touch -t 202401011200 file  # Set specific date (YYYYMMDDhhmm)
\`\`\`

**Practical uses:**
- Create empty configuration files
- "Touch" files to trigger scripts that monitor changes
- Create placeholder files before editing them`
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Creando Directorios con mkdir**

El comando \`mkdir\` (make directory) crea nuevos directorios.

**Sintaxis y opciones importantes:**
\`\`\`bash
mkdir carpeta               # Crear un directorio
mkdir carpeta1 carpeta2     # Crear múltiples directorios
mkdir -p ruta/a/subdirs     # Crear directorios padres si no existen
mkdir -m 755 carpeta        # Crear con permisos específicos
mkdir -v carpeta            # Modo verbose (mostrar lo que hace)
\`\`\`

**La opción -p es muy útil:**
\`\`\`bash
# Sin -p, esto falla si 'proyectos' no existe:
mkdir proyectos/nuevo/src    # Error!

# Con -p, crea toda la estructura:
mkdir -p proyectos/nuevo/src # Crea los 3 directorios
\`\`\`

**Estructuras comunes de proyectos:**
\`\`\`bash
mkdir -p proyecto/{src,docs,tests,config}
# Crea: proyecto/src, proyecto/docs, proyecto/tests, proyecto/config
\`\`\``,
        en: `**Creating Directories with mkdir**

The \`mkdir\` (make directory) command creates new directories.

**Syntax and important options:**
\`\`\`bash
mkdir folder                # Create a directory
mkdir folder1 folder2       # Create multiple directories
mkdir -p path/to/subdirs    # Create parent directories if they don't exist
mkdir -m 755 folder         # Create with specific permissions
mkdir -v folder             # Verbose mode (show what it does)
\`\`\`

**The -p option is very useful:**
\`\`\`bash
# Without -p, this fails if 'projects' doesn't exist:
mkdir projects/new/src      # Error!

# With -p, creates the entire structure:
mkdir -p projects/new/src   # Creates all 3 directories
\`\`\`

**Common project structures:**
\`\`\`bash
mkdir -p project/{src,docs,tests,config}
# Creates: project/src, project/docs, project/tests, project/config
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Copiando con cp**

El comando \`cp\` (copy) duplica archivos y directorios.

**Sintaxis básica:**
\`\`\`bash
cp origen destino           # Copiar archivo
cp archivo1 archivo2 dir/   # Copiar múltiples archivos a directorio
cp -r carpeta/ nueva/       # Copiar directorio recursivamente
\`\`\`

**Opciones importantes:**
| Opción | Descripción |
|--------|-------------|
| \`-r, -R\` | Recursivo (necesario para directorios) |
| \`-i\` | Interactivo (preguntar antes de sobrescribir) |
| \`-v\` | Verbose (mostrar archivos copiados) |
| \`-p\` | Preservar permisos, timestamps y propietario |
| \`-a\` | Archive mode (-r + -p + preservar links) |
| \`-u\` | Update (solo copiar si origen es más nuevo) |
| \`-n\` | No sobrescribir archivos existentes |

**Ejemplos prácticos:**
\`\`\`bash
cp -rv proyecto/ backup/           # Copiar con feedback
cp -a /etc/nginx /backup/          # Backup preservando todo
cp -i archivo.txt ~/Documents/     # Copiar con confirmación
cp *.txt textos/                   # Copiar todos los .txt
\`\`\``,
        en: `**Copying with cp**

The \`cp\` (copy) command duplicates files and directories.

**Basic syntax:**
\`\`\`bash
cp source destination       # Copy file
cp file1 file2 dir/         # Copy multiple files to directory
cp -r folder/ new/          # Copy directory recursively
\`\`\`

**Important options:**
| Option | Description |
|--------|-------------|
| \`-r, -R\` | Recursive (required for directories) |
| \`-i\` | Interactive (ask before overwriting) |
| \`-v\` | Verbose (show copied files) |
| \`-p\` | Preserve permissions, timestamps and owner |
| \`-a\` | Archive mode (-r + -p + preserve links) |
| \`-u\` | Update (only copy if source is newer) |
| \`-n\` | Don't overwrite existing files |

**Practical examples:**
\`\`\`bash
cp -rv project/ backup/            # Copy with feedback
cp -a /etc/nginx /backup/          # Backup preserving everything
cp -i file.txt ~/Documents/        # Copy with confirmation
cp *.txt texts/                    # Copy all .txt files
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Moviendo y Renombrando con mv**

El comando \`mv\` (move) mueve archivos/directorios Y también los renombra.

**Sintaxis:**
\`\`\`bash
mv origen destino           # Mover o renombrar
mv archivo1 archivo2 dir/   # Mover múltiples archivos
mv viejo.txt nuevo.txt      # Renombrar archivo
mv carpeta/ nueva_carpeta/  # Renombrar directorio
\`\`\`

**Opciones importantes:**
| Opción | Descripción |
|--------|-------------|
| \`-i\` | Interactivo (preguntar antes de sobrescribir) |
| \`-v\` | Verbose (mostrar lo que hace) |
| \`-n\` | No sobrescribir archivos existentes |
| \`-u\` | Update (mover solo si origen es más nuevo) |
| \`-b\` | Crear backup del destino si existe |

**Diferencia clave con cp:**
- \`mv\` es casi instantáneo en el mismo sistema de archivos (solo cambia metadata)
- \`mv\` NO necesita \`-r\` para directorios

**Ejemplos:**
\`\`\`bash
mv archivo.txt ~/Documents/        # Mover archivo
mv -i *.jpg fotos/                 # Mover con confirmación
mv proyecto proyecto_backup        # Renombrar directorio
mv -v logs/*.log /var/log/app/     # Mover con feedback
\`\`\``,
        en: `**Moving and Renaming with mv**

The \`mv\` (move) command moves files/directories AND also renames them.

**Syntax:**
\`\`\`bash
mv source destination       # Move or rename
mv file1 file2 dir/         # Move multiple files
mv old.txt new.txt          # Rename file
mv folder/ new_folder/      # Rename directory
\`\`\`

**Important options:**
| Option | Description |
|--------|-------------|
| \`-i\` | Interactive (ask before overwriting) |
| \`-v\` | Verbose (show what it does) |
| \`-n\` | Don't overwrite existing files |
| \`-u\` | Update (move only if source is newer) |
| \`-b\` | Create backup of destination if it exists |

**Key difference from cp:**
- \`mv\` is almost instant on the same filesystem (only changes metadata)
- \`mv\` does NOT need \`-r\` for directories

**Examples:**
\`\`\`bash
mv file.txt ~/Documents/           # Move file
mv -i *.jpg photos/                # Move with confirmation
mv project project_backup          # Rename directory
mv -v logs/*.log /var/log/app/     # Move with feedback
\`\`\``
      }
    },
    {
      type: 'WARNING',
      content: {
        es: `**⚠️ El Comando rm - Eliminar con Precaución**

El comando \`rm\` (remove) elimina archivos y directorios **PERMANENTEMENTE**. No hay papelera de reciclaje en Linux por defecto.

**Sintaxis básica:**
\`\`\`bash
rm archivo.txt              # Eliminar archivo
rm archivo1 archivo2        # Eliminar múltiples archivos
rm -r carpeta/              # Eliminar directorio y contenido
rm -f archivo.txt           # Forzar (sin confirmación, sin errores)
\`\`\`

**⚠️ PELIGRO - Comandos que NUNCA debes ejecutar:**
\`\`\`bash
rm -rf /                    # ¡DESTRUYE TODO EL SISTEMA!
rm -rf /*                   # Lo mismo
rm -rf ~                    # Elimina tu home completo
rm -rf .                    # Elimina directorio actual y todo dentro
\`\`\`

**Opciones de seguridad:**
| Opción | Descripción |
|--------|-------------|
| \`-i\` | Preguntar por cada archivo |
| \`-I\` | Preguntar una vez si son más de 3 archivos |
| \`-v\` | Mostrar lo que se elimina |
| \`--preserve-root\` | Proteger / (activo por defecto) |

**Buenas prácticas:**
\`\`\`bash
alias rm='rm -i'            # Siempre pedir confirmación
rm -ri carpeta/             # Interactivo + recursivo
ls carpeta/ && rm -r carpeta/  # Ver antes de eliminar
\`\`\``,
        en: `**⚠️ The rm Command - Delete with Caution**

The \`rm\` (remove) command deletes files and directories **PERMANENTLY**. There is no recycle bin in Linux by default.

**Basic syntax:**
\`\`\`bash
rm file.txt                 # Delete file
rm file1 file2              # Delete multiple files
rm -r folder/               # Delete directory and contents
rm -f file.txt              # Force (no confirmation, no errors)
\`\`\`

**⚠️ DANGER - Commands you should NEVER run:**
\`\`\`bash
rm -rf /                    # DESTROYS THE ENTIRE SYSTEM!
rm -rf /*                   # Same thing
rm -rf ~                    # Deletes your entire home
rm -rf .                    # Deletes current directory and everything inside
\`\`\`

**Safety options:**
| Option | Description |
|--------|-------------|
| \`-i\` | Ask for each file |
| \`-I\` | Ask once if more than 3 files |
| \`-v\` | Show what is being deleted |
| \`--preserve-root\` | Protect / (active by default) |

**Best practices:**
\`\`\`bash
alias rm='rm -i'            # Always ask for confirmation
rm -ri folder/              # Interactive + recursive
ls folder/ && rm -r folder/ # Look before deleting
\`\`\``
      }
    },
    {
      type: 'KEY_CONCEPT',
      content: {
        es: `**Eliminar Directorios: rmdir vs rm -r**

Hay dos formas de eliminar directorios:

**rmdir - Solo directorios VACÍOS:**
\`\`\`bash
rmdir carpeta_vacia/        # Elimina solo si está vacía
rmdir -p a/b/c/             # Elimina a/b/c, luego a/b, luego a (si vacíos)
rmdir carpeta1 carpeta2     # Eliminar múltiples directorios vacíos
\`\`\`

**rm -r - Directorios con contenido:**
\`\`\`bash
rm -r carpeta/              # Elimina directorio y TODO su contenido
rm -rf carpeta/             # Forzar sin preguntas
rm -ri carpeta/             # Con confirmación interactiva
\`\`\`

**¿Cuál usar?**
- Usa \`rmdir\` cuando esperas que el directorio esté vacío (más seguro)
- Usa \`rm -r\` cuando necesitas eliminar contenido
- Siempre considera usar \`-i\` para confirmación`,
        en: `**Removing Directories: rmdir vs rm -r**

There are two ways to remove directories:

**rmdir - Only EMPTY directories:**
\`\`\`bash
rmdir empty_folder/         # Removes only if empty
rmdir -p a/b/c/             # Removes a/b/c, then a/b, then a (if empty)
rmdir folder1 folder2       # Remove multiple empty directories
\`\`\`

**rm -r - Directories with content:**
\`\`\`bash
rm -r folder/               # Removes directory and ALL its content
rm -rf folder/              # Force without questions
rm -ri folder/              # With interactive confirmation
\`\`\`

**Which one to use?**
- Use \`rmdir\` when you expect the directory to be empty (safer)
- Use \`rm -r\` when you need to remove content
- Always consider using \`-i\` for confirmation`
      }
    },
    {
      type: 'TIP',
      content: {
        es: `**Trucos y Atajos Útiles**

**Expansión de llaves (Brace Expansion):**
\`\`\`bash
# Crear múltiples archivos/carpetas de una vez
touch archivo{1,2,3}.txt    # archivo1.txt, archivo2.txt, archivo3.txt
mkdir -p proyecto/{src,lib,test}/{main,utils}

# Hacer backup rápido
cp config.yaml{,.bak}       # Crea config.yaml.bak

# Renombrar con patrón
mv archivo.{txt,md}         # archivo.txt → archivo.md
\`\`\`

**Combinar comandos:**
\`\`\`bash
# Crear directorio y entrar
mkdir proyecto && cd proyecto

# Crear estructura de proyecto completa
mkdir -p miapp/{src,tests,docs} && touch miapp/README.md

# Backup antes de modificar
cp importante.conf{,.bak} && vim importante.conf
\`\`\`

**Usar variables:**
\`\`\`bash
PROYECTO="mi-proyecto"
mkdir -p $PROYECTO/{src,tests}
touch $PROYECTO/README.md
\`\`\``,
        en: `**Useful Tricks and Shortcuts**

**Brace Expansion:**
\`\`\`bash
# Create multiple files/folders at once
touch file{1,2,3}.txt       # file1.txt, file2.txt, file3.txt
mkdir -p project/{src,lib,test}/{main,utils}

# Quick backup
cp config.yaml{,.bak}       # Creates config.yaml.bak

# Rename with pattern
mv file.{txt,md}            # file.txt → file.md
\`\`\`

**Combine commands:**
\`\`\`bash
# Create directory and enter
mkdir project && cd project

# Create complete project structure
mkdir -p myapp/{src,tests,docs} && touch myapp/README.md

# Backup before modifying
cp important.conf{,.bak} && vim important.conf
\`\`\`

**Use variables:**
\`\`\`bash
PROJECT="my-project"
mkdir -p $PROJECT/{src,tests}
touch $PROJECT/README.md
\`\`\``
      }
    }
  ],
  exercises: [
    {
      id: 'ex-1-3-1',
      type: 'TERMINAL',
      title: {
        es: 'Crear Estructura de Proyecto',
        en: 'Create Project Structure'
      },
      description: {
        es: 'Crea la siguiente estructura de directorios para un proyecto web:\nwebapp/\n├── src/\n│   ├── css/\n│   └── js/\n├── public/\n│   └── images/\n└── docs/',
        en: 'Create the following directory structure for a web project:\nwebapp/\n├── src/\n│   ├── css/\n│   └── js/\n├── public/\n│   └── images/\n└── docs/'
      },
      hint: {
        es: 'Usa mkdir -p con expansión de llaves: mkdir -p webapp/{src/{css,js},public/images,docs}',
        en: 'Use mkdir -p with brace expansion: mkdir -p webapp/{src/{css,js},public/images,docs}'
      },
      validation: {
        type: 'DIRECTORY_EXISTS',
        expected: 'webapp/src/css && webapp/src/js && webapp/public/images && webapp/docs'
      },
      xpReward: 20
    },
    {
      id: 'ex-1-3-2',
      type: 'TERMINAL',
      title: {
        es: 'Copiar y Organizar Archivos',
        en: 'Copy and Organize Files'
      },
      description: {
        es: 'Crea 3 archivos de texto (nota1.txt, nota2.txt, nota3.txt), luego cópialos a una carpeta llamada "backup"',
        en: 'Create 3 text files (note1.txt, note2.txt, note3.txt), then copy them to a folder called "backup"'
      },
      hint: {
        es: 'Usa touch archivo{1,2,3}.txt, mkdir backup, cp *.txt backup/',
        en: 'Use touch file{1,2,3}.txt, mkdir backup, cp *.txt backup/'
      },
      validation: {
        type: 'FILE_EXISTS',
        expected: 'backup/nota1.txt && backup/nota2.txt && backup/nota3.txt'
      },
      xpReward: 20
    },
    {
      id: 'ex-1-3-3',
      type: 'TERMINAL',
      title: {
        es: 'Mover y Renombrar',
        en: 'Move and Rename'
      },
      description: {
        es: 'Crea un archivo llamado "borrador.txt", renómbralo a "final.txt", luego muévelo a una carpeta "documentos" que debes crear',
        en: 'Create a file called "draft.txt", rename it to "final.txt", then move it to a "documents" folder you must create'
      },
      hint: {
        es: 'touch borrador.txt → mv borrador.txt final.txt → mkdir documentos → mv final.txt documentos/',
        en: 'touch draft.txt → mv draft.txt final.txt → mkdir documents → mv final.txt documents/'
      },
      validation: {
        type: 'FILE_EXISTS',
        expected: 'documentos/final.txt'
      },
      xpReward: 25
    }
  ],
  quiz: {
    questions: [
      {
        id: 'q-1-3-1',
        question: {
          es: '¿Qué opción de mkdir crea directorios padres automáticamente si no existen?',
          en: 'Which mkdir option creates parent directories automatically if they don\'t exist?'
        },
        options: [
          { id: 'a', text: { es: '-r', en: '-r' } },
          { id: 'b', text: { es: '-p', en: '-p' } },
          { id: 'c', text: { es: '-f', en: '-f' } },
          { id: 'd', text: { es: '-a', en: '-a' } }
        ],
        correctAnswer: 'b',
        explanation: {
          es: 'La opción -p (parents) crea toda la ruta de directorios si no existen.',
          en: 'The -p (parents) option creates the entire directory path if it doesn\'t exist.'
        }
      },
      {
        id: 'q-1-3-2',
        question: {
          es: '¿Por qué rm -rf / es extremadamente peligroso?',
          en: 'Why is rm -rf / extremely dangerous?'
        },
        options: [
          { id: 'a', text: { es: 'Reinicia el sistema', en: 'Restarts the system' } },
          { id: 'b', text: { es: 'Elimina TODOS los archivos del sistema sin confirmación', en: 'Deletes ALL system files without confirmation' } },
          { id: 'c', text: { es: 'Solo elimina archivos del usuario', en: 'Only deletes user files' } },
          { id: 'd', text: { es: 'Mueve archivos a la papelera', en: 'Moves files to trash' } }
        ],
        correctAnswer: 'b',
        explanation: {
          es: 'rm -rf / elimina recursivamente (-r) y forzadamente (-f) todo desde la raíz (/), destruyendo el sistema operativo completo.',
          en: 'rm -rf / recursively (-r) and forcefully (-f) deletes everything from root (/), destroying the entire operating system.'
        }
      }
    ]
  }
};
