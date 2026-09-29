import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson06Content: ContentBlock[] = [
  {
    id: "block-0-6-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Introducción",
        text: `Linux tiene una historia fascinante que comenzó como un proyecto estudiantil y se convirtió en el sistema operativo más importante para servidores, supercomputadoras, dispositivos móviles (Android) y IoT.

En esta lección aprenderás:
- Los orígenes de UNIX
- El proyecto GNU y el software libre
- Cómo Linus Torvalds creó Linux
- Las distribuciones más populares
- Por qué Linux domina los servidores`,
      },
      en: {
        title: "Introduction",
        text: `Linux has a fascinating history that started as a student project and became the most important operating system for servers, supercomputers, mobile devices (Android), and IoT.

In this lesson you will learn:
- The origins of UNIX
- The GNU project and free software
- How Linus Torvalds created Linux
- The most popular distributions
- Why Linux dominates servers`,
      },
    },
  },
  {
    id: "block-0-6-2",
    type: "TEXT",
    order: 2,
    content: {
      es: {
        title: "Los Orígenes: UNIX (1969)",
        text: `Todo comenzó con **UNIX**, creado en los laboratorios Bell de AT&T por Ken Thompson y Dennis Ritchie.

**Características revolucionarias de UNIX:**
- Sistema multiusuario y multitarea
- Escrito en C (un lenguaje portable)
- Filosofía "todo es un archivo"
- Herramientas pequeñas que hacen una cosa bien
- Pipes para conectar programas

UNIX fue muy influyente, pero era propietario y costoso. Esto inspiró la creación de alternativas libres.`,
      },
      en: {
        title: "The Origins: UNIX (1969)",
        text: `It all started with **UNIX**, created at AT&T's Bell Labs by Ken Thompson and Dennis Ritchie.

**Revolutionary UNIX features:**
- Multi-user and multitasking system
- Written in C (a portable language)
- "Everything is a file" philosophy
- Small tools that do one thing well
- Pipes to connect programs

UNIX was very influential, but it was proprietary and expensive. This inspired the creation of free alternatives.`,
      },
    },
  },
  {
    id: "block-0-6-3",
    type: "KEY_CONCEPT",
    order: 3,
    content: {
      es: {
        title: "El Proyecto GNU (1983)",
        text: `**Richard Stallman** inició el proyecto **GNU (GNU's Not Unix)** con el objetivo de crear un sistema operativo completamente libre.

**Contribuciones de GNU:**
- GCC (compilador de C)
- Bash (el shell más usado)
- Coreutils (ls, cp, mv, rm, etc.)
- Emacs, Make, y muchas herramientas más
- La licencia GPL (Licencia Pública General)

GNU tenía casi todo un sistema operativo, pero le faltaba el kernel.`,
      },
      en: {
        title: "The GNU Project (1983)",
        text: `**Richard Stallman** started the **GNU (GNU's Not Unix)** project with the goal of creating a completely free operating system.

**GNU contributions:**
- GCC (C compiler)
- Bash (the most used shell)
- Coreutils (ls, cp, mv, rm, etc.)
- Emacs, Make, and many more tools
- The GPL license (General Public License)

GNU had almost a complete operating system, but it was missing the kernel.`,
      },
    },
  },
  {
    id: "block-0-6-4",
    type: "KEY_CONCEPT",
    order: 4,
    content: {
      es: {
        title: "El Kernel Linux (1991)",
        text: `**Linus Torvalds**, un estudiante finlandés de 21 años, creó el kernel Linux como un proyecto personal.

El 25 de agosto de 1991 publicó su famoso mensaje:
*"Estoy haciendo un sistema operativo (libre) (solo un hobby, no será grande y profesional como GNU)..."*

**Linux + GNU = GNU/Linux**
El kernel de Linus + las herramientas de GNU = un sistema operativo completo y libre.`,
      },
      en: {
        title: "The Linux Kernel (1991)",
        text: `**Linus Torvalds**, a 21-year-old Finnish student, created the Linux kernel as a personal project.

On August 25, 1991, he posted his famous message:
*"I'm doing a (free) operating system (just a hobby, won't be big and professional like GNU)..."*

**Linux + GNU = GNU/Linux**
Linus's kernel + GNU tools = a complete and free operating system.`,
      },
    },
  },
  {
    id: "block-0-6-5",
    type: "DIAGRAM",
    order: 5,
    content: {
      es: {
        title: "Línea del Tiempo",
        diagramData: {
          type: "timeline",
          nodes: [
            { id: "unix", label: "1969 - UNIX", description: "Ken Thompson y Dennis Ritchie crean UNIX" },
            { id: "gnu", label: "1983 - GNU", description: "Richard Stallman inicia el proyecto GNU" },
            { id: "fsf", label: "1985 - FSF", description: "Se funda la Free Software Foundation" },
            { id: "linux", label: "1991 - Linux", description: "Linus Torvalds crea el kernel Linux" },
            { id: "distros", label: "1993 - Distros", description: "Nacen Debian y Slackware" },
            { id: "redhat", label: "1994 - Red Hat", description: "Se funda Red Hat" },
            { id: "ubuntu", label: "2004 - Ubuntu", description: "Canonical lanza Ubuntu" },
          ],
        },
      },
      en: {
        title: "Timeline",
        diagramData: {
          type: "timeline",
          nodes: [
            { id: "unix", label: "1969 - UNIX", description: "Ken Thompson and Dennis Ritchie create UNIX" },
            { id: "gnu", label: "1983 - GNU", description: "Richard Stallman starts the GNU project" },
            { id: "fsf", label: "1985 - FSF", description: "The Free Software Foundation is founded" },
            { id: "linux", label: "1991 - Linux", description: "Linus Torvalds creates the Linux kernel" },
            { id: "distros", label: "1993 - Distros", description: "Debian and Slackware are born" },
            { id: "redhat", label: "1994 - Red Hat", description: "Red Hat is founded" },
            { id: "ubuntu", label: "2004 - Ubuntu", description: "Canonical launches Ubuntu" },
          ],
        },
      },
    },
  },
  {
    id: "block-0-6-6",
    type: "TEXT",
    order: 6,
    content: {
      es: {
        title: "Distribuciones de Linux",
        text: `Una **distribución (distro)** es Linux + software adicional empaquetado de forma específica.

**Principales familias:**

**Debian/Ubuntu**
- Debian: Estable, conservador
- Ubuntu: Fácil de usar, popular
- Linux Mint: Amigable para principiantes

**Red Hat/Fedora**
- Red Hat Enterprise Linux (RHEL): Para empresas
- Fedora: Innovador, para desarrolladores
- CentOS/Rocky/Alma: Versiones gratuitas de RHEL

**Arch**
- Arch Linux: Rolling release, para expertos
- Manjaro: Arch más accesible

**Otras**
- openSUSE, Alpine, Gentoo...`,
      },
      en: {
        title: "Linux Distributions",
        text: `A **distribution (distro)** is Linux + additional software packaged in a specific way.

**Main families:**

**Debian/Ubuntu**
- Debian: Stable, conservative
- Ubuntu: Easy to use, popular
- Linux Mint: Beginner-friendly

**Red Hat/Fedora**
- Red Hat Enterprise Linux (RHEL): For enterprises
- Fedora: Innovative, for developers
- CentOS/Rocky/Alma: Free versions of RHEL

**Arch**
- Arch Linux: Rolling release, for experts
- Manjaro: More accessible Arch

**Others**
- openSUSE, Alpine, Gentoo...`,
      },
    },
  },
  {
    id: "block-0-6-7",
    type: "TEXT",
    order: 7,
    content: {
      es: {
        title: "Linux Hoy",
        text: `**Linux está en todas partes:**

- **96%+** de los servidores web usan Linux
- **100%** de las 500 supercomputadoras más potentes
- **Android** está basado en el kernel Linux (3+ billones de dispositivos)
- **Chromebooks** usan Linux
- La mayoría de **IoT** y dispositivos embebidos
- **AWS, Google Cloud, Azure** funcionan con Linux

Linux pasó de ser un proyecto de hobby a dominar la infraestructura de internet.`,
      },
      en: {
        title: "Linux Today",
        text: `**Linux is everywhere:**

- **96%+** of web servers use Linux
- **100%** of the 500 most powerful supercomputers
- **Android** is based on the Linux kernel (3+ billion devices)
- **Chromebooks** use Linux
- Most **IoT** and embedded devices
- **AWS, Google Cloud, Azure** run on Linux

Linux went from being a hobby project to dominating internet infrastructure.`,
      },
    },
  },
  {
    id: "block-0-6-8",
    type: "TEXT",
    order: 8,
    content: {
      es: {
        title: "Resumen",
        text: `En esta lección aprendiste:

✅ **UNIX** (1969) estableció los fundamentos de los sistemas modernos

✅ **GNU** (1983) creó herramientas libres y la filosofía del software libre

✅ **Linus Torvalds** creó el kernel Linux en 1991 como proyecto de estudiante

✅ GNU + Linux = un sistema operativo completo y libre

✅ Existen muchas **distribuciones** para diferentes propósitos

✅ Linux **domina servidores**, supercomputadoras y dispositivos móviles`,
      },
      en: {
        title: "Summary",
        text: `In this lesson you learned:

✅ **UNIX** (1969) established the foundations of modern systems

✅ **GNU** (1983) created free tools and the free software philosophy

✅ **Linus Torvalds** created the Linux kernel in 1991 as a student project

✅ GNU + Linux = a complete and free operating system

✅ There are many **distributions** for different purposes

✅ Linux **dominates servers**, supercomputers, and mobile devices`,
      },
    },
  },
];

export const lesson06Exercises: Exercise[] = [
  {
    id: "ex-0-6-1",
    lessonId: "lesson-0-6",
    slug: "linux-creator",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Quién creó el kernel Linux?",
      en: "Who created the Linux kernel?",
    },
    options: {
      es: ["Richard Stallman", "Linus Torvalds", "Bill Gates", "Steve Jobs"],
      en: ["Richard Stallman", "Linus Torvalds", "Bill Gates", "Steve Jobs"],
    },
    correctAnswer: "1",
    explanation: {
      es: "Linus Torvalds creó el kernel Linux en 1991 cuando era un estudiante de 21 años en Finlandia.",
      en: "Linus Torvalds created the Linux kernel in 1991 when he was a 21-year-old student in Finland.",
    },
    hints: {
      es: ["El kernel lleva su nombre"],
      en: ["The kernel carries his name"],
    },
    order: 1,
  },
  {
    id: "ex-0-6-2",
    lessonId: "lesson-0-6",
    slug: "gnu-meaning",
    type: "TRUE_FALSE",
    question: {
      es: "GNU significa 'GNU is Not Unix' (GNU No es Unix).",
      en: "GNU stands for 'GNU is Not Unix'.",
    },
    correctAnswer: "true",
    explanation: {
      es: "GNU es un acrónimo recursivo que refleja el humor de los programadores: 'GNU's Not Unix'.",
      en: "GNU is a recursive acronym reflecting programmers' humor: 'GNU's Not Unix'.",
    },
    hints: {
      es: ["Es un acrónimo recursivo"],
      en: ["It's a recursive acronym"],
    },
    order: 2,
  },
  {
    id: "ex-0-6-3",
    lessonId: "lesson-0-6",
    slug: "distro-example",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Cuál de estas NO es una distribución de Linux?",
      en: "Which of these is NOT a Linux distribution?",
    },
    options: {
      es: ["Ubuntu", "Fedora", "Windows 11", "Debian"],
      en: ["Ubuntu", "Fedora", "Windows 11", "Debian"],
    },
    correctAnswer: "2",
    explanation: {
      es: "Windows 11 es el sistema operativo de Microsoft, no una distribución de Linux.",
      en: "Windows 11 is Microsoft's operating system, not a Linux distribution.",
    },
    hints: {
      es: ["Una de estas es de Microsoft"],
      en: ["One of these is from Microsoft"],
    },
    order: 3,
  },
];

export const lesson06Quiz: Quiz = {
  id: "quiz-0-6",
  lessonId: "lesson-0-6",
  questions: [
    {
      id: "quiz-0-6-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "¿En qué año se creó el kernel Linux?",
        en: "In what year was the Linux kernel created?",
      },
      options: {
        es: ["1969", "1983", "1991", "2004"],
        en: ["1969", "1983", "1991", "2004"],
      },
      correctAnswer: "2",
      explanation: {
        es: "El kernel Linux fue creado por Linus Torvalds en 1991.",
        en: "The Linux kernel was created by Linus Torvalds in 1991.",
      },
      points: 5,
    },
    {
      id: "quiz-0-6-2",
      type: "TRUE_FALSE",
      question: {
        es: "Android está basado en el kernel Linux.",
        en: "Android is based on the Linux kernel.",
      },
      correctAnswer: "true",
      explanation: {
        es: "Android utiliza el kernel Linux como base, lo que significa que miles de millones de dispositivos usan Linux.",
        en: "Android uses the Linux kernel as its base, meaning billions of devices use Linux.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson06: Lesson = {
  id: "lesson-0-6",
  moduleId: "level-0",
  slug: "linux-history",
  title: {
    es: "Historia de Linux",
    en: "History of Linux",
  },
  description: {
    es: "Conoce los orígenes de UNIX, GNU, el kernel Linux y las distribuciones más populares.",
    en: "Learn about the origins of UNIX, GNU, the Linux kernel, and the most popular distributions.",
  },
  order: 6,
  duration: 20,
  contentBlocks: lesson06Content,
  exercises: lesson06Exercises,
  quiz: lesson06Quiz,
};
