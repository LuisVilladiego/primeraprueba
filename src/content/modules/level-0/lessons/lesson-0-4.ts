import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson04Content: ContentBlock[] = [
  {
    id: "block-0-4-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Introducción",
        text: `Tus documentos, fotos, música, programas y el propio sistema operativo se guardan en dispositivos de almacenamiento. Entender cómo funciona el almacenamiento es esencial para administrar sistemas Linux.

En esta lección aprenderás:
- Tipos de dispositivos de almacenamiento
- Qué es un sistema de archivos
- Cómo se organizan los archivos y carpetas
- La diferencia entre archivos y directorios`,
      },
      en: {
        title: "Introduction",
        text: `Your documents, photos, music, programs, and the operating system itself are saved on storage devices. Understanding how storage works is essential for administering Linux systems.

In this lesson you will learn:
- Types of storage devices
- What a file system is
- How files and folders are organized
- The difference between files and directories`,
      },
    },
  },
  {
    id: "block-0-4-2",
    type: "TEXT",
    order: 2,
    content: {
      es: {
        title: "Tipos de Almacenamiento",
        text: `Existen diferentes tipos de dispositivos para guardar datos:

**HDD (Hard Disk Drive)**
- Discos magnéticos que giran
- Más lentos, pero más baratos por GB
- Buenos para almacenamiento masivo

**SSD (Solid State Drive)**
- Memoria flash, sin partes móviles
- Mucho más rápidos
- Más resistentes a golpes

**NVMe**
- SSD conectado directamente al bus PCIe
- El más rápido de todos
- Ideal para sistema operativo y aplicaciones

**USB / SD Cards**
- Almacenamiento portátil
- Velocidades variables`,
      },
      en: {
        title: "Types of Storage",
        text: `There are different types of devices to store data:

**HDD (Hard Disk Drive)**
- Spinning magnetic disks
- Slower, but cheaper per GB
- Good for mass storage

**SSD (Solid State Drive)**
- Flash memory, no moving parts
- Much faster
- More resistant to shocks

**NVMe**
- SSD connected directly to PCIe bus
- Fastest of all
- Ideal for operating system and applications

**USB / SD Cards**
- Portable storage
- Variable speeds`,
      },
    },
  },
  {
    id: "block-0-4-3",
    type: "KEY_CONCEPT",
    order: 3,
    content: {
      es: {
        title: "¿Qué es un Sistema de Archivos?",
        text: `Un **sistema de archivos (filesystem)** es el método que usa el sistema operativo para organizar y almacenar datos en el disco.

Es como el sistema de organización de una biblioteca:
- Define cómo se nombran los archivos
- Cómo se organizan en carpetas
- Dónde se guarda cada dato físicamente
- Cómo se controla el acceso

**Sistemas de archivos comunes:**
- **ext4**: El más usado en Linux
- **NTFS**: El principal en Windows
- **APFS**: El de macOS moderno
- **FAT32/exFAT**: Para dispositivos USB compatibles`,
      },
      en: {
        title: "What is a File System?",
        text: `A **file system** is the method the operating system uses to organize and store data on disk.

It's like the organization system of a library:
- Defines how files are named
- How they're organized in folders
- Where each piece of data is physically stored
- How access is controlled

**Common file systems:**
- **ext4**: Most used in Linux
- **NTFS**: Main one in Windows
- **APFS**: Modern macOS
- **FAT32/exFAT**: For compatible USB devices`,
      },
    },
  },
  {
    id: "block-0-4-4",
    type: "DIAGRAM",
    order: 4,
    content: {
      es: {
        title: "Estructura de Directorios",
        diagramData: {
          type: "tree",
          nodes: [
            {
              id: "root",
              label: "Carpeta Raíz",
              children: [
                {
                  id: "documents",
                  label: "Documentos",
                  children: [
                    { id: "work", label: "Trabajo" },
                    { id: "personal", label: "Personal" },
                  ],
                },
                {
                  id: "images",
                  label: "Imágenes",
                  children: [
                    { id: "photos", label: "Fotos" },
                    { id: "screenshots", label: "Capturas" },
                  ],
                },
                { id: "downloads", label: "Descargas" },
              ],
            },
          ],
        },
      },
      en: {
        title: "Directory Structure",
        diagramData: {
          type: "tree",
          nodes: [
            {
              id: "root",
              label: "Root Folder",
              children: [
                {
                  id: "documents",
                  label: "Documents",
                  children: [
                    { id: "work", label: "Work" },
                    { id: "personal", label: "Personal" },
                  ],
                },
                {
                  id: "images",
                  label: "Images",
                  children: [
                    { id: "photos", label: "Photos" },
                    { id: "screenshots", label: "Screenshots" },
                  ],
                },
                { id: "downloads", label: "Downloads" },
              ],
            },
          ],
        },
      },
    },
  },
  {
    id: "block-0-4-5",
    type: "TEXT",
    order: 5,
    content: {
      es: {
        title: "Archivos vs Directorios",
        text: `**Archivos**
- Contienen datos: texto, imágenes, código, etc.
- Tienen un nombre y una extensión (ejemplo: documento.txt)
- La extensión sugiere el tipo de contenido

**Directorios (Carpetas)**
- Contienen otros archivos y directorios
- Permiten organizar jerárquicamente
- Cada directorio puede tener subdirectorios

**Rutas**
- **Ruta absoluta**: Desde la raíz del sistema (/home/usuario/documentos)
- **Ruta relativa**: Desde tu ubicación actual (./documentos o ../otro)`,
      },
      en: {
        title: "Files vs Directories",
        text: `**Files**
- Contain data: text, images, code, etc.
- Have a name and extension (example: document.txt)
- The extension suggests the type of content

**Directories (Folders)**
- Contain other files and directories
- Allow hierarchical organization
- Each directory can have subdirectories

**Paths**
- **Absolute path**: From the system root (/home/user/documents)
- **Relative path**: From your current location (./documents or ../other)`,
      },
    },
  },
  {
    id: "block-0-4-6",
    type: "TIP",
    order: 6,
    content: {
      es: {
        title: "En Linux todo es un archivo",
        text: `Una característica única de Linux es que **casi todo se representa como un archivo**:

- Archivos normales (documentos, imágenes)
- Directorios
- Dispositivos de hardware (/dev/sda para un disco)
- Procesos (/proc)
- Configuración del sistema (/etc)

Esta filosofía hace que Linux sea muy consistente y flexible para administrar.`,
      },
      en: {
        title: "In Linux everything is a file",
        text: `A unique characteristic of Linux is that **almost everything is represented as a file**:

- Regular files (documents, images)
- Directories
- Hardware devices (/dev/sda for a disk)
- Processes (/proc)
- System configuration (/etc)

This philosophy makes Linux very consistent and flexible to administer.`,
      },
    },
  },
  {
    id: "block-0-4-7",
    type: "TEXT",
    order: 7,
    content: {
      es: {
        title: "Resumen",
        text: `En esta lección aprendiste:

✅ El almacenamiento viene en diferentes formas: HDD, SSD, NVMe, USB

✅ El **sistema de archivos** organiza cómo se guardan los datos en el disco

✅ Los **archivos** contienen datos; los **directorios** contienen archivos y subdirectorios

✅ Las **rutas** pueden ser absolutas (desde la raíz) o relativas (desde tu ubicación)

✅ En Linux, casi todo se representa como un archivo`,
      },
      en: {
        title: "Summary",
        text: `In this lesson you learned:

✅ Storage comes in different forms: HDD, SSD, NVMe, USB

✅ The **file system** organizes how data is stored on disk

✅ **Files** contain data; **directories** contain files and subdirectories

✅ **Paths** can be absolute (from root) or relative (from your location)

✅ In Linux, almost everything is represented as a file`,
      },
    },
  },
];

export const lesson04Exercises: Exercise[] = [
  {
    id: "ex-0-4-1",
    lessonId: "lesson-0-4",
    slug: "ssd-vs-hdd",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Cuál es la principal ventaja de un SSD sobre un HDD?",
      en: "What is the main advantage of an SSD over an HDD?",
    },
    options: {
      es: ["Mayor capacidad", "Mayor velocidad", "Menor precio", "Más colores disponibles"],
      en: ["More capacity", "Higher speed", "Lower price", "More colors available"],
    },
    correctAnswer: "1",
    explanation: {
      es: "Los SSD son significativamente más rápidos porque usan memoria flash sin partes móviles.",
      en: "SSDs are significantly faster because they use flash memory with no moving parts.",
    },
    hints: {
      es: ["Piensa en qué tiene partes que se mueven"],
      en: ["Think about which one has moving parts"],
    },
    order: 1,
  },
  {
    id: "ex-0-4-2",
    lessonId: "lesson-0-4",
    slug: "filesystem-purpose",
    type: "TRUE_FALSE",
    question: {
      es: "El sistema de archivos define cómo se organizan y almacenan los datos en el disco.",
      en: "The file system defines how data is organized and stored on disk.",
    },
    correctAnswer: "true",
    explanation: {
      es: "El filesystem es el método de organización que permite al SO saber dónde está cada archivo.",
      en: "The filesystem is the organization method that lets the OS know where each file is.",
    },
    hints: {
      es: ["Es como el sistema de una biblioteca para organizar libros"],
      en: ["It's like a library's system for organizing books"],
    },
    order: 2,
  },
  {
    id: "ex-0-4-3",
    lessonId: "lesson-0-4",
    slug: "absolute-path",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Cuál de estos es un ejemplo de ruta absoluta en Linux?",
      en: "Which of these is an example of an absolute path in Linux?",
    },
    options: {
      es: ["./documentos", "../fotos", "/home/usuario/archivos", "documentos/trabajo"],
      en: ["./documents", "../photos", "/home/user/files", "documents/work"],
    },
    correctAnswer: "2",
    explanation: {
      es: "Una ruta absoluta siempre comienza con / (la raíz del sistema).",
      en: "An absolute path always starts with / (the system root).",
    },
    hints: {
      es: ["Las rutas absolutas empiezan desde la raíz del sistema"],
      en: ["Absolute paths start from the system root"],
    },
    order: 3,
  },
];

export const lesson04Quiz: Quiz = {
  id: "quiz-0-4",
  lessonId: "lesson-0-4",
  questions: [
    {
      id: "quiz-0-4-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿Qué sistema de archivos es el más común en Linux?",
        en: "What file system is most common in Linux?",
      },
      options: {
        es: ["NTFS", "FAT32", "ext4", "APFS"],
        en: ["NTFS", "FAT32", "ext4", "APFS"],
      },
      correctAnswer: "2",
      explanation: {
        es: "ext4 es el sistema de archivos predeterminado en la mayoría de distribuciones Linux.",
        en: "ext4 is the default file system in most Linux distributions.",
      },
      points: 5,
    },
    {
      id: "quiz-0-4-2",
      type: "TRUE_FALSE",
      question: {
        es: "En Linux, los dispositivos de hardware se representan como archivos en /dev.",
        en: "In Linux, hardware devices are represented as files in /dev.",
      },
      correctAnswer: "true",
      explanation: {
        es: "En la filosofía de Linux, 'todo es un archivo', incluyendo los dispositivos.",
        en: "In Linux philosophy, 'everything is a file', including devices.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson04: Lesson = {
  id: "lesson-0-4",
  moduleId: "level-0",
  slug: "storage-and-files",
  title: {
    es: "Almacenamiento y Archivos",
    en: "Storage and Files",
  },
  description: {
    es: "Comprende cómo se almacenan los datos en el disco y cómo se organizan en archivos y carpetas.",
    en: "Understand how data is stored on disk and how it's organized into files and folders.",
  },
  order: 4,
  duration: 15,
  contentBlocks: lesson04Content,
  exercises: lesson04Exercises,
  quiz: lesson04Quiz,
};
