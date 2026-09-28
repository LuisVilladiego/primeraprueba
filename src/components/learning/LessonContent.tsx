"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { ContentBlock, ContentBlockContent, Exercise, Quiz } from "@/types";
import {
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Video,
  Play,
} from "lucide-react";

interface LessonContentProps {
  contentBlocks: ContentBlock[];
  exercises: Exercise[];
  quiz: Quiz | null;
  onComplete: () => void;
}

function TextBlock({ content, type }: { content: ContentBlockContent; type: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    TIP: <Lightbulb className="h-5 w-5 text-blue-500" />,
    WARNING: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
    KEY_CONCEPT: <Lightbulb className="h-5 w-5 text-purple-500" />,
  };

  const bgMap: Record<string, string> = {
    TIP: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800",
    WARNING: "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800",
    KEY_CONCEPT: "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800",
  };

  if (type === "TIP" || type === "WARNING" || type === "KEY_CONCEPT") {
    return (
      <div className={cn("rounded-lg border p-4", bgMap[type])}>
        <div className="flex items-start gap-3">
          {iconMap[type]}
          <div>
            {content.title && (
              <h4 className="font-semibold text-zinc-900 dark:text-white">
                {content.title}
              </h4>
            )}
            <div
              className="prose prose-sm dark:prose-invert mt-2"
              dangerouslySetInnerHTML={{
                __html: content.text?.replace(/\n/g, "<br />").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") || "",
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {content.title && (
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
          {content.title}
        </h3>
      )}
      <div
        className="prose prose-zinc dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{
          __html: content.text?.replace(/\n/g, "<br />").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") || "",
        }}
      />
    </div>
  );
}

function DiagramBlock({ content }: { content: ContentBlockContent }) {
  if (!content.diagramData) return null;

  const { nodes } = content.diagramData;

  const renderNode = (node: { id: string; label: string; description?: string; children?: typeof node[] }, depth = 0) => (
    <div key={node.id} className={cn("pl-4", depth > 0 && "border-l-2 border-zinc-200 dark:border-zinc-700")}>
      <div className="flex items-center gap-2 py-2">
        <div className="h-3 w-3 rounded-full bg-blue-500" />
        <span className="font-medium text-zinc-900 dark:text-white">{node.label}</span>
        {node.description && (
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            - {node.description}
          </span>
        )}
      </div>
      {node.children && (
        <div className="ml-4">
          {node.children.map((child) => renderNode(child, depth + 1))}
        </div>
      )}
    </div>
  );

  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-800/50">
      {content.title && (
        <h4 className="mb-4 font-semibold text-zinc-900 dark:text-white">
          {content.title}
        </h4>
      )}
      <div className="space-y-2">
        {nodes.map((node) => renderNode(node))}
      </div>
    </div>
  );
}

function ExerciseBlock({
  exercise,
  onAnswer,
}: {
  exercise: Exercise;
  onAnswer: (correct: boolean) => void;
}) {
  const { tBilingual, tArray, locale } = useTranslation();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const options = exercise.options ? tArray(exercise.options) : [];
  const isCorrect = selectedAnswer === exercise.correctAnswer;

  const handleCheck = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
      onAnswer(isCorrect);
    }
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setShowHint(false);
  };

  return (
    <Card className="border-2 border-dashed border-blue-200 dark:border-blue-800">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <Badge variant="primary">Ejercicio</Badge>
        </div>

        <p className="mb-4 text-lg font-medium text-zinc-900 dark:text-white">
          {tBilingual(exercise.question)}
        </p>

        {exercise.type === "MULTIPLE_CHOICE" && (
          <div className="space-y-2">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && setSelectedAnswer(String(index))}
                disabled={showResult}
                className={cn(
                  "w-full rounded-lg border p-4 text-left transition-all",
                  selectedAnswer === String(index)
                    ? showResult
                      ? isCorrect
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600",
                  showResult && String(index) === exercise.correctAnswer && "border-green-500 bg-green-50 dark:bg-green-900/20"
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full border-2",
                      selectedAnswer === String(index)
                        ? "border-blue-500 bg-blue-500 text-white"
                        : "border-zinc-300 dark:border-zinc-600"
                    )}
                  >
                    {selectedAnswer === String(index) && (
                      <div className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {exercise.type === "TRUE_FALSE" && (
          <div className="flex gap-4">
            {[
              { value: "true", label: locale === "es" ? "Verdadero" : "True" },
              { value: "false", label: locale === "es" ? "Falso" : "False" },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => !showResult && setSelectedAnswer(opt.value)}
                disabled={showResult}
                className={cn(
                  "flex-1 rounded-lg border p-4 transition-all",
                  selectedAnswer === opt.value
                    ? showResult
                      ? isCorrect
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {showResult && (
          <div
            className={cn(
              "mt-4 rounded-lg p-4",
              isCorrect
                ? "bg-green-50 dark:bg-green-900/20"
                : "bg-red-50 dark:bg-red-900/20"
            )}
          >
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600" />
              )}
              <span
                className={cn(
                  "font-medium",
                  isCorrect ? "text-green-700" : "text-red-700"
                )}
              >
                {isCorrect
                  ? locale === "es"
                    ? "¡Correcto!"
                    : "Correct!"
                  : locale === "es"
                  ? "Incorrecto"
                  : "Incorrect"}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              {tBilingual(exercise.explanation)}
            </p>
          </div>
        )}

        <div className="mt-4 flex items-center gap-3">
          {!showResult ? (
            <>
              <Button onClick={handleCheck} disabled={selectedAnswer === null}>
                {locale === "es" ? "Verificar" : "Check"}
              </Button>
              {!showHint && exercise.hints && (
                <Button variant="ghost" onClick={() => setShowHint(true)}>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  {locale === "es" ? "Pista" : "Hint"}
                </Button>
              )}
            </>
          ) : (
            !isCorrect && (
              <Button variant="outline" onClick={handleRetry}>
                {locale === "es" ? "Intentar de nuevo" : "Try again"}
              </Button>
            )
          )}
        </div>

        {showHint && exercise.hints && (
          <div className="mt-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              <span className="font-medium text-yellow-700">
                {locale === "es" ? "Pista" : "Hint"}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              {tArray(exercise.hints)[0]}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function LessonContent({
  contentBlocks,
  exercises,
  quiz,
  onComplete,
}: LessonContentProps) {
  const { locale, tArray } = useTranslation();
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  const handleExerciseAnswer = (exerciseId: string, correct: boolean) => {
    if (correct) {
      setCompletedExercises((prev) => new Set([...prev, exerciseId]));
    }
  };

  const allExercisesCompleted = exercises.every((ex) => completedExercises.has(ex.id));

  const renderBlock = (block: ContentBlock) => {
    const content = tArray(block.content);

    switch (block.type) {
      case "TEXT":
      case "TIP":
      case "WARNING":
      case "KEY_CONCEPT":
        return <TextBlock key={block.id} content={content} type={block.type} />;
      case "DIAGRAM":
        return <DiagramBlock key={block.id} content={content} />;
      case "VIDEO":
        return (
          <div
            key={block.id}
            className="aspect-video overflow-hidden rounded-lg bg-zinc-900"
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-center text-zinc-400">
                <Video className="mx-auto h-12 w-12" />
                <p className="mt-2">Video: {content.title}</p>
                <Button variant="outline" className="mt-4">
                  <Play className="mr-2 h-4 w-4" />
                  {locale === "es" ? "Reproducir" : "Play"}
                </Button>
              </div>
            </div>
          </div>
        );
      case "CODE":
        return (
          <pre
            key={block.id}
            className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100"
          >
            <code>{content.code}</code>
          </pre>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Content Blocks */}
      {contentBlocks.map((block) => (
        <div key={block.id}>{renderBlock(block)}</div>
      ))}

      {/* Exercises */}
      {exercises.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {locale === "es" ? "Ejercicios" : "Exercises"}
          </h3>
          {exercises.map((exercise) => (
            <ExerciseBlock
              key={exercise.id}
              exercise={exercise}
              onAnswer={(correct) => handleExerciseAnswer(exercise.id, correct)}
            />
          ))}
        </div>
      )}

      {/* Complete Button */}
      <div className="flex justify-end border-t border-zinc-200 pt-6 dark:border-zinc-700">
        <Button
          onClick={onComplete}
          size="lg"
          variant="primary"
          disabled={exercises.length > 0 && !allExercisesCompleted}
        >
          {exercises.length > 0 && !allExercisesCompleted
            ? locale === "es"
              ? "Completa los ejercicios"
              : "Complete the exercises"
            : locale === "es"
            ? "Marcar como completado"
            : "Mark as complete"}
          <CheckCircle2 className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
