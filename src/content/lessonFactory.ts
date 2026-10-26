import type { ContentBlock, Exam, Lab, Lesson, Module, Project, QuizQuestion } from "@/types";

export interface Bilingual {
  es: string;
  en: string;
}

export interface QuizSpec {
  question: Bilingual;
  options: { es: string[]; en: string[] };
  correct: number;
  explanation: Bilingual;
}

export interface LessonSpec {
  slug: string;
  title: Bilingual;
  description: Bilingual;
  why: Bilingual;
  concept: Bilingual;
  commands: Bilingual;
  practice: Bilingual;
  warning?: Bilingual;
  quiz: QuizSpec[];
}

export interface CourseSpec {
  level: number;
  icon: string;
  title: Bilingual;
  description: Bilingual;
  skills: string[];
  lessons: LessonSpec[];
}

function block(
  id: string,
  order: number,
  type: ContentBlock["type"],
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

export function lessonFromSpec(level: number, order: number, spec: LessonSpec): Lesson {
  const id = `lesson-${level}-${order}`;
  const blocks: ContentBlock[] = [
    block(`${id}-why`, 1, "TEXT", "Por qué existe", spec.why.es, "Why it exists", spec.why.en),
    block(`${id}-concept`, 2, "KEY_CONCEPT", "Idea central", spec.concept.es, "Core idea", spec.concept.en),
    block(`${id}-commands`, 3, "CODE", "Comandos", spec.commands.es, "Commands", spec.commands.en),
    block(`${id}-practice`, 4, "TIP", "Práctica", spec.practice.es, "Practice", spec.practice.en),
  ];
  if (spec.warning) {
    blocks.push(block(`${id}-warning`, 5, "WARNING", "Cuidado", spec.warning.es, "Careful", spec.warning.en));
  }

  const questions: QuizQuestion[] = spec.quiz.map((item, index) => ({
    id: `quiz-${id}-${index + 1}`,
    type: "MULTIPLE_CHOICE",
    question: item.question,
    options: item.options,
    correctAnswer: String(item.correct),
    explanation: item.explanation,
    points: 5,
  }));

  return {
    id,
    moduleId: `level-${level}`,
    slug: spec.slug,
    title: spec.title,
    description: spec.description,
    order,
    duration: 20,
    contentBlocks: blocks,
    exercises: [],
    quiz: {
      id: `quiz-${id}`,
      lessonId: id,
      questions,
      passingScore: 70,
    },
  };
}

function firstCommand(lesson: Lesson): string {
  const code = lesson.contentBlocks.find((block) => block.type === "CODE");
  const line = code?.content.es.text?.split("\n").map((item) => item.trim()).find(Boolean);
  return line ?? "pwd";
}

export function labsForCourse(level: number, lessons: Lesson[]): Lab[] {
  return lessons.slice(0, 4).map((lesson, index) => ({
    id: `lab-${level}-${index + 1}`,
    moduleId: `level-${level}`,
    slug: `lab-${lesson.slug}`,
    title: {
      es: `Práctica: ${lesson.title.es}`,
      en: `Practice: ${lesson.title.en}`,
    },
    description: lesson.description,
    objectives: {
      es: [
        `Aplicar la lección «${lesson.title.es}» en la terminal`,
        "Comprobar el resultado antes de seguir",
        "Anotar el comando que resolvió el paso",
      ],
      en: [
        `Apply the lesson "${lesson.title.en}" in the terminal`,
        "Check the result before continuing",
        "Write down the command that solved the step",
      ],
    },
    prerequisites: {
      es: [`Lección ${lesson.order}`],
      en: [`Lesson ${lesson.order}`],
    },
    instructions: {
      es: [
        { step: 1, instruction: `Lee la lección «${lesson.title.es}» y abre la terminal`, expectedResult: "Prompt visible" },
        { step: 2, instruction: "Ejecuta el ejemplo de la sección Comandos en un directorio de práctica", expectedResult: "El comando termina sin error" },
        { step: 3, instruction: "Repite el ejercicio de la sección Práctica", expectedResult: "El resultado coincide con lo descrito" },
        { step: 4, instruction: "Si algo falla, lee el mensaje y corrige un solo argumento", expectedResult: "Puedes explicar qué cambió" },
      ],
      en: [
        { step: 1, instruction: `Read the lesson "${lesson.title.en}" and open the terminal`, expectedResult: "Prompt visible" },
        { step: 2, instruction: "Run the Commands example inside a practice directory", expectedResult: "The command exits without error" },
        { step: 3, instruction: "Repeat the Practice section exercise", expectedResult: "The result matches the description" },
        { step: 4, instruction: "If something fails, read the message and fix one argument", expectedResult: "You can explain what changed" },
      ],
    },
    hints: {
      es: ["Empieza en tu home: cd ~", "pwd te dice dónde estás", "man o --help explican las opciones"],
      en: ["Start in your home: cd ~", "pwd tells you where you are", "man or --help explain the options"],
    },
    solution: {
      es: `Completa los pasos de «${lesson.title.es}» y conserva el comando que funcionó.`,
      en: `Finish the steps for "${lesson.title.en}" and keep the command that worked.`,
    },
    validationCriteria: [
      {
        type: "command_output",
        check: firstCommand(lesson),
        expected: "El comando termina sin error",
      },
      {
        type: "custom",
        check: "Provoca el fallo que advierte la lección y vuelve al estado anterior",
        expected: "Puedes explicar la causa en una frase",
      },
    ],
    difficulty: level >= 10 ? "ADVANCED" : level >= 5 ? "INTERMEDIATE" : "BEGINNER",
    estimatedTime: 20,
    order: index + 1,
  }));
}

export function examForCourse(level: number, lessons: Lesson[]): Exam {
  const questions = lessons.flatMap((lesson) =>
    (lesson.quiz?.questions ?? []).map((question, index) => ({
      ...question,
      id: `exam-${lesson.id}-${index + 1}`,
      difficulty: index >= 2 ? "INTERMEDIATE" as const : "BEGINNER" as const,
      category: lesson.slug,
    })),
  ).slice(0, 20);

  return {
    id: `exam-level-${level}`,
    moduleId: `level-${level}`,
    title: {
      es: `Examen del nivel ${level}`,
      en: `Level ${level} exam`,
    },
    description: {
      es: "Hasta 20 preguntas de las lecciones, incluidas situaciones de fallo. Necesitas 80% para aprobar.",
      en: "Up to 20 questions from the lessons, including failure scenarios. You need 80% to pass.",
    },
    questions,
    timeLimit: null,
    passingScore: 80,
    maxAttempts: null,
    shuffleQuestions: true,
  };
}

export function projectForCourse(level: number, lessons: Lesson[]): Project {
  const focus = lessons.slice(0, 4);
  return {
    id: `project-level-${level}`,
    moduleId: `level-${level}`,
    title: {
      es: `Proyecto del nivel ${level}`,
      en: `Level ${level} project`,
    },
    description: {
      es: "Entrega un resultado que puedas romper y restaurar. El proyecto no cuenta si solo leíste las lecciones.",
      en: "Deliver a result you can break and restore. The project does not count if you only read the lessons.",
    },
    objectives: {
      es: focus.map((lesson) => `Aplicar «${lesson.title.es}» en un caso que falle si omites un paso`),
      en: focus.map((lesson) => `Apply "${lesson.title.en}" in a case that fails if you skip a step`),
    },
    requirements: {
      es: [
        "Usa la terminal de tu máquina, no un editor de la consola del navegador",
        "Guarda los comandos que funcionaron y el error que provocaste a propósito",
        "No dejes secretos, chmod 777 ni un borrado amplio en el entregable",
      ],
      en: [
        "Use your machine's terminal, not a browser console editor",
        "Keep the commands that worked and the error you caused on purpose",
        "Leave no secrets, chmod 777, or a wide delete in the deliverable",
      ],
    },
    deliverables: {
      es: [
        "Un directorio o manifiesto con el resultado",
        "Una nota de 10 líneas: qué rompiste, qué decía el error y cómo volviste atrás",
      ],
      en: [
        "A directory or manifest with the result",
        "A 10-line note: what you broke, what the error said, and how you rolled back",
      ],
    },
    rubric: {
      es: [
        { criterion: "Resultado", description: "El caso de las lecciones queda funcionando", points: 40 },
        { criterion: "Fallo", description: "Hay un error real y la corrección", points: 30 },
        { criterion: "Cuidado", description: "Sin secretos ni permisos abiertos de más", points: 30 },
      ],
      en: [
        { criterion: "Result", description: "The lesson scenario works", points: 40 },
        { criterion: "Failure", description: "There is a real error and the fix", points: 30 },
        { criterion: "Care", description: "No secrets and no overly open permissions", points: 30 },
      ],
    },
    resources: {
      es: ["Terminal de la app", "Lecciones de este nivel"],
      en: ["The app terminal", "This level's lessons"],
    },
    difficulty: level >= 12 ? "ADVANCED" : level >= 5 ? "INTERMEDIATE" : "BEGINNER",
    estimatedTime: 3 + Math.floor(level / 4),
  };
}

export interface BuiltCourse {
  module: Module;
  lessons: Lesson[];
  labs: Lab[];
  exam: Exam;
}

export function courseFromSpec(spec: CourseSpec): BuiltCourse {
  const lessons = spec.lessons.map((lesson, index) => lessonFromSpec(spec.level, index + 1, lesson));
  const labs = labsForCourse(spec.level, lessons);
  const exam = examForCourse(spec.level, lessons);
  const project = projectForCourse(spec.level, lessons);
  const module: Module = {
    id: `level-${spec.level}`,
    courseId: "linux-academy",
    slug: spec.lessons[0]?.slug ?? `level-${spec.level}`,
    level: spec.level,
    title: spec.title,
    description: spec.description,
    icon: spec.icon,
    order: spec.level,
    lessons,
    labs,
    exam,
    project,
    passingScore: 80,
    prerequisites: spec.level === 0 ? [] : [`level-${spec.level - 1}`],
    skills: spec.skills,
  };
  return { module, lessons, labs, exam };
}

export function levelFromPath(pathname: string): number | null {
  const match = pathname.match(/\/(?:courses|exams)\/level-(\d+)(?:\/|$)/);
  if (!match) return null;
  return Number(match[1]);
}
