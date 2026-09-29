import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useSettingsStore } from "@/stores/settingsStore";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Map,
  BookOpen,
  FlaskConical,
  GraduationCap,
  FolderKanban,
  User,
  BookText,
  Terminal,
  Trophy,
  Award,
  Settings,
  History,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { key: "dashboard", href: "/", icon: LayoutDashboard },
  { key: "roadmap", href: "/roadmap", icon: Map },
  { key: "courses", href: "/courses/level-0", icon: BookOpen },
  { key: "labs", href: "/courses/level-0/labs", icon: FlaskConical },
  { key: "exams", href: "/exams/level-0", icon: GraduationCap },
  { key: "projects", href: "/projects", icon: FolderKanban },
  { divider: true },
  { key: "commands", href: "/commands", icon: BookText },
  { key: "terminal", href: "/terminal", icon: Terminal },
  { key: "history", href: "/history", icon: History },
  { divider: true },
  { key: "achievements", href: "/achievements", icon: Trophy },
  { key: "certificates", href: "/certificates", icon: Award },
  { key: "stats", href: "/stats", icon: BarChart3 },
  { key: "profile", href: "/profile", icon: User },
  { key: "settings", href: "/settings", icon: Settings },
] as const;

export function Sidebar() {
  const location = useLocation();
  const { t } = useTranslation();
  const { sidebarCollapsed, toggleSidebar } = useSettingsStore();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-zinc-200 bg-white transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900",
        sidebarCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-zinc-200 px-4 dark:border-zinc-800">
        {!sidebarCollapsed && (
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/images/logo.jpg" 
              alt="Pinguiñoño" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span className="font-bold text-zinc-900 dark:text-white">
              Pinguiñoño
            </span>
          </Link>
        )}
        {sidebarCollapsed && (
          <img 
            src="/images/logo.jpg" 
            alt="Pinguiñoño" 
            className="mx-auto h-10 w-10 rounded-lg object-cover"
          />
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3">
        <ul className="space-y-1">
          {navItems.map((item, index) => {
            if ("divider" in item) {
              return (
                <li key={`divider-${index}`} className="my-3">
                  <hr className="border-zinc-200 dark:border-zinc-700" />
                </li>
              );
            }

            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <li key={item.key}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
                    sidebarCollapsed && "justify-center px-2"
                  )}
                  title={sidebarCollapsed ? t(`nav.${item.key}`) : undefined}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {!sidebarCollapsed && (
                    <span>{t(`nav.${item.key}`)}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Collapse Toggle */}
      <div className="border-t border-zinc-200 p-3 dark:border-zinc-800">
        <button
          onClick={toggleSidebar}
          className={cn(
            "flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium",
            "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900",
            "dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
            "transition-colors"
          )}
        >
          {sidebarCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <>
              <ChevronLeft className="h-5 w-5" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
