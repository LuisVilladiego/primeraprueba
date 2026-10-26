import { useLocation } from "react-router-dom";
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

export function useActiveCourse(): ActiveCourse {
  const { pathname } = useLocation();
  const level = pathname.includes("/level-1") ? 1 : 0;

  if (level === 1) {
    return {
      level,
      module: level1Module,
      lessons: level1Lessons,
      labs: level1Labs,
      exam: level1Exam,
      contentBySlug: Object.fromEntries(level1Lessons.map((lesson) => [lesson.slug, lesson])),
      coursePath: "/courses/level-1",
      labsPath: "/courses/level-1/labs",
      examPath: "/exams/level-1",
    };
  }

  return {
    level: 0,
    module: level0Module,
    lessons: level0Lessons,
    labs: level0Labs,
    exam: level0Exam,
    contentBySlug: level0Content,
    coursePath: "/courses/level-0",
    labsPath: "/courses/level-0/labs",
    examPath: "/exams/level-0",
  };
}
