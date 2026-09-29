import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useNotificationsStore, NotificationType } from "@/stores/notificationsStore";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  Trophy,
  Flame,
  TrendingUp,
  Clock,
  Info,
  CheckCircle,
  AlertTriangle,
  X,
  Check,
  Trash2,
} from "lucide-react";

const typeIcons: Record<NotificationType, React.ReactNode> = {
  achievement: <Trophy className="h-5 w-5 text-yellow-500" />,
  streak: <Flame className="h-5 w-5 text-orange-500" />,
  level_up: <TrendingUp className="h-5 w-5 text-blue-500" />,
  reminder: <Clock className="h-5 w-5 text-purple-500" />,
  info: <Info className="h-5 w-5 text-cyan-500" />,
  success: <CheckCircle className="h-5 w-5 text-green-500" />,
  warning: <AlertTriangle className="h-5 w-5 text-amber-500" />,
};

const typeColors: Record<NotificationType, string> = {
  achievement: "bg-yellow-100 dark:bg-yellow-900/30",
  streak: "bg-orange-100 dark:bg-orange-900/30",
  level_up: "bg-blue-100 dark:bg-blue-900/30",
  reminder: "bg-purple-100 dark:bg-purple-900/30",
  info: "bg-cyan-100 dark:bg-cyan-900/30",
  success: "bg-green-100 dark:bg-green-900/30",
  warning: "bg-amber-100 dark:bg-amber-900/30",
};

export function NotificationCenter() {
  const { locale } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    removeNotification,
    clearAll,
  } = useNotificationsStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatTime = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) {
      return locale === "es" ? "Ahora" : "Just now";
    } else if (minutes < 60) {
      return locale === "es" ? `Hace ${minutes}m` : `${minutes}m ago`;
    } else if (hours < 24) {
      return locale === "es" ? `Hace ${hours}h` : `${hours}h ago`;
    } else {
      return locale === "es" ? `Hace ${days}d` : `${days}d ago`;
    }
  };

  const handleNotificationClick = (notification: typeof notifications[0]) => {
    markAsRead(notification.id);
    if (notification.actionUrl) {
      navigate(notification.actionUrl);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
      >
        <Bell className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 animate-[scale-in_0.15s_ease-out] origin-top-right">
          <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-700">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {locale === "es" ? "Notificaciones" : "Notifications"}
                </h3>
                {unreadCount > 0 && (
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {unreadCount} {locale === "es" ? "nuevas" : "new"}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
                    title={locale === "es" ? "Marcar todo como leído" : "Mark all as read"}
                  >
                    <Check className="h-4 w-4" />
                  </button>
                )}
                {notifications.length > 0 && (
                  <button
                    onClick={clearAll}
                    className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-red-500 dark:hover:bg-zinc-800"
                    title={locale === "es" ? "Limpiar todo" : "Clear all"}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <Bell className="h-6 w-6 text-zinc-400" />
                  </div>
                  <p className="mt-3 text-sm text-zinc-500">
                    {locale === "es"
                      ? "No tienes notificaciones"
                      : "You have no notifications"}
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`group relative flex gap-3 p-4 transition-colors ${
                        notification.read
                          ? "bg-white dark:bg-zinc-900"
                          : "bg-blue-50/50 dark:bg-blue-900/10"
                      } ${notification.actionUrl ? "cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800" : ""}`}
                      onClick={() => handleNotificationClick(notification)}
                    >
                      {/* Icon */}
                      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${typeColors[notification.type]}`}>
                        {typeIcons[notification.type]}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <p className={`text-sm font-medium ${notification.read ? "text-zinc-700 dark:text-zinc-300" : "text-zinc-900 dark:text-white"}`}>
                            {notification.title[locale as "es" | "en"]}
                          </p>
                          <span className="flex-shrink-0 text-xs text-zinc-400">
                            {formatTime(notification.timestamp)}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm text-zinc-500 line-clamp-2">
                          {notification.message[locale as "es" | "en"]}
                        </p>
                      </div>

                      {/* Unread indicator */}
                      {!notification.read && (
                        <div className="absolute left-1.5 top-1/2 -translate-y-1/2">
                          <div className="h-2 w-2 rounded-full bg-blue-500" />
                        </div>
                      )}

                      {/* Delete button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeNotification(notification.id);
                        }}
                        className="absolute right-2 top-2 rounded-lg p-1 text-zinc-400 opacity-0 transition-all hover:bg-zinc-200 hover:text-red-500 group-hover:opacity-100 dark:hover:bg-zinc-700"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="border-t border-zinc-200 p-2 dark:border-zinc-700">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/settings");
                  }}
                  className="w-full rounded-lg px-3 py-2 text-center text-sm text-zinc-500 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  {locale === "es" ? "Configurar notificaciones" : "Configure notifications"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
