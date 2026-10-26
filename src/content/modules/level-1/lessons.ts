import type { Lesson, ContentBlock, Quiz } from "@/types";
import { level1RestLessons } from "./rest";

function text(id: string, order: number, esTitle: string, esText: string, enTitle: string, enText: string): ContentBlock {
  return {
    id,
    type: "TEXT",
    order,
    content: {
      es: { title: esTitle, text: esText },
      en: { title: enTitle, text: enText },
    },
  };
}

function concept(
  id: string,
  order: number,
  type: "KEY_CONCEPT" | "TIP" | "WARNING" | "CODE",
  esTitle: string,
  esText: string,
  enTitle: string,
  enText: string,
): ContentBlock {
  return {
    id,
    type,
    order,
    content: {
      es: { title: esTitle, text: esText },
      en: { title: enTitle, text: enText },
    },
  };
}

function quiz(
  lessonId: string,
  questions: Quiz["questions"],
): Quiz {
  return {
    id: `quiz-${lessonId}`,
    lessonId,
    questions,
    passingScore: 70,
  };
}

const lesson11: Lesson = {
  id: "lesson-1-1",
  moduleId: "level-1",
  slug: "the-terminal",
  title: { es: "La terminal", en: "The terminal" },
  description: {
    es: "Entiende qué es la terminal, el shell y cómo se lee un comando antes de escribir el primero.",
    en: "Understand the terminal, the shell, and how to read a command before you type the first one.",
  },
  order: 1,
  duration: 20,
  exercises: [],
  contentBlocks: [
    text(
      "b-1-1-1",
      1,
      "Qué problema resuelve",
      `La interfaz gráfica es cómoda para una persona frente a un escritorio. En servidores, automatización y trabajo remoto casi no hay ventanas: hay una sesión de texto.

La terminal es esa sesión. No es Linux en sí. Es el lugar donde escribes instrucciones y lees la respuesta del sistema.`,
      "What problem it solves",
      `A graphical interface is comfortable for one person at a desktop. On servers, automation, and remote work there are almost no windows: there is a text session.

The terminal is that session. It is not Linux itself. It is where you type instructions and read the system's reply.`,
    ),
    concept(
      "b-1-1-2",
      2,
      "KEY_CONCEPT",
      "Terminal, shell y Bash",
      `Son tres capas distintas:

- **Terminal** (o emulador de terminal): la ventana que muestra texto. Ejemplos: GNOME Terminal, Kitty, la terminal integrada de esta app.
- **Shell**: el programa que lee lo que escribes, lo interpreta y lanza otros programas. En Linux el más común es **Bash**.
- **Comando**: un programa (o una orden interna del shell) con argumentos.

Cuando ves algo como \`usuario@portatil:~$\`, eso es el **prompt**. Te dice quién eres, en qué máquina estás y en qué carpeta. El \`$\` indica un usuario normal. Un \`#\` indica root: ten más cuidado.`,
      "Terminal, shell, and Bash",
      `These are three different layers:

- **Terminal** (or terminal emulator): the window that shows text. Examples: GNOME Terminal, Kitty, this app's built-in terminal.
- **Shell**: the program that reads what you type, interprets it, and starts other programs. On Linux the most common one is **Bash**.
- **Command**: a program (or a shell builtin) plus arguments.

When you see something like \`user@laptop:~$\`, that is the **prompt**. It tells you who you are, which machine you are on, and which folder you are in. \`$\` means a normal user. \`#\` means root: be more careful.`,
    ),
    concept(
      "b-1-1-3",
      3,
      "CODE",
      "Anatomía de un comando",
      `ls -la /etc

- \`ls\` es el programa.
- \`-la\` son opciones (flags). Aquí: lista larga (\`-l\`) incluyendo ocultos (\`-a\`).
- \`/etc\` es un argumento: la carpeta sobre la que actúa el comando.

El shell separa palabras por espacios. Por eso un nombre con espacios debe ir entre comillas: \`cd "Mis documentos"\`.`,
      "Anatomy of a command",
      `ls -la /etc

- \`ls\` is the program.
- \`-la\` are options (flags). Here: long list (\`-l\`) including hidden files (\`-a\`).
- \`/etc\` is an argument: the folder the command acts on.

The shell splits words on spaces. A name with spaces must be quoted: \`cd "My documents"\`.`,
    ),
    concept(
      "b-1-1-4",
      4,
      "TIP",
      "Primeros hábitos",
      `- Pulsa **Tab** para completar nombres de comandos y rutas.
- Pulsa **Flecha arriba** para repetir un comando anterior.
- \`Ctrl+C\` cancela el comando que está corriendo. No cierra la terminal.
- \`Ctrl+L\` o el comando \`clear\` limpia la pantalla.
- Si no sabes qué hace un comando: \`man ls\` (manual) o \`ls --help\`. Sal de \`man\` con \`q\`.`,
      "First habits",
      `- Press **Tab** to complete command and path names.
- Press **Up arrow** to repeat a previous command.
- \`Ctrl+C\` cancels the running command. It does not close the terminal.
- \`Ctrl+L\` or the \`clear\` command clears the screen.
- If you do not know what a command does: \`man ls\` (manual) or \`ls --help\`. Leave \`man\` with \`q\`.`,
    ),
    text(
      "b-1-1-5",
      5,
      "Comprueba lo que entendiste",
      `1. ¿La terminal y Bash son lo mismo?
2. En \`mkdir -p proyecto/src\`, ¿cuál es el comando, cuál la opción y cuál el argumento?
3. ¿Qué te indica un prompt que termina en \`#\`?`,
      "Check what you understood",
      `1. Are the terminal and Bash the same thing?
2. In \`mkdir -p project/src\`, which part is the command, which is the option, and which is the argument?
3. What does a prompt ending in \`#\` tell you?`,
    ),
  ],
  quiz: quiz("lesson-1-1", [
    {
      id: "q-1-1-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué programa interpreta lo que escribes en la terminal?",
        en: "Which program interprets what you type in the terminal?",
      },
      options: {
        es: ["El kernel", "El shell", "El navegador", "El escritorio"],
        en: ["The kernel", "The shell", "The browser", "The desktop"],
      },
      correctAnswer: "1",
      explanation: {
        es: "El shell (casi siempre Bash) lee la línea, la interpreta y ejecuta el programa.",
        en: "The shell (usually Bash) reads the line, interprets it, and runs the program.",
      },
      points: 5,
    },
    {
      id: "q-1-1-2",
      type: "TRUE_FALSE",
      question: {
        es: "Ctrl+C cierra la ventana de la terminal.",
        en: "Ctrl+C closes the terminal window.",
      },
      correctAnswer: "false",
      explanation: {
        es: "Ctrl+C envía una señal de interrupción al proceso en primer plano. La terminal sigue abierta.",
        en: "Ctrl+C sends an interrupt to the foreground process. The terminal stays open.",
      },
      points: 5,
    },
  ]),
};

const lesson12: Lesson = {
  id: "lesson-1-2",
  moduleId: "level-1",
  slug: "navigating-the-filesystem",
  title: { es: "Navegación del sistema", en: "Navigating the filesystem" },
  description: {
    es: "Muévete con pwd, ls y cd, y distingue rutas absolutas de relativas.",
    en: "Move around with pwd, ls, and cd, and tell absolute paths from relative ones.",
  },
  order: 2,
  duration: 25,
  exercises: [],
  contentBlocks: [
    text(
      "b-1-2-1",
      1,
      "Dónde estás parado",
      `En la terminal siempre estás dentro de un directorio. Ese directorio se llama **directorio de trabajo**. Casi todos los comandos que usan rutas relativas parten de ahí.

Tres comandos cubren el 80% de la navegación diaria:

- \`pwd\` — print working directory. Muestra la ruta completa de donde estás.
- \`ls\` — list. Muestra lo que hay en el directorio.
- \`cd\` — change directory. Te mueve a otro directorio.`,
      "Where you are standing",
      `In the terminal you are always inside a directory. That directory is the **working directory**. Almost every command that uses a relative path starts from there.

Three commands cover 80% of daily navigation:

- \`pwd\` — print working directory. Shows the full path of where you are.
- \`ls\` — list. Shows what is in the directory.
- \`cd\` — change directory. Moves you to another directory.`,
    ),
    concept(
      "b-1-2-2",
      2,
      "CODE",
      "pwd, ls y cd",
      `pwd
/home/ana

ls
Documentos  Descargas  proyecto

ls -la
muestra permisos, dueño, tamaño y archivos ocultos (los que empiezan por .)

cd /etc
pwd
/etc

cd
pwd
/home/ana

\`cd\` sin argumentos vuelve a tu carpeta personal.`,
      "pwd, ls, and cd",
      `pwd
/home/ana

ls
Documents  Downloads  project

ls -la
shows permissions, owner, size, and hidden files (names starting with .)

cd /etc
pwd
/etc

cd
pwd
/home/ana

\`cd\` with no arguments returns to your home folder.`,
    ),
    concept(
      "b-1-2-3",
      3,
      "KEY_CONCEPT",
      "Rutas absolutas y relativas",
      `Una **ruta absoluta** empieza en la raíz \`/\` y no depende de dónde estés:

\`cd /var/log\`

Una **ruta relativa** se interpreta desde el directorio actual:

\`cd proyecto/src\`

Atajos que vas a usar todo el tiempo:

- \`.\` — este directorio
- \`..\` — el directorio padre
- \`~\` — tu home (\`/home/tu_usuario\`)
- \`-\` — el directorio anterior (\`cd -\` vuelve atrás)
- \`/\` — la raíz del sistema`,
      "Absolute and relative paths",
      `An **absolute path** starts at the root \`/\` and does not depend on where you are:

\`cd /var/log\`

A **relative path** is interpreted from the current directory:

\`cd project/src\`

Shortcuts you will use constantly:

- \`.\` — this directory
- \`..\` — the parent directory
- \`~\` — your home (\`/home/your_user\`)
- \`-\` — the previous directory (\`cd -\` goes back)
- \`/\` — the filesystem root`,
    ),
    concept(
      "b-1-2-4",
      4,
      "TIP",
      "Ejercicio: el tesoro",
      `Desde tu home, crea este recorrido solo con cd y comprueba con pwd en cada paso:

1. \`cd /\`
2. \`cd home\`
3. \`cd ..\`  (debes volver a /)
4. \`cd ~\`
5. \`cd -\`  (debe devolverte a /)

Si \`pwd\` no coincide con lo que esperabas, no sigas: vuelve con \`cd ~\` y repite. El error más común es mezclar una ruta relativa cuando ya no estás donde creías.`,
      "Exercise: the treasure",
      `From your home directory, walk this path using only cd and check with pwd at each step:

1. \`cd /\`
2. \`cd home\`
3. \`cd ..\`  (you should be back at /)
4. \`cd ~\`
5. \`cd -\`  (should return you to /)

If \`pwd\` does not match what you expected, stop: go back with \`cd ~\` and repeat. The most common mistake is using a relative path when you are no longer where you thought.`,
    ),
  ],
  quiz: quiz("lesson-1-2", [
    {
      id: "q-1-2-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Estás en /home/ana y ejecutas cd Documentos. ¿Qué tipo de ruta usaste?",
        en: "You are in /home/ana and run cd Documents. What kind of path did you use?",
      },
      options: {
        es: ["Absoluta", "Relativa", "De red", "Oculta"],
        en: ["Absolute", "Relative", "Network", "Hidden"],
      },
      correctAnswer: "1",
      explanation: {
        es: "No empieza por /. Se resuelve desde el directorio actual: /home/ana/Documentos.",
        en: "It does not start with /. It is resolved from the current directory: /home/ana/Documents.",
      },
      points: 5,
    },
    {
      id: "q-1-2-2",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué hace cd ..?",
        en: "What does cd .. do?",
      },
      options: {
        es: ["Borra el directorio actual", "Sube al directorio padre", "Vuelve al home", "Lista archivos ocultos"],
        en: ["Deletes the current directory", "Moves to the parent directory", "Returns home", "Lists hidden files"],
      },
      correctAnswer: "1",
      explanation: {
        es: ".. significa el directorio padre. cd .. sube un nivel.",
        en: ".. means the parent directory. cd .. goes up one level.",
      },
      points: 5,
    },
  ]),
};

const lesson13: Lesson = {
  id: "lesson-1-3",
  moduleId: "level-1",
  slug: "filesystem-hierarchy",
  title: { es: "Estructura del sistema de archivos", en: "Filesystem hierarchy" },
  description: {
    es: "Recorre el estándar FHS: qué vive en /, /etc, /home, /var y el resto de directorios clave.",
    en: "Walk the FHS standard: what lives in /, /etc, /home, /var, and the other key directories.",
  },
  order: 3,
  duration: 25,
  exercises: [],
  contentBlocks: [
    text(
      "b-1-3-1",
      1,
      "Por qué existe una jerarquía",
      `Linux no esparce los archivos al azar. El **Filesystem Hierarchy Standard (FHS)** acuerda dónde va cada tipo de dato para que un programa, un administrador y un paquete sepan dónde buscar.

Todo cuelga de un único árbol que empieza en \`/\`. No hay \`C:\` ni \`D:\`. Un disco extra se **monta** en alguna carpeta de ese árbol, por ejemplo \`/mnt\` o \`/media\`.`,
      "Why a hierarchy exists",
      `Linux does not scatter files at random. The **Filesystem Hierarchy Standard (FHS)** agrees where each kind of data goes so a program, an administrator, and a package know where to look.

Everything hangs from a single tree that starts at \`/\`. There is no \`C:\` or \`D:\`. An extra disk is **mounted** on some folder of that tree, for example \`/mnt\` or \`/media\`.`,
    ),
    concept(
      "b-1-3-2",
      2,
      "KEY_CONCEPT",
      "Mapa que debes recordar",
      `/
├── bin, sbin, usr   programas (comandos)
├── etc              configuración del sistema (texto)
├── home             carpetas de cada usuario
├── root             home del usuario root (no es lo mismo que /)
├── var              datos que cambian: logs, cachés, colas
├── tmp              temporales; se puede borrar al reiniciar
├── opt              software instalado aparte
├── boot             lo necesario para arrancar
├── dev              dispositivos representados como archivos
├── proc y sys       vistas virtuales del kernel (no son discos)
├── lib              librerías compartidas
├── mnt y media      puntos donde montas discos y USB
└── srv              datos que sirve el sistema (web, ftp)`,
      "Map you should remember",
      `/
├── bin, sbin, usr   programs (commands)
├── etc              system configuration (text)
├── home             each user's folders
├── root             root user's home (not the same as /)
├── var              data that changes: logs, caches, queues
├── tmp              temporary; may be wiped on reboot
├── opt              add-on software
├── boot             what is needed to boot
├── dev              devices represented as files
├── proc and sys     virtual kernel views (not disks)
├── lib              shared libraries
├── mnt and media    where you mount disks and USB
└── srv              data the system serves (web, ftp)`,
    ),
    concept(
      "b-1-3-3",
      3,
      "TIP",
      "Dónde buscar según el problema",
      `- La app no arranca y sospechas de configuración: \`/etc\`.
- Quieres ver qué falló: \`/var/log\`.
- Tus documentos: \`/home/tu_usuario\` o \`~\`.
- Un comando que instalaste con el gestor de paquetes: suele estar en \`/usr/bin\`.
- Algo que creaste para probar: \`/tmp\` o tu home, nunca directo en \`/\`.

\`ls /\` te da el mapa real de tu máquina. Compáralo con la lista de arriba: los nombres coinciden, el contenido cambia según la distribución.`,
      "Where to look depending on the problem",
      `- The app will not start and you suspect configuration: \`/etc\`.
- You want to see what failed: \`/var/log\`.
- Your documents: \`/home/your_user\` or \`~\`.
- A command installed by the package manager: usually in \`/usr/bin\`.
- Something you created to experiment: \`/tmp\` or your home, never directly in \`/\`.

\`ls /\` shows the real map of your machine. Compare it with the list above: the names match, the contents change by distribution.`,
    ),
    concept(
      "b-1-3-4",
      4,
      "WARNING",
      "/root no es /",
      `\`/\` es la raíz de todo el sistema.
\`/root\` es la carpeta personal del administrador.

Borrar o mover cosas en \`/\`, \`/etc\` o \`/usr\` puede dejar el sistema inutilizable. Practica dentro de tu home.`,
      "/root is not /",
      `\`/\` is the root of the whole system.
\`/root\` is the administrator's home folder.

Deleting or moving things in \`/\`, \`/etc\`, or \`/usr\` can make the system unusable. Practice inside your home.`,
    ),
  ],
  quiz: quiz("lesson-1-3", [
    {
      id: "q-1-3-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Dónde suelen estar los registros (logs) del sistema?",
        en: "Where are system logs usually stored?",
      },
      options: {
        es: ["/home", "/var/log", "/boot", "/dev"],
        en: ["/home", "/var/log", "/boot", "/dev"],
      },
      correctAnswer: "1",
      explanation: {
        es: "/var guarda datos variables. Los logs viven en /var/log.",
        en: "/var holds variable data. Logs live in /var/log.",
      },
      points: 5,
    },
    {
      id: "q-1-3-2",
      type: "TRUE_FALSE",
      question: {
        es: "/proc es un disco donde se guardan los procesos de forma permanente.",
        en: "/proc is a disk where processes are stored permanently.",
      },
      correctAnswer: "false",
      explanation: {
        es: "/proc es un sistema de archivos virtual que el kernel genera en memoria para mostrar procesos y estado.",
        en: "/proc is a virtual filesystem the kernel generates in memory to expose processes and state.",
      },
      points: 5,
    },
  ]),
};

const lesson14: Lesson = {
  id: "lesson-1-4",
  moduleId: "level-1",
  slug: "manipulating-files",
  title: { es: "Manipulación de archivos", en: "Manipulating files" },
  description: {
    es: "Crea, copia, mueve y borra con touch, mkdir, cp, mv y rm, sin destruir tu sistema.",
    en: "Create, copy, move, and delete with touch, mkdir, cp, mv, and rm, without destroying your system.",
  },
  order: 4,
  duration: 25,
  exercises: [],
  contentBlocks: [
    text(
      "b-1-4-1",
      1,
      "Crear estructura, no memorizar flags",
      `Estos comandos existen para construir el árbol de un proyecto a mano, igual que lo haría un script:

- \`mkdir\` crea directorios
- \`touch\` crea un archivo vacío o actualiza su fecha
- \`cp\` copia
- \`mv\` mueve o renombra (en Linux es la misma operación)
- \`rm\` elimina

Practica siempre dentro de una carpeta desechable, por ejemplo \`~/practica-linux\`.`,
      "Build structure, do not memorize flags",
      `These commands exist so you can build a project tree by hand, the same way a script would:

- \`mkdir\` creates directories
- \`touch\` creates an empty file or updates its timestamp
- \`cp\` copies
- \`mv\` moves or renames (on Linux it is the same operation)
- \`rm\` deletes

Always practice inside a disposable folder, for example \`~/linux-practice\`.`,
    ),
    concept(
      "b-1-4-2",
      2,
      "CODE",
      "Un proyecto en seis líneas",
      `mkdir -p ~/practica-linux/proyecto/{src,docs,tests}
cd ~/practica-linux/proyecto
touch src/main.py README.md
cp README.md docs/README.md
mv docs/README.md docs/LEEME.md
ls -R

\`-p\` crea los padres que falten y no falla si la carpeta ya existe.
Las llaves \`{src,docs,tests}\` son expansión del shell: generan tres rutas.`,
      "A project in six lines",
      `mkdir -p ~/linux-practice/project/{src,docs,tests}
cd ~/linux-practice/project
touch src/main.py README.md
cp README.md docs/README.md
mv docs/README.md docs/LEEME.md
ls -R

\`-p\` creates missing parents and does not fail if the folder already exists.
Braces \`{src,docs,tests}\` are shell expansion: they generate three paths.`,
    ),
    concept(
      "b-1-4-3",
      3,
      "WARNING",
      "rm no tiene papelera",
      `\`rm archivo.txt\` borra el archivo. No va a la papelera.

\`rm -r carpeta\` borra la carpeta y todo lo de dentro.
\`rm -rf\` además no pregunta (\`-f\` = force).

Reglas:

- No uses \`rm -rf\` con rutas que empiecen en \`/\`, \`~\` a secas, \`*\` o variables vacías.
- Antes de borrar un directorio, ejecuta \`ls\` sobre esa misma ruta.
- Si dudas, mueve a \`/tmp\` con \`mv\` en lugar de borrar.

\`rmdir\` solo borra directorios vacíos. Es más seguro cuando solo quieres quitar una carpeta que ya vaciaste.`,
      "rm has no trash bin",
      `\`rm file.txt\` deletes the file. It does not go to the trash.

\`rm -r folder\` deletes the folder and everything inside.
\`rm -rf\` also does not ask (\`-f\` = force).

Rules:

- Do not use \`rm -rf\` with paths that start at \`/\`, a bare \`~\`, \`*\`, or empty variables.
- Before deleting a directory, run \`ls\` on that same path.
- If you are unsure, move it to \`/tmp\` with \`mv\` instead of deleting.

\`rmdir\` only removes empty directories. It is safer when you only want to drop a folder you already emptied.`,
    ),
    text(
      "b-1-4-4",
      4,
      "Ejercicio: organiza un proyecto",
      `Dentro de \`~/practica-linux\` deja esta estructura y compruébala con \`find . -type f\`:

proyecto/
├── src/app.sh
├── docs/notas.txt
└── tests/ (vacío está bien)

Después renombra \`notas.txt\` a \`README.md\` sin copiarlo dos veces. La herramienta correcta es \`mv\`, no \`cp\` seguido de \`rm\`.`,
      "Exercise: organize a project",
      `Inside \`~/linux-practice\` leave this structure and check it with \`find . -type f\`:

project/
├── src/app.sh
├── docs/notes.txt
└── tests/ (empty is fine)

Then rename \`notes.txt\` to \`README.md\` without copying it twice. The right tool is \`mv\`, not \`cp\` followed by \`rm\`.`,
    ),
  ],
  quiz: quiz("lesson-1-4", [
    {
      id: "q-1-4-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Quieres cambiar el nombre de informe.txt a final.txt. ¿Qué comando es el adecuado?",
        en: "You want to rename report.txt to final.txt. Which command is appropriate?",
      },
      options: {
        es: ["cp informe.txt final.txt", "mv informe.txt final.txt", "touch final.txt", "rm informe.txt"],
        en: ["cp report.txt final.txt", "mv report.txt final.txt", "touch final.txt", "rm report.txt"],
      },
      correctAnswer: "1",
      explanation: {
        es: "mv mueve o renombra. cp dejaría los dos archivos.",
        en: "mv moves or renames. cp would leave both files.",
      },
      points: 5,
    },
    {
      id: "q-1-4-2",
      type: "TRUE_FALSE",
      question: {
        es: "rm envía los archivos a la papelera del escritorio.",
        en: "rm sends files to the desktop trash.",
      },
      correctAnswer: "false",
      explanation: {
        es: "rm elimina el archivo del sistema de archivos. No hay papelera.",
        en: "rm removes the file from the filesystem. There is no trash bin.",
      },
      points: 5,
    },
  ]),
};

const lesson15: Lesson = {
  id: "lesson-1-5",
  moduleId: "level-1",
  slug: "viewing-files",
  title: { es: "Visualización de archivos", en: "Viewing files" },
  description: {
    es: "Lee archivos con cat, less, head y tail, y distingue tipo y metadatos con file y stat.",
    en: "Read files with cat, less, head, and tail, and inspect type and metadata with file and stat.",
  },
  order: 5,
  duration: 20,
  exercises: [],
  contentBlocks: [
    text(
      "b-1-5-1",
      1,
      "Leer no es editar",
      `Antes de cambiar un archivo de configuración tienes que ver qué hay dentro y qué tipo de archivo es. Abrir un binario con un editor de texto lo corrompe o te llena la terminal de basura.

Esta lección es solo de lectura.`,
      "Reading is not editing",
      `Before changing a configuration file you need to see what is inside and what kind of file it is. Opening a binary in a text editor corrupts it or fills the terminal with garbage.

This lesson is read-only.`,
    ),
    concept(
      "b-1-5-2",
      2,
      "CODE",
      "Qué comando usar",
      `cat /etc/os-release
todo el archivo de una vez. Úsalo si es corto.

less /etc/passwd
lector por páginas. Espacio avanza, b retrocede, /texto busca, q sale.

head -n 5 /etc/passwd
las primeras 5 líneas.

tail -n 20 /var/log/syslog
las últimas 20. En un log, lo reciente está al final.

tail -f /var/log/syslog
sigue el archivo mientras crece. Ctrl+C para salir.

file /bin/ls
dice si es texto, ejecutable, imagen, etc.

stat /etc/passwd
tamaño, dueño, permisos y fechas.`,
      "Which command to use",
      `cat /etc/os-release
the whole file at once. Use it when the file is short.

less /etc/passwd
a pager. Space moves forward, b goes back, /text searches, q quits.

head -n 5 /etc/passwd
the first 5 lines.

tail -n 20 /var/log/syslog
the last 20. In a log, recent events are at the end.

tail -f /var/log/syslog
follows the file as it grows. Ctrl+C to leave.

file /bin/ls
says whether it is text, an executable, an image, and so on.

stat /etc/passwd
size, owner, permissions, and timestamps.`,
    ),
    concept(
      "b-1-5-3",
      3,
      "TIP",
      "Investiga tres archivos del sistema",
      `Sin modificar nada, responde para cada uno: ¿es texto o binario? ¿cuántas líneas aproximadas tiene? ¿quién es el dueño?

1. \`/etc/os-release\`
2. \`/etc/passwd\`
3. \`/bin/ls\`

Pista: \`file\`, \`stat\` y \`wc -l\` (este último cuenta líneas y lo verás de nuevo en la lección de texto). En un binario, \`wc -l\` no significa "líneas de código".`,
      "Investigate three system files",
      `Without changing anything, answer for each: is it text or binary? about how many lines? who owns it?

1. \`/etc/os-release\`
2. \`/etc/passwd\`
3. \`/bin/ls\`

Hint: \`file\`, \`stat\`, and \`wc -l\` (you will see the last one again in the text-processing lesson). On a binary, \`wc -l\` does not mean "lines of code".`,
    ),
    concept(
      "b-1-5-4",
      4,
      "WARNING",
      "No hagas cat de un binario",
      `\`cat /bin/ls\` puede desconfigurar la terminal porque el archivo contiene bytes que no son texto.

Si la pantalla se ve rara después, escribe \`reset\` y pulsa Enter, aunque no veas lo que escribes.`,
      "Do not cat a binary",
      `\`cat /bin/ls\` can scramble the terminal because the file contains bytes that are not text.

If the screen looks wrong afterwards, type \`reset\` and press Enter, even if you cannot see what you type.`,
    ),
  ],
  quiz: quiz("lesson-1-5", [
    {
      id: "q-1-5-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Un log es enorme y solo te interesan los eventos más nuevos. ¿Qué comando encaja?",
        en: "A log is huge and you only care about the newest events. Which command fits?",
      },
      options: {
        es: ["head archivo.log", "tail archivo.log", "file archivo.log", "touch archivo.log"],
        en: ["head file.log", "tail file.log", "file file.log", "touch file.log"],
      },
      correctAnswer: "1",
      explanation: {
        es: "tail muestra el final del archivo, donde se agregan las líneas nuevas.",
        en: "tail shows the end of the file, where new lines are appended.",
      },
      points: 5,
    },
    {
      id: "q-1-5-2",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué comando te dice si un archivo es texto, imagen o ejecutable?",
        en: "Which command tells you whether a file is text, an image, or an executable?",
      },
      options: {
        es: ["stat", "file", "less", "pwd"],
        en: ["stat", "file", "less", "pwd"],
      },
      correctAnswer: "1",
      explanation: {
        es: "file inspecciona el contenido y describe el tipo. stat muestra metadatos.",
        en: "file inspects the content and describes the type. stat shows metadata.",
      },
      points: 5,
    },
  ]),
};

const lesson16: Lesson = {
  id: "lesson-1-6",
  moduleId: "level-1",
  slug: "finding-files",
  title: { es: "Búsqueda de archivos", en: "Finding files" },
  description: {
    es: "Encuentra archivos con find y comandos con which y whereis, y entiende cuándo locate no basta.",
    en: "Find files with find and commands with which and whereis, and learn when locate is not enough.",
  },
  order: 6,
  duration: 25,
  exercises: [],
  contentBlocks: [
    text(
      "b-1-6-1",
      1,
      "Dos preguntas distintas",
      `«¿Dónde está este archivo?» y «¿qué programa se ejecuta cuando escribo este comando?» no se responden igual.

- \`find\` recorre directorios ahora mismo. Es lento en discos grandes y siempre está al día.
- \`locate\` consulta un índice (\`updatedb\`). Es rápido y puede estar desactualizado.
- \`which\` dice qué ejecutable usará el shell según tu \`PATH\`.
- \`whereis\` busca binario, código fuente y página de manual de un comando.`,
      "Two different questions",
      `"Where is this file?" and "which program runs when I type this command?" are not the same question.

- \`find\` walks directories right now. It is slow on large disks and always current.
- \`locate\` queries an index (\`updatedb\`). It is fast and can be out of date.
- \`which\` tells you which executable the shell will use according to your \`PATH\`.
- \`whereis\` looks for a command's binary, source, and manual page.`,
    ),
    concept(
      "b-1-6-2",
      2,
      "CODE",
      "find que sí vas a usar",
      `find ~ -name "*.txt"
por nombre, respetando mayúsculas.

find ~ -iname "readme*"
igual, sin importar mayúsculas.

find ~/practica-linux -type d
solo directorios. \`-type f\` solo archivos.

find ~/practica-linux -name "*.log" -mtime -1
modificados en el último día.

find /etc -name "*.conf" 2>/dev/null
el \`2>/dev/null\` esconde errores de permiso. Aún no hace falta dominar redirecciones; úsalo para leer la lista limpia.

which python3
whereis ls`,
      "find you will actually use",
      `find ~ -name "*.txt"
by name, case-sensitive.

find ~ -iname "readme*"
the same, case-insensitive.

find ~/linux-practice -type d
directories only. \`-type f\` is files only.

find ~/linux-practice -name "*.log" -mtime -1
modified in the last day.

find /etc -name "*.conf" 2>/dev/null
\`2>/dev/null\` hides permission errors. You do not need to master redirection yet; use it to read a clean list.

which python3
whereis ls`,
    ),
    concept(
      "b-1-6-3",
      3,
      "WARNING",
      "find / es una decisión, no un reflejo",
      `Buscar desde \`/\` recorre todo el disco y produce muchos "Permission denied".

Empieza por el directorio más pequeño donde el archivo pueda estar: tu home, \`/etc\`, \`/var/log\`.

\`which\` no busca documentos. Si \`which informe.pdf\` no imprime nada, es lo esperado: los PDF no están en el PATH.`,
      "find / is a decision, not a reflex",
      `Searching from \`/\` walks the whole disk and produces many "Permission denied" lines.

Start from the smallest directory where the file could live: your home, \`/etc\`, \`/var/log\`.

\`which\` does not search documents. If \`which report.pdf\` prints nothing, that is expected: PDFs are not on PATH.`,
    ),
    text(
      "b-1-6-4",
      4,
      "Ejercicio: archivos perdidos",
      `1. Crea \`~/practica-linux/notas/perdido.txt\` si no existe.
2. Desde tu home, encuéntralo solo con \`find\` y \`-name\`.
3. Pregunta dónde está el comando \`ls\` con \`which\` y con \`whereis\`.
4. Explica en una frase por qué las dos respuestas pueden mostrar rutas parecidas pero no idénticas.`,
      "Exercise: lost files",
      `1. Create \`~/linux-practice/notes/lost.txt\` if it does not exist.
2. From your home, find it using only \`find\` and \`-name\`.
3. Ask where the \`ls\` command is with \`which\` and with \`whereis\`.
4. Explain in one sentence why the two answers can show similar but not identical paths.`,
    ),
  ],
  quiz: quiz("lesson-1-6", [
    {
      id: "q-1-6-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Acabas de crear un archivo y locate no lo encuentra. ¿Qué es lo más probable?",
        en: "You just created a file and locate cannot find it. What is most likely?",
      },
      options: {
        es: [
          "El archivo no existe",
          "La base de datos de locate aún no se actualizó",
          "which está mal configurado",
          "El archivo está en /proc",
        ],
        en: [
          "The file does not exist",
          "The locate database has not been updated yet",
          "which is misconfigured",
          "The file is in /proc",
        ],
      },
      correctAnswer: "1",
      explanation: {
        es: "locate depende de un índice. find vería el archivo al momento; locate espera a updatedb.",
        en: "locate depends on an index. find would see the file immediately; locate waits for updatedb.",
      },
      points: 5,
    },
    {
      id: "q-1-6-2",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué comando responde «qué ejecutable lanzará el shell para python3»?",
        en: "Which command answers \"which executable will the shell launch for python3\"?",
      },
      options: {
        es: ["find python3", "which python3", "stat python3", "tail python3"],
        en: ["find python3", "which python3", "stat python3", "tail python3"],
      },
      correctAnswer: "1",
      explanation: {
        es: "which busca en los directorios de PATH y muestra el ejecutable que se usaría.",
        en: "which searches PATH directories and shows the executable that would be used.",
      },
      points: 5,
    },
  ]),
};

export const level1Lessons: Lesson[] = [
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  lesson16,
  ...level1RestLessons,
];
