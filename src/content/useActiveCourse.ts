import { useLocation } from "react-router-dom";
import { levelFromPath } from "@/content/lessonFactory";
import { toActiveCourse, type ActiveCourse } from "@/content/catalog";

export type { ActiveCourse };

export function useActiveCourse(): ActiveCourse | null {
  const { pathname } = useLocation();
  const level = levelFromPath(pathname);
  if (level == null) return null;
  return toActiveCourse(level);
}
