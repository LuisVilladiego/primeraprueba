// Tipos de progreso
export type ProgressStatus = 
  | "NOT_STARTED" 
  | "IN_PROGRESS" 
  | "COMPLETED" 
  | "MASTERED" 
  | "NEEDS_REVIEW";

export type EntityType = 
  | "COURSE" 
  | "MODULE" 
  | "LESSON" 
  | "EXERCISE" 
  | "LAB" 
  | "EXAM" 
  | "PROJECT" 
  | "SKILL";

// Tipos de contenido
export type ContentBlockType = 
  | "TEXT" 
  | "VIDEO" 
  | "ANIMATION" 
  | "DIAGRAM" 
  | "TERMINAL" 
  | "CODE" 
  | "EXERCISE" 
  | "QUIZ"
  | "TIP"
  | "WARNING"
  | "KEY_CONCEPT";

export type QuestionType = 
  | "MULTIPLE_CHOICE" 
  | "TRUE_FALSE" 
  | "FILL_BLANK" 
  | "COMMAND_COMPLETION" 
  | "ERROR_DETECTION" 
  | "SCENARIO" 
  | "TROUBLESHOOTING" 
  | "ORDERING"
  | "LOG_INTERPRETATION"
  | "TERMINAL_INTERPRETATION";

export type Difficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT";

export type Locale = "es" | "en";

// Interfaces de contenido bilingüe
export interface BilingualText {
  es: string;
  en: string;
}

export interface BilingualContent<T> {
  es: T;
  en: T;
}

// Interfaces de cursos y módulos
export interface Course {
  id: string;
  slug: string;
  title: BilingualText;
  description: BilingualText;
  icon: string;
  order: number;
  modules: Module[];
  prerequisites: string[]; // IDs de cursos requeridos
}

export interface Module {
  id: string;
  courseId: string;
  slug: string;
  level: number;
  title: BilingualText;
  description: BilingualText;
  icon: string;
  order: number;
  lessons: Lesson[];
  labs: Lab[];
  exam: Exam | null;
  project: Project | null;
  passingScore: number;
  prerequisites: string[]; // IDs de módulos requeridos
  skills: string[]; // IDs de habilidades que enseña
}

export interface Lesson {
  id: string;
  moduleId: string;
  slug: string;
  title: BilingualText;
  description: BilingualText;
  order: number;
  duration: number; // minutos estimados
  contentBlocks: ContentBlock[];
  exercises: Exercise[];
  quiz: Quiz | null;
}

export interface ContentBlock {
  id: string;
  type: ContentBlockType;
  order: number;
  content: BilingualContent<ContentBlockContent>;
}

export interface ContentBlockContent {
  title?: string;
  text?: string;
  code?: string;
  language?: string;
  videoUrl?: string;
  imageUrl?: string;
  diagramData?: DiagramData;
  terminalCommands?: TerminalCommand[];
  items?: string[]; // Para listas
}

export interface DiagramData {
  type: "flowchart" | "tree" | "comparison" | "timeline";
  nodes: DiagramNode[];
  connections?: DiagramConnection[];
}

export interface DiagramNode {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  children?: DiagramNode[];
}

export interface DiagramConnection {
  from: string;
  to: string;
  label?: string;
}

export interface TerminalCommand {
  command: string;
  output: string;
  explanation?: string;
}

export interface Exercise {
  id: string;
  lessonId: string;
  slug: string;
  type: QuestionType;
  question: BilingualText;
  options?: BilingualContent<string[]>;
  correctAnswer: string | string[];
  explanation: BilingualText;
  hints: BilingualContent<string[]>;
  order: number;
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: BilingualText;
  options?: BilingualContent<string[]>;
  correctAnswer: string | string[];
  explanation: BilingualText;
  points: number;
}

export interface Lab {
  id: string;
  moduleId: string;
  slug: string;
  title: BilingualText;
  description: BilingualText;
  objectives: BilingualContent<string[]>;
  prerequisites: BilingualContent<string[]>;
  instructions: BilingualContent<LabStep[]>;
  hints: BilingualContent<string[]>;
  solution: BilingualText;
  validationCriteria: LabValidation[];
  difficulty: Difficulty;
  estimatedTime: number; // minutos
  order: number;
}

export interface LabStep {
  step: number;
  instruction: string;
  expectedResult?: string;
}

export interface LabValidation {
  type: "command_output" | "file_exists" | "file_content" | "custom";
  check: string;
  expected: string;
}

export interface Exam {
  id: string;
  moduleId: string;
  title: BilingualText;
  description: BilingualText;
  questions: ExamQuestion[];
  timeLimit: number | null; // minutos, null = sin límite
  passingScore: number;
  maxAttempts: number | null;
  shuffleQuestions: boolean;
}

export interface ExamQuestion {
  id: string;
  type: QuestionType;
  question: BilingualText;
  options?: BilingualContent<string[]>;
  correctAnswer: string | string[];
  explanation: BilingualText;
  points: number;
  difficulty: Difficulty;
  category: string; // Para agrupar por tema
}

export interface Project {
  id: string;
  moduleId: string;
  title: BilingualText;
  description: BilingualText;
  objectives: BilingualContent<string[]>;
  requirements: BilingualContent<string[]>;
  deliverables: BilingualContent<string[]>;
  rubric: BilingualContent<ProjectRubricItem[]>;
  resources: BilingualContent<string[]>;
  difficulty: Difficulty;
  estimatedTime: number; // horas
}

export interface ProjectRubricItem {
  criterion: string;
  description: string;
  points: number;
}

// Interfaces de habilidades
export interface Skill {
  id: string;
  slug: string;
  name: BilingualText;
  description: BilingualText;
  category: string;
  icon: string;
  relatedModules: string[];
  order: number;
}

// Interfaces de comandos
export interface Command {
  id: string;
  name: string;
  syntax: string;
  description: BilingualText;
  examples: BilingualContent<CommandExample[]>;
  options: BilingualContent<CommandOption[]>;
  commonErrors: BilingualContent<string[]>;
  category: string;
  level: number;
  relatedCommands: string[];
}

export interface CommandExample {
  command: string;
  description: string;
  output?: string;
}

export interface CommandOption {
  option: string;
  description: string;
}

// Interfaces de progreso del usuario
export interface UserProgress {
  moduleId: string;
  lessons: {
    completed: number;
    total: number;
    percentage: number;
  };
  exercises: {
    completed: number;
    total: number;
    percentage: number;
  };
  labs: {
    completed: number;
    total: number;
    percentage: number;
  };
  exam: {
    passed: boolean;
    bestScore: number;
    attempts: number;
  };
  project: {
    completed: boolean;
  };
  overall: number;
  isUnlocked: boolean;
  canAdvance: boolean;
}

export interface ModuleProgress {
  [moduleId: string]: UserProgress;
}

// Interfaces de examen
export interface ExamAttemptData {
  answers: ExamAnswerData[];
  startTime: number;
  endTime?: number;
}

export interface ExamAnswerData {
  questionId: string;
  answer: string | string[];
  isCorrect: boolean;
  timeSpent: number;
}

export interface ExamResult {
  score: number;
  totalPoints: number;
  percentage: number;
  passed: boolean;
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: number;
  answers: ExamAnswerData[];
  weakAreas: string[];
  recommendations: string[];
}

// Interfaces de logros
export interface Achievement {
  id: string;
  slug: string;
  name: BilingualText;
  description: BilingualText;
  icon: string;
  category: "PROGRESS" | "STREAK" | "MASTERY" | "SPECIAL";
  xpReward: number;
  isHidden: boolean;
  requiredValue?: number;
}

// Interfaces de estadísticas
export interface UserStats {
  totalXp: number;
  level: number;
  streakDays: number;
  totalStudyTime: number; // minutos
  lessonsCompleted: number;
  exercisesCompleted: number;
  labsCompleted: number;
  examsPassed: number;
  projectsCompleted: number;
  skillsAcquired: number;
  achievementsEarned: number;
}

// Interfaces de diccionario
export interface DictionaryTerm {
  id: string;
  slug: string;
  term: BilingualText;
  definition: BilingualText;
  example?: BilingualText;
  category: string;
  relatedTerms: string[];
  relatedSkills: string[];
  level: number;
}

// Interfaces de roadmap
export interface RoadmapNode {
  id: string;
  moduleId: string;
  title: BilingualText;
  level: number;
  status: "locked" | "available" | "in_progress" | "completed" | "mastered";
  progress: number;
  position: { x: number; y: number };
  connections: string[]; // IDs de nodos conectados
}
