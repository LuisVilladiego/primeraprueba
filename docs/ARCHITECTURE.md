# Pinguiñoño - Arquitectura Técnica

## Visión General

Pinguiñoño ("Aprende Linux Fácil") es una plataforma educativa de escritorio para aprender Linux, administración de sistemas, DevOps, Cloud y tecnologías relacionadas. Diseñada inicialmente para uso personal pero con arquitectura escalable para convertirse en una plataforma multi-usuario.

## Stack Tecnológico

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript (strict mode)
- **Estilos**: Tailwind CSS
- **Componentes UI**: Componentes personalizados con diseño moderno
- **Estado Global**: Zustand
- **Animaciones**: Framer Motion

### Backend
- **API**: Next.js API Routes / Server Actions
- **Base de Datos**: SQLite (desarrollo) / PostgreSQL (producción)
- **ORM**: Prisma
- **Autenticación**: Preparado para NextAuth.js

### Herramientas
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint + Prettier
- **Terminal Simulada**: xterm.js (sandbox)

---

## Estructura de Carpetas

```
/workspace
├── docs/                          # Documentación
│   ├── ARCHITECTURE.md
│   ├── LEARNING_ROADMAP.md
│   └── IMPLEMENTATION_CHECKLIST.md
│
├── prisma/                        # Base de datos
│   ├── schema.prisma              # Modelo de datos
│   ├── seed.ts                    # Datos iniciales
│   └── migrations/                # Migraciones
│
├── public/                        # Assets estáticos
│   ├── images/
│   ├── icons/
│   └── videos/
│
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── (auth)/               # Rutas de autenticación
│   │   ├── (dashboard)/          # Dashboard principal
│   │   ├── (learning)/           # Área de aprendizaje
│   │   │   ├── courses/
│   │   │   ├── lessons/
│   │   │   ├── labs/
│   │   │   └── exams/
│   │   ├── (profile)/            # Perfil del usuario
│   │   ├── (admin)/              # Panel administrativo
│   │   ├── api/                  # API Routes
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/               # Componentes React
│   │   ├── ui/                   # Componentes base
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Progress.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── ...
│   │   ├── layout/               # Layout components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── LanguageSelector.tsx
│   │   ├── dashboard/            # Dashboard components
│   │   │   ├── ProgressOverview.tsx
│   │   │   ├── SkillsChart.tsx
│   │   │   ├── RecentActivity.tsx
│   │   │   └── StudyStreak.tsx
│   │   ├── learning/             # Learning components
│   │   │   ├── LessonContent.tsx
│   │   │   ├── VideoPlayer.tsx
│   │   │   ├── InteractiveDiagram.tsx
│   │   │   ├── CodeBlock.tsx
│   │   │   └── Quiz.tsx
│   │   ├── terminal/             # Terminal components
│   │   │   ├── Terminal.tsx
│   │   │   ├── TerminalOutput.tsx
│   │   │   └── CommandValidator.tsx
│   │   ├── roadmap/              # Roadmap components
│   │   │   ├── RoadmapView.tsx
│   │   │   ├── LevelNode.tsx
│   │   │   └── ProgressPath.tsx
│   │   └── exam/                 # Exam components
│   │       ├── ExamContainer.tsx
│   │       ├── Question.tsx
│   │       ├── MultipleChoice.tsx
│   │       ├── TrueFalse.tsx
│   │       ├── CommandCompletion.tsx
│   │       └── ExamResults.tsx
│   │
│   ├── content/                  # Contenido educativo
│   │   ├── courses/              # Definición de cursos
│   │   │   └── index.ts
│   │   ├── modules/              # Módulos por nivel
│   │   │   ├── level-0/
│   │   │   ├── level-1/
│   │   │   └── ...
│   │   ├── lessons/              # Lecciones individuales
│   │   ├── exercises/            # Ejercicios
│   │   ├── labs/                 # Laboratorios
│   │   ├── exams/                # Exámenes
│   │   └── projects/             # Proyectos
│   │
│   ├── i18n/                     # Internacionalización
│   │   ├── config.ts             # Configuración i18n
│   │   ├── locales/
│   │   │   ├── es/
│   │   │   │   ├── common.json
│   │   │   │   ├── dashboard.json
│   │   │   │   ├── learning.json
│   │   │   │   └── content/      # Contenido educativo en español
│   │   │   └── en/
│   │   │       ├── common.json
│   │   │       ├── dashboard.json
│   │   │       ├── learning.json
│   │   │       └── content/      # Contenido educativo en inglés
│   │   └── hooks/
│   │       └── useTranslation.ts
│   │
│   ├── lib/                      # Utilidades y servicios
│   │   ├── db.ts                 # Cliente Prisma
│   │   ├── progress.ts           # Sistema de progreso
│   │   ├── exam.ts               # Lógica de exámenes
│   │   ├── spaced-repetition.ts  # Repetición espaciada
│   │   ├── achievements.ts       # Sistema de logros
│   │   └── terminal/             # Terminal sandbox
│   │       ├── commands.ts
│   │       ├── filesystem.ts
│   │       └── validator.ts
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── useProgress.ts
│   │   ├── useExam.ts
│   │   ├── useTerminal.ts
│   │   └── useLesson.ts
│   │
│   ├── stores/                   # Zustand stores
│   │   ├── userStore.ts
│   │   ├── progressStore.ts
│   │   └── settingsStore.ts
│   │
│   └── types/                    # TypeScript types
│       ├── course.ts
│       ├── lesson.ts
│       ├── exam.ts
│       ├── progress.ts
│       └── user.ts
│
├── tests/                        # Tests
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Modelo de Datos

### Entidades Principales

```prisma
// Usuario
model User {
  id            String    @id @default(cuid())
  email         String?   @unique
  name          String?
  avatar        String?
  locale        String    @default("es")
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  progress      Progress[]
  examAttempts  ExamAttempt[]
  achievements  UserAchievement[]
  studySessions StudySession[]
  bookmarks     Bookmark[]
  reviewItems   ReviewItem[]
}

// Curso
model Course {
  id            String    @id @default(cuid())
  slug          String    @unique
  order         Int
  isPublished   Boolean   @default(false)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  modules       Module[]
  prerequisites CoursePrerequisite[] @relation("RequiredCourse")
  requiredBy    CoursePrerequisite[] @relation("DependentCourse")
}

// Prerrequisitos de curso
model CoursePrerequisite {
  id               String  @id @default(cuid())
  courseId         String
  prerequisiteId   String
  
  course           Course  @relation("DependentCourse", fields: [courseId], references: [id])
  prerequisite     Course  @relation("RequiredCourse", fields: [prerequisiteId], references: [id])
  
  @@unique([courseId, prerequisiteId])
}

// Módulo (Nivel)
model Module {
  id            String    @id @default(cuid())
  courseId      String
  slug          String
  level         Int
  order         Int
  isPublished   Boolean   @default(false)
  passingScore  Int       @default(80)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  course        Course    @relation(fields: [courseId], references: [id])
  lessons       Lesson[]
  labs          Lab[]
  exam          Exam?
  project       Project?
  
  @@unique([courseId, slug])
}

// Lección
model Lesson {
  id            String    @id @default(cuid())
  moduleId      String
  slug          String
  order         Int
  type          LessonType @default(THEORY)
  duration      Int?      // minutos estimados
  isPublished   Boolean   @default(false)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  module        Module    @relation(fields: [moduleId], references: [id])
  contentBlocks ContentBlock[]
  exercises     Exercise[]
  quiz          Quiz?
  
  @@unique([moduleId, slug])
}

enum LessonType {
  THEORY
  PRACTICAL
  MIXED
  VIDEO
  INTERACTIVE
}

// Bloque de contenido (multimodal)
model ContentBlock {
  id            String        @id @default(cuid())
  lessonId      String
  order         Int
  type          ContentType
  
  lesson        Lesson        @relation(fields: [lessonId], references: [id])
  
  @@unique([lessonId, order])
}

enum ContentType {
  TEXT
  VIDEO
  ANIMATION
  DIAGRAM
  TERMINAL
  CODE
  EXERCISE
  QUIZ
}

// Ejercicio
model Exercise {
  id            String    @id @default(cuid())
  lessonId      String
  slug          String
  type          ExerciseType
  order         Int
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  lesson        Lesson    @relation(fields: [lessonId], references: [id])
  
  @@unique([lessonId, slug])
}

enum ExerciseType {
  COMMAND
  MULTIPLE_CHOICE
  TRUE_FALSE
  FILL_BLANK
  ORDERING
  TROUBLESHOOTING
}

// Laboratorio
model Lab {
  id            String    @id @default(cuid())
  moduleId      String
  slug          String
  order         Int
  difficulty    Difficulty @default(BEGINNER)
  estimatedTime Int       // minutos
  isPublished   Boolean   @default(false)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  module        Module    @relation(fields: [moduleId], references: [id])
  
  @@unique([moduleId, slug])
}

enum Difficulty {
  BEGINNER
  INTERMEDIATE
  ADVANCED
  EXPERT
}

// Examen
model Exam {
  id            String    @id @default(cuid())
  moduleId      String    @unique
  timeLimit     Int?      // minutos, null = sin límite
  passingScore  Int       @default(80)
  maxAttempts   Int?      // null = ilimitado
  shuffleQuestions Boolean @default(true)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  module        Module    @relation(fields: [moduleId], references: [id])
  questions     ExamQuestion[]
  attempts      ExamAttempt[]
}

// Pregunta de examen
model ExamQuestion {
  id            String        @id @default(cuid())
  examId        String
  type          QuestionType
  order         Int
  points        Int           @default(1)
  
  exam          Exam          @relation(fields: [examId], references: [id])
  
  @@unique([examId, order])
}

enum QuestionType {
  MULTIPLE_CHOICE
  TRUE_FALSE
  FILL_BLANK
  COMMAND_COMPLETION
  ERROR_DETECTION
  SCENARIO
  TROUBLESHOOTING
  ORDERING
  LOG_INTERPRETATION
  TERMINAL_INTERPRETATION
}

// Intento de examen
model ExamAttempt {
  id            String    @id @default(cuid())
  userId        String
  examId        String
  score         Int
  passed        Boolean
  startedAt     DateTime  @default(now())
  completedAt   DateTime?
  answers       Json      // Respuestas detalladas
  
  user          User      @relation(fields: [userId], references: [id])
  exam          Exam      @relation(fields: [examId], references: [id])
}

// Proyecto
model Project {
  id            String    @id @default(cuid())
  moduleId      String    @unique
  difficulty    Difficulty @default(INTERMEDIATE)
  estimatedTime Int       // horas
  isPublished   Boolean   @default(false)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  module        Module    @relation(fields: [moduleId], references: [id])
}

// Quiz de lección
model Quiz {
  id            String    @id @default(cuid())
  lessonId      String    @unique
  
  lesson        Lesson    @relation(fields: [lessonId], references: [id])
  questions     QuizQuestion[]
}

model QuizQuestion {
  id            String        @id @default(cuid())
  quizId        String
  type          QuestionType
  order         Int
  
  quiz          Quiz          @relation(fields: [quizId], references: [id])
  
  @@unique([quizId, order])
}

// Progreso del usuario
model Progress {
  id            String        @id @default(cuid())
  userId        String
  entityType    EntityType
  entityId      String
  status        ProgressStatus @default(NOT_STARTED)
  score         Int?
  completedAt   DateTime?
  data          Json?         // Datos adicionales específicos
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt
  
  user          User          @relation(fields: [userId], references: [id])
  
  @@unique([userId, entityType, entityId])
}

enum EntityType {
  COURSE
  MODULE
  LESSON
  EXERCISE
  LAB
  EXAM
  PROJECT
  SKILL
}

enum ProgressStatus {
  NOT_STARTED
  IN_PROGRESS
  COMPLETED
  MASTERED
  NEEDS_REVIEW
}

// Logro/Insignia
model Achievement {
  id            String    @id @default(cuid())
  slug          String    @unique
  icon          String
  category      String
  points        Int       @default(0)
  isHidden      Boolean   @default(false)
  createdAt     DateTime  @default(now())
  
  users         UserAchievement[]
}

model UserAchievement {
  id            String      @id @default(cuid())
  userId        String
  achievementId String
  earnedAt      DateTime    @default(now())
  
  user          User        @relation(fields: [userId], references: [id])
  achievement   Achievement @relation(fields: [achievementId], references: [id])
  
  @@unique([userId, achievementId])
}

// Sesión de estudio
model StudySession {
  id            String    @id @default(cuid())
  userId        String
  startedAt     DateTime  @default(now())
  endedAt       DateTime?
  duration      Int?      // segundos
  entityType    EntityType?
  entityId      String?
  
  user          User      @relation(fields: [userId], references: [id])
}

// Marcadores
model Bookmark {
  id            String    @id @default(cuid())
  userId        String
  entityType    EntityType
  entityId      String
  note          String?
  createdAt     DateTime  @default(now())
  
  user          User      @relation(fields: [userId], references: [id])
  
  @@unique([userId, entityType, entityId])
}

// Items de repaso (repetición espaciada)
model ReviewItem {
  id            String    @id @default(cuid())
  userId        String
  questionId    String
  easeFactor    Float     @default(2.5)
  interval      Int       @default(1)     // días
  repetitions   Int       @default(0)
  nextReview    DateTime  @default(now())
  lastReview    DateTime?
  
  user          User      @relation(fields: [userId], references: [id])
  
  @@unique([userId, questionId])
}

// Habilidad
model Skill {
  id            String    @id @default(cuid())
  slug          String    @unique
  category      String
  order         Int
}

// Comando (referencia)
model Command {
  id            String    @id @default(cuid())
  name          String    @unique
  category      String
  level         Int       // Nivel donde se introduce
}

// Término del diccionario
model DictionaryTerm {
  id            String    @id @default(cuid())
  slug          String    @unique
  category      String
  relatedSkills String[]  // IDs de skills relacionadas
}
```

---

## Sistema de Progreso

### Estados de Progreso

```typescript
enum ProgressStatus {
  NOT_STARTED = 'not_started',  // ☐ No iniciado
  IN_PROGRESS = 'in_progress',  // ◐ En progreso
  COMPLETED = 'completed',       // ✓ Completado
  MASTERED = 'mastered',        // 🏆 Dominado
  NEEDS_REVIEW = 'needs_review' // 🔄 Necesita repaso
}
```

### Reglas de Transición

```
NOT_STARTED → IN_PROGRESS
  - Cuando el usuario abre una lección por primera vez
  - Cuando inicia un ejercicio

IN_PROGRESS → COMPLETED
  - Lección: completar todos los bloques de contenido + quiz (si existe)
  - Ejercicio: completar correctamente
  - Lab: completar todos los objetivos
  - Módulo: completar todas las lecciones + ejercicios + aprobar examen

COMPLETED → MASTERED
  - Aprobar examen con >= 90%
  - Completar proyecto del módulo
  - No fallar preguntas relacionadas en 30 días

COMPLETED/MASTERED → NEEDS_REVIEW
  - Fallar preguntas relacionadas en exámenes posteriores
  - Algoritmo de repetición espaciada indica repaso necesario
```

### Cálculo de Progreso

```typescript
interface ModuleProgress {
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
    score: number;
    attempts: number;
  };
  project: {
    completed: boolean;
  };
  overall: number; // 0-100
  isUnlocked: boolean;
  canAdvance: boolean;
}
```

---

## Sistema de Exámenes

### Tipos de Preguntas

1. **Multiple Choice**: Selección múltiple con una respuesta correcta
2. **True/False**: Verdadero o falso
3. **Fill Blank**: Completar comando o texto
4. **Command Completion**: Escribir el comando correcto
5. **Error Detection**: Identificar errores en código/comandos
6. **Scenario**: Resolver un escenario real
7. **Troubleshooting**: Diagnosticar y resolver problemas
8. **Ordering**: Ordenar pasos correctamente
9. **Log Interpretation**: Interpretar logs del sistema
10. **Terminal Interpretation**: Interpretar salida de terminal

### Evaluación

```typescript
interface ExamConfig {
  passingScore: number;      // Default: 80
  timeLimit?: number;        // Minutos (opcional)
  maxAttempts?: number;      // Intentos máximos (opcional)
  shuffleQuestions: boolean; // Aleatorizar orden
  showCorrectAnswers: boolean; // Mostrar respuestas al finalizar
  allowReview: boolean;      // Permitir revisar respuestas
}

interface ExamResult {
  score: number;
  passed: boolean;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  questionResults: QuestionResult[];
  weakAreas: string[];       // Áreas a reforzar
  nextSteps: string[];       // Recomendaciones
}
```

### Bloqueo de Niveles

```typescript
async function canUnlockNextModule(
  userId: string, 
  currentModuleId: string
): Promise<boolean> {
  const progress = await getModuleProgress(userId, currentModuleId);
  
  return (
    progress.lessons.percentage === 100 &&
    progress.exercises.percentage === 100 &&
    progress.labs.percentage === 100 &&
    progress.exam.passed
  );
}
```

---

## Sistema de Internacionalización (i18n)

### Estructura de Traducciones

```
src/i18n/
├── config.ts
├── locales/
│   ├── es/
│   │   ├── common.json       # UI general
│   │   ├── dashboard.json    # Dashboard
│   │   ├── learning.json     # Área de aprendizaje
│   │   ├── exam.json         # Exámenes
│   │   └── content/          # Contenido educativo
│   │       ├── level-0/
│   │       │   ├── intro.json
│   │       │   ├── operating-systems.json
│   │       │   └── ...
│   │       └── ...
│   └── en/
│       └── ... (misma estructura)
```

### Contenido Bilingüe

```typescript
interface BilingualContent {
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  content: {
    es: ContentBlock[];
    en: ContentBlock[];
  };
}
```

### Hook de Traducción

```typescript
const { t, locale, setLocale } = useTranslation();

// Uso
<h1>{t('dashboard.welcome')}</h1>
<p>{t('lesson.title')}</p>
```

---

## Roadmap de Desarrollo

### Fase 1: MVP (Actual)
- [x] Arquitectura base
- [ ] Dashboard básico
- [ ] Roadmap visual
- [ ] Nivel 0 completo
- [ ] Sistema de progreso
- [ ] i18n básico
- [ ] Persistencia local

### Fase 2: Contenido Core
- [ ] Niveles 1-5
- [ ] Terminal simulada
- [ ] Laboratorios básicos
- [ ] Sistema de exámenes completo

### Fase 3: Funcionalidades Avanzadas
- [ ] Gamificación
- [ ] Repetición espaciada
- [ ] Videos interactivos
- [ ] Proyectos guiados

### Fase 4: Escalabilidad
- [ ] Autenticación
- [ ] Multi-usuario
- [ ] Panel admin
- [ ] API pública

---

## Extensiones Futuras

1. **Contenedores Aislados**: Laboratorios con Docker real
2. **Cloud Labs**: Integración con AWS/GCP para labs reales
3. **Colaboración**: Foros, preguntas, comunidad
4. **Certificaciones**: Sistema de certificados verificables
5. **Mobile App**: Versión móvil nativa
6. **Offline Mode**: Contenido descargable
7. **AI Tutor**: Asistente con IA para dudas
8. **Custom Paths**: Rutas de aprendizaje personalizadas
