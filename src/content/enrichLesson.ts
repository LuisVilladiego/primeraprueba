import type { ContentBlock, Exercise, Lab, Lesson, Quiz, QuizQuestion } from "@/types";

interface SupportVideo {
  url: string;
  es: string;
  en: string;
}

const introVideo: Record<number, SupportVideo> = {
  0: { url: "https://www.youtube.com/watch?v=OAx_6-wdslM", es: "Cómo funciona un computador", en: "How a computer works" },
  1: { url: "https://www.youtube.com/watch?v=l9YxTXDiiFY", es: "Por qué aprender Linux", en: "Why learn Linux" },
  2: { url: "https://www.youtube.com/watch?v=LKCVKw9CzFo", es: "Piezas de Linux que vas a usar al administrar", en: "Linux pieces you will use as an admin" },
  3: { url: "https://www.youtube.com/watch?v=zN8YNNHcaZc", es: "Cómo viaja el tráfico en Internet", en: "How traffic moves on the Internet" },
  4: { url: "https://www.youtube.com/watch?v=gd7BXuUQ91w", es: "Comandos que usarás en la sesión remota", en: "Commands you will use on the remote session" },
  5: { url: "https://www.youtube.com/watch?v=8JJ101D3knE", es: "Git en una hora", en: "Git in one hour" },
  6: { url: "https://www.youtube.com/watch?v=e7BufAVwDiM", es: "Bash de punta a punta", en: "Bash end to end" },
  7: { url: "https://www.youtube.com/watch?v=pg19Z8LL06w", es: "Docker para quien empieza", en: "Docker for beginners" },
  8: { url: "https://www.youtube.com/watch?v=q8OleYuqntY", es: "Nginx como proxy, con un proyecto", en: "Nginx as a proxy, with a project" },
  9: { url: "https://www.youtube.com/watch?v=qw--VYLpxG4", es: "PostgreSQL desde cero", en: "PostgreSQL from scratch" },
  10: { url: "https://www.youtube.com/watch?v=gLJdrXPn0ns", es: "DevSecOps: el pipeline también se asegura", en: "DevSecOps: the pipeline is secured too" },
  11: { url: "https://www.youtube.com/watch?v=Ia-UEYYR44s", es: "Arquitectura en AWS, curso largo de apoyo", en: "Architecture on AWS, a long support course" },
  12: { url: "https://www.youtube.com/watch?v=gLJdrXPn0ns", es: "Un pipeline de CI con GitHub Actions", en: "A CI pipeline with GitHub Actions" },
  13: { url: "https://www.youtube.com/watch?v=h4Sl21AKiDg", es: "Cómo observa Prometheus un sistema", en: "How Prometheus watches a system" },
  14: { url: "https://www.youtube.com/watch?v=l5k1ai_GBDE", es: "Terraform en 15 minutos", en: "Terraform in 15 minutes" },
  15: { url: "https://www.youtube.com/watch?v=X48VuDVv0do", es: "Kubernetes para quien empieza", en: "Kubernetes for beginners" },
  16: { url: "https://www.youtube.com/watch?v=h4Sl21AKiDg", es: "Métricas: la base de la observabilidad", en: "Metrics: the base of observability" },
};

const secondVideo: Record<number, SupportVideo> = {
  1: { url: "https://www.youtube.com/watch?v=gd7BXuUQ91w", es: "60 comandos en contexto", en: "60 commands in context" },
  5: { url: "https://www.youtube.com/watch?v=RGOj5yH7evk", es: "Git y GitHub, curso breve", en: "Git and GitHub, a short course" },
  7: { url: "https://www.youtube.com/watch?v=bKFMS5C4CG0", es: "Redes de Docker", en: "Docker networking" },
  14: { url: "https://www.youtube.com/watch?v=SLB_c_ayRMo", es: "Terraform sobre AWS, curso de apoyo", en: "Terraform on AWS, a support course" },
  15: { url: "https://www.youtube.com/watch?v=3c-iBn73dDE", es: "Docker a fondo, antes de orquestar", en: "Docker in depth, before you orchestrate" },
  16: { url: "https://www.youtube.com/watch?v=gLJdrXPn0ns", es: "Secretos y seguridad dentro del pipeline", en: "Secrets and security inside the pipeline" },
};

function levelOf(lesson: Lesson): number | null {
  const match = /^level-(\d+)$/.exec(lesson.moduleId);
  return match ? Number(match[1]) : null;
}

function videoFor(lesson: Lesson): SupportVideo | null {
  const level = levelOf(lesson);
  if (level == null) return null;
  if (lesson.order === 1) return introVideo[level] ?? null;
  if (lesson.order === 4) return secondVideo[level] ?? null;
  return null;
}

function firstCommand(lesson: Lesson, locale: "es" | "en"): string {
  const code = lesson.contentBlocks.find((block) => block.type === "CODE");
  const line = code?.content[locale]?.text?.split("\n").map((item) => item.trim()).find(Boolean);
  return line ?? "pwd";
}

function harderQuestions(lesson: Lesson, quiz: Quiz): QuizQuestion[] {
  const first = quiz.questions[0];
  const wrongIndex = first?.options
    ? first.options.es.findIndex((_, index) => String(index) !== String(first.correctAnswer))
    : -1;
  const wrongEs = wrongIndex >= 0 ? first.options?.es[wrongIndex] : "ignorar el error";
  const wrongEn = wrongIndex >= 0 ? first.options?.en[wrongIndex] : "ignore the error";
  const trueFalse: QuizQuestion = {
    id: `${quiz.id}-hard-tf`,
    type: "TRUE_FALSE",
    question: {
      es: `En «${lesson.title.es}», esta acción es la correcta: ${wrongEs}.`,
      en: `In "${lesson.title.en}", this action is the correct one: ${wrongEn}.`,
    },
    correctAnswer: "false",
    explanation: first?.explanation ?? {
      es: "Esa opción es un distractor de la lección. Vuelve a la idea central.",
      en: "That option is a distractor from the lesson. Go back to the core idea.",
    },
    points: 5,
  };
  const scenario: QuizQuestion = {
    id: `${quiz.id}-hard-scenario`,
    type: "SCENARIO",
    question: {
      es: `Ejecutaste \`${firstCommand(lesson, "es")}\` y el resultado no coincide con la lección. ¿Qué haces primero?`,
      en: `You ran \`${firstCommand(lesson, "en")}\` and the result does not match the lesson. What do you do first?`,
    },
    options: {
      es: [
        "Leer el mensaje y cambiar un solo argumento",
        "Borrar el directorio de trabajo con rm -rf",
        "Abrir los permisos con chmod 777",
        "Apagar la máquina y marcar la lección como hecha",
      ],
      en: [
        "Read the message and change a single argument",
        "Delete the working directory with rm -rf",
        "Open permissions with chmod 777",
        "Shut the machine down and mark the lesson done",
      ],
    },
    correctAnswer: "0",
    explanation: {
      es: "El fallo se aísla con el mensaje. Borrar, abrir permisos o apagar no explica la causa.",
      en: "The failure is isolated with the message. Deleting, opening permissions, or powering off does not explain the cause.",
    },
    points: 5,
  };
  return [trueFalse, scenario];
}

function exercisesFrom(lesson: Lesson, quiz: Quiz): Exercise[] {
  return quiz.questions.slice(0, 3).map((question, index) => ({
    id: `ex-${lesson.id}-${index + 1}`,
    lessonId: lesson.id,
    slug: `${lesson.slug}-ex-${index + 1}`,
    type: question.type,
    question: question.question,
    options: question.options,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
    hints: {
      es: ["Descarta la opción que rompe el sistema", question.explanation.es],
      en: ["Discard the option that breaks the system", question.explanation.en],
    },
    order: index + 1,
  }));
}

export function enrichLesson(lesson: Lesson): Lesson {
  const blocks: ContentBlock[] = [...lesson.contentBlocks];
  const video = videoFor(lesson);
  if (video && !blocks.some((block) => block.type === "VIDEO")) {
    const videoBlock: ContentBlock = {
      id: `${lesson.id}-video`,
      type: "VIDEO",
      order: 2,
      content: {
        es: {
          title: video.es,
          text: "Video de apoyo. La lección se puede aprobar sin verlo, pero el ejemplo se entiende más rápido.",
          videoUrl: video.url,
        },
        en: {
          title: video.en,
          text: "Support video. You can pass the lesson without it, but the example lands faster.",
          videoUrl: video.url,
        },
      },
    };
    blocks.splice(Math.min(1, blocks.length), 0, videoBlock);
  }

  let quiz = lesson.quiz;
  const level = levelOf(lesson);
  if (quiz && level !== 0 && quiz.questions.length < 4) {
    quiz = { ...quiz, questions: [...quiz.questions, ...harderQuestions(lesson, quiz)] };
  }

  const exercises = lesson.exercises.length > 0 || !quiz
    ? lesson.exercises
    : exercisesFrom(lesson, quiz);

  return {
    ...lesson,
    duration: level === 0 ? lesson.duration : Math.max(lesson.duration, 30),
    contentBlocks: blocks,
    quiz,
    exercises,
  };
}

export function enrichLab(lab: Lab, lesson?: Lesson): Lab {
  if (lab.validationCriteria.length > 0 || !lesson) return lab;
  const command = firstCommand(lesson, "es");
  return {
    ...lab,
    validationCriteria: [
      { type: "command_output", check: command, expected: "Termina sin error" },
      {
        type: "custom",
        check: "Provoca el fallo de la lección y restaura el estado",
        expected: "Una frase con la causa y la corrección",
      },
    ],
  };
}
