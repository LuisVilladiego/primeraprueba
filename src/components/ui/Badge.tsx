

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100",
        primary:
          "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
        secondary:
          "bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300",
        success:
          "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
        warning:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
        danger:
          "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
        purple:
          "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
        outline:
          "border border-zinc-200 bg-transparent text-zinc-800 dark:border-zinc-700 dark:text-zinc-200",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

export function Badge({ className, variant, size, icon, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
}

interface StatusBadgeProps {
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "MASTERED" | "NEEDS_REVIEW" | "locked" | "available";
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config: Record<
    StatusBadgeProps["status"],
    { variant: BadgeProps["variant"]; label: string; icon: string }
  > = {
    NOT_STARTED: { variant: "default", label: "No Iniciado", icon: "☐" },
    IN_PROGRESS: { variant: "primary", label: "En Progreso", icon: "◐" },
    COMPLETED: { variant: "success", label: "Completado", icon: "✓" },
    MASTERED: { variant: "purple", label: "Dominado", icon: "🏆" },
    NEEDS_REVIEW: { variant: "warning", label: "Repasar", icon: "🔄" },
    locked: { variant: "default", label: "Bloqueado", icon: "🔒" },
    available: { variant: "primary", label: "Disponible", icon: "▶" },
  };

  const { variant, label, icon } = config[status];

  return (
    <Badge variant={variant} className={className}>
      <span className="mr-1">{icon}</span>
      {label}
    </Badge>
  );
}
