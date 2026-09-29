import type { Module, Lesson, Lab, Exam, Skill } from '../../../types';

export const level13Lessons: Lesson[] = [
  {
    id: 'lesson-13-1',
    slug: 'git-intro',
    title: { es: 'Introducción a Git', en: 'Introduction to Git' },
    description: { es: 'Control de versiones, repositorios, commits', en: 'Version control, repositories, commits' },
    duration: 35,
    xpReward: 160,
    order: 1,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-13-2',
    slug: 'git-basics',
    title: { es: 'Comandos Básicos de Git', en: 'Basic Git Commands' },
    description: { es: 'init, add, commit, status, log, diff', en: 'init, add, commit, status, log, diff' },
    duration: 40,
    xpReward: 180,
    order: 2,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-13-3',
    slug: 'git-branches',
    title: { es: 'Ramas en Git', en: 'Git Branches' },
    description: { es: 'branch, checkout, merge, rebase', en: 'branch, checkout, merge, rebase' },
    duration: 45,
    xpReward: 200,
    order: 3,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-13-4',
    slug: 'git-remote',
    title: { es: 'Repositorios Remotos', en: 'Remote Repositories' },
    description: { es: 'clone, fetch, pull, push, remote', en: 'clone, fetch, pull, push, remote' },
    duration: 35,
    xpReward: 160,
    order: 4,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-13-5',
    slug: 'git-conflicts',
    title: { es: 'Resolución de Conflictos', en: 'Conflict Resolution' },
    description: { es: 'Identifica y resuelve merge conflicts', en: 'Identify and resolve merge conflicts' },
    duration: 35,
    xpReward: 170,
    order: 5,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-13-6',
    slug: 'git-advanced',
    title: { es: 'Git Avanzado', en: 'Advanced Git' },
    description: { es: 'stash, cherry-pick, reset, reflog', en: 'stash, cherry-pick, reset, reflog' },
    duration: 40,
    xpReward: 180,
    order: 6,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  },
  {
    id: 'lesson-13-7',
    slug: 'git-workflows',
    title: { es: 'Flujos de Trabajo con Git', en: 'Git Workflows' },
    description: { es: 'GitFlow, trunk-based, feature branches', en: 'GitFlow, trunk-based, feature branches' },
    duration: 30,
    xpReward: 140,
    order: 7,
    content: [],
    exercises: [],
    quiz: { questions: [] }
  }
];

export const level13Labs: Lab[] = [
  {
    id: 'lab-13-1',
    slug: 'git-project',
    title: { es: 'Proyecto Completo con Git', en: 'Complete Git Project' },
    description: { es: 'Simula un flujo de trabajo real con Git', en: 'Simulate a real workflow with Git' },
    difficulty: 'intermediate',
    duration: 55,
    xpReward: 500,
    objectives: [
      { es: 'Inicializar repo y hacer commits', en: 'Initialize repo and make commits' },
      { es: 'Crear y mergear feature branches', en: 'Create and merge feature branches' },
      { es: 'Resolver un conflicto de merge', en: 'Resolve a merge conflict' },
      { es: 'Push a un repositorio remoto', en: 'Push to a remote repository' }
    ],
    tools: ['git'],
    validationCriteria: [
      { type: 'GIT_REPO_EXISTS', value: '.git' },
      { type: 'GIT_COMMITS', value: '5+' },
      { type: 'GIT_BRANCHES', value: '2+' }
    ]
  }
];

export const level13Exam: Exam = {
  passingScore: 80,
  timeLimit: 25,
  questions: [
    {
      id: 'exam-13-1',
      question: { es: '¿Qué hace "git add ."?', en: 'What does "git add ." do?' },
      options: [
        { id: 'a', text: { es: 'Crea un nuevo archivo', en: 'Creates a new file' } },
        { id: 'b', text: { es: 'Agrega todos los cambios al staging area', en: 'Adds all changes to staging area' } },
        { id: 'c', text: { es: 'Hace un commit', en: 'Makes a commit' } },
        { id: 'd', text: { es: 'Sube cambios al servidor', en: 'Uploads changes to server' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'git add . agrega todos los archivos modificados y nuevos al staging area, preparándolos para commit.', en: 'git add . adds all modified and new files to staging area, preparing them for commit.' }
    },
    {
      id: 'exam-13-2',
      question: { es: '¿Cuál es la diferencia entre merge y rebase?', en: 'What is the difference between merge and rebase?' },
      options: [
        { id: 'a', text: { es: 'No hay diferencia', en: 'There is no difference' } },
        { id: 'b', text: { es: 'merge crea un commit de fusión, rebase reescribe el historial', en: 'merge creates a merge commit, rebase rewrites history' } },
        { id: 'c', text: { es: 'rebase es más rápido', en: 'rebase is faster' } },
        { id: 'd', text: { es: 'merge solo funciona en local', en: 'merge only works locally' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'merge preserva el historial con un commit de merge. rebase reaplica commits sobre otra rama, creando historial lineal.', en: 'merge preserves history with a merge commit. rebase reapplies commits on another branch, creating linear history.' }
    },
    {
      id: 'exam-13-3',
      question: { es: '¿Qué hace "git pull"?', en: 'What does "git pull" do?' },
      options: [
        { id: 'a', text: { es: 'Solo descarga cambios', en: 'Only downloads changes' } },
        { id: 'b', text: { es: 'fetch + merge: descarga y fusiona cambios', en: 'fetch + merge: downloads and merges changes' } },
        { id: 'c', text: { es: 'Sube cambios locales', en: 'Uploads local changes' } },
        { id: 'd', text: { es: 'Elimina la rama remota', en: 'Deletes remote branch' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'git pull = git fetch + git merge. Descarga cambios del remoto y los integra en tu rama actual.', en: 'git pull = git fetch + git merge. Downloads changes from remote and integrates them into your current branch.' }
    },
    {
      id: 'exam-13-4',
      question: { es: '¿Cómo creas una nueva rama y cambias a ella?', en: 'How do you create a new branch and switch to it?' },
      options: [
        { id: 'a', text: { es: 'git branch nueva && git checkout nueva', en: 'git branch new && git checkout new' } },
        { id: 'b', text: { es: 'git checkout -b nueva', en: 'git checkout -b new' } },
        { id: 'c', text: { es: 'Ambas A y B funcionan', en: 'Both A and B work' } },
        { id: 'd', text: { es: 'git new-branch nueva', en: 'git new-branch new' } }
      ],
      correctAnswer: 'c',
      explanation: { es: 'checkout -b es un atajo para crear y cambiar en un comando. git switch -c es la alternativa moderna.', en: 'checkout -b is a shortcut to create and switch in one command. git switch -c is the modern alternative.' }
    },
    {
      id: 'exam-13-5',
      question: { es: '¿Qué hace "git stash"?', en: 'What does "git stash" do?' },
      options: [
        { id: 'a', text: { es: 'Elimina cambios no commiteados', en: 'Deletes uncommitted changes' } },
        { id: 'b', text: { es: 'Guarda cambios temporalmente sin hacer commit', en: 'Saves changes temporarily without committing' } },
        { id: 'c', text: { es: 'Hace un commit automático', en: 'Makes an automatic commit' } },
        { id: 'd', text: { es: 'Muestra el estado', en: 'Shows status' } }
      ],
      correctAnswer: 'b',
      explanation: { es: 'stash guarda cambios en un área temporal. git stash pop los restaura. Útil para cambiar de rama sin commit.', en: 'stash saves changes in a temporary area. git stash pop restores them. Useful for switching branches without commit.' }
    },
    {
      id: 'exam-13-6',
      question: { es: '¿Qué hace "git reset --hard HEAD~1"?', en: 'What does "git reset --hard HEAD~1" do?' },
      options: [
        { id: 'a', text: { es: 'Deshace el último commit preservando cambios', en: 'Undoes last commit preserving changes' } },
        { id: 'b', text: { es: 'Elimina el último commit y todos sus cambios', en: 'Deletes last commit and all its changes' } },
        { id: 'c', text: { es: 'Crea un nuevo commit que revierte', en: 'Creates a new commit that reverts' } },
        { id: 'd', text: { es: 'Muestra el último commit', en: 'Shows last commit' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '--hard descarta todos los cambios. --soft preserva cambios en staging. HEAD~1 es el commit anterior.', en: '--hard discards all changes. --soft preserves changes in staging. HEAD~1 is the previous commit.' }
    },
    {
      id: 'exam-13-7',
      question: { es: '¿Qué archivo ignora archivos del control de versiones?', en: 'What file ignores files from version control?' },
      options: [
        { id: 'a', text: { es: '.git/ignore', en: '.git/ignore' } },
        { id: 'b', text: { es: '.gitignore', en: '.gitignore' } },
        { id: 'c', text: { es: 'git.ignore', en: 'git.ignore' } },
        { id: 'd', text: { es: '.ignore', en: '.ignore' } }
      ],
      correctAnswer: 'b',
      explanation: { es: '.gitignore lista patrones de archivos que Git debe ignorar (node_modules/, *.log, etc).', en: '.gitignore lists file patterns Git should ignore (node_modules/, *.log, etc).' }
    }
  ]
};

export const level13Skills: Skill[] = [
  { id: 'skill-git-basics', name: { es: 'Git Básico', en: 'Git Basics' }, description: { es: 'Commits, staging, historia', en: 'Commits, staging, history' }, icon: 'git-commit' },
  { id: 'skill-branches', name: { es: 'Branching', en: 'Branching' }, description: { es: 'Crear y fusionar ramas', en: 'Create and merge branches' }, icon: 'git-branch' },
  { id: 'skill-remote', name: { es: 'Remotos', en: 'Remotes' }, description: { es: 'Trabajar con repos remotos', en: 'Work with remote repos' }, icon: 'cloud' },
  { id: 'skill-conflicts', name: { es: 'Conflictos', en: 'Conflicts' }, description: { es: 'Resolver merge conflicts', en: 'Resolve merge conflicts' }, icon: 'git-merge' }
];

export const level13Module: Module = {
  id: 'level-13',
  slug: 'git-version-control',
  title: { es: 'Git y Control de Versiones', en: 'Git and Version Control' },
  description: { es: 'Domina Git desde lo básico hasta flujos de trabajo avanzados para colaboración en equipo', en: 'Master Git from basics to advanced workflows for team collaboration' },
  icon: 'git-branch',
  color: '#F97316',
  level: 13,
  order: 13,
  estimatedHours: 8,
  prerequisites: ['level-12'],
  skills: level13Skills,
  lessons: level13Lessons,
  labs: level13Labs,
  exam: level13Exam
};
