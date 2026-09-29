import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { X, Trophy, CheckCircle, AlertCircle, Info } from "lucide-react";

export interface ToastData {
  id: string;
  type: "success" | "error" | "info" | "achievement";
  title: string;
  message?: string;
  duration?: number;
}

interface ToastProps extends ToastData {
  onClose: (id: string) => void;
}

export function Toast({ id, type, title, message, duration = 4000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);

    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => onClose(id), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, id, onClose]);

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    achievement: Trophy,
  };

  const colors = {
    success: "border-green-500 bg-green-50 dark:bg-green-900/20",
    error: "border-red-500 bg-red-50 dark:bg-red-900/20",
    info: "border-blue-500 bg-blue-50 dark:bg-blue-900/20",
    achievement: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20",
  };

  const iconColors = {
    success: "text-green-500",
    error: "text-red-500",
    info: "text-blue-500",
    achievement: "text-yellow-500",
  };

  const Icon = icons[type];

  return (
    <div
      className={cn(
        "pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl border-l-4 p-4 shadow-lg transition-all duration-300",
        colors[type],
        isVisible && !isExiting ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}
    >
      <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", iconColors[type])} />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-zinc-900 dark:text-white">{title}</p>
        {message && (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{message}</p>
        )}
      </div>
      <button
        onClick={() => {
          setIsExiting(true);
          setTimeout(() => onClose(id), 300);
        }}
        className="shrink-0 rounded-lg p-1 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-zinc-300 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

interface ToastContainerProps {
  toasts: ToastData[];
  onClose: (id: string) => void;
}

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  );
}
