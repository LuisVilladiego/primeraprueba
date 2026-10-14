import type { Lesson, ContentBlock, Exercise, Quiz } from "@/types";

export const lesson27Content: ContentBlock[] = [
  {
    id: "block-2-7-1",
    type: "TEXT",
    order: 1,
    content: {
      es: {
        title: "locate y updatedb",
        text: `\`locate\` consulta una **base de datos** indexada (mmlocate/plocate), por eso es muy rápida.

\`\`\`bash
locate nginx.conf
locate -i readme          # ignorar mayúsculas
\`\`\`

La base se actualiza con \`sudo updatedb\` (o cron diario). Archivos nuevos pueden no aparecer hasta la próxima indexación.`,
      },
      en: {
        title: "locate and updatedb",
        text: `\`locate\` queries an indexed **database** (mlocate/plocate), so it's very fast.

\`\`\`bash
locate nginx.conf
locate -i readme          # ignore case
\`\`\`

The database is refreshed with \`sudo updatedb\` (or daily cron). New files may not appear until the next index run.`,
      },
    },
  },
  {
    id: "block-2-7-2",
    type: "TIP",
    order: 2,
    content: {
      es: {
        title: "find vs locate",
        text: `| | find | locate |
|---|------|--------|
| Velocidad | Más lento | Muy rápido |
| Datos | Tiempo real | Base desactualizable |
| Permisos | Respeta acceso | Indexa lo permitido al build |

Usa locate para búsquedas amplias; find cuando necesitas precisión o criterios complejos.

\`\`\`bash
sudo updatedb
locate -b '\\passwd$'
\`\`\``,
      },
      en: {
        title: "find vs locate",
        text: `| | find | locate |
|---|------|--------|
| Speed | Slower | Very fast |
| Data | Real time | Possibly stale database |
| Permissions | Respects access | Indexes what updatedb could read |

Use locate for broad searches; find when you need precision or complex criteria.

\`\`\`bash
sudo updatedb
locate -b '\\passwd$'
\`\`\``,
      },
    },
  },
];

export const lesson27Exercises: Exercise[] = [
  {
    id: "ex-2-7-1",
    lessonId: "lesson-2-7",
    slug: "update-db",
    type: "MULTIPLE_CHOICE",
    question: {
      es: "¿Qué comando actualiza la base de datos de locate?",
      en: "Which command updates locate's database?",
    },
    options: {
      es: ["locate --refresh", "updatedb", "find --index", "reindex"],
      en: ["locate --refresh", "updatedb", "find --index", "reindex"],
    },
    correctAnswer: "1",
    explanation: {
      es: "updatedb (a menudo vía cron) reconstruye la base mlocate/plocate.",
      en: "updatedb (often via cron) rebuilds the mlocate/plocate database.",
    },
    hints: { es: ["Requiere privilegios root"], en: ["Requires root privileges"] },
    order: 1,
  },
];

export const lesson27Quiz: Quiz = {
  id: "quiz-2-7",
  lessonId: "lesson-2-7",
  questions: [
    {
      id: "quiz-2-7-1",
      type: "TRUE_FALSE",
      question: {
        es: "locate puede mostrar archivos que aún no existen si la base no está actualizada.",
        en: "locate may show files that no longer exist if the database is stale.",
      },
      correctAnswer: "true",
      explanation: {
        es: "La base es un snapshot; find siempre refleja el estado actual.",
        en: "The database is a snapshot; find always reflects current state.",
      },
      points: 5,
    },
  ],
  passingScore: 70,
};

export const lesson27: Lesson = {
  id: "lesson-2-7",
  moduleId: "level-2",
  slug: "locate-updatedb",
  title: {
    es: "Búsqueda Rápida: locate",
    en: "Quick Search: locate",
  },
  description: {
    es: "Busca archivos al instante usando una base de datos indexada.",
    en: "Search files instantly using an indexed database.",
  },
  order: 7,
  duration: 20,
  contentBlocks: lesson27Content,
  exercises: lesson27Exercises,
  quiz: lesson27Quiz,
};
