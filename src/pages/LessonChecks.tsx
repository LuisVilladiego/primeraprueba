import { useState } from "react";
import type { Exercise, QuizQuestion } from "@/types";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, XCircle } from "lucide-react";

function choices(question: Exercise | QuizQuestion, locale: "es" | "en"): { id: string; label: string }[] {
  if (question.type === "TRUE_FALSE") {
    return [
      { id: "true", label: locale === "es" ? "Verdadero" : "True" },
      { id: "false", label: locale === "es" ? "Falso" : "False" },
    ];
  }
  const options = question.options?.[locale] ?? question.options?.es ?? [];
  return options.map((label, index) => ({ id: String(index), label }));
}

function isCorrect(question: Exercise | QuizQuestion, picked: string): boolean {
  const expected = question.correctAnswer;
  if (Array.isArray(expected)) return picked === JSON.stringify(expected);
  return picked === expected;
}

function QuestionCard({
  question,
  locale,
  onChecked,
}: {
  question: Exercise | QuizQuestion;
  locale: "es" | "en";
  onChecked: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const correct = picked != null && isCorrect(question, picked);
  const prompt = question.question[locale];
  const explanation = question.explanation[locale];

  return (
    <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
      <p className="font-medium text-zinc-900 dark:text-white">{prompt}</p>
      <div className="mt-3 space-y-2">
        {choices(question, locale).map((choice) => (
          <button
            key={choice.id}
            type="button"
            onClick={() => {
              if (checked) return;
              setPicked(choice.id);
            }}
            className={`w-full rounded-lg border p-3 text-left text-sm ${
              picked === choice.id
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : "border-zinc-200 dark:border-zinc-700"
            }`}
          >
            {choice.label}
          </button>
        ))}
      </div>
      {!checked && (
        <Button
          variant="outline"
          className="mt-3"
          disabled={picked == null}
          onClick={() => {
            setChecked(true);
            onChecked(picked != null && isCorrect(question, picked));
          }}
        >
          {locale === "es" ? "Comprobar" : "Check"}
        </Button>
      )}
      {checked && (
        <div className={`mt-3 flex items-start gap-2 text-sm ${correct ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"}`}>
          {correct ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0" />}
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}

export function LessonChecks({
  exercises,
  questions,
  passingScore,
  locale,
  onQuizPassed,
}: {
  exercises: Exercise[];
  questions: QuizQuestion[];
  passingScore: number;
  locale: "es" | "en";
  onQuizPassed: (passed: boolean) => void;
}) {
  const [results, setResults] = useState<Record<string, boolean>>({});

  const record = (id: string, correct: boolean) => {
    setResults((current) => {
      const next = { ...current, [id]: correct };
      const values = Object.values(next);
      if (questions.length > 0 && values.length >= questions.length) {
        const score = values.filter(Boolean).length;
        onQuizPassed(Math.round((score / questions.length) * 100) >= passingScore);
      }
      return next;
    });
  };

  return (
    <div className="mt-8 space-y-8">
      {exercises.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">
            {locale === "es" ? "Ejercicios" : "Exercises"}
          </h2>
          <div className="space-y-4">
            {exercises.map((exercise) => (
              <QuestionCard key={exercise.id} question={exercise} locale={locale} onChecked={() => undefined} />
            ))}
          </div>
        </section>
      )}
      {questions.length > 0 && (
        <section>
          <h2 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-white">
            {locale === "es" ? "Quiz de la lección" : "Lesson quiz"}
          </h2>
          <p className="mb-3 text-sm text-zinc-500">
            {locale === "es"
              ? `Necesitas ${passingScore}% para marcar la lección como completada.`
              : `You need ${passingScore}% to mark the lesson complete.`}
          </p>
          <div className="space-y-4">
            {questions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                locale={locale}
                onChecked={(correct) => record(question.id, correct)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
