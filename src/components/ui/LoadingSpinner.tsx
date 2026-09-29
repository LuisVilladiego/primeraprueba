import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-3",
};

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-zinc-300 border-t-blue-600 dark:border-zinc-600 dark:border-t-blue-400",
        sizes[size],
        className
      )}
    />
  );
}

export function LoadingOverlay({ message }: { message?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-zinc-900/80">
      <LoadingSpinner size="lg" />
      {message && (
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{message}</p>
      )}
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="flex h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-16 w-16 animate-ping absolute rounded-full bg-blue-200 dark:bg-blue-900 opacity-75" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
            <span className="text-2xl">🐧</span>
          </div>
        </div>
        <p className="animate-pulse text-zinc-500">Cargando...</p>
      </div>
    </div>
  );
}
