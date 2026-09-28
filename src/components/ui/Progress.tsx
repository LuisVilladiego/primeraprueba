

import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "danger" | "gradient";
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export function Progress({
  value,
  max = 100,
  size = "md",
  variant = "default",
  showLabel = false,
  label,
  className,
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  const variantClasses = {
    default: "bg-blue-600 dark:bg-blue-500",
    success: "bg-green-600 dark:bg-green-500",
    warning: "bg-yellow-500 dark:bg-yellow-400",
    danger: "bg-red-600 dark:bg-red-500",
    gradient: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
  };

  return (
    <div className={cn("w-full", className)}>
      {(showLabel || label) && (
        <div className="mb-1 flex justify-between text-sm">
          {label && (
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              {label}
            </span>
          )}
          {showLabel && (
            <span className="text-zinc-500 dark:text-zinc-400">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div
        className={cn(
          "w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700",
          sizeClasses[size]
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            variantClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface ProgressRingProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function ProgressRing({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  showLabel = true,
  className,
  children,
}: ProgressRingProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          className="text-zinc-200 dark:text-zinc-700"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-blue-600 transition-all duration-500 ease-out dark:text-blue-500"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      {children ? (
        <div className="absolute">{children}</div>
      ) : showLabel ? (
        <span className="absolute text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          {Math.round(percentage)}%
        </span>
      ) : null}
    </div>
  );
}
