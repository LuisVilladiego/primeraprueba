import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSettingsStore } from "@/stores/settingsStore";
import { useUserStore } from "@/stores/userStore";
import { useProgressStore } from "@/stores/progressStore";
import { useAchievementsStore } from "@/stores/achievementsStore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Settings,
  Globe,
  Sun,
  Moon,
  Monitor,
  Volume2,
  VolumeX,
  Bell,
  BellOff,
  Sparkles,
  Type,
  RotateCcw,
  Download,
  Upload,
  AlertTriangle,
  Check,
  X,
} from "lucide-react";

export function SettingsPage() {
  const { locale } = useTranslation();
  const {
    theme,
    soundEnabled,
    notificationsEnabled,
    animationsEnabled,
    fontSize,
    setLocale,
    setTheme,
    setSoundEnabled,
    setNotificationsEnabled,
    setAnimationsEnabled,
    setFontSize,
    resetSettings,
  } = useSettingsStore();

  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showResetDataConfirm, setShowResetDataConfirm] = useState(false);

  const handleResetProgress = () => {
    useUserStore.persist.clearStorage();
    useProgressStore.persist.clearStorage();
    useAchievementsStore.persist.clearStorage();
    window.location.reload();
  };

  const handleExportData = () => {
    const data = {
      user: localStorage.getItem("linux-academy-user"),
      progress: localStorage.getItem("pinguinono-progress"),
      achievements: localStorage.getItem("pinguinono-achievements"),
      settings: localStorage.getItem("pinguinono-settings"),
      exportDate: new Date().toISOString(),
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pinguinono-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportData = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = JSON.parse(event.target?.result as string);
            if (data.user) localStorage.setItem("linux-academy-user", data.user);
            if (data.progress) localStorage.setItem("pinguinono-progress", data.progress);
            if (data.achievements) localStorage.setItem("pinguinono-achievements", data.achievements);
            if (data.settings) localStorage.setItem("pinguinono-settings", data.settings);
            window.location.reload();
          } catch {
            alert(locale === "es" ? "Error al importar datos" : "Error importing data");
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const ToggleSwitch = ({ 
    enabled, 
    onToggle,
    label,
    description,
    iconOn,
    iconOff,
  }: { 
    enabled: boolean; 
    onToggle: (value: boolean) => void;
    label: string;
    description: string;
    iconOn: React.ReactNode;
    iconOff: React.ReactNode;
  }) => (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
          {enabled ? iconOn : iconOff}
        </div>
        <div>
          <p className="font-medium text-zinc-900 dark:text-white">{label}</p>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
      </div>
      <button
        onClick={() => onToggle(!enabled)}
        className={`relative h-6 w-11 rounded-full transition-colors ${
          enabled ? "bg-blue-600" : "bg-zinc-300 dark:bg-zinc-600"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
            enabled ? "left-5" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-8 animate-[fade-in-up_0.4s_ease-out]">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-600 to-zinc-800">
            <Settings className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {locale === "es" ? "Configuración" : "Settings"}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              {locale === "es"
                ? "Personaliza tu experiencia de aprendizaje"
                : "Customize your learning experience"}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Language */}
        <Card className="p-6 animate-[fade-in-up_0.4s_ease-out_0.1s_both]">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white">
            <Globe className="h-5 w-5" />
            {locale === "es" ? "Idioma" : "Language"}
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => setLocale("es")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 font-medium transition-all ${
                locale === "es"
                  ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                  : "border-zinc-200 text-zinc-600 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600"
              }`}
            >
              <span className="text-xl">🇪🇸</span>
              Español
              {locale === "es" && <Check className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 font-medium transition-all ${
                locale === "en"
                  ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                  : "border-zinc-200 text-zinc-600 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600"
              }`}
            >
              <span className="text-xl">🇺🇸</span>
              English
              {locale === "en" && <Check className="h-4 w-4" />}
            </button>
          </div>
        </Card>

        {/* Theme */}
        <Card className="p-6 animate-[fade-in-up_0.4s_ease-out_0.15s_both]">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white">
            <Sun className="h-5 w-5" />
            {locale === "es" ? "Tema" : "Theme"}
          </h2>
          <div className="flex gap-3">
            {[
              { value: "light", icon: Sun, label: locale === "es" ? "Claro" : "Light" },
              { value: "dark", icon: Moon, label: locale === "es" ? "Oscuro" : "Dark" },
              { value: "system", icon: Monitor, label: locale === "es" ? "Sistema" : "System" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setTheme(option.value as "light" | "dark" | "system")}
                className={`flex flex-1 flex-col items-center gap-2 rounded-lg border-2 px-4 py-3 font-medium transition-all ${
                  theme === option.value
                    ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                    : "border-zinc-200 text-zinc-600 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600"
                }`}
              >
                <option.icon className="h-5 w-5" />
                {option.label}
              </button>
            ))}
          </div>
        </Card>

        {/* Preferences */}
        <Card className="p-6 animate-[fade-in-up_0.4s_ease-out_0.2s_both]">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
            {locale === "es" ? "Preferencias" : "Preferences"}
          </h2>
          <div className="divide-y divide-zinc-200 dark:divide-zinc-700">
            <ToggleSwitch
              enabled={notificationsEnabled}
              onToggle={setNotificationsEnabled}
              label={locale === "es" ? "Notificaciones" : "Notifications"}
              description={locale === "es" ? "Mostrar alertas de logros y progreso" : "Show achievement and progress alerts"}
              iconOn={<Bell className="h-5 w-5 text-blue-500" />}
              iconOff={<BellOff className="h-5 w-5 text-zinc-400" />}
            />
            <ToggleSwitch
              enabled={soundEnabled}
              onToggle={setSoundEnabled}
              label={locale === "es" ? "Sonidos" : "Sounds"}
              description={locale === "es" ? "Reproducir efectos de sonido" : "Play sound effects"}
              iconOn={<Volume2 className="h-5 w-5 text-green-500" />}
              iconOff={<VolumeX className="h-5 w-5 text-zinc-400" />}
            />
            <ToggleSwitch
              enabled={animationsEnabled}
              onToggle={setAnimationsEnabled}
              label={locale === "es" ? "Animaciones" : "Animations"}
              description={locale === "es" ? "Habilitar transiciones y efectos visuales" : "Enable transitions and visual effects"}
              iconOn={<Sparkles className="h-5 w-5 text-purple-500" />}
              iconOff={<Sparkles className="h-5 w-5 text-zinc-400" />}
            />
          </div>
        </Card>

        {/* Font Size */}
        <Card className="p-6 animate-[fade-in-up_0.4s_ease-out_0.25s_both]">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white">
            <Type className="h-5 w-5" />
            {locale === "es" ? "Tamaño de texto" : "Font Size"}
          </h2>
          <div className="flex gap-3">
            {[
              { value: "small", label: locale === "es" ? "Pequeño" : "Small", size: "text-sm" },
              { value: "medium", label: locale === "es" ? "Mediano" : "Medium", size: "text-base" },
              { value: "large", label: locale === "es" ? "Grande" : "Large", size: "text-lg" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setFontSize(option.value as "small" | "medium" | "large")}
                className={`flex flex-1 items-center justify-center rounded-lg border-2 px-4 py-3 font-medium transition-all ${option.size} ${
                  fontSize === option.value
                    ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                    : "border-zinc-200 text-zinc-600 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </Card>

        {/* Data Management */}
        <Card className="p-6 animate-[fade-in-up_0.4s_ease-out_0.3s_both]">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
            {locale === "es" ? "Gestión de datos" : "Data Management"}
          </h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={handleExportData}>
                <Download className="h-4 w-4" />
                {locale === "es" ? "Exportar datos" : "Export data"}
              </Button>
              <Button variant="outline" className="flex-1" onClick={handleImportData}>
                <Upload className="h-4 w-4" />
                {locale === "es" ? "Importar datos" : "Import data"}
              </Button>
            </div>
            
            <div className="flex gap-3">
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => setShowResetConfirm(true)}
              >
                <RotateCcw className="h-4 w-4" />
                {locale === "es" ? "Restablecer configuración" : "Reset settings"}
              </Button>
            </div>

            <Button
              variant="danger"
              className="w-full"
              onClick={() => setShowResetDataConfirm(true)}
            >
              <AlertTriangle className="h-4 w-4" />
              {locale === "es" ? "Eliminar todo el progreso" : "Delete all progress"}
            </Button>
          </div>
        </Card>

        {/* Reset Settings Confirmation */}
        {showResetConfirm && (
          <Card className="border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800/30 dark:bg-yellow-900/10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 shrink-0 text-yellow-600" />
              <div className="flex-1">
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {locale === "es" ? "¿Restablecer configuración?" : "Reset settings?"}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {locale === "es"
                    ? "Esto restaurará todas las preferencias a sus valores por defecto."
                    : "This will restore all preferences to their default values."}
                </p>
                <div className="mt-4 flex gap-2">
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => {
                      resetSettings();
                      setShowResetConfirm(false);
                    }}
                  >
                    {locale === "es" ? "Sí, restablecer" : "Yes, reset"}
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setShowResetConfirm(false)}
                  >
                    <X className="h-4 w-4" />
                    {locale === "es" ? "Cancelar" : "Cancel"}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Reset Data Confirmation */}
        {showResetDataConfirm && (
          <Card className="border-red-200 bg-red-50 p-6 dark:border-red-800/30 dark:bg-red-900/10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 shrink-0 text-red-600" />
              <div className="flex-1">
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {locale === "es" ? "¿Eliminar todo el progreso?" : "Delete all progress?"}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {locale === "es"
                    ? "Esta acción eliminará permanentemente todo tu progreso, logros y estadísticas. Esta acción NO se puede deshacer."
                    : "This will permanently delete all your progress, achievements, and statistics. This action CANNOT be undone."}
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="danger" size="sm" onClick={handleResetProgress}>
                    {locale === "es" ? "Sí, eliminar todo" : "Yes, delete everything"}
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setShowResetDataConfirm(false)}
                  >
                    <X className="h-4 w-4" />
                    {locale === "es" ? "Cancelar" : "Cancel"}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Version Info */}
        <div className="text-center text-sm text-zinc-500 animate-[fade-in-up_0.4s_ease-out_0.35s_both]">
          <p>Pinguiñoño v1.0.0</p>
          <p className="mt-1">
            {locale === "es" ? "Hecho con ❤️ para la comunidad Linux" : "Made with ❤️ for the Linux community"}
          </p>
        </div>
      </div>
    </div>
  );
}
