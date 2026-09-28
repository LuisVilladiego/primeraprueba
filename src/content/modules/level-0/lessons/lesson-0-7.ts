import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson07Content: ContentBlock[] = [
  {
    id: "block-0-7-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "Introducción",
        text: `Existen tres sistemas operativos principales para computadores de escritorio y portátiles: Windows, macOS y Linux. Cada uno tiene sus fortalezas, debilidades y casos de uso ideales.

En esta lección aprenderás:
- Las diferencias fundamentales entre los tres sistemas
- Cuándo usar cada uno
- Por qué Linux es el estándar para servidores
- Cómo elegir el sistema adecuado para cada situación`,
      },
      en: {
        title: "Introduction",
        text: `There are three main operating systems for desktop and laptop computers: Windows, macOS, and Linux. Each has its strengths, weaknesses, and ideal use cases.

In this lesson you will learn:
- The fundamental differences between the three systems
- When to use each one
- Why Linux is the standard for servers
- How to choose the right system for each situation`,
      },
    },
  },
  {
    id: "block-0-7-2",
    type: "TEXT",
    order: 2,
    content: {
      es: {
        title: "Windows",
        text: `**Desarrollado por:** Microsoft
**Modelo:** Propietario (código cerrado)
**Costo:** Licencia de pago

**Fortalezas:**
- Mayor compatibilidad con software comercial
- Juegos (la mayoría se desarrollan para Windows)
- Microsoft Office nativo
- Soporte de hardware amplio
- Interfaz familiar para la mayoría

**Debilidades:**
- Licencia costosa
- Código cerrado (no puedes ver ni modificar)
- Más vulnerable a malware
- Actualizaciones forzadas
- Consume más recursos`,
      },
      en: {
        title: "Windows",
        text: `**Developed by:** Microsoft
**Model:** Proprietary (closed source)
**Cost:** Paid license

**Strengths:**
- Greatest compatibility with commercial software
- Games (most are developed for Windows)
- Native Microsoft Office
- Wide hardware support
- Familiar interface for most

**Weaknesses:**
- Expensive license
- Closed source (you can't see or modify)
- More vulnerable to malware
- Forced updates
- Consumes more resources`,
      },
    },
  },
  {
    id: "block-0-7-3",
    type: "TEXT",
    order: 3,
    content: {
      es: {
        title: "macOS",
        text: `**Desarrollado por:** Apple
**Modelo:** Propietario (basado en Darwin/BSD)
**Costo:** Gratis (pero solo en hardware Apple)

**Fortalezas:**
- Excelente integración hardware-software
- Muy estable y pulido
- Terminal Unix nativa (similar a Linux)
- Ideal para diseño y desarrollo
- Ecosistema Apple integrado

**Debilidades:**
- Solo funciona en hardware Apple (costoso)
- Menos opciones de personalización
- Software más limitado que Windows
- Hardware no upgradeable
- "Jardín cerrado"`,
      },
      en: {
        title: "macOS",
        text: `**Developed by:** Apple
**Model:** Proprietary (based on Darwin/BSD)
**Cost:** Free (but only on Apple hardware)

**Strengths:**
- Excellent hardware-software integration
- Very stable and polished
- Native Unix terminal (similar to Linux)
- Ideal for design and development
- Integrated Apple ecosystem

**Weaknesses:**
- Only works on Apple hardware (expensive)
- Fewer customization options
- More limited software than Windows
- Non-upgradeable hardware
- "Walled garden"`,
      },
    },
  },
  {
    id: "block-0-7-4",
    type: "TEXT",
    order: 4,
    content: {
      es: {
        title: "Linux",
        text: `**Desarrollado por:** Comunidad + empresas (Red Hat, Canonical, etc.)
**Modelo:** Código abierto (libre)
**Costo:** Gratis

**Fortalezas:**
- Completamente gratuito
- Código abierto (puedes ver y modificar todo)
- Extremadamente personalizable
- Muy seguro y estable
- Domina servidores y cloud
- Ideal para desarrollo y DevOps
- Consume menos recursos

**Debilidades:**
- Curva de aprendizaje más pronunciada
- Menos software comercial (Adobe, Office)
- Menos juegos nativos (aunque Steam/Proton mejora esto)
- Soporte de hardware ocasionalmente problemático`,
      },
      en: {
        title: "Linux",
        text: `**Developed by:** Community + companies (Red Hat, Canonical, etc.)
**Model:** Open source (free)
**Cost:** Free

**Strengths:**
- Completely free
- Open source (you can see and modify everything)
- Extremely customizable
- Very secure and stable
- Dominates servers and cloud
- Ideal for development and DevOps
- Consumes fewer resources

**Weaknesses:**
- Steeper learning curve
- Less commercial software (Adobe, Office)
- Fewer native games (though Steam/Proton improves this)
- Hardware support occasionally problematic`,
      },
    },
  },
  {
    id: "block-0-7-5",
    type: "DIAGRAM",
    order: 5,
    content: {
      es: {
        title: "Comparación Rápida",
        diagramData: {
          type: "comparison",
          nodes: [
            { id: "windows", label: "Windows", description: "Ideal para: Gaming, Office, uso general" },
            { id: "macos", label: "macOS", description: "Ideal para: Diseño, desarrollo, creativos" },
            { id: "linux", label: "Linux", description: "Ideal para: Servidores, desarrollo, DevOps" },
          ],
        },
      },
      en: {
        title: "Quick Comparison",
        diagramData: {
          type: "comparison",
          nodes: [
            { id: "windows", label: "Windows", description: "Ideal for: Gaming, Office, general use" },
            { id: "macos", label: "macOS", description: "Ideal for: Design, development, creatives" },
            { id: "linux", label: "Linux", description: "Ideal for: Servers, development, DevOps" },
          ],
        },
      },
    },
  },
  {
    id: "block-0-7-6",
    type: "KEY_CONCEPT",
    order: 6,
    content: {
      es: {
        title: "¿Por qué Linux para servidores?",
        text: `Linux domina los servidores por razones muy específicas:

**Costo:** No hay licencias que pagar por servidor
**Estabilidad:** Puede funcionar años sin reiniciar
**Seguridad:** Menos malware, actualizaciones rápidas
**Rendimiento:** Más eficiente en recursos
**Flexibilidad:** Puedes personalizar todo
**CLI:** Administración remota eficiente
**Comunidad:** Documentación y soporte abundante
**Contenedores:** Docker y Kubernetes funcionan mejor en Linux

Por eso AWS, Google Cloud, Azure y la mayoría de la infraestructura de internet usan Linux.`,
      },
      en: {
        title: "Why Linux for servers?",
        text: `Linux dominates servers for very specific reasons:

**Cost:** No licenses to pay per server
**Stability:** Can run for years without restarting
**Security:** Less malware, fast updates
**Performance:** More efficient with resources
**Flexibility:** You can customize everything
**CLI:** Efficient remote administration
**Community:** Abundant documentation and support
**Containers:** Docker and Kubernetes work better on Linux

That's why AWS, Google Cloud, Azure, and most internet infrastructure use Linux.`,
      },
    },
  },
  {
    id: "block-0-7-7",
    type: "TIP",
    order: 7,
    content: {
      es: {
        title: "No tienes que elegir solo uno",
        text: `Muchos profesionales usan múltiples sistemas:

- **Escritorio personal:** Windows o macOS
- **Desarrollo:** macOS o Linux (WSL en Windows)
- **Servidores:** Linux

Puedes incluso:
- Usar **WSL** (Windows Subsystem for Linux) en Windows
- Ejecutar Linux en una **máquina virtual**
- Tener **dual boot** (dos sistemas en un computador)
- Usar Linux directamente vía **SSH** en servidores remotos`,
      },
      en: {
        title: "You don't have to choose just one",
        text: `Many professionals use multiple systems:

- **Personal desktop:** Windows or macOS
- **Development:** macOS or Linux (WSL on Windows)
- **Servers:** Linux

You can even:
- Use **WSL** (Windows Subsystem for Linux) on Windows
- Run Linux in a **virtual machine**
- Have **dual boot** (two systems on one computer)
- Use Linux directly via **SSH** on remote servers`,
      },
    },
  },
  {
    id: "block-0-7-8",
    type: "TEXT",
    order: 8,
    content: {
      es: {
        title: "Resumen",
        text: `En esta lección aprendiste:

✅ **Windows** es ideal para uso general, gaming y software comercial

✅ **macOS** es excelente para diseño, desarrollo y el ecosistema Apple

✅ **Linux** es el estándar para servidores, desarrollo y DevOps

✅ Linux domina servidores por: costo, estabilidad, seguridad y flexibilidad

✅ Puedes usar múltiples sistemas según tus necesidades

✅ Aprender Linux es esencial para carreras en tecnología`,
      },
      en: {
        title: "Summary",
        text: `In this lesson you learned:

✅ **Windows** is ideal for general use, gaming, and commercial software

✅ **macOS** is excellent for design, development, and the Apple ecosystem

✅ **Linux** is the standard for servers, development, and DevOps

✅ Linux dominates servers for: cost, stability, security, and flexibility

✅ You can use multiple systems according to your needs

✅ Learning Linux is essential for technology careers`,
      },
    },
  },
];

export const lesson07Exercises: Exercise[] = [
  {
    id: "ex-0-7-1",
    lessonId: "lesson-0-7",
    slug: "linux-cost",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Cuál es una ventaja económica de Linux sobre Windows?",
      en: "What is an economic advantage of Linux over Windows?",
    },
    options: {
      es: [
        "Linux es más caro pero mejor",
        "Linux es completamente gratuito",
        "Linux solo funciona en hardware Apple",
        "Linux requiere licencias por servidor",
      ],
      en: [
        "Linux is more expensive but better",
        "Linux is completely free",
        "Linux only works on Apple hardware",
        "Linux requires licenses per server",
      ],
    },
    correctAnswer: "1",
    explanation: {
      es: "Linux es de código abierto y gratuito, lo que permite usarlo sin costos de licencia.",
      en: "Linux is open source and free, allowing its use without license costs.",
    },
    hints: {
      es: ["Es de código abierto"],
      en: ["It's open source"],
    },
    order: 1,
  },
  {
    id: "ex-0-7-2",
    lessonId: "lesson-0-7",
    slug: "server-os",
    type: "TRUE_FALSE",
    question: {
      es: "Más del 90% de los servidores web en internet usan Linux.",
      en: "More than 90% of web servers on the internet use Linux.",
    },
    correctAnswer: "true",
    explanation: {
      es: "Linux domina completamente el mercado de servidores web por su estabilidad, seguridad y costo.",
      en: "Linux completely dominates the web server market for its stability, security, and cost.",
    },
    hints: {
      es: ["Linux es el estándar en servidores"],
      en: ["Linux is the standard for servers"],
    },
    order: 2,
  },
  {
    id: "ex-0-7-3",
    lessonId: "lesson-0-7",
    slug: "best-for-gaming",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Cuál sistema operativo tiene la mejor compatibilidad con juegos actualmente?",
      en: "Which operating system has the best game compatibility currently?",
    },
    options: {
      es: ["Linux", "macOS", "Windows", "FreeBSD"],
      en: ["Linux", "macOS", "Windows", "FreeBSD"],
    },
    correctAnswer: "2",
    explanation: {
      es: "La mayoría de los juegos se desarrollan primero para Windows, dándole la mayor biblioteca de juegos.",
      en: "Most games are developed for Windows first, giving it the largest game library.",
    },
    hints: {
      es: ["La mayoría de juegos se desarrollan para este sistema"],
      en: ["Most games are developed for this system"],
    },
    order: 3,
  },
];

export const lesson07Quiz: Quiz = {
  id: "quiz-0-7",
  lessonId: "lesson-0-7",
  questions: [
    {
      id: "quiz-0-7-1",
      type: "MULTIPLE_CHOICE",
      question: {
        es: "Si necesitas administrar servidores remotamente, ¿qué sistema operativo sería más adecuado aprender?",
        en: "If you need to manage servers remotely, which operating system would be most suitable to learn?",
      },
      options: {
        es: ["Windows", "macOS", "Linux", "ChromeOS"],
        en: ["Windows", "macOS", "Linux", "ChromeOS"],
      },
      correctAnswer: "2",
      explanation: {
        es: "Linux es el sistema dominante en servidores y está diseñado para administración remota vía CLI.",
        en: "Linux is the dominant system on servers and is designed for remote administration via CLI.",
      },
      points: 5,
    },
    {
      id: "quiz-0-7-2",
      type: "TRUE_FALSE",
      question: {
        es: "Solo puedes usar un sistema operativo y no es posible combinar varios.",
        en: "You can only use one operating system and it's not possible to combine several.",
      },
      correctAnswer: "false",
      explanation: {
        es: "Puedes usar múltiples sistemas: dual boot, máquinas virtuales, WSL, o diferentes sistemas en diferentes dispositivos.",
        en: "You can use multiple systems: dual boot, virtual machines, WSL, or different systems on different devices.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson07: Lesson = {
  id: "lesson-0-7",
  moduleId: "level-0",
  slug: "linux-vs-windows-vs-macos",
  title: {
    es: "Linux vs Windows vs macOS",
    en: "Linux vs Windows vs macOS",
  },
  description: {
    es: "Compara los tres sistemas operativos más populares y entiende cuándo usar cada uno.",
    en: "Compare the three most popular operating systems and understand when to use each one.",
  },
  order: 7,
  duration: 15,
  contentBlocks: lesson07Content,
  exercises: lesson07Exercises,
  quiz: lesson07Quiz,
};
