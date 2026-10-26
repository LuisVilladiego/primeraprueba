import { describe, expect, it } from "vitest";
import { contentForLevel, getCourse, lessonIdsForModule, listCourses } from "@/content/catalog";
import { scoreExam } from "@/content/examScore";
import { levelFromPath } from "@/content/lessonFactory";
import type { ContentBlockContent, QuizQuestion } from "@/types";

function blockHasCopy(content: ContentBlockContent | undefined): boolean {
  if (!content) return false;
  const prose = content.text?.trim() || content.code?.trim() || "";
  const items = content.items?.some((item) => item.trim().length > 0) ?? false;
  const diagram = content.diagramData?.nodes.some((node) => node.label.trim().length > 0) ?? false;
  const commands = content.terminalCommands?.some((command) => command.command.trim().length > 0) ?? false;
  return prose.length > 0 || items || diagram || commands || Boolean(content.title?.trim());
}

function indexesFit(values: string[], count: number): boolean {
  return values.length > 0 && values.every((value) => {
    const index = Number(value);
    return Number.isInteger(index) && index >= 0 && index < count;
  });
}

function answerIsValid(question: QuizQuestion): boolean {
  if (!question.question.es.trim() || !question.question.en.trim()) return false;
  if (question.type === "TRUE_FALSE") {
    return question.correctAnswer === "true" || question.correctAnswer === "false";
  }
  if (Array.isArray(question.correctAnswer)) {
    const count = question.options?.es.length ?? 0;
    return Boolean(question.options)
      && question.options?.en.length === count
      && indexesFit(question.correctAnswer, count);
  }
  if (question.options) {
    const count = question.options.es.length;
    const index = Number(question.correctAnswer);
    return question.options.en.length === count
      && Number.isInteger(index)
      && index >= 0
      && index < count;
  }
  return question.correctAnswer.length > 0;
}

describe("levelFromPath", () => {
  it("distingue el nivel 1 del nivel 10", () => {
    expect(levelFromPath("/courses/level-1")).toBe(1);
    expect(levelFromPath("/courses/level-1/lessons/shell")).toBe(1);
    expect(levelFromPath("/courses/level-10")).toBe(10);
    expect(levelFromPath("/courses/level-10/labs/lab-firewall")).toBe(10);
    expect(levelFromPath("/exams/level-15")).toBe(15);
    expect(levelFromPath("/roadmap")).toBeNull();
  });
});

describe("scoreExam", () => {
  it("suma puntos cuando la respuesta coincide", () => {
    const result = scoreExam(
      [
        { id: "a", points: 5, correctAnswer: "1" },
        { id: "b", points: 5, correctAnswer: "true" },
      ],
      { a: "1", b: "false" },
    );
    expect(result).toEqual({ correct: 5, total: 10, percentage: 50 });
  });

  it("no da por buena una respuesta de ordenamiento comparada como texto", () => {
    const result = scoreExam(
      [{ id: "order", points: 10, correctAnswer: ["1", "0"] }],
      { order: "1,0" },
    );
    expect(result.correct).toBe(0);
    expect(result.percentage).toBe(0);
  });

  it("devuelve 0 si no hay puntos", () => {
    expect(scoreExam([], {}).percentage).toBe(0);
  });
});

describe("catálogo", () => {
  it("publica los niveles 0 a 15 con lecciones, labs y examen", () => {
    const courses = listCourses();
    expect(courses.map((course) => course.module.level)).toEqual(
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    );
    for (const course of courses) {
      expect(course.lessons.length).toBeGreaterThan(0);
      expect(course.labs.length).toBeGreaterThan(0);
      expect(course.exam.questions.length).toBeGreaterThanOrEqual(course.module.level === 0 ? 15 : 20);
      expect(course.exam.id).toBe(`exam-level-${course.module.level}`);
      expect(course.module.project).toBeTruthy();
      if (course.module.level > 0) {
        expect(course.lessons[0].exercises.length).toBeGreaterThan(0);
        expect(course.lessons[0].quiz?.questions.length).toBeGreaterThanOrEqual(4);
      }
    }
  });

  it("el nivel 1 tiene las nueve lecciones de fundamentos", () => {
    expect(getCourse(1)?.lessons).toHaveLength(9);
    expect(lessonIdsForModule("level-1")).toEqual([
      "lesson-1-1",
      "lesson-1-2",
      "lesson-1-3",
      "lesson-1-4",
      "lesson-1-5",
      "lesson-1-6",
      "lesson-1-7",
      "lesson-1-8",
      "lesson-1-9",
    ]);
  });

  it("mantiene ids únicos y textos bilingües", () => {
    const ids = new Set<string>();
    for (const course of listCourses()) {
      const slugs = new Set<string>();
      for (const lesson of course.lessons) {
        expect(ids.has(lesson.id)).toBe(false);
        ids.add(lesson.id);
        expect(slugs.has(lesson.slug)).toBe(false);
        slugs.add(lesson.slug);
        expect(lesson.title.es.trim().length).toBeGreaterThan(0);
        expect(lesson.title.en.trim().length).toBeGreaterThan(0);
        expect(lesson.description.es.trim().length).toBeGreaterThan(0);
        expect(lesson.description.en.trim().length).toBeGreaterThan(0);
      }
      const pages = contentForLevel(course.module.level);
      for (const lesson of course.lessons) {
        const page = pages[lesson.slug];
        expect(page).toBeTruthy();
        expect(page.id).toBe(lesson.id);
        if (course.module.level === 0) {
          expect(page.contentBlocks.length).toBeGreaterThan(0);
        } else {
          expect(page.exercises.length).toBeGreaterThan(0);
        }
        expect(page.contentBlocks.length).toBeGreaterThan(0);
        for (const block of page.contentBlocks) {
          expect(blockHasCopy(block.content.es), `${page.id} ${block.id} es`).toBe(true);
          expect(blockHasCopy(block.content.en), `${page.id} ${block.id} en`).toBe(true);
        }
        for (const question of page.quiz?.questions ?? []) {
          expect(answerIsValid(question)).toBe(true);
        }
      }
      for (const question of course.exam.questions) {
        expect(answerIsValid(question), `${course.exam.id} ${question.id} ${question.type} ${String(question.correctAnswer)}`).toBe(true);
      }
    }
  });
});
