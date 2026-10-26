import type { ContentBlock, Exam, Lab, Lesson, Module, QuizQuestion } from "@/types";

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

export function labsForCourse(level: number, lessons: Lesson[]): Lab[] {
  return lessons.slice(0, 2).map((lesson, index) => ({
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
    validationCriteria: [],
    difficulty: "BEGINNER",
    estimatedTime: 20,
    order: index + 1,
  }));
}

export function examForCourse(level: number, lessons: Lesson[]): Exam {
  const questions = lessons.slice(0, 10).flatMap((lesson) => {
    const first = lesson.quiz?.questions[0];
    if (!first) return [];
    return [{
      ...first,
      id: `exam-${lesson.id}-1`,
      difficulty: "BEGINNER" as const,
      category: lesson.slug,
    }];
  });

  return {
    id: `exam-level-${level}`,
    moduleId: `level-${level}`,
    title: {
      es: `Examen del nivel ${level}`,
      en: `Level ${level} exam`,
    },
    description: {
      es: "Preguntas de las lecciones de este nivel. Necesitas 80% para aprobar.",
      en: "Questions from this level's lessons. You need 80% to pass.",
    },
    questions,
    timeLimit: null,
    passingScore: 80,
    maxAttempts: null,
    shuffleQuestions: true,
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
    project: null,
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
