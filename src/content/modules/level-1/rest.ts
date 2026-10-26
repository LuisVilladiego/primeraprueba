import { lessonFromSpec, type LessonSpec } from "@/content/lessonFactory";

const specs: LessonSpec[] = [
  {
    slug: "text-processing",
    title: { es: "Procesamiento de texto", en: "Text processing" },
    description: {
      es: "Filtra y resume texto con grep, wc, sort, uniq, cut y tr.",
      en: "Filter and summarize text with grep, wc, sort, uniq, cut, and tr.",
    },
    why: {
      es: "Los logs, configuraciones y salidas de comandos son texto. Procesarlo en la terminal evita abrir un editor para contar errores o quedarte con una columna.",
      en: "Logs, config files, and command output are text. Processing them in the terminal avoids opening an editor just to count errors or keep one column.",
    },
    concept: {
      es: "grep busca líneas que coinciden con un patrón. wc cuenta líneas, palabras y bytes. sort ordena, uniq elimina duplicados consecutivos (por eso casi siempre va después de sort). cut recorta columnas. tr traduce o borra caracteres.",
      en: "grep prints lines that match a pattern. wc counts lines, words, and bytes. sort orders lines, uniq removes consecutive duplicates (so it almost always follows sort). cut keeps columns. tr translates or deletes characters.",
    },
    commands: {
      es: `grep -n "error" app.log
wc -l app.log
sort nombres.txt | uniq
cut -d: -f1 /etc/passwd
echo "HOLA" | tr 'A-Z' 'a-z'`,
      en: `grep -n "error" app.log
wc -l app.log
sort names.txt | uniq
cut -d: -f1 /etc/passwd
echo "HELLO" | tr 'A-Z' 'a-z'`,
    },
    practice: {
      es: `1. Crea un archivo con varias líneas repetidas.
2. Cuenta las líneas con wc -l.
3. Ordena y elimina duplicados con sort | uniq.
4. Busca una palabra con grep -n.`,
      en: `1. Create a file with several repeated lines.
2. Count lines with wc -l.
3. Sort and drop duplicates with sort | uniq.
4. Search for a word with grep -n.`,
    },
    warning: {
      es: "grep distingue mayúsculas. Si no encuentra nada, prueba grep -i. uniq no quita duplicados que no estén juntos.",
      en: "grep is case-sensitive. If it finds nothing, try grep -i. uniq does not remove duplicates that are not adjacent.",
    },
    quiz: [
      {
        question: { es: "¿Por qué sort suele ir antes de uniq?", en: "Why does sort usually come before uniq?" },
        options: {
          es: ["Porque uniq ordena solo números", "Porque uniq solo compara líneas consecutivas", "Porque grep lo exige", "Porque wc no cuenta duplicados"],
          en: ["Because uniq only sorts numbers", "Because uniq only compares consecutive lines", "Because grep requires it", "Because wc does not count duplicates"],
        },
        correct: 1,
        explanation: {
          es: "uniq elimina duplicados adyacentes. sort los junta primero.",
          en: "uniq removes adjacent duplicates. sort groups them first.",
        },
      },
      {
        question: { es: "¿Qué imprime wc -l?", en: "What does wc -l print?" },
        options: {
          es: ["El número de líneas", "El número de bytes", "Los usuarios del sistema", "Las columnas de un CSV"],
          en: ["The number of lines", "The number of bytes", "System users", "CSV columns"],
        },
        correct: 0,
        explanation: {
          es: "-l cuenta líneas. -c cuenta bytes y -w palabras.",
          en: "-l counts lines. -c counts bytes and -w counts words.",
        },
      },
    ],
  },
  {
    slug: "pipes-and-redirection",
    title: { es: "Pipes y redirecciones", en: "Pipes and redirection" },
    description: {
      es: "Conecta comandos y guarda su salida con |, >, >> y 2>.",
      en: "Connect commands and save their output with |, >, >>, and 2>.",
    },
    why: {
      es: "Un comando hace una cosa. El shell deja encadenarlos para que la salida de uno sea la entrada del siguiente, o quede escrita en un archivo.",
      en: "One command does one thing. The shell lets you chain them so one command's output becomes the next command's input, or gets written to a file.",
    },
    concept: {
      es: "El pipe | conecta stdout de la izquierda con stdin de la derecha. > crea o pisa un archivo. >> añade al final. 2> redirige solo los errores. 2>/dev/null los descarta. < lee un archivo como entrada.",
      en: "The pipe | connects stdout on the left to stdin on the right. > creates or overwrites a file. >> appends. 2> redirects errors only. 2>/dev/null discards them. < reads a file as input.",
    },
    commands: {
      es: `ls /etc | wc -l
grep "error" app.log > errores.txt
echo "otra línea" >> errores.txt
find /etc -name "*.conf" 2>/dev/null | head
wc -l < errores.txt`,
      en: `ls /etc | wc -l
grep "error" app.log > errors.txt
echo "another line" >> errors.txt
find /etc -name "*.conf" 2>/dev/null | head
wc -l < errors.txt`,
    },
    practice: {
      es: `1. Lista /usr/bin y cuenta cuántas líneas salen.
2. Guarda esa cuenta en total.txt con >.
3. Añade la fecha con date >> total.txt.
4. Confirma con cat total.txt.`,
      en: `1. List /usr/bin and count how many lines come out.
2. Save that count in total.txt with >.
3. Append the date with date >> total.txt.
4. Confirm with cat total.txt.`,
    },
    warning: {
      es: "> borra el contenido anterior del archivo. En un log real usa >> o un nombre nuevo. No redirijas a un archivo que estás leyendo en el mismo comando.",
      en: "> erases the file's previous contents. On a real log use >> or a new name. Do not redirect into a file you are reading in the same command.",
    },
    quiz: [
      {
        question: { es: "¿Qué diferencia hay entre > y >>?", en: "What is the difference between > and >>?" },
        options: {
          es: ["> añade y >> pisa", "> pisa el archivo y >> añade al final", "Son iguales", ">> solo sirve con grep"],
          en: ["> appends and >> overwrites", "> overwrites the file and >> appends", "They are the same", ">> only works with grep"],
        },
        correct: 1,
        explanation: {
          es: "> trunca el archivo. >> escribe al final sin borrar lo anterior.",
          en: "> truncates the file. >> writes at the end without deleting what was there.",
        },
      },
      {
        question: { es: "¿Qué hace el símbolo | ?", en: "What does the | symbol do?" },
        options: {
          es: ["Compara dos archivos", "Pasa la salida de un comando a la entrada del siguiente", "Ejecuta como root", "Borra stderr"],
          en: ["Compares two files", "Passes one command's output to the next command's input", "Runs as root", "Deletes stderr"],
        },
        correct: 1,
        explanation: {
          es: "El pipe conecta stdout con stdin. No eleva privilegios.",
          en: "The pipe connects stdout to stdin. It does not raise privileges.",
        },
      },
    ],
  },
  {
    slug: "basic-regular-expressions",
    title: { es: "Expresiones regulares básicas", en: "Basic regular expressions" },
    description: {
      es: "Describe patrones con grep -E: anclas, clases y cuantificadores.",
      en: "Describe patterns with grep -E: anchors, classes, and quantifiers.",
    },
    why: {
      es: "Buscar la palabra exacta no basta cuando el texto varía: una IP, un código de error o una línea que empieza por una fecha.",
      en: "Searching for an exact word is not enough when the text varies: an IP, an error code, or a line that starts with a date.",
    },
    concept: {
      es: "Una expresión regular es un patrón. Con grep -E (o egrep): ^ es inicio de línea, $ es el final, . es cualquier carácter, * es «cero o más» del elemento anterior, + es «uno o más», [0-9] es un dígito y | es una alternativa.",
      en: "A regular expression is a pattern. With grep -E (or egrep): ^ is start of line, $ is the end, . is any character, * is \"zero or more\" of the previous item, + is \"one or more\", [0-9] is a digit, and | is an alternative.",
    },
    commands: {
      es: `grep -E "^root" /etc/passwd
grep -E "error|fail" app.log
grep -E "[0-9]+" datos.txt
grep -E "\\.conf$" lista.txt`,
      en: `grep -E "^root" /etc/passwd
grep -E "error|fail" app.log
grep -E "[0-9]+" data.txt
grep -E "\\.conf$" list.txt`,
    },
    practice: {
      es: `1. Busca en /etc/passwd las líneas que empiezan por tu usuario.
2. Crea un archivo con palabras y números.
3. Extrae solo las líneas que contienen un número.
4. Busca líneas que terminen en .txt.`,
      en: `1. Search /etc/passwd for lines that start with your username.
2. Create a file with words and numbers.
3. Extract only the lines that contain a number.
4. Search for lines that end in .txt.`,
    },
    warning: {
      es: "El punto . coincide con cualquier carácter. Para un punto literal escribe \\. Si el patrón no usa -E, + y | pueden no significar lo que esperas.",
      en: "The dot . matches any character. For a literal dot write \\. Without -E, + and | may not mean what you expect.",
    },
    quiz: [
      {
        question: { es: "¿Qué línea coincide con el patrón ^hola?", en: "Which line matches the pattern ^hola?" },
        options: {
          es: ["dice hola al final", "hola mundo", "HOLA", "xhola"],
          en: ["says hola at the end", "hola mundo", "HOLA", "xhola"],
        },
        correct: 1,
        explanation: {
          es: "^ ancla al inicio. «hola mundo» empieza por hola. «xhola» no.",
          en: "^ anchors to the start. \"hola mundo\" starts with hola. \"xhola\" does not.",
        },
      },
      {
        question: { es: "¿Para qué sirve [0-9]+ en grep -E?", en: "What is [0-9]+ for in grep -E?" },
        options: {
          es: ["Una letra", "Uno o más dígitos", "El inicio de la línea", "Un archivo vacío"],
          en: ["One letter", "One or more digits", "The start of the line", "An empty file"],
        },
        correct: 1,
        explanation: {
          es: "[0-9] es un dígito y + exige al menos uno.",
          en: "[0-9] is a digit and + requires at least one.",
        },
      },
    ],
  },
];

export const level1RestLessons = specs.map((spec, index) => lessonFromSpec(1, index + 7, spec));
