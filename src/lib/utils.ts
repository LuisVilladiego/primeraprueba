import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) {
    return `${hours}h`;
  }
  return `${hours}h ${remainingMinutes}min`;
}

export function formatTimeSpent(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

export function calculateLevel(xp: number): number {
  return Math.floor(xp / 1000) + 1;
}

export function calculateXpForNextLevel(currentXp: number): { current: number; required: number; percentage: number } {
  const currentLevel = calculateLevel(currentXp);
  const xpForCurrentLevel = (currentLevel - 1) * 1000;
  const xpForNextLevel = currentLevel * 1000;
  const current = currentXp - xpForCurrentLevel;
  const required = xpForNextLevel - xpForCurrentLevel;
  const percentage = Math.round((current / required) * 100);
  
  return { current, required, percentage };
}

export function getProgressColor(percentage: number): string {
  if (percentage >= 80) return "bg-green-500";
  if (percentage >= 60) return "bg-blue-500";
  if (percentage >= 40) return "bg-yellow-500";
  if (percentage >= 20) return "bg-orange-500";
  return "bg-red-500";
}

export function getStatusColor(status: string): string {
  switch (status) {
    case "NOT_STARTED":
      return "text-gray-400";
    case "IN_PROGRESS":
      return "text-blue-500";
    case "COMPLETED":
      return "text-green-500";
    case "MASTERED":
      return "text-purple-500";
    case "NEEDS_REVIEW":
      return "text-orange-500";
    default:
      return "text-gray-400";
  }
}

export function getStatusIcon(status: string): string {
  switch (status) {
    case "NOT_STARTED":
      return "☐";
    case "IN_PROGRESS":
      return "◐";
    case "COMPLETED":
      return "✓";
    case "MASTERED":
      return "🏆";
    case "NEEDS_REVIEW":
      return "🔄";
    default:
      return "☐";
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}
