import type { Module, Lesson, Lab, Exam } from "@/types";
import {
  level0Module,
  level0Lessons,
  level0Labs,
  level0Exam,
} from "@/content/modules/level-0";
import {
  level1Module,
  level1Lessons,
  level1Labs,
  level1Exam,
} from "@/content/modules/level-1";
import {
  level2Module,
  level2Lessons,
  level2Labs,
  level2Exam,
} from "@/content/modules/level-2";
import { lesson01 } from "@/content/modules/level-0/lessons/lesson-0-1";
import { lesson02 } from "@/content/modules/level-0/lessons/lesson-0-2";
import { lesson03 } from "@/content/modules/level-0/lessons/lesson-0-3";
import { lesson04 } from "@/content/modules/level-0/lessons/lesson-0-4";
import { lesson05 } from "@/content/modules/level-0/lessons/lesson-0-5";
import { lesson06 } from "@/content/modules/level-0/lessons/lesson-0-6";
import { lesson07 } from "@/content/modules/level-0/lessons/lesson-0-7";
import { lesson11 } from "@/content/modules/level-1/lessons/lesson-1-1";
import { lesson12 } from "@/content/modules/level-1/lessons/lesson-1-2";
import { lesson13 } from "@/content/modules/level-1/lessons/lesson-1-3";
import { lesson14 } from "@/content/modules/level-1/lessons/lesson-1-4";
import { lesson15 } from "@/content/modules/level-1/lessons/lesson-1-5";
import { lesson16 } from "@/content/modules/level-1/lessons/lesson-1-6";
import { lesson17 } from "@/content/modules/level-1/lessons/lesson-1-7";
import { lesson21 } from "@/content/modules/level-2/lessons/lesson-2-1";
import { lesson22 } from "@/content/modules/level-2/lessons/lesson-2-2";
import { lesson23 } from "@/content/modules/level-2/lessons/lesson-2-3";
import { lesson24 } from "@/content/modules/level-2/lessons/lesson-2-4";
import { lesson25 } from "@/content/modules/level-2/lessons/lesson-2-5";
import { lesson26 } from "@/content/modules/level-2/lessons/lesson-2-6";
import { lesson27 } from "@/content/modules/level-2/lessons/lesson-2-7";

export interface CourseConfig {
  module: Module;
  lessons: Lesson[];
  labs: Lab[];
  exam: Exam | null;
  lessonBySlug: Record<string, Lesson>;
}

const level0LessonBySlug: Record<string, Lesson> = {
  "what-is-a-computer": lesson01,
  "what-is-an-operating-system": lesson02,
  "processes-and-memory": lesson03,
  "storage-and-files": lesson04,
  "user-interfaces": lesson05,
  "linux-history": lesson06,
  "linux-vs-windows-vs-macos": lesson07,
};

const level1LessonBySlug: Record<string, Lesson> = {
  "intro-to-terminal": lesson11,
  "navigation-commands": lesson12,
  "file-operations": lesson13,
  "viewing-files": lesson14,
  "getting-help": lesson15,
  "wildcards-globbing": lesson16,
  "command-history": lesson17,
};

const level2LessonBySlug: Record<string, Lesson> = {
  "filesystem-hierarchy": lesson21,
  "file-types": lesson22,
  "links-hard-soft": lesson23,
  "file-metadata": lesson24,
  "disk-usage": lesson25,
  "find-command": lesson26,
  "locate-updatedb": lesson27,
};

export const courseRegistry: Record<string, CourseConfig> = {
  "level-0": {
    module: level0Module,
    lessons: level0Lessons,
    labs: level0Labs,
    exam: level0Exam,
    lessonBySlug: level0LessonBySlug,
  },
  "level-1": {
    module: level1Module,
    lessons: level1Lessons,
    labs: level1Labs,
    exam: level1Exam,
    lessonBySlug: level1LessonBySlug,
  },
  "level-2": {
    module: level2Module,
    lessons: level2Lessons,
    labs: level2Labs,
    exam: level2Exam,
    lessonBySlug: level2LessonBySlug,
  },
};

export function getCourse(levelId: string): CourseConfig | null {
  return courseRegistry[levelId] ?? null;
}

export function getLessonIdsForModule(moduleId: string): string[] {
  const course = getCourse(moduleId);
  return course?.lessons.map((l) => l.id) ?? [];
}
