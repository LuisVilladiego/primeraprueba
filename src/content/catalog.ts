import pending from "@/content/curriculum/pending.json";
import { courseFromSpec, type BuiltCourse, type CourseSpec } from "@/content/lessonFactory";
import { level0Exam, level0Labs, level0Lessons, level0Module } from "@/content/modules/level-0";
import { lesson01 } from "@/content/modules/level-0/lessons/lesson-0-1";
import { lesson02 } from "@/content/modules/level-0/lessons/lesson-0-2";
import { lesson03 } from "@/content/modules/level-0/lessons/lesson-0-3";
import { lesson04 } from "@/content/modules/level-0/lessons/lesson-0-4";
import { lesson05 } from "@/content/modules/level-0/lessons/lesson-0-5";
import { lesson06 } from "@/content/modules/level-0/lessons/lesson-0-6";
import { lesson07 } from "@/content/modules/level-0/lessons/lesson-0-7";
import { level1Exam, level1Labs, level1Lessons, level1Module } from "@/content/modules/level-1";
import type { Exam, Lab, Lesson, Module } from "@/types";

const level0Content: Record<string, Lesson> = {
  "what-is-a-computer": lesson01,
  "what-is-an-operating-system": lesson02,
  "processes-and-memory": lesson03,
  "storage-and-files": lesson04,
  "user-interfaces": lesson05,
  "linux-history": lesson06,
  "linux-vs-windows-vs-macos": lesson07,
};

const generated = new Map<number, BuiltCourse>(
  (pending.courses as CourseSpec[]).map((spec) => {
    const built = courseFromSpec(spec);
    return [spec.level, built];
  }),
);

const level0: BuiltCourse = {
  module: {
    ...level0Module,
    lessons: level0Lessons,
    labs: level0Labs,
    exam: level0Exam,
  },
  lessons: level0Lessons,
  labs: level0Labs,
  exam: level0Exam,
};

const level1: BuiltCourse = {
  module: {
    ...level1Module,
    lessons: level1Lessons,
    labs: level1Labs,
    exam: level1Exam,
  },
  lessons: level1Lessons,
  labs: level1Labs,
  exam: level1Exam,
};

export function getCourse(level: number): BuiltCourse | null {
  if (level === 0) return level0;
  if (level === 1) return level1;
  return generated.get(level) ?? null;
}

export function listCourses(): BuiltCourse[] {
  const courses: BuiltCourse[] = [];
  for (let level = 0; level <= 15; level += 1) {
    const course = getCourse(level);
    if (course) courses.push(course);
  }
  return courses;
}

export function contentForLevel(level: number): Record<string, Lesson> {
  if (level === 0) return level0Content;
  const course = getCourse(level);
  if (!course) return {};
  return Object.fromEntries(course.lessons.map((lesson) => [lesson.slug, lesson]));
}

export function lessonIdsForModule(moduleId: string): string[] {
  const match = /^level-(\d+)$/.exec(moduleId);
  if (!match) return [];
  return getCourse(Number(match[1]))?.lessons.map((lesson) => lesson.id) ?? [];
}

export interface ActiveCourse {
  level: number;
  module: Module;
  lessons: Lesson[];
  labs: Lab[];
  exam: Exam;
  contentBySlug: Record<string, Lesson>;
  coursePath: string;
  labsPath: string;
  examPath: string;
}

export function toActiveCourse(level: number): ActiveCourse | null {
  const course = getCourse(level);
  if (!course) return null;
  return {
    level,
    module: course.module,
    lessons: course.lessons,
    labs: course.labs,
    exam: course.exam,
    contentBySlug: contentForLevel(level),
    coursePath: `/courses/level-${level}`,
    labsPath: `/courses/level-${level}/labs`,
    examPath: `/exams/level-${level}`,
  };
}
